import React from 'react';
import { CATEGORIES } from '../data/categories';
import { useStore } from '../context/StoreContext';

export const CategorySection: React.FC = () => {
  const { language, setActiveView, setSelectedCategory } = useStore();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="category-section" className="w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-[#FAF7F2] relative border-b border-[#EBDDC5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading & Brand Authority */}
        <div className="text-center mb-8 sm:mb-11">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#590B0B]/10 border border-[#D4AF37]/40 text-[#590B0B] text-xs font-bold mb-2.5">
            <span className="font-bengali-serif tracking-wide">{language === 'bn' ? 'মহাকাল দশকর্মা ভান্ডার' : 'MAHAAKAL DASHAKARMA BHANDAR'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#380808] font-bengali-serif tracking-tight">
            {language === 'bn' ? 'পবিত্র পূজার ১২টি প্রধান বিভাগ' : '12 Sacred Puja Samagri Categories'}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6451] mt-1.5 max-w-xl mx-auto">
            {language === 'bn' ? 'শাস্ত্রমতে খাঁটি ও প্রামাণিক প্রতিটি পূজার অনুষঙ্গ এক ছাদের নিচে' : 'Authentic and pure ritual essentials for all Hindu pujas under one roof'}
          </p>
        </div>

        {/* 12 Category Grid: Desktop 6x2 = 12 cards, Tablet 3 cards/row, Mobile 2 cards/row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const formattedBadge = String(cat.badgeNumber).padStart(2, '0');
            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative bg-[#FFFDF9] rounded-2xl pt-6 pb-5 px-3 sm:px-4 border border-[#E5D7B7] hover:border-[#D4AF37] shadow-[0_3px_12px_rgba(120,70,30,0.05)] hover:shadow-[0_12px_26px_rgba(90,20,10,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center cursor-pointer select-none overflow-hidden"
              >
                {/* Subtle Corner Decorative Gold Shape */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-2xl">
                  <div className="absolute transform rotate-45 bg-gradient-to-br from-[#EAD9B8] via-[#D4AF37] to-[#B8860B] w-12 h-3.5 -top-1 -right-4 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Large Circular Image Container with Antique-Gold Ring */}
                <div className="relative mb-3.5">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-b from-[#E7D6B3] via-[#D4AF37] to-[#8C6207] shadow-md ring-2 ring-[#D4AF37]/35 ring-offset-2 ring-offset-[#FFFDF9] transition-transform duration-500 group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#F5EEDC] relative">
                      <img
                        src={cat.imageUrl}
                        alt={cat.nameBn}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Dark-Maroon Circular Number Badge Overlapping Lower-Right Edge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#4A0A0A] border-[1.5px] border-[#D4AF37] text-[#FFDF79] text-[11px] sm:text-xs font-bold font-serif flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span>{formattedBadge}</span>
                  </div>
                </div>

                {/* Bengali Category Title */}
                <h3 className="text-[15px] sm:text-base font-bold text-[#380808] group-hover:text-[#7E0000] font-bengali-serif leading-tight transition-colors mb-2 min-h-[2.5rem] flex items-center justify-center text-center px-1">
                  {language === 'bn' ? cat.nameBn : cat.nameEn}
                </h3>

                {/* Product Count with Elegant Right-Arrow "›" */}
                <div className="mt-auto flex items-center justify-center gap-1 text-xs text-[#7A6451] group-hover:text-[#7E0000] font-medium transition-colors">
                  <span>{language === 'bn' ? cat.itemCountBn : `${cat.itemCount} Items`}</span>
                  <span className="text-base font-bold text-[#A89078] group-hover:text-[#7E0000] group-hover:translate-x-1 transition-transform inline-block leading-none ml-0.5">
                    ›
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
