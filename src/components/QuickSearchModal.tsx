import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Flame } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';

export const QuickSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, viewProductDetail, language } = useStore();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(p => 
      p.nameBn.toLowerCase().includes(q) || 
      p.nameEn.toLowerCase().includes(q) ||
      p.categoryNameBn.toLowerCase().includes(q) ||
      p.shortDescBn.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const quickChips = [
    'পিতলের প্রদীপ',
    'গঙ্গাজল',
    'ধুনুচি',
    'রুদ্রাক্ষ',
    'পূজা কিট',
    'চন্দন বাটি'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/65 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#E8DCC6] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#800000] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'bn' ? 'পূজার সামগ্রী খুঁজুন (যেমন: প্রদীপ, থালি, ধূপ, গঙ্গাজল)...' : 'Search for any puja samagri...'}
            className="w-full text-sm sm:text-base focus:outline-none text-[#3B0707] placeholder-[#A68F7B]"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-black text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-3 bg-[#FBF8F2] border-b border-[#EFE4D2] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#8C7A6B] shrink-0">জনপ্রিয় খোঁজ:</span>
          {quickChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => setQuery(chip)}
              className="px-2.5 py-1 rounded-full bg-white border border-[#DDCFBA] text-[#554033] hover:border-[#800000] hover:text-[#800000] shrink-0 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#8C7A6B]">
              <Flame className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 opacity-50" />
              <p>আপনার প্রয়োজনীয় পূজার সামগ্রীর নাম টাইপ করুন</p>
            </div>
          ) : matches.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8C7A6B]">
              <p>“{query}” দিয়ে কোনো সামগ্রী খুঁজে পাওয়া যায়নি।</p>
            </div>
          ) : (
            <div className="space-y-2">
              {matches.map(p => (
                <div
                  key={p.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    viewProductDetail(p);
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F7EFE3] transition-colors cursor-pointer border border-transparent hover:border-[#E8DEC8]"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.imageUrl}
                      alt={p.nameBn}
                      className="w-12 h-12 rounded-xl object-cover border border-[#E0D2BC]"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#3B0707] font-bengali-serif">
                        {p.nameBn}
                      </h4>
                      <span className="text-[11px] text-[#8C7A6B]">{p.categoryNameBn}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-extrabold text-[#800000] font-bengali-serif">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
