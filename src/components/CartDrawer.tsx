import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    language
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError(null);
      setCouponInput('');
    }
  };

  let discountAmount = 0;
  if (appliedCoupon?.discountPercent) {
    discountAmount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
  } else if (appliedCoupon?.flatDiscount) {
    discountAmount = appliedCoupon.flatDiscount;
  }

  const freeShippingThreshold = 499;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const deliveryFee = cart.length === 0 ? 0 : (isFreeShipping ? 0 : 49);
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-all duration-300">
      
      {/* Background Click to Dismiss */}
      <div 
        className="fixed inset-0"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#C5A059]">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#4A0A0A] to-[#360505] text-[#FFEAA7] border-b border-[#C5A059] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-lg font-bold font-bengali-serif text-[#FFF]">
              {language === 'bn' ? 'আপনার পূজার কার্ট' : 'Your Shopping Cart'}
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#6B0E0E] text-[#FFE89E] font-bold border border-[#D4AF37]/40">
              {cartCount}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#610E0E] text-[#E0C995] hover:text-white transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-2.5 bg-[#FFF2DB] border-b border-[#E8D4B4] text-xs">
          {isFreeShipping ? (
            <div className="flex items-center gap-1.5 text-[#1E7E34] font-bold">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>অভিনন্দন! আপনি বিনামূল্যে হোম ডেলিভারি পাচ্ছেন!</span>
            </div>
          ) : (
            <div>
              <span className="text-[#685341]">
                আর মাত্র <strong>₹{(freeShippingThreshold - cartSubtotal).toLocaleString('en-IN')}</strong> টাকার সামগ্রী যোগ করলে ফ্রি ডেলিভারি!
              </span>
              <div className="w-full h-1.5 bg-[#E6D4B8] rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="h-full bg-[#800000] rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-[#7B6756]">
              <div className="w-16 h-16 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#A68F7B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-[#3B0707] font-bengali-serif">
                কার্টটি বর্তমানে খালি
              </h3>
              <p className="text-xs text-[#8C7A6B]">
                আপনার পূজার প্রয়োজনীয় সামগ্রী বেছে নিয়ে কার্টে যোগ করুন।
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#520B0B] text-[#FFE89E] text-xs font-bold cursor-pointer"
              >
                পূজা সামগ্রী দেখুন
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div 
                key={item.product.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFF] border border-[#EADBCA] shadow-sm"
              >
                {/* Product Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F7F2E7] shrink-0 border border-[#E8DEC8]">
                  <img 
                    src={item.product.imageUrl} 
                    alt={item.product.nameBn} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info & Subtotal */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-[#3B0707] font-bengali-serif line-clamp-1">
                    {item.product.nameBn}
                  </h4>
                  <div className="text-xs text-[#800000] font-bold font-bengali-serif mt-0.5">
                    ₹{item.product.price.toLocaleString('en-IN')}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#DDCFBA] rounded-lg overflow-hidden bg-[#FBF8F2] text-xs">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-[#EADBCA] text-[#4A382C] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold font-bengali-serif text-xs">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-[#EADBCA] text-[#4A382C] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[11px] text-[#7A6756]">
                      মোট: ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-gray-400 hover:text-[#A80000] transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with Coupon & Checkout Button */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#FFFDF9] border-t border-[#E8DCC6] space-y-4">
            
            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7] text-xs text-[#1B5E20]">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>কুপন কোড: {appliedCoupon.code} প্রযোজ্য হয়েছে!</span>
                  </div>
                  <button 
                    onClick={removeCoupon}
                    className="text-[11px] font-bold text-red-700 underline cursor-pointer"
                  >
                    মুছুন
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="কুপন কোড (যেমন: MAHAAKAL10)"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value);
                        setCouponError(null);
                      }}
                      className="flex-grow px-3 py-1.5 rounded-xl bg-white border border-[#DDCFBA] text-xs uppercase focus:outline-none focus:border-[#800000]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-[#520B0B] hover:bg-[#6D071A] text-[#FFE89E] text-xs font-bold cursor-pointer"
                    >
                      প্রয়োগ
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-[11px] text-red-600">{couponError}</p>
                  )}
                  <p className="text-[10px] text-[#8C7A6B]">
                    টিপস: ১০% ছাড়ের জন্য <strong>MAHAAKAL10</strong> বা ₹৫০ ছাড়ের জন্য <strong>PUJA50</strong> ব্যবহার করুন।
                  </p>
                </form>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#594232] pt-1 border-t border-[#EFE4D2]">
              <div className="flex justify-between">
                <span>সামগ্রীর মূল্য (Subtotal):</span>
                <span className="font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#1B5E20] font-semibold">
                  <span>কুপন ছাড় (Discount):</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ (Shipping):</span>
                <span>{deliveryFee === 0 ? <strong className="text-[#1B5E20]">ফ্রি (Free)</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#800000] pt-2 border-t border-[#EFE4D2] font-bengali-serif">
                <span>সর্বমোট দক্ষিণা (Total):</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="cart-proceed-checkout-btn"
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#240303] text-sm font-black shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>অর্ডার সম্পন্ন করতে এগিয়ে যান (Checkout)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>

    </div>
  );
};
