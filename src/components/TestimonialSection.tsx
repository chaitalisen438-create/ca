import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/testimonials';
import { useStore } from '../context/StoreContext';

export const TestimonialSection: React.FC = () => {
  const { language } = useStore();

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE3] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800000] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{language === 'bn' ? 'ভক্ত ও পুরোহিতদের আস্থা' : 'Devotees & Priests Reviews'}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0606] font-bengali-serif tracking-tight mb-3">
            {language === 'bn' ? '“আমাদের গ্রাহকদের অভিজ্ঞতা”' : '“Customer Testimonials & Experiences”'}
          </h2>

          <p className="text-sm sm:text-base text-[#6E5948]">
            {language === 'bn'
              ? 'আমাদের পূজা সামগ্রী ও সেবায় তুষ্ট অগণিত ভক্তদের আন্তরিক অনুভূতি'
              : 'Heartfelt words from satisfied families and purohits across Bengal and India.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="group p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5D7BF] hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(80,20,20,0.05)] hover:shadow-[0_12px_28px_rgba(90,15,15,0.12)] transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Subtle Quote Icon */}
              <div className="absolute top-5 right-5 text-[#E2D2B5] group-hover:text-[#D4AF37]/50 transition-colors">
                <Quote className="w-7 h-7 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3 text-[#F5B041]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B041]" />
                  ))}
                </div>

                {/* Bengali Review Comment */}
                <p className="text-sm text-[#4E3A2E] leading-relaxed mb-4 italic font-normal">
                  “{rev.commentBn}”
                </p>
              </div>

              {/* Customer Info & Purchased Product */}
              <div className="pt-3 border-t border-[#F0E4D3]">
                <h4 className="text-sm font-bold text-[#3B0707] font-bengali-serif">
                  {rev.name}
                </h4>
                <p className="text-xs text-[#8A7361]">{rev.location}</p>
                <div className="mt-1.5 inline-block text-[11px] font-medium text-[#800000] bg-[#FFF2DA] px-2 py-0.5 rounded border border-[#E2C798]">
                  {rev.productBn}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
