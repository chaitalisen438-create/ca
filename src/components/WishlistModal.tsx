import React from 'react';
import { X, Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export const WishlistModal: React.FC = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    viewProductDetail,
    language 
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#4A0A0A] to-[#2E0505] text-[#FFE89E] border-b border-[#C5A059] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#FF6B6B] fill-[#FF6B6B]" />
            <h2 className="text-base sm:text-lg font-bold font-bengali-serif text-[#FFF]">
              পছন্দের পূজা সামগ্রী তালিকা (Wishlist)
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#6B0E0E] text-[#FFE89E] font-bold border border-[#D4AF37]/40">
              {wishlistProducts.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#610E0E] text-[#E0C995] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-grow space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12 text-[#8C7A6B] space-y-3">
              <Heart className="w-12 h-12 text-[#C5A059] mx-auto opacity-50" />
              <h3 className="text-base font-bold text-[#3B0707] font-bengali-serif">
                উইশলিস্টে কোনো সামগ্রী সংরক্ষিত নেই
              </h3>
              <p className="text-xs max-w-xs mx-auto">
                পছন্দের প্রদীপ, থালি, ধূপ বা পূর্ণ কিট পরে কেনার জন্য উইশলিস্টে যোগ করুন।
              </p>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div 
                key={product.id}
                className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-[#EADBCA] shadow-sm hover:border-[#D4AF37] transition-all"
              >
                <div 
                  className="flex items-center gap-3 cursor-pointer min-w-0"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    viewProductDetail(product);
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.nameBn}
                    className="w-16 h-16 rounded-xl object-cover border border-[#E8DEC8] shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#3B0707] font-bengali-serif line-clamp-1">
                      {product.nameBn}
                    </h4>
                    <span className="text-[11px] text-[#8C7A6B] block">{product.categoryNameBn}</span>
                    <span className="text-xs font-bold text-[#800000] font-bengali-serif mt-0.5 inline-block">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="p-2 rounded-xl bg-[#520B0B] hover:bg-[#6E0E0E] text-[#FFE89E] transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                    title="কার্টে যোগ করুন"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">কার্টে যোগ</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="উইশলিস্ট থেকে মুছুন"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-4 bg-[#FBF8F2] border-t border-[#E8DCC6] flex items-center justify-between text-xs shrink-0">
            <span className="text-[#6E5948]">মোট {wishlistProducts.length} টি সামগ্রী পছন্দের তালিকায় রয়েছে</span>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="px-4 py-2 rounded-xl bg-[#520B0B] text-[#FFE89E] font-bold cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
