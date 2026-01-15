import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { VideoCard } from './components/VideoCard';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';
import { AnimePage } from './components/AnimePage';
import { LivePage } from './components/LivePage';
import { GamePage } from './components/GamePage';
import { MangaPage } from './components/MangaPage';
import { DynamicPage } from './components/DynamicPage';
import { SearchPage } from './components/SearchPage';
import { Elevator } from './components/Elevator';
import { INITIAL_VIDEOS, CAROUSEL_ITEMS, generateVideos } from './constants';
import { Video, Page } from './types';
import { searchVideosWithGemini } from './services/geminiService';
import { RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(INITIAL_VIDEOS);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Sentinel ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    // Switch to search page immediately with current query
    setSearchQuery(query);
    setCurrentPage('search');
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    setIsSearching(true);
    const newVideos = await searchVideosWithGemini(query);
    if (newVideos && newVideos.length > 0) {
      setVideos(newVideos);
    }
    setIsSearching(false);
  };

  const handleRefresh = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    // Simulate data fetch
    setTimeout(() => {
        // Generate new fresh content
        const freshVideos = generateVideos(20);
        setVideos(freshVideos);
        setIsRefreshing(false);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
    // Reset videos to initial state if navigating back to home (optional preference)
    if (page === 'home' && videos.length !== INITIAL_VIDEOS.length) {
       // Optional: setVideos(INITIAL_VIDEOS); 
    }
  };

  // Infinite Scroll Logic
  const handleLoadMore = useCallback(() => {
     if (isLoadingMore || isSearching) return;
     
     setIsLoadingMore(true);
     // Simulate network delay
     setTimeout(() => {
        const moreVideos = generateVideos(15, videos.length);
        setVideos(prev => [...prev, ...moreVideos]);
        setIsLoadingMore(false);
     }, 600);
  }, [isLoadingMore, isSearching, videos.length]);

  useEffect(() => {
    // Only enable infinite scroll on Home or Search page (Search usually has pagination but infinite scroll works for this demo)
    if (currentPage !== 'home' && currentPage !== 'search') return;

    const observer = new IntersectionObserver((entries) => {
       const first = entries[0];
       if (first.isIntersecting) {
          handleLoadMore();
       }
    }, { threshold: 0.1 });

    const currentRef = loadMoreRef.current;
    if (currentRef) {
       observer.observe(currentRef);
    }

    return () => {
       if (currentRef) observer.unobserve(currentRef);
    }
  }, [handleLoadMore, currentPage]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      {/* Hide global header for GamePage and MangaPage because they have custom headers */}
      {currentPage !== 'game' && currentPage !== 'manga' && (
        <Header 
          onSearch={handleSearch} 
          isSearching={isSearching} 
          onNavigate={navigateTo}
          currentPage={currentPage}
        />
      )}
      
      {/* Elevator Navigation (Fixed Side Bar) */}
      <Elevator 
         onNavigate={navigateTo} 
         onRefresh={handleRefresh} 
         onScrollTop={scrollToTop} 
         currentPage={currentPage}
         isRefreshing={isRefreshing}
      />

      <main className={`flex-1 max-w-[1700px] mx-auto w-full relative ${currentPage === 'game' || currentPage === 'manga' ? 'max-w-none' : ''}`}>
        
        {currentPage === 'home' && (
          <>
            <CategoryNav onNavigate={navigateTo} />
            
            <div className="relative px-4 md:px-6">
                
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-6 animate-fade-in relative">
                   <style>{`
                      @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }
                      .animate-fade-in {
                        animation: fadeIn 0.5s ease-out;
                      }
                   `}</style>
                  
                  {/* Carousel Item */}
                  <div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative shadow-md bg-gray-100 group">
                     <div className="w-full h-full aspect-video xl:aspect-[16/9.5]">
                        <Carousel items={CAROUSEL_ITEMS} />
                     </div>
                  </div>

                  {/* Video Cards Feed */}
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                  
                   {/* Loading Skeletons */}
                   {isSearching && Array.from({ length: 10 }).map((_, i) => (
                     <div key={`skel-${i}`} className="animate-pulse flex flex-col gap-2">
                       <div className="bg-gray-200 aspect-video rounded-lg w-full"></div>
                       <div className="flex gap-2 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                          <div className="flex-1 space-y-2">
                             <div className="h-4 bg-gray-200 rounded w-full"></div>
                             <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                       </div>
                     </div>
                   ))}
                </div>

                {/* Swap Button */}
                <button 
                    onClick={handleRefresh}
                    className="hidden 2xl:flex absolute -right-[50px] top-0 w-10 py-3 bg-white border border-gray-200 rounded-lg shadow-sm flex-col items-center gap-1 text-gray-700 hover:text-[#00AEEC] hover:bg-[#F6F7F8] transition-all z-10 group"
                >
                    <RefreshCw 
                        size={16} 
                        className={`transition-transform duration-700 ease-in-out ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} 
                    />
                    <span className="text-[12px] writing-vertical-rl tracking-widest leading-none mt-1">换一换</span>
                    
                    <style>{`
                      .writing-vertical-rl {
                        writing-mode: vertical-rl;
                        text-orientation: upright;
                      }
                    `}</style>
                </button>

            </div>

            {/* Sentry Element for Infinite Scroll */}
            <div ref={loadMoreRef} className="w-full h-24 flex items-center justify-center mt-4">
               {isLoadingMore && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-5 h-5 border-2 border-[#00AEEC] border-t-transparent rounded-full animate-spin"></div>
                      加载中...
                  </div>
               )}
            </div>
          </>
        )}

        {/* Search Page */}
        {currentPage === 'search' && (
          <SearchPage query={searchQuery} videos={videos} />
        )}

        {currentPage === 'anime' && (
          <AnimePage />
        )}

        {currentPage === 'live' && (
          <div className="-mt-4">
            <LivePage />
          </div>
        )}

        {currentPage === 'game' && (
          <GamePage onNavigate={navigateTo} />
        )}

        {currentPage === 'manga' && (
          <MangaPage onNavigate={navigateTo} />
        )}
        
        {currentPage === 'dynamic' && (
          <div className="-mt-4">
             <DynamicPage />
          </div>
        )}
      </main>

      {/* Footer added at the bottom */}
      <Footer />
    </div>
  );
};

export default App;