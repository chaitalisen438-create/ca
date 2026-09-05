import React, { useState } from 'react';
import { Sparkles, ArrowRight, Flame, ShoppingBag, Star, ShieldCheck, CheckCircle2, Eye, Heart, Droplets, Wind, Package } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import royalBrassThaliImage from '../assets/images/royal_brass_puja_thali_1788534930044.jpg';
import haridwarGangajalImage from '../assets/images/haridwar_brahmakund_gangajal_1788535091613.jpg';
import sandalwoodIncenseImage from '../assets/images/sandalwood_incense_sticks_1788535279267.jpg';
import peacockPanchamukhiDiyaImage from '../assets/images/peacock_brass_panchamukhi_diya_1788535424440.jpg';
import bengaliBrassDhunuchiImage from '../assets/images/bengali_brass_dhunuchi_1788535577409.jpg';
import sindoorKumkumComboImage from '../assets/images/sindoor_kumkum_combo_1788535709876.jpg';
import nepaliRudrakshaMalaImage from '../assets/images/nepali_rudraksha_mala_1788536023145.jpg';
import satyanarayanPujaKitImage from '../assets/images/satyanarayan_puja_kit_1788536241157.jpg';
import bhimseniCamphorImage from '../assets/images/bhimseni_pure_camphor_1788537241029.jpg';
import pureDesiGheeImage from '../assets/images/pure_desi_cow_ghee_1788537732793.jpg';
import copperKoshaKushiImage from '../assets/images/copper_kosha_kushi_1788539192813.jpg';

export const FeaturedProducts: React.FC = () => {
  const { language, setActiveView, setSelectedCategory, addToCart, setIsCartOpen, setSelectedProduct, toggleWishlist, wishlist } = useStore();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [spotlightId, setSpotlightId] = useState<string>('copper-kosha-kushi-pure');

  const royalThaliProduct = PRODUCTS.find(p => p.id === 'brass-puja-thali-set') || PRODUCTS[0];
  const gangajalProduct = PRODUCTS.find(p => p.id === 'pure-gangajal-haridwar') || PRODUCTS[1];
  const sandalwoodProduct = PRODUCTS.find(p => p.id === 'sandalwood-incense-pack') || PRODUCTS[2];
  const peacockDiyaProduct = PRODUCTS.find(p => p.id === 'brass-panchamukhi-diya') || PRODUCTS[3];
  const dhunuchiProduct = PRODUCTS.find(p => p.id === 'bengali-dhunuchi-brass') || PRODUCTS[4];
  const sindoorProduct = PRODUCTS.find(p => p.id === 'authentic-sindoor-kumkum-box') || PRODUCTS[5];
  const rudrakshaProduct = PRODUCTS.find(p => p.id === 'nepali-panchamukhi-rudraksha-mala') || PRODUCTS[6];
  const satyanarayanKitProduct = PRODUCTS.find(p => p.id === 'sampoorna-satyanarayan-puja-kit') || PRODUCTS[7];
  const bhimseniProduct = PRODUCTS.find(p => p.id === 'bhimseni-pure-camphor') || PRODUCTS[8];
  const cowGheeProduct = PRODUCTS.find(p => p.id === 'pure-deshi-cow-ghee-puja') || PRODUCTS[9];
  const copperKoshaProduct = PRODUCTS.find(p => p.id === 'copper-kosha-kushi-pure') || PRODUCTS[10];
  const brassKalashProduct = PRODUCTS.find(p => p.id === 'brass-kalash-mango-leaves') || PRODUCTS[11];
  const lakshmiGaneshProduct = PRODUCTS.find(p => p.id === 'lakshmi-ganesh-brass-murti') || PRODUCTS[12];
  const tulsiMalaProduct = PRODUCTS.find(p => p.id === 'tulsi-japa-mala') || PRODUCTS[0];
  const dashakarmaProduct = PRODUCTS.find(p => p.id === 'dashakarma-upanayana-bibaha-fardo') || PRODUCTS[1];

  const currentSpotlight = 
    spotlightId === 'dashakarma-upanayana-bibaha-fardo'
      ? dashakarmaProduct
      : spotlightId === 'tulsi-japa-mala'
        ? tulsiMalaProduct
        : spotlightId === 'lakshmi-ganesh-brass-murti'
        ? lakshmiGaneshProduct
        : spotlightId === 'brass-kalash-mango-leaves'
        ? brassKalashProduct
        : spotlightId === 'copper-kosha-kushi-pure'
        ? copperKoshaProduct
        : spotlightId === 'pure-deshi-cow-ghee-puja'
        ? cowGheeProduct
        : spotlightId === 'bhimseni-pure-camphor'
          ? bhimseniProduct
          : spotlightId === 'sampoorna-satyanarayan-puja-kit'
            ? satyanarayanKitProduct
            : spotlightId === 'nepali-panchamukhi-rudraksha-mala'
              ? rudrakshaProduct
              : spotlightId === 'authentic-sindoor-kumkum-box'
                ? sindoorProduct
                : spotlightId === 'bengali-dhunuchi-brass'
                  ? dhunuchiProduct
                  : spotlightId === 'brass-panchamukhi-diya'
                    ? peacockDiyaProduct
                    : spotlightId === 'sandalwood-incense-pack' 
                      ? sandalwoodProduct 
                      : spotlightId === 'pure-gangajal-haridwar' 
                        ? gangajalProduct 
                        : royalThaliProduct;
  const isSpotlightWishlisted = wishlist.includes(currentSpotlight.id);

  const filterTabs = [
    { id: 'all', labelBn: 'সকল সামগ্রী', labelEn: 'All Items' },
    { id: 'rudraksha', labelBn: 'রুদ্রাক্ষ ও মালা', labelEn: 'Rudraksha Mala' },
    { id: 'kumkum-sindoor', labelBn: 'কুমকুম ও সিঁদুর', labelEn: 'Kumkum & Sindoor' },
    { id: 'gangajal', labelBn: 'পবিত্র গঙ্গাজল', labelEn: 'Pure Gangajal' },
    { id: 'puja-thali', labelBn: 'পিতল ও কাঁসা', labelEn: 'Brass & Bell Metal' },
    { id: 'incense', labelBn: 'ধূপ ও সুবাস', labelEn: 'Incense' },
    { id: 'diya-dhunuchi', labelBn: 'প্রদীপ ও ধুনুচি', labelEn: 'Diya & Dhunuchi' },
    { id: 'puja-kits', labelBn: 'পূর্ণ পূজা কিট', labelEn: 'Puja Kits' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS.filter(p => p.isFeatured || p.isBestSeller).slice(0, 8)
    : PRODUCTS.filter(p => p.categoryId === activeFilter);

  return (
    <section id="featured-products-section" className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE3] relative">
      
      {/* Decorative Traditional Divider */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mb-3">
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
        <Flame className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="inline-block text-xs sm:text-sm font-bold text-[#800000] tracking-widest uppercase mb-1">
          {language === 'bn' ? '★ বিশুদ্ধ ও প্রামাণিক সংগ্রহ ★' : '★ Pure & Authentic Samagri ★'}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#360505] font-bengali-serif tracking-tight mb-3">
          {language === 'bn' ? '“জনপ্রিয় পূজার সামগ্রী”' : '“Popular Puja Samagri”'}
        </h2>
        <p className="text-sm sm:text-base text-[#6E5948]">
          {language === 'bn'
            ? 'ভক্তদের সর্বাধিক পছন্দের প্রামাণিক দেবসামগ্রী, পিতলের পূজার থালি ও পূর্ণ পূজা কিট'
            : 'Most cherished authentic devotional articles, brass thalis, and complete ritual kits.'}
        </p>
      </div>

      {/* ROYAL & SACRED SPOTLIGHT BANNER SWITCHER */}
      <div className="max-w-7xl mx-auto mb-14">
        
        {/* Spotlight Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-4">
          <button
            onClick={() => setSpotlightId('dashakarma-upanayana-bibaha-fardo')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'dashakarma-upanayana-bibaha-fardo'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Package className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'উপনয়ন ও বিবাহ দশকর্মা ফর্দ' : 'Wedding Dashakarma Pack'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('tulsi-japa-mala')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'tulsi-japa-mala'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'বৃন্দাবনের খাঁটি তুলসী মালা' : 'Sacred Tulsi Mala'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('lakshmi-ganesh-brass-murti')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'lakshmi-ganesh-brass-murti'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'অষ্টধাতু পলিশ লক্ষ্মী-গণেশ' : 'Lakshmi-Ganesh Idols'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('brass-kalash-mango-leaves')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'brass-kalash-mango-leaves'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'পিতলের পূর্ণ ঘট ও আম্রপল্লব' : 'Brass Purna Kalash'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('copper-kosha-kushi-pure')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'copper-kosha-kushi-pure'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'খাঁটি তামার কোশা-কুশী' : 'Pure Copper Kosha Kushi'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('pure-deshi-cow-ghee-puja')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'pure-deshi-cow-ghee-puja'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
            <span>{language === 'bn' ? 'দেশি গাভীর আলোড়ন ঘৃত' : 'Desi Cow Bilona Ghee'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('bhimseni-pure-camphor')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'bhimseni-pure-camphor'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'অরিজিনাল ভিমসেনী কর্পূর' : 'Bhimseni Camphor'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('sampoorna-satyanarayan-puja-kit')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'sampoorna-satyanarayan-puja-kit'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Package className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'সম্পূর্ণ সত্যনারায়ণ পূজা কিট' : 'Satyanarayan Kit'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('nepali-panchamukhi-rudraksha-mala')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'nepali-panchamukhi-rudraksha-mala'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'নেপালি পঞ্চমুখী রুদ্রাক্ষ' : 'Nepali Rudraksha'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('authentic-sindoor-kumkum-box')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'authentic-sindoor-kumkum-box'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Heart className="w-4 h-4 text-[#FF4D4D] fill-[#FF4D4D]" />
            <span>{language === 'bn' ? 'রক্তচন্দন সিঁদুর ও কুমকুম' : 'Sindoor & Kumkum'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('bengali-dhunuchi-brass')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'bengali-dhunuchi-brass'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#FF7A00] fill-[#FF7A00]" />
            <span>{language === 'bn' ? 'ঐতিহ্যবাহী কাঁসা-পিতল ধুনুচি' : 'Brass Dhunuchi'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('brass-panchamukhi-diya')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'brass-panchamukhi-diya'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
            <span>{language === 'bn' ? 'ময়ূর পঞ্চমুখী প্রদীপ' : 'Peacock Diya'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('sandalwood-incense-pack')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'sandalwood-incense-pack'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Wind className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'মলয় চন্দন ধূপকাঠি' : 'Sandalwood Incense'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('pure-gangajal-haridwar')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'pure-gangajal-haridwar'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Droplets className="w-4 h-4 text-[#00A8FF] fill-[#00A8FF]" />
            <span>{language === 'bn' ? 'বিশুদ্ধ হরিদ্বার গঙ্গাজল' : 'Pure Haridwar Gangajal'}</span>
          </button>

          <button
            onClick={() => setSpotlightId('brass-puja-thali-set')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              spotlightId === 'brass-puja-thali-set'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] text-[#240303] border-2 border-[#FFE89E] scale-105'
                : 'bg-[#3B0707] text-[#FFEAA7] border border-[#C5A059]/50 hover:bg-[#590B0B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{language === 'bn' ? 'খোদাই করা রাজকীয় থালি' : 'Engraved Brass Thali'}</span>
          </button>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2E0505] via-[#450909] to-[#1F0202] border-2 border-[#D4AF37] shadow-[0_15px_45px_rgba(40,5,5,0.35)]">
          
          {/* Subtle Golden Pattern / Texture Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_60%)] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-10 relative z-10">
            
            {/* Left/Top: High-Resolution Product Image */}
            <div className="lg:col-span-6 relative group">
              <div className="aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/80 shadow-2xl relative bg-[#1B0101]">
                <img
                  src={currentSpotlight.imageUrl}
                  alt={currentSpotlight.nameBn}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Overlay Badges */}
                <div className="absolute top-3 left-3 bg-[#590B0B]/90 backdrop-blur-sm border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FFE89E] flex items-center gap-1.5 shadow-md">
                  {spotlightId === 'copper-kosha-kushi-pure' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? '৯৯.৯% খাঁটি তামার কোশাকুশী' : '99.9% Pure Vedic Copper'}</span>
                    </>
                  ) : spotlightId === 'pure-deshi-cow-ghee-puja' ? (
                    <>
                      <Flame className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
                      <span>{language === 'bn' ? '১০০% খাঁটি আলোড়ন গাভী ঘৃত' : '100% Pure Desi Bilona Ghee'}</span>
                    </>
                  ) : spotlightId === 'bhimseni-pure-camphor' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? '১০০% বিশুদ্ধ প্রাকৃতিক ভিমসেনী স্ফটিক' : '100% Pure Bhimseni Crystals'}</span>
                    </>
                  ) : spotlightId === 'sampoorna-satyanarayan-puja-kit' ? (
                    <>
                      <Package className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? '৩২ সামগ্রী সম্পূর্ণ সত্যনারায়ণ কিট' : '32 Items Complete Puja Kit'}</span>
                    </>
                  ) : spotlightId === 'nepali-panchamukhi-rudraksha-mala' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? '১০৮ দানা অরিজিনাল নেপালি রুদ্রাক্ষ' : 'Authentic 108 Nepali Rudraksha'}</span>
                    </>
                  ) : spotlightId === 'authentic-sindoor-kumkum-box' ? (
                    <>
                      <Heart className="w-3.5 h-3.5 text-[#FF6B6B] fill-[#FF6B6B]" />
                      <span>{language === 'bn' ? '১০০% প্রাকৃতিক রক্তচন্দন সিঁদুর' : 'Pure Herbal Sindoor'}</span>
                    </>
                  ) : spotlightId === 'bengali-dhunuchi-brass' ? (
                    <>
                      <Flame className="w-3.5 h-3.5 text-[#FF7A00] fill-[#FF7A00]" />
                      <span>{language === 'bn' ? 'ঐতিহ্যবাহী কাঁসা-পিতলের ধুনুচি' : 'Bengali Brass Dhunuchi'}</span>
                    </>
                  ) : spotlightId === 'brass-panchamukhi-diya' ? (
                    <>
                      <Flame className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
                      <span>{language === 'bn' ? 'ময়ূর অলঙ্কৃত পঞ্চপ্রদীপ' : 'Peacock Aarti Diya'}</span>
                    </>
                  ) : spotlightId === 'sandalwood-incense-pack' ? (
                    <>
                      <Wind className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? 'খাঁটি মলয় চন্দন নির্যাস' : 'Pure Malaya Sandalwood'}</span>
                    </>
                  ) : spotlightId === 'pure-gangajal-haridwar' ? (
                    <>
                      <Droplets className="w-3.5 h-3.5 text-[#00D2FF] fill-[#00D2FF]" />
                      <span>{language === 'bn' ? 'হর-কি-পৌড়ী ব্রহ্মকুণ্ড' : 'Har Ki Pauri Brahmakund'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{language === 'bn' ? 'রাজকীয় পিতল সংগ্রহ' : 'Royal Brass Collection'}</span>
                    </>
                  )}
                </div>

                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#240303] px-3 py-1 rounded-full text-xs font-black shadow-md border border-[#FFF0A5]">
                  <span>{currentSpotlight.discountPercent}% ছাড়</span>
                </div>
              </div>

              {/* Quick Image Preview Action */}
              <button
                onClick={() => {
                  setSelectedProduct(currentSpotlight);
                  setActiveView('product');
                }}
                className="absolute bottom-4 right-4 bg-[#3B0707]/90 hover:bg-[#590B0B] text-[#FFEAA7] border border-[#D4AF37] px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'বড় করে দেখুন' : 'Zoom View'}</span>
              </button>
            </div>

            {/* Right/Bottom: Product Details & Actions */}
            <div className="lg:col-span-6 text-[#FFFDF9] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs font-bold text-[#FFDF79]">
                  {language === 'bn' ? 'বেস্ট সেলার' : 'Best Seller'}
                </span>
                <div className="flex items-center text-xs text-[#FFD700] gap-1 font-semibold">
                  <Star className="w-4 h-4 fill-[#FFD700]" />
                  <span>{currentSpotlight.rating.toFixed(1)} ({currentSpotlight.reviewCount} ভক্ত রিভিউ)</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-bengali-serif text-[#FFEAA7] tracking-tight leading-snug mb-3">
                {currentSpotlight.nameBn}
              </h3>

              <p className="text-sm sm:text-base text-[#E2CEB9] mb-4 leading-relaxed font-light">
                {currentSpotlight.longDescBn}
              </p>

              {/* Items included / Special Features */}
              <div className="mb-5 bg-[#240303]/60 rounded-xl p-3 border border-[#C5A059]/30">
                <p className="text-xs font-bold text-[#FFD700] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {spotlightId === 'copper-kosha-kushi-pure'
                      ? 'খাঁটি তামার খোদাই করা কোশা-কুশীর শাস্ত্রীয় বৈশিষ্ট্য:'
                      : spotlightId === 'pure-deshi-cow-ghee-puja'
                        ? 'প্রদীপের জন্য ১০০% খাঁটি দেশি গাভীর ঘৃতের মাহাত্ম্য:'
                        : spotlightId === 'bhimseni-pure-camphor'
                          ? 'অরিজিনাল ভিমসেনী কর্পূর স্ফটিকের আধ্যাত্মিক গুণাবলী:'
                        : spotlightId === 'sampoorna-satyanarayan-puja-kit'
                          ? 'সম্পূর্ণ সত্যনারায়ণ পূজা কিটের অন্তর্ভুক্ত বিশেষত্ব:'
                          : spotlightId === 'nepali-panchamukhi-rudraksha-mala'
                            ? 'অরিজিনাল নেপালি পঞ্চমুখী রুদ্রাক্ষ জপমালার বৈশিষ্ট্য:'
                            : spotlightId === 'authentic-sindoor-kumkum-box'
                              ? 'খাঁটি রক্তচন্দন সিঁদুর ও অষ্টগন্ধা কুমকুমের বিশেষত্ব:'
                              : spotlightId === 'bengali-dhunuchi-brass'
                                ? 'খাঁটি কাঁসা-পিতল ধুনুচির অনন্য বৈশিষ্ট্য:'
                                : spotlightId === 'brass-panchamukhi-diya'
                                  ? 'ময়ূর পঞ্চমুখী আরতি প্রদীপের বৈশিষ্ট্য:'
                                  : spotlightId === 'sandalwood-incense-pack'
                                    ? 'পবিত্র চন্দনের প্রাকৃতিক বৈশিষ্ট্য ও সুবিধা:'
                                    : spotlightId === 'pure-gangajal-haridwar'
                                      ? 'পবিত্রতার বিশেষ বৈশিষ্ট্য ও সিল নিশ্চয়তা:'
                                      : 'সেটটিতে অন্তর্ভুক্ত রয়েছে ৯টি পবিত্র অনুষঙ্গ:'}
                  </span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EAE0D5]">
                  {spotlightId === 'copper-kosha-kushi-pure' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ৯৯.৯% খাঁটি তামায় দক্ষ কারিগরদের নিপুণ খোদাই</span>
                      <span className="flex items-center gap-1">✦ আচমন, তর্পণ ও দেবীকে অর্ঘ্য নিবেদনের পূর্ণ শাস্ত্রীয় মান</span>
                      <span className="flex items-center gap-1">✦ তামার স্বাভাবিক অ্যান্টি-মাইক্রোবিয়াল ও পবিত্রতা গুণ</span>
                      <span className="flex items-center gap-1">✦ ৭ ইঞ্চি কোশা ও মানানসই ভারী কুশী সহ সম্পূর্ণ জোড়া</span>
                    </>
                  ) : spotlightId === 'pure-deshi-cow-ghee-puja' ? (
                    <>
                      <span className="flex items-center gap-1">✦ বৈদিক আলোড়ন পদ্ধতিতে প্রস্তুত খাঁটি সোনালী দানাদার ঘৃত</span>
                      <span className="flex items-center gap-1">✦ প্রদীপে ধোঁয়াহীন, স্নিগ্ধ ও দীর্ঘস্থায়ী স্বর্গীয় শিখা</span>
                      <span className="flex items-center gap-1">✦ বাস্তুদোষ নিবারক ও নিত্য দেবপূজায় সর্বশ্রেষ্ঠ উপাচার</span>
                      <span className="flex items-center gap-1">✦ ১ কেজি প্রিমিয়াম ফুড-গ্রেড সিল করা সুরক্ষা পাত্র</span>
                    </>
                  ) : spotlightId === 'bhimseni-pure-camphor' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০০% ভোজ্য ও প্রাকৃতিক জৈব কর্পূর স্ফটিক</span>
                      <span className="flex items-center gap-1">✦ কোনো অবশিষ্টাংশ বা কালো ধোঁয়া ছাড়া সম্পূর্ণ প্রজ্বলন</span>
                      <span className="flex items-center gap-1">✦ রোগজীবাণুমুক্ত বাতাস ও সুদূরপ্রসারী পবিত্র সুবাস</span>
                      <span className="flex items-center gap-1">✦ ২৫০ গ্রাম এয়ারটাইট সিল করা সুরক্ষিত কাঁচের পাত্র</span>
                    </>
                  ) : spotlightId === 'sampoorna-satyanarayan-puja-kit' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ৩২ প্রকার বাছাইকৃত শাস্ত্রীয় ও প্রামাণিক পূজা সামগ্রী</span>
                      <span className="flex items-center gap-1">✦ ব্রতকথা ও পাঁচালি পুস্তক, যজ্ঞ সমিধ ও বিশুদ্ধ ঘৃত</span>
                      <span className="flex items-center gap-1">✦ সীল করা গঙ্গাজল, আতপ চাল, সুপুরি ও পৈতে অন্তর্ভুক্ত</span>
                      <span className="flex items-center gap-1">✦ পুরোহিত মশাইদের অনুমোদিত নিখুঁত ফর্দ অনুযায়ী গোছানো</span>
                    </>
                  ) : spotlightId === 'nepali-panchamukhi-rudraksha-mala' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০৮+১ মেরু দানা অরিজিনাল প্রাকৃতিক নেপালি রুদ্রাক্ষ</span>
                      <span className="flex items-center gap-1">✦ সরকারি স্বীকৃত জেমোলজিক্যাল ল্যাব টেস্ট সার্টিফিকেট যুক্ত</span>
                      <span className="flex items-center gap-1">✦ প্রতিটি দানায় ৫টি স্বাভাবিক খাঁজ ও ঐতিহ্যবাহী গিঁট বাঁধা</span>
                      <span className="flex items-center gap-1">✦ ১টি প্রিমিয়াম লাল ভেলভেট সুরক্ষা পাউচ উপহার</span>
                    </>
                  ) : spotlightId === 'authentic-sindoor-kumkum-box' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০০ গ্রাম খাঁটি রক্তচন্দন ও প্রাকৃতিক ভেষজ সিঁদুর</span>
                      <span className="flex items-center gap-1">✦ ৫০ গ্রাম সুগন্ধি জাফরানযুক্ত অষ্টগন্ধা কুমকুম</span>
                      <span className="flex items-center gap-1">✦ ক্ষতিকর সিসা ও কেমিক্যাল মুক্ত, ত্বকের জন্য ১০০% নিরাপদ</span>
                      <span className="flex items-center gap-1">✦ ১টি সূক্ষ্ম খোদাই করা কাঠের সিঁদুরদান উপহার</span>
                    </>
                  ) : spotlightId === 'bengali-dhunuchi-brass' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০০% খাঁটি কাঁসা ও ভারী পিতলের ঐতিহ্যবাহী ধুনুচি</span>
                      <span className="flex items-center gap-1">✦ বাঙালি দুর্গাপূজার ধুনুচি আরতি ও নৃত্যের নিখুঁত ভারসাম্য</span>
                      <span className="flex items-center gap-1">✦ নিরাপদ চওড়া বেস ও উত্তাপ-প্রতিরোধী দীর্ঘস্থায়ী নকশা</span>
                      <span className="flex items-center gap-1">✦ ১০০ গ্রাম খাঁটি সুগন্ধি শালবৃক্ষের ধুনো উপহার</span>
                    </>
                  ) : spotlightId === 'brass-panchamukhi-diya' ? (
                    <>
                      <span className="flex items-center gap-1">✦ হস্তনির্মিত খাঁটি ভারী পিতল ও ঐতিহ্যবাহী ময়ূর নকশা</span>
                      <span className="flex items-center gap-1">✦ ৫ মুখের পবিত্র পঞ্চশিখা আরতি প্রদীপ</span>
                      <span className="flex items-center gap-1">✦ মজবুত সুরক্ষিত হাতল ও ভারসাম্যযুক্ত তলদেশ</span>
                      <span className="flex items-center gap-1">✦ ৫০টি তুলার সলতে ও বিশুদ্ধ কর্পূর উপহার</span>
                    </>
                  ) : spotlightId === 'sandalwood-incense-pack' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০০% খাঁটি মলয় চন্দন কাঠের নির্যাস</span>
                      <span className="flex items-center gap-1">✦ ৫০টি দীর্ঘস্থায়ী প্রিমিয়াম চন্দন ধূপকাঠি</span>
                      <span className="flex items-center gap-1">✦ ক্ষতিকর চারকোল ও কৃত্রিম রাসায়নিক মুক্ত</span>
                      <span className="flex items-center gap-1">✦ ১টি হস্তনির্মিত কাঠের ধূপকাঠি স্ট্যান্ড উপহার</span>
                    </>
                  ) : spotlightId === 'pure-gangajal-haridwar' ? (
                    <>
                      <span className="flex items-center gap-1">✦ ১০০% বিশুদ্ধ ও প্রামাণিক পুণ্য ব্রহ্মকুণ্ড জল</span>
                      <span className="flex items-center gap-1">✦ গোল্ড ফয়েল অ্যান্টি-টেম্পার সিল প্যাক</span>
                      <span className="flex items-center gap-1">✦ নিরাপদ ফুড-গ্রেড ৫০০ মিলি এয়ারটাইট জার</span>
                      <span className="flex items-center gap-1">✦ নিত্য আচমন, শোধন ও শিবলিঙ্গ অভিষেক উপযোগী</span>
                    </>
                  ) : (
                    <>
                      <span className="flex items-center gap-1">✦ ১২ ইঞ্চি খোদাই পিতলের থালি</span>
                      <span className="flex items-center gap-1">✦ পঞ্চপ্রদীপ ও কর্পূর প্রদীপ</span>
                      <span className="flex items-center gap-1">✦ পিতলের ঘণ্টা ও আচমনী চামচ</span>
                      <span className="flex items-center gap-1">✦ পঞ্চপাত্র, চন্দন বাটি ও বেল</span>
                    </>
                  )}
                </div>
              </div>

              {/* Pricing & CTA Buttons */}
              <div className="flex flex-wrap items-baseline gap-3 mb-6">
                <span className="text-3xl sm:text-4xl font-black text-[#FFDF79] font-bengali-serif">
                  ₹{currentSpotlight.price}
                </span>
                <span className="text-base sm:text-lg text-[#A99380] line-through font-bengali-serif">
                  ₹{currentSpotlight.originalPrice}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#27ae60]/30 border border-[#27ae60] text-xs font-bold text-[#7bed9f]">
                  ₹{currentSpotlight.originalPrice - currentSpotlight.price} সাশ্রয়
                </span>
                <span className="text-xs text-[#D8C7B0] ml-auto">
                  <ShieldCheck className="w-3.5 h-3.5 inline text-[#FFD700] mr-1" />
                  {spotlightId === 'copper-kosha-kushi-pure'
                    ? '৯৯.৯% খাঁটি তামা গ্যারান্টি'
                    : spotlightId === 'pure-deshi-cow-ghee-puja'
                      ? '১০০% খাঁটি আলোড়ন গাভী ঘৃত'
                    : spotlightId === 'bhimseni-pure-camphor'
                      ? '১০০% খাঁটি ভোজ্য কর্পূর গ্যারান্টি'
                      : spotlightId === 'sampoorna-satyanarayan-puja-kit'
                      ? '৩২ সামগ্রী পূর্ণতা গ্যারান্টি'
                      : spotlightId === 'nepali-panchamukhi-rudraksha-mala'
                        ? '১০০% অরিজিনাল ল্যাব টেস্ট গ্যারান্টি'
                      : spotlightId === 'authentic-sindoor-kumkum-box'
                        ? '১০০% প্রাকৃতিক ভেষজ গ্যারান্টি'
                        : spotlightId === 'bengali-dhunuchi-brass'
                          ? '১০০% খাঁটি কাঁসা-পিতল গ্যারান্টি'
                          : spotlightId === 'brass-panchamukhi-diya'
                            ? '১০০% খাঁটি ভারী পিতল গ্যারান্টি'
                            : spotlightId === 'sandalwood-incense-pack'
                              ? '১০০% প্রাকৃতিক ও চারকোল মুক্ত'
                              : spotlightId === 'pure-gangajal-haridwar'
                                ? 'হর-কি-পৌড়ী তীর্থ সিল'
                                : '১০০% খাঁটি পিতল গ্যারান্টি'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    addToCart(currentSpotlight);
                    setIsCartOpen(true);
                  }}
                  className="flex-1 min-w-[150px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C69927] text-[#240303] text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-lg transition-transform transform active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{language === 'bn' ? 'কার্টে যোগ করুন' : 'Add to Cart'}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedProduct(currentSpotlight);
                    setActiveView('product');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-5 rounded-xl bg-[#590B0B] hover:bg-[#730E0E] text-[#FFE89E] border border-[#D4AF37] text-sm sm:text-base font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>{language === 'bn' ? 'সম্পূর্ণ বিবরণ' : 'Details'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => toggleWishlist(currentSpotlight.id)}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                    isSpotlightWishlisted 
                      ? 'bg-[#800000] border-[#FF4D4D] text-[#FF4D4D]' 
                      : 'bg-[#2E0505] border-[#C5A059]/50 text-[#FFEAA7] hover:bg-[#450909]'
                  }`}
                  title="উইশলিস্টে রাখুন"
                >
                  <Heart className={`w-5 h-5 ${isSpotlightWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Quick Filter Tabs */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            id={`featured-filter-${tab.id}`}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-[#590B0B] text-[#FFEAA7] border border-[#D4AF37] shadow-md'
                : 'bg-[#FFFDF9] text-[#554033] hover:bg-[#EADBCA] border border-[#D8C7B0]'
            }`}
          >
            {language === 'bn' ? tab.labelBn : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom CTA to Full Shop */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <button
          id="featured-view-all-shop-btn"
          onClick={() => {
            setActiveView('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#240303] text-sm sm:text-base font-extrabold shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>{language === 'bn' ? 'সকল পূজা সামগ্রীর দোকান দেখুন' : 'Explore Full Puja Samagri Store'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};

