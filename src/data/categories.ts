import { Category } from '../types';

import dailyPujaImage from '../assets/images/daily_puja_samagri_1788536895673.jpg';
import incenseImage from '../assets/images/sandalwood_incense_sticks_1788535279267.jpg';
import diyaDhunuchiImage from '../assets/images/bengali_brass_dhunuchi_1788535577409.jpg';
import pujaThaliImage from '../assets/images/royal_brass_puja_thali_1788534930044.jpg';
import flowersGarlandsImage from '../assets/images/puja_flowers_garlands_1788536917172.jpg';
import kumkumSindoorImage from '../assets/images/sindoor_kumkum_combo_1788535709876.jpg';
import gangajalImage from '../assets/images/haridwar_brahmakund_gangajal_1788535091613.jpg';
import pujaUpakaranImage from '../assets/images/puja_upakaran_bengali_1788536945356.jpg';
import dashakarmaImage from '../assets/images/dashakarma_samagri_box_1788536970899.jpg';
import idolsImage from '../assets/images/deity_idols_brass_1788536992498.jpg';
import rudrakshaImage from '../assets/images/nepali_rudraksha_mala_1788536023145.jpg';
import pujaKitsImage from '../assets/images/satyanarayan_puja_kit_1788536241157.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'daily-puja',
    nameBn: 'দৈনন্দিন পূজার সামগ্রী',
    nameEn: 'Daily Puja Samagri',
    slug: 'daily-puja',
    itemCount: 30,
    itemCountBn: '৩০ টি সামগ্রী',
    badgeNumber: 1,
    imageUrl: dailyPujaImage,
    descriptionBn: 'প্রতিদিনের ঠাকুরের সেবায় ব্যবহৃত খাঁটি ও পবিত্র পূজা সামগ্রী',
    descriptionEn: 'Pure and sacred daily essentials for deity worship and prayer rituals'
  },
  {
    id: 'incense',
    nameBn: 'ধূপ ও আগরবাতি',
    nameEn: 'Incense & Agarbatti',
    slug: 'incense',
    itemCount: 45,
    itemCountBn: '৪৫ টি সামগ্রী',
    badgeNumber: 2,
    imageUrl: incenseImage,
    descriptionBn: 'চন্দন, কস্তূরী, গোলাপ ও প্রাকৃতিক সুগন্ধিযুক্ত দেবধূপ',
    descriptionEn: 'Sandalwood, musk, rose and natural aromatic devotional incense'
  },
  {
    id: 'diya-dhunuchi',
    nameBn: 'প্রদীপ ও ধুনুচি',
    nameEn: 'Diya & Dhunuchi',
    slug: 'diya-dhunuchi',
    itemCount: 32,
    itemCountBn: '৩২ টি সামগ্রী',
    badgeNumber: 3,
    imageUrl: diyaDhunuchiImage,
    descriptionBn: 'পিতলের পঞ্চপ্রদীপ, মাটির ও কাঁসার ঐতিহ্যবাহী ধুনুচি',
    descriptionEn: 'Brass panchapradeep, terracotta and bell-metal traditional dhunuchi'
  },
  {
    id: 'puja-thali',
    nameBn: 'পূজার থালি',
    nameEn: 'Puja Thali',
    slug: 'puja-thali',
    itemCount: 25,
    itemCountBn: '২৫ টি সামগ্রী',
    badgeNumber: 4,
    imageUrl: pujaThaliImage,
    descriptionBn: 'খোদাই করা খাঁটি পিতল, কাঁসা ও তামার পূজার থালি সেট',
    descriptionEn: 'Handcrafted pure brass, bronze and copper puja thali sets'
  },
  {
    id: 'flowers-garlands',
    nameBn: 'ফুল ও মালা',
    nameEn: 'Flowers & Garlands',
    slug: 'flowers-garlands',
    itemCount: 28,
    itemCountBn: '২৮ টি সামগ্রী',
    badgeNumber: 5,
    imageUrl: flowersGarlandsImage,
    descriptionBn: 'টাটকা গাঁদা, জবা, পদ্ম ও ঐতিহ্যবাহী দেবমালার সংগ্রহ',
    descriptionEn: 'Fresh marigold, red hibiscus, lotus and sacred flower garlands'
  },
  {
    id: 'kumkum-sindoor',
    nameBn: 'কুমকুম ও সিঁদুর',
    nameEn: 'Kumkum & Sindoor',
    slug: 'kumkum-sindoor',
    itemCount: 20,
    itemCountBn: '২০ টি সামগ্রী',
    badgeNumber: 6,
    imageUrl: kumkumSindoorImage,
    descriptionBn: 'খাঁটি লাল সিঁদুর, রক্তচন্দন, অষ্টগন্ধা ও সুগন্ধি কুমকুম',
    descriptionEn: 'Pure authentic red vermilion, red sandalwood and aromatic kumkum'
  },
  {
    id: 'gangajal',
    nameBn: 'গঙ্গাজল ও পবিত্র জল',
    nameEn: 'Gangajal & Sacred Water',
    slug: 'gangajal',
    itemCount: 18,
    itemCountBn: '১৮ টি সামগ্রী',
    badgeNumber: 7,
    imageUrl: gangajalImage,
    descriptionBn: 'হরিদ্বার ও গঙ্গোত্রীর বিশুদ্ধ সিল করা গঙ্গাজল ও গোলাপ জল',
    descriptionEn: 'Pure sealed Haridwar and Gangotri Gangajal and sacred rose water'
  },
  {
    id: 'puja-upakaran',
    nameBn: 'পুজোর উপকরণ',
    nameEn: 'Puja Utensils & Materials',
    slug: 'puja-upakaran',
    itemCount: 52,
    itemCountBn: '৫২ টি সামগ্রী',
    badgeNumber: 8,
    imageUrl: pujaUpakaranImage,
    descriptionBn: 'তামার কোশাকুশী, শাঁখ, ঘন্টা, কর্পূর, যজ্ঞকাষ্ঠ ও নবগ্রহ সামগ্রী',
    descriptionEn: 'Copper kosha kushi, conch shell, sacred bell, pure camphor and yajna items'
  },
  {
    id: 'dashakarma',
    nameBn: 'দশকর্মা সামগ্রী',
    nameEn: 'Dashakarma Essentials',
    slug: 'dashakarma',
    itemCount: 49,
    itemCountBn: '৪৯ টি সামগ্রী',
    badgeNumber: 9,
    imageUrl: dashakarmaImage,
    descriptionBn: 'উপনয়ন, বিবাহ, শ্রাদ্ধ ও সকল সংস্কারের প্রামাণিক দশকর্মা ফর্দ সামগ্রী',
    descriptionEn: 'Complete authentic ritual materials for sacred Bengali Hindu ceremonies'
  },
  {
    id: 'idols',
    nameBn: 'দেব-দেবীর মূর্তি',
    nameEn: 'Deity Idols & Murti',
    slug: 'idols',
    itemCount: 33,
    itemCountBn: '৩৩ টি সামগ্রী',
    badgeNumber: 10,
    imageUrl: idolsImage,
    descriptionBn: 'পিতল, অষ্টধাতু ও মার্বেলের গণেশ, লক্ষ্মী, শিব, নারায়ণ ও দুর্গা মূর্তি',
    descriptionEn: 'Pure brass, ashtadhatu and marble idols of deities'
  },
  {
    id: 'rudraksha',
    nameBn: 'রুদ্রাক্ষ ও মালা',
    nameEn: 'Rudraksha & Rosaries',
    slug: 'rudraksha',
    itemCount: 22,
    itemCountBn: '২২ টি সামগ্রী',
    badgeNumber: 11,
    imageUrl: rudrakshaImage,
    descriptionBn: 'নেপালি পঞ্চমুখী রুদ্রাক্ষ, তুলসী মালা, স্ফটিক ও চন্দন মালা',
    descriptionEn: 'Authentic Nepali 5-mukhi rudraksha, tulsi, sphatik and sandalwood malas'
  },
  {
    id: 'puja-kits',
    nameBn: 'পূজা কিট',
    nameEn: 'Complete Puja Kits',
    slug: 'puja-kits',
    itemCount: 16,
    itemCountBn: '১৬ টি সামগ্রী',
    badgeNumber: 12,
    imageUrl: pujaKitsImage,
    descriptionBn: 'সত্যনারায়ণ, লক্ষ্মীপূজা, শিবপূজা ও গৃহপ্রবেশের সম্পূর্ণ প্রস্তুত বক্স',
    descriptionEn: 'Ready-to-use comprehensive ritual boxes for home and festival worship'
  }
];
