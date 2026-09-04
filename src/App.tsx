import React, { useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PujaSpecialCollection } from './components/PujaSpecialCollection';
import { FestivalSection } from './components/FestivalSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ShopPage } from './components/ShopPage';
import { SingleProductView } from './components/SingleProductView';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickViewModal } from './components/QuickViewModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { AccountModal } from './components/AccountModal';
import { WishlistModal } from './components/WishlistModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

const MainApp: React.FC = () => {
  const { 
    activeView, 
    selectedProduct, 
    toastMessage, 
    setToastMessage 
  } = useStore();

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#331800] font-bengali selection:bg-[#C5A059] selection:text-[#3B0707]">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#3B0707] text-[#FFEAA7] border border-[#D4AF37] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-top-3 duration-200">
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#D4AF37] hover:text-white text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header />

      {/* Dynamic View Controller */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <HeroSection />
            <CategorySection />
            <FeaturedProducts />
            <PujaSpecialCollection />
            <FestivalSection />
            <WhyChooseUs />
            <AboutSection />
            <TestimonialSection />
          </>
        )}

        {activeView === 'shop' && (
          <ShopPage />
        )}

        {activeView === 'product-detail' && selectedProduct && (
          <SingleProductView product={selectedProduct} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-Out Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <QuickViewModal />
      <TrackOrderModal />
      <QuickSearchModal />
      <AccountModal />
      <WishlistModal />

      {/* Floating Elements */}
      <FloatingWhatsApp />

    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  );
}
