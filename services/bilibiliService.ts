import { Video } from '../types';

// ============================================================================
// "Backend" Service Adapter
// ============================================================================
// This service acts as the Python backend logic described in the requirements.
// It handles:
// 1. Fetching data (Simulating requests.get)
// 2. Bypassing CORS (Simulating server-side request)
// 3. Data Mapping (Cleaning Bilibili raw JSON to our App Schema)

// Target API: Bilibili Popular/Ranking API
const API_URL = 'https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all';

// Bilibili Image Suffix: Resizes to 16:9 landscape and converts to WebP
// This drastically reduces bandwidth and improves load times
const BILIBILI_IMG_SUFFIX = '@672w_378h_1c.webp';

/**
 * Tries multiple CORS proxies to ensure data delivery.
 * Public proxies can be unstable, so redundancy is key.
 */
const fetchWithProxy = async (targetUrl: string): Promise<any> => {
    // List of proxies to try in order
    const proxies = [
        // Primary: AllOrigins (Raw mode) - Very reliable for JSON
        (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        // Backup 1: Corsproxy.io - High performance
        (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
        // Backup 2: Thingproxy - Good fallback
        (url: string) => `https://thingproxy.freeboard.io/fetch/${url}`
    ];

    for (const proxyGenerator of proxies) {
        try {
            const proxyUrl = proxyGenerator(targetUrl);
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
                // If 4xx or 5xx, try next proxy
                console.warn(`Proxy error ${response.status} for ${proxyUrl}`);
                continue;
            }

            const data = await response.json();
            // Basic validation to ensure we got a valid JSON (not an HTML error page from the proxy)
            if (data && (data.code === 0 || data.data)) {
                return data;
            }
        } catch (e) {
            console.warn(`Fetch failed for proxy: ${proxyGenerator(targetUrl).split('?')[0]}`, e);
            // Continue to next proxy
        }
    }
    
    throw new Error('All proxies failed to fetch data');
};

export const fetchRealBilibiliData = async (): Promise<Video[]> => {
  try {
    // Step 1: Request Data with Fallback
    const json = await fetchWithProxy(API_URL);

    // Step 2: Validate Response
    if (json?.code === 0 && json?.data?.list) {
      
      // Step 3: Data Mapping (The Core Logic)
      // Converting Bilibili Schema -> App Schema
      return json.data.list.map((item: any) => {
        
        // Extract fields safely
        const rawStat = item.stat || {};
        const rawOwner = item.owner || {};

        // Process cover URL safely
        let cleanCover = item.pic?.replace('http://', 'https://') || '';
        // Only append suffix if it's a raw image (doesn't already have params)
        if (cleanCover && !cleanCover.includes('@')) {
            cleanCover += BILIBILI_IMG_SUFFIX;
        }

        return {
            // MAPPING RULE: B站字段 bvid -> 前端字段 id
            id: item.bvid,

            // MAPPING RULE: B站字段 title -> 前端字段 title
            title: item.title,

            // MAPPING RULE: B站字段 owner.name -> 前端字段 uploader
            uploader: rawOwner.name || '未知UP主',

            // MAPPING RULE: B站字段 stat.view -> 前端字段 views (Formatted)
            views: formatCount(rawStat.view),

            // MAPPING RULE: B站字段 stat.danmaku -> 前端字段 danmaku (Formatted)
            danmaku: formatCount(rawStat.danmaku),

            // MAPPING RULE: B站字段 pubdate -> 前端字段 date (Formatted Timestamp)
            date: formatTimestamp(item.pubdate),

            // MAPPING RULE: B站字段 duration -> 前端字段 duration (Formatted MM:SS)
            duration: formatDuration(item.duration),

            // MAPPING RULE: B站字段 pic -> 前端字段 coverUrl
            coverUrl: cleanCover,

            // Extra fields
            previewUrl: undefined, // Ranking API doesn't return video preview streams
            isAd: false
        };
      });
    }
    return [];
  } catch (e) {
    console.error("Failed to fetch real Bilibili data:", e);
    return [];
  }
};

// --- Helper Functions (Simulating Python Utility Functions) ---

/**
 * Formats numbers like 12345 to "1.2万"
 */
const formatCount = (count: number | undefined) => {
  if (!count) return '0';
  if (count >= 100000000) {
      return `${(count / 100000000).toFixed(1)}亿`;
  }
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}万`;
  }
  return String(count);
};

/**
 * Formats seconds (305) to duration string ("05:05")
 */
const formatDuration = (seconds: number) => {
  if (!seconds) return '00:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
};

/**
 * Formats Unix timestamp to relative date ("Yesterday") or Date string ("3-24")
 */
const formatTimestamp = (ts: number) => {
    if (!ts) return '';
    const date = new Date(ts * 1000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    // If within 24 hours, show "Today" logic
    if (diffHours < 24 && now.getDate() === date.getDate()) {
        return '今天';
    } else if (diffHours < 48) {
        return '昨天';
    } else {
        return `${date.getMonth() + 1}-${date.getDate()}`;
    }
}
