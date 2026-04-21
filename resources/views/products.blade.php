@extends('layouts.app')

@section('title', 'Products - RDA PowerTech | Electrical Parts & Components')

@section('styles')
<style>
    /* ============================================================
       PAGE HEADER
    ============================================================ */
    .page-header {
        background: linear-gradient(135deg, var(--blue-800), var(--blue-700));
        padding: 40px 0 48px;
        position: relative; overflow: hidden;
    }
    .page-header::before {
        content: ''; position: absolute; top: -40px; right: -40px;
        width: 300px; height: 300px;
        background: rgba(255,255,255,0.04); border-radius: 50%;
    }
    .page-header-inner {
        max-width: 1280px; margin: 0 auto; padding: 0 32px;
        position: relative; z-index: 1;
    }
    .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
    .breadcrumb a { color: var(--blue-300); font-size: 13px; text-decoration: none; }
    .breadcrumb a:hover { color: white; }
    .breadcrumb span { color: rgba(255,255,255,0.4); font-size: 13px; }
    .page-title { font-size: 34px; font-weight: 800; color: white; letter-spacing: -0.8px; margin-bottom: 10px; }
    .page-subtitle { font-size: 15px; color: var(--blue-200); }

    /* ============================================================
       TOOLBAR
    ============================================================ */
    .toolbar {
        background: white;
        border-bottom: 1px solid var(--gray-200);
        position: sticky;
        top: 68px;
        z-index: 100;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .toolbar-inner {
        max-width: 1280px; margin: 0 auto; padding: 0 32px;
        display: flex; align-items: center; gap: 16px;
        height: 60px;
    }
    .search-box {
        flex: 1; max-width: 420px;
        display: flex; align-items: center; gap: 10px;
        background: var(--gray-50);
        border: 1.5px solid var(--gray-200);
        border-radius: var(--radius-md);
        padding: 0 14px;
        transition: all 0.2s;
    }
    .search-box:focus-within { border-color: var(--blue-400); background: white; box-shadow: 0 0 0 3px var(--blue-100); }
    .search-box i { color: var(--gray-400); font-size: 14px; }
    .search-box input {
        border: none; background: transparent; outline: none;
        font-family: 'Inter', sans-serif; font-size: 14px;
        color: var(--gray-700); flex: 1; height: 40px;
    }
    .search-box input::placeholder { color: var(--gray-400); }

    .sort-select {
        display: flex; align-items: center; gap: 8px;
        margin-left: auto;
    }
    .sort-select label { font-size: 13px; font-weight: 500; color: var(--gray-600); white-space: nowrap; }
    .sort-select select {
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md);
        background: white; padding: 8px 32px 8px 12px;
        font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
        color: var(--gray-700); cursor: pointer; outline: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        transition: border-color 0.2s;
    }
    .sort-select select:focus { border-color: var(--blue-400); box-shadow: 0 0 0 3px var(--blue-100); }

    .results-count {
        font-size: 13px; color: var(--gray-500);
        white-space: nowrap; flex-shrink: 0;
    }
    .results-count strong { color: var(--gray-800); font-weight: 700; }

    .filter-toggle-btn {
        display: none;
        align-items: center; gap: 6px;
        padding: 8px 14px;
        background: var(--blue-600); color: white;
        border: none; border-radius: var(--radius-md);
        font-size: 13px; font-weight: 600; cursor: pointer;
        font-family: 'Inter', sans-serif;
    }

    /* ============================================================
       MAIN LAYOUT
    ============================================================ */
    .products-layout {
        max-width: 1280px; margin: 0 auto; padding: 24px 32px;
        display: flex; gap: 24px; align-items: flex-start;
    }

    /* ============================================================
       SIDEBAR FILTERS
    ============================================================ */
    .filters-sidebar {
        width: 260px; flex-shrink: 0;
        position: sticky; top: 130px;
    }
    .filter-header {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 16px;
    }
    .filter-header h3 { font-size: 15px; font-weight: 700; color: var(--gray-800); display: flex; align-items: center; gap: 8px; }
    .filter-clear {
        font-size: 12px; color: var(--blue-600); font-weight: 600;
        cursor: pointer; text-decoration: none; border: none; background: none;
        font-family: 'Inter', sans-serif;
    }
    .filter-clear:hover { text-decoration: underline; }

    .filter-card {
        background: white; border: 1px solid var(--gray-200);
        border-radius: var(--radius-lg); overflow: hidden;
        margin-bottom: 12px;
    }
    .filter-section-head {
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 16px; cursor: pointer;
        user-select: none;
        transition: background 0.2s;
    }
    .filter-section-head:hover { background: var(--gray-50); }
    .filter-section-head h4 { font-size: 13px; font-weight: 700; color: var(--gray-700); text-transform: uppercase; letter-spacing: 0.5px; }
    .filter-section-head i { font-size: 11px; color: var(--gray-400); transition: transform 0.2s; }
    .filter-section-head.open i { transform: rotate(180deg); }

    .filter-body { padding: 8px 16px 16px; border-top: 1px solid var(--gray-100); }
    .filter-body.hidden { display: none; }

    /* Checkboxes */
    .filter-option {
        display: flex; align-items: center; justify-content: space-between;
        padding: 6px 0; cursor: pointer;
    }
    .filter-option input[type="checkbox"] { display: none; }
    .filter-option-label {
        display: flex; align-items: center; gap: 10px;
        font-size: 13px; color: var(--gray-600); cursor: pointer; flex: 1;
    }
    .custom-cb {
        width: 16px; height: 16px; border-radius: 4px;
        border: 1.5px solid var(--gray-300); background: white;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s; flex-shrink: 0;
    }
    .filter-option input[type="checkbox"]:checked + .filter-option-label .custom-cb {
        background: var(--blue-600); border-color: var(--blue-600);
    }
    .filter-option input[type="checkbox"]:checked + .filter-option-label .custom-cb::after {
        content: '✓'; color: white; font-size: 10px; font-weight: 700;
    }
    .filter-option input[type="checkbox"]:checked + .filter-option-label { color: var(--blue-700); font-weight: 600; }
    .filter-count {
        font-size: 11px; color: var(--gray-400); background: var(--gray-100);
        padding: 2px 7px; border-radius: 999px;
    }

    /* Price range */
    .price-inputs { display: flex; gap: 8px; margin-top: 8px; }
    .price-input {
        flex: 1; padding: 8px 10px;
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm);
        font-family: 'Inter', sans-serif; font-size: 12px; color: var(--gray-700);
        outline: none; transition: border-color 0.2s;
    }
    .price-input:focus { border-color: var(--blue-400); }
    .price-apply {
        display: block; width: 100%; margin-top: 10px;
        padding: 9px; background: var(--blue-600); color: white;
        border: none; border-radius: var(--radius-sm);
        font-size: 12px; font-weight: 600; cursor: pointer;
        font-family: 'Inter', sans-serif; transition: background 0.2s;
    }
    .price-apply:hover { background: var(--blue-700); }

    /* Active filters */
    .active-filters { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
    .active-filter-chip {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px;
        background: var(--blue-100); color: var(--blue-700);
        border-radius: 999px; font-size: 12px; font-weight: 500;
        border: 1px solid var(--blue-200);
    }
    .active-filter-chip button {
        background: none; border: none; cursor: pointer;
        color: var(--blue-600); font-size: 11px; padding: 0;
        display: flex; align-items: center;
    }

    /* ============================================================
       PRODUCTS GRID
    ============================================================ */
    .products-area { flex: 1; min-width: 0; }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    /* Product Card */
    .product-card {
        background: white; border-radius: var(--radius-lg);
        border: 1px solid var(--gray-200);
        overflow: hidden; transition: all 0.3s ease;
        display: flex; flex-direction: column;
        cursor: pointer;
        position: relative;
    }
    .product-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(37,99,235,0.12);
        border-color: var(--blue-200);
    }
    .product-card:hover .product-img-wrap img { transform: scale(1.06); }

    /* Badge on card */
    .card-badge {
        position: absolute; top: 12px; left: 12px; z-index: 1;
        padding: 3px 9px; border-radius: 999px;
        font-size: 11px; font-weight: 700; letter-spacing: 0.3px;
    }
    .badge-new { background: var(--blue-600); color: white; }
    .badge-hot { background: #ef4444; color: white; }
    .badge-sale { background: #16a34a; color: white; }

    .product-img-wrap {
        height: 200px; overflow: hidden;
        background: linear-gradient(135deg, #f8fafc, #f0f4f8);
        display: flex; align-items: center; justify-content: center;
    }
    .product-img-wrap img { width: 100%; height: 100%; object-fit: contain; padding: 16px; transition: transform 0.4s ease; }
    .product-img-placeholder {
        font-size: 60px; opacity: 0.4;
        transition: transform 0.4s ease;
    }

    .product-card:hover .product-img-placeholder { transform: scale(1.08); }

    /* Wishlist btn */
    .wishlist-btn {
        position: absolute; top: 12px; right: 12px;
        width: 34px; height: 34px; border-radius: 50%;
        background: white; border: 1px solid var(--gray-200);
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all 0.2s; font-size: 14px;
        color: var(--gray-400); z-index: 1;
        box-shadow: var(--shadow-sm);
    }
    .wishlist-btn:hover { color: #ef4444; border-color: #fecaca; background: #fff5f5; }
    .wishlist-btn.active { color: #ef4444; border-color: #fecaca; }

    .product-info { padding: 16px; flex: 1; display: flex; flex-direction: column; }
    .product-brand { font-size: 11px; font-weight: 700; color: var(--blue-500); text-transform: uppercase; letter-spacing: 0.7px; margin-bottom: 5px; }
    .product-name { font-size: 14px; font-weight: 600; color: var(--gray-800); margin-bottom: 6px; line-height: 1.4; }
    .product-spec { font-size: 12px; color: var(--gray-500); margin-bottom: 12px; line-height: 1.5; }

    .product-rating { display: flex; align-items: center; gap: 5px; margin-bottom: 12px; }
    .stars { color: #f59e0b; font-size: 12px; }
    .rating-count { font-size: 11px; color: var(--gray-400); }

    .product-price { display: flex; align-items: baseline; gap: 8px; margin-bottom: 14px; }
    .price-current { font-size: 18px; font-weight: 800; color: var(--gray-900); }
    .price-old { font-size: 13px; color: var(--gray-400); text-decoration: line-through; }
    .price-save { font-size: 12px; font-weight: 600; color: #16a34a; }

    .card-actions { display: flex; gap: 8px; margin-top: auto; }
    .btn-add-quote {
        flex: 1; padding: 10px 12px;
        background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
        color: white; border: none; border-radius: var(--radius-md);
        font-size: 13px; font-weight: 600; cursor: pointer;
        font-family: 'Inter', sans-serif;
        display: flex; align-items: center; justify-content: center; gap: 6px;
        transition: all 0.22s;
        text-decoration: none;
    }
    .btn-add-quote:hover { background: linear-gradient(135deg, var(--blue-700), var(--blue-600)); transform: translateY(-1px); }
    .btn-add-quote.added { background: linear-gradient(135deg, #16a34a, #15803d); }
    .btn-view-detail {
        padding: 10px 12px;
        background: white; color: var(--blue-600);
        border: 1.5px solid var(--blue-200); border-radius: var(--radius-md);
        font-size: 13px; cursor: pointer; font-family: 'Inter', sans-serif;
        display: flex; align-items: center; gap: 5px;
        transition: all 0.22s; font-weight: 600;
    }
    .btn-view-detail:hover { background: var(--blue-50); border-color: var(--blue-400); }

    /* No results */
    .no-results {
        grid-column: 1 / -1; text-align: center; padding: 80px 20px;
        color: var(--gray-400);
    }
    .no-results i { font-size: 64px; margin-bottom: 20px; display: block; opacity: 0.4; }
    .no-results h3 { font-size: 20px; font-weight: 700; color: var(--gray-600); margin-bottom: 8px; }

    /* Quote Float */
    .quote-float {
        position: fixed; bottom: 32px; right: 32px;
        background: linear-gradient(135deg, var(--blue-700), var(--blue-600));
        color: white; border-radius: var(--radius-xl);
        padding: 14px 22px; display: flex; align-items: center; gap: 12px;
        box-shadow: 0 8px 32px rgba(37,99,235,0.35);
        text-decoration: none; z-index: 999;
        transition: all 0.3s ease;
        transform: translateY(100px); opacity: 0;
    }
    .quote-float.visible { transform: translateY(0); opacity: 1; }
    .quote-float:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(37,99,235,0.45); }
    .quote-badge-count {
        background: white; color: var(--blue-700);
        border-radius: 50%; width: 26px; height: 26px;
        display: flex; align-items: center; justify-content: center;
        font-size: 13px; font-weight: 800;
    }
    .quote-float-text { font-size: 14px; font-weight: 600; }

    /* Pagination */
    .pagination-area { display: flex; justify-content: center; gap: 8px; margin-top: 40px; padding-bottom: 40px; }
    .page-btn {
        width: 38px; height: 38px; border-radius: var(--radius-sm);
        border: 1.5px solid var(--gray-200); background: white;
        color: var(--gray-600); font-size: 14px; font-weight: 600;
        cursor: pointer; display: flex; align-items: center; justify-content: center;
        transition: all 0.2s;font-family:'Inter',sans-serif;
    }
    .page-btn:hover { border-color: var(--blue-400); color: var(--blue-600); background: var(--blue-50); }
    .page-btn.active { background: var(--blue-600); color: white; border-color: var(--blue-600); }

    /* ============================================================
       RESPONSIVE
    ============================================================ */
    @media (max-width: 1024px) {
        .products-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
        .toolbar-inner { padding: 0 16px; flex-wrap: wrap; height: auto; padding-top: 10px; padding-bottom: 10px; gap: 10px; }
        .filter-toggle-btn { display: flex; }
        .search-box { max-width: 100%; flex: 1; order: 1; }
        .results-count { order: 3; }
        .sort-select { order: 2; }
        .filters-sidebar {
            position: fixed; top: 0; left: -300px; bottom: 0;
            width: 280px; z-index: 1100;
            background: white; overflow-y: auto;
            transition: left 0.3s ease;
            padding: 20px 16px;
            box-shadow: 4px 0 32px rgba(0,0,0,0.15);
        }
        .filters-sidebar.open { left: 0; }
        .filter-overlay {
            display: none; position: fixed; inset: 0;
            background: rgba(0,0,0,0.5); z-index: 1099;
        }
        .filter-overlay.open { display: block; }
        .products-layout { padding: 16px; flex-direction: column; }
        .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .page-header-inner { padding: 0 20px; }
    }
    @media (max-width: 500px) {
        .products-grid { grid-template-columns: 1fr; }
    }
</style>
@endsection

@section('content')

<!-- Filter Overlay -->
<div class="filter-overlay" id="filterOverlay"></div>

<!-- Page Header -->
<div class="page-header">
    <div class="page-header-inner">
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Home</a>
            <span>/</span>
            <span style="color:rgba(255,255,255,0.7)">Products</span>
        </div>
        <h1 class="page-title">All Products</h1>
        <p class="page-subtitle">Explore 5,000+ electrical components from 200+ trusted brands</p>
    </div>
</div>

<!-- Toolbar -->
<div class="toolbar">
    <div class="toolbar-inner">
        <button class="filter-toggle-btn" id="filterToggleBtn">
            <i class="fas fa-sliders-h"></i> Filters
        </button>
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="productSearch" placeholder="Search products, brands, part numbers…" autocomplete="off">
        </div>
        <span class="results-count" id="resultsCount"><strong>248</strong> products found</span>
        <div class="sort-select">
            <label for="sortSelect"><i class="fas fa-sort-amount-down"></i></label>
            <select id="sortSelect">
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest First</option>
            </select>
        </div>
    </div>
</div>

<!-- Main Layout -->
<div class="products-layout">

    <!-- ============== FILTER SIDEBAR ============== -->
    <aside class="filters-sidebar" id="filtersSidebar">
        <div class="filter-header">
            <h3><i class="fas fa-sliders-h" style="color:var(--blue-500)"></i> Filters</h3>
            <button class="filter-clear" id="clearAllFilters">Clear All</button>
        </div>

        <!-- Active Filters -->
        <div class="active-filters" id="activeFilters"></div>

        <!-- Category -->
        <div class="filter-card">
            <div class="filter-section-head open" data-target="cat-body">
                <h4>Category</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-body" id="cat-body">
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Circuit Breakers">
                    <span class="filter-option-label"><span class="custom-cb"></span>Circuit Breakers</span>
                    <span class="filter-count">320</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Transformers">
                    <span class="filter-option-label"><span class="custom-cb"></span>Transformers</span>
                    <span class="filter-count">180</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Cables & Wires">
                    <span class="filter-option-label"><span class="custom-cb"></span>Cables & Wires</span>
                    <span class="filter-count">450</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Switches">
                    <span class="filter-option-label"><span class="custom-cb"></span>Switches & Sockets</span>
                    <span class="filter-count">260</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Motors">
                    <span class="filter-option-label"><span class="custom-cb"></span>Motors & Drives</span>
                    <span class="filter-count">140</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="category" value="Panels">
                    <span class="filter-option-label"><span class="custom-cb"></span>Panels & Enclosures</span>
                    <span class="filter-count">95</span>
                </label>
            </div>
        </div>

        <!-- Brand -->
        <div class="filter-card">
            <div class="filter-section-head open" data-target="brand-body">
                <h4>Brand</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-body" id="brand-body">
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="Schneider">
                    <span class="filter-option-label"><span class="custom-cb"></span>Schneider Electric</span>
                    <span class="filter-count">340</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="ABB">
                    <span class="filter-option-label"><span class="custom-cb"></span>ABB</span>
                    <span class="filter-count">280</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="Siemens">
                    <span class="filter-option-label"><span class="custom-cb"></span>Siemens</span>
                    <span class="filter-count">210</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="Legrand">
                    <span class="filter-option-label"><span class="custom-cb"></span>Legrand</span>
                    <span class="filter-count">190</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="Havells">
                    <span class="filter-option-label"><span class="custom-cb"></span>Havells</span>
                    <span class="filter-count">170</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="brand" value="L&T">
                    <span class="filter-option-label"><span class="custom-cb"></span>L&T Electrical</span>
                    <span class="filter-count">155</span>
                </label>
            </div>
        </div>

        <!-- Voltage Rating -->
        <div class="filter-card">
            <div class="filter-section-head" data-target="voltage-body">
                <h4>Voltage Rating</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-body hidden" id="voltage-body">
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="voltage" value="230V">
                    <span class="filter-option-label"><span class="custom-cb"></span>230V (Single Phase)</span>
                    <span class="filter-count">520</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="voltage" value="415V">
                    <span class="filter-option-label"><span class="custom-cb"></span>415V (Three Phase)</span>
                    <span class="filter-count">380</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="voltage" value="11kV">
                    <span class="filter-option-label"><span class="custom-cb"></span>11kV (HT)</span>
                    <span class="filter-count">85</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="voltage" value="33kV">
                    <span class="filter-option-label"><span class="custom-cb"></span>33kV (EHT)</span>
                    <span class="filter-count">42</span>
                </label>
            </div>
        </div>

        <!-- Price Range -->
        <div class="filter-card">
            <div class="filter-section-head open" data-target="price-body">
                <h4>Price Range (₹)</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-body" id="price-body">
                <div class="price-inputs">
                    <input type="number" class="price-input" id="priceMin" placeholder="Min" min="0">
                    <input type="number" class="price-input" id="priceMax" placeholder="Max" min="0">
                </div>
                <button class="price-apply" id="applyPriceFilter">Apply</button>
            </div>
        </div>

        <!-- Availability -->
        <div class="filter-card">
            <div class="filter-section-head open" data-target="avail-body">
                <h4>Availability</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-body" id="avail-body">
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="availability" value="In Stock">
                    <span class="filter-option-label"><span class="custom-cb"></span>In Stock</span>
                    <span class="filter-count">1.2k</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" class="filter-cb" data-filter="availability" value="Import on Order">
                    <span class="filter-option-label"><span class="custom-cb"></span>Import on Order</span>
                    <span class="filter-count">380</span>
                </label>
            </div>
        </div>
    </aside>

    <!-- ============== PRODUCTS AREA ============== -->
    <div class="products-area">

        <!-- Products Grid -->
        <div class="products-grid" id="productsGrid">

            @php
            $products = [
                ['id'=>1,'name'=>'MCB Single Pole 16A','brand'=>'Schneider','category'=>'Circuit Breakers','spec'=>'6kA Breaking Capacity, C-Curve, 230V AC','price'=>485,'original'=>620,'rating'=>4.5,'reviews'=>128,'badge'=>'','emoji'=>'⚡','voltage'=>'230V','availability'=>'In Stock'],
                ['id'=>2,'name'=>'RCCB 40A 30mA 4P','brand'=>'ABB','category'=>'Circuit Breakers','spec'=>'4 Pole, 30mA Sensitivity, 415V AC','price'=>2880,'original'=>3400,'rating'=>4.8,'reviews'=>86,'badge'=>'hot','emoji'=>'🔒','voltage'=>'415V','availability'=>'In Stock'],
                ['id'=>3,'name'=>'Control Transformer 5KVA','brand'=>'Siemens','category'=>'Transformers','spec'=>'415V/230V, Single Phase, Epoxy Resin','price'=>8500,'original'=>9800,'rating'=>4.6,'reviews'=>42,'badge'=>'','emoji'=>'🔁','voltage'=>'415V','availability'=>'Import on Order'],
                ['id'=>4,'name'=>'4 Sqmm FR Cable (100m)','brand'=>'Havells','category'=>'Cables & Wires','spec'=>'4 Sqmm, FR PVC Insulation, 660V Grade','price'=>3200,'original'=>3800,'rating'=>4.7,'reviews'=>215,'badge'=>'sale','emoji'=>'🔌','voltage'=>'230V','availability'=>'In Stock'],
                ['id'=>5,'name'=>'Modular Switch 16A 1M','brand'=>'Legrand','category'=>'Switches','spec'=>'16A, 250V, White, Galaxy Series','price'=>320,'original'=>390,'rating'=>4.3,'reviews'=>340,'badge'=>'new','emoji'=>'🔘','voltage'=>'230V','availability'=>'In Stock'],
                ['id'=>6,'name'=>'AC Motor 1.5HP 1500RPM','brand'=>'ABB','category'=>'Motors','spec'=>'3-Phase, IE2, TEFC, 415V 50Hz, B3 Mounting','price'=>12400,'original'=>14500,'rating'=>4.9,'reviews'=>67,'badge'=>'hot','emoji'=>'⚙️','voltage'=>'415V','availability'=>'In Stock'],
                ['id'=>7,'name'=>'DB Box 4-Way (SPN)','brand'=>'Legrand','category'=>'Panels','spec'=>'Single Phase, 4-Way, IP40, Grey ABS','price'=>1850,'original'=>2100,'rating'=>4.4,'reviews'=>92,'badge'=>'','emoji'=>'🗄️','voltage'=>'230V','availability'=>'In Stock'],
                ['id'=>8,'name'=>'MCCB 100A 3P 25kA','brand'=>'Schneider','category'=>'Circuit Breakers','spec'=>'100A, 3 Pole, 25kA, Compact NSX Series','price'=>18500,'original'=>21000,'rating'=>4.8,'reviews'=>54,'badge'=>'','emoji'=>'⚡','voltage'=>'415V','availability'=>'In Stock'],
                ['id'=>9,'name'=>'VFD Drive 1.5kW 415V','brand'=>'Siemens','category'=>'Motors','spec'=>'1.5kW/2HP, V/f Control, Built-in EMC Filter','price'=>9800,'original'=>11500,'rating'=>4.7,'reviews'=>38,'badge'=>'new','emoji'=>'⚙️','voltage'=>'415V','availability'=>'Import on Order'],
                ['id'=>10,'name'=>'Contactor 25A 240V','brand'=>'L&T','category'=>'Circuit Breakers','spec'=>'25A, 3P+1NO, AC3 Duty, 240V Coil','price'=>1640,'original'=>1950,'rating'=>4.6,'reviews'=>110,'badge'=>'','emoji'=>'⚡','voltage'=>'230V','availability'=>'In Stock'],
                ['id'=>11,'name'=>'6 Sqmm Armoured Cable (90m)','brand'=>'Havells','category'=>'Cables & Wires','spec'=>'6 Sqmm, XLPE Armoured, 1100V Grade','price'=>7200,'original'=>8500,'rating'=>4.5,'reviews'=>78,'badge'=>'sale','emoji'=>'🔌','voltage'=>'415V','availability'=>'In Stock'],
                ['id'=>12,'name'=>'MCB 3 Pole 32A','brand'=>'ABB','category'=>'Circuit Breakers','spec'=>'32A, 3P, 10kA, C-Curve, 415V','price'=>1380,'original'=>1600,'rating'=>4.7,'reviews'=>155,'badge'=>'','emoji'=>'⚡','voltage'=>'415V','availability'=>'In Stock'],
            ];
            @endphp

            @foreach($products as $p)
            <div class="product-card"
                 data-category="{{ $p['category'] }}"
                 data-brand="{{ $p['brand'] }}"
                 data-price="{{ $p['price'] }}"
                 data-voltage="{{ $p['voltage'] }}"
                 data-availability="{{ $p['availability'] }}"
                 data-name="{{ strtolower($p['name']) }} {{ strtolower($p['brand']) }} {{ strtolower($p['spec']) }}"
                 data-rating="{{ $p['rating'] }}"
            >
                @if($p['badge'])
                <span class="card-badge badge-{{ $p['badge'] }}">{{ strtoupper($p['badge']) }}</span>
                @endif
                <button class="wishlist-btn" title="Save"><i class="far fa-heart"></i></button>
                <div class="product-img-wrap">
                    <div class="product-img-placeholder">{{ $p['emoji'] }}</div>
                </div>
                <div class="product-info">
                    <div class="product-brand">{{ $p['brand'] }}</div>
                    <div class="product-name">{{ $p['name'] }}</div>
                    <div class="product-spec">{{ $p['spec'] }}</div>
                    <div class="product-rating">
                        <div class="stars">
                            @for($i=1;$i<=5;$i++)
                                @if($i <= floor($p['rating']))<i class="fas fa-star"></i>
                                @elseif($i - 0.5 <= $p['rating'])<i class="fas fa-star-half-alt"></i>
                                @else<i class="far fa-star" style="color:#d1d5db"></i>
                                @endif
                            @endfor
                        </div>
                        <span class="rating-count">({{ $p['reviews'] }})</span>
                    </div>
                    <div class="product-price">
                        <span class="price-current">₹{{ number_format($p['price']) }}</span>
                        <span class="price-old">₹{{ number_format($p['original']) }}</span>
                        <span class="price-save">{{ round((($p['original']-$p['price'])/$p['original'])*100) }}% off</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn-add-quote"
                            data-id="{{ $p['id'] }}"
                            data-name="{{ $p['name'] }}"
                            data-brand="{{ $p['brand'] }}"
                            data-price="{{ $p['price'] }}"
                            id="quote-btn-{{ $p['id'] }}">
                            <i class="fas fa-plus"></i> Add to Quote
                        </button>
                        <button class="btn-view-detail"><i class="fas fa-eye"></i></button>
                    </div>
                </div>
            </div>
            @endforeach

            <div class="no-results" id="noResults" style="display:none">
                <i class="fas fa-search-minus"></i>
                <h3>No products found</h3>
                <p>Try adjusting filters or search terms</p>
            </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-area">
            <button class="page-btn"><i class="fas fa-chevron-left"></i></button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span style="display:flex;align-items:center;padding:0 4px;color:var(--gray-400)">…</span>
            <button class="page-btn">12</button>
            <button class="page-btn"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
</div>

<!-- Floating Quote Button -->
<a href="{{ route('quotation') }}" class="quote-float" id="quoteFloat">
    <i class="fas fa-file-invoice-dollar"></i>
    <span class="quote-float-text">View Quotation</span>
    <span class="quote-badge-count" id="quoteCount">0</span>
</a>

@endsection

@section('scripts')
<script>
(function() {
    // ============== Quote Cart ==============
    let quoteItems = JSON.parse(sessionStorage.getItem('quoteItems') || '[]');
    updateQuoteFloat();

    document.querySelectorAll('.btn-add-quote').forEach(btn => {
        const id = btn.dataset.id;
        if (quoteItems.find(i => i.id === id)) { setAdded(btn); }

        btn.addEventListener('click', function () {
            if (quoteItems.find(i => i.id === id)) return;
            quoteItems.push({ id, name: btn.dataset.name, brand: btn.dataset.brand, price: btn.dataset.price, qty: 1 });
            sessionStorage.setItem('quoteItems', JSON.stringify(quoteItems));
            setAdded(btn);
            updateQuoteFloat();
        });
    });

    function setAdded(btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> Added';
        btn.classList.add('added');
    }

    function updateQuoteFloat() {
        const floatBtn = document.getElementById('quoteFloat');
        const countEl = document.getElementById('quoteCount');
        countEl.textContent = quoteItems.length;
        if (quoteItems.length > 0) floatBtn.classList.add('visible');
        else floatBtn.classList.remove('visible');
    }

    // ============== Wishlist toggle ==============
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.className = 'fas fa-heart';
            } else {
                icon.className = 'far fa-heart';
            }
        });
    });

    // ============== Filter Sidebar Toggle (mobile) ==============
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filtersSidebar  = document.getElementById('filtersSidebar');
    const filterOverlay   = document.getElementById('filterOverlay');

    filterToggleBtn.addEventListener('click', () => {
        filtersSidebar.classList.toggle('open');
        filterOverlay.classList.toggle('open');
    });
    filterOverlay.addEventListener('click', () => {
        filtersSidebar.classList.remove('open');
        filterOverlay.classList.remove('open');
    });

    // ============== Filter Section Collapsible ==============
    document.querySelectorAll('.filter-section-head').forEach(head => {
        head.addEventListener('click', function () {
            const target = document.getElementById(this.dataset.target);
            this.classList.toggle('open');
            target.classList.toggle('hidden');
        });
    });

    // ============== Filtering Logic ==============
    const cards = document.querySelectorAll('.product-card');
    const searchInput  = document.getElementById('productSearch');
    const sortSelect   = document.getElementById('sortSelect');
    const resultsCount = document.getElementById('resultsCount');
    const noResults    = document.getElementById('noResults');
    const productsGrid = document.getElementById('productsGrid');
    const activeFiltersEl = document.getElementById('activeFilters');

    let activeFilters = { category: [], brand: [], voltage: [], availability: [] };
    let searchTerm = '';
    let priceMin = null, priceMax = null;
    let sortBy = 'relevance';

    function applyFilters() {
        let visible = 0;

        cards.forEach(card => {
            const catOK   = activeFilters.category.length === 0 || activeFilters.category.includes(card.dataset.category);
            const brandOK = activeFilters.brand.length === 0 || activeFilters.brand.includes(card.dataset.brand);
            const voltOK  = activeFilters.voltage.length === 0 || activeFilters.voltage.includes(card.dataset.voltage);
            const availOK = activeFilters.availability.length === 0 || activeFilters.availability.includes(card.dataset.availability);
            const price   = parseFloat(card.dataset.price);
            const priceOK = (priceMin === null || price >= priceMin) && (priceMax === null || price <= priceMax);
            const search  = card.dataset.name.includes(searchTerm.toLowerCase());

            if (catOK && brandOK && voltOK && availOK && priceOK && search) {
                card.style.display = '';
                visible++;
            } else {
                card.style.display = 'none';
            }
        });

        resultsCount.innerHTML = `<strong>${visible}</strong> products found`;
        noResults.style.display = visible === 0 ? 'block' : 'none';

        renderActiveFilters();
    }

    function renderActiveFilters() {
        let chips = '';
        Object.entries(activeFilters).forEach(([key, vals]) => {
            vals.forEach(v => {
                chips += `<span class="active-filter-chip">${v} <button onclick="removeFilter('${key}','${v}')"><i class="fas fa-times"></i></button></span>`;
            });
        });
        if (priceMin !== null || priceMax !== null) {
            chips += `<span class="active-filter-chip">₹${priceMin||0}–${priceMax||'∞'} <button onclick="clearPrice()"><i class="fas fa-times"></i></button></span>`;
        }
        activeFiltersEl.innerHTML = chips;
    }

    window.removeFilter = function(key, val) {
        activeFilters[key] = activeFilters[key].filter(v => v !== val);
        document.querySelectorAll(`.filter-cb[data-filter="${key}"]`).forEach(cb => {
            if (cb.value === val) cb.checked = false;
        });
        applyFilters();
    };
    window.clearPrice = function() {
        priceMin = priceMax = null;
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        applyFilters();
    };

    // Checkbox filters
    document.querySelectorAll('.filter-cb').forEach(cb => {
        cb.addEventListener('change', function () {
            const key = this.dataset.filter;
            if (this.checked) {
                activeFilters[key].push(this.value);
            } else {
                activeFilters[key] = activeFilters[key].filter(v => v !== this.value);
            }
            applyFilters();
        });
    });

    // Price filter
    document.getElementById('applyPriceFilter').addEventListener('click', () => {
        const min = parseFloat(document.getElementById('priceMin').value);
        const max = parseFloat(document.getElementById('priceMax').value);
        priceMin = isNaN(min) ? null : min;
        priceMax = isNaN(max) ? null : max;
        applyFilters();
    });

    // Clear all
    document.getElementById('clearAllFilters').addEventListener('click', () => {
        activeFilters = { category: [], brand: [], voltage: [], availability: [] };
        priceMin = priceMax = null;
        document.querySelectorAll('.filter-cb').forEach(cb => cb.checked = false);
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        searchInput.value = '';
        searchTerm = '';
        applyFilters();
    });

    // Search
    searchInput.addEventListener('input', function () {
        searchTerm = this.value.trim();
        applyFilters();
    });

    // Sort
    sortSelect.addEventListener('change', function () {
        sortBy = this.value;
        const grid = document.getElementById('productsGrid');
        const cardsArr = [...cards].filter(c => c.style.display !== 'none');

        cardsArr.sort((a, b) => {
            if (sortBy === 'price-asc') return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            if (sortBy === 'price-desc') return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            if (sortBy === 'name-asc') return a.dataset.name.localeCompare(b.dataset.name);
            if (sortBy === 'rating') return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            return 0;
        });

        cardsArr.forEach(c => grid.appendChild(c));
        grid.appendChild(noResults);
    });

    // Pre-filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const catParam  = urlParams.get('category');
    if (catParam) {
        const map = {
            'circuit-breakers': 'Circuit Breakers',
            'transformers': 'Transformers',
            'cables': 'Cables & Wires',
            'switches': 'Switches',
            'motors': 'Motors',
            'panels': 'Panels',
        };
        const catVal = map[catParam];
        if (catVal) {
            activeFilters.category.push(catVal);
            document.querySelectorAll('.filter-cb[data-filter="category"]').forEach(cb => {
                if (cb.value === catVal) cb.checked = true;
            });
            applyFilters();
        }
    }
})();
</script>
@endsection
