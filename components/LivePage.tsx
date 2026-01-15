
import React from 'react';
import { User, Signal, Trophy, Heart, MousePointer2, ChevronRight, RefreshCw, Flame, BarChart3, Medal } from 'lucide-react';
import { HDSLB_IMAGE_POOL } from '../constants';
import { LazyImage } from './LazyImage';

const LIVE_SIDEBAR = [
  { id: 1, title: '新版吸血刀杨戬专精装', streamer: '王者荣耀-老王', viewers: '10.2万', cover: HDSLB_IMAGE_POOL.gaming[0] },
  { id: 2, title: '电子榨菜：奥特曼格斗进化', streamer: '复古游戏社', viewers: '5.6万', cover: HDSLB_IMAGE_POOL.gaming[1] },
  { id: 3, title: '运动体育：灌篮高手全国大赛', streamer: '篮球部落', viewers: '3.3万', cover: HDSLB_IMAGE_POOL.life[7] },
  { id: 4, title: 'CSGO 冠军赛决赛重播', streamer: 'FPS赛事中心', viewers: '15.8万', cover: HDSLB_IMAGE_POOL.gaming[7] },
  { id: 5, title: '无畏契约：试训中，请看我直播', streamer: '瓦罗兰特', viewers: '8.9万', cover: HDSLB_IMAGE_POOL.gaming[6] },
];

const SUB_NAV = ["首页", "直播", "网游", "手游", "单机游戏", "虚拟主播", "娱乐", "电台", "赛事", "聊天室", "生活", "知识", "帮我玩", "互动玩法", "购物"];

const DANMAKU_LIST = [
  "23333333", "好强啊", "这就单刷了？", "前面可是地狱啊", "666666", "BGM好评", "空降成功", "这也太丝滑了吧", "这是碳基生物能打出来的操作？", "主播好帅", "下次一定", "泪目", "这就去试试"
];

const HOT_ZONES = [
    { name: '英雄联盟', img: HDSLB_IMAGE_POOL.gaming[2] },
    { name: '永劫无间', img: HDSLB_IMAGE_POOL.gaming[5] },
    { name: '守望先锋', img: HDSLB_IMAGE_POOL.gaming[7] },
];

const NEWS_LIST = [
    { title: '[公告] 关于个人所得税扣缴申报的通知', date: '09-09' },
    { title: '[公告] 粉丝勋章亲密度改版等级变化说明', date: '09-11' },
    { title: '[公告] 历史上舰用户亲密度优化说明', date: '09-12' },
    { title: '[规范] 哔哩哔哩直播低俗引流治理规范', date: '07-16' },
];

const RANKING_LIST = [
    { rank: 1, name: '渡渡鸟渡渡', heat: '2233', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dodo', desc: '30人助力中' },
    { rank: 2, name: '琳喃喃吖', heat: '2038', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lin', desc: '24人助力中' },
    { rank: 3, name: '怼怼-唱见连', heat: '1606', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dui', desc: '18人助力中' },
    { rank: 4, name: '财经导师大将之风', heat: '1586', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Finance', desc: '47人助力中' },
    { rank: 5, name: '齐格飞__', heat: '1050', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zig', desc: '13人助力中' },
    { rank: 6, name: '虚拟歌姬-艾拉', heat: '992', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ella', desc: '5人助力中' },
];

const RECOMMENDED_LIVES = [
    { id: 101, title: '周星驰 李连杰 经典 动作 喜剧', streamer: '给你加个状态', viewers: '776', cover: HDSLB_IMAGE_POOL.life[1], tag: '电子榨菜', tagColor: '#7D8C96' },
    { id: 102, title: '逃跑吧少年：金库攻防', streamer: '刑部姬子', viewers: '2', cover: HDSLB_IMAGE_POOL.gaming[8], tag: '竞技玩法', tagColor: '#FB7299' },
    { id: 103, title: '矮人之王重返战场！骑砍2', streamer: '骑马与砍杀中文站', viewers: '2501', cover: HDSLB_IMAGE_POOL.gaming[3], tag: '骑马与砍杀', tagColor: '#E6A23C' },
    { id: 104, title: '电影开始了！', streamer: '赛博于大爷i', viewers: '2.2万', cover: HDSLB_IMAGE_POOL.life[3], tag: '电子榨菜', tagColor: '#7D8C96' },
    { id: 105, title: '我跟你说，我今天天赐的礼物', streamer: '黑羊Klein', viewers: '472', cover: HDSLB_IMAGE_POOL.tech[2], tag: '男声电台', badge: 'SS主播', tagColor: '#00AEEC' },
    { id: 106, title: '每日治愈：猫咪咖啡馆实况', streamer: '喵星人观察员', viewers: '1.2万', cover: HDSLB_IMAGE_POOL.life[2], tag: '萌宠', tagColor: '#FB7299' },
    { id: 107, title: 'APEX：钻石局单排冲大师', streamer: '皮特佩努', viewers: '8892', cover: HDSLB_IMAGE_POOL.gaming[5], tag: 'FPS', tagColor: '#E6A23C' },
    { id: 108, title: '画画：约稿/摸鱼/聊天', streamer: '美术生小涂', viewers: '345', cover: HDSLB_IMAGE_POOL.life[4], tag: '绘画', tagColor: '#00AEEC' },
];

export const LivePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F7F8] animate-fade-in relative pb-12">
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes danmaku {
          from { transform: translateX(100%); left: 100%; }
          to { transform: translateX(-200%); left: 0; }
        }
        .danmaku-item {
          position: absolute;
          white-space: nowrap;
          color: white;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
          font-weight: 600;
          font-size: 15px;
          animation: danmaku linear infinite;
          opacity: 0.9;
          user-select: none;
        }
      `}</style>
      
      {/* Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
         <LazyImage src="https://i0.hdslb.com/bfs/archive/4b56801452243285750c18451878b40441584285.jpg" alt="bg" className="w-full h-full object-cover filter blur-lg brightness-75 scale-110" />
         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/20 to-[#F6F7F8]"></div>
      </div>

      <div className="relative z-10 px-4 md:px-12 pt-4">
        
        {/* Live Sub-Header */}
        <div className="flex items-center gap-6 text-white/90 text-[14px] font-medium mb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
            <div className="flex items-center gap-2 mr-4">
               <span className="font-bold text-lg text-white">bilibili直播</span>
            </div>
            {SUB_NAV.map((item, idx) => (
                <span key={idx} className={`cursor-pointer hover:text-white transition-colors ${idx === 0 ? 'text-[#00AEEC] bg-white rounded-full px-3 py-0.5' : ''}`}>
                    {item}
                </span>
            ))}
            
            <div className="ml-auto flex items-center bg-white/20 rounded-full px-3 py-1.5 w-[200px] backdrop-blur-sm">
                 <span className="text-white/60 text-xs">何金银大佬</span>
            </div>
            
            <button className="bg-[#FB7299] hover:bg-[#FB7299]/90 text-white px-4 py-1.5 rounded-md text-xs font-bold transition-colors">我要开播</button>
        </div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[500px] mb-8">
            {/* Left: Main Player */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-2xl relative group isolate">
                {/* VIDEO LAYER */}
                <video 
                  className="w-full h-full object-cover scale-105"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="https://i0.hdslb.com/bfs/archive/7565451203092576269.jpg"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                </video>
                {/* ... existing danmaku/overlays ... */}
            </div>

            {/* Right: Recommendation Sidebar */}
            <div className="w-full lg:w-[320px] flex flex-col gap-3 shrink-0">
               {LIVE_SIDEBAR.map((item) => (
                   <div key={item.id} className="relative h-[88px] rounded-lg overflow-hidden cursor-pointer group hover:ring-2 ring-[#00AEEC] transition-all bg-black/20 backdrop-blur-md border border-white/10">
                       <LazyImage src={item.cover} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>
                       <div className="relative z-20 p-2 text-white h-full flex flex-col justify-between">
                           <span className="text-[13px] font-medium line-clamp-1">{item.title}</span>
                           <div className="flex justify-between items-end text-xs text-white/70">
                               <span>{item.streamer}</span>
                               <span className="flex items-center gap-1"><User size={10} />{item.viewers}</span>
                           </div>
                       </div>
                   </div>
               ))}
            </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 min-w-0">
                <div className="flex flex-col lg:flex-row gap-5 mb-10 h-auto lg:h-[230px]">
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group shadow-sm bg-gray-200">
                            <LazyImage src={HDSLB_IMAGE_POOL.banners[0]} alt="Banner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
                        </div>
                        <div className="h-[80px] flex gap-4">
                            <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group">
                                <LazyImage src={HDSLB_IMAGE_POOL.banners[1]} alt="Sub" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </div>
                             <div className="flex-1 relative rounded-lg overflow-hidden cursor-pointer group">
                                <LazyImage src={HDSLB_IMAGE_POOL.banners[3]} alt="Sub" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[260px] flex flex-col gap-4 shrink-0">
                        <div className="bg-white rounded-lg p-3 shadow-sm flex-1 flex flex-col">
                            <div className="font-bold text-[15px] text-gray-800 mb-3">热门分区</div>
                            <div className="flex gap-2 h-full">
                                {HOT_ZONES.map((zone, idx) => (
                                    <div key={idx} className="flex-1 relative rounded overflow-hidden cursor-pointer group">
                                        <LazyImage src={zone.img} alt={zone.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center z-10">
                                            <span className="text-white text-xs font-medium scale-90">{zone.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* News... */}
                    </div>
                </div>

                <div className="mb-8">
                     <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-2xl font-normal text-gray-800">推荐直播</h2>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {RECOMMENDED_LIVES.map((live) => (
                            <div key={live.id} className="group cursor-pointer">
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-2.5 bg-gray-200">
                                    <LazyImage src={live.cover} alt={live.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                                    {/* ...tags/badges... */}
                                </div>
                                <h3 className="text-[14px] text-gray-800 leading-tight line-clamp-2 group-hover:text-[#00AEEC] transition-colors font-medium">
                                    {live.title}
                                </h3>
                                <div className="text-[12px] text-gray-400 mt-1 flex items-center gap-1">
                                    <span className="border border-gray-300 rounded-sm px-1 scale-90 origin-left">{live.tag}</span>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Ranking Sidebar */}
            <div className="w-full xl:w-[280px] shrink-0">
                <div className="bg-white rounded-lg p-4 shadow-sm sticky top-4">
                    {/* ... Ranking Header ... */}
                    <div className="flex flex-col gap-5">
                        {RANKING_LIST.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative shrink-0">
                                    <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${idx === 0 ? 'border-[#FFD700]' : idx === 1 ? 'border-[#C0C0C0]' : idx === 2 ? 'border-[#B87333]' : 'border-transparent'}`}>
                                        <LazyImage src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[13px] font-medium text-gray-800 group-hover:text-[#00AEEC] truncate">
                                        {item.name}
                                    </div>
                                    <div className="text-[11px] text-gray-400 truncate">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
