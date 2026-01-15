import React from 'react';
import { Flame, Activity, LayoutGrid, BookOpen, Radio, Music, MessageSquare } from 'lucide-react';
import { Page } from '../types';

interface CategoryNavProps {
    onNavigate?: (page: Page) => void;
}

const categories = [
  "番剧", "国创", "综艺", "动画", "鬼畜", "舞蹈", "娱乐", "科技", "美食", "汽车", "运动", "VLOG", "AI", "生活",
  "电影", "电视剧", "纪录片", "游戏", "音乐", "影视", "知识", "资讯", "搞笑", "时尚", "动物", "绘画", "更多"
];

const rightLinks = [
  { icon: LayoutGrid, text: "专栏" },
  { icon: Activity, text: "活动" },
  { icon: MessageSquare, text: "社区" },
  { icon: Radio, text: "直播" },
  { icon: BookOpen, text: "课堂" },
  { icon: Music, text: "热榜" },
];

export const CategoryNav: React.FC<CategoryNavProps> = ({ onNavigate }) => {
  return (
    <div className="w-full px-4 md:px-6 mb-2">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        
        {/* Top Row on Mobile: Icons + Scrollable List */}
        <div className="w-full flex gap-4 items-center overflow-hidden">
            
            {/* Left Circular Buttons - Fixed Width */}
            <div className="flex gap-4 shrink-0 pt-1 items-start mr-2">
              <div 
                 className="flex flex-col items-center gap-1.5 cursor-pointer group"
                 onClick={() => onNavigate && onNavigate('dynamic')}
              >
                <div className="w-[46px] h-[46px] rounded-full bg-[#FF9212] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
                  <Activity size={24} />
                </div>
                <span className="text-[13px] text-gray-900 font-medium group-hover:text-[#FF9212]">动态</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-[46px] h-[46px] rounded-full bg-[#F07775] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
                  <Flame size={24} />
                </div>
                <span className="text-[13px] text-gray-900 font-medium group-hover:text-[#F07775]">热门</span>
              </div>
            </div>

            {/* 
                Center Grid/List 
                Mobile: Horizontal Scroll (no-scrollbar for clean look)
                Desktop: Responsive Grid
            */}
            <div className="flex-1 overflow-x-auto md:overflow-visible no-scrollbar">
                <div className="flex md:grid md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-14 gap-y-2.5 gap-x-2 md:pr-6 md:border-r border-gray-200/60 pt-1 pb-2 md:pb-0 w-max md:w-full">
                  {categories.map((cat, idx) => (
                    <div 
                      key={idx} 
                      className={`h-[28px] w-[60px] md:w-auto flex shrink-0 items-center justify-center text-[13px] tracking-wide rounded-[4px] transition-colors cursor-pointer select-none border border-transparent
                          ${cat === '更多' ? 'text-gray-400 hover:text-gray-600' : 'bg-[#F6F7F8] hover:bg-[#E3E5E7] text-gray-600 hover:text-gray-900'}
                      `}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
            </div>
        </div>

        {/* Right List - Hidden on small mobile, visible on md+ */}
        <div className="hidden md:grid grid-cols-3 gap-y-3 gap-x-4 shrink-0 w-[220px] pt-1 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
           {rightLinks.map((link, idx) => (
             <div key={idx} className="flex items-center justify-start gap-1.5 text-gray-600 hover:text-[#00AEEC] cursor-pointer text-[13px] group transition-colors">
               <link.icon size={18} className="text-gray-500 group-hover:text-[#00AEEC] transition-colors" />
               <span>{link.text}</span>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};