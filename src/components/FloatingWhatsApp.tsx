import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useStore();
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  
  const whatsappNumber = '919830000000'; // Traditional Kolkata store contact
  const message = encodeURIComponent(
    'নমস্কার! মহাকাল দশকর্মা ভান্ডার থেকে পূজার ফর্দ ও সামগ্রী সম্পর্কে জানতে চাই।'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <aside 
      aria-label="WhatsApp Support"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 group"
    >
      {/* Floating Prompt Bubble from User Reference */}
      {isTooltipOpen && (
        <div className="relative bg-[#FFFDF9] border-2 border-[#D4AF37] p-2.5 sm:p-3 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] max-w-[210px] text-right animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setIsTooltipOpen(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#590B0B] text-[#FFE89E] flex items-center justify-center text-[10px] font-bold shadow hover:bg-[#800000] cursor-pointer"
            aria-label="Close tooltip"
          >
            ✕
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-left"
          >
            <p className="text-xs font-bold text-[#3B0707] font-bengali-serif leading-tight">
              পূজার সামগ্রী বা নির্দেশনার জন্য
            </p>
            <p className="text-[11px] text-[#25D366] font-semibold mt-0.5">
              WhatsApp-এ সরাসরি কথা বলুন
            </p>
          </a>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-bengali-serif pr-1">
          {language === 'bn' ? 'হোয়াটসঅ্যাপে অর্ডার করুন' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
