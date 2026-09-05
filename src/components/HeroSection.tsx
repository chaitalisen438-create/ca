import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Truck, 
  Award, 
  ChevronRight,
  Gift
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import purohitImage from '../assets/images/purohit_puja_samagri_1788534534670.jpg';

export const HeroSection: React.FC = () => {
  const { language, setActiveView, setSelectedCategory } = useStore();

  return (
    <section className="relative w-full py-6 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#240303]">
      {/* Background Subtle Ambient Temple Glow & Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(180,30,30,0.25),transparent_50%)] pointer-events-none"></div>

      {/* Main Large Rounded Container Inspired by First Reference Screenshot */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border-2 border-[#C5A059]/60 shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative bg-gradient-to-br from-[#450808] via-[#320404] to-[#1E0202]">
        
        {/* Subtle Decorative Golden Corner Ornaments */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none"></div>
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
          
          {/* Left Hero Content: Headline, Text & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5E0F0F] border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)] text-[#FFE89E] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#F5B041] animate-pulse" />
              <span>
                {language === 'bn' ? 'সম্পূর্ণ পূজা সামগ্রী একসাথে' : 'Complete Puja Essentials in One Place'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#FFF7E2] font-bengali-serif leading-[1.25] tracking-tight">
              {language === 'bn' ? (
                <>
                  “আপনার পূজার <span className="text-[#ffd700] underline decoration-[#C5A059]/50 decoration-wavy">সকল সামগ্রী</span>, এখন এক জায়গায়”
                </>
              ) : (
                <>
                  “All Your Sacred <span className="text-[#ffd700]">Puja Samagri</span>, Now in One Place”
                </>
              )}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#E6D4AF] leading-relaxed max-w-2xl font-normal">
              {language === 'bn'
                ? 'মহাকাল দশকর্মা ভান্ডারে পাবেন সকল ধরনের পূজা সামগ্রী ও ধর্মীয় প্রয়োজনীয় জিনিসপত্র। প্রথাগত শাস্ত্রীয় বিশুদ্ধতা, খাঁটি পিতল, পঞ্চপ্রদীপ ও দশকর্মা ফর্দ সামগ্রীর বিশ্বস্ত প্রতিষ্ঠান।'
                : 'Discover complete authentic Hindu Puja Samagri and spiritual ritual articles at Mahaakal Dashakarma Bhandar. Guaranteed purity, traditional brassware, holy Gangajal, and ritual kits.'}
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg py-2 border-y border-[#C5A059]/30">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#E3D1A6] font-medium">
                  {language === 'bn' ? '১০০% খাঁটি ও পবিত্র' : '100% Pure & Vedic'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#E3D1A6] font-medium">
                  {language === 'bn' ? 'দ্রুত হোম ডেলিভারি' : 'Fast Delivery'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#E3D1A6] font-medium">
                  {language === 'bn' ? '৫০+ বছরের ঐতিহ্য' : '50+ Yrs Trust'}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-shop-now-btn"
                onClick={() => {
                  setActiveView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#240303] font-bold text-base shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{language === 'bn' ? 'এখনই কিনুন' : 'Shop Now'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={() => {
                  setActiveView('home');
                  document.getElementById('category-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#4A0A0A]/80 hover:bg-[#5E1212] text-[#FFE89E] border border-[#C5A059] font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#F5B041]"
              >
                <span>{language === 'bn' ? 'পূজা সংগ্রহ দেখুন' : 'Explore Puja Collection'}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>

          {/* Right Hero Visuals: Photorealistic Bengali Hindu Puja Scene & Secondary Promotional Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* Main Photorealistic Puja Composition Card from Reference Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_12px_40px_rgba(0,0,0,0.8)] group bg-[#260303]">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full relative bg-[#1B0101] overflow-hidden">
                <img
                  src={purohitImage}
                  alt="মহাকাল সম্পূর্ণ পূজা কিট - পবিত্র মন্দির পরিবেশ"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Golden Cinematic Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200202]/95 via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Left Badge: পবিত্র মন্দির পরিবেশ */}
                <div className="absolute top-3.5 left-3.5 bg-[#3B0707]/90 backdrop-blur-sm border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FFEAA7] flex items-center gap-1.5 shadow-lg">
                  <Flame className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
                  <span>{language === 'bn' ? 'পবিত্র মন্দির পরিবেশ' : 'Sacred Temple Ambience'}</span>
                </div>

                {/* Top Right Badge: ১০৮ উপাচার সামগ্রী */}
                <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] text-[#240303] px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg border border-[#FFEAA7]">
                  <span>{language === 'bn' ? '১০৮ উপাচার সামগ্রী' : '108 Ritual Articles'}</span>
                </div>

                {/* Bottom Overlay Card: মহাকাল সম্পূর্ণ পূজা কিট */}
                <div 
                  onClick={() => {
                    setActiveView('shop');
                    setSelectedCategory('puja-kits');
                  }}
                  className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-2xl bg-[#360707]/95 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-between shadow-2xl cursor-pointer hover:bg-[#450909] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#610E0E] to-[#2B0303] border border-[#D4AF37] flex items-center justify-center text-xl shadow-inner shrink-0">
                      <span>🪔</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#FFF7E2] font-bengali-serif leading-tight">
                        {language === 'bn' ? 'মহাকাল সম্পূর্ণ পূজা কিট' : 'Mahaakal Complete Puja Kit'}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#E0CEAA] mt-0.5 font-normal">
                        {language === 'bn' ? 'ঘঁটি পিতল, ধুনুচি ও ফুল মালা সহ' : 'Inc. Brass Ghat, Dhunuchi & Fresh Mala'}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[11px] sm:text-xs text-[#BFA68A] line-through block font-bengali-serif">
                      ₹৩,১৯৯
                    </span>
                    <span className="text-lg sm:text-xl font-black text-[#FFDF79] font-bengali-serif">
                      ₹২,৪৯৯
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Categories Strip */}
              <div className="bg-[#1F0202] py-2.5 px-4 flex items-center justify-around border-t border-[#C5A059]/40 text-xs font-semibold text-[#FFDF79]">
                <button
                  onClick={() => {
                    setActiveView('shop');
                    setSelectedCategory('daily-puja');
                  }}
                  className="flex items-center gap-1.5 hover:text-[#FFF] transition-colors cursor-pointer"
                >
                  <span>🪔</span>
                  <span>{language === 'bn' ? 'দৈনিক পূজা সামগ্রী' : 'Daily Puja'}</span>
                </button>
                <div className="h-3 w-px bg-[#C5A059]/40"></div>
                <button
                  onClick={() => {
                    setActiveView('shop');
                    setSelectedCategory('flowers');
                  }}
                  className="flex items-center gap-1.5 hover:text-[#FFF] transition-colors cursor-pointer"
                >
                  <span>🌸</span>
                  <span>{language === 'bn' ? 'তাজা মালা' : 'Fresh Garlands'}</span>
                </button>
                <div className="h-3 w-px bg-[#C5A059]/40"></div>
                <button
                  onClick={() => {
                    setActiveView('shop');
                    setSelectedCategory('gangajal');
                  }}
                  className="flex items-center gap-1.5 hover:text-[#FFF] transition-colors cursor-pointer"
                >
                  <span>🍯</span>
                  <span>{language === 'bn' ? 'প্রসাদ ও নৈবেদ্য' : 'Prasad'}</span>
                </button>
              </div>
            </div>

            {/* Secondary Promotional Panel Inspired by Reference Advertisement Styling */}
            <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#4A0A0A] to-[#360505] border border-[#C5A059] shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#610E0E] border border-[#D4AF37]/60 flex items-center justify-center text-[#FFD700] shrink-0 shadow-inner">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#FFDF79] font-semibold block">
                    {language === 'bn' ? '★ বিশেষ পূজা অফার ★' : '★ Special Puja Offer ★'}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#FFF7E2] font-bengali-serif leading-snug">
                    {language === 'bn' ? 'যেকোনো পূজা কিটে অতিরিক্ত ১০% ছাড়' : 'Extra 10% Off on All Puja Kits'}
                  </p>
                  <p className="text-xs text-[#D8C496]">
                    {language === 'bn' ? 'কুপন কোড ব্যবহার করুন:' : 'Use coupon code:'} <span className="font-mono font-bold text-[#FFD700] bg-[#290303] px-1.5 py-0.5 rounded border border-[#C5A059]/40">MAHAAKAL10</span>
                  </p>
                </div>
              </div>

              <button
                id="hero-promo-kit-btn"
                onClick={() => {
                  setActiveView('shop');
                  setSelectedCategory('puja-kits');
                }}
                className="shrink-0 px-3.5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#FFE484] text-[#240303] text-xs font-bold transition-all cursor-pointer shadow"
              >
                {language === 'bn' ? 'সংগ্রহ দেখুন' : 'View Kits'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
