import React, { useState, useEffect, useRef } from 'react';
import { Search, Upload, Mail, Lightbulb, Star, History, MonitorPlay, Download, Palette, X, RefreshCw, Tv, MessageCircle, MonitorCheck, Flame } from 'lucide-react';
import { LoginModal } from './LoginModal';
import { HDSLB_IMAGE_POOL } from '../constants';
import { LazyImage } from './LazyImage';
import { Page } from '../types';

interface HeaderProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const SEARCH_HISTORY = ["GitHub", "ai", "无主之地", "小米米沙", "技术爬爬虾", "ppt", "谷歌h", "黎明前20分钟", "刺客伍六七", "剑妈"];

const PLACEHOLDERS = [
  "黑神话悟空 4K实机演示", 
  "AI生成视频教程 入门到精通", 
  "葬送的芙莉莲 治愈神作", 
  "Sora模型实测 颠覆行业", 
  "Gemini API开发 实战指南",
  "原神4.4版本 闲云测评",
  "周杰伦新歌 圣诞星"
];

const OLD_HOT_SEARCH = [
  { rank: 1, title: '外卖大战为何停不下来', tag: '新', isHot: false },
  { rank: 2, title: 'LPL揭幕战WBG IG', tag: '热', isHot: true },
  { rank: 3, title: '从警察角度解析ICE枪击事件', tag: '', isHot: false },
  { rank: 4, title: '新疆大盘鸡如何征服河南', tag: '新', isHot: false },
  { rank: 5, title: '尹锡悦被要求判死刑 2月19日...', tag: '', isHot: false },
  { rank: 6, title: 'LPL第一赛段宣传片', tag: '', isHot: false },
  { rank: 7, title: '张小泉集团破产重组的背后', tag: '', isHot: false },
  { rank: 8, title: '檀健次进行曲来了', tag: '', isHot: false },
  { rank: 9, title: '徐静雨建议杨瀚森换球队', tag: '', isHot: false },
  { rank: 10, title: '沪深北交易所提高融资本金', tag: '', isHot: false },
];

const LIVE_HOT_SEARCH = [
  { rank: 1, title: '黑神话悟空最新实机演示', tag: '爆', isHot: true },
  { rank: 2, title: '考研成绩查询入口开启', tag: '热', isHot: true },
  { rank: 3, title: 'Sora模型生成的视频太真实了', tag: '新', isHot: false },
  { rank: 4, title: '周杰伦新歌彩蛋解析', tag: '热', isHot: false },
  { rank: 5, title: '为何年轻人开始断亲了？', tag: '议', isHot: false },
  { rank: 6, title: 'Faker名人堂皮肤价格引争议', tag: '', isHot: false },
  { rank: 7, title: '小米汽车SU7正式上市', tag: '新', isHot: false },
  { rank: 8, title: '只有河南卫视懂中国式浪漫', tag: '', isHot: false },
  { rank: 9, title: '帕鲁：这班上的比我还累', tag: '', isHot: false },
  { rank: 10, title: 'Python爬虫教程播放量破百万', tag: '热', isHot: false },
];

export const Header: React.FC<HeaderProps> = ({ onSearch, isSearching, onNavigate, currentPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hotSearchList, setHotSearchList] = useState(OLD_HOT_SEARCH);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        const query = searchValue.trim() || PLACEHOLDERS[placeholderIndex];
        onSearch(query);
        setIsSearchFocused(false);
    }
  };

  const handleRefreshHotSearch = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (isRefreshing) return;
    
    setIsRefreshing(true);
    
    setTimeout(() => {
        setHotSearchList(prev => prev === OLD_HOT_SEARCH ? LIVE_HOT_SEARCH : OLD_HOT_SEARCH);
        setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="relative w-full h-[155px] mb-2 group/header select-none">
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
        .login-tip-arrow {
            position: absolute; top: -6px; left: 50%; transform: translateX(-50%);
            width: 0; height: 0; border-left: 6px solid transparent;
            border-right: 6px solid transparent; border-bottom: 6px solid #fff;
        }
      `}</style>

      {/* Banner Background with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-100">
        <div 
            className="w-full h-full relative"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }} 
        >
            <LazyImage 
              src={HDSLB_IMAGE_POOL.banners[2]} // A nice landscape banner
              alt="Banner" 
              className="w-full h-[120%] object-cover object-center"
            />
        </div>
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 pt-4">
        <div className="flex items-center justify-between text-white font-medium">
          
          {/* Left: Logo & Main Nav */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer mr-2 drop-shadow-md group" onClick={() => onNavigate('home')}>
               <div className="relative group-hover:animate-bounce">
                 <MonitorPlay className="absolute -left-6 top-0 text-white fill-white" size={24} />
                 <span className="font-bold text-xl tracking-tighter ml-1" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>bilibili</span>
               </div>
            </div>
            <nav className="hidden xl:flex items-center gap-5 text-[14px] relative">
              {[
                { id: 'home', label: '首页', icon: true },
                { id: 'anime', label: '番剧' },
                { id: 'live', label: '直播' },
                { id: 'game', label: '游戏中心' },
                { id: 'manga', label: '漫画' },
                { id: 'download', label: '下载客户端', iconType: 'download' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href="#" 
                  onClick={(e) => { e.preventDefault(); if (item.id !== 'download') onNavigate(item.id as any); }} 
                  className={`hover:text-white/80 transition flex items-center gap-1 drop-shadow-md ${currentPage === item.id ? 'font-bold text-white' : 'text-white/95'}`}
                >
                  {item.icon && (
                      <div className="w-4 h-4 rounded-full bg-[#FB7299] flex items-center justify-center shadow-sm">
                          <MonitorPlay size={10} className="ml-0.5 fill-white"/>
                      </div>
                  )}
                  {item.iconType === 'download' && <Download size={16} />}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: Search Bar (Complex) */}
          <div className="flex-1 max-w-[500px] mx-8 relative" ref={searchContainerRef}>
            <div className={`relative flex items-center transition-all duration-300 overflow-hidden h-[40px] shadow-sm group border 
                ${isSearchFocused 
                    ? 'bg-white rounded-t-lg border-transparent shadow-lg' 
                    : 'bg-[#F1F2F3]/90 hover:bg-white rounded-[6px] border-transparent hover:shadow-md'}`}
            >
              <input 
                type="text" 
                placeholder={PLACEHOLDERS[placeholderIndex]} 
                className={`w-full h-full bg-transparent px-4 text-[14px] focus:outline-none transition-colors ${isSearchFocused ? 'text-gray-900 placeholder-gray-400' : 'text-gray-700 placeholder-gray-500'}`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onKeyDown={handleKeyDown}
              />
              <button 
                onClick={() => onSearch(searchValue || PLACEHOLDERS[placeholderIndex])}
                className="absolute right-2 p-1.5 hover:bg-gray-200/50 rounded transition-colors group/btn"
              >
                <Search size={18} strokeWidth={2.5} className={`transition-colors ${isSearching ? "animate-pulse text-[#00AEEC]" : "text-gray-600 group-hover/btn:text-[#00AEEC]"}`} />
              </button>
            </div>

            {/* Search Dropdown */}
            {isSearchFocused && (
                <div className="absolute left-0 right-0 top-[40px] bg-white rounded-b-lg shadow-xl z-50 p-4 animate-fade-in border-t border-gray-100">
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-[14px] font-bold text-gray-900">搜索历史</h3>
                            <span className="text-[12px] text-gray-400 cursor-pointer hover:text-gray-600">清空</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SEARCH_HISTORY.map((tag, idx) => (
                                <div key={idx} className="bg-[#F6F7F8] hover:bg-[#E3E5E7] text-gray-600 hover:text-[#00AEEC] text-[12px] px-2.5 py-1.5 rounded-[4px] cursor-pointer transition-colors relative group/tag max-w-[120px] truncate">
                                    {tag}
                                    <div className="hidden group-hover/tag:flex absolute -top-1.5 -right-1.5 bg-gray-300 w-3.5 h-3.5 rounded-full items-center justify-center text-white">
                                        <X size={8} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-100 mb-4"></div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-[14px] font-bold text-gray-900">bilibili热搜</h3>
                            <div 
                                className="flex items-center gap-1 text-[12px] text-gray-400 cursor-pointer hover:text-[#00AEEC] select-none group/refresh"
                                onClick={handleRefreshHotSearch}
                            >
                                <RefreshCw size={12} className={`transition-transform duration-500 ${isRefreshing ? "animate-spin text-[#00AEEC]" : "group-hover/refresh:rotate-180"}`} />
                                <span>{isRefreshing ? "爬取中..." : "换一换"}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {hotSearchList.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 cursor-pointer group w-full overflow-hidden">
                                    <span className={`text-[14px] w-4 text-center shrink-0 font-bold ${idx < 3 ? 'text-[#18191C]' : 'text-[#9499A0]'}`}>
                                        {item.rank}
                                    </span>
                                    <span className="text-[13px] text-[#18191C] truncate group-hover:text-[#00AEEC] flex-1 transition-colors">
                                        {item.title}
                                    </span>
                                    {item.tag && (
                                        <span className={`text-[10px] px-1 rounded h-fit shrink-0 font-medium ${
                                            item.tag === '新' ? 'bg-[#FFD21E] text-white' : 
                                            item.tag === '热' ? 'bg-[#FF4D4F] text-white' : 
                                            item.tag === '爆' ? 'bg-[#C2185B] text-white' : 
                                            item.tag === '议' ? 'bg-[#00AEEC] text-white' : 'bg-gray-200 text-gray-500'
                                        }`}>
                                            {item.tag}
                                        </span>
                                    )}
                                    {item.isHot && !item.tag && (
                                         <div className="bg-[#FF4D4F] w-3.5 h-3.5 rounded flex items-center justify-center shrink-0">
                                            <Flame size={8} className="text-white fill-white" />
                                         </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
          </div>

          {/* Right: User Actions (with Login Popover) */}
          <div className="flex items-center gap-2 text-[11px] text-white">
            
            {/* Avatar & Login Popover */}
            <div className="flex flex-col items-center cursor-pointer min-w-[50px] relative group/avatar z-50">
               <div 
                  className="w-[38px] h-[38px] rounded-full bg-gray-200 overflow-hidden border-[2px] border-white/50 hover:border-white transition-all shadow-md z-20 group-hover/avatar:scale-125 group-hover/avatar:translate-y-2 duration-300"
                  onClick={() => setIsLoginModalOpen(true)}
               >
                   <div className="absolute inset-0 flex items-center justify-center bg-[#00AEEC] text-white font-bold text-xs">登录</div>
               </div>
               
               {/* Login Popover Content */}
               <div className="absolute top-[38px] left-1/2 -translate-x-1/2 pt-4 w-[320px] hidden group-hover/avatar:block z-10 animate-fade-in origin-top">
                   <div className="bg-white rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.1)] p-6 relative text-gray-900 border border-gray-100">
                       <div className="login-tip-arrow shadow-[0_-2px_4px_rgba(0,0,0,0.02)]"></div>
                       <p className="text-[14px] mb-4 text-left font-bold">登录后你可以：</p>
                       <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                          <div className="flex items-center gap-2.5">
                             <div className="bg-[#00AEEC]/10 p-1.5 rounded-full"><Tv size={16} className="text-[#00AEEC]" /></div>
                             <span className="text-[12px] text-gray-600">免费看高清视频</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                             <div className="bg-[#00AEEC]/10 p-1.5 rounded-full"><History size={16} className="text-[#00AEEC]" /></div>
                             <span className="text-[12px] text-gray-600">多端同步播放记录</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                             <div className="bg-[#00AEEC]/10 p-1.5 rounded-full"><MessageCircle size={16} className="text-[#00AEEC]" /></div>
                             <span className="text-[12px] text-gray-600">发表弹幕/评论</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                             <div className="bg-[#00AEEC]/10 p-1.5 rounded-full"><MonitorCheck size={16} className="text-[#00AEEC]" /></div>
                             <span className="text-[12px] text-gray-600">热门番剧影视看不停</span>
                          </div>
                       </div>
                       <button 
                         className="w-full bg-[#00AEEC] hover:bg-[#00AEEC]/90 text-white py-2.5 rounded-[4px] font-medium text-[14px] transition-colors mb-3 shadow-sm shadow-[#00AEEC]/20"
                         onClick={() => setIsLoginModalOpen(true)}
                       >
                           立即登录
                       </button>
                       <div className="text-center text-[12px] text-gray-400">
                          首次使用？<span className="text-[#00AEEC] cursor-pointer hover:underline" onClick={() => setIsLoginModalOpen(true)}>点我注册</span>
                       </div>
                   </div>
               </div>
            </div>
            
            {/* Standard Icons */}
            <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1 group">
              <div className="w-[20px] h-[20px] rounded-full border border-white flex items-center justify-center bg-white/10 group-hover:bg-[#FB7299] transition-colors shadow-sm">
                 <span className="text-[10px] font-bold">大</span>
              </div>
              <span className="drop-shadow-md transform scale-90">大会员</span>
            </div>

            <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1">
              <Mail size={22} className="drop-shadow-md"/>
              <span className="drop-shadow-md transform scale-90">消息</span>
            </div>

            <div className="flex flex-col items-center cursor-pointer hover:text-white/80 min-w-[40px] gap-1 relative" onClick={() => onNavigate('dynamic')}>
              <Palette size={22} className="drop-shadow-md"/> 
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

            <button className="bg-[#FB7299] hover:bg-[#FB7299]/90 text-white w-[100px] h-[34px] rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors ml-4 shadow-sm hover:translate-y-[-1px]">
              <Upload size={16} />
              <span>投稿</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};