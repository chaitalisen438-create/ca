import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Share2, 
  ChevronRight, 
  Check, 
  Flame, 
  Plus, 
  Minus 
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';

interface SingleProductViewProps {
  product: Product;
}

export const SingleProductView: React.FC<SingleProductViewProps> = ({ product }) => {
  const {
    language,
    addToCart,
    buyNow,
    toggleWishlist,
    isInWishlist,
    setActiveView,
    showToast
  } = useStore();

  const isFavorite = isInWishlist(product.id);
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'items' | 'rules' | 'reviews'>('desc');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const allImages = [product.imageUrl, ...(product.additionalImages || [])];

  // Related products from same category or featured
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.categoryId === product.categoryId || p.isFeatured)
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('লিঙ্ক কপি করা হয়েছে!');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF8F2] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#7D6855] mb-6 flex-wrap">
          <button 
            onClick={() => setActiveView('home')} 
            className="hover:text-[#800000] cursor-pointer"
          >
            হোম
          </button>
          <ChevronRight className="w-3 h-3 text-[#B09D8B]" />
          <button 
            onClick={() => setActiveView('shop')} 
            className="hover:text-[#800000] cursor-pointer"
          >
            দোকান
          </button>
          <ChevronRight className="w-3 h-3 text-[#B09D8B]" />
          <span className="text-[#800000] font-medium">{product.categoryNameBn}</span>
          <ChevronRight className="w-3 h-3 text-[#B09D8B]" />
          <span className="text-[#2C1810] font-bold line-clamp-1">{product.nameBn}</span>
        </div>

        {/* Product Showcase: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DCC6] shadow-sm mb-12">
          
          {/* Left: Image Gallery with Zoom & Thumbnails */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Main Interactive Zoomable Image */}
            <div 
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F7F2E7] border border-[#EADBCA] cursor-crosshair group shadow-inner"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={selectedImage}
                alt={product.nameBn}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
              />

              {/* Discount Ribbon */}
              {product.discountPercent && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8B0000] to-[#5C0000] text-[#FFEAA7] border border-[#D4AF37]/60 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {language === 'bn' ? `${product.discountPercent}% বিশেষ ছাড়` : `${product.discountPercent}% OFF`}
                </div>
              )}

              {/* Wishlist Heart */}
              <button
                id="product-detail-wishlist-btn"
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-all cursor-pointer ${
                  isFavorite ? 'text-[#C70039]' : 'text-gray-600 hover:text-[#C70039]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#C70039]' : ''}`} />
              </button>

              <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                জুম করতে মাউস রাখুন
              </div>
            </div>

            {/* Thumbnail Row */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {allImages.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-18 h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      selectedImage === imgUrl 
                        ? 'border-[#800000] ring-2 ring-[#C5A059]' 
                        : 'border-[#EADBCA] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Sacred Guarantee Badge */}
            <div className="p-4 rounded-xl bg-[#FFF9ED] border border-[#EADBCA] flex items-center justify-around text-xs text-[#594232]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#800000]" />
                <span className="font-semibold">১০০% শুদ্ধ শাস্ত্রীয় মান</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#800000]" />
                <span className="font-semibold">সুরক্ষিত খাঁটি প্যাকিং</span>
              </div>
            </div>

          </div>

          {/* Right: Product Details & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#800000] uppercase tracking-wider bg-[#FFF2DA] px-2.5 py-1 rounded-full border border-[#E2C798]">
                  {product.categoryNameBn}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#A67C00] font-bold">
                  <Star className="w-4 h-4 fill-[#F5B041] text-[#F5B041]" />
                  <span className="text-sm">{product.rating.toFixed(1)}</span>
                  <span className="text-[#8C7A6B] font-normal">({product.reviewCount} টি ভক্ত রিভিউ)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#380505] font-bengali-serif leading-snug">
                {language === 'bn' ? product.nameBn : product.nameEn}
              </h1>

              {/* English secondary title */}
              <p className="text-xs text-[#8C7563] font-cinzel tracking-wider">
                {product.nameEn}
              </p>

              {/* Price Area */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#800000] font-bengali-serif">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#998375] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-[#1E7E34] font-bold bg-[#E8F5E9] px-2 py-0.5 rounded">
                  {language === 'bn' 
                    ? `সঞ্চয়: ₹${(product.originalPrice ? product.originalPrice - product.price : 0).toLocaleString('en-IN')}` 
                    : `Save ₹${product.originalPrice ? product.originalPrice - product.price : 0}`}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 text-xs font-medium pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#28A745]"></span>
                <span className="text-[#28A745] font-bold">
                  {language === 'bn' ? 'মজুত আছে (In Stock)' : 'In Stock'}
                </span>
                <span className="text-[#8C7A6B]">
                  ({product.stockCount} টি সামগ্রী প্রস্তুত রয়েছে)
                </span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#554032] leading-relaxed pt-2">
                {language === 'bn' ? product.longDescBn : product.shortDescEn}
              </p>
            </div>

            {/* Quantity Selector + Action Buttons */}
            <div className="space-y-4 pt-4 border-t border-[#EFE4D2]">
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-[#4A382C]">
                  {language === 'bn' ? 'পরিমাণ (Quantity):' : 'Quantity:'}
                </span>
                <div className="flex items-center border border-[#C5A059] rounded-xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#800000] hover:bg-[#F7EFE4] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-[#3B0707] font-bengali-serif">
                    {language === 'bn' ? quantity.toLocaleString('bn-BD') : quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#800000] hover:bg-[#F7EFE4] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="detail-add-to-cart-btn"
                  onClick={() => addToCart(product, quantity)}
                  className="py-3 px-6 rounded-xl border-2 border-[#800000] bg-[#FFF9ED] hover:bg-[#800000] text-[#800000] hover:text-[#FFEAA7] text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{language === 'bn' ? 'কার্টে যোগ করুন' : 'Add to Cart'}</span>
                </button>

                <button
                  id="detail-buy-now-btn"
                  onClick={() => buyNow(product, quantity)}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#2B0505] text-sm font-black transition-all flex items-center justify-center gap-2 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-[#2B0505]" />
                  <span>{language === 'bn' ? 'সরাসরি কিনুন (Buy Now)' : 'Buy Now'}</span>
                </button>
              </div>

              {/* Share & Assistance */}
              <div className="flex items-center justify-between text-xs text-[#7B6350] pt-2">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-1 hover:text-[#800000] cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'শেয়ার করুন' : 'Share Item'}</span>
                </button>

                <span>কুপন কোড: <strong className="text-[#800000]">MAHAAKAL10</strong></span>
              </div>

            </div>

          </div>

        </div>

        {/* Product Details Tabs */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#E8DCC6] p-6 sm:p-8 shadow-sm mb-16">
          {/* Tab Headers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-[#EFE4D2] pb-4 mb-6">
            {[
              { id: 'desc', labelBn: 'বিস্তারিত বর্ণনা', labelEn: 'Description' },
              { id: 'items', labelBn: 'সামগ্রীর তালিকা', labelEn: 'Items Included' },
              { id: 'rules', labelBn: 'ব্যবহারের নিয়ম ও শাস্ত্র', labelEn: 'Puja Guidelines' },
              { id: 'reviews', labelBn: `ভক্ত রিভিউ (${product.reviewCount})`, labelEn: 'Reviews' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5A0A0A] text-[#FFE89E] shadow-sm'
                    : 'text-[#665241] hover:bg-[#F5ECE0]'
                }`}
              >
                {language === 'bn' ? tab.labelBn : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Tab 1: Description */}
          {activeTab === 'desc' && (
            <div className="space-y-4 text-sm text-[#4E392B] leading-relaxed">
              <p className="text-base font-semibold text-[#380505] font-bengali-serif">
                {product.nameBn} - মহাকাল দশকর্মা ভান্ডারের বিশেষ সংকলন
              </p>
              <p>{product.longDescBn}</p>
              <p>
                আমাদের সকল পিতল, কাঁসা, তামা ও মাটির পূজা সামগ্রী অভিজ্ঞ কারিগরদের দ্বারা নির্মিত। কোনো ক্ষতিকারক রাসায়নিক সংমিশ্রণ ছাড়াই প্রথাগত বৈদিক পদ্ধতি মেনে প্রতিটি সামগ্রী প্রস্তুত এবং প্যাকেজিং করা হয়।
              </p>
            </div>
          )}

          {/* Tab 2: Items Included */}
          {activeTab === 'items' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#800000] font-bengali-serif mb-2">
                প্যাকেজে যা যা সামগ্রী অন্তর্ভুক্ত রয়েছে:
              </h4>
              {product.itemsIncludedBn && product.itemsIncludedBn.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4E392B]">
                  {product.itemsIncludedBn.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#FBF8F2] border border-[#EADBCA]">
                      <Check className="w-4 h-4 text-[#800000] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-[#7A6451]">১টি মূল সিল করা প্রামাণিক পূজা সামগ্রী ও নিরাপত্তা মোড়ক।</p>
              )}
            </div>
          )}

          {/* Tab 3: Guidelines */}
          {activeTab === 'rules' && (
            <div className="space-y-3 text-sm text-[#4E392B] leading-relaxed">
              <h4 className="text-sm font-bold text-[#800000] font-bengali-serif">
                পূজায় ব্যবহারের বিধি ও যত্ন:
              </h4>
              <p>{product.guidelinesBn || 'পবিত্র স্থানে শুদ্ধ কাপড়ে স্থাপন করুন। ব্যবহারের পূর্বে গঙ্গাজল ছিটিয়ে শুদ্ধীকরণ করে নেওয়া শাস্ত্রসম্মত।'}</p>
              <div className="p-4 rounded-xl bg-[#FFF9ED] border border-[#E8D9C0] text-xs space-y-1 text-[#665141]">
                <p><strong>যত্ন নির্দেশিকা:</strong> পিতল ও তামার পাত্রের চকচকে ভাব বজায় রাখতে লেবু অথবা তেঁতুল এবং পিতাম্বরি ব্যবহার করুন।</p>
                <p><strong>পবিত্রতা:</strong> কোনো ধরনের অপবিত্র বা ধূলাবালিযুক্ত স্থানে রাখবেন না।</p>
              </div>
            </div>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#3B0707]">গ্রাহকদের পর্যালোচনা ({product.reviewCount})</h4>
                <div className="flex items-center gap-1 text-sm font-bold text-[#A67C00]">
                  <Star className="w-4 h-4 fill-[#F5B041] text-[#F5B041]" />
                  <span>{product.rating} / ৫.০</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#FBF8F2] border border-[#EADBCA]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#3B0707]">সৌগত ব্যানার্জী</span>
                    <span className="text-[11px] text-[#8C7A6B]">৩ দিন আগে</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#F5B041] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F5B041]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#523E30]">
                    অসাধারণ কোয়ালিটি! পিতলের ফিনিশিং এবং ওজন সত্যি প্রশংসনীয়। প্যাকেজিং খুব যত্নসহকারে করা হয়েছিল।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF8F2] border border-[#EADBCA]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#3B0707]">রুমকি ভট্টাচার্য</span>
                    <span className="text-[11px] text-[#8C7A6B]">১ সপ্তাহ আগে</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#F5B041] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F5B041]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#523E30]">
                    প্রতি বছর পূজার কেনাকাটা এখান থেকেই করি। কোনো অভিযোগ নেই। জয় মহাকাল!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#380505] font-bengali-serif mb-6">
              {language === 'bn' ? 'সম্পর্কিত অন্যান্য পূজা সামগ্রী' : 'Related Puja Essentials'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
