import React from 'react';
import { Flame, CheckCircle2, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AboutSection: React.FC = () => {
  const { language, setActiveView } = useStore();

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative overflow-hidden">
      
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Split Layout Text */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#520B0B] text-[#FFE89E] border border-[#D4AF37]/50 text-xs font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B041]" />
              <span>{language === 'bn' ? 'আমাদের ইতিহাস ও বিশ্বাস' : 'Our Heritage & Devotion'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380505] font-bengali-serif tracking-tight leading-tight">
              {language === 'bn' ? '“মহাকাল দশকর্মা ভান্ডার সম্পর্কে”' : '“About Mahaakal Dashakarma Bhandar”'}
            </h2>

            {/* Exactly Requested Text */}
            <p className="text-base sm:text-lg text-[#554032] leading-relaxed font-normal">
              {language === 'bn' ? (
                '“মহাকাল দশকর্মা ভান্ডার দীর্ঘদিন ধরে ভক্তদের কাছে মানসম্মত পূজা সামগ্রী ও ধর্মীয় উপকরণ পৌঁছে দিয়ে আসছে। আমাদের লক্ষ্য হলো প্রতিটি পূজা ও শুভ অনুষ্ঠানের জন্য প্রয়োজনীয় সমস্ত সামগ্রী সহজে এক জায়গায় পাওয়া নিশ্চিত করা।”'
              ) : (
                '“Mahaakal Dashakarma Bhandar has been dedicatedly delivering premium quality Puja Samagri and spiritual ritual essentials to devotees for generations. Our vision is to ensure that all necessary articles for every puja and auspicious Hindu celebration are easily accessible in one sacred place.”'
              )}
            </p>

            <p className="text-sm sm:text-base text-[#6C5747] leading-relaxed">
              {language === 'bn'
                ? 'বাঙালির দুর্গোৎসব, শ্যামাপূজা, কোজাগরী লক্ষ্মীপূজা থেকে শুরু করে গৃহের সত্যনারায়ণ ব্রত, অন্নপ্রাশন ও শুভ বিবাহের দশকর্মা ফর্দ সামগ্রী—সবকিছুই শাস্ত্রীয় নিয়ম অনুসারে পরীক্ষা করে পরিবেশন করা হয়।'
                : 'From grand Bengali festivities like Durga Puja and Kali Puja to domestic Satyanarayan rituals, Upanayana, and Vedic wedding Dashakarma lists, each item is vetted for ritual sanctity and authenticity.'}
            </p>

            {/* Credibility Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E8DCC6]">
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#EADBCA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#800000] font-bengali-serif block">৫০+</span>
                <span className="text-xs text-[#6F5B4B] font-medium">{language === 'bn' ? 'বছরের ঐতিহ্য' : 'Years of Trust'}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#EADBCA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#800000] font-bengali-serif block">১০,০০০+</span>
                <span className="text-xs text-[#6F5B4B] font-medium">{language === 'bn' ? 'সন্তুষ্ট ভক্ত' : 'Devoted Families'}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#EADBCA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#800000] font-bengali-serif block">১০০০+</span>
                <span className="text-xs text-[#6F5B4B] font-medium">{language === 'bn' ? 'পূজা সামগ্রী' : 'Sacred Items'}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#EADBCA] text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#800000] font-bengali-serif block">১০০%</span>
                <span className="text-xs text-[#6F5B4B] font-medium">{language === 'bn' ? 'খাঁটি ও প্রামাণিক' : 'Vedic Purity'}</span>
              </div>
            </div>

            {/* Store Location info */}
            <div className="flex items-center gap-2 text-xs text-[#7B6350] pt-1">
              <MapPin className="w-4 h-4 text-[#800000] shrink-0" />
              <span>{language === 'bn' ? 'প্রধান কার্যালয় ও প্রদর্শনশালা: কলেজ স্ট্রিট / কালীঘাট রোড, কলকাতা' : 'Store & Showroom: College Street / Kalighat Road, Kolkata, WB'}</span>
            </div>

          </div>

          {/* Right Side: Premium Puja-Samagri / Temple-Store Photograph */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Ornamental Frame */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#E2D2B5] via-[#D4AF37] to-[#8C6207] shadow-[0_15px_40px_rgba(60,10,10,0.18)]">
              <div className="rounded-2xl overflow-hidden bg-[#240303] aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1000&auto=format&fit=crop"
                  alt="Traditional Bengali Hindu Puja Store with Brassware and Devotional Idols"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Warm Amber Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200202] via-transparent to-black/20 pointer-events-none"></div>

                {/* Overlaid Devotional Seal */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#360505]/95 border border-[#D4AF37]/50 backdrop-blur-md text-[#FFF7E2]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#570F0F] border border-[#D4AF37] flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-bengali-serif text-[#FFEAA7]">
                        {language === 'bn' ? 'মহাকাল দশকর্মা ভান্ডার' : 'MAHAAKAL DASHAKARMA BHANDAR'}
                      </h4>
                      <p className="text-[11px] text-[#E0CEAA]">
                        {language === 'bn' ? '“ঐতিহ্য • বিশ্বাস • ভক্তি”' : '“Tradition • Faith • Devotion”'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
