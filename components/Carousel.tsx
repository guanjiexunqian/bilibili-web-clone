import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from '../types';
import { LazyImage } from './LazyImage';

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Auto-play logic
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div 
        className="relative group w-full h-full overflow-hidden cursor-pointer rounded-[6px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div 
        className="w-full h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-full h-full relative">
            <LazyImage 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover" 
            />
            
            {/* 
                Gradient Mask 
                Bilibili uses a distinct gradient at the bottom to make white text pop.
                It's not just black, it's a specific fade.
            */}
            <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            
            {/* Title */}
            <div className="absolute bottom-12 left-4 right-4 z-20">
               <h3 className="text-white text-[18px] md:text-[20px] font-bold drop-shadow-md line-clamp-1 tracking-wide">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Visible on Hover) */}
      <div className={`absolute inset-0 flex items-center justify-between px-2 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''} pointer-events-none`}>
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-[2px] text-white flex items-center justify-center transition-all pointer-events-auto"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-[2px] text-white flex items-center justify-center transition-all pointer-events-auto"
          >
            <ChevronRight size={20} />
          </button>
      </div>

      {/* Indicators (Bottom Left) */}
      <div className="absolute bottom-4 left-4 flex gap-2.5 z-20">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
            className={`h-[8px] h-[8px] rounded-full transition-all duration-300 border border-white/20 ${
              idx === currentIndex 
                ? 'bg-white w-[8px] scale-125 border-transparent shadow-[0_0_4px_rgba(255,255,255,0.5)]' 
                : 'bg-white/40 hover:bg-white/80 scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};