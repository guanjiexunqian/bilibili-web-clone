import React, { useState, useEffect } from 'react';
import { ThumbsUp, Coins, Star, Share2, MoreHorizontal, MessageSquare, PlayCircle, Send, Plus } from 'lucide-react';
import { Video } from '../types';
import { LazyImage } from './LazyImage';
import { generateVideos } from '../constants';
import { VideoCard } from './VideoCard';

interface VideoPlayerPageProps {
  video: Video;
  onVideoSelect: (video: Video) => void;
}

// Mock Comments Data
const COMMENTS = [
  { id: 1, user: "技术爬爬虾", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shrimp", content: "太强了UP主，这个思路真的绝！求源码！", date: "2小时前", likes: 233, replies: [] },
  { id: 2, user: "某幻君", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phantom", content: "前排围观，这就是传说中的高质量内容吗？", date: "5小时前", likes: 1089, replies: [
      { user: "粉丝1号", content: "捉住活的某幻！" },
      { user: "粉丝2号", content: "合影留念" }
  ]},
  { id: 3, user: "老番茄", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomato", content: "下次一定（指已经三连了）", date: "昨天", likes: 5602, replies: [] },
  { id: 4, user: "鲁迅", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LuXun", content: "这视频做的不错，我确实说过这话。", date: "2023-12-12", likes: 12, replies: [] },
  { id: 5, user: "不知名网友", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User5", content: "省流：视频很有用，建议收藏吃灰。", date: "2天前", likes: 45, replies: [] },
];

export const VideoPlayerPage: React.FC<VideoPlayerPageProps> = ({ video, onVideoSelect }) => {
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isCoined, setIsCoined] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // Simulate fetching related videos
    setRelatedVideos(generateVideos(10));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [video]);

  return (
    <div className="w-full bg-white min-h-screen pb-12">
       
       <div className="max-w-[1500px] mx-auto px-4 md:px-6 py-6 flex flex-col lg:flex-row gap-8">
          
          {/* ================= LEFT COLUMN (Player & Main Info) ================= */}
          <div className="flex-1 min-w-0">
             
             {/* 1. Header Info */}
             <div className="mb-4">
                <h1 className="text-[18px] md:text-[20px] font-medium text-[#18191C] leading-snug mb-2 select-text">
                   {video.title}
                </h1>
                <div className="flex items-center text-[13px] text-[#9499A0] gap-4">
                   <div className="flex items-center gap-1">
                      <PlayCircle size={16} />
                      <span>{video.views}播放</span>
                   </div>
                   <div className="flex items-center gap-1">
                      <MessageSquare size={14} />
                      <span>{Math.floor(Math.random() * 5000)}弹幕</span>
                   </div>
                   <span>{video.date}</span>
                   <span className="text-[#FB7299] flex items-center gap-1 cursor-pointer">
                      <div className="w-4 h-4 bg-[#FB7299] text-white rounded-full flex items-center justify-center text-[10px]">!</div>
                      未经作者授权，禁止转载
                   </span>
                </div>
             </div>

             {/* 2. Video Player */}
             <div className="w-full aspect-video bg-black rounded-[4px] shadow-lg relative overflow-hidden group mb-4">
                 <video 
                    src={video.previewUrl || "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} 
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                 />
                 {/* Fake Danmaku Overlay (Simple Animation) */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
                    <div className="absolute top-[10%] left-full whitespace-nowrap text-white text-lg font-bold shadow-black drop-shadow-md animate-[danmaku_8s_linear_infinite]">
                        前方高能！！！
                    </div>
                    <div className="absolute top-[25%] left-full whitespace-nowrap text-white text-base shadow-black drop-shadow-md animate-[danmaku_12s_linear_infinite_1s]">
                        空降成功
                    </div>
                     <div className="absolute top-[50%] left-full whitespace-nowrap text-[#FE0302] text-xl font-bold shadow-black drop-shadow-md animate-[danmaku_6s_linear_infinite_2s]">
                        火钳刘明
                    </div>
                     <div className="absolute top-[80%] left-full whitespace-nowrap text-[#F1C40F] text-lg shadow-black drop-shadow-md animate-[danmaku_10s_linear_infinite_0.5s]">
                        下次一定
                    </div>
                 </div>
                 <style>{`
                    @keyframes danmaku {
                        from { transform: translateX(0); }
                        to { transform: translateX(-200vw); }
                    }
                 `}</style>
             </div>

             {/* 3. Toolbar (Like/Coin/Fav) */}
             <div className="flex items-center gap-8 border-b border-[#E3E5E7] pb-4 mb-6 select-none">
                 <div 
                    className={`flex items-center gap-2 cursor-pointer transition-colors ${isLiked ? 'text-[#FB7299]' : 'text-[#61666D] hover:text-[#FB7299]'}`}
                    onClick={() => setIsLiked(!isLiked)}
                 >
                    <ThumbsUp size={24} className={isLiked ? 'fill-[#FB7299]' : ''} />
                    <span className="text-[14px] font-medium">{isLiked ? '已点赞' : '点赞'}</span>
                 </div>
                 <div 
                    className={`flex items-center gap-2 cursor-pointer transition-colors ${isCoined ? 'text-[#FB7299]' : 'text-[#61666D] hover:text-[#FB7299]'}`}
                    onClick={() => setIsCoined(!isCoined)}
                 >
                    <Coins size={24} className={isCoined ? 'fill-[#FB7299]' : ''} />
                    <span className="text-[14px] font-medium">{isCoined ? '已投币' : '投币'}</span>
                 </div>
                 <div 
                    className={`flex items-center gap-2 cursor-pointer transition-colors ${isFav ? 'text-[#FB7299]' : 'text-[#61666D] hover:text-[#FB7299]'}`}
                    onClick={() => setIsFav(!isFav)}
                 >
                    <Star size={24} className={isFav ? 'fill-[#FB7299]' : ''} />
                    <span className="text-[14px] font-medium">{isFav ? '已收藏' : '收藏'}</span>
                 </div>
                 <div className="flex items-center gap-2 cursor-pointer text-[#61666D] hover:text-[#FB7299] transition-colors">
                    <Share2 size={24} />
                    <span className="text-[14px] font-medium">分享</span>
                 </div>
                 <div className="ml-auto flex items-center gap-1 text-[#9499A0] text-[12px] cursor-pointer hover:text-[#00AEEC]">
                    <MoreHorizontal size={16} />
                 </div>
             </div>

             {/* 4. Description */}
             <div className="text-[13px] text-[#18191C] leading-6 whitespace-pre-line mb-8">
                 {video.title} <br/>
                 这里是视频简介区域，模拟各种视频的详细描述。<br/>
                 BGM：未知 <br/>
                 剪辑：{video.uploader} <br/>
                 如有侵权请联系删除。
                 <div className="mt-4 flex gap-2">
                     <span className="bg-[#F1F2F3] px-3 py-1 rounded-full text-[#61666D] hover:text-[#00AEEC] cursor-pointer transition-colors">单机游戏</span>
                     <span className="bg-[#F1F2F3] px-3 py-1 rounded-full text-[#61666D] hover:text-[#00AEEC] cursor-pointer transition-colors">实况解说</span>
                     <span className="bg-[#F1F2F3] px-3 py-1 rounded-full text-[#61666D] hover:text-[#00AEEC] cursor-pointer transition-colors">高能</span>
                 </div>
             </div>

             {/* 5. Comments Section */}
             <div>
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-[20px] font-medium">评论 <span className="text-[#9499A0] text-[14px] ml-1">826</span></h2>
                    <div className="flex text-[14px] text-[#9499A0] gap-4">
                        <span className="text-[#18191C] font-medium cursor-pointer">最热</span>
                        <span className="cursor-pointer hover:text-[#00AEEC]">最新</span>
                    </div>
                </div>

                {/* Comment Input */}
                <div className="flex gap-4 mb-8">
                   <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0">
                      <LazyImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=CurrentUser" alt="Me" className="w-full h-full" />
                   </div>
                   <div className="flex-1 flex flex-col gap-2">
                      <textarea 
                        className="w-full h-[64px] bg-[#F1F2F3] rounded-[6px] p-2 text-[14px] outline-none border border-transparent focus:bg-white focus:border-[#C9CCD0] hover:bg-white hover:border-[#C9CCD0] transition-all resize-none placeholder-[#9499A0]" 
                        placeholder="发一条友善的评论"
                      />
                      <div className="flex justify-end">
                         <button className="bg-[#00AEEC] hover:bg-[#00AEEC]/90 text-white px-6 py-1.5 rounded-[4px] text-[14px]">发布</button>
                      </div>
                   </div>
                </div>

                {/* Comments List */}
                <div className="flex flex-col gap-6">
                   {COMMENTS.map(comment => (
                      <div key={comment.id} className="flex gap-4">
                         <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 cursor-pointer border border-gray-100">
                             <LazyImage src={comment.avatar} alt={comment.user} className="w-full h-full" />
                         </div>
                         <div className="flex-1 pb-4 border-b border-[#E3E5E7]">
                             <div className="flex flex-col gap-1 mb-2">
                                 <span className="text-[13px] font-bold text-[#61666D] hover:text-[#FB7299] cursor-pointer">{comment.user}</span>
                                 <span className="text-[12px] text-[#9499A0]">{comment.date}</span>
                             </div>
                             <p className="text-[15px] text-[#18191C] leading-6 mb-2">{comment.content}</p>
                             <div className="flex items-center gap-6 text-[12px] text-[#9499A0] select-none">
                                 <span className="cursor-pointer hover:text-[#00AEEC] flex items-center gap-1"><ThumbsUp size={14} /> {comment.likes}</span>
                                 <span className="cursor-pointer hover:text-[#00AEEC]">回复</span>
                             </div>
                             
                             {/* Replies */}
                             {comment.replies.length > 0 && (
                                <div className="mt-3 bg-[#F9FAFB] p-3 rounded-[4px] flex flex-col gap-2">
                                   {comment.replies.map((reply, i) => (
                                      <div key={i} className="text-[13px]">
                                         <span className="text-[#00AEEC] font-medium cursor-pointer">{reply.user}</span>
                                         <span className="text-[#18191C] mx-1">:</span>
                                         <span className="text-[#18191C]">{reply.content}</span>
                                      </div>
                                   ))}
                                </div>
                             )}
                         </div>
                      </div>
                   ))}
                </div>

             </div>

          </div>

          {/* ================= RIGHT COLUMN (Sidebar) ================= */}
          <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-4">
              
              {/* UP Info Card */}
              <div className="flex gap-3 mb-2">
                  <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 cursor-pointer relative group">
                      <LazyImage src={video.coverUrl} alt={video.uploader} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FB7299] rounded-full flex items-center justify-center border-2 border-white">
                         <div className="w-2 h-2 bg-white rounded-full"></div> 
                      </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                          <span className="text-[14px] font-medium text-[#FB7299] truncate cursor-pointer">{video.uploader}</span>
                          <button className="text-[12px] text-[#9499A0] flex items-center gap-1 hover:text-[#00AEEC]">
                             <Send size={12} /> 发消息
                          </button>
                      </div>
                      <div className="text-[12px] text-[#9499A0] truncate">
                         这个人很懒，什么都没有写
                      </div>
                      <button className="bg-[#00AEEC] hover:bg-[#00AEEC]/90 text-white w-full h-[30px] rounded-[4px] text-[13px] font-medium flex items-center justify-center gap-1 mt-1 transition-colors">
                          <Plus size={14} /> 关注 102.3万
                      </button>
                  </div>
              </div>

              {/* Ad Placeholder */}
              <div className="w-full h-[100px] rounded-[6px] overflow-hidden mb-2 cursor-pointer relative group">
                  <LazyImage src="https://picsum.photos/seed/ad-banner/350/100" alt="ad" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-[10px] px-1 rounded">广告</div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Recommendations */}
              <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[16px] font-medium">接下来播放</h3>
                  <div className="flex items-center gap-1 text-[12px] text-[#61666D] cursor-pointer hover:text-black">
                     <span>自动连播</span>
                     <div className="w-8 h-4 bg-[#00AEEC] rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                     </div>
                  </div>
              </div>

              <div className="flex flex-col gap-3">
                  {relatedVideos.map((v) => (
                     <div 
                        key={v.id} 
                        className="flex gap-2.5 cursor-pointer group h-[80px]"
                        onClick={() => onVideoSelect(v)}
                     >
                        <div className="w-[140px] h-full rounded-[4px] overflow-hidden relative shrink-0">
                           <LazyImage src={v.coverUrl} alt={v.title} className="w-full h-full object-cover" />
                           <div className="absolute bottom-1 right-1 text-white text-[12px] bg-black/40 px-1 rounded-sm">{v.duration}</div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                           <h3 className="text-[14px] text-[#18191C] font-medium leading-[19px] line-clamp-2 group-hover:text-[#00AEEC] transition-colors">
                              {v.title}
                           </h3>
                           <div className="text-[12px] text-[#9499A0]">
                               <div className="flex items-center gap-1 mb-0.5 hover:text-[#00AEEC] transition-colors">
                                   <div className="bg-[#F1F2F3] px-1 text-[10px] rounded text-[#9499A0]">UP</div>
                                   <span className="truncate">{v.uploader}</span>
                               </div>
                               <div>{v.views}播放 · {v.date}</div>
                           </div>
                        </div>
                     </div>
                  ))}
              </div>

          </div>

       </div>
    </div>
  );
};