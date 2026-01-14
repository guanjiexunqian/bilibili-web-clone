import React from 'react';
import { Flame, Activity, LayoutGrid, BookOpen, Radio, Music, MessageSquare, MonitorPlay } from 'lucide-react';

const categories = [
  "番剧", "国创", "综艺", "动画", "鬼畜", "舞蹈", "娱乐", "科技数码", "美食", "汽车", "体育运动", "VLOG", "人工智能", "户外潮流",
  "电影", "电视剧", "纪录片", "游戏", "音乐", "影视", "知识", "资讯", "小剧场", "时尚美妆", "动物", "绘画", "家装房产", "更多"
];

const rightLinks = [
  { icon: LayoutGrid, text: "专栏" },
  { icon: Activity, text: "活动" },
  { icon: MessageSquare, text: "社区中心" },
  { icon: Radio, text: "直播" },
  { icon: BookOpen, text: "课堂" },
  { icon: Music, text: "新歌热榜" },
];

export const CategoryNav: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12 mb-4">
      <div className="flex gap-4 items-start">
        
        {/* Left Circular Buttons - Fixed Width */}
        <div className="flex gap-6 shrink-0 pt-1 items-start mr-2">
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <div className="w-[46px] h-[46px] rounded-full bg-[#FF9212] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
              <Activity size={24} />
            </div>
            <span className="text-[13px] text-gray-900 font-medium">动态</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <div className="w-[46px] h-[46px] rounded-full bg-[#F07775] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
              <Flame size={24} />
            </div>
            <span className="text-[13px] text-gray-900 font-medium">热门</span>
          </div>
        </div>

        {/* Center Grid - Flexible Width */}
        <div className="flex-1 grid grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-14 gap-y-2.5 gap-x-1 pr-6 border-r border-gray-200/60">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="h-[28px] flex items-center justify-center bg-[#F6F7F8] hover:bg-[#E3E5E7] text-gray-600 hover:text-gray-900 text-[13px] tracking-wide rounded-[4px] transition-colors cursor-pointer select-none"
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Right List - Fixed Grid */}
        <div className="grid grid-cols-3 gap-y-3 gap-x-1 shrink-0 w-[240px]">
           {rightLinks.map((link, idx) => (
             <div key={idx} className="flex items-center justify-end gap-1 text-gray-600 hover:text-[#00AEEC] cursor-pointer text-[13px] group transition-colors">
               <link.icon size={16} className="text-gray-500 group-hover:text-[#00AEEC] transition-colors" />
               <span className="min-w-[4em] text-left">{link.text}</span>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};