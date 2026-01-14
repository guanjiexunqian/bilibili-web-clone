import React from 'react';
import { ChevronRight, Calendar, PlayCircle, Clock } from 'lucide-react';
import { Carousel } from './Carousel';

const ANIME_CAROUSEL = [
  { id: 'a1', title: '葬送的芙莉莲：旅途的终点是起点', imageUrl: 'https://picsum.photos/seed/anime-frieren/1200/400', color: '#333' },
  { id: 'a2', title: '咒术回战：涩谷事变', imageUrl: 'https://picsum.photos/seed/anime-jujutsu/1200/400', color: '#333' },
  { id: 'a3', title: '间谍过家家 Season 2', imageUrl: 'https://picsum.photos/seed/anime-spy/1200/400', color: '#333' },
];

const WEEK_DAYS = [
  { day: '周一', active: false },
  { day: '周二', active: false },
  { day: '周三', active: true },
  { day: '周四', active: false },
  { day: '周五', active: false },
  { day: '周六', active: false },
  { day: '周日', active: false },
];

const RECENT_UPDATES = [
  { title: '实吉小姐想对布丁君说教', ep: '第12话', time: '10:00', cover: 'https://picsum.photos/seed/anime-romance/300/170' },
  { title: '为了在异世界也能抚摸毛茸茸', ep: '第3话', time: '12:30', cover: 'https://picsum.photos/seed/anime-isekai/300/170' },
  { title: '反派千金等级99', ep: '第5话', time: '18:00', cover: 'https://picsum.photos/seed/anime-villainess/300/170' },
  { title: '迷宫饭', ep: '第8话', time: '20:00', cover: 'https://picsum.photos/seed/anime-food/300/170' },
  { title: '金属口红', ep: '第2话', time: '21:30', cover: 'https://picsum.photos/seed/anime-scifi/300/170' },
  { title: '战国妖狐', ep: '第11话', time: '23:00', cover: 'https://picsum.photos/seed/anime-youkai/300/170' },
];

const CATEGORY_ICONS = [
  { name: '连载动画', color: '#FB7299' },
  { name: '完结动画', color: '#00AEEC' },
  { name: '资讯', color: '#FF9212' },
  { name: '官方延伸', color: '#F07775' },
  { name: '新番时间表', color: '#00C0FF' },
  { name: '番剧索引', color: '#976DFF' },
];

export const AnimePage: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12 py-6 animate-fade-in">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

      {/* Top Section: Carousel & Right Side List */}
      <div className="flex flex-col lg:flex-row gap-6 mb-10 h-[380px]">
        {/* Left Carousel */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-md h-full">
          <Carousel items={ANIME_CAROUSEL} />
        </div>
        
        {/* Right Side List (Rankings/Recommendation) */}
        <div className="w-full lg:w-[320px] flex flex-col gap-4 h-full">
          <div className="bg-[#F6F7F8] rounded-xl p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">热门推荐</h3>
              <span className="text-xs text-gray-500 cursor-pointer hover:text-[#00AEEC]">查看更多</span>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 space-y-3 no-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex gap-3 group cursor-pointer">
                  <div className="w-24 h-14 rounded-md overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/anime-rec-${i}/200/120`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between py-0.5">
                    <h4 className="text-[13px] font-medium text-gray-800 leading-tight line-clamp-2 group-hover:text-[#00AEEC] transition-colors">
                      {i % 2 === 0 ? "关于我转生变成史莱姆这档事" : "葬送的芙莉莲：新的旅程开始"}
                    </h4>
                    <span className="text-[11px] text-gray-400">更新至第{12+i}话</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Icons Row */}
      <div className="flex gap-4 md:gap-8 mb-10 justify-center md:justify-start overflow-x-auto py-2">
        {CATEGORY_ICONS.map((cat, idx) => (
           <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group min-w-[60px]">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: cat.color }}
              >
                 <PlayCircle size={24} />
              </div>
              <span className="text-[13px] text-gray-700 font-medium group-hover:text-[#00AEEC]">{cat.name}</span>
           </div>
        ))}
      </div>

      {/* Schedule Section */}
      <div className="mb-10">
         <div className="flex items-center gap-2 mb-6">
            <Calendar className="text-[#FB7299]" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">新番时间表</h2>
            <div className="flex ml-6 bg-[#F1F2F3] rounded-lg p-1">
              {WEEK_DAYS.map((d, i) => (
                <div 
                  key={i} 
                  className={`px-4 py-1.5 rounded-md text-[13px] font-medium cursor-pointer transition-all ${d.active ? 'bg-white text-[#00AEEC] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {d.day}
                </div>
              ))}
            </div>
            <div className="ml-auto flex items-center text-[13px] text-gray-500 hover:text-[#00AEEC] cursor-pointer">
              查看全部 <ChevronRight size={14} />
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RECENT_UPDATES.map((anime, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2 shadow-sm">
                   <img src={anime.cover} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                   <div className="absolute top-1 right-1 bg-[#FB7299] text-white text-[10px] px-1.5 py-0.5 rounded-sm">
                     {anime.time}
                   </div>
                </div>
                <h3 className="text-[14px] text-gray-800 font-medium truncate group-hover:text-[#00AEEC] transition-colors">{anime.title}</h3>
                <p className="text-[12px] text-gray-400 mt-1">更新至 {anime.ep}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Editor's Choice / Feed */}
      <div>
         <div className="flex items-center gap-2 mb-6">
            <PlayCircle className="text-[#00AEEC]" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">编辑推荐</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Array.from({ length: 10 }).map((_, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2 shadow-md">
                     <img src={`https://picsum.photos/seed/anime-editor-${i}/300/400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                     <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <span className="absolute bottom-2 left-2 text-white text-[12px] flex items-center gap-1">
                        <PlayCircle size={12} /> {Math.floor(Math.random() * 500)}万
                     </span>
                  </div>
                  <h3 className="text-[14px] text-gray-800 font-medium line-clamp-1 group-hover:text-[#00AEEC] transition-colors">
                     {['无职转生', '鬼灭之刃', '进击的巨人', '火影忍者', '死神'][i % 5]}：特别篇章 {i+1}
                  </h3>
                  <p className="text-[12px] text-gray-400 mt-1">全24话</p>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};