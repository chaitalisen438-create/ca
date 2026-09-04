import React, { useState } from 'react';
import { X, Star, ShoppingCart, Zap, Heart, Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    language, 
    addToCart, 
    buyNow, 
    toggleWishlist, 
    isInWishlist, 
    viewProductDetail 
  } = useStore();

  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isFavorite = isInWishlist(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 text-[#3B0707] hover:bg-[#800000] hover:text-[#FFEAA7] flex items-center justify-center transition-colors shadow"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          
          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto bg-[#F6F0E4]">
            <img
              src={quickViewProduct.imageUrl}
              alt={quickViewProduct.nameBn}
              className="w-full h-full object-cover"
            />
            {quickViewProduct.discountPercent && (
              <div className="absolute top-3 left-3 bg-[#800000] text-[#FFE89E] border border-[#D4AF37] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow">
                {quickViewProduct.discountPercent}% ছাড়
              </div>
            )}
          </div>

          {/* Info & CTA */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#800000] uppercase tracking-wider">
                {quickViewProduct.categoryNameBn}
              </span>

              <h3 className="text-xl font-bold text-[#3B0707] font-bengali-serif leading-snug mt-1 mb-2">
                {language === 'bn' ? quickViewProduct.nameBn : quickViewProduct.nameEn}
              </h3>

              <div className="flex items-center gap-1 text-xs text-[#A67C00] font-bold mb-3">
                <Star className="w-3.5 h-3.5 fill-[#F5B041] text-[#F5B041]" />
                <span>{quickViewProduct.rating.toFixed(1)}</span>
                <span className="text-[#8C7A6B]">({quickViewProduct.reviewCount} রিভিউ)</span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-extrabold text-[#800000] font-bengali-serif">
                  ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-xs text-[#998375] line-through">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#634F40] leading-relaxed line-clamp-3">
                {language === 'bn' ? quickViewProduct.shortDescBn : quickViewProduct.shortDescEn}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#EFE4D2]">
              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#4A382C]">পরিমাণ:</span>
                <div className="flex items-center border border-[#C5A059] rounded-lg bg-white overflow-hidden text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-1 hover:bg-gray-100"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-1 hover:bg-gray-100"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="py-2 px-3 rounded-xl border border-[#C5A059] bg-[#FFF9ED] hover:bg-[#800000] text-[#800000] hover:text-[#FFEAA7] text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>কার্টে যোগ</span>
                </button>

                <button
                  onClick={() => {
                    buyNow(quickViewProduct, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#2B0505] text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 fill-[#2B0505]" />
                  <span>এখনই কিনুন</span>
                </button>
              </div>

              <button
                onClick={() => {
                  const p = quickViewProduct;
                  setQuickViewProduct(null);
                  viewProductDetail(p);
                }}
                className="w-full text-center text-xs text-[#800000] hover:underline font-semibold flex items-center justify-center gap-1 pt-1 cursor-pointer"
              >
                <span>সম্পূর্ণ বিবরণ ও শাস্ত্রীয় বিধি দেখুন</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
