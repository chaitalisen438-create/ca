import React, { useState } from 'react';
import { X, User, Package, Heart, LogIn, Sparkles, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountModal: React.FC = () => {
  const { 
    isAccountOpen, 
    setIsAccountOpen, 
    orders, 
    setIsTrackOrderOpen, 
    setActiveTrackingOrder,
    setActiveView,
    language 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'login'>('orders');
  const [phoneNumber, setPhoneNumber] = useState('9830123456');
  const [name, setName] = useState('অরিন্দম ব্যানার্জী (Arindam Banerjee)');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#4A0A0A] to-[#2E0505] text-[#FFE89E] border-b border-[#C5A059] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-base sm:text-lg font-bold font-bengali-serif text-[#FFF]">
              গ্রাহক অ্যাকাউন্ট ও আদেশ সূচি (My Account)
            </h2>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#610E0E] text-[#E0C995] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#E8DCC6] bg-[#FBF8F2] text-xs font-bold text-[#6E5948]">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'orders' ? 'border-b-2 border-[#800000] text-[#800000] bg-white' : 'hover:bg-gray-100'
            }`}
          >
            পূর্ববর্তী অর্ডারসমূহ ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'profile' ? 'border-b-2 border-[#800000] text-[#800000] bg-white' : 'hover:bg-gray-100'
            }`}
          >
            প্রোফাইল বিবরণী
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'orders' ? (
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
              {orders.length === 0 ? (
                <div className="text-center py-8 text-xs text-[#8C7A6B]">
                  <Package className="w-10 h-10 mx-auto mb-2 text-[#C5A059] opacity-60" />
                  <p>এখনও পর্যন্ত কোনো অর্ডার নথিভুক্ত হয়নি।</p>
                </div>
              ) : (
                orders.map((ord) => (
                  <div 
                    key={ord.id}
                    className="p-4 rounded-2xl bg-white border border-[#EADBCA] shadow-sm space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between border-b border-[#EFE4D2] pb-2">
                      <span className="font-mono font-bold text-[#800000]">{ord.orderId}</span>
                      <span className="text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full font-bold">
                        {ord.status === 'processing' ? 'প্রক্রিয়াধীন' : 'সম্পন্ন'}
                      </span>
                    </div>

                    <div className="flex justify-between text-[#554032]">
                      <span>অর্ডারের তারিখ: {ord.date}</span>
                      <span className="font-bold text-[#3B0707] font-bengali-serif">
                        ₹{ord.total.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[#8C7A6B]">{ord.items.length} টি সামগ্রী</span>
                      <button
                        onClick={() => {
                          setActiveTrackingOrder(ord);
                          setIsAccountOpen(false);
                          setIsTrackOrderOpen(true);
                        }}
                        className="px-3 py-1 rounded-lg bg-[#520B0B] text-[#FFE89E] font-bold text-[11px] cursor-pointer"
                      >
                        ট্র্যাক করুন
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFF9ED] border border-[#EADBCA]">
                <div className="w-12 h-12 rounded-full bg-[#520B0B] text-[#FFE89E] font-bold flex items-center justify-center text-lg font-bengali-serif">
                  অ
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3B0707]">{name}</h4>
                  <p className="text-[#7A6756]">+91 {phoneNumber}</p>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#4A382C] mb-1">নাম:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#4A382C] mb-1">ফোন নম্বর:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA]"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsAccountOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-[#520B0B] text-[#FFE89E] font-bold cursor-pointer"
                >
                  বিবরণী সংরক্ষণ করুন
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
