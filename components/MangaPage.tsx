import React from 'react';
import { Search, Download, History, BookOpen, User, Upload, ChevronLeft, ChevronRight, MessageSquare, Menu, MonitorPlay, Crown, Flame, CheckCircle, TrendingUp } from 'lucide-react';

interface MangaPageProps {
  onNavigate: (page: any) => void;
}

const MANGA_NAV = ["首页", "分类", "更新", "排行榜"];
const GENRES = ["热血", "古风", "玄幻", "奇幻", "悬疑", "都市", "历史", "武侠仙侠", "游戏竞技", "悬疑灵异", "架空", "青春", "西幻", "现代", "全部 >"];

const HERO_MANGA = [
  { id: 1, title: "回归后的魔王变善良了", img: "https://picsum.photos/id/10/300/400" },
  { id: 2, title: "连载5周年", img: "https://picsum.photos/id/11/300/400" },
  { id: 3, title: "神秘降临：我能主宰诡异", subtitle: "国漫新作 | 奇幻灵异 | 智商在线", desc: "困于致命的恐怖怪谈空间，以命相搏去主宰超自然...", img: "https://picsum.photos/id/12/500/600", active: true },
  { id: 4, title: "2055", img: "https://picsum.photos/id/13/300/400" },
  { id: 5, title: "十个", img: "https://picsum.photos/id/14/300/400" },
  { id: 6, title: "我独自升级", img: "https://picsum.photos/id/15/300/400" },
  { id: 7, title: "我家大师兄脑子有坑", img: "https://picsum.photos/id/16/300/400" },
];

export const MangaPage: React.FC<MangaPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Custom Manga Header */}
      <div className="w-full bg-white h-[64px] flex items-center justify-center px-4 md:px-6 relative z-50 shadow-sm">
         <div className="max-w-[1700px] w-full flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
                   <div className="w-10 h-10 rounded-full bg-[#00AEEC] flex items-center justify-center">
                        <img src="https://www.bilibili.com/favicon.ico" className="w-6 h-6 invert brightness-0" />
                   </div>
                   <div className="flex flex-col">
                       <span className="font-bold text-lg leading-none text-gray-800">哔哩哔哩漫画</span>
                       <span className="text-[10px] text-gray-400">bilibili manga</span>
                   </div>
               </div>
               <div className="flex items-center gap-6 text-[15px] text-gray-700 font-medium ml-4">
                  <div className="flex items-center gap-1 hover:text-[#00AEEC] cursor-pointer text-gray-500" onClick={() => onNavigate('home')}>
                      <MonitorPlay size={14}/>
                      主站
                  </div>
                  <span className="text-[#00AEEC] cursor-pointer font-bold relative after:content-[''] after:absolute after:-bottom-[21px] after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#00AEEC]">首页</span>
                  {MANGA_NAV.slice(1).map((item, idx) => (
                    <a key={idx} href="#" className="hover:text-[#00AEEC] transition-colors">{item}</a>
                  ))}
               </div>
            </div>

            {/*