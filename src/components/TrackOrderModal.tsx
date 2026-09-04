import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, Package, Flame, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Order } from '../types';

export const TrackOrderModal: React.FC = () => {
  const { isTrackOrderOpen, setIsTrackOrderOpen, orders, activeTrackingOrder, setActiveTrackingOrder } = useStore();
  const [searchId, setSearchId] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isTrackOrderOpen) return null;

  const currentOrder: Order | undefined = activeTrackingOrder || orders.find(
    o => o.orderId.toLowerCase() === searchId.trim().toLowerCase()
  ) || orders[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = orders.find(o => o.orderId.toLowerCase() === searchId.trim().toLowerCase());
    if (found) {
      setActiveTrackingOrder(found);
      setError(null);
    } else {
      setError('এই নম্বরে কোনো অর্ডার খুঁজে পাওয়া যায়নি। দয়া করে সঠিক অর্ডার আইডি দিন (যেমন: MDB-98412)।');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#4A0A0A] to-[#2E0505] text-[#FFE89E] border-b border-[#C5A059] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-base sm:text-lg font-bold font-bengali-serif text-[#FFF]">
              অর্ডার ট্র্যাকিং (Track Your Puja Order)
            </h2>
          </div>
          <button
            onClick={() => {
              setIsTrackOrderOpen(false);
              setError(null);
            }}
            className="p-1.5 rounded-full hover:bg-[#610E0E] text-[#E0C995] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search by Order ID */}
          <form onSubmit={handleSearch} className="space-y-1">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="অর্ডার আইডি লিখুন (যেমন: MDB-98412)"
                className="flex-grow px-3.5 py-2 rounded-xl bg-white border border-[#DDCFBA] text-xs uppercase focus:outline-none focus:border-[#800000]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#520B0B] hover:bg-[#6E0E0E] text-[#FFE89E] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span>ট্র্যাক করুন</span>
              </button>
            </div>
            {error && <p className="text-xs text-red-600 pt-1">{error}</p>}
          </form>

          {/* Current Order Tracking Display */}
          {currentOrder && (
            <div className="space-y-5">
              {/* Overview Box */}
              <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#EADBCA] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[#8C7A6B] block">অর্ডার নম্বর:</span>
                  <strong className="text-sm font-mono text-[#800000]">{currentOrder.orderId}</strong>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">অর্ডার তারিখ:</span>
                  <strong className="text-[#3B0707]">{currentOrder.date}</strong>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">মোট দক্ষিণা:</span>
                  <strong className="text-[#800000] font-bengali-serif">₹{currentOrder.total.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* Step Timeline */}
              <div className="space-y-4 pl-2">
                {currentOrder.trackingSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 relative">
                    {/* Connecting line */}
                    {idx < currentOrder.trackingSteps.length - 1 && (
                      <div 
                        className={`absolute left-3.5 top-7 bottom-0 w-0.5 -ml-[1px] ${
                          step.completed ? 'bg-[#2E7D32]' : 'bg-[#E0D2BC]'
                        }`}
                      ></div>
                    )}

                    {/* Step Icon */}
                    <div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        step.completed 
                          ? 'bg-[#2E7D32] text-white' 
                          : 'bg-[#F0E4D2] text-[#8C7A6B] border border-[#DDCFBA]'
                      }`}
                    >
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
                    </div>

                    {/* Step Text */}
                    <div className="flex-grow pt-0.5">
                      <h4 className={`text-xs font-bold ${step.completed ? 'text-[#3B0707]' : 'text-[#8C7A6B]'}`}>
                        {step.titleBn}
                      </h4>
                      <p className="text-[11px] text-[#7A6756]">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Address */}
              <div className="pt-3 border-t border-[#EFE4D2] flex items-start gap-2 text-xs text-[#634F40]">
                <MapPin className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                <span>
                  প্রাপক: <strong>{currentOrder.customerName}</strong> ({currentOrder.phone}), {currentOrder.address}, {currentOrder.city} - {currentOrder.pincode}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
