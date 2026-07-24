import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Minus,
  Check, 
  SlidersHorizontal, 
  Package, 
  X,
  ShieldCheck,
  Grid,
  Zap,
  Plug,
  Settings,
  ToggleRight,
  Sun,
  ShieldAlert,
  Battery,
  ChevronDown
} from 'lucide-react';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '../data/mockData';

export default function Products({ cart = [], addToCart, updateCartQty, removeFromCart }) {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Categories list with Icons per specification
  const categoriesList = [
    { slug: 'all', name: 'All Products', icon: Grid },
    { slug: 'mcb', name: 'MCB', icon: Zap },
    { slug: 'switchgears', name: 'Switchgears', icon: Plug },
    { slug: 'drives', name: 'Drives & VFD', icon: Settings },
    { slug: 'contactors', name: 'Contactors', icon: ToggleRight },
    { slug: 'solar-db', name: 'Solar DB AC/DC', icon: Sun },
    { slug: 'isolators', name: 'Isolators', icon: ShieldAlert },
    { slug: 'power-supplies', name: 'Power Supplies', icon: Battery }
  ];

  // Filter products based on selected category & search query
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategorySlug === 'all' || product.category_slug === selectedCategorySlug;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.model_number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get quantity in cart for a specific product
  const getProductCartQty = (productId) => {
    const item = cart.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="products-page products-page-container">
      <div className="container">
        
        {/* TOP TITLE & SUBTITLE HEADER (Below Navbar) */}
        <div className="catalog-top-header-banner">
          <h1 className="catalog-main-title">
            Our Products
          </h1>
          <p className="catalog-main-subtitle">
            Browse 1000+ genuine industrial electrical products from trusted brands. Add products to your quotation instantly.
          </p>
        </div>

        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="products-layout-grid">
          
          {/* LEFT SIDEBAR: CATEGORIES */}
          <aside className="category-sidebar-card">
            <div className="sidebar-title-wrap">
              <SlidersHorizontal size={18} className="text-[#248BFF]" />
              <h3 className="sidebar-title">Categories</h3>
            </div>

            <div className="category-nav-list">
              {categoriesList.map((cat) => {
                const IconComp = cat.icon;
                const count = cat.slug === 'all' 
                  ? MOCK_PRODUCTS.length 
                  : MOCK_PRODUCTS.filter(p => p.category_slug === cat.slug).length;
                
                const isActive = selectedCategorySlug === cat.slug;

                return (
                  <button
                    key={cat.slug}
                    className={`cat-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategorySlug(cat.slug)}
                  >
                    <div className="cat-item-left">
                      <IconComp size={19} className={`cat-icon ${isActive ? 'active-icon' : ''}`} />
                      <span className="cat-item-name">{cat.name}</span>
                    </div>
                    <span className={`cat-item-count ${isActive ? 'active-count' : ''}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT: SEARCH, FILTERS, DIVIDER, CATEGORY HEADER & PRODUCTS GRID */}
          <main className="products-content-area">
            
            {/* 64px Large Search Bar + Filters Button Row */}
            <div className="product-search-filter-row">
              <div className="search-input-wrap-lg">
                <Search className="search-icon-lg" size={22} />
                <input
                  type="text"
                  placeholder="Search products, model, number or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-lg"
                />
                {searchQuery && (
                  <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                    <X size={18} />
                  </button>
                )}
              </div>

              <button className="filters-action-btn">
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </button>
            </div>

            {/* Horizontal Divider */}
            <div className="product-header-divider" />

            {/* Active Category Header Row */}
            <div className="active-cat-header-row">
              <h2 className="active-cat-title font-['Outfit']">
                {selectedCategorySlug === 'all'
                  ? 'All Products'
                  : MOCK_CATEGORIES.find(c => c.slug === selectedCategorySlug)?.name || 'MCB'}
              </h2>

              <div className="cat-header-right">
                <span className="count-available-text">
                  {filteredProducts.length} Products Available
                </span>

                <div className="sort-dropdown-pill">
                  <span className="sort-label">Sort:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="newest">Newest First</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="brand">Brand</option>
                  </select>
                  <ChevronDown size={16} className="sort-arrow" />
                </div>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-cards-grid">
                {filteredProducts.map((product) => {
                  const qtyInCart = getProductCartQty(product.id);

                  return (
                    <div key={product.id} className="catalog-product-card">
                      
                      {/* Top Header: Brand Name + Model Badge */}
                      <div className="card-header-row">
                        <span className="card-brand-name">{product.brand}</span>
                        <span className="card-model-badge">{product.model_number}</span>
                      </div>

                      {/* DOMINANT LARGE PRODUCT IMAGE (45-50% Height) */}
                      <div className="card-image-area">
                        <div className="image-glow-bg" />
                        <img 
                          src="/dummy_product.jpg" 
                          alt={product.name} 
                          className="product-main-render"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/hero-products.png';
                          }}
                        />
                        <div className="render-shadow-ellipse" />
                      </div>

                      {/* Product Content Body */}
                      <div className="card-info-area">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-short-description">{product.description}</p>
                      </div>

                      {/* Divider Line & Bottom Quotation Controls Strip */}
                      <div className="card-quote-footer">
                        {qtyInCart === 0 ? (
                          <button
                            className="add-quote-btn-initial"
                            onClick={() => addToCart(product)}
                          >
                            <Plus size={18} />
                            <span>Add to Quote</span>
                          </button>
                        ) : (
                          <div className="qty-active-row">
                            {/* Quantity Selector [-] QTY [+] */}
                            <div className="qty-pill-selector">
                              <button
                                className="qty-btn"
                                onClick={() => {
                                  if (qtyInCart === 1) {
                                    removeFromCart(product.id);
                                  } else {
                                    updateCartQty(product, qtyInCart - 1);
                                  }
                                }}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="qty-value-text">{qtyInCart}</span>
                              <button
                                className="qty-btn"
                                onClick={() => updateCartQty(product, qtyInCart + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Update Quote Button */}
                            <button className="update-quote-btn">
                              <Check size={16} />
                              <span>Update Quote</span>
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-catalog-card">
                <Package size={52} className="text-[#64748B] mb-3" />
                <h3 className="text-[#0F172A] text-xl font-bold font-['Outfit'] mb-2">No Products Found</h3>
                <p className="text-[#475569] text-sm max-w-[420px] mx-auto">
                  We couldn't find any products matching your search criteria or category filter. Try clearing your search query.
                </p>
              </div>
            )}
          </main>

        </div>
      </div>

      <style>{`
        .products-page {
          background-color: #FFFFFF;
          min-height: 80vh;
        }

        .products-page-container {
          padding-top: 16px !important;
          padding-bottom: 96px;
        }

        /* Top Header Title Banner */
        .catalog-top-header-banner {
          margin-bottom: 36px;
        }

        .catalog-main-title {
          font-family: 'Sora', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 10px 0;
        }

        .catalog-main-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* 64px Large Search Bar + Filters Button Row */
        .product-search-filter-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .search-input-wrap-lg {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          height: 64px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 0 24px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .search-input-wrap-lg:focus-within {
          border-color: #248BFF;
          box-shadow: 0 18px 48px rgba(36, 139, 255, 0.22);
          transform: translateY(-2px);
        }

        .search-icon-lg {
          color: #248BFF;
          margin-right: 14px;
          flex-shrink: 0;
        }

        .search-input-lg {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #0F172A;
          font-size: 1.05rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .search-input-lg::placeholder {
          color: #94A3B8;
        }

        /* Filters Action Button */
        .filters-action-btn {
          height: 64px;
          padding: 0 26px;
          border-radius: 100px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .filters-action-btn:hover {
          border-color: #248BFF;
          color: #248BFF;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(36, 139, 255, 0.18);
        }

        /* Horizontal Divider */
        .product-header-divider {
          width: 100%;
          height: 1px;
          background: #E2E8F0;
          margin: 24px 0 28px 0;
        }

        /* Active Category Header Row */
        .active-cat-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .active-cat-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.65rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }

        .cat-header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .count-available-text {
          font-size: 0.92rem;
          font-weight: 600;
          color: #64748B;
        }

        /* Sort Dropdown Pill */
        .sort-dropdown-pill {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 8px 16px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          font-size: 0.88rem;
          font-weight: 600;
          color: #0F172A;
        }

        .sort-label {
          color: #64748B;
        }

        .sort-select {
          border: none;
          outline: none;
          background: transparent;
          color: #0F172A;
          font-weight: 700;
          cursor: pointer;
          padding-right: 4px;
          appearance: none;
          -webkit-appearance: none;
        }

        .sort-arrow {
          color: #64748B;
          pointer-events: none;
        }
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 60px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 0 24px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .search-input-wrap:focus-within {
          border-color: #248BFF;
          box-shadow: 0 18px 48px rgba(36, 139, 255, 0.22);
          transform: translateY(-2px);
        }

        .search-icon {
          color: #248BFF;
          margin-right: 14px;
          flex-shrink: 0;
        }

        .search-input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #0F172A;
          font-size: 1.05rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .search-input::placeholder {
          color: #94A3B8;
        }

        .clear-search-btn {
          background: #F1F5F9;
          border: none;
          color: #64748B;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clear-search-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        /* Page Layout */
        .products-layout-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 36px;
          align-items: start;
        }

        /* Minimal Apple-Inspired Categories Sidebar Card (280px Width, 24px Radius) */
        .category-sidebar-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
          position: sticky;
          top: 90px;
        }

        .sidebar-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 18px;
        }

        .sidebar-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
        }

        .category-nav-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Category Nav Items (Minimal Apple Style, Large Spacing) */
        .cat-nav-item {
          width: 100%;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          border-radius: 14px;
          border: none;
          background: transparent;
          color: #475569;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .cat-item-left {
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cat-icon {
          color: #64748B;
          transition: color 0.2s ease, transform 0.25s ease;
        }

        .cat-nav-item:hover {
          background: rgba(36, 139, 255, 0.06);
          color: #248BFF;
        }

        .cat-nav-item:hover .cat-item-left {
          transform: translateX(6px);
        }

        .cat-nav-item:hover .cat-icon {
          color: #248BFF;
          transform: scale(1.12);
        }

        /* Active Category: Light Blue Background, Blue Icon, Blue Text, 4px Blue Left Indicator */
        .cat-nav-item.active {
          background: rgba(36, 139, 255, 0.09);
          color: #248BFF;
          font-weight: 700;
          box-shadow: none;
        }

        .cat-nav-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #248BFF;
          border-radius: 4px 0 0 4px;
        }

        .cat-nav-item.active .cat-icon {
          color: #248BFF;
        }

        .cat-item-count {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 100px;
          background: #F1F5F9;
          color: #64748B;
          transition: all 0.2s ease;
        }

        .cat-item-count.active-count {
          background: rgba(36, 139, 255, 0.16);
          color: #248BFF;
        }

        /* 3-Column Premium Product Cards Grid */
        .products-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1200px) {
          .products-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .products-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Premium Industrial Product Card (White background, 24px radius, Soft Blue Glow) */
        .catalog-product-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06), 0 0 20px rgba(36, 139, 255, 0.06);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
          overflow: hidden;
          position: relative;
        }

        /* Apple Store Quality Hover: Card Lift, Blue Hover Glow, Deep Shadow */
        .catalog-product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(36, 139, 255, 0.22), 0 0 30px rgba(36, 139, 255, 0.12);
          border-color: rgba(36, 139, 255, 0.4);
        }

        /* Card Header Row */
        .card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-brand-name {
          font-size: 0.82rem;
          font-weight: 800;
          color: #248BFF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .card-model-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: #475569;
          background: #F1F5F9;
          padding: 4px 10px;
          border-radius: 8px;
        }

        /* SEAMLESS HERO-STYLE PRODUCT IMAGE BACKDROP (Radial Blue Glow) */
        .card-image-area {
          position: relative;
          height: 230px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 20px;
          background: transparent;
          overflow: visible;
        }

        .image-glow-bg {
          position: absolute;
          width: 85%;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(36, 139, 255, 0.28) 0%, rgba(36, 139, 255, 0.08) 55%, transparent 80%);
          filter: blur(20px);
          opacity: 0.9;
          pointer-events: none;
          transition: all 400ms ease;
        }

        .catalog-product-card:hover .image-glow-bg {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.18);
          background: radial-gradient(circle, rgba(36, 139, 255, 0.42) 0%, rgba(36, 139, 255, 0.14) 60%, transparent 80%);
          filter: blur(24px);
        }

        .product-main-render {
          max-height: 195px;
          max-width: 90%;
          object-fit: contain;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 14px 24px rgba(15, 23, 42, 0.15));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .catalog-product-card:hover .product-main-render {
          transform: scale(1.12) translateY(-6px);
          filter: drop-shadow(0 22px 38px rgba(36, 139, 255, 0.28));
        }

        /* Floating Component Base Shadow */
        .render-shadow-ellipse {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 18px;
          background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.18) 0%, rgba(36, 139, 255, 0.2) 50%, transparent 80%);
          filter: blur(9px);
          border-radius: 50%;
          transition: all 400ms ease;
        }

        .catalog-product-card:hover .render-shadow-ellipse {
          width: 85%;
          filter: blur(13px);
          background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.22) 0%, rgba(36, 139, 255, 0.28) 50%, transparent 80%);
        }

        /* Product Content Info */
        .card-info-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 14px;
        }

        .product-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.3;
          margin: 0 0 6px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-short-description {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Card Footer: Quotation Controls Strip */
        .card-quote-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
        }

        /* Initial Full-Width + Add to Quote Button */
        .add-quote-btn-initial {
          width: 100%;
          height: 44px;
          border-radius: 100px;
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          border: none;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(47, 128, 255, 0.28);
          transition: all 0.3s ease;
        }

        .add-quote-btn-initial:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(47, 128, 255, 0.45);
          background: linear-gradient(90deg, #1478FF, #2F80FF);
        }

        /* Active Quotation Row: [-] QTY [+] + Update Quote Button */
        .qty-active-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Quantity Selector [-] QTY [+] */
        .qty-pill-selector {
          display: flex;
          align-items: center;
          height: 44px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 100px;
          padding: 0 6px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
          flex-shrink: 0;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: #F1F5F9;
          color: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .qty-btn:hover {
          background: #2F80FF;
          color: #FFFFFF;
        }

        .qty-value-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #0F172A;
          min-width: 28px;
          text-align: center;
        }

        /* Update Quote Button */
        .update-quote-btn {
          flex: 1;
          height: 44px;
          border-radius: 100px;
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          border: none;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(47, 128, 255, 0.3);
          transition: all 0.25s ease;
        }

        .update-quote-btn:hover {
          background: linear-gradient(90deg, #1478FF, #2F80FF);
          box-shadow: 0 8px 22px rgba(47, 128, 255, 0.45);
        }

        /* Active Quotation Row: [-] QTY [+] + Update Quote Button */
        .qty-active-row {
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeIn 0.3s ease;
        }

        /* Quantity Selector [-] QTY [+] */
        .qty-pill-selector {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 100px;
          padding: 4px 8px;
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.05);
          flex-shrink: 0;
        }

        .qty-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #F1F5F9;
          color: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .qty-btn:hover {
          background: #248BFF;
          color: #FFFFFF;
        }

        .qty-value-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          min-width: 34px;
          text-align: center;
        }

        /* Update Quote Button */
        .update-quote-btn {
          flex: 1;
          height: 46px;
          border-radius: 100px;
          background: #248BFF;
          border: none;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(36, 139, 255, 0.3);
          transition: all 0.25s ease;
        }

        .update-quote-btn:hover {
          background: #0D7DFF;
          box-shadow: 0 8px 22px rgba(36, 139, 255, 0.45);
        }

        /* Empty State */
        .empty-catalog-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 60px 24px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.05);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .products-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .products-layout-grid {
            grid-template-columns: 1fr;
          }
          .category-sidebar-card {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .products-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
