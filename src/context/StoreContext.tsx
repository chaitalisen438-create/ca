import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, Language } from '../types';
import { PRODUCTS } from '../data/products';

interface StoreContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  wishlist: string[];
  wishlistCount: number;
  activeView: 'home' | 'shop' | 'about' | 'contact' | 'product-detail';
  setActiveView: (view: 'home' | 'shop' | 'about' | 'contact' | 'product-detail') => void;
  selectedCategory: string | null;
  setSelectedCategory: (catId: string | null) => void;
  selectedFestival: string | null;
  setSelectedFestival: (festId: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isTrackOrderOpen: boolean;
  setIsTrackOrderOpen: (open: boolean) => void;
  activeTrackingOrder: Order | null;
  setActiveTrackingOrder: (order: Order | null) => void;
  appliedCoupon: { code: string; discountPercent?: number; flatDiscount?: number } | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  orders: Order[];
  addToCart: (product: Product, quantity?: number) => void;
  buyNow: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  placeOrder: (orderInfo: {
    customerName: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
    paymentMethod: 'cod' | 'upi' | 'razorpay';
  }) => Order;
  viewProductDetail: (product: Product) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bn');
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'about' | 'contact' | 'product-detail'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState<boolean>(false);
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<Order | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent?: number; flatDiscount?: number } | null>(null);

  // Persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mdb_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 },
        { product: PRODUCTS[1], quantity: 2 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mdb_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[0].id, PRODUCTS[3].id];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('mdb_orders');
      if (saved) return JSON.parse(saved);
      // Sample historical order
      return [{
        orderId: 'MDB-98412',
        date: '২৮ আগস্ট ২০২৬',
        items: [{ product: PRODUCTS[0], quantity: 1 }, { product: PRODUCTS[4], quantity: 1 }],
        subtotal: 2279,
        discount: 228,
        deliveryFee: 0,
        total: 2051,
        couponCode: 'MAHAAKAL10',
        customerName: 'অরিন্দম সেন',
        phone: '9830123456',
        address: '১২/বি কালীঘাট রোড, কলকাতা',
        city: 'কলকাতা',
        pincode: '700026',
        paymentMethod: 'upi',
        status: 'shipped',
        trackingSteps: [
          { titleBn: 'অর্ডার গৃহীত হয়েছে', date: '২৮ আগস্ট, সকাল ১০:১৫', completed: true },
          { titleBn: 'প্যাকেজিং ও শুদ্ধিকরণ সম্পন্ন', date: '২৮ আগস্ট, দুপুর ২:৩০', completed: true },
          { titleBn: 'কুরিয়ারে প্রেরিত (DTDC Express)', date: '২৯ আগস্ট, সকাল ৯:০০', completed: true },
          { titleBn: 'ডেলিভারির পথে', date: 'আনুমানিক ৩০ আগস্ট', completed: false }
        ]
      }];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mdb_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('mdb_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('mdb_orders', JSON.stringify(orders));
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const wishlistCount = wishlist.length;

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.nameBn}" কার্টে যোগ করা হয়েছে!`);
  };

  const buyNow = (product: Product, quantity = 1) => {
    addToCart(product, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('পণ্যটি কার্ট থেকে সরানো হয়েছে');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('পছন্দের তালিকা থেকে সরানো হলো');
        return prev.filter(id => id !== productId);
      } else {
        showToast('পছন্দের তালিকায় যোগ করা হলো');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'MAHAAKAL10') {
      setAppliedCoupon({ code: clean, discountPercent: 10 });
      return { success: true, message: '১০% বিশেষ ভক্তিমূলক ছাড় যুক্ত হয়েছে!' };
    }
    if (clean === 'PUJA50') {
      setAppliedCoupon({ code: clean, flatDiscount: 50 });
      return { success: true, message: '₹৫০ ফ্ল্যাট পূজা ছাড় প্রয়োগ করা হয়েছে!' };
    }
    if (clean === 'FESTIVE15') {
      setAppliedCoupon({ code: clean, discountPercent: 15 });
      return { success: true, message: '১৫% উৎসবের ছাড় যুক্ত হয়েছে!' };
    }
    return { success: false, message: 'অকার্যকর কুপন কোড! দয়া করে MAHAAKAL10 ব্যবহার করুন।' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('কুপন সরানো হয়েছে');
  };

  const placeOrder = (orderInfo: {
    customerName: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
    paymentMethod: 'cod' | 'upi' | 'razorpay';
  }): Order => {
    let discount = 0;
    if (appliedCoupon?.discountPercent) {
      discount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon?.flatDiscount) {
      discount = appliedCoupon.flatDiscount;
    }
    const deliveryFee = cartSubtotal >= 499 ? 0 : 49;
    const total = Math.max(0, cartSubtotal - discount + deliveryFee);

    const randomId = 'MDB-' + Math.floor(10000 + Math.random() * 90000);
    const dateStr = new Date().toLocaleDateString('bn-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const newOrder: Order = {
      orderId: randomId,
      date: dateStr,
      items: [...cart],
      subtotal: cartSubtotal,
      discount,
      deliveryFee,
      total,
      couponCode: appliedCoupon?.code,
      customerName: orderInfo.customerName,
      phone: orderInfo.phone,
      address: orderInfo.address,
      city: orderInfo.city,
      pincode: orderInfo.pincode,
      paymentMethod: orderInfo.paymentMethod,
      status: 'confirmed',
      trackingSteps: [
        { titleBn: 'অর্ডার গৃহীত হয়েছে ও দক্ষিণা যাচাইকৃত', date: 'আজ, এইমাত্র', completed: true },
        { titleBn: 'প্যাকেজিং ও শুদ্ধিকরণ চলছে', date: 'প্রক্রিয়াধীন', completed: false },
        { titleBn: 'কুরিয়ারে প্রেরণের অপেক্ষা', date: 'আগামীকাল', completed: false },
        { titleBn: 'নিরাপদ ডেলিভারি সম্পন্ন', date: '৩-৪ দিনের মধ্যে', completed: false }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    setActiveTrackingOrder(newOrder);
    return newOrder;
  };

  const viewProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StoreContext.Provider
      value={{
        language,
        setLanguage,
        cart,
        cartCount,
        cartSubtotal,
        wishlist,
        wishlistCount,
        activeView,
        setActiveView,
        selectedCategory,
        setSelectedCategory,
        selectedFestival,
        setSelectedFestival,
        searchQuery,
        setSearchQuery,
        selectedProduct,
        setSelectedProduct,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        setIsAccountOpen,
        isTrackOrderOpen,
        setIsTrackOrderOpen,
        activeTrackingOrder,
        setActiveTrackingOrder,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        toastMessage,
        showToast,
        orders,
        addToCart,
        buyNow,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        placeOrder,
        viewProductDetail
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
