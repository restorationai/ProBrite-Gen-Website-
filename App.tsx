
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WaterDamagePage from './components/WaterDamagePage';
import SewageBackupPage from './components/SewageBackupPage';
import MoldRemediationPage from './components/MoldRemediationPage';
import WaterSoftenerPage from './components/WaterSoftenerPage';
import HotWaterPage from './components/HotWaterPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import CareersPage from './components/CareersPage';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import BlogPost3 from './components/BlogPost3';
import BlogPost4 from './components/BlogPost4';
import BlogPost5 from './components/BlogPost5';
import BlogPost6 from './components/BlogPost6';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export type PageType = 'home' | 'water-damage' | 'sewage-backup' | 'mold-remediation' | 'water-softener' | 'hot-water' | 'gallery' | 'contact' | 'blog' | 'careers' | 'blog-post-1' | 'blog-post-2' | 'blog-post-3' | 'blog-post-4' | 'blog-post-5' | 'blog-post-6';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={navigate} onOpenQuote={openQuoteModal} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigate} onOpenQuote={openQuoteModal} />}
        {currentPage === 'water-damage' && <WaterDamagePage onOpenQuote={openQuoteModal} />}
        {currentPage === 'sewage-backup' && <SewageBackupPage onOpenQuote={openQuoteModal} />}
        {currentPage === 'mold-remediation' && <MoldRemediationPage onOpenQuote={openQuoteModal} />}
        {currentPage === 'water-softener' && <WaterSoftenerPage onOpenQuote={openQuoteModal} />}
        {currentPage === 'hot-water' && <HotWaterPage onOpenQuote={openQuoteModal} />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigate} onOpenQuote={openQuoteModal} />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'blog-post-1' && <BlogPost1 onOpenQuote={openQuoteModal} />}
        {currentPage === 'blog-post-2' && <BlogPost2 onOpenQuote={openQuoteModal} />}
        {currentPage === 'blog-post-3' && <BlogPost3 onOpenQuote={openQuoteModal} />}
        {currentPage === 'blog-post-4' && <BlogPost4 onOpenQuote={openQuoteModal} />}
        {currentPage === 'blog-post-5' && <BlogPost5 onOpenQuote={openQuoteModal} />}
        {currentPage === 'blog-post-6' && <BlogPost6 onOpenQuote={openQuoteModal} />}
      </main>
      <Footer onOpenQuote={openQuoteModal} onNavigate={navigate} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default App;
