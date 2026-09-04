import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

import dailyPujaCardImage from '../assets/images/special_daily_puja_1788537558409.jpg';
import festivalSpecialCardImage from '../assets/images/special_festive_puja_1788537577296.jpg';
import completePujaKitCardImage from '../assets/images/special_complete_kit_1788537591959.jpg';
import spiritualGiftCardImage from '../assets/images/special_spiritual_gift_1788537608101.jpg';

export const PujaSpecialCollection: React.FC = () => {
  const { language, setActiveView, setSelectedCategory, setSelectedFestival } = useStore();

  const specialCards = [
    {
      id: 'daily-essentials',
      icon: '🪔',
      categoryTagBn: 'নিত্য পূজা সামগ্রী',
      categoryTagEn: 'DAILY RITUALS',
      title: 'Daily Puja Essentials',
      descBn: 'প্রতিদিনের পূজার প্রয়োজনীয় সব সামগ্রী',
      descEn: 'All Sacred Items for Everyday Home Devotion',
      catId: 'daily-puja',
      imageUrl: dailyPujaCardImage
    },
    {
      id: 'festival-special',
      icon: '🙏',
      categoryTagBn: 'উৎসব ও পার্বণ',
      categoryTagEn: 'FESTIVAL SPECIAL',
      title: 'Festival Special',
      descBn: 'দুর্গাপূজা, কালীপূজা, লক্ষ্মীপূজা ও অন্যান্য উৎসবের বিশেষ সংগ্রহ',
      descEn: 'Durga Puja, Kali Puja, Lakshmi Puja and Festive Essentials',
      festId: 'durga-puja',
      imageUrl: festivalSpecialCardImage
    },
    {
      id: 'complete-puja-kit',
      icon: '🕉',
      categoryTagBn: 'সম্পূর্ণ বক্স কিট',
      categoryTagEn: 'COMPLETE PUJA KIT',
      title: 'Complete Puja Kit',
      descBn: 'একটি পূজার জন্য প্রয়োজনীয় সব সামগ্রী একসাথে',
      descEn: 'All Vedic Articles for Complete Ritual in One Box',
      catId: 'puja-kits',
      imageUrl: completePujaKitCardImage
    },
    {
      id: 'gift-collection',
      icon: '🎁',
      categoryTagBn: 'শুভ উপহার সামগ্রী',
      categoryTagEn: 'GIFT COLLECTION',
      title: 'Gift Collection',
      descBn: 'ধর্মীয় ও শুভ উপহারের বিশেষ সংগ্রহ',
      descEn: 'Sacred & Auspicious Idols, Diyas and Gift Sets',
      catId: 'idols',
      imageUrl: spiritualGiftCardImage
    }
  ];

  const handleClick = (card: typeof specialCards[0]) => {
    if (card.catId) {
      setSelectedCategory(card.catId);
    } else if (card.festId) {
      setSelectedFestival(card.festId);
    }
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="puja-special-collection-section" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#2A0505] text-[#FFF7E2] relative overflow-hidden">
      {/* Background Decorative Warm Temple Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4E0A0A] border border-[#D4AF37]/50 text-[#FFDF79] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="font-bengali-serif tracking-wide">{language === 'bn' ? 'মহাকাল বিশেষ পূজা আয়োজন' : 'Mahaakal Special Curation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-bengali-serif text-[#FFF] tracking-tight mb-3">
            {language === 'bn' ? 'পূজার বিশেষ সমাহার' : 'Puja Special Collection'}
          </h2>

          <p className="text-sm sm:text-base text-[#D4C3A3]">
            {language === 'bn' 
              ? 'বাঙালির বারো মাসে তেরো পার্বণ ও নিত্য পূজার সম্পূর্ণ পবিত্র উপাচার' 
              : 'Complete sacred rituals curated for traditional Bengali festivities and daily prayer.'}
          </p>
        </div>

        {/* 4 Large Premium Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialCards.map((card) => (
            <div
              key={card.id}
              id={`special-card-${card.id}`}
              onClick={() => handleClick(card)}
              className="group relative h-96 sm:h-[430px] rounded-3xl overflow-hidden border-2 border-[#C5A059]/40 hover:border-[#D4AF37] shadow-[0_12px_35px_rgba(0,0,0,0.55)] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-end p-6 select-none"
            >
              {/* Photorealistic Product Photography Full-Bleed Background */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark Maroon Gradient Overlay from bottom to top so text remains readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#200202] via-[#2A0404]/80 to-[#200202]/30 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_70%)] opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Icon Badge at Top-Left */}
              <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-[#4A0A0A]/90 backdrop-blur-md border border-[#D4AF37] flex items-center justify-center text-2xl shadow-lg group-hover:rotate-6 transition-transform z-10">
                <span>{card.icon}</span>
              </div>

              {/* Content Card Body */}
              <div className="relative z-10 space-y-2.5">
                {/* Small Antique-Gold Category Label */}
                <span className="text-[11px] font-bold text-[#FFDF79] uppercase tracking-wider block font-serif">
                  {language === 'bn' ? card.categoryTagBn : card.categoryTagEn}
                </span>

                {/* Large White English Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-serif group-hover:text-[#FFE58A] transition-colors leading-tight">
                  {card.title}
                </h3>

                {/* Bengali Description */}
                <p className="text-xs sm:text-sm text-[#F3E5D0] leading-relaxed font-bengali-serif">
                  {language === 'bn' ? card.descBn : card.descEn}
                </p>

                {/* Yellow/Gold CTA "সংগ্রহ দেখুন →" */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] group-hover:text-[#FFF7E2] transition-colors font-bengali-serif">
                    <span>{language === 'bn' ? 'সংগ্রহ দেখুন' : 'Explore Collection'}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFD700] transform group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
