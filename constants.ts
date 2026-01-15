import { Video, CarouselItem } from './types';

// ==================================================================================
// Asset Pool (High Availability - Picsum Replaced)
// ==================================================================================
// We have replaced the fragile Bilibili URLs with robust Picsum seeds.
// This guarantees images will load regardless of referrer policies or proxy status.

export const HDSLB_IMAGE_POOL = {
  anime: [
    "https://picsum.photos/seed/anime-frieren/640/360",
    "https://picsum.photos/seed/anime-spy/640/360",
    "https://picsum.photos/seed/anime-oshi/640/360",
    "https://picsum.photos/seed/anime-dungeon/640/360",
    "https://picsum.photos/seed/anime-bocchi/640/360",
    "https://picsum.photos/seed/anime-cyberpunk/640/360",
    "https://picsum.photos/seed/anime-generic1/640/360",
    "https://picsum.photos/seed/anime-art/640/360",
    "https://picsum.photos/seed/japan-street/640/360",
  ],
  gaming: [
    "https://picsum.photos/seed/genshin-impact/640/360",
    "https://picsum.photos/seed/wukong-game/640/360",
    "https://picsum.photos/seed/league-legends/640/360",
    "https://picsum.photos/seed/pubg-game/640/360",
    "https://picsum.photos/seed/star-rail/640/360",
    "https://picsum.photos/seed/naraka-game/640/360",
    "https://picsum.photos/seed/zelda-game/640/360",
    "https://picsum.photos/seed/minecraft-block/640/360",
    "https://picsum.photos/seed/elden-ring/640/360",
  ],
  tech: [
    "https://picsum.photos/seed/technology-desk/640/360",
    "https://picsum.photos/seed/camera-lens/640/360",
    "https://picsum.photos/seed/coding-screen/640/360",
    "https://picsum.photos/seed/science-lab/640/360",
    "https://picsum.photos/seed/hardware-gpu/640/360",
    "https://picsum.photos/seed/programmer/640/360",
    "https://picsum.photos/seed/mobile-phone/640/360",
  ],
  life: [
    "https://picsum.photos/seed/food-delicious/640/360",
    "https://picsum.photos/seed/travel-mountain/640/360",
    "https://picsum.photos/seed/cat-cute/640/360",
    "https://picsum.photos/seed/dog-funny/640/360",
    "https://picsum.photos/seed/diy-craft/640/360",
    "https://picsum.photos/seed/dance-girl/640/360",
    "https://picsum.photos/seed/car-race/640/360",
    "https://picsum.photos/seed/gym-fitness/640/360",
  ],
  // Fallback banners for headers/carousels (Wide Aspect Ratio)
  banners: [
    "https://picsum.photos/seed/banner-art/1600/500",
    "https://picsum.photos/seed/banner-city/1600/500",
    "https://picsum.photos/seed/banner-tech/1600/500",
    "https://picsum.photos/seed/banner-nature/1600/500",
  ]
};

// Generic short video samples for hover preview
const PREVIEW_VIDEOS = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
];

// ==================================================================================
// Mock Data Generators
// ==================================================================================

const TITLES_POOL = [
  "【4K】耗时300天，我用我的世界还原了清明上河图", "这就是中国制造！", "猫咪：我太难了",
  "黑神话：悟空 全收集攻略", "原神4.4版本前瞻总结", "崩坏星穹铁道：流萤", 
  "从零开始的异世界生活", "葬送的芙莉莲 28话", "我推的孩子", 
  "LPL春季赛：WBG vs BLG", "Faker名人堂皮肤鉴赏", "CSGO：简单开个箱",
  "如何用Python写一个B站爬虫", "35岁程序员的真实生活", "RTX 5090性能预测",
  "极光下的冰岛，美得窒息", "特种兵式旅游", "去有风的地方",
  "2025年了，显卡降价了吗？", "华强北能造出Vision Pro吗？", "苹果发布会前瞻",
  "周杰伦新歌解析", "【翻唱】恋爱循环", "贝斯手：孤独摇滚",
  "试图教会猫咪后空翻", "修狗能有什么坏心眼呢", "熊猫：我就是国宝",
  "阅片无数，这几部神作你一定没看过", "这个特效我跪着看完", "全程高能！建议佩戴耳机",
  "假如甄嬛传是悬疑片", "【鬼畜】全员恶人", "改革春风吹满地",
  "罗翔老师：张三的传奇一生", "考研政治冲刺", "英语口语速成",
  "手工耿：又做了一个废品", "【何同学】我做了一个透明电视", "影视飓风画质提升",
  "绝地求生：究极老六", "永劫无间：太刀颠勺教学", "我的世界：100天生存",
  "舌尖上的中国：深夜放毒", "街头美食挑战", "自制惠灵顿牛排",
];

const UPLOADERS_POOL = [
  "老师好我叫何同学", "影视飓风", "极客湾Geekerwan", "罗翔说刑法", "老番茄", "某幻君", 
  "花少北", "LexBurner", "泛式", "凉风Kaze", "硬核的半佛仙人", "稚晖君", 
  "手工耿", "盗月社食遇记", "绵羊料理", "日食记", "木鱼水心", "小约翰可汗",
  "无穷小亮的科普日常", "毕导THU", "在此见宝", "黑桐谷歌", "渗透之C君",
  "纯黑", "依然小智", "以前是小庄", "周六野Zoey", "帕梅拉Pamela",
  "观察者网", "央视新闻", "共青团中央", "哔哩哔哩赛事", "英雄联盟赛事",
];

/**
 * Helper to get a random item from an array
 */
const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/**
 * Helper to get a random image from our robust pool
 */
export const getRandomCover = (category?: keyof typeof HDSLB_IMAGE_POOL): string => {
  if (category && HDSLB_IMAGE_POOL[category]) {
    return getRandom(HDSLB_IMAGE_POOL[category]);
  }
  // If no category specific, pick from any category except banners
  const allImages = [
    ...HDSLB_IMAGE_POOL.anime,
    ...HDSLB_IMAGE_POOL.gaming,
    ...HDSLB_IMAGE_POOL.tech,
    ...HDSLB_IMAGE_POOL.life
  ];
  return getRandom(allImages);
};

/**
 * THE DATA FACTORY
 * Generates 'count' number of realistic video objects.
 */
export const generateVideos = (count: number, startIndex: number = 0): Video[] => {
  return Array.from({ length: count }).map((_, i) => {
    const id = `vid-${Date.now()}-${startIndex + i}-${Math.random()}`;
    // Randomize category influence
    const r = Math.random();
    let category: keyof typeof HDSLB_IMAGE_POOL = 'anime';
    if (r > 0.25) category = 'gaming';
    if (r > 0.50) category = 'tech';
    if (r > 0.75) category = 'life';

    return {
      id,
      title: getRandom(TITLES_POOL),
      uploader: getRandom(UPLOADERS_POOL),
      views: `${(Math.random() * 500).toFixed(1)}万`,
      date: Math.random() > 0.8 ? '昨天' : `${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      duration: `${Math.floor(Math.random() * 20)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      coverUrl: getRandomCover(category),
      previewUrl: Math.random() > 0.3 ? getRandom(PREVIEW_VIDEOS) : undefined, // 70% chance to have preview
      isAd: Math.random() > 0.95 // 5% chance of being an ad (though we don't render it differently yet)
    };
  });
};

// ==================================================================================
// Initial Data (Bootstrapped)
// ==================================================================================

export const INITIAL_VIDEOS: Video[] = generateVideos(20);

export const CAROUSEL_ITEMS: CarouselItem[] = [
  { 
    id: 'c1', 
    title: '葬送的芙莉莲：旅途的终点是起点', 
    imageUrl: 'https://picsum.photos/seed/frieren-banner/1000/500', 
    color: '#1a2b3c' 
  },
  { 
    id: 'c2', 
    title: '崩坏：星穹铁道 2.0版本上线', 
    imageUrl: 'https://picsum.photos/seed/starrail-banner/1000/500', 
    color: '#3c2b1a' 
  },
  { 
    id: 'c3', 
    title: '2024 LPL春季赛', 
    imageUrl: 'https://picsum.photos/seed/lpl-banner/1000/500', 
    color: '#654321' 
  },
  { 
    id: 'c4', 
    title: '间谍过家家 Season 2', 
    imageUrl: 'https://picsum.photos/seed/spy-banner/1000/500', 
    color: '#abcdef' 
  },
];