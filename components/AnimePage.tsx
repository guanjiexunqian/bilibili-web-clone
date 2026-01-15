import React, { useEffect, useState, useMemo } from 'react';
import { ChevronRight, Calendar, PlayCircle, Clock, Star, Heart, Share2, TrendingUp, Filter, BarChart3, RefreshCw, Flame } from 'lucide-react';
import { getTopAiringAnime, getSeasonNow, getUpcomingAnime, AnimeItem } from '../services/animeService';
import { LazyImage } from './LazyImage';

const WEEK_DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const CATEGORY_ICONS = [
  { name: '连载动画', color: '#FB7299' },
  { name: '完结动画', color: '#00AEEC' },
  { name: '资讯', color: '#FF9212' },
  { name: '官方延伸', color: '#F07775' },
  { name: '新番时间表', color: '#00C0FF' },
  { name: '番剧索引', color: '#976DFF' },
];

const INDEX_TAGS = {
  style: ['原创', '漫画改', '小说改', '游戏改', '特摄', '布袋戏'],
  genre: ['热血', '穿越', '奇幻', '战斗', '搞笑', '日常', '科幻', '治愈', '校园', '萌系'],
  year: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '全部']
};

export const AnimePage: React.FC = () => {
  const [heroAnimes, setHeroAnimes] = useState<AnimeItem[]>([]);
  const [seasonData, setSeasonData] = useState<AnimeItem[]>([]);
  const [upcomingData, setUpcomingData] = useState<AnimeItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Hero Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Schedule State: Default to current day (0=Mon, 6=Sun)
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const [selectedDay, setSelectedDay] = useState(todayIndex);

  // Index State
  const [activeTags, setActiveTags] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [top, season, upcoming] = await Promise.all([
        getTopAiringAnime(),
        getSeasonNow(),
        getUpcomingAnime()
      ]);

      setHeroAnimes(top.slice(0, 6)); // Get 6 for hero + ranking
      setSeasonData(season); // Keep all for schedule
      setUpcomingData(upcoming);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Auto-rotate Hero Slide
  useEffect(() => {
    if (heroAnimes.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroAnimes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroAnimes]);

  const scheduleVideos = useMemo(() => {
    if (seasonData.length === 0) return [];
    return [...seasonData]
        .sort((a, b) => (a.id + selectedDay) % 3 - (b.id + selectedDay) % 3)
        .slice(0, 10);
  }, [seasonData, selectedDay]);

  // Mock "Chinese Anime" by slicing data differently
  const guochuanVideos = useMemo(() => {
      return [...seasonData].reverse().slice(0, 8);
  }, [seasonData]);

  const handleTagClick = (category: string, tag: string) => {
      setActiveTags(prev => ({
          ...prev,
          [category]: prev[category] === tag ? '' : tag
      }));
  };

  if (loading) {
     return (
        <div className="w-full h-[600px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#FB7299] border-t-transparent rounded-full animate-spin"></div>
                <div className="text-gray-500 text-sm">正在加载番剧数据...</div>
            </div>
        </div>
     )
  }

  const currentHero = heroAnimes[activeSlide];

  return (
    <div className="w-full relative min-h-screen bg-white pb-12 font-sans">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>

      {/* =========================================================================
          HERO SECTION (Step 1)
      ========================================================================= */}
      {currentHero && (
        <div className="relative w-full h-[380px] md:h-[440px] mb-6 group overflow-hidden bg-gray-900">
            {/* Background Layer */}
            {heroAnimes.map((anime, idx) => (
                <div 
                    key={anime.id} 
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <LazyImage 
                        src={anime.banner || anime.image} 
                        alt="bg" 
                        className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>
            ))}

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 max-w-[1500px] mx-auto px-4 md:px-6 flex flex-col justify-end pb-6">
                <div className="flex items-end justify-between gap-8">
                    {/* Left: Info Text */}
                    <div className="flex-1 max-w-[700px] mb-2 animate-fade-in text-white drop-shadow-md">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight line-clamp-1">
                            {currentHero.title}
                        </h1>
                        <div className="flex items-center gap-3 text-sm text-gray-200 mb-3 font-medium">
                            <span className="text-[#FB7299]">{currentHero.year}</span>
                            <span className="opacity-60">|</span>
                            <span>{currentHero.status === 'Currently Airing' ? '连载中' : '已完结'}</span>
                            <span className="opacity-60">|</span>
                            <span>{currentHero.episodes ? `全${currentHero.episodes}话` : '更新中'}</span>
                            <span className="opacity-60">|</span>
                            <span>系列追番 1283万</span>
                        </div>
                        <p className="text-[13px] md:text-[14px] text-gray-300 leading-relaxed line-clamp-2 max-w-[500px]">
                            {currentHero.synopsis || "暂无简介。"}
                        </p>
                    </div>

                    {/* Right: Thumbnail Carousel */}
                    <div className="hidden lg:flex gap-3 mb-1">
                        {heroAnimes.slice(0, 6).map((anime, idx) => (
                            <div 
                                key={anime.id} 
                                onClick={() => setActiveSlide(idx)}
                                className={`relative w-[140px] h-[80px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-[2px] ${
                                    activeSlide === idx 
                                    ? 'border-[#FB7299] -translate-y-3 shadow-[0_4px_12px_rgba(0,0,0,0.5)]' 
                                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-white/50'
                                }`}
                            >
                                <LazyImage src={anime.banner || anime.image} alt={anime.title} className="w-full h-full object-cover" />
                                {activeSlide !== idx && <div className="absolute inset-0 bg-black/40"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* =========================================================================
          CONTENT BODY
      ========================================================================= */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">

        {/* Category Icons (Step 1) */}
        <div className="flex gap-4 md:gap-10 mb-8 overflow-x-auto py-2 no-scrollbar justify-start border-b border-gray-100 pb-6">
            {CATEGORY_ICONS.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group min-w-[56px]">
                <div 
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: cat.color }}
                >
                    <PlayCircle size={22} />
                </div>
                <span className="text-[12px] text-[#18191C] font-medium group-hover:text-[#00AEEC] whitespace-nowrap">{cat.name}</span>
            </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
            
            {/* >>> LEFT COLUMN (Feed) <<< */}
            <div className="flex-1 min-w-0">
                
                {/* 1. Schedule Section (Step 2) */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-[#FB7299]" size={28} />
                            <h2 className="text-2xl font-bold text-gray-900">新番时间表</h2>
                        </div>
                        <div className="flex items-center gap-1 md:gap-4 text-[14px] overflow-x-auto no-scrollbar w-full md:w-auto">
                            {WEEK_DAYS.map((day, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setSelectedDay(idx)}
                                    className={`cursor-pointer transition-all px-3 py-1 rounded-full whitespace-nowrap text-[13px] ${
                                        selectedDay === idx 
                                        ? 'bg-[#00AEEC] text-white font-bold shadow-sm' 
                                        : 'text-gray-500 hover:text-[#00AEEC] hover:bg-gray-100'
                                    }`}
                                >
                                    {day}
                                </div>
                            ))}
                            <div className="w-[1px] h-4 bg-gray-300 mx-2 hidden md:block"></div>
                            <div className="flex items-center text-[#61666D] hover:text-[#00AEEC] cursor-pointer whitespace-nowrap ml-auto md:ml-0 text-[12px]">
                                查看全部 <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-x-5 gap-y-6">
                        {scheduleVideos.map((anime, idx) => (
                        <div key={`${anime.id}-${selectedDay}`} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                            <div className="relative aspect-[16/9] rounded-[6px] overflow-hidden mb-2.5 shadow-[0_0_2px_rgba(0,0,0,0.15)] bg-gray-100">
                                <LazyImage src={anime.banner} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute top-0 right-0 bg-[#FB7299] text-white text-[10px] px-1.5 py-0.5 rounded-bl-[6px] z-10 font-medium">
                                    {anime.status === 'Currently Airing' ? '更新中' : '已完结'}
                                </div>
                                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                     <span className="text-white text-[10px]">{(Math.random() * 500).toFixed(1)}万播放</span>
                                </div>
                            </div>
                            <h3 className="text-[14px] text-[#18191C] font-medium truncate group-hover:text-[#00AEEC] transition-colors pr-2 leading-snug">
                                {anime.title}
                            </h3>
                            <p className="text-[12px] text-[#9499A0] mt-1 flex items-center justify-between">
                                <span>更新至第 {anime.episodes || '?'} 话</span>
                            </p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* 2. Chinese Anime (Guochuan) - Added Step 4 */}
                <div className="mb-12">
                     <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Flame className="text-[#FB7299]" size={28} />
                            <h2 className="text-2xl font-bold text-gray-900">国创·国产动画</h2>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-gray-500 cursor-pointer hover:text-[#00AEEC] group select-none">
                            更多 <ChevronRight size={14} />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
                        {guochuanVideos.map((anime, i) => (
                            <div key={i} className="group cursor-pointer flex flex-col gap-2">
                                 <div className="relative aspect-video rounded-[6px] overflow-hidden shadow-sm bg-gray-100">
                                     <LazyImage src={anime.banner || anime.image} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                     <div className="absolute top-0 left-0 bg-[#FB7299] text-white text-[10px] px-1.5 py-0.5 rounded-br-[6px] z-10">
                                         独家
                                     </div>
                                 </div>
                                 <div>
                                     <h3 className="text-[14px] text-[#18191C] font-medium truncate group-hover:text-[#00AEEC] transition-colors">
                                        {anime.title}
                                     </h3>
                                     <p className="text-[12px] text-[#9499A0] mt-0.5">
                                        {anime.year}年 · 原创
                                     </p>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Editor's Choice (Step 2) */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <PlayCircle className="text-[#00AEEC]" size={28} />
                            <h2 className="text-2xl font-bold text-gray-900">编辑推荐</h2>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-gray-500 cursor-pointer hover:text-[#00AEEC] group select-none">
                            <RefreshCw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                            换一换
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
                        {upcomingData.map((anime, i) => (
                        <div key={anime.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden mb-2.5 shadow-[0_0_2px_rgba(0,0,0,0.15)] bg-gray-100">
                                <LazyImage src={anime.image} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                                <span className="absolute bottom-2 left-2 text-white text-[12px] flex items-center gap-1 z-10 font-bold">
                                    {anime.score ? (
                                        <><Star size={10} className="fill-[#FFB027] text-[#FFB027]" /> {anime.score}</>
                                    ) : '热播'}
                                </span>
                            </div>
                            <h3 className="text-[14px] text-[#18191C] font-medium line-clamp-1 group-hover:text-[#00AEEC] transition-colors leading-normal">
                                {anime.title}
                            </h3>
                            <p className="text-[12px] text-[#9499A0] mt-1 line-clamp-1">
                                {anime.synopsis ? anime.synopsis : `${anime.year}年上映`}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* 4. Ranking Section (Step 3) */}
                <div className="w-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-[#18191C]">热门番剧榜</h3>
                        <div className="text-[12px] text-[#00AEEC] cursor-pointer flex items-center hover:opacity-80 border border-[#00AEEC] px-3 py-1 rounded-[4px]">
                            更多 <ChevronRight size={10} />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-6">
                        {heroAnimes.concat(seasonData).slice(0, 6).map((anime, idx) => (
                            <div key={idx} className="group cursor-pointer relative">
                                <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden mb-2 shadow-[0_0_2px_rgba(0,0,0,0.15)] bg-gray-100">
                                    <LazyImage src={anime.image} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute top-0 left-0 p-1 z-10">
                                        <span className={`text-[20px] font-black italic leading-none drop-shadow-md ${
                                            idx === 0 ? 'text-[#FF473D]' : idx === 1 ? 'text-[#FF814A]' : idx === 2 ? 'text-[#FFBB29]' : 'text-white/80'
                                        }`}>
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-100 flex items-end p-2">
                                        <span className="text-white text-[10px] font-medium">
                                            {idx === 0 ? '592.1万追番' : idx === 1 ? '300万追番' : `${anime.year}年`}
                                        </span>
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[14px] text-[#18191C] font-medium truncate group-hover:text-[#00AEEC] transition-colors">
                                        {anime.title}
                                    </div>
                                    {idx < 3 && <div className="text-[12px] text-[#9499A0] mt-0.5 flex items-center gap-1"><TrendingUp size={12} className="text-[#FF473D]"/> 综合高分</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* >>> RIGHT COLUMN (Sidebar) - Hidden on mobile <<< */}
            <div className="hidden lg:flex w-[320px] shrink-0 flex-col gap-8">
                
                {/* 1. Index Section (Sticky Step 4) */}
                <div className="bg-white p-0 rounded-lg sticky top-[20px] z-20">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#18191C]">索引</h3>
                        <div className="text-[12px] text-[#9499A0] cursor-pointer flex items-center hover:text-[#00AEEC] gap-1">
                            <Filter size={12} /> 筛选
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        {/* Custom layout for Index */}
                        <div className="flex items-start gap-3 text-[12px]">
                             <span className="shrink-0 text-[#18191C] font-bold mt-1.5 w-8">追番</span>
                             <div className="flex flex-wrap gap-2">
                                 <span className="px-3 py-1.5 rounded-full bg-[#00AEEC] text-white cursor-pointer">追番人数</span>
                                 <span className="px-3 py-1.5 rounded-full bg-[#F6F7F8] text-[#61666D] hover:bg-[#E3E5E7] cursor-pointer transition-colors">最高评分</span>
                                 <span className="px-3 py-1.5 rounded-full bg-[#F6F7F8] text-[#61666D] hover:bg-[#E3E5E7] cursor-pointer transition-colors">更新时间</span>
                             </div>
                        </div>

                        {Object.entries(INDEX_TAGS).map(([key, tags]) => (
                            <div key={key} className="flex items-start gap-3 text-[12px]">
                                <span className="shrink-0 text-[#18191C] font-bold mt-1.5 w-8">
                                    {key === 'style' ? '风格' : key === 'genre' ? '类型' : '年份'}
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {tags.slice(0, 8).map((tag, i) => (
                                        <span 
                                            key={i}
                                            onClick={() => handleTagClick(key, tag)}
                                            className={`px-2.5 py-1 rounded-[4px] cursor-pointer transition-colors border border-transparent ${
                                                activeTags[key] === tag || (i === -1 && !activeTags[key])
                                                ? 'bg-[#00AEEC] text-white' 
                                                : 'bg-transparent text-[#61666D] hover:text-[#00AEEC]'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Ad / Banner Placeholder (To fill space) */}
                <div className="w-full h-[180px] rounded-lg overflow-hidden cursor-pointer relative group shadow-sm hover:shadow-md transition-shadow mt-4">
                    <LazyImage src={heroAnimes[2]?.image || "https://picsum.photos/seed/ad-anime-sidebar/320/180"} alt="ad" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-black/40 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/20">广告</div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-sm font-bold line-clamp-1">会员购：手办模型热销中</p>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};
