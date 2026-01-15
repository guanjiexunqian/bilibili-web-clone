import React from 'react';
import { ArrowUp, RefreshCw, Headphones, Smartphone, ChevronUp } from 'lucide-react';
import { Page } from '../types';

interface ElevatorProps {
  onNavigate: (page: Page) => void;
  onRefresh: () => void;
  onScrollTop: () => void;
  currentPage: Page;
  isRefreshing?: boolean;
}

export const Elevator: React.FC<ElevatorProps> = ({ onNavigate, onRefresh, onScrollTop, currentPage, isRefreshing }) => {
  const navItems = [
    { id: 'live', label: '直播', page: 'live' },
    { id: 'anime', label: '番剧', page: 'anime' },
    { id: 'game', label: '游戏', page: 'game' },
    { id: 'manga', label: '漫画', page: 'manga' },
    { id: 'dynamic', label: '动态', page: 'dynamic' },
  ] as const;

  return (
    <>
      {/* 
        DESKTOP ELEVATOR (Wide Screen) 
        Positioning: Fixed relative to the viewport center.
        left-1/2 + ml-[860px] places it just to the right of the 1700px content container (850px half-width + 10px gap).
      */}
      <div className="hidden 2xl:flex fixed left-1/2 ml-[860px] top-[230px] z-50 flex-col gap-3 animate-in fade-in slide-in-from-right-10 duration-500">
          
          {/* Navigation Section */}
          <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100/80 p-1.5 flex flex-col items-center w-[54px] overflow-hidden">
             {navItems.map((item) => (
                <div 
                   key={item.id}
                   onClick={() => onNavigate(item.page)}
                   className={`w-full py-2.5 text-center text-[13px] rounded cursor-pointer transition-all duration-200 mb-0.5 last:mb-0 font-medium ${
                      currentPage === item.page 
                        ? 'bg-[#00AEEC] text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#00AEEC]'
                   }`}
                >
                   {item.label}
                </div>
             ))}
          </div>

          {/* Utilities Section */}
          <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100/80 p-2 flex flex-col items-center gap-1 w-[54px]">
             
             {/* Refresh */}
             <div 
                className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-600 hover:text-[#00AEEC] group w-full py-1" 
                onClick={onRefresh}
             >
                <RefreshCw size={18} className={`transition-transform duration-700 ease-in-out ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} />
                <span className="text-[11px] scale-90">刷新</span>
             </div>

             <div className="w-[30px] h-[1px] bg-gray-100 my-1"></div>
             
             {/* Support */}
             <div className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-600 hover:text-[#00AEEC] w-full py-1">
                <Headphones size={18} />
                <span className="text-[11px] scale-90">客服</span>
             </div>

             {/* App Download (Optional) */}
             <div className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-600 hover:text-[#00AEEC] w-full py-1 group relative">
                <Smartphone size={18} />
                <span className="text-[11px] scale-90">APP</span>
                {/* Tooltip */}
                <div className="absolute right-[60px] top-0 bg-white shadow-lg p-2 rounded-lg hidden group-hover:block whitespace-nowrap text-xs">
                    扫码下载客户端
                </div>
             </div>

             <div className="w-[30px] h-[1px] bg-gray-100 my-1"></div>

             {/* Top */}
             <div 
                className="flex flex-col items-center gap-0.5 cursor-pointer text-gray-600 hover:text-[#00AEEC] w-full py-1 bg-gray-50 hover:bg-gray-100 rounded"
                onClick={onScrollTop}
             >
                <ChevronUp size={20} strokeWidth={2.5}/>
                <span className="text-[11px] scale-90 font-bold">顶部</span>
             </div>
          </div>
      </div>

       {/* 
         MOBILE/TABLET FALLBACK (Floating Buttons) 
         Shown when screen width is too small for the side elevator.
       */}
       <div className="2xl:hidden fixed right-6 bottom-24 flex flex-col gap-3 z-50">
          <button 
                onClick={onRefresh}
                className="w-11 h-11 bg-white border border-gray-200 shadow-lg rounded-full flex flex-col items-center justify-center text-gray-700 hover:text-[#00AEEC] active:scale-95 transition-all group"
            >
                <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'} />
            </button>
             <button 
                onClick={onScrollTop}
                className="w-11 h-11 bg-white border border-gray-200 shadow-lg rounded-full flex flex-col items-center justify-center text-gray-700 hover:text-[#00AEEC] hover:-translate-y-1 transition-all"
            >
                <ArrowUp size={20} strokeWidth={2.5} />
            </button>
       </div>
    </>
  );
};