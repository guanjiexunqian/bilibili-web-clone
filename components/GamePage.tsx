import React from 'react';
import { Search, Gamepad2, Gift, Download, History, ChevronRight, Star, Flame, Trophy, Calendar } from 'lucide-react';

interface GamePageProps {
  onNavigate: (page: 'home' | 'anime' | 'live' | 'game') => void;
}

const GAME_NAV = ["首页", "排行榜", "发现", "WIKI", "大会员礼包", "充值中心", "我的"];

const HERO_GAME = {
  title: "原神",
  desc: "全新五星角色「哥伦比娅」登场",
  icon: "https://picsum.photos/id/1047/100/100",
  bg: "https://picsum.photos/id/1049/1920/600",
};

const HISTORY_LIST = [
  { type: '最近在玩', name: '魔法工艺', time: '2025年12月23日登录', icon: 'https://picsum.photos/id/50/50/50', btn: '下载', active: true },
  { type: '下载历史', name: '魔法工艺', time: '2025年12月23日下载', icon: 'https://picsum.photos/id/50/50/50', btn: '下载', active: false },
  { type: '浏览历史', name: '魔法工艺', time: '2025年12月23日看过', icon: 'https://picsum.photos/id/50/50/50', btn: '下载', active: false },
];

const RECOMMENDED_GAMES = [
  { title: "【临行事项】现已开启!", tag: "活动", tagColor: "#FF9212", desc: "10次抽取必得5星武器", img: "https://picsum.photos/id/111/300/180" },
  { title: "绯月絮语", tag: "新游榜第2名", tagColor: "#FA5A57", rating: 8.7, desc: "放置 · 百合", img: "https://picsum.photos/id/112/300/180" },
  { title: "风之痕迹", tag: "新游榜第5名", tagColor: "#FA5A57", rating: 6.9, desc: "角色扮演 · 冒险", img: "https://picsum.photos/id/113/300/180" },
  { title: "鹅鸭杀", tag: "官B同服", tagColor: "#FA5A57", rating: 7.4, desc: "策略 · 推理", img: "https://picsum.photos/id/114/300/180" },
  { title: "境界 刀鸣", tag: "高分游戏", tagColor: "#FF9212", rating: 8.3, desc: "动作 · ARPG", img: "https://picsum.photos/id/115/300/180" },
];

const HOT_GAMES_LIST = [
  { name: "三国：谋定天下 (PC版)", tag: "高分游戏", score: 9.2, type: "策略 · 职业", img: "https://picsum.photos/id/200/280/160" },
  { name: "名将杀 (PC版)", tag: "官B同服", score: 8.6, type: "卡牌 · 名将杀", img: "https://picsum.photos/id/201/280/160" },
  { name: "魔法工艺 手游来啦", tag: "新游榜第6名", score: 8.1, type: "类Rogue", img: "https://picsum.photos/id/202/280/160" },
  { name: "九牧之野", tag: "低分保护", score: 6.7, type: "策略 · RTS", img: "https://picsum.photos/id/203/280/160" },
];

export const GamePage: React.FC<GamePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Custom Game Header */}
      <div className="w-full bg-[#28292E] h-[64px] text-white/90 flex items-center justify-center px-4 md:px-6 relative z-50">
         <div className="max-w-[1400px] w-full flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                  <Gamepad2 className="text-white" size={24} />
                  <span className="font-bold text-lg tracking-tight">bilibili游戏</span>
               </div>
               <nav className="flex items-center gap-6 text-[14px]">
                  {GAME_NAV.map((item, idx) => (
                    <a 
                        key={idx} 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            if (item === "首页") onNavigate('home');
                        }}
                        className={`hover:text-white transition-colors ${idx === 0 ? 'text-[#00AEEC]' : 'text-gray-300'}`}
                    >
                        {item}
                    </a>
                  ))}
               </nav>
            </div>

            {/* Center Search */}
            <div className="flex-1 max-w-[400px] mx-8">
               <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="搜索更多游戏&WIKI" 
                    className="w-full bg-white/10 border border-transparent focus:border-[#00AEEC] rounded-md py-1.5 pl-4 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none transition-all"
                  />
                  <Search className="absolute right-2 top-1.5 text-gray-400 group-focus-within:text-[#00AEEC]" size={18} />
               </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6 text-[12px] text-gray-300">
               <div className="w-9 h-9 rounded-full bg-gray-500 overflow-hidden border border-gray-400">
                  <img src="https://picsum.photos/id/64/100/100" />
               </div>
               <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white">
                  <Gamepad2 size={20} />
                  <span>已玩游戏</span>
               </div>
               <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white">
                  <Calendar size={20} />
                  <span>预约游戏</span>
               </div>
               <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white">
                  <Download size={20} />
                  <span>下载历史</span>
               </div>
               <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white">
                  <History size={20} />
                  <span>浏览历史</span>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Hero Section */}
      <div className="relative w-full h-[400px] bg-[#1C1D21] overflow-hidden">
         {/* Background Image */}
         <img src={HERO_GAME.bg} className="absolute inset-0 w-full h-full object-cover opacity-90" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#1C1D21] via-transparent to-transparent lg:w-1/2"></div>
         
         <div className="max-w-[1400px] mx-auto relative h-full flex items-center px-6">
            {/* Left Content */}
            <div className="flex flex-col gap-4 text-white max-w-[500px] animate-slide-in">
                <style>{`
                  @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                  }
                  .animate-slide-in {
                    animation: slideInLeft 0.5s ease-out;
                  }
                `}</style>
               <div className="flex items-start gap-4">
                  <img src={HERO_GAME.icon} className="w-[72px] h-[72px] rounded-xl shadow-lg border border-white/10" />
                  <div className="mt-1">
                     <h1 className="text-4xl font-bold mb-2 shadow-sm">{HERO_GAME.title}</h1>
                     <p className="text-gray-300 text-lg">{HERO_GAME.desc}</p>
                  </div>
               </div>
               <div className="flex gap-3 mt-4">
                  <button className="bg-[#FB7299] hover:bg-[#FB7299]/90 text-white px-8 py-2.5 rounded-md font-medium text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
                     下载
                  </button>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                     <div className="w-3 h-3 rounded-full bg-white/30 cursor-pointer hover:bg-white/60"></div>
                  </div>
               </div>
            </div>

            {/* Right Sidebar Overlay */}
            <div className="absolute right-6 top-0 bottom-0 w-[300px] bg-[#1C1D21]/80 backdrop-blur-md pt-6 px-4 hidden lg:flex flex-col gap-6 border-l border-white/5">
                {/* Recent Play */}
                <div className="flex flex-col gap-4">
                   <h3 className="text-gray-400 text-sm">最近在玩</h3>
                   {HISTORY_LIST.slice(0,1).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                         <img src={item.icon} className="w-10 h-10 rounded-lg" />
                         <div className="flex-1 min-w-0">
                            <div className="text-white text-sm font-medium">{item.name}</div>
                            <div className="text-gray-500 text-xs">{item.time}</div>
                         </div>
                         <button className="bg-[#FB7299] text-white text-xs px-3 py-1 rounded hover:bg-[#FB7299]/80 transition-colors">
                            {item.btn}
                         </button>
                      </div>
                   ))}
                </div>

                 <div className="flex flex-col gap-4">
                   <h3 className="text-gray-400 text-sm">下载历史</h3>
                   {HISTORY_LIST.slice(1,2).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                         <img src={item.icon} className="w-10 h-10 rounded-lg grayscale group-hover:grayscale-0 transition-all" />
                         <div className="flex-1 min-w-0">
                            <div className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">{item.name}</div>
                            <div className="text-gray-500 text-xs">{item.time}</div>
                         </div>
                         <button className="bg-[#FB7299] text-white text-xs px-3 py-1 rounded hover:bg-[#FB7299]/80 transition-colors opacity-0 group-hover:opacity-100">
                            {item.btn}
                         </button>
                      </div>
                   ))}
                </div>

                 <div className="flex flex-col gap-4">
                   <h3 className="text-gray-400 text-sm">浏览历史</h3>
                   {HISTORY_LIST.slice(2,3).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                         <img src={item.icon} className="w-10 h-10 rounded-lg grayscale group-hover:grayscale-0 transition-all" />
                         <div className="flex-1 min-w-0">
                            <div className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">{item.name}</div>
                            <div className="text-gray-500 text-xs">{item.time}</div>
                         </div>
                         <button className="bg-[#FB7299] text-white text-xs px-3 py-1 rounded hover:bg-[#FB7299]/80 transition-colors opacity-0 group-hover:opacity-100">
                            {item.btn}
                         </button>
                      </div>
                   ))}
                </div>
            </div>
         </div>
      </div>

      {/* 3. Main Content Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
         
         {/* Recommended Games */}
         <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-normal text-gray-800">推荐游戏</h2>
               <div className="flex items-center gap-1 text-gray-500 text-sm cursor-pointer hover:text-[#00AEEC]">
                  <span>换一换</span>
                  <History size={14} className="rotate-45" />
               </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
               {RECOMMENDED_GAMES.map((game, idx) => (
                  <div key={idx} className="bg-white rounded-lg hover:shadow-lg transition-shadow cursor-pointer group border border-transparent hover:border-gray-100">
                     <div className="relative aspect-[16/9] rounded-t-lg overflow-hidden">
                        <img src={game.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        {game.tag === "活动" && (
                           <span className="absolute top-0 left-0 bg-[#FF9212] text-white text-xs px-2 py-0.5 rounded-br-lg font-bold">活动</span>
                        )}
                     </div>
                     <div className="p-3">
                        <h3 className="text-[15px] font-bold text-gray-800 mb-1 truncate group-hover:text-[#00AEEC] transition-colors">{game.title}</h3>
                        <div className="flex items-center gap-2 text-xs mb-1">
                           {game.tag && game.tag !== "活动" && (
                              <span style={{color: game.tagColor}} className="border border-current px-1 rounded-sm scale-90 origin-left">{game.tag}</span>
                           )}
                           {game.rating && (
                              <span className="flex items-center text-[#FF9212] font-bold gap-0.5"><Star size={10} fill="currentColor"/> {game.rating}</span>
                           )}
                        </div>
                        <div className="text-gray-400 text-xs truncate">{game.desc}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Bottom Lists: Hot Games, PC Games, Pre-order */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Hot Games */}
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <Flame className="text-[#FA5A57]" />
                  <h2 className="text-xl font-bold text-[#FA5A57]">热门游戏榜</h2>
                  <span className="ml-auto text-xs text-gray-400 hover:text-gray-600 cursor-pointer">查看更多 &gt;</span>
               </div>
               <div className="space-y-4">
                  {HOT_GAMES_LIST.map((game, idx) => (
                     <div key={idx} className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-[140px] h-[80px] rounded-md overflow-hidden shrink-0">
                           <img src={game.img} className="w-full h-full object-cover" />
                           {idx === 0 && <span className="absolute top-0 left-0 bg-[#FA5A57] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-br">1</span>}
                        </div>
                        <div className="flex flex-col justify-between py-1">
                           <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#00AEEC]">{game.name}</h3>
                           <div className="flex items-center gap-2 text-xs">
                              <span className="text-[#FA5A57] border border-[#FA5A57] px-1 rounded-sm scale-90 origin-left">{game.tag}</span>
                              <span className="text-[#FF9212] font-bold flex items-center gap-0.5"><Star size={10} fill="currentColor"/> {game.score}</span>
                           </div>
                           <span className="text-gray-400 text-xs">{game.type}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* PC Games */}
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <Gamepad2 className="text-[#00AEEC]" />
                  <h2 className="text-xl font-bold text-[#00AEEC]">PC端游榜</h2>
                  <span className="ml-auto text-xs text-gray-400 hover:text-gray-600 cursor-pointer">查看更多 &gt;</span>
               </div>
               <div className="space-y-4">
                  {HOT_GAMES_LIST.map((game, idx) => (
                     <div key={idx} className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-[140px] h-[80px] rounded-md overflow-hidden shrink-0">
                           <img src={`https://picsum.photos/id/${210+idx}/280/160`} className="w-full h-full object-cover" />
                           {idx === 0 && <span className="absolute top-0 left-0 bg-[#FF9212] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-br">1</span>}
                        </div>
                         <div className="flex flex-col justify-between py-1">
                           <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#00AEEC]">原神 (PC版)</h3>
                           <div className="flex items-center gap-2 text-xs">
                              <span className="text-[#00AEEC] border border-[#00AEEC] px-1 rounded-sm scale-90 origin-left">开放世界</span>
                              <span className="text-[#FF9212] font-bold flex items-center gap-0.5"><Star size={10} fill="currentColor"/> 9.0</span>
                           </div>
                           <span className="text-gray-400 text-xs">冒险 · RPG</span>
                        </div>
                        <button className="self-center ml-auto bg-[#FB7299] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">下载</button>
                     </div>
                  ))}
               </div>
            </div>

            {/* Pre-order Games */}
             <div>
               <div className="flex items-center gap-2 mb-4">
                  <Gift className="text-[#43A047]" />
                  <h2 className="text-xl font-bold text-[#43A047]">游戏预约榜</h2>
                  <span className="ml-auto text-xs text-gray-400 hover:text-gray-600 cursor-pointer">查看更多 &gt;</span>
               </div>
               <div className="space-y-4">
                  {HOT_GAMES_LIST.map((game, idx) => (
                     <div key={idx} className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-[140px] h-[80px] rounded-md overflow-hidden shrink-0">
                           <img src={`https://picsum.photos/id/${220+idx}/280/160`} className="w-full h-full object-cover" />
                           {idx === 0 && <span className="absolute top-0 left-0 bg-[#FF9212] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-br">1</span>}
                        </div>
                         <div className="flex flex-col justify-between py-1">
                           <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#00AEEC]">白银之城</h3>
                           <div className="flex items-center gap-2 text-xs">
                              <span className="text-gray-500 border border-gray-300 px-1 rounded-sm scale-90 origin-left">9.7分</span>
                           </div>
                           <span className="text-gray-400 text-xs">多人抢点 · 开放世界</span>
                        </div>
                        <button className="self-center ml-auto bg-[#FB7299] text-white text-xs px-3 py-1.5 rounded">预约</button>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};