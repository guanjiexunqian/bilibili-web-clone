import React, { useState } from 'react';
import { Search, MonitorPlay, Download, History, BookOpen, Upload, User, ChevronRight, ChevronLeft, MessageSquare, ThumbsUp, Flame } from 'lucide-react';
import { LazyImage } from './LazyImage';
import { Page } from '../types';

interface MangaPageProps {
  onNavigate: (page: Page) => void;
}

const MANGA_NAV = ["首页", "分类", "更新", "排行榜"];
const GENRES = ["热血", "古风", "玄幻", "奇幻", "悬疑", "都市", "历史", "武侠仙侠", "游戏竞技", "悬疑灵异", "架空", "青春", "西幻", "现代", "全部 >"];

const HERO_ITEMS = [
  { id: 1, title: "回归后的魔王变善良了", subtitle: "魔王转职奶爸？", img: "https://picsum.photos/seed/demon-lord-dad/300/400" },
  { id: 2, title: "连载5周年", subtitle: "热血感动常在", img: "https://picsum.photos/seed/manga-anniversary/300/400" },
  { id: 3, title: "小智怪谈", subtitle: "细思极恐", img: "https://picsum.photos/seed/horror-manga/300/400" },
  { id: 4, title: "强度拉满的韩漫修罗场", subtitle: "完蛋，我被美女包围了", desc: "注定被反派宠爱的命运，来自反派大姐姐的危险奖励！上不封...", img: "https://picsum.photos/seed/manhwa-romance/500/600", active: true },
  { id: 5, title: "圣女的魔力是万能的", subtitle: "异世界慢生活", img: "https://picsum.photos/seed/saint-magic/300/400" },
  { id: 6, title: "神秘降临", subtitle: "国漫新作", img: "https://picsum.photos/seed/mystery-comic/300/400" },
  { id: 7, title: "我推的孩子", subtitle: "演艺圈黑暗面", img: "https://picsum.photos/seed/idol-anime/300/400" },
];

const RIGHT_SIDEBAR_MENU = [
  { text: "为你推荐", active: true },
  { text: "畅销热门", active: false },
  { text: "全网热议", active: false },
  { text: "完结佳作", active: false },
  { text: "排行榜", active: false },
];

export const MangaPage: React.FC<MangaPageProps> = ({ onNavigate }) => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(3);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="w-full bg-white h-[64px] flex items-center justify-center px-4 shadow-sm relative z-50">
         <div className="max-w-[1700px] w-full flex items-center justify-between">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                   <div className="w-9 h-9 rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                        <LazyImage src="https://picsum.photos/seed/manga-logo-placeholder/100/100" alt="Logo" className="w-full h-full object-cover" /> 
                   </div>
                   <div className="flex flex-col">
                       <span className="font-bold text-[16px] leading-tight text-gray-800">哔哩哔哩漫画</span>
                   </div>
               </div>
               
               <div className="flex items-center text-[14px] text-gray-700 font-medium ml-2">
                  <div className="flex items-center gap-1 hover:text-[#00AEEC] cursor-pointer text-gray-500 mr-6" onClick={() => onNavigate('home')}>
                      <MonitorPlay size={14}/>
                      主站
                  </div>
                  {MANGA_NAV.slice(1).map((item, idx) => (
                    <a key={idx} href="#" className="hover:text-[#00AEEC] transition-colors mr-6">{item}</a>
                  ))}
               </div>
            </div>
            {/* ...search... */}
         </div>
      </div>

      <div className="bg-[#121212] w-full h-[460px] relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-30">
             <LazyImage src={HERO_ITEMS[activeHeroIndex].img} alt="bg" className="w-full h-full object-cover filter blur-3xl scale-110" />
         </div>
         
         <div className="max-w-[1700px] w-full px-4 relative z-10 flex items-center justify-center gap-4 h-[380px]">
             {HERO_ITEMS.map((item, index) => {
                 const isActive = index === activeHeroIndex;
                 const distance = Math.abs(index - activeHeroIndex);
                 if (distance > 3) return null;

                 return (
                     <div 
                        key={item.id} 
                        onClick={() => setActiveHeroIndex(index)}
                        className={`relative transition-all duration-500 ease-out cursor-pointer rounded-lg overflow-hidden shadow-2xl ${isActive ? 'w-[600px] h-[360px] flex' : 'w-[220px] h-[300px] opacity-60 hover:opacity-100'}`}
                     >
                         <LazyImage src={item.img} alt={item.title} className="w-full h-full object-cover" />
                         
                         {isActive && (
                             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent w-[60%] flex flex-col justify-end p-8 text-white z-20">
                                 <h3 className="text-[#FF9212] font-bold text-lg mb-1">{item.title}</h3>
                                 <h2 className="text-3xl font-bold mb-3 leading-tight">{item.subtitle}</h2>
                                 {item.desc && <p className="text-gray-300 text-sm line-clamp-2 mb-4">{item.desc}</p>}
                             </div>
                         )}
                         
                         {!isActive && (
                             <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent p-3 flex items-end z-20">
                                 <span className="text-white text-sm font-medium line-clamp-1">{item.title}</span>
                             </div>
                         )}
                     </div>
                 );
             })}
         </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 relative">
          <div className="flex gap-8">
              <div className="flex-1">
                  <div className="bg-[#2D2F33] rounded-xl overflow-hidden flex h-[320px] mb-8 shadow-lg group cursor-pointer hover:shadow-xl transition-all">
                      <div className="w-[40%] p-10 flex flex-col justify-center text-white relative z-10">
                          <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00AEEC] transition-colors">起开，这个魔法少女我来当</h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              “只有男人才能雌堕，所以雌堕就是最男人的行为！”
                          </p>
                          <div className="flex gap-3 mt-auto">
                              <LazyImage src="https://picsum.photos/seed/thumb1/50/50" alt="thumb" className="w-10 h-12 rounded object-cover opacity-60 hover:opacity-100 transition-opacity" />
                              <LazyImage src="https://picsum.photos/seed/thumb2/50/50" alt="thumb" className="w-10 h-12 rounded object-cover opacity-60 hover:opacity-100 transition-opacity" />
                          </div>
                      </div>
                      
                      <div className="w-[60%] relative overflow-hidden">
                           <LazyImage src="https://picsum.photos/seed/magical-girl/800/600" alt="Main" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute inset-0 bg-gradient-to-r from-[#2D2F33] to-transparent z-10"></div>
                      </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[1,2,3,4].map((i) => (
                          <div key={i} className="group cursor-pointer">
                              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-md">
                                  <LazyImage src={`https://picsum.photos/seed/comic-${i}/300/400`} alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  <div className="absolute top-2 right-2 bg-[#FF9212] text-white text-xs px-1.5 py-0.5 rounded shadow-sm z-10">更新</div>
                              </div>
                              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-[#00AEEC] truncate">转生变成史莱姆的日常</h4>
                              <p className="text-xs text-gray-400">更新至第128话</p>
                          </div>
                      ))}
                  </div>
              </div>
              {/* Sidebar ... */}
          </div>
      </div>
    </div>
  );
};