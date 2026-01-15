import React, { useState, useEffect } from 'react';
import { getProxyUrl } from '../utils/imageProxy';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string; // Class for the wrapper div
}

// A 100% reliable fallback image (a nice gradient or generic placeholder)
// Using picsum grayscale as the ultimate backup
const SAFETY_NET_IMAGE = "https://picsum.photos/seed/safety/320/200?grayscale";

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  containerClassName = "w-full h-full", 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // State to track which URL we are currently trying to load
  const [currentSrc, setCurrentSrc] = useState(src);
  // State to track retry stages
  const [retryStage, setRetryStage] = useState<'direct' | 'proxy' | 'fallback'>('direct');

  useEffect(() => {
    // Reset all states when the source prop changes
    setIsLoaded(false);
    setHasError(false);
    setRetryStage('direct');
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (retryStage === 'direct') {
      // Stage 1 Failed: Try Proxy
      // console.log(`[LazyImage] Direct load failed, trying proxy: ${src}`);
      setRetryStage('proxy');
      setCurrentSrc(getProxyUrl(src));
    } else if (retryStage === 'proxy') {
      // Stage 2 Failed: Try Ultimate Safety Net
      // console.log(`[LazyImage] Proxy failed, using safety net: ${src}`);
      setRetryStage('fallback');
      setCurrentSrc(SAFETY_NET_IMAGE);
    } else {
      // Stage 3 Failed: Give up
      setHasError(true);
      setIsLoaded(true); 
    }
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${containerClassName}`}>
      {/* Skeleton Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse" />
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      ) : (
        /* Final Error Fallback (The "Broken TV" Icon) - Only shows if even the safety net fails */
        <div className="absolute inset-0 flex items-center justify-center bg-[#F1F2F3] text-gray-300">
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             className="w-12 h-12 opacity-40"
           >
             <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
             <polyline points="17 2 12 7 7 2"></polyline>
             <line x1="12" y1="11" x2="12" y2="17"></line>
             <line x1="12" y1="17" x2="12.01" y2="17"></line>
           </svg>
        </div>
      )}
    </div>
  );
};