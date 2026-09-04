import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { FESTIVALS } from '../data/festivals';
import { useStore } from '../context/StoreContext';

export const FestivalSection: React.FC = () => {
  const { language, setActiveView, setSelectedFestival } = useStore();

  const handleFestivalClick = (festId: string) => {
    setSelectedFestival(festId);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="festival-collection-section" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative">
      
      {/* Subtle Section Divider */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 mb-3">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
        <div className="text-sm text-[#800000]">ॐ</div>
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#800000] tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{language === 'bn' ? 'বাঙালির বারো মাসে তেরো পার্বণ' : 'Traditional Bengali Festivals'}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380505] font-bengali-serif tracking-tight mb-3">
          {language === 'bn' ? '“উৎসবের বিশেষ সংগ্রহ”' : '“Festive Samagri Collection”'}
        </h2>

        <p className="text-base text-[#685341] max-w-xl mx-auto">
          {language === 'bn' 
            ? 'প্রতিটি মহাপূজার জন্য প্রামাণিক শাস্ত্রীয় ফর্দ ও বিশুদ্ধ উপাচারের সমাহার' 
            : 'Dedicated ritual articles, samagri kits and puja lists for all traditional Bengali celebrations.'}
        </p>
      </div>

      {/* 9 Festival Tiles Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FESTIVALS.map((fest) => (
          <div
            key={fest.id}
            id={`festival-tile-${fest.id}`}
            onClick={() => handleFestivalClick(fest.id)}
            className="group relative rounded-2xl overflow-hidden border border-[#E4D5BE] hover:border-[#D4AF37] bg-[#FFFDF9] shadow-[0_4px_18px_rgba(80,30,10,0.06)] hover:shadow-[0_12px_30px_rgba(80,10,10,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
          >
            {/* Festival Imagery */}
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#2D0404]">
              <img
                src={fest.imageUrl}
                alt={fest.nameBn}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#250303] via-[#250303]/40 to-transparent"></div>

              {/* Month / Tithi Pill */}
              <div className="absolute top-3 left-3 bg-[#470909]/90 border border-[#D4AF37]/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#FFEAA7] flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#D4AF37]" />
                <span>{fest.monthBn}</span>
              </div>

              {/* Product Count Pill */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] text-white font-medium">
                {language === 'bn' ? `${fest.productCount} টি পণ্য` : `${fest.productCount} Items`}
              </div>

              {/* Festival Name Overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-xl font-bold text-[#FFF7E2] font-bengali-serif group-hover:text-[#FFDF79] transition-colors">
                  {language === 'bn' ? fest.nameBn : fest.nameEn}
                </h3>
              </div>
            </div>

            {/* Content & Tagline */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-[#FFFDF9]">
              <p className="text-xs sm:text-sm text-[#665141] line-clamp-2 leading-relaxed mb-3">
                {fest.taglineBn}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#F0E5D5] text-xs font-bold text-[#800000] group-hover:text-[#A71D1D]">
                <span>{language === 'bn' ? 'পূজার সামগ্রী দেখুন' : 'Explore Samagri'}</span>
                <div className="w-6 h-6 rounded-full bg-[#F5EFE3] group-hover:bg-[#800000] text-[#800000] group-hover:text-[#FFEAA7] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
