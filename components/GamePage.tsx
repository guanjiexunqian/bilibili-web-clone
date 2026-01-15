import React, { useState, useEffect } from 'react';
import { Search, Gamepad2, Download, Star, Flame, Trophy, ChevronRight, Gift, Settings, Monitor, Calendar, Crown, RefreshCw, Smartphone, Award } from 'lucide-react';
import { LazyImage } from './LazyImage';
import { HDSLB_IMAGE_POOL, GAME_LIBRARY } from '../constants';
import { Page } from '../types';

interface GamePageProps {
  onNavigate: (page: Page) => void;
}

// ==================================================================================
// Real Data Injection (Replacing Picsum)
// ==================================================================================

const HERO_SLIDES = [
  { 
    id: 1, 
    title: GAME_LIBRARY.wukong.name, 
    subtitle: "8月20日，重走西游",
    img: GAME_LIBRARY.wukong.cover, 
    bg: GAME_LIBRARY.wukong.cover,
    color: GAME_LIBRARY.wukong.color
  },
  { 
    id: 2, 
    title: GAME_LIBRARY.starrail.name, 
    subtitle: "全新2.0版本「匹诺康尼」现已上线",
    img: GAME_LIBRARY.starrail.cover, 
    bg: GAME_LIBRARY.starrail.cover,
    color: GAME_LIBRARY.starrail.color
  },
  { 
    id: 3, 
    title: GAME_LIBRARY.zzz.name, 
    subtitle: "降噪测试招募开启！",
    img: GAME_LIBRARY.zzz.cover, 
    bg: GAME_LIBRARY.zzz.cover,
    color: GAME_LIBRARY.zzz.color
  },
  { 
    id: 4, 
    title: GAME_LIBRARY.arknights.name, 
    subtitle: "春节限定活动：怀黍离",
    img: GAME_LIBRARY.arknights.cover, 
    bg: GAME_LIBRARY.arknights.cover,
    color: GAME_LIBRARY.arknights.color
  }
];

const DASHBOARD_DATA = {
  played: [
    { id: 101, name: GAME_LIBRARY.wukong.name, date: '刚刚 登录', icon: GAME_LIBRARY.wukong.icon, btn: '启动', btnType: 'primary' },
    { id: 102, name: GAME_LIBRARY.lol.name, date: '昨天 登录', icon: GAME_LIBRARY.lol.icon, btn: '启动', btnType: 'primary' },
    { id: 103, name: GAME_LIBRARY.starrail.name, date: '3天前 登录', icon: GAME_LIBRARY.starrail.icon, btn: '更新', btnType: 'secondary' },
  ],
  download: [
    { id: 201, name: GAME_LIBRARY.zzz.name, date: '12/20 下载', icon: GAME_LIBRARY.zzz.icon, btn: '安装', btnType: 'primary' },
    { id: 202, name: GAME_LIBRARY.naraka.name, date: '12/18 下载', icon: GAME_LIBRARY.naraka.icon, btn: '安装', btnType: 'primary' },
  ],
  browse: [
    { id: 301, name: GAME_LIBRARY.genshin.name, date: '刚刚看过', icon: GAME_LIBRARY.genshin.icon, btn: '详情', btnType: 'outline' },
    { id: 302, name: '碧蓝幻想Relink', date: '10分钟前', icon: "https://i0.hdslb.com/bfs/game/d6023253b8116960f252445a4a58406f36357494.png", btn: '详情', btnType: 'outline' },
  ]
};

const RECOMMENDED_POOL = [
  // Page 1
  { id: 1, title: "【临行事项】现已开启!", tag: "活动", isActivity: true, desc: "10次抽取必得5星武器", img: "https://i0.hdslb.com/bfs/new_dyn/b45823145d2595085445258414902146445582236.png" },
  { id: 2, title: GAME_LIBRARY.genshin.name, tag: "新游榜第3名", rating: 8.7, desc: "开放世界 · 冒险", img: GAME_LIBRARY.genshin.cover },
  { id: 3, title: GAME_LIBRARY.starrail.name, tag: "新游榜第5名", rating: 9.2, desc: "角色扮演 · 银河", img: GAME_LIBRARY.starrail.cover },
  { id: 4, title: GAME_LIBRARY.lol.name, tag: "官B同服", rating: 7.4, desc: "策略 · 竞技", img: GAME_LIBRARY.lol.cover },
  { id: 5, title: GAME_LIBRARY.naraka.name, tag: "高分游戏", rating: 8.3, desc: "动作 · 武侠", img: GAME_LIBRARY.naraka.cover },
  // Page 2
  { id: 6, title: GAME_LIBRARY.zzz.name, tag: "热门游戏", rating: 9.2, desc: "动作 · 都市", img: GAME_LIBRARY.zzz.cover },
  { id: 7, title: "女神异闻录：夜幕魅影", tag: "新游榜第1名", rating: 8.8, desc: "RPG · 剧情", img: HDSLB_IMAGE_POOL.anime[2] },
  { id: 8, title: GAME_LIBRARY.wukong.name, tag: "预约榜第2名", desc: "动作 · 神话", img: GAME_LIBRARY.wukong.cover },
  { id: 9, title: "蓝色协议", tag: "新游期待", rating: 7.5, desc: "MMO · 二次元", img: HDSLB_IMAGE_POOL.anime[4] },
  { id: 10, title: "泰拉瑞亚", tag: "史低折扣", rating: 9.8, desc: "沙盒 · 冒险", img: HDSLB_IMAGE_POOL.gaming[6] },
];

const RANKING_HOT = [
  { rank: 1, name: GAME_LIBRARY.genshin.name, tags: ["开放世界", "二次元"], score: 9.4, icon: GAME_LIBRARY.genshin.icon },
  { rank: 2, name: GAME_LIBRARY.starrail.name, tags: ["回合制", "策略"], score: 9.8, icon: GAME_LIBRARY.starrail.icon },
  { rank: 3, name: GAME_LIBRARY.zzz.name, tags: ["动作", "3D"], score: 9.0, icon: GAME_LIBRARY.zzz.icon },
  { rank: 4, name: GAME_LIBRARY.arknights.name, tags: ["塔防", "策略"], score: 9.1, icon: GAME_LIBRARY.arknights.icon },
  { rank: 5, name: "碧蓝航线", tags: ["养成", "海战"], score: 8.7, icon: "https://i0.hdslb.com/bfs/game/7b2d56637b512966847846561274647366367756.png" },
];

const RANKING_PC = [
  { rank: 1, name: GAME_LIBRARY.wukong.name, tags: ["动作", "神话"], score: 9.9, icon: GAME_LIBRARY.wukong.icon },
  { rank: 2, name: GAME_LIBRARY.lol.name, tags: ["MOBA", "竞技"], score: 9.4, icon: GAME_LIBRARY.lol.icon },
  { rank: 3, name: GAME_LIBRARY.naraka.name, tags: ["吃鸡", "武侠"], score: 9.3, icon: GAME_LIBRARY.naraka.icon },
  { rank: 4, name: "Apex英雄", tags: ["FPS", "战术"], score: 8.2, icon: HDSLB_IMAGE_POOL.gaming[5] },
  { rank: 5, name: "无畏契约", tags: ["FPS", "射击"], score: 7.5, icon: HDSLB_IMAGE_POOL.gaming[6] },
];

const RANKING_PREORDER = [
  { rank: 1, name: "白银之城", tags: ["开放世界", "侦探"], score: 9.7, icon: HDSLB_IMAGE_POOL.anime[0] },
  { rank: 2, name: "明日方舟：终末地", tags: ["模拟经营", "二次元"], score: 9.1, icon: GAME_LIBRARY.arknights.icon },
  { rank: 3, name: "代号：无限大", tags: ["都市", "开放世界"], score: 9.0, icon: HDSLB_IMAGE_POOL.anime[2] },
  { rank: 4, name: "燕云十六声", tags: ["RPG", "武侠"], score: 9.5, icon: HDSLB_IMAGE_POOL.gaming[0] },
  { rank: 5, name: "GTA 6", tags: ["冒险", "犯罪"], score: 9.9, icon: HDSLB_IMAGE_POOL.gaming[7] },
];

// ==================================================================================
// Component Implementation
// ==================================================================================

export const GamePage: React.FC<GamePageProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'played' | 'download' | 'browse'>('played');
  
  // Recommendation Refresh Logic
  const [recIndex, setRecIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const itemsPerPage = 5;
  const currentRecommendations = RECOMMENDED_POOL.slice(recIndex * itemsPerPage, (recIndex + 1) * itemsPerPage);

  const handleRefreshRecommendations = () => {
      if (isRotating) return;
      setIsRotating(true);
      setTimeout(() => {
          setRecIndex(prev => (prev + 1) % (Math.ceil(RECOMMENDED_POOL.length / itemsPerPage)));
          setIsRotating(false);
      }, 500);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F5F7] font-sans pb-12">
      
      {/* ZONE A: Dark Header */}
      <div className="bg-[#1C1D21] h-[64px] w-full sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto h-full px-4 flex items-center justify-between">
          
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
               <div className="w-8 h-8 rounded-full bg-[#00AEEC] flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                  <Gamepad2 size={18} />
               </div>
               <div className="flex flex-col leading-none text-white">
                  <span className="font-bold text-[15px] tracking-tight">bilibili游戏</span>
                  <span className="text-[10px] text-gray-400 opacity-80 scale-90 origin-left">GAME CENTER</span>
               </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-gray-300">
               {['首页', '排行榜', '新游', 'WIKI', '社区', '我的'].map((item, idx) => (
                 <a 
                    key={idx} 
                    href="#" 
                    onClick={(e) => {e.preventDefault(); if(item === '首页') onNavigate('home')}}
                    className={`hover:text-white transition-colors relative py-5 ${idx === 0 ? 'text-[#00AEEC]' : ''}`}
                 >
                    {item}
                    {idx === 0 && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00AEEC] rounded-t-full"></div>}
                 </a>
               ))}
            </nav>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-[400px] mx-4 hidden lg:block">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="搜索更多游戏 & WIKI" 
                  className="w-full h-[36px] bg-white/10 border border-transparent focus:bg-white focus:text-gray-900 focus:border-white rounded-full px-4 text-sm text-gray-200 placeholder-gray-400 outline-none transition-all duration-300"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600" />
             </div>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center gap-5 text-gray-300">
             <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                    <LazyImage src="https://i2.hdslb.com/bfs/face/d2a95376140fb1e5efbcbed70ef62891a3e5284f.jpg" alt="User" className="w-full h-full" />
                </div>
             </div>
             <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white group">
                <Gamepad2 size={20} className="group-hover:text-[#00AEEC] transition-colors" />
                <span className="text-[10px]">已玩</span>
             </div>
             <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white group">
                <Calendar size={20} className="group-hover:text-[#00AEEC] transition-colors" />
                <span className="text-[10px]">预约</span>
             </div>
             <div className="flex flex-col items-center gap-0.5 cursor-pointer hover:text-white group">
                <Download size={20} className="group-hover:text-[#00AEEC] transition-colors" />
                <span className="text-[10px]">下载</span>
             </div>
          </div>
        </div>
      </div>

      {/* ZONE B: Hero Section (Updated) */}
      <div className="relative w-full h-[460px] overflow-hidden group/hero">
         {/* Blurred Background Layer - Synced with Slide */}
         <div className="absolute inset-0 z-0">
             {HERO_SLIDES.map((slide, idx) => (
                 <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                 >
                     <LazyImage src={slide.bg} alt="bg" className="w-full h-full object-cover scale-110 filter blur-[20px] brightness-75" />
                     {/* Gradient Overlay for content readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D21] via-transparent to-transparent"></div>
                 </div>
             ))}
         </div>

         {/* Content Container */}
         <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 pt-6 pb-8 flex flex-col md:flex-row gap-4">
             
             {/* Left: Carousel (75%) */}
             <div className="flex-1 relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                 {HERO_SLIDES.map((slide, idx) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <LazyImage src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                        
                        {/* Slide Content */}
                        <div className="absolute bottom-10 left-10 text-white animate-slide-up">
                            <style>{`
                                @keyframes slideUpShort { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                                .animate-slide-up { animation: slideUpShort 0.5s ease-out forwards; }
                            `}</style>
                            <h2 className="text-4xl font-bold mb-2 shadow-black drop-shadow-md">{slide.title}</h2>
                            <p className="text-lg opacity-90 mb-6 drop-shadow-md">{slide.subtitle}</p>
                            <button 
                                className="px-8 py-2.5 rounded-lg font-bold text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
                                style={{ backgroundColor: '#FB7299' }}
                            >
                                <Download size={18} /> 立即下载
                            </button>
                        </div>
                    </div>
                 ))}

                 {/* Indicators */}
                 <div className="absolute bottom-4 right-6 z-20 flex gap-2">
                    {HERO_SLIDES.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80'}`}
                        />
                    ))}
                 </div>
             </div>

             {/* Right: User Dashboard (25%) */}
             <div className="w-full md:w-[320px] bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 flex flex-col shrink-0">
                 {/* User Info Header */}
                 <div className="p-5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border-2 border-[#00AEEC] p-0.5 cursor-pointer hover:scale-105 transition-transform">
                            <LazyImage src="https://i2.hdslb.com/bfs/face/d2a95376140fb1e5efbcbed70ef62891a3e5284f.jpg" alt="User" className="w-full h-full rounded-full bg-white" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-[15px] cursor-pointer hover:text-[#00AEEC]">Bill_Gamer</div>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="bg-[#FB7299] text-white text-[9px] px-1 rounded-sm">LV6</span>
                                <span className="text-gray-400 text-xs">硬核玩家</span>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Dashboard Tabs */}
                 <div className="flex items-center px-5 border-b border-white/10">
                     {[
                         { id: 'played', label: '最近在玩' },
                         { id: 'download', label: '下载历史' },
                         { id: 'browse', label: '浏览历史' }
                     ].map((tab) => (
                         <div 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`relative pb-3 mr-6 text-[13px] font-medium cursor-pointer transition-colors ${
                                activeTab === tab.id ? 'text-[#00AEEC]' : 'text-gray-400 hover:text-white'
                            }`}
                         >
                             {tab.label}
                             {activeTab === tab.id && (
                                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#00AEEC] rounded-full"></div>
                             )}
                         </div>
                     ))}
                 </div>

                 {/* List Content */}
                 <div className="flex-1 overflow-y-auto no-scrollbar p-3">
                     <div className="flex flex-col gap-2">
                        {DASHBOARD_DATA[activeTab].map((item) => (
                           <div key={item.id} className="flex items-center gap-3 group cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors">
                              <LazyImage src={item.icon} alt={item.name} className="w-10 h-10 rounded-lg shadow-sm" />
                              <div className="flex-1 min-w-0">
                                 <div className="text-white text-sm font-medium truncate group-hover:text-[#00AEEC] transition-colors">{item.name}</div>
                                 <div className="text-gray-500 text-[11px]">{item.date}</div>
                              </div>
                              <button className={`text-xs px-3 py-1.5 rounded transition-all ${
                                  item.btnType === 'primary' ? 'bg-[#00AEEC]/20 text-[#00AEEC] hover:bg-[#00AEEC] hover:text-white' :
                                  item.btnType === 'accent' ? 'bg-[#FA5A57]/20 text-[#FA5A57] hover:bg-[#FA5A57] hover:text-white' :
                                  'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                              }`}>
                                 {item.btn}
                              </button>
                           </div>
                        ))}
                     </div>
                 </div>

                 {/* Footer Actions */}
                 <div className="p-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
                     <button className="bg-gradient-to-r from-[#FF9212]/20 to-[#FF9212]/10 hover:from-[#FF9212]/30 hover:to-[#FF9212]/20 text-[#FF9212] py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition-all border border-[#FF9212]/20">
                        <Gift size={14} /> 领取礼包
                     </button>
                     <button className="bg-white/5 hover:bg-white/10 text-gray-300 py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition-all border border-white/10">
                        <Settings size={14} /> 游戏设置
                     </button>
                 </div>
             </div>
         </div>
      </div>

      {/* ZONE C: Recommendation Ribbon (Enhanced) */}
      <div className="max-w-[1400px] mx-auto px-4 mt-8 mb-12">
          <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                 <Monitor className="text-[#00AEEC]" /> 推荐游戏
              </h2>
              <div 
                 className="flex items-center text-xs text-gray-500 hover:text-[#00AEEC] cursor-pointer gap-1 group select-none"
                 onClick={handleRefreshRecommendations}
              >
                 <RefreshCw size={12} className={`transition-transform duration-500 ${isRotating ? 'animate-spin' : 'group-hover:rotate-180'}`} /> 
                 换一换
              </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 min-h-[220px]">
              {currentRecommendations.map((game, idx) => (
                  <div 
                    key={`${game.id}-${recIndex}`} 
                    className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100 flex flex-col animate-in fade-in zoom-in-95"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                          <LazyImage src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          
                          {/* Corner Badge (Activity/Hot) */}
                          {game.isActivity && (
                              <span className="absolute top-0 left-0 bg-[#FF9212] text-white text-[11px] font-bold px-2 py-0.5 rounded-br-lg z-10 shadow-sm">
                                  活动
                              </span>
                          )}
                          {!game.isActivity && game.rating && game.rating >= 9 && (
                              <span className="absolute top-0 left-0 bg-[#FA5A57] text-white text-[11px] font-bold px-2 py-0.5 rounded-br-lg z-10 shadow-sm">
                                  热门
                              </span>
                          )}
                      </div>
                      
                      <div className="p-3 flex flex-col flex-1">
                          <h3 className="text-[14px] font-bold text-gray-800 mb-2 truncate group-hover:text-[#00AEEC] transition-colors">
                              {game.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-2">
                             {/* Ranking/Status Tag */}
                             {game.tag && game.tag !== '活动' && (
                                <span className={`text-[10px] px-1 rounded-sm border ${
                                    game.tag.includes('榜') 
                                        ? 'bg-[#FA5A57]/5 text-[#FA5A57] border-transparent font-medium' 
                                        : 'bg-transparent text-gray-500 border-gray-300'
                                }`}>
                                    {game.tag}
                                </span>
                             )}
                             
                             {/* Rating */}
                             {game.rating && game.rating > 0 && (
                                <span className="text-[#FF9212] text-xs font-bold flex items-center gap-0.5 ml-auto">
                                    <Star size={10} fill="currentColor"/> {game.rating}
                                </span>
                             )}
                          </div>
                          
                          <p className="text-[12px] text-gray-400 truncate mt-auto">{game.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* ZONE D: Rankings (Fully Realized) */}
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
          
          {/* Column 1: Hot Games */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-[#FA5A57]/10 flex items-center justify-center">
                    <Flame className="text-[#FA5A57] fill-[#FA5A57]" size={18} />
                 </div>
                 <h2 className="text-lg font-bold text-gray-800">热门游戏榜</h2>
                 <span className="text-xs text-gray-400 ml-auto cursor-pointer hover:text-[#00AEEC] flex items-center">
                    查看更多 <ChevronRight size={12} />
                 </span>
              </div>
              <div className="flex-1 space-y-5">
                  {RANKING_HOT.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group cursor-pointer relative">
                          <div className={`w-6 text-center font-black text-xl italic ${
                              idx === 0 ? 'text-[#FA5A57]' : 
                              idx === 1 ? 'text-[#FA5A57]/80' : 
                              idx === 2 ? 'text-[#FA5A57]/60' : 'text-gray-300 text-lg font-bold'
                          }`}>
                              {item.rank}
                          </div>
                          
                          <div className="relative w-12 h-12 shrink-0">
                              <LazyImage src={item.icon} alt={item.name} className="w-full h-full rounded-[10px] object-cover border border-gray-100" />
                              {idx === 0 && <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FA5A57] rounded-full border-2 border-white flex items-center justify-center">
                                  <Crown size={8} className="text-white fill-white" />
                              </div>}
                          </div>

                          <div className="flex-1 min-w-0">
                              <div className="text-[14px] font-medium text-gray-800 group-hover:text-[#00AEEC] truncate transition-colors">
                                  {item.name}
                              </div>
                              <div className="flex gap-2 text-[10px] text-gray-400 mt-1">
                                  {item.tags.map(t => <span key={t} className="bg-[#F1F2F3] px-1.5 py-0.5 rounded text-[#9499A0]">{t}</span>)}
                              </div>
                          </div>
                          
                          <button className="bg-[#FA5A57]/10 hover:bg-[#FA5A57] text-[#FA5A57] hover:text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all">
                              下载
                          </button>
                      </div>
                  ))}
              </div>
          </div>

          {/* Column 2: PC Games */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-[#00AEEC]/10 flex items-center justify-center">
                    <Monitor className="text-[#00AEEC]" size={18} />
                 </div>
                 <h2 className="text-lg font-bold text-gray-800">PC端游榜</h2>
                 <span className="text-xs text-gray-400 ml-auto cursor-pointer hover:text-[#00AEEC] flex items-center">
                    查看更多 <ChevronRight size={12} />
                 </span>
              </div>
              <div className="flex-1 space-y-5">
                  {RANKING_PC.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                          <div className={`w-6 text-center font-black text-xl italic ${
                              idx === 0 ? 'text-[#00AEEC]' : 
                              idx === 1 ? 'text-[#00AEEC]/80' : 
                              idx === 2 ? 'text-[#00AEEC]/60' : 'text-gray-300 text-lg font-bold'
                          }`}>
                              {item.rank}
                          </div>
                          
                          <div className="w-12 h-12 shrink-0">
                              <LazyImage src={item.icon} alt={item.name} className="w-full h-full rounded-[10px] object-cover border border-gray-100" />
                          </div>

                          <div className="flex-1 min-w-0">
                              <div className="text-[14px] font-medium text-gray-800 group-hover:text-[#00AEEC] truncate transition-colors">
                                  {item.name}
                              </div>
                              <div className="flex gap-2 text-[10px] text-gray-400 mt-1">
                                  {item.tags.map(t => <span key={t} className="bg-[#F1F2F3] px-1.5 py-0.5 rounded text-[#9499A0]">{t}</span>)}
                              </div>
                          </div>
                          
                          <button className="border border-[#00AEEC] text-[#00AEEC] hover:bg-[#00AEEC] hover:text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all">
                              下载
                          </button>
                      </div>
                  ))}
              </div>
          </div>

          {/* Column 3: Pre-order Games */}
          <div className="bg-[#EFFFF6] rounded-xl p-5 shadow-sm border border-[#00C075]/20 flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
              {/* Decorative Background Icon */}
              <Trophy className="absolute -bottom-6 -right-6 text-[#00C075]/5 w-32 h-32" />
              
              <div className="flex items-center gap-2 mb-6 relative z-10">
                 <div className="w-8 h-8 rounded-full bg-[#00C075]/10 flex items-center justify-center">
                    <Award className="text-[#00C075]" size={18} />
                 </div>
                 <h2 className="text-lg font-bold text-gray-800">游戏预约榜</h2>
                 <span className="text-xs text-gray-400 ml-auto cursor-pointer hover:text-[#00AEEC] flex items-center">
                    查看更多 <ChevronRight size={12} />
                 </span>
              </div>
              <div className="flex-1 space-y-5 relative z-10">
                  {RANKING_PREORDER.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                           <div className="relative w-8 flex justify-center shrink-0">
                              {idx < 3 ? (
                                  <Crown size={22} className={
                                      idx === 0 ? 'text-[#FFD700] fill-[#FFD700]' : 
                                      idx === 1 ? 'text-[#C0C0C0] fill-[#C0C0C0]' : 
                                      'text-[#B87333] fill-[#B87333]'
                                  } />
                              ) : (
                                  <span className="text-gray-400 font-bold italic text-lg">{item.rank}</span>
                              )}
                           </div>
                          
                          <div className="w-12 h-12 shrink-0">
                              <LazyImage src={item.icon} alt={item.name} className="w-full h-full rounded-[10px] object-cover shadow-sm" />
                          </div>

                          <div className="flex-1 min-w-0">
                              <div className="text-[14px] font-medium text-gray-800 group-hover:text-[#00AEEC] truncate transition-colors">
                                  {item.name}
                              </div>
                              <div className="text-[10px] text-gray-500 mt-1 flex items-center gap-2">
                                  <span className="font-bold text-[#FF9212]">{item.score}分</span>
                                  <span className="w-0.5 h-2 bg-gray-300"></span>
                                  <span className="text-gray-400">{item.tags[0]}</span>
                              </div>
                          </div>
                          
                          <button className="bg-[#00C075] hover:bg-[#00C075]/90 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all shadow-sm shadow-[#00C075]/20">
                              预约
                          </button>
                      </div>
                  ))}
              </div>
          </div>

      </div>

    </div>
  );
};
