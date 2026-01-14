import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { VideoCard } from './components/VideoCard';
import { Carousel } from './components/Carousel';
import { AnimePage } from './components/AnimePage';
import { LivePage } from './components/LivePage';
import { GamePage } from './components/GamePage';
import { MangaPage } from './components/MangaPage';
import { DynamicPage } from './components/DynamicPage';
import { INITIAL_VIDEOS, CAROUSEL_ITEMS } from './constants';
import { Video } from './types';
import { searchVideosWithGemini } from './services/geminiService';
import { RefreshCcw, ArrowUp, MessageCircle } from 'lucide-react';

type Page = 'home' | 'anime' | 'live' | 'game' | 'manga' | 'dynamic';

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(INITIAL_VIDEOS);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    const newVideos = await searchVideosWithGemini(query);
    if (newVideos && newVideos.length > 0) {
      setVideos(newVideos);
    }
    setIsSearching(false);
  };

  const handleRefresh = () => {
    const shuffled = [...videos].sort(() => 0.5 - Math.random());
    setVideos(shuffled);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-12">
      {/* Hide global header for GamePage and MangaPage because they have custom headers */}
      {currentPage !== 'game' && currentPage !== 'manga' && (
        <Header 
          onSearch={handleSearch} 
          isSearching={isSearching} 
          onNavigate={navigateTo}
          currentPage={currentPage}
        />
      )}
      
      <main className={`max-w-[1700px] mx-auto relative ${currentPage === 'game' || currentPage === 'manga' ? 'max-w-none' : ''}`}>
        {currentPage === 'home' && (
          <>
            <CategoryNav onNavigate={navigateTo} />
            
            {/* Main Content Grid - 5 Columns specifically */}
            <div className="px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 animate-fade-in">
               <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                  .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                  }
               `}</style>
              
              {/* Carousel takes up 2x2 spots. It is the first item in the grid flow. */}
              <div className="col-span-1 sm:col-span-2 row-span-2 aspect-[16/9] sm:aspect-[16/9] rounded-lg overflow-hidden relative shadow-sm">
                 <Carousel items={CAROUSEL_ITEMS} />
              </div>

              {/* Video Cards */}
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
              
               {/* Loading Skeletons */}
               {isSearching && Array.from({ length: 5 }).map((_, i) => (
                 <div key={`skel-${i}`} className="animate-pulse flex flex-col gap-2">
                   <div className="bg-gray-200 aspect-[16/9] rounded-lg w-full"></div>
                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                   <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                 </div>
               ))}
            </div>
          </>
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

        {/* Floating Action Buttons */}
        <div className="fixed right-6 bottom-12 flex flex-col gap-3 z-50">
            {currentPage === 'home' && (
              <button 
                  onClick={handleRefresh}
                  className="w-11 h-11 bg-white border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-[#00AEEC] transition-colors group"
              >
                  <RefreshCcw size={18} className={`mb-[2px] ${isSearching ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                  <span className="text-[10px] font-medium">换一换</span>
              </button>
            )}
            <button className="w-11 h-11 bg-white border border-gray-200 shadow-md rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-[#00AEEC] transition-colors">
                <MessageCircle size={22} />
            </button>
             <button 
                onClick={scrollToTop}
                className="w-11 h-11 bg-white border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-[#00AEEC] transition-colors"
            >
                <ArrowUp size={22} />
                <span className="text-[10px] font-medium">顶部</span>
            </button>
        </div>
      </main>
    </div>
  );
};

export default App;