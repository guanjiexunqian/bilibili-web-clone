import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { Video } from '../types';
import { VideoCard } from './VideoCard';

interface SearchPageProps {
  query: string;
  videos: Video[];
}

export const SearchPage: React.FC<SearchPageProps> = ({ query, videos }) => {
  const tabs = [
    { label: '综合', active: true },
    { label: '视频', count: '99+' },
    { label: '番剧', count: '3' },
    { label: '影视', count: '1' },
    { label: '直播', count: '99+' },
    { label: '专栏', count: '99+' },
    { label: '用户', count: '99+' },
  ];

  const filters = [
    { label: '综合排序', active: true },
    { label: '最多播放' },
    { label: '最新发布' },
    { label: '最多弹幕' },
    { label: '最多收藏' },
  ];

  return (
    <div className="w-full min-h-screen bg-white animate-fade-in">
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
        
        {/* 1. Center Search Input (In-page) */}
        <div className="flex justify-center mb-8">
           <div className="flex w-full max-w-[600px] h-[40px] items-center relative group">
              <input 
                type="text" 
                defaultValue={query}
                className="flex-1 h-full bg-[#F6F7F8] rounded-l-lg px-4 text-[14px] text-[#18191C] outline-none border border-transparent focus:bg-white focus:border-[#00AEEC] transition-all group-hover:bg-white group-hover:border-gray-300"
              />
              <button className="h-full px-8 bg-[#00AEEC] text-white rounded-r-lg font-medium hover:bg-[#00AEEC]/90 transition-colors text-[14px] tracking-wide">
                搜索
              </button>
           </div>
        </div>

        {/* 2. Tabs Navigation */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-5 overflow-x-auto no-scrollbar">
           {tabs.map((tab, idx) => (
             <div 
               key={idx} 
               className={`pb-3 cursor-pointer text-[14px] flex items-center gap-1 whitespace-nowrap transition-colors relative ${
                 tab.active 
                    ? 'text-[#00AEEC] font-medium' 
                    : 'text-[#61666D] hover:text-[#00AEEC]'
               }`}
             >
               {tab.label}
               {tab.count && <span className="text-[12px] opacity-80 font-normal scale-90">{tab.count}</span>}
               {tab.active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-[#00AEEC] rounded-full"></div>}
             </div>
           ))}
        </div>

        {/* 3. Filter Bar */}
        <div className="flex items-center justify-between mb-6 text-[12px]">
           <div className="flex items-center gap-4">
              {filters.map((filter, idx) => (
                 <button 
                   key={idx} 
                   className={`px-3 py-1.5 rounded-[4px] transition-colors ${
                     filter.active 
                        ? 'bg-[#DCF6FF] text-[#00AEEC]' 
                        : 'text-[#61666D] hover:text-[#00AEEC] hover:bg-gray-100'
                   }`}
                 >
                    {filter.label}
                 </button>
              ))}
           </div>
           
           <button className="flex items-center gap-1 text-[#61666D] hover:text-[#00AEEC] border border-[#E3E5E7] px-3 py-1.5 rounded-[4px] hover:border-[#00AEEC] transition-all">
              <span>更多筛选</span>
              <ChevronDown size={14} />
           </button>
        </div>

        {/* 4. Results Grid */}
        {/* Bilibili Search usually is 5 cols on large screens, similar to home but cleaner */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
           {videos.map((video) => (
             <VideoCard key={video.id} video={video} />
           ))}
           
           {/* Fallback Empty State */}
           {videos.length === 0 && (
             <div className="col-span-full h-[400px] flex flex-col items-center justify-center text-gray-400">
                <Filter size={48} className="mb-4 opacity-20" />
                <p>没有找到相关内容</p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};