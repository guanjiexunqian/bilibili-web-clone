import React, { useState, useEffect, useRef } from 'react';
import { Search, Upload, Mail, Lightbulb, Star, Clock, MonitorPlay, Download, History, Palette, ChevronRight, Flame, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
  onNavigate: (page: 'home' | 'anime' | 'live' | 'game' | 'manga' | 'dynamic') => void;
  currentPage: 'home' | 'anime' | 'live' | 'game' | 'manga' | 'dynamic';
}

const watchingList = [
  { title: "葬送的芙莉莲", desc: "名为人生的童话", img: "https://picsum.photos/seed/frieren/400/220" },
  { title: "药屋少女的呢喃", desc: "后宫解谜破案", img: "https://picsum.photos/seed/apothecary/400/220" },
  { title: "我独自升级", desc: "最强猎人觉醒", img: "https://picsum.photos/seed/sololeveling/400/220" },
  { title: "迷宫饭", desc: "舌尖上的地下城", img: "https://picsum.photos/seed/dungeon-food/400/220" },
  { title: "物理魔法使马修", desc: "一拳超人哈利版", img: "https://picsum.photos/seed/mashle/400/220" },
  { title: "我推的孩子", desc: "演艺圈的谎言", img: "https://picsum.photos/seed/oshinoko/400/220" },
];

export const Header: React.FC<HeaderProps> = ({ onSearch, isSearching, onNavigate, currentPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showAnimePreview, setShowAnimePreview] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  // Horizontal Scroll Logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleAnimeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAnimePreview(false); // Close popup
    onNavigate('anime');
  };

  return (
    <div className="relative w-full h-[155px] mb-2">
      <style>{`
        @keyframes slideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        #anime-overlay {
          display: none;
          opacity: 0;
        }
        #anime-overlay.visible {
          display: block;
          animation: slideUpFadeIn 0.3s ease-out forwards;
        }
        /* Hide scrollbar for chrome/safari/opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Banner Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Use a specific anime-style landscape placeholder to match the vibe */}
        <img 
          src="https://picsum.photos/seed/bilibili-banner-art/1920/300" 
          alt="Banner" 
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Gradient overlay for text readability - stronger at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-90"></div>
        {/* Bottom white fade to blend with content */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
      </div>

      {/* Top Bar Container */}
      <div className="relative z-10 px-6 pt-3">
        <div className="flex items-center justify-between text-white font-medium">
          
          {/* Left: Logo & Main Nav */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer mr-2" onClick={() => onNavigate('home')}>
               {/* Simulated Bilibili Logo Text */}
               <div className="relative">
                 <MonitorPlay className="absolute -left-6 top-0 text-white fill-white" size={24} />
                 <span className="font-bold text-xl tracking-tighter ml-1" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>bilibili</span>
               </div>
            </div>
            <nav className="hidden xl:flex items-center gap-5 text-[14px] text-shadow-sm relative">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
                className={`hover:text-white/80 transition flex items-center gap-1 drop-shadow-md ${currentPage === 'home' ? 'font-bold text-white' : ''}`}
              >
                <div className="w-4 h-4 rounded-full bg-[#FB7299] flex items-center justify-center"><MonitorPlay size={10} className="ml-0.5 fill-white"/></div> 
                首页
              </a>
              
              {/* Anime Link with Popup */}
              <div 
                className="relative py-2 group"
                onMouseEnter={() => setShowAnimePreview(true)}
                onMouseLeave={() => setShowAnimePreview(false)}
              >
                <a 
                  href="#" 
                  className={`hover:text-white/80 transition drop-shadow-md cursor-pointer pb-2 ${currentPage === 'anime' ? 'text-[#FB7299] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]' : ''}`}
                  onClick={handleAnimeClick}
                >
                  番剧
                </a>
                
                {/* Anime Preview Overlay - Fixed full width */}
                <div 
                  id="anime-overlay"
                  className={`fixed left-0 right-0 top-[64px] z-50 pt-2 ${showAnimePreview ? 'visible' : ''}`}
                  onClick={(e) => e.stopPropagation()} 
                >
                  <div className="w-full bg-white/90 backdrop-blur-[20px] shadow-xl border-t border-white/40">
                    <div className="max-w-[1200px] mx-auto p-6 flex gap-8 text-gray-800">
                      
                      {/* Left 70% Area */}
                      <div className="w-[70%] flex flex-col gap-5">
                        {/* Horizontal Scrolling 'Watching' Section */}
                        <div className="relative group/scroll">
                          <h3 className="text-[16px] font-bold mb-3 flex items-center gap-2">
                             正在追 <span className="text-xs font-normal text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">6</span>
                          </h3>
                          
                          <button 
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-gray-700 opacity-0 group-hover/scroll:opacity-100 transition-opacity disabled:opacity-0"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          
                          <div 
                            ref={scrollContainerRef}
                            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-1"
                          >
                            {watchingList.map((item, idx) => (
                              <div key={idx} className="min-w-[200px] h-[120px] relative rounded-lg overflow-hidden cursor-pointer group/card shrink-0">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-2 left-3 text-white">
                                  <div className="font-bold text-[14px] leading-tight shadow-black drop-shadow-md">{item.title}</div>
                                  <div className="text-[11px] opacity-90 mt-0.5 drop-shadow-md">{item.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button 
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-gray-700 opacity-0 group-hover/scroll:opacity-100 transition-opacity"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>

                        {/* Bottom 3 Columns */}
                        <div className="grid grid-cols-3 gap-4 mt-2">
                           {/* Index */}
                           <div className="flex flex-col gap-3">
                              <h4 className="text-[14px] font-bold text-gray-900 flex items-center gap-1">番剧索引 <ChevronRight size={14}/></h4>
                              <div className="flex flex-col gap-2 text-[13px] text-gray-600">
                                <a href="#" className="hover:text-[#FB7299] transition-colors flex items-center justify-between group/link">
                                  <span>连载中</span> <span className="text-gray-400 text-xs group-hover/link:text-[#FB7299]/70">Mon.</span>
                                </a>
                                <a href="#" className="hover:text-[#FB7299] transition-colors flex items-center justify-between group/link">
                                  <span>完结</span> <span className="text-gray-400 text-xs group-hover/link:text-[#FB7299]/70">End</span>
                                </a>
                                <a href="#" className="hover:text-[#FB7299] transition-colors flex items-center justify-between group/link">
                                  <span>剧场版</span> <span className="text-gray-400 text-xs group-hover/link:text-[#FB7299]/70">Movie</span>
                                </a>
                              </div>
                           </div>
                           
                           {/* Styles/Tags */}
                           <div className="flex flex-col gap-3">
                              <h4 className="text-[14px] font-bold text-gray-900 flex items-center gap-1">类型风格 <ChevronRight size={14}/></h4>
                              <div className="flex flex-wrap gap-2 text-[12px] text-gray-600">
                                {['热血', '恋爱', '校园', '冒险', '科幻', '治愈', '异世界', '战斗'].map(tag => (
                                  <a 
                                    key={tag} 
                                    href="#" 
                                    className="hover:text-[#FB7299] hover:bg-[#FB7299]/10 bg-gray-100 border border-transparent px-2 py-0.5 rounded-full transition-all duration-200"
                                  >
                                    {tag}
                                  </a>
                                ))}
                              </div>
                           </div>

                           {/* Time */}
                           <div className="flex flex-col gap-3">
                               <h4 className="text-[14px] font-bold text-gray-900 flex items-center gap-1">首播时间 <ChevronRight size={14}/></h4>
                               <div className="grid grid-cols-4 gap-2 text-[12px] font-medium text-gray-600">
                                 {['一', '二', '三', '四', '五', '六', '日'].map(day => (
                                   <span key={day} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-[#FB7299] hover:text-white cursor-pointer transition-colors duration-200">{day}</span>
                                 ))}
                               </div>
                           </div>
                        </div>
                      </div>

                      {/* Right 30% Area - Hot Search */}
                      <div className="w-[30%] shrink-0 border-l border-gray-200/60 pl-8 flex flex-col">
                         <h4 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                           热门番剧 <Flame size={14} className="text-[#FA5A57] fill-[#FA5A57]"/>
                         </h4>
                         <ul className="flex flex-col gap-3">
                           {[
                             {rank: 1, title: '海贼王：蛋头岛冒险', hot: '999w'},
                             {rank: 2, title: '咒术回战 第二季', hot: '882w'},
                             {rank: 3, title: '我独自升级', hot: '750w'},
                             {rank: 4, title: '葬送的芙莉莲', hot: '620w'},
                             {rank: 5, title: '迷宫饭', hot: '510w'},
                             {rank: 6, title: '肌肉魔法使', hot: '300w'}
                           ].map((item) => (
                             <li key={item.rank} className="flex items-center justify-between group/item cursor-pointer">
                               <div className="flex items-center gap-3 overflow-hidden">
                                  <span className={`text-[14px] font-black italic w-4 ${item.rank <= 3 ? 'text-[#00AEEC]' : 'text-gray-300'}`}>{item.rank}</span>
                                  <span className="text-[13px] text-gray-700 truncate group-hover/item:text-[#00AEEC] transition-colors">{item.title}</span>
                                </div>
                               <span className="text-[11px] text-gray-400 scale-90">{item.hot}</span>
                             </li>
                           ))}
                         </ul>
                         <button className="mt-auto w-full py-2 bg-gray-100 hover:bg-gray-200 text-xs text-gray-600 rounded-lg transition-colors hover:text-[#00AEEC]">查看更多</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className={`hover:text-white/80 transition drop-shadow-md ${currentPage === 'live' ? 'text-[#FB7299] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]' : ''}`}
                onClick={(e) => { e.preventDefault(); onNavigate('live'); }}
              >
                直播
              </a>
              <a 
                 href="#" 
                 className={`hover:text-white/80 transition drop-shadow-md ${currentPage === 'game' ? 'text-[#FB7299] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]' : ''}`}
                 onClick={(e) => { e.preventDefault(); onNavigate('game'); }}
              >
                游戏中心
              </a>
              <a 
                 href="#" 
                 className={`hover:text-white/80 transition drop-shadow-md ${currentPage === 'manga' ? 'text-[#FB7299] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]' : ''}`}
                 onClick={(e) => { e.preventDefault(); onNavigate('manga'); }}
              >
                漫画
              </a>
              <a href="#" className="hover:text-white/80 transition drop-shadow-md">会员购</a>
              <a href="#" className="hover:text-white/80 transition drop-shadow-md">赛事</a>
              <a href="#" className="hover:text-white/80 transition flex items-center gap-1 drop-shadow-md"><Download size={14}/> 下载客户端</a>
            </nav>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-[500px] mx-4">
            <div className="relative flex items-center bg-[#F1F2F3] hover:bg-white focus-within:bg-white rounded-lg transition-colors overflow-hidden h-[40px] shadow-inner opacity-90 hover:opacity-100">
              <div className="absolute left-3 text-gray-500 font-bold bg-gray-200 px-1.5 py-0.5 rounded text-xs hidden">搜索</div>
              <input 
                type="text" 
                placeholder="精灵女王" 
                className="w-full h-full bg-transparent px-4 text-gray-800 placeholder-gray-500 text-sm focus:outline-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button 
                onClick={() => onSearch(searchValue)}
                className="absolute right-2 p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors"
              >
                <Search size={18} strokeWidth={2.5} className={isSearching ? "animate-pulse text-[#00AEEC]" : ""} />
              </button>
            </div>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center gap-2 text-[11px] text-white">
            <div className="flex flex-col items-center cursor-pointer min-w-[50px]">
               <div className="w-[38px] h-[38px] rounded-full bg-gray-200 overflow-hidden border-[2px] border-white/50 hover:border-white transition-colors shadow-md">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
               </div>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1 group">
              <div className="w-[20px] h-[20px] rounded-full border border-white flex items-center justify-center bg-white/20 group-hover:bg-[#FB7299] transition-colors">
                 <span className="text-[10px] font-bold">大</span>
              </div>
              <span className="drop-shadow-md transform scale-90">大会员</span>
            </div>

            <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1">
              <Mail size={22} className="drop-shadow-md"/>
              <span className="drop-shadow-md transform scale-90">消息</span>
            </div>

            <div 
                className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1 relative"
                onClick={() => onNavigate('dynamic')}
            >
              <Palette size={22} className="drop-shadow-md"/> {/* Using Palette as proxy for 'Dynamic' windmill icon */}
              <span className="absolute -top-1 right-2 bg-[#FA5A57] text-white text-[9px] px-1 rounded-full h-[14px] flex items-center justify-center border border-white">2</span>
              <span className="drop-shadow-md transform scale-90">动态</span>
            </div>

             <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1">
              <Star size={22} className="drop-shadow-md"/>
              <span className="drop-shadow-md transform scale-90">收藏</span>
            </div>

             <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1">
              <History size={22} className="drop-shadow-md"/>
              <span className="drop-shadow-md transform scale-90">历史</span>
            </div>

             <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[50px] gap-1">
              <Lightbulb size={22} className="drop-shadow-md"/>
              <span className="drop-shadow-md transform scale-90">创作中心</span>
            </div>

            <button className="bg-[#FB7299] hover:bg-[#FB7299]/90 text-white w-[100px] h-[34px] rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors ml-4 shadow-sm">
              <Upload size={16} />
              <span>投稿</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};