import React, { useState, useEffect } from 'react';
import { X, User, Package, Heart, LogIn, Sparkles, CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountModal: React.FC = () => {
  const { 
    isAccountOpen, 
    setIsAccountOpen, 
    orders, 
    setIsTrackOrderOpen, 
    setActiveTrackingOrder,
    setActiveView,
    userProfile,
    updateUserProfile,
    language 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');
  const [phoneNumber, setPhoneNumber] = useState(userProfile.phone);
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  useEffect(() => {
    setName(userProfile.name);
    setEmail(userProfile.email);
    setPhoneNumber(userProfile.phone);
  }, [userProfile]);

  const handleSaveProfile = () => {
    updateUserProfile({
      name,
      email,
      phone: phoneNumber
    });
    setIsAccountOpen(false);
  };

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
              গ্রাহক প্রোফাইল ও অ্যাকাউন্ট (My Account)
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
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'profile' ? 'border-b-2 border-[#800000] text-[#800000] bg-white' : 'hover:bg-gray-100'
            }`}
          >
            প্রোফাইল বিবরণী (Profile)
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'orders' ? 'border-b-2 border-[#800000] text-[#800000] bg-white' : 'hover:bg-gray-100'
            }`}
          >
            পূর্ববর্তী অর্ডারসমূহ ({orders.length})
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
              {/* Profile Card Header */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF9ED] border border-[#EADBCA]">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#680C0C] to-[#3B0707] border-2 border-[#D4AF37] text-[#FFE89E] font-bold flex items-center justify-center text-xl font-bengali-serif shadow-md">
                  {name.charAt(0) || 'চ'}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-[#3B0707]">{name}</h4>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                      যাচাইকৃত
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6E5948] text-[11px] mt-0.5">
                    <Mail className="w-3 h-3 text-[#800000]" />
                    <span className="font-mono text-[#3B0707]">{email}</span>
                  </div>
                  <p className="text-[#8C7A6B] text-[10px] mt-0.5">মহাকাল ভক্ত পরিবার রেজিস্টার্ড সদস্য</p>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#4A382C] mb-1">গ্রাহকের পূর্ণ নাম:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] text-xs focus:outline-none focus:border-[#800000]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#4A382C] mb-1">ইমেইল ঠিকানা (Email Address):</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="chaitalisen438@gmail.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DDCFBA] text-xs focus:outline-none focus:border-[#800000] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#4A382C] mb-1">ফোন নম্বর (Phone Number):</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DDCFBA] text-xs focus:outline-none focus:border-[#800000]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSaveProfile}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#800000] to-[#520B0B] text-[#FFE89E] font-bold text-xs shadow-md hover:from-[#990000] hover:to-[#610E0E] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                  <span>বিবরণী সংরক্ষণ ও আপডেট করুন</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
