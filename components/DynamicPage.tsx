
import React, { useState } from 'react';
import { Image, Smile, AtSign, BarChart2, Hash, MoreHorizontal, MessageSquare, ThumbsUp, Share2, MoreVertical, RefreshCw, ChevronRight } from 'lucide-react';
import { LazyImage } from './LazyImage';

const INITIAL_HOT_SEARCH = [
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

const REAL_TIME_DATA = [
    { rank: 1, title: '黑神话：悟空 最终预告片发布', tag: '爆', isHot: true },
    { rank: 2, title: '2024考研初试成绩查询时间', tag: '热', isHot: true },
    { rank: 3, title: 'Sora生成的视频太真实了', tag: '新', isHot: false },
    { rank: 4, title: 'Python爬虫教程播放量破百万', tag: '热', isHot: false },
    { rank: 5, title: '周杰伦新歌MV彩蛋解析', tag: '', isHot: false },
    { rank: 6, title: 'Faker名人堂皮肤价格引争议', tag: '', isHot: false },
    { rank: 7, title: '小米汽车SU7正式上市', tag: '热', isHot: false },
    { rank: 8, title: '只有河南卫视懂中国式浪漫', tag: '', isHot: false },
    { rank: 9, title: '为何年轻人开始断亲了？', tag: '议', isHot: false },
    { rank: 10, title: '帕鲁：这班上的比我还累', tag: '', isHot: false },
];

const STORY_CIRCLES = [
  { name: '全部动态', icon: 'https://picsum.photos/id/100/50/50', active: true },
  { name: '大佬何金银', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=King', active: false },
  { name: '秋芝2046', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Autumn', active: false },
  { name: 'IT咖啡馆', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Coffee', active: false },
  { name: '鬼叔怪谈', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost', active: false },
  { name: '玄离199', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Xuan', active: false },
  { name: '小兔崽2', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rabbit', active: false },
  { name: 'Xuan_酱', icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sauce', active: false },
];

export const DynamicPage: React.FC = () => {
  const [hotSearchList, setHotSearchList] = useState(INITIAL_HOT_SEARCH);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const handleRefreshHotSearch = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setTimeout(() => {
        setHotSearchList(REAL_TIME_DATA);
        const now = new Date();
        setLastUpdated(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8] pt-4 font-sans text-[#18191C]">
      <div className="max-w-[1140px] mx-auto flex gap-2.5">
        
        {/* Left Column - User Info & Live */}
        <div className="w-[245px] shrink-0 flex flex-col gap-2.5">
          {/* User Card */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm">
             <div className="w-[72px] h-[72px] rounded-full overflow-hidden border border-gray-100 mb-3">
                <LazyImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=MyUser" alt="User" className="w-full h-full object-cover" />
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
                <span className="text-[12px] text-gray-400 cursor-pointer hover:text-[#00AEEC] flex items-center">更多关注 <ChevronRight size={12}/></span>
             </div>
             <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 cursor-pointer group">
                   <div className="w-10 h-10 rounded-full border-[2px] border-[#FB7299] p-[1px]">
                      <LazyImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Val" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium truncate group-hover:text-[#00AEEC]">无畏契约赛事</div>
                      <div className="text-[12px] text-gray-400 truncate">恭喜PRX获得2025无畏契约...</div>
                   </div>
                   <span className="bg-[#FB7299] text-white text-[10px] px-1 rounded">直播中</span>
                </div>
                 <div className="flex items-center gap-2 cursor-pointer group">
                   <div className="w-10 h-10 rounded-full border-[2px] border-[#FB7299] p-[1px]">
                      <LazyImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Turtle" alt="Avatar" className="w-full h-full rounded-full object-cover" />
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
                               <LazyImage src="https://picsum.photos/seed/fan-icon/100/100" alt="Icon" className="w-full h-full object-cover p-1" />
                           ) : (
                               <LazyImage src={item.icon} alt="Icon" className="w-full h-full object-cover" />
                           )}
                        </div>
                    </div>
                    <span className={`text-[12px] truncate w-full text-center ${item.active ? 'text-[#00AEEC]' : 'text-gray-500'}`}>{item.name}</span>
                 </div>
              ))}
              <div className="ml-auto w-8 h-8 rounded-full bg-[#F1F2F3] flex items-center justify-center text-gray-500 cursor-pointer hover:bg-[#E3E5E7]">
                 <ChevronRight size={16} />
              </div>
           </div>

           {/* Feed Item */}
           <div className="bg-white rounded-b-lg p-5 shadow-sm mb-4 mt-4">
              <div className="flex justify-between items-start mb-3">
                 <div className="flex gap-3">
                    <LazyImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=PostUser" alt="User" className="w-12 h-12 rounded-full border border-gray-100" />
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

              <div className="pl-[60px]">
                 <h2 className="text-[17px] font-bold text-[#18191C] mb-2 cursor-pointer hover:text-[#00AEEC]">
                    用这个密令“332211”1块钱吃了一顿外卖
                 </h2>
                 <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 w-fit">
                    <div className="bg-[#FFFF00] p-4 font-bold text-xl text-center">
                        亲测有效，券变小的用这个密令领取
                        <div className="bg-[#56BD2F] text-white p-2 mt-2 text-2xl">
                           美团 先美团app搜: <span className="text-purple-700 font-black">332211</span>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-[300px] shrink-0 flex flex-col gap-3">
           <div className="w-full rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <LazyImage src="https://picsum.photos/seed/community-banner/600/350" alt="Banner" className="w-full h-auto object-cover" />
           </div>
           {/* Hot search list... */}
        </div>
      </div>
    </div>
  );
};
