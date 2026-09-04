import React from 'react';
import { Heart, Eye, ShoppingCart, Star, Zap } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    language,
    addToCart,
    buyNow,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    viewProductDetail
  } = useStore();

  const isFavorite = isInWishlist(product.id);

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative bg-[#FFFDF9] rounded-2xl border border-[#EADBCA] hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(80,20,20,0.06)] hover:shadow-[0_12px_32px_rgba(100,20,20,0.14)] transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F7F2E7] cursor-pointer" onClick={() => viewProductDetail(product)}>
        <img
          src={product.imageUrl}
          alt={product.nameBn}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Subtle Vignette on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Discount Badge */}
        {product.discountPercent && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#8B0000] to-[#5C0000] border border-[#D4AF37]/60 text-[#FFEAA7] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <span>
              {language === 'bn' 
                ? `${product.discountPercent}% ছাড়` 
                : `${product.discountPercent}% OFF`}
            </span>
          </div>
        )}

        {/* In-Stock or Best Seller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-3 right-12 bg-[#D4AF37] text-[#2D0505] text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
            {language === 'bn' ? 'বেস্টসেলার' : 'Best Seller'}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center transition-all duration-200 cursor-pointer ${
            isFavorite ? 'text-[#C70039] bg-[#FFF0F2]' : 'text-gray-600 hover:text-[#C70039] hover:bg-white'
          }`}
          title={isFavorite ? 'পছন্দের তালিকা থেকে সরান' : 'পছন্দের তালিকায় রাখুন'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#C70039]' : ''}`} />
        </button>

        {/* Quick View Floating Action Bar */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <button
            id={`quick-view-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full py-2 px-3 rounded-lg bg-[#300404]/90 hover:bg-[#4E0909] text-[#FFE89E] border border-[#D4AF37]/50 text-xs font-semibold backdrop-blur-sm flex items-center justify-center gap-1.5 shadow-lg transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'এক নজরে দেখুন' : 'Quick View'}</span>
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        
        {/* Category & Star Rating */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-semibold text-[#800000] uppercase tracking-wider line-clamp-1">
            {product.categoryNameBn}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-[#A67C00] font-bold">
            <Star className="w-3 h-3 fill-[#F5B041] text-[#F5B041]" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-[#8C7A6B] font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => viewProductDetail(product)}
          className="text-base font-bold text-[#2A0505] hover:text-[#800000] font-bengali-serif leading-snug line-clamp-2 cursor-pointer transition-colors mb-2"
          title={product.nameBn}
        >
          {language === 'bn' ? product.nameBn : product.nameEn}
        </h3>

        {/* Short Summary */}
        <p className="text-xs text-[#6F5B4D] line-clamp-2 mb-3 leading-relaxed flex-grow">
          {language === 'bn' ? product.shortDescBn : product.shortDescEn}
        </p>

        {/* Pricing Area */}
        <div className="flex items-baseline gap-2 mb-4 pt-1 border-t border-[#EFE5D2]">
          <span className="text-lg sm:text-xl font-extrabold text-[#7D0505] font-bengali-serif">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#998375] line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Action Buttons: Add to Cart + Buy Now */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            id={`add-to-cart-${product.id}`}
            onClick={() => addToCart(product, 1)}
            className="py-2 px-2.5 rounded-xl border border-[#C5A059] bg-[#FFF9ED] hover:bg-[#800000] text-[#800000] hover:text-[#FFEAA7] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'কার্টে যোগ' : 'Add to Cart'}</span>
          </button>

          <button
            id={`buy-now-${product.id}`}
            onClick={() => buyNow(product, 1)}
            className="py-2 px-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#2B0505] text-xs font-black transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-[#2B0505]" />
            <span>{language === 'bn' ? 'এখনই কিনুন' : 'Buy Now'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
