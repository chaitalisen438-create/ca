import { FestivalItem } from '../types';

import durgaPujaImage from '../assets/images/fest_durga_puja_1788538801468.jpg';
import kaliPujaImage from '../assets/images/fest_kali_puja_diwali_1788538818404.jpg';
import lakshmiPujaImage from '../assets/images/fest_kojagari_lakshmi_1788538835150.jpg';
import saraswatiPujaImage from '../assets/images/fest_saraswati_puja_1788538851853.jpg';
import shivratriImage from '../assets/images/fest_maha_shivratri_1788538866406.jpg';
import janmashtamiImage from '../assets/images/fest_krishna_janmashtami_1788538880389.jpg';
import vishwakarmaPujaImage from '../assets/images/fest_vishwakarma_puja_1788538908390.jpg';
import ganeshPujaImage from '../assets/images/fest_ganesh_chaturthi_1788539357978.jpg';
import satyanarayanPujaImage from '../assets/images/fest_satyanarayan_puja_1788539382875.jpg';

export const FESTIVALS: FestivalItem[] = [
  {
    id: 'durga-puja',
    nameBn: 'দুর্গা পূজা',
    nameEn: 'Durga Puja',
    taglineBn: 'শারদোৎসবের মহাপূজার সম্পূর্ণ আয়োজন ও ধুনুচি আরতি সামগ্রী',
    monthBn: 'আশ্বিন মাস • শারদীয়া',
    imageUrl: durgaPujaImage,
    productCount: 48
  },
  {
    id: 'kali-puja',
    nameBn: 'কালী পূজা ও দীপাবলি',
    nameEn: 'Kali Puja & Diwali',
    taglineBn: 'শ্যামাপূজার ১০৮ জবা মালা, পঞ্চপ্রদীপ ও আলোর সমাহার',
    monthBn: 'কার্তিক মাস • অমাবস্যা',
    imageUrl: kaliPujaImage,
    productCount: 36
  },
  {
    id: 'lakshmi-puja',
    nameBn: 'কোজাগরী লক্ষ্মী পূজা',
    nameEn: 'Kojagari Lakshmi Puja',
    taglineBn: 'ধনসম্পদ ও সৌভাগ্যের শ্রী শ্রী লক্ষ্মীপূজা কিট ও সিন্নি সামগ্রী',
    monthBn: 'আশ্বিন পূর্ণিমা',
    imageUrl: lakshmiPujaImage,
    productCount: 28
  },
  {
    id: 'saraswati-puja',
    nameBn: 'সরস্বতী পূজা',
    nameEn: 'Saraswati Puja',
    taglineBn: 'বাগদেবীর চরণে পলাশ ফুল, দোয়াত-কলম ও বিদ্যার সামগ্রী',
    monthBn: 'মাঘ মাস • বসন্ত পঞ্চমী',
    imageUrl: saraswatiPujaImage,
    productCount: 22
  },
  {
    id: 'shivratri',
    nameBn: 'মহা শিবরাত্রি',
    nameEn: 'Maha Shivratri',
    taglineBn: 'মহাদেবের জলাভিষেক, বেলপাতা, আকন্দ মালা ও পঞ্চমুখী রুদ্রাক্ষ',
    monthBn: 'ফাল্গুন মাস • চতুর্দশী',
    imageUrl: shivratriImage,
    productCount: 30
  },
  {
    id: 'janmashtami',
    nameBn: 'শ্রীকৃষ্ণ জন্মাষ্টমী',
    nameEn: 'Sri Krishna Janmashtami',
    taglineBn: 'লাড্ডু গোপালের পঞ্চামৃত সেবা, তুলসী মালা ও ময়ূরপঙ্খী সাজ',
    monthBn: 'ভাদ্র মাস • রোহিণী নক্ষত্র',
    imageUrl: janmashtamiImage,
    productCount: 25
  },
  {
    id: 'vishwakarma-puja',
    nameBn: 'বিশ্বকর্মা পূজা',
    nameEn: 'Vishwakarma Puja',
    taglineBn: 'কর্মস্থলের মঙ্গল ও যন্ত্র পূজার সামগ্রী ও লাল শালু',
    monthBn: 'ভাদ্র সংক্রান্তি',
    imageUrl: vishwakarmaPujaImage,
    productCount: 19
  },
  {
    id: 'ganesh-puja',
    nameBn: 'গণেশ চতুর্থী',
    nameEn: 'Ganesh Chaturthi',
    taglineBn: 'সিদ্ধিদাতার প্রিয় দূর্বা ঘাস, মোদক সাজ ও লাল চন্দন অর্পণ',
    monthBn: 'ভাদ্র শুক্ল চতুর্থী',
    imageUrl: ganeshPujaImage,
    productCount: 24
  },
  {
    id: 'satyanarayan-puja',
    nameBn: 'সত্যনারায়ণ পূজা',
    nameEn: 'Satyanarayan Vrata',
    taglineBn: 'পূর্ণিমা ও শুভ তিথির প্রসাদ, পাঁচালি ও পঞ্চামৃত সামগ্রী',
    monthBn: 'প্রতি পূর্ণিমা ও শুভক্ষণ',
    imageUrl: satyanarayanPujaImage,
    productCount: 32
  }
];
