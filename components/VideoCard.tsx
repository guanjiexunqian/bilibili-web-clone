import React, { useState, useRef, useEffect } from 'react';
import { PlayCircle, MessageSquareText, Clock, MonitorPlay } from 'lucide-react';
import { Video } from '../types';
import { LazyImage } from './LazyImage';

interface VideoCardProps {
  video: Video;
  onClick?: (video: Video) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  // Debounce logic for video preview
  useEffect(() => {
    if (isHovered) {
      // Bilibili waits a bit before playing the preview to avoid chaos during fast scrolling
      hoverTimeoutRef.current = window.setTimeout(() => {
        setShowVideo(true);
      }, 600); // 600ms delay
    } else {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setShowVideo(false);
    }
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [isHovered]);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on specific action buttons (like Watch Later)
    if ((e.target as HTMLElement).closest('.action-btn')) return;
    
    if (onClick) {
        onClick(video);
    }
  };

  return (
    <div 
      className="group cursor-pointer flex flex-col gap-2.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* ==========================================
          THUMBNAIL AREA
      ========================================== */}
      <div className="relative w-full aspect-[16/9] rounded-[6px] overflow-hidden bg-[#F1F2F3]">
        
        {/* 1. Base Image */}
        <LazyImage 
          src={video.coverUrl} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:hidden transition-opacity"
        />

        {/* 2. Video Preview Layer (Active on Hover + Delay) */}
        {showVideo && video.previewUrl && (
           <div className="absolute inset-0 z-10 bg-black animate-in fade-in duration-300">
             <video 
               ref={videoRef}
               src={video.previewUrl}
               autoPlay 
               muted 
               loop 
               playsInline
               className="w-full h-full object-cover"
             />
             {/* Top Progress Bar */}
             <div className="absolute top-0 left-0 h-[2px] bg-black/20 w-full z-20">
                <div className="h-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)] animate-[progress_10s_linear_infinite] w-0 origin-left"></div>
             </div>
             <style>{`
                @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
             `}</style>
             
             {/* Mute Icon (Optional visual cue) */}
             <div className="absolute top-2 right-2 text-white/80 scale-75">
                <MonitorPlay size={20} />
             </div>
           </div>
        )}

        {/* 3. Watch Later Clock (Top Right) */}
        {/* Only visible on hover, slides in slightly */}
        <div className={`absolute top-1.5 right-1.5 z-30 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
           <div className="bg-[#1C1C1C]/80 backdrop-blur-[2px] text-white p-1.5 rounded-[4px] hover:bg-[#FB7299] transition-colors action-btn" title="稍后再看">
              <Clock size={18} />
           </div>
        </div>
        
        {/* 4. Stats Overlay (Bottom Gradient) */}
        {/* Hidden when video is playing to give a cleaner view, or keep it if preferred. Bilibili hides it. */}
        <div className={`absolute inset-x-0 bottom-0 h-[48px] bg-gradient-to-t from-black/65 to-transparent pointer-events-none z-20 flex items-end pb-1.5 px-2 transition-opacity duration-200 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full flex justify-between items-center text-white text-[11px] font-medium leading-none font-sans">
            
            {/* Left: Views & Comments */}
            <div className="flex items-center gap-3">
               <div className="flex items-center gap-1">
                 <PlayCircle size={14} className="opacity-90" />
                 <span>{video.views}</span>
               </div>
               <div className="flex items-center gap-1">
                 <MessageSquareText size={14} className="opacity-90" />
                 <span>{Math.floor(Math.random() * 5000)}</span>
               </div>
            </div>

            {/* Right: Duration */}
            <span>{video.duration}</span>
          </div>
        </div>
      </div>

      {/* ==========================================
          INFO AREA
      ========================================== */}
      <div className="pr-1 flex flex-col gap-1">
        {/* Title */}
        <h3 
            className={`text-[15px] leading-[22px] font-medium line-clamp-2 transition-colors duration-200 tracking-tight ${isHovered ? 'text-[#00AEEC]' : 'text-[#18191C]'}`}
            title={video.title}
        >
          {video.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center text-[13px] text-[#9499A0] mt-0.5">
           {/* UP Badge */}
           <div className="flex items-center justify-center border border-[#9499A0]/40 rounded-[3px] h-[16px] px-1 mr-1.5">
              <span className="text-[10px] leading-none scale-90">UP</span>
           </div>
           
           {/* Uploader */}
           <span className="hover:text-[#00AEEC] transition-colors cursor-pointer truncate max-w-[140px] flex-1">
              {video.uploader}
           </span>
           
           {/* Date */}
           <span className="ml-2 text-[12px]">{video.date}</span>
        </div>
      </div>
    </div>
  );
};