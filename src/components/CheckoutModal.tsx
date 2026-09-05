import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  QrCode, 
  Flame, 
  Lock, 
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    appliedCoupon,
    placeOrder,
    setActiveTrackingOrder,
    setIsTrackOrderOpen,
    language,
    userProfile
  } = useStore();

  const [customerName, setCustomerName] = useState(userProfile.name || 'চৈতালী সেন (Chaitali Sen)');
  const [email, setEmail] = useState(userProfile.email || 'chaitalisen438@gmail.com');
  const [phone, setPhone] = useState(userProfile.phone || '8981701480');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('কলকাতা (Kolkata)');
  const [pincode, setPincode] = useState('700001');
  const [landmark, setLandmark] = useState('');
  const [isGuest, setIsGuest] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'razorpay'>('upi');
  const [upiApp, setUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr'>('phonepe');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  if (!isCheckoutOpen) return null;

  let discountAmount = 0;
  if (appliedCoupon?.discountPercent) {
    discountAmount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
  } else if (appliedCoupon?.flatDiscount) {
    discountAmount = appliedCoupon.flatDiscount;
  }
  const deliveryFee = cartSubtotal >= 499 ? 0 : 49;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !address || !pincode) {
      alert('দয়া করে আপনার নাম, ফোন নম্বর ও সম্পূর্ণ ঠিকানা পূরণ করুন।');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const order = placeOrder({
        customerName,
        email,
        phone,
        address: `${address} (নিকটবর্তী: ${landmark || 'উল্লেখ নেই'})`,
        city,
        pincode,
        paymentMethod
      });

      setIsProcessing(false);
      setConfirmedOrder(order);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#800000', '#FFD700', '#FF6347']
        });
      } catch (err) {
        console.error(err);
      }
    }, 1200);
  };

  const handleClose = () => {
    setConfirmedOrder(null);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#4A0A0A] to-[#2E0505] text-[#FFE89E] border-b border-[#C5A059] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold font-bengali-serif text-[#FFF]">
                {confirmedOrder ? 'অর্ডার সফলভাবে গৃহীত হয়েছে' : 'নিরাপদ চেকআউট ও অর্ডার কনফার্মেশন'}
              </h2>
              <p className="text-[11px] text-[#D8C496]">মহাকাল দশকর্মা ভান্ডার • প্রামাণিক পূজা সামগ্রী</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-[#610E0E] text-[#E0C995] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed Order State */}
        {confirmedOrder ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border-2 border-[#2E7D32] text-[#2E7D32] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] bg-[#420B0B] px-3 py-1 rounded-full uppercase tracking-wider">
                জয় মা ভবতারিণী • জয় মহাকাল
              </span>
              <h3 className="text-2xl font-extrabold text-[#3B0707] font-bengali-serif">
                আপনার পূজা সামগ্রীর অর্ডার সফল হয়েছে!
              </h3>
              <p className="text-sm text-[#665241]">
                অর্ডার আইডি: <strong className="text-[#800000] font-mono text-base">{confirmedOrder.orderId}</strong>
              </p>
              <p className="text-xs text-[#7A6756] max-w-md mx-auto">
                ধন্যবাদ {confirmedOrder.customerName}! আপনার প্রদত্ত ফোন নম্বরে ({confirmedOrder.phone}) এসএমএস ও হোয়াটসঅ্যাপের মাধ্যমে অর্ডারের আপডেট পাঠানো হচ্ছে।
              </p>
            </div>

            {/* Order Brief Box */}
            <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#EADBCA] text-left max-w-lg mx-auto text-xs space-y-2">
              <div className="flex justify-between border-b border-[#EADBCA] pb-2 font-semibold text-[#3B0707]">
                <span>মোট সামগ্রী সংখ্যা:</span>
                <span>{confirmedOrder.items.reduce((s, i) => s + i.quantity, 0)} টি</span>
              </div>
              <div className="flex justify-between border-b border-[#EADBCA] pb-2">
                <span>পেমেন্ট পদ্ধতি:</span>
                <span className="uppercase font-bold text-[#800000]">{confirmedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-b border-[#EADBCA] pb-2">
                <span>ডেলিভারি ঠিকানা:</span>
                <span className="text-right max-w-xs">{confirmedOrder.address}, {confirmedOrder.city} - {confirmedOrder.pincode}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#800000] pt-1">
                <span>পরিশোধযোগ্য মোট দক্ষিণা:</span>
                <span>₹{confirmedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveTrackingOrder(confirmedOrder);
                  setIsCheckoutOpen(false);
                  setIsTrackOrderOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#520B0B] text-[#FFE89E] hover:bg-[#6D071A] text-xs font-bold transition-all shadow cursor-pointer"
              >
                অর্ডার ট্র্যাক করুন (Track Order)
              </button>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-[#C5A059] bg-white text-[#4A382C] hover:bg-[#F5EDE0] text-xs font-bold transition-all cursor-pointer"
              >
                আরও পূজা সামগ্রী কিনুন
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Shipping Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#EFE4D2]">
                  <h3 className="text-sm font-bold text-[#800000] uppercase tracking-wider flex items-center gap-1.5">
                    <Truck className="w-4 h-4" />
                    <span>ডেলিভারি ও প্রেরণের তথ্য (Delivery Address)</span>
                  </h3>
                  <label className="text-[11px] text-[#6E5948] flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isGuest}
                      onChange={(e) => setIsGuest(e.target.checked)}
                      className="accent-[#800000]"
                    />
                    <span>গেস্ট হিসেবে অর্ডার</span>
                  </label>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-[#4A382C] mb-1">
                      আপনার নাম (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: চৈতালী সেন"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#4A382C] mb-1">
                        ইমেইল (Email Address)
                      </label>
                      <input
                        type="email"
                        placeholder="chaitalisen438@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000] font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#4A382C] mb-1">
                        মোবাইল নম্বর (Phone) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="যেমন: 8981701480"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#4A382C] mb-1">
                      পিন কোড (PIN Code) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: 700001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#4A382C] mb-1">
                      সম্পূর্ণ ঠিকানা (বাড়ি/ফ্ল্যাট নম্বর, রাস্তা) *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="যেমন: বাড়ি নং ১২, শ্যামপুকুর স্ট্রিট, শ্যামবাজার"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#4A382C] mb-1">
                        শহর / জেলা (City / District)
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                      >
                        <option>কলকাতা (Kolkata)</option>
                        <option>হাওড়া (Howrah)</option>
                        <option>উত্তর ২৪ পরগনা (North 24 Pgs)</option>
                        <option>দক্ষিণ ২৪ পরগনা (South 24 Pgs)</option>
                        <option>হুগলী (Hooghly)</option>
                        <option>বর্ধমান ও দুর্গাপুর (Burdwan)</option>
                        <option>শিলিগুড়ি (Siliguri)</option>
                        <option>অন্যান্য জেলা (Other District)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-[#4A382C] mb-1">
                        ল্যান্ডমার্ক (ঐচ্ছিক)
                      </label>
                      <input
                        type="text"
                        placeholder="নিকটবর্তী মন্দির / ল্যান্ডমার্ক"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000]"
                      />
                    </div>
                  </div>

                </div>

                {/* Payment Options */}
                <div className="pt-2">
                  <h3 className="text-sm font-bold text-[#800000] uppercase tracking-wider mb-2">
                    পেমেন্ট পদ্ধতি নির্বাচন করুন (Payment Method)
                  </h3>

                  <div className="space-y-2 text-xs">
                    {/* UPI Option */}
                    <div 
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-[#800000] bg-[#FFF8EB] ring-1 ring-[#D4AF37]'
                          : 'border-[#EADBCA] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-[#800000]" />
                          <span className="font-bold text-[#3B0707]">ইউপিআই (UPI - Instant GPay / PhonePe / Paytm)</span>
                        </div>
                        <span className="text-[10px] bg-[#E8F5E9] text-[#1B5E20] px-1.5 py-0.5 rounded font-bold">দ্রুততম</span>
                      </div>

                      {paymentMethod === 'upi' && (
                        <div className="mt-3 pt-2 border-t border-[#E8DEC8] flex items-center justify-around gap-2 text-[11px]">
                          <span className="font-mono bg-white px-2 py-1 rounded border border-[#C5A059]">
                            VPA: mahaakal@icici
                          </span>
                          <span className="text-[#2E7D32] font-semibold flex items-center gap-1">
                            <QrCode className="w-3.5 h-3.5" />
                            <span>QR কোড সক্রিয়</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Razorpay / Cards / Netbanking */}
                    <div 
                      onClick={() => setPaymentMethod('razorpay')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === 'razorpay'
                          ? 'border-[#800000] bg-[#FFF8EB] ring-1 ring-[#D4AF37]'
                          : 'border-[#EADBCA] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-[#800000]" />
                          <span className="font-bold text-[#3B0707]">Razorpay (কার্ড / নেটব্যাঙ্কিং / ওয়ালেট)</span>
                        </div>
                        <Lock className="w-3.5 h-3.5 text-[#A68F7B]" />
                      </div>
                    </div>

                    {/* Cash on Delivery (COD) */}
                    <div 
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-[#800000] bg-[#FFF8EB] ring-1 ring-[#D4AF37]'
                          : 'border-[#EADBCA] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Banknote className="w-4 h-4 text-[#800000]" />
                          <span className="font-bold text-[#3B0707]">ক্যাশ অন ডেলিভারি (Cash on Delivery)</span>
                        </div>
                        <span className="text-[10px] text-[#7A6756]">পণ্য পৌঁছালে দক্ষিণা দিন</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary Review */}
              <div className="md:col-span-5 bg-[#FDF8EE] rounded-2xl p-4 sm:p-5 border border-[#EADBCA] flex flex-col justify-between space-y-4">
                
                <div>
                  <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider mb-3">
                    অর্ডার সারসংক্ষেপ ({cart.reduce((s, i) => s + i.quantity, 0)} সামগ্রী)
                  </h3>

                  {/* Cart preview list */}
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {cart.map(item => (
                      <div key={item.product.id} className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-bold text-[#800000] shrink-0">x{item.quantity}</span>
                          <span className="line-clamp-1 text-[#4A382C]">{item.product.nameBn}</span>
                        </div>
                        <span className="font-bold text-[#3B0707] shrink-0 font-bengali-serif ml-2">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-[#594232] pt-4 mt-3 border-t border-[#E8DEC8]">
                    <div className="flex justify-between">
                      <span>সাবটোটাল:</span>
                      <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#1B5E20] font-semibold">
                        <span>কুপন ছাড় ({appliedCoupon?.code}):</span>
                        <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>ডেলিভারি চার্জ:</span>
                      <span>{deliveryFee === 0 ? <strong className="text-[#1B5E20]">ফ্রি</strong> : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-[#800000] pt-2 border-t border-[#E8DEC8] font-bengali-serif">
                      <span>সর্বমোট দক্ষিণা:</span>
                      <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Seals */}
                <div className="p-3 rounded-xl bg-white border border-[#E8DEC8] text-[11px] text-[#6E5948] space-y-1">
                  <div className="flex items-center gap-1 text-[#2E7D32] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>নিরাপদ ও সিল করা প্যাকেজিং</span>
                  </div>
                  <p>আপনার অর্ডারটি শাস্ত্রীয় নিয়মে শুদ্ধ পরিবেশে প্যাক করা হয়।</p>
                </div>

                {/* Order Submit Button */}
                <button
                  id="checkout-confirm-btn"
                  type="submit"
                  disabled={isProcessing || cart.length === 0}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3CE63] to-[#B38719] hover:from-[#E5C158] hover:to-[#C69927] text-[#240303] text-sm font-black shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>অর্ডার প্রক্রিয়াধীন রয়েছে...</span>
                  ) : (
                    <>
                      <span>অর্ডার নিশ্চিত করুন (Confirm Order)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </div>

            </div>
          </form>
        )}

      </div>
    </div>
  );
};
