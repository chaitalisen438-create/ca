import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  X, 
  SlidersHorizontal, 
  ChevronRight, 
  Search, 
  Check, 
  RotateCcw,
  Flame,
  ArrowUpDown
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { FESTIVALS } from '../data/festivals';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';

export const ShopPage: React.FC = () => {
  const { 
    language, 
    selectedCategory, 
    setSelectedCategory, 
    selectedFestival, 
    setSelectedFestival,
    searchQuery,
    setSearchQuery
  } = useStore();

  const [priceMax, setPriceMax] = useState<number>(3500);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [productType, setProductType] = useState<'all' | 'best-sellers' | 'featured' | 'discounted'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory && p.categoryId !== selectedCategory) {
        return false;
      }
      // Festival filter
      if (selectedFestival && p.festival !== selectedFestival && p.festival !== 'all') {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchBn = p.nameBn.toLowerCase().includes(q) || p.shortDescBn.toLowerCase().includes(q);
        const matchEn = p.nameEn.toLowerCase().includes(q) || p.shortDescEn.toLowerCase().includes(q);
        if (!matchBn && !matchEn) return false;
      }
      // Price range
      if (p.price > priceMax) {
        return false;
      }
      // Stock availability
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Product Type
      if (productType === 'best-sellers' && !p.isBestSeller) return false;
      if (productType === 'featured' && !p.isFeatured) return false;
      if (productType === 'discounted' && (!p.discountPercent || p.discountPercent <= 0)) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.reviewCount - a.reviewCount;
      return 0; // default featured
    });
  }, [selectedCategory, selectedFestival, searchQuery, priceMax, inStockOnly, productType, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedFestival(null);
    setSearchQuery('');
    setPriceMax(3500);
    setInStockOnly(false);
    setProductType('all');
    setSortBy('featured');
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const activeFiltersCount = (selectedCategory ? 1 : 0) + 
    (selectedFestival ? 1 : 0) + 
    (searchQuery ? 1 : 0) + 
    (priceMax < 3500 ? 1 : 0) + 
    (inStockOnly ? 1 : 0) + 
    (productType !== 'all' ? 1 : 0);

  // Common filter sidebar content
  const FilterContent = (
    <div className="space-y-6 text-sm text-[#4A382C]">
      
      {/* Search in Shop */}
      <div>
        <label className="block text-xs font-bold text-[#800000] uppercase tracking-wider mb-2">
          {language === 'bn' ? 'দোকানে খুঁজুন' : 'Search in Shop'}
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'bn' ? 'সামগ্রীর নাম লিখুন...' : 'Search samagri...'}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DDCFBA] focus:outline-none focus:border-[#800000] text-xs"
          />
          <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-2.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-[#8C7A6B] hover:text-black text-xs"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Categories Filter */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
            {language === 'bn' ? 'বিভাগসমূহ' : 'Categories'}
          </h4>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-[11px] text-[#A67C00] hover:underline"
            >
              {language === 'bn' ? 'সব দেখুন' : 'Clear'}
            </button>
          )}
        </div>
        <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
              selectedCategory === null 
                ? 'bg-[#5A0A0A] text-[#FFE89E] font-bold' 
                : 'hover:bg-[#F2E8D8] text-[#4A382C]'
            }`}
          >
            <span>{language === 'bn' ? 'সকল বিভাগ' : 'All Categories'}</span>
            <span>{PRODUCTS.length}</span>
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-[#5A0A0A] text-[#FFE89E] font-bold' 
                  : 'hover:bg-[#F2E8D8] text-[#4A382C]'
              }`}
            >
              <span className="line-clamp-1">{language === 'bn' ? cat.nameBn : cat.nameEn}</span>
              <span className="text-[11px] opacity-75">{cat.itemCount}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
            {language === 'bn' ? 'মূল্য সীমা' : 'Price Range'}
          </h4>
          <span className="text-xs font-bold text-[#800000] font-bengali-serif">
            ₹০ - ₹{priceMax.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="3500"
          step="50"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-[#800000] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-[#8C7A6B] mt-1 font-mono">
          <span>₹100</span>
          <span>₹3,500</span>
        </div>
      </div>

      {/* Product Type Filter */}
      <div>
        <h4 className="text-xs font-bold text-[#800000] uppercase tracking-wider mb-2">
          {language === 'bn' ? 'পণ্যের ধরন' : 'Product Type'}
        </h4>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { id: 'all', labelBn: 'সকল', labelEn: 'All' },
            { id: 'best-sellers', labelBn: 'বেস্টসেলার', labelEn: 'Best Sellers' },
            { id: 'featured', labelBn: 'জনপ্রিয়', labelEn: 'Featured' },
            { id: 'discounted', labelBn: 'বিশেষ ছাড়', labelEn: 'On Sale' }
          ].map(type => (
            <button
              key={type.id}
              onClick={() => setProductType(type.id as any)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                productType === type.id
                  ? 'bg-[#5A0A0A] text-[#FFE89E] border-[#5A0A0A] font-bold'
                  : 'bg-white text-[#4A382C] border-[#DDCFBA] hover:bg-[#F7EFE4]'
              }`}
            >
              {language === 'bn' ? type.labelBn : type.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Festival Collection Filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
            {language === 'bn' ? 'উৎসব অনুযায়ী' : 'Festival Collection'}
          </h4>
          {selectedFestival && (
            <button
              onClick={() => setSelectedFestival(null)}
              className="text-[11px] text-[#A67C00] hover:underline"
            >
              {language === 'bn' ? 'মুছুন' : 'Clear'}
            </button>
          )}
        </div>
        <select
          value={selectedFestival || ''}
          onChange={(e) => setSelectedFestival(e.target.value || null)}
          className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDCFBA] text-xs font-medium text-[#4A382C] focus:outline-none focus:border-[#800000]"
        >
          <option value="">{language === 'bn' ? 'সকল উৎসবের সামগ্রী' : 'All Festivals'}</option>
          {FESTIVALS.map(f => (
            <option key={f.id} value={f.id}>
              {language === 'bn' ? f.nameBn : f.nameEn}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Filter */}
      <div>
        <label className="flex items-center gap-2 text-xs font-semibold text-[#4A382C] cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded text-[#800000] accent-[#800000] cursor-pointer"
          />
          <span>{language === 'bn' ? 'শুধুমাত্র মজুত সামগ্রী (In Stock Only)' : 'In Stock Only'}</span>
        </label>
      </div>

      {/* Reset Filters Action */}
      {activeFiltersCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full py-2 px-3 rounded-xl border border-[#C5A059] text-[#800000] hover:bg-[#800000] hover:text-[#FFE89E] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'সকল ফিল্টার রিসেট করুন' : 'Reset All Filters'}</span>
        </button>
      )}

    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#FBF8F2] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#7D6855] mb-6">
          <span className="hover:text-[#800000] cursor-pointer">হোম</span>
          <ChevronRight className="w-3 h-3 text-[#B09D8B]" />
          <span className="font-bold text-[#800000]">দোকান (Shop)</span>
          {selectedCategory && (
            <>
              <ChevronRight className="w-3 h-3 text-[#B09D8B]" />
              <span className="text-[#3A0606] font-medium">
                {CATEGORIES.find(c => c.id === selectedCategory)?.nameBn}
              </span>
            </>
          )}
        </div>

        {/* Shop Header Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#4A0A0A] to-[#2E0505] border border-[#C5A059]/50 shadow-md text-[#FFF7E2] mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>
          <div className="max-w-2xl relative z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-bengali-serif text-[#FFF] mb-2">
              {language === 'bn' ? 'মহাকাল দশকর্মা ভান্ডার অনলাইন স্টোর' : 'Mahaakal Dashakarma Online Store'}
            </h1>
            <p className="text-xs sm:text-sm text-[#E4D1AC] leading-relaxed">
              {language === 'bn'
                ? 'বিশুদ্ধ পূজা সামগ্রী, পিতলের প্রদীপ ও থালি, গঙ্গাজল, দশকর্মা ফর্দ ও পূর্ণ পূজা কিটের নির্ভরযোগ্য সংগ্রহ।'
                : 'Authentic Puja Samagri, hand-engraved brassware, certified Rudraksha, pure Gangajal and Dashakarma essentials.'}
            </p>
          </div>
        </div>

        {/* Shop Main Layout: Desktop Sidebar + Product Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-[#FFFDF9] rounded-2xl p-6 border border-[#E8DCC6] shadow-sm sticky top-24">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EFE4D2]">
              <div className="flex items-center gap-2 text-base font-bold text-[#3B0707] font-bengali-serif">
                <Filter className="w-4 h-4 text-[#800000]" />
                <span>{language === 'bn' ? 'ফিল্টার ও বাছাই' : 'Filter Products'}</span>
              </div>
              {activeFiltersCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#800000] text-[#FFEAA7] font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            {FilterContent}
          </aside>

          {/* Main Product Area */}
          <main className="lg:col-span-9 flex flex-col space-y-6">
            
            {/* Top Toolbar: Mobile Filter Trigger, Result Count & Sorting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC6] shadow-sm">
              
              {/* Mobile Filter Button */}
              <button
                id="mobile-filter-open-btn"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#520B0B] text-[#FFE89E] text-xs font-bold cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>{language === 'bn' ? 'ফিল্টার প্যানেল' : 'Filters'}</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#FFE89E] text-[#520B0B] text-[10px] font-black flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Result Count */}
              <div className="text-xs sm:text-sm text-[#665241] font-medium">
                {language === 'bn' ? (
                  <>
                    মোট <strong className="text-[#800000] font-bengali-serif">{filteredProducts.length}</strong> টি সামগ্রী প্রদর্শিত হচ্ছে
                  </>
                ) : (
                  <>
                    Showing <strong className="text-[#800000]">{filteredProducts.length}</strong> spiritual products
                  </>
                )}
              </div>

              {/* Sorting Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#7B6756] whitespace-nowrap hidden sm:inline">
                  {language === 'bn' ? 'সাজান:' : 'Sort By:'}
                </span>
                <select
                  id="shop-sort-by-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#DDCFBA] text-xs font-bold text-[#4A382C] focus:outline-none focus:border-[#800000] cursor-pointer"
                >
                  <option value="featured">{language === 'bn' ? 'জনপ্রিয়তা অনুযায়ী' : 'Popularity'}</option>
                  <option value="price-low">{language === 'bn' ? 'মূল্য: কম থেকে বেশি' : 'Price: Low to High'}</option>
                  <option value="price-high">{language === 'bn' ? 'মূল্য: বেশি থেকে কম' : 'Price: High to Low'}</option>
                  <option value="rating">{language === 'bn' ? 'সর্বোচ্চ রেটিং' : 'Customer Rating'}</option>
                  <option value="newest">{language === 'bn' ? 'নতুন সংযোজন' : 'New Arrivals'}</option>
                </select>
              </div>

            </div>

            {/* Active Filters Pill Bar */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#8C7A6B]">সক্রিয় ফিল্টার:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#FFF0D4] text-[#800000] border border-[#C5A059]">
                    <span>বিভাগ: {CATEGORIES.find(c => c.id === selectedCategory)?.nameBn}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory(null)} />
                  </span>
                )}
                {selectedFestival && (
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#FFF0D4] text-[#800000] border border-[#C5A059]">
                    <span>উৎসব: {FESTIVALS.find(f => f.id === selectedFestival)?.nameBn}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedFestival(null)} />
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#FFF0D4] text-[#800000] border border-[#C5A059]">
                    <span>খোঁজ: "{searchQuery}"</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#800000] underline font-semibold hover:text-[#B30000] cursor-pointer"
                >
                  সব মুছুন (Clear All)
                </button>
              </div>
            )}

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="py-16 text-center bg-[#FFFDF9] rounded-2xl border border-dashed border-[#DDCFBA] p-8">
                <Flame className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
                <h3 className="text-lg font-bold text-[#3B0707] font-bengali-serif mb-2">
                  {language === 'bn' ? 'কোনো সামগ্রী পাওয়া যায়নি' : 'No Products Match Your Filter'}
                </h3>
                <p className="text-xs text-[#7A6451] max-w-sm mx-auto mb-5">
                  {language === 'bn'
                    ? 'আপনার ফিল্টারটি পরিবর্তন করুন বা সকল ফিল্টার রিসেট করে পুনরায় চেষ্টা করুন।'
                    : 'Try clearing some filters or search for another spiritual article.'}
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2 rounded-xl bg-[#520B0B] text-[#FFE89E] text-xs font-bold cursor-pointer"
                >
                  ফিল্টার রিসেট করুন
                </button>
              </div>
            )}

            {/* WooCommerce Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      id={`pagination-page-${pageNum}`}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 350, behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#520B0B] text-[#FFE89E] border border-[#D4AF37] shadow-md'
                          : 'bg-white text-[#4A382C] border border-[#DDCFBA] hover:bg-[#F5EDE0]'
                      }`}
                    >
                      {language === 'bn' ? pageNum.toLocaleString('bn-BD') : pageNum}
                    </button>
                  );
                })}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Slide-Out Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-[#FFFDF9] h-full shadow-2xl p-6 overflow-y-auto flex flex-col z-10 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DCC6]">
              <div className="flex items-center gap-2 font-bold text-[#3B0707] font-bengali-serif">
                <SlidersHorizontal className="w-4 h-4 text-[#800000]" />
                <span>ফিল্টার ও বাছাই</span>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-[#4A382C]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow">
              {FilterContent}
            </div>

            <div className="pt-4 border-t border-[#E8DCC6] mt-4">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#520B0B] text-[#FFE89E] text-xs font-bold shadow-md cursor-pointer"
              >
                প্রদর্শন করুন ({filteredProducts.length} টি সামগ্রী)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
