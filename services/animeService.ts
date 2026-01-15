// Service to fetch real anime data from Jikan API (MyAnimeList)

export interface AnimeItem {
  id: number;
  title: string;
  image: string; // Portrait poster
  banner: string; // Landscape banner (trailer thumb)
  score: number;
  episodes: number | null;
  status: string;
  synopsis: string;
  year: number;
}

const BASE_URL = 'https://api.jikan.moe/v4';

// Helper to delay requests slightly to avoid rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getTopAiringAnime = async (): Promise<AnimeItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/top/anime?filter=airing&limit=6`);
    if (!response.ok) {
        console.warn(`Jikan API Error: ${response.status}`);
        return [];
    }
    const data = await response.json();
    
    if (!data || !data.data || !Array.isArray(data.data)) {
        return [];
    }

    return data.data.map((item: any) => ({
      id: item.mal_id,
      title: item.title_japanese || item.title,
      image: item.images?.jpg?.large_image_url || '',
      // Fallback to max res trailer image for landscape, or standard image if trailer missing
      banner: item.trailer?.images?.maximum_image_url || item.images?.jpg?.large_image_url || '', 
      score: item.score,
      episodes: item.episodes,
      status: item.status,
      synopsis: item.synopsis,
      year: item.year
    }));
  } catch (error) {
    console.error("Failed to fetch top anime", error);
    return [];
  }
};

export const getSeasonNow = async (): Promise<AnimeItem[]> => {
  try {
    // Artificial delay to prevent hitting rate limits if called immediately after
    await delay(300); 
    const response = await fetch(`${BASE_URL}/seasons/now?limit=12`);
    if (!response.ok) {
        console.warn(`Jikan API Error: ${response.status}`);
        return [];
    }
    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data)) {
        return [];
    }

    return data.data.map((item: any) => ({
      id: item.mal_id,
      title: item.title_japanese || item.title,
      image: item.images?.jpg?.large_image_url || '',
      banner: item.trailer?.images?.maximum_image_url || item.images?.jpg?.large_image_url || '',
      score: item.score,
      episodes: item.episodes,
      status: item.status,
      synopsis: item.synopsis,
      year: item.year
    }));
  } catch (error) {
    console.error("Failed to fetch seasonal anime", error);
    return [];
  }
};

export const getUpcomingAnime = async (): Promise<AnimeItem[]> => {
    try {
      await delay(600);
      const response = await fetch(`${BASE_URL}/seasons/upcoming?limit=6`);
      if (!response.ok) {
        console.warn(`Jikan API Error: ${response.status}`);
        return [];
      }
      const data = await response.json();

      if (!data || !data.data || !Array.isArray(data.data)) {
        return [];
      }

      return data.data.map((item: any) => ({
        id: item.mal_id,
        title: item.title_japanese || item.title,
        image: item.images?.jpg?.large_image_url || '',
        banner: item.trailer?.images?.maximum_image_url || item.images?.jpg?.large_image_url || '',
        score: item.score,
        episodes: item.episodes,
        status: item.status,
        synopsis: item.synopsis,
        year: item.year
      }));
    } catch (error) {
      console.error("Failed to fetch upcoming anime", error);
      return [];
    }
  };
