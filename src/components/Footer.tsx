import React from 'react';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/categories';

export const Footer: React.FC = () => {
  const { language, setActiveView, setSelectedCategory, setSelectedFestival } = useStore();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#200303] text-[#FFF7E2] border-t-4 border-[#C5A059] relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Brand Banner Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-12 mb-12 border-b border-[#4A0A0A] gap-6 text-center lg:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#590B0B] to-[#2B0303] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg shrink-0">
              <Flame className="w-8 h-8 text-[#FFD700] fill-[#FFD700]" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#FFEAA7] font-bengali-serif tracking-wide">
                মহাকাল দশকর্মা ভান্ডার
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] font-cinzel">
                MAHAAKAL DASHAKARMA BHANDAR
              </p>
            </div>
          </div>

          {/* Devotional Taglines */}
          <div className="flex flex-col items-center lg:items-end space-y-1">
            <span className="text-sm sm:text-base font-bold text-[#FFD700] font-bengali-serif">
              “ঐতিহ্য • বিশ্বাস • ভক্তি”
            </span>
            <span className="text-xs sm:text-sm text-[#D4C3A3] font-light">
              “আপনার প্রতিটি শুভ মুহূর্তের বিশ্বস্ত সঙ্গী”
            </span>
          </div>

        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-xs sm:text-sm">
          
          {/* Column 1: About & Devotion */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFE89E] font-bengali-serif border-b border-[#520B0B] pb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === 'bn' ? 'আমাদের পরিচয়' : 'About Store'}</span>
            </h3>
            <p className="text-xs text-[#C5B396] leading-relaxed">
              মহাকাল দশকর্মা ভান্ডার দীর্ঘদিন ধরে ভক্তি ও নিষ্ঠার সাথে বিশুদ্ধ পূজা সামগ্রী, পিতলের দেবপাত্র, পূর্ণ ফর্দ ও ধর্মীয় উপকরণ বিশ্বস্ততার সাথে গৃহকোণে পৌঁছে দিচ্ছে।
            </p>
            <div className="pt-2 text-xs text-[#FFE89E] space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>১০০% শাস্ত্রীয় বিশুদ্ধতার নিশ্চয়তা</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span>বাঙালির বারো মাসে তেরো পার্বণে পাশে</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFE89E] font-bengali-serif border-b border-[#520B0B] pb-2">
              {language === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C5B396]">
              <li>
                <button 
                  onClick={() => { setActiveView('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FFEAA7] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>পূজার সামগ্রী অনলাইন স্টোর</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { handleCategoryClick('dashakarma'); }}
                  className="hover:text-[#FFEAA7] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>দশকর্মা ফর্দ ও উপকরণ</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { handleCategoryClick('puja-kits'); }}
                  className="hover:text-[#FFEAA7] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>সম্পূর্ণ পূজা কিট সম্ভার</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('festival-collection-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FFEAA7] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>উৎসব সম্ভার (Durga, Kali, Lakshmi)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { handleCategoryClick('rudraksha'); }}
                  className="hover:text-[#FFEAA7] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>সার্টিফাইড রুদ্রাক্ষ ও জপমালা</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Puja Categories */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFE89E] font-bengali-serif border-b border-[#520B0B] pb-2">
              {language === 'bn' ? 'প্রধান পূজার সামগ্রী' : 'Sacred Categories'}
            </h3>
            <ul className="space-y-2 text-xs text-[#C5B396]">
              {CATEGORIES.slice(0, 6).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => handleCategoryClick(c.id)}
                    className="hover:text-[#FFEAA7] transition-colors cursor-pointer"
                  >
                    {c.nameBn} ({c.nameEn})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFE89E] font-bengali-serif border-b border-[#520B0B] pb-2">
              {language === 'bn' ? 'যোগাযোগ ও প্রদর্শনশালা' : 'Contact & Store'}
            </h3>
            <div className="space-y-3 text-xs text-[#C5B396]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  মহাকাল দশকর্মা ভান্ডার, শ্যামবাজার মোড় / কলেজ স্ট্রিট, কলকাতা - ৭০০০০৪, পশ্চিমবঙ্গ
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+918981701480" className="hover:text-[#FFEAA7] transition-colors">+91 89817 01480</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  <a href="mailto:chaitalisen438@gmail.com" className="hover:text-[#FFEAA7] transition-colors">
                    chaitalisen438@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>সকাল ৭:০০ - রাত্রি ৯:৩০ (সপ্তাহের সবদিন খোলা)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Accepted Payment Methods & Security */}
        <div className="pt-8 border-t border-[#4A0A0A] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B5A186]">
          
          {/* Payment Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-[#8C7563]">নিরাপদ পেমেন্ট পার্টনার:</span>
            {['UPI (GPay / PhonePe)', 'RuPay', 'Visa', 'Mastercard', 'NetBanking', 'ক্যাশ অন ডেলিভারি (COD)'].map((badge, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-[#330606] border border-[#590B0B] text-[11px] text-[#FFE89E]">
                {badge}
              </span>
            ))}
          </div>

          {/* Copyright notice */}
          <div className="text-center md:text-right text-[11px]">
            © {new Date().getFullYear()} মহাকাল দশকর্মা ভান্ডার (MAHAAKAL DASHAKARMA BHANDAR). সর্বস্বত্ব সংরক্ষিত।
          </div>

        </div>

      </div>

    </footer>
  );
};
