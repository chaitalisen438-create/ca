import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  ShoppingBag, 
  Truck, 
  BadgePercent, 
  Lock, 
  Sparkles 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WhyChooseUs: React.FC = () => {
  const { language } = useStore();

  const features = [
    {
      id: 'authentic',
      icon: ShieldCheck,
      titleBn: 'আসল ও মানসম্মত পণ্য',
      subtitleBn: 'নির্বাচিত ও বিশ্বস্ত পূজার সামগ্রী',
      titleEn: '100% Authentic & Pure',
      subtitleEn: 'Carefully curated and sacred puja articles'
    },
    {
      id: 'all-in-one',
      icon: Layers,
      titleBn: 'সব ধরনের পূজার সামগ্রী',
      subtitleBn: 'এক জায়গায় সম্পূর্ণ সংগ্রহ',
      titleEn: 'Complete Puja Collection',
      subtitleEn: 'Everything you need in a single trusted destination'
    },
    {
      id: 'easy-order',
      icon: ShoppingBag,
      titleBn: 'সহজ অনলাইন অর্ডার',
      subtitleBn: 'ঘরে বসেই অর্ডার করুন',
      titleEn: 'Easy Online Ordering',
      subtitleEn: 'Convenient seamless shopping from home'
    },
    {
      id: 'fast-delivery',
      icon: Truck,
      titleBn: 'দ্রুত ডেলিভারি',
      subtitleBn: 'নিরাপদ ও দ্রুত পণ্য পৌঁছে দেওয়া',
      titleEn: 'Fast & Secure Delivery',
      subtitleEn: 'Carefully packaged and timely doorstep delivery'
    },
    {
      id: 'fair-price',
      icon: BadgePercent,
      titleBn: 'সাশ্রয়ী মূল্য',
      subtitleBn: 'সেরা মানের পণ্য সঠিক দামে',
      titleEn: 'Honest & Affordable Prices',
      subtitleEn: 'Top-tier spiritual quality at right fair prices'
    },
    {
      id: 'secure-pay',
      icon: Lock,
      titleBn: 'নিরাপদ পেমেন্ট',
      subtitleBn: 'Secure online payment system',
      titleEn: '100% Safe Payments',
      subtitleEn: 'UPI, Cards, Netbanking & Cash on Delivery'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE3] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800000] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{language === 'bn' ? 'আমাদের প্রতিশ্রুতি ও মান' : 'Our Sacred Commitment'}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B0707] font-bengali-serif tracking-tight mb-3">
            {language === 'bn' ? '“কেন মহাকাল দশকর্মা ভান্ডার?”' : '“Why Choose Mahaakal Dashakarma Bhandar?”'}
          </h2>

          <p className="text-sm sm:text-base text-[#6E5948]">
            {language === 'bn'
              ? 'দশকের পর দশক ধরে কোটি ভক্ত ও পুরোহিতদের বিশ্বস্ত আধ্যাত্মিক সঙ্গী'
              : 'Trusted companion for thousands of devout families and Vedic priests for generations.'}
          </p>
        </div>

        {/* Six Premium Icon Cards with antique gold icons inside circular maroon backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-card-${item.id}`}
                className="group p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#E5D7BF] hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(80,20,20,0.05)] hover:shadow-[0_12px_28px_rgba(90,15,15,0.12)] transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4"
              >
                {/* Circular Maroon Background with Antique Gold Icon */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#590B0B] to-[#360404] border border-[#D4AF37] flex items-center justify-center shrink-0 shadow-md group-hover:scale-108 transition-transform">
                  <Icon className="w-6 h-6 text-[#D4AF37] stroke-[2]" />
                </div>

                {/* Text Description */}
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-[#3B0707] font-bengali-serif group-hover:text-[#800000] transition-colors mb-1">
                    {language === 'bn' ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665243] leading-relaxed">
                    {language === 'bn' ? item.subtitleBn : item.subtitleEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
