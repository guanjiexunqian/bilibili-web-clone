import React from 'react';
import { PlayCircle, MessageSquareText } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-2.5">
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
        <img 
          src={video.coverUrl} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

        {/* Stats Overlay */}
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-center text-white text-[12px] font-normal tracking-wide">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <PlayCircle size={14} className="fill-transparent" />
              <span>{video.views}</span>
            </div>
             <div className="flex items-center gap-1">
               <MessageSquareText size={14} />
               {/* Random comment count for authenticity */}
               <span>{Math.floor(Math.random() * 2000)}</span>
            </div>
          </div>
          <span className="font-sans text-[12px]">{video.duration}</span>
        </div>
      </div>

      {/* Info */}
      <div className="pr-1">
        <h3 className="text-[14px] text-[#18191C] leading-[20px] line-clamp-2 group-hover:text-[#00AEEC] transition-colors mb-1.5 font-medium tracking-tight">
          {video.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[12px] text-[#9499A0]">
           <div className="px-[3px] border border-[#9499A0]/50 rounded-[3px] text-[10px] leading-tight scale-90 origin-left text-[#9499A0]">UP</div>
           <span className="hover:text-[#00AEEC] transition-colors truncate max-w-[120px]">{video.uploader}</span>
           <span className="ml-auto">{video.date}</span>
        </div>
      </div>
    </div>
  );
};