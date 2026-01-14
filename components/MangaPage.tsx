import React, { useState } from 'react';
import { Search, MonitorPlay, Download, History, BookOpen, Upload, User, ChevronRight, ChevronLeft, MessageSquare, ThumbsUp, Flame } from 'lucide-react';

interface MangaPageProps {
  onNavigate: (page: 'home' | 'anime' | 'live' | 'game' | 'manga') => void;
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
      
      {/* 1. Custom Manga Header */}
      <div className="w-full bg-white h-[64px] flex items-center justify-center px-4 shadow-sm relative z-50">
         <div className="max-w-[1700px] w-full flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                   <div className="w-9 h-9 rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                        <img src="https://picsum.photos/seed/manga-logo-placeholder/100/100" className="w-full h-full object-cover" /> 
                        {/* Placeholder for specific manga logo */}
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
                  <span className="text-[#00AEEC] cursor-pointer font-bold mr-6 relative after:content-[''] after:absolute after:-bottom-[23px] after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-0.5 after:bg-[#00AEEC]">首页</span>
                  {MANGA_NAV.slice(1).map((item, idx) => (
                    <a key={idx} href="#" className="hover:text-[#00AEEC] transition-colors mr-6">{item}</a>
                  ))}
               </div>
            </div>

            {/* Center Search */}
            <div className="flex-1 max-w-[360px] mx-4">
                <div className="relative">
                   <input 
                     type="text" 
                     placeholder="有兽焉" 
                     className="w-full bg-[#F1F2F3] border-none rounded-full py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEC]" 
                   />
                   <Search className="absolute right-3 top-2 text-gray-400" size={18} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5 text-[14px] text-gray-600">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
                    <span>下载APP</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
                    <span>历史</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
                    <span>追漫</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Reader" className="w-full h-full" />
                </div>
                <button className="bg-[#00AEEC] hover:bg-[#00AEEC]/90 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 transition-colors">
                    <Upload size={16} />
                    <span>投稿</span>
                </button>
            </div>
         </div>
      </div>

      {/* 2. Hero Carousel Section (Dark Theme) */}
      <div className="bg-[#121212] w-full h-[460px] relative overflow-hidden flex items-center justify-center">
         {/* Background blur effect based on active image */}
         <div className="absolute inset-0 opacity-30">
             <img src={HERO_ITEMS[activeHeroIndex].img} className="w-full h-full object-cover filter blur-3xl scale-110" />
         </div>
         
         <div className="max-w-[1700px] w-full px-4 relative z-10 flex items-center justify-center gap-4 h-[380px]">
             {HERO_ITEMS.map((item, index) => {
                 const isActive = index === activeHeroIndex;
                 const distance = Math.abs(index - activeHeroIndex);
                 if (distance > 3) return null; // Don't render too far items

                 return (
                     <div 
                        key={item.id} 
                        onClick={() => setActiveHeroIndex(index)}
                        className={`relative transition-all duration-500 ease-out cursor-pointer rounded-lg overflow-hidden shadow-2xl ${isActive ? 'w-[600px] h-[360px] flex' : 'w-[220px] h-[300px] opacity-60 hover:opacity-100'}`}
                     >
                         <img src={item.img} className="w-full h-full object-cover" />
                         
                         {/* Active Item Overlay */}
                         {isActive && (
                             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent w-[60%] flex flex-col justify-end p-8 text-white">
                                 <h3 className="text-[#FF9212] font-bold text-lg mb-1">{item.title}</h3>
                                 <h2 className="text-3xl font-bold mb-3 leading-tight">{item.subtitle}</h2>
                                 {item.desc && <p className="text-gray-300 text-sm line-clamp-2 mb-4">{item.desc}</p>}
                                 <div className="flex gap-2 mt-auto">
                                     <span className="w-2 h-2 rounded-full bg-white"></span>
                                     <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                                     <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                                 </div>
                             </div>
                         )}
                         
                         {/* Inactive Item Title */}
                         {!isActive && (
                             <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent p-3 flex items-end">
                                 <span className="text-white text-sm font-medium line-clamp-1">{item.title}</span>
                             </div>
                         )}
                     </div>
                 );
             })}

             {/* Navigation Arrows */}
             <button 
                onClick={() => setActiveHeroIndex(Math.max(0, activeHeroIndex - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
             >
                 <ChevronLeft />
             </button>
             <button 
                onClick={() => setActiveHeroIndex(Math.min(HERO_ITEMS.length - 1, activeHeroIndex + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
             >
                 <ChevronRight />
             </button>
         </div>
      </div>

      {/* 3. Genre Navigation Bar */}
      <div className="bg-[#1A1A1A] w-full border-t border-gray-800">
          <div className="max-w-[1200px] mx-auto py-3 px-4 flex justify-between items-center text-gray-400 text-sm">
              {GENRES.map((genre, idx) => (
                  <span key={idx} className="cursor-pointer hover:text-white transition-colors">{genre}</span>
              ))}
          </div>
      </div>

      {/* 4. Main Content Area */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 relative">
          
          <div className="flex justify-between items-end mb-6">
              <h2 className="text-3xl font-normal text-gray-800">为你推荐 <span className="text-lg text-gray-400 font-light ml-2">Pick你的最爱!</span></h2>
          </div>

          <div className="flex gap-8">
              {/* Main Feed */}
              <div className="flex-1">
                  {/* Featured Large Card */}
                  <div className="bg-[#2D2F33] rounded-xl overflow-hidden flex h-[320px] mb-8 shadow-lg group cursor-pointer hover:shadow-xl transition-all">
                      {/* Left Text */}
                      <div className="w-[40%] p-10 flex flex-col justify-center text-white relative z-10">
                          <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00AEEC] transition-colors">起开，这个魔法少女我来当</h3>
                          <div className="flex gap-2 mb-6">
                              <span className="border border-white/30 px-2 py-0.5 text-xs rounded text-gray-300">无敌</span>
                              <span className="border border-white/30 px-2 py-0.5 text-xs rounded text-gray-300">战斗</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              “只有男人才能雌堕，所以雌堕就是最男人的行为！” “婆妈，不会你们魔法少女用的都是鲸之吧！” “异化生物？杀！邪教徒？杀！堕落...”
                          </p>
                          <div className="flex gap-3 mt-auto">
                              <img src="https://picsum.photos/seed/thumb1/50/50" className="w-10 h-12 rounded object-cover opacity-60 hover:opacity-100 transition-opacity" />
                              <img src="https://picsum.photos/seed/thumb2/50/50" className="w-10 h-12 rounded object-cover opacity-60 hover:opacity-100 transition-opacity" />
                              <img src="https://picsum.photos/seed/thumb3/50/50" className="w-10 h-12 rounded object-cover opacity-60 hover:opacity-100 transition-opacity" />
                          </div>
                      </div>
                      
                      {/* Right Image */}
                      <div className="w-[60%] relative overflow-hidden">
                           <img src="https://picsum.photos/seed/magical-girl/800/600" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute inset-0 bg-gradient-to-r from-[#2D2F33] to-transparent"></div>
                           
                           {/* Floating Title Art Simulation */}
                           <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#00AEEC] transition-colors">
                               <span>去阅读</span>
                               <ChevronRight size={16} />
                           </div>
                      </div>
                  </div>

                  {/* Secondary Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[1,2,3,4].map((i) => (
                          <div key={i} className="group cursor-pointer">
                              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-md">
                                  <img src={`https://picsum.photos/seed/comic-${i}/300/400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  <div className="absolute top-2 right-2 bg-[#FF9212] text-white text-xs px-1.5 py-0.5 rounded shadow-sm">更新</div>
                              </div>
                              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-[#00AEEC] truncate">转生变成史莱姆的日常</h4>
                              <p className="text-xs text-gray-400">更新至第128话</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Right Sidebar (Fixed/Sticky visual) */}
              <div className="w-[60px] shrink-0 hidden lg:flex flex-col gap-2 sticky top-24 h-fit">
                  {RIGHT_SIDEBAR_MENU.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`
                            h-[60px] w-[60px] flex flex-col items-center justify-center text-xs gap-1 border border-gray-100 rounded bg-white shadow-sm cursor-pointer hover:text-[#00AEEC] transition-colors
                            ${item.active ? 'bg-[#00AEEC] text-white hover:text-white border-[#00AEEC]' : 'text-gray-500'}
                        `}
                      >
                          {idx === 0 && <ThumbsUp size={18} />}
                          {idx === 1 && <Flame size={18} />}
                          {idx === 2 && <MessageSquare size={18} />}
                          {idx === 3 && <BookOpen size={18} />}
                          {idx === 4 && <History size={18} />}
                          <span className="scale-90">{item.text}</span>
                      </div>
                  ))}
                  <div className="h-[40px] w-[60px] flex items-center justify-center text-gray-400 bg-gray-50 rounded mt-2 border border-gray-100 cursor-pointer hover:bg-gray-100">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-gray-400"></div>
                  </div>
              </div>
          </div>

      </div>

    </div>
  );
};