export type Language = 'bn' | 'en';

export interface Category {
  id: string;
  nameBn: string;
  nameEn: string;
  slug: string;
  itemCount: number;
  itemCountBn: string;
  imageUrl: string;
  badgeNumber: number;
  descriptionBn: string;
  descriptionEn: string;
}

export interface Product {
  id: string;
  nameBn: string;
  nameEn: string;
  categoryId: string;
  categoryNameBn: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  festival?: string;
  imageUrl: string;
  additionalImages?: string[];
  shortDescBn: string;
  shortDescEn: string;
  longDescBn: string;
  itemsIncludedBn?: string[];
  guidelinesBn?: string;
  specifications?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  couponCode?: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi' | 'razorpay';
  status: 'confirmed' | 'packaging' | 'shipped' | 'delivered';
  trackingSteps: {
    titleBn: string;
    date: string;
    completed: boolean;
  }[];
}

export interface FestivalItem {
  id: string;
  nameBn: string;
  nameEn: string;
  taglineBn: string;
  monthBn: string;
  imageUrl: string;
  productCount: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  dateBn: string;
  commentBn: string;
  productBn: string;
  avatarUrl?: string;
}
