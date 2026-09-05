import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Flame, 
  Phone, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  MapPin 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    cartCount,
    wishlistCount,
    activeView,
    setActiveView,
    setSelectedCategory,
    setSelectedFestival,
    setIsCartOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    userProfile
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'shop' | 'about' | 'contact', catId?: string, festId?: string) => {
    setActiveView(view);
    if (catId) {
      setSelectedCategory(catId);
    } else if (festId) {
      setSelectedFestival(festId);
    } else if (view === 'shop') {
      setSelectedCategory(null);
      setSelectedFestival(null);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-md">
      {/* Top Auspicious Announcement Bar */}
      <div className="bg-[#2D0505] text-[#E8D4A2] text-xs py-1.5 px-4 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="flex items-center gap-1 text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B041]" />
              <span className="font-semibold tracking-wide">ঐতিহ্য • বিশ্বাস • ভক্তি</span>
            </span>
            <span className="hidden md:inline text-[#C5A059]/50">|</span>
            <span className="hidden md:inline text-[#F5DEB3]">
              {language === 'bn' 
                ? 'অনলাইন অর্ডারে সমগ্র পশ্চিমবঙ্গে দ্রুত হোম ডেলিভারি' 
                : 'Express Home Delivery across West Bengal & India'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#E8D4A2]">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <a href="tel:+918981701480" className="hover:text-white transition-colors font-medium">+91 89817 01480</a>
            </div>
            <span className="text-[#C5A059]/40">|</span>
            
            {/* Language Switcher */}
            <button
              id="language-switcher-btn"
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="px-2 py-0.5 rounded border border-[#C5A059]/40 hover:border-[#D4AF37] bg-[#420B0B] hover:bg-[#570F0F] text-[#FFE89E] font-medium transition-all flex items-center gap-1 cursor-pointer"
              title="ভাষা পরিবর্তন করুন / Switch Language"
            >
              <span>{language === 'bn' ? 'বাংলা' : 'EN'}</span>
              <span className="text-[9px] text-[#C5A059]">({language === 'bn' ? 'English' : 'বাংলা'})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Premium Deep Maroon Header */}
      <div className="bg-[#470909] border-b border-[#C5A059]/40 text-[#FBF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Title */}
          <div 
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Spiritual Emblem (Diya / Trishul / Sacred Flame) */}
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FFE89E] via-[#D4AF37] to-[#8C6207] p-[1.5px] shadow-glow flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#360505] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-[#D4AF37]/30 to-transparent"></div>
                <Flame className="w-6 h-6 text-[#FFD700] fill-[#FFA500] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FFF4D0] font-bengali-serif group-hover:text-[#FFE082] transition-colors leading-tight">
                মহাকাল দশকর্মা ভান্ডার
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#D4AF37] uppercase font-cinzel leading-tight">
                MAHAAKAL DASHAKARMA BHANDAR
              </span>
            </div>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#F4E6C8]">
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#FFDF79] transition-colors py-1 relative cursor-pointer ${
                activeView === 'home' ? 'text-[#FFDF79] font-semibold' : ''
              }`}
            >
              {language === 'bn' ? 'হোম' : 'Home'}
              {activeView === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
              )}
            </button>

            <button
              id="nav-about"
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#FFDF79] transition-colors py-1 relative cursor-pointer ${
                activeView === 'about' ? 'text-[#FFDF79] font-semibold' : ''
              }`}
            >
              {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
              {activeView === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
              )}
            </button>

            <button
              id="nav-shop"
              onClick={() => handleNavClick('shop')}
              className={`hover:text-[#FFDF79] transition-colors py-1 relative cursor-pointer ${
                activeView === 'shop' ? 'text-[#FFDF79] font-semibold' : ''
              }`}
            >
              {language === 'bn' ? 'দোকান' : 'Shop'}
              {activeView === 'shop' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
              )}
            </button>

            <button
              id="nav-puja-samagri"
              onClick={() => handleNavClick('shop', 'daily-puja')}
              className="hover:text-[#FFDF79] transition-colors py-1 cursor-pointer"
            >
              {language === 'bn' ? 'পূজা সামগ্রী' : 'Puja Samagri'}
            </button>

            <button
              id="nav-dashakarma"
              onClick={() => handleNavClick('shop', 'dashakarma')}
              className="hover:text-[#FFDF79] transition-colors py-1 cursor-pointer"
            >
              {language === 'bn' ? 'দশকর্মা' : 'Dashakarma'}
            </button>

            <button
              id="nav-puja-kits"
              onClick={() => handleNavClick('shop', 'puja-kits')}
              className="hover:text-[#FFDF79] transition-colors py-1 cursor-pointer"
            >
              {language === 'bn' ? 'পূজা কিট' : 'Puja Kits'}
            </button>

            <button
              id="nav-festival"
              onClick={() => {
                setActiveView('home');
                setTimeout(() => {
                  document.getElementById('festival-collection-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-[#FFDF79] transition-colors py-1 cursor-pointer text-[#FAD074]"
            >
              {language === 'bn' ? 'উৎসব সংগ্রহ' : 'Festival Collection'}
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#FFDF79] transition-colors py-1 relative cursor-pointer ${
                activeView === 'contact' ? 'text-[#FFDF79] font-semibold' : ''
              }`}
            >
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
              {activeView === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            
            {/* Search Trigger */}
            <button
              id="header-search-btn"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-[#5E1212] text-[#EAD098] hover:text-[#FFF] transition-all cursor-pointer"
              title={language === 'bn' ? 'পণ্য খুঁজুন' : 'Search Products'}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* My Account Trigger */}
            <button
              id="header-account-btn"
              onClick={() => setIsAccountOpen(true)}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#520B0B]/70 border border-[#800000] hover:bg-[#5E1212] text-[#EAD098] hover:text-[#FFF] transition-all cursor-pointer shadow-inner"
              title={`${userProfile.name} (${userProfile.email})`}
              aria-label="My Account"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#800000] to-[#360404] border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#FFD700]">
                {userProfile.name.charAt(0) || 'চ'}
              </div>
              <span className="hidden md:inline text-xs font-medium text-[#FFEAA7] max-w-[110px] truncate">
                {userProfile.name.split(' ')[0] || (language === 'bn' ? 'অ্যাকাউন্ট' : 'Account')}
              </span>
            </button>

            {/* Wishlist Button */}
            <button
              id="header-wishlist-btn"
              onClick={() => {
                handleNavClick('shop');
                // Could open wishlist filter
              }}
              className="relative p-2 rounded-full hover:bg-[#5E1212] text-[#EAD098] hover:text-[#FFF] transition-all cursor-pointer"
              title={language === 'bn' ? 'পছন্দের সামগ্রী' : 'Wishlist'}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A059] text-[#2E0505] text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#470909]">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              id="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#2B0505] font-semibold text-sm shadow-md transition-all cursor-pointer transform active:scale-95"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 bg-[#7A0C0C] text-[#FFEAA7] text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold">
                {language === 'bn' ? 'কার্ট' : 'Cart'}
              </span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F4E6C8] hover:bg-[#5E1212] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3A0707] border-t border-[#C5A059]/30 px-5 py-5 text-[#FBF8F2] space-y-3 animate-in slide-in-from-top duration-200">
            <div className="pb-3 border-b border-[#C5A059]/20 flex items-center justify-between">
              <span className="text-xs text-[#D4AF37] font-medium">মেনু / Store Navigation</span>
              <button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="text-xs px-2.5 py-1 rounded bg-[#570F0F] text-[#FFE89E] border border-[#C5A059]/40"
              >
                {language === 'bn' ? 'English Version' : 'বাংলা সংস্করণ'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '🏠 হোম' : '🏠 Home'}
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '🛍️ সমস্ত পণ্য' : '🛍️ All Products'}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'daily-puja')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '🪔 পূজা সামগ্রী' : '🪔 Daily Puja'}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'dashakarma')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '📜 দশকর্মা সামগ্রী' : '📜 Dashakarma'}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'puja-kits')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '🕉️ পূজা কিট' : '🕉️ Puja Kits'}
              </button>
              <button
                onClick={() => {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('festival-collection-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#FAD074]"
              >
                {language === 'bn' ? '🌺 উৎসব সংগ্রহ' : '🌺 Festivals'}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '📖 আমাদের কথা' : '📖 About Us'}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left py-2 px-3 rounded hover:bg-[#520B0B] text-[#F3E3BD]"
              >
                {language === 'bn' ? '📞 যোগাযোগ' : '📞 Contact'}
              </button>
            </div>

            <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#D8C28E]">
              <button
                onClick={() => {
                  setIsAccountOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 text-[#FFE89E]"
              >
                <User className="w-4 h-4" />
                <span>{language === 'bn' ? 'লগইন / রেজিস্টার' : 'Account Login'}</span>
              </button>
              <a
                href="tel:+918981701480"
                className="flex items-center gap-1 text-[#E0C070]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 89817 01480</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Navigation for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#350505] border-t border-[#C5A059]/40 text-[#E7D4A8] py-2 px-3 shadow-2xl flex justify-around items-center">
        <button
          id="mobile-bottom-home"
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-1 text-[11px] ${
            activeView === 'home' ? 'text-[#FFD700] font-bold' : 'text-[#D5C299]'
          }`}
        >
          <Flame className="w-5 h-5" />
          <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
        </button>

        <button
          id="mobile-bottom-categories"
          onClick={() => {
            if (activeView !== 'home') setActiveView('home');
            setTimeout(() => {
              document.getElementById('category-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="flex flex-col items-center gap-1 text-[11px] text-[#D5C299]"
        >
          <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px]">
            ১-১২
          </div>
          <span>{language === 'bn' ? 'বিভাগ' : 'Categories'}</span>
        </button>

        <button
          id="mobile-bottom-search"
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] text-[#D5C299]"
        >
          <Search className="w-5 h-5" />
          <span>{language === 'bn' ? 'খুঁজুন' : 'Search'}</span>
        </button>

        <button
          id="mobile-bottom-wishlist"
          onClick={() => handleNavClick('shop')}
          className="relative flex flex-col items-center gap-1 text-[11px] text-[#D5C299]"
        >
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1.5 right-2 w-3.5 h-3.5 bg-[#C5A059] text-[#2D0505] text-[9px] font-bold rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
          <span>{language === 'bn' ? 'পছন্দ' : 'Wishlist'}</span>
        </button>

        <button
          id="mobile-bottom-cart"
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-1 text-[11px] text-[#FFD700] font-semibold"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 right-1 w-4 h-4 bg-[#A31616] text-[#FFECA8] text-[10px] font-black rounded-full flex items-center justify-center ring-1 ring-[#D4AF37]">
              {cartCount}
            </span>
          )}
          <span>{language === 'bn' ? 'কার্ট' : 'Cart'}</span>
        </button>
      </div>
    </header>
  );
};
