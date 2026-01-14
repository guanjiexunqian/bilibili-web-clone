import React from 'react';
import { User, Signal, Trophy, Heart, MessageSquare, MoreHorizontal, MousePointer2 } from 'lucide-react';

const LIVE_SIDEBAR = [
  { id: 1, title: '新版吸血刀杨戬专精装', streamer: '王者荣耀-老王', viewers: '10.2万', cover: 'https://picsum.photos/id/1055/320/180' },
  { id: 2, title: '电子榨菜：奥特曼格斗进化', streamer: '复古游戏社', viewers: '5.6万', cover: 'https://picsum.photos/id/1056/320/180' },
  { id: 3, title: '运动体育：灌篮高手全国大赛', streamer: '篮球部落', viewers: '3.3万', cover: 'https://picsum.photos/id/1057/320/180' },
  { id: 4, title: 'CSGO 冠军赛决赛重播', streamer: 'FPS赛事中心', viewers: '15.8万', cover: 'https://picsum.photos/id/1058/320/180' },
  { id: 5, title: '无畏契约：试训中，请看我直播', streamer: '瓦罗兰特', viewers: '8.9万', cover: 'https://picsum.photos/id/1059/320/180' },
];

const RECOMMENDED_ZONES = [
  { name: '网游', icon: 'https://picsum.photos/id/100/100/100', active: true },
  { name: '手游', icon: 'https://picsum.photos/id/101/100/100', active: false },
  { name: '单机游戏', icon: 'https://picsum.photos/id/102/100/100', active: false },
  { name: '娱乐', icon: 'https://picsum.photos/id/103/100/100', active: false },
  { name: '电台', icon: 'https://picsum.photos/id/104/100/100', active: false },
  { name: '虚拟主播', icon: 'https://picsum.photos/id/105/100/100', active: false },
  { name: '互动玩法', icon: 'https://picsum.photos/id/106/100/100', active: false },
];

const SUB_NAV = ["首页", "直播", "网游", "手游", "单机游戏", "虚拟主播", "娱乐", "电台", "赛事", "聊天室", "生活", "知识", "帮我玩", "互动玩法", "购物"];

export const LivePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F7F8] animate-fade-in relative">
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
      
      {/* Background Banner - Simulating the purple/galaxy theme from the screenshot */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
         <img src="https://picsum.photos/id/1048/1920/800" alt="bg" className="w-full h-full object-cover filter blur-sm brightness-75" />
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

        {/* Main Content Area: Player + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[500px] mb-8">
            
            {/* Left: Main Player */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-2xl relative group">
                <img src="https://picsum.photos/id/1053/1200/675" className="w-full h-full object-cover opacity-90" />
                
                {/* Simulated UI Overlay */}
                <div className="absolute top-4 left-4 text-white drop-shadow-md">
                   <h1 className="text-2xl font-bold tracking-wide">我宁愿做一个平凡的人</h1>
                   <div className="flex items-center gap-2 text-xs mt-1 opacity-90">
                      <span className="bg-[#FB7299] px-1 rounded">直播中</span>
                      <span>588723616</span>
                   </div>
                </div>

                {/* Game UI Simulation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Just some fake UI elements to look like a game */}
                    <div className="w-[80%] h-[80%] border border-white/10 rounded-lg relative">
                       <div className="absolute bottom-10 right-10 flex gap-2">
                          <div className="w-12 h-12 rounded-full bg-black/50 border-2 border-yellow-400 flex items-center justify-center text-white font-bold text-xs">攻击</div>
                          <div className="w-10 h-10 rounded-full bg-black/50 border border-white flex items-center justify-center text-white font-bold text-xs">闪现</div>
                       </div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 text-sm bg-black/40 px-3 py-1 rounded">
                           进入直播间
                       </div>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center px-4 text-white">
                    <div className="flex items-center gap-4 w-full">
                       <Signal size={20} />
                       <input type="text" placeholder="上船帮打20星每天上车过期也上..." className="bg-transparent border-b border-white/30 text-xs w-[60%] placeholder-white/70 focus:outline-none pb-1" />
                       <div className="ml-auto flex gap-3 text-xs">
                           <span className="bg-[#FB7299] px-2 py-0.5 rounded-full">10个灯牌上车心动盲盒3把</span>
                       </div>
                    </div>
                </div>
            </div>

            {/* Right: Recommendation Sidebar */}
            <div className="w-full lg:w-[320px] flex flex-col gap-3 shrink-0">
               {LIVE_SIDEBAR.map((item) => (
                   <div key={item.id} className="relative h-[88px] rounded-lg overflow-hidden cursor-pointer group hover:ring-2 ring-[#00AEEC] transition-all bg-black/20 backdrop-blur-md border border-white/10">
                       <img src={item.cover} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                       <div className="relative z-10 p-2 text-white h-full flex flex-col justify-between">
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

        {/* My Follows */}
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-lg text-gray-800">我的关注</h3>
                <span className="text-xs bg-[#FB7299] text-white px-1.5 py-0.5 rounded">2人正在直播中</span>
                <span className="text-xs text-gray-500 ml-auto cursor-pointer">查看全部 &gt;</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex gap-6 shadow-sm">
                <div className="flex items-center gap-3 cursor-pointer group">
                   <div className="relative">
                       <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FB7299] p-0.5">
                           <img src="https://picsum.photos/id/64/100/100" className="w-full h-full rounded-full object-cover" />
                       </div>
                       <div className="absolute -bottom-1 -right-1 bg-[#FB7299] rounded-full p-0.5 border-2 border-white">
                           <Signal size={8} className="text-white" />
                       </div>
                   </div>
                   <div>
                       <div className="text-sm font-medium group-hover:text-[#00AEEC]">无畏契约赛事</div>
                       <div className="text-xs text-gray-400">3763</div>
                   </div>
                </div>
                 <div className="flex items-center gap-3 cursor-pointer group">
                   <div className="relative">
                       <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FB7299] p-0.5">
                           <img src="https://picsum.photos/id/65/100/100" className="w-full h-full rounded-full object-cover" />
                       </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#FB7299] rounded-full p-0.5 border-2 border-white">
                           <Signal size={8} className="text-white" />
                       </div>
                   </div>
                   <div>
                       <div className="text-sm font-medium group-hover:text-[#00AEEC]">龟龟奎奎</div>
                       <div className="text-xs text-gray-400">1.1万人看过</div>
                   </div>
                </div>
            </div>
        </div>

        {/* Zone Recommendations */}
        <div className="mb-12">
             <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-lg text-gray-800">分区推荐</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {RECOMMENDED_ZONES.map((zone, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${zone.name}`} className="w-12 h-12 mb-1" />
                        <span className="text-sm font-medium text-gray-700">{zone.name}</span>
                        <span className="text-xs text-[#00AEEC]">寻找心动</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Right Fixed Tool Bar (Visual Only) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-4 text-xs text-gray-500">
           <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
               <MousePointer2 size={20} />
               <span>开播设置</span>
           </div>
           <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
               <Trophy size={20} />
               <span>排行榜</span>
           </div>
           <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00AEEC]">
               <Heart size={20} />
               <span>公会入驻</span>
           </div>
      </div>

    </div>
  );
};