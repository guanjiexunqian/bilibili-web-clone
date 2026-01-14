import React from 'react';
import { Image, Smile, AtSign, BarChart2, Hash, MoreHorizontal, MessageSquare, ThumbsUp, Share2, MoreVertical } from 'lucide-react';

const HOT_SEARCH = [
  { rank: 1, title: '北欧国家将协调应对格陵兰岛问题', tag: '新', isHot: false },
  { rank: 2, title: '今冬最冷寒潮将堆积南下', tag: '热', isHot: true },
  { rank: 3, title: '遥感五十号01星成功发射', tag: '', isHot: false },
  { rank: 4, title: 'ropz年度集锦', tag: '新', isHot: false },
  { rank: 5, title: '韩检方要求判处尹锡悦死刑', tag: '', isHot: false },
  { rank: 6, title: 'UP主锐评苹果谷歌合作', tag: '', isHot: false },
  { rank: 7, title: '华谊兄弟为何要连续质押股份', tag: '', isHot: false },
  { rank: 8, title: '玄界之门碎石拳破禁药狂徒', tag: '独家', isHot: false },
  { rank: 9, title: '复联5剧情走向预测', tag: '', isHot: false },
  { rank: 10, title: '外交部回应伊朗局势', tag: '', isHot: false },
];

const STORY_CIRCLES = [
  { name: '全部动态', icon: 'https://picsum.photos/id/100/50/50', active: true },
  { name: '大佬何金银', icon: 'https://picsum.photos/id/101/50/50', active: false },
  { name: '秋芝2046', icon: 'https://picsum.photos/id/102/50/50', active: false },
  { name: 'IT咖啡馆', icon: 'https://picsum.photos/id/103/50/50', active: false },
  { name: '鬼叔怪谈', icon: 'https://picsum.photos/id/104/50/50', active: false },
  { name: '玄离199', icon: 'https://picsum.photos/id/105/50/50', active: false },
  { name: '小兔崽2', icon: 'https://picsum.photos/id/106/50/50', active: false },
  { name: 'Xuan_酱', icon: 'https://picsum.photos/id/107/50/50', active: false },
];

export const DynamicPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F8] pt-4 font-sans text-[#18191C]">
      <div className="max-w-[1140px] mx-auto flex gap-2.5">
        
        {/* Left Column - User Info & Live */}
        <div className="w-[245px] shrink-0 flex flex-col gap-2.5">
          {/* User Card */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm">
             <div className="w-[72px] h-[72px] rounded-full overflow-hidden border border-gray-100 mb-3">
                <img src="https://picsum.photos/id/64/200/200" className="w-full h-full object-cover" />
             </div>
             <div className="font-bold text-[16px] mb-1 flex items-center gap-1">
                观察寻干 
                <span className="text-[10px] text-[#FB7299] border border-[#FB7299] px-1 rounded">LV5</span>
             </div>
             <div className="flex w-full justify-between px-2 mt-4 text-center">
                <div className="flex flex-col cursor-pointer hover:text-[#00AEEC]">
                   <span className="font-bold text-[14px]">272</span>
                   <span className="text-[12px] text-gray-400">关注</span>
                </div>
                <div className="w-[1px] h-8 bg-gray-200"></div>
                <div className="flex flex-col cursor-pointer hover:text-[#00AEEC]">
                   <span className="font-bold text-[14px]">13</span>
                   <span className="text-[12px] text-gray-400">粉丝</span>
                </div>
                <div className="w-[1px] h-8 bg-gray-200"></div>
                <div className="flex flex-col cursor-pointer hover:text-[#00AEEC]">
                   <span className="font-bold text-[14px]">1</span>
                   <span className="text-[12px] text-gray-400">动态</span>
                </div>
             </div>
          </div>

          {/* Live List */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
             <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-[14px]">正在直播 <span className="text-gray-400 font-normal">2</span></span>
                <span className="text-[12px] text-gray-400 cursor-pointer hover:text-[#00AEEC] flex items-center">更多关注 <ChevronRightIcon size={12}/></span>
             </div>
             <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 cursor-pointer group">
                   <div className="w-10 h-10 rounded-full border-[2px] border-[#FB7299] p-[1px]">
                      <img src="https://picsum.photos/id/77/100/100" className="w-full h-full rounded-full object-cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium truncate group-hover:text-[#00AEEC]">无畏契约赛事</div>
                      <div className="text-[12px] text-gray-400 truncate">恭喜PRX获得2025无畏契约...</div>
                   </div>
                   <span className="bg-[#FB7299] text-white text-[10px] px-1 rounded">直播中</span>
                </div>
                 <div className="flex items-center gap-2 cursor-pointer group">
                   <div className="w-10 h-10 rounded-full border-[2px] border-[#FB7299] p-[1px]">
                      <img src="https://picsum.photos/id/78/100/100" className="w-full h-full rounded-full object-cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium truncate group-hover:text-[#00AEEC]">龟龟奎奎</div>
                      <div className="text-[12px] text-gray-400 truncate">哥伦比娅！我的哥伦比娅嘿...</div>
                   </div>
                   <span className="bg-[#FB7299] text-white text-[10px] px-1 rounded">直播中</span>
                </div>
             </div>
          </div>
        </div>

        {/* Middle Column - Feed */}
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
           
           {/* Post Input */}
           <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[13px] text-[#00AEEC] bg-[#F1F2F3] w-fit px-3 py-1 rounded-full cursor-pointer hover:bg-[#E3E5E7]">
                 <Hash size={14} /> 
                 <span>选择话题</span>
              </div>
              <textarea 
                className="w-full h-[60px] resize-none outline-none text-[14px] placeholder-gray-400"
                placeholder="好的标题更容易获得支持，选填20字&#10;有什么想和大家分享的？"
              ></textarea>
              <div className="flex justify-between items-center mt-2 pt-2">
                 <div className="flex gap-4 text-gray-500">
                    <Smile className="cursor-pointer hover:text-[#00AEEC]" size={20} />
                    <Image className="cursor-pointer hover:text-[#00AEEC]" size={20} />
                    <AtSign className="cursor-pointer hover:text-[#00AEEC]" size={20} />
                    <BarChart2 className="cursor-pointer hover:text-[#00AEEC]" size={20} />
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-[12px] text-gray-300">0</span>
                    <button className="bg-[#8FD7F3] text-white px-6 py-1.5 rounded-md text-[14px] cursor-not-allowed">发布</button>
                 </div>
              </div>
           </div>

           {/* Story Circles */}
           <div className="bg-white rounded-lg p-3 flex items-center gap-4 overflow-hidden shadow-sm">
              {STORY_CIRCLES.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-1 min-w-[56px] cursor-pointer">
                    <div className={`w-[50px] h-[50px] rounded-full p-[2px] ${item.active ? 'bg-[#00AEEC]' : 'bg-transparent border border-transparent hover:border-gray-200'}`}>
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                           {item.name === '全部动态' ? (
                               <img src="https://picsum.photos/id/10/100/100" className="w-full h-full object-cover p-1" /> // Placeholder for the fan icon
                           ) : (
                               <img src={item.icon} className="w-full h-full object-cover" />
                           )}
                        </div>
                    </div>
                    <span className={`text-[12px] truncate w-full text-center ${item.active ? 'text-[#00AEEC]' : 'text-gray-500'}`}>{item.name}</span>
                 </div>
              ))}
              <div className="ml-auto w-8 h-8 rounded-full bg-[#F1F2F3] flex items-center justify-center text-gray-500 cursor-pointer hover:bg-[#E3E5E7]">
                 <ChevronRightIcon size={16} />
              </div>
           </div>

           {/* Filter Tabs */}
           <div className="bg-white rounded-t-lg px-4 py-3 flex gap-8 border-b border-gray-100 shadow-sm mt-1">
              {['全部', '视频投稿', '追番追剧', '专栏'].map((tab, idx) => (
                 <span key={idx} className={`text-[14px] font-medium cursor-pointer ${idx === 0 ? 'text-[#00AEEC]' : 'text-gray-600 hover:text-[#00AEEC]'}`}>
                    {tab}
                 </span>
              ))}
           </div>

           {/* Feed Item */}
           <div className="bg-white rounded-b-lg p-5 shadow-sm mb-4">
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                 <div className="flex gap-3">
                    <img src="https://picsum.photos/id/200/50/50" className="w-12 h-12 rounded-full border border-gray-100" />
                    <div className="flex flex-col justify-center">
                       <div className="text-[15px] font-bold text-[#FB7299] cursor-pointer hover:underline">话漫人儿</div>
                       <div className="text-[12px] text-gray-400 flex items-center gap-2">
                          <span>17分钟前</span>
                          <span>·</span>
                          <span>投稿了文章</span>
                       </div>
                    </div>
                 </div>
                 <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
              </div>

              {/* Content */}
              <div className="pl-[60px]">
                 <h2 className="text-[17px] font-bold text-[#18191C] mb-2 cursor-pointer hover:text-[#00AEEC]">
                    用这个密令“332211”1块钱吃了一顿外卖
                 </h2>
                 <p className="text-[15px] text-[#18191C] leading-relaxed mb-4">
                    券变小的！一定要尝试新的密令！<br/><br/>
                    亲测有效，这个密令领取红包更大！<br/><br/>
                    美团app和闪购搜索：332211<br/><br/>
                    美团app和闪购搜索：332211<br/><br/>
                    美团app和闪购搜索：332211...
                    <span className="text-[#00AEEC] cursor-pointer ml-1 hover:underline">全文</span>
                 </p>
                 
                 {/* Image Content */}
                 <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 w-fit">
                    <div className="bg-[#FFFF00] p-4 font-bold text-xl text-center">
                        亲测有效，券变小的用这个密令领取
                        <div className="bg-[#56BD2F] text-white p-2 mt-2 text-2xl">
                           美团 先美团app搜: <span className="text-purple-700 font-black">332211</span>
                        </div>
                    </div>
                 </div>

                 {/* Interaction Bar */}
                 <div className="flex items-center gap-16 text-gray-500 mt-2">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#00AEEC]">
                       <Share2 size={18} />
                       <span className="text-[13px]">分享</span>
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#00AEEC]">
                       <MessageSquare size={18} />
                       <span className="text-[13px]">4</span>
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#00AEEC]">
                       <ThumbsUp size={18} />
                       <span className="text-[13px]">12</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* More placeholder content to fill space */}
           <div className="bg-white rounded-lg p-5 shadow-sm min-h-[200px] flex items-center justify-center text-gray-400">
               End of feed (Mock)
           </div>

        </div>

        {/* Right Column - Sidebar */}
        <div className="w-[300px] shrink-0 flex flex-col gap-3">
           {/* Community Center Banner */}
           <div className="w-full rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <img src="https://picsum.photos/id/2/600/350" className="w-full h-auto object-cover" />
           </div>

           {/* Hot Search */}
           <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-[16px] mb-4">bilibili热搜</div>
              <div className="flex flex-col gap-3">
                 {HOT_SEARCH.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 cursor-pointer group">
                       <span className={`text-[14px] font-bold w-4 text-center mt-[1px] ${idx < 3 ? 'text-[#FF9212] italic' : 'text-gray-400'}`}>
                          {item.rank}
                       </span>
                       <div className="flex-1 text-[14px] text-[#18191C] group-hover:text-[#00AEEC] leading-tight">
                          {item.title}
                       </div>
                       {item.tag && (
                          <span className={`text-[10px] px-1 rounded h-fit mt-[1px] ${item.tag === '热' ? 'bg-[#FF9212] text-white' : item.tag === '新' ? 'bg-[#FFD21E] text-white' : item.tag === '独家' ? 'bg-[#FB7299] text-white' : 'bg-gray-200 text-gray-500'}`}>
                             {item.tag}
                          </span>
                       )}
                       {item.isHot && (
                           <span className="bg-[#FF4D4F] text-white text-[10px] px-1 rounded h-fit mt-[1px]">热</span>
                       )}
                    </div>
                 ))}
              </div>
           </div>

           {/* Links/Footer */}
           <div className="flex flex-wrap gap-2 text-[12px] text-gray-400 px-2">
              <span>用户协议</span>
              <span>隐私政策</span>
              <span>社区规范</span>
              <span>回到旧版</span>
           </div>
        </div>

      </div>

      {/* Floating Action Button - Back to Old Version (Mock) */}
      <div className="fixed right-6 bottom-24 flex flex-col gap-3">
          <div className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-500 hover:text-[#00AEEC] cursor-pointer shadow-sm text-[12px] leading-tight text-center p-1">
             回到旧版
          </div>
      </div>
    </div>
  );
};

// Helper Icon
const ChevronRightIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
