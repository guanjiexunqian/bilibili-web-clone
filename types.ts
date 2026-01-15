export interface Video {
  id: string;
  title: string;
  uploader: string;
  views: string;
  date: string;
  duration: string;
  coverUrl: string;
  previewUrl?: string; // New field for hover previews
  isAd?: boolean;
}

export interface Category {
  name: string;
  link?: string;
}

export interface CarouselItem {
  id: string;
  title: string;
  imageUrl: string;
  color: string;
}

export type Page = 'home' | 'anime' | 'live' | 'game' | 'manga' | 'dynamic' | 'search';
