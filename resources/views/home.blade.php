@extends('layouts.app')

@section('title', 'RDA PowerTech - Electrical Parts Supplier | Home')

@section('styles')
<style>
/* ============================================================
   HERO SECTION
============================================================ */
.hero {
    background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fd 40%, #dbeafe 100%);
    padding: 100px 0 80px;
    position: relative;
    overflow: hidden;
}
.hero::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
    border-radius: 50%;
}
.hero::after {
    content: '';
    position: absolute; bottom: -80px; left: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
    border-radius: 50%;
}
.hero-inner {
    max-width: 1280px; margin: 0 auto; padding: 0 32px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
    align-items: center; position: relative; z-index: 1;
}
.hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px;
    background: var(--blue-100); color: var(--blue-700);
    border-radius: 999px; font-size: 12px; font-weight: 600;
    letter-spacing: 0.5px; margin-bottom: 24px; border: 1px solid var(--blue-200);
}
.hero-badge span { width: 6px; height: 6px; background: var(--blue-500); border-radius: 50%; animation: pulse-dot 2s infinite; }
@keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
.hero h1 { font-size: clamp(36px,5vw,60px); font-weight: 900; line-height: 1.1; color: var(--blue-900); margin-bottom: 20px; letter-spacing: -1.5px; }
.hero h1 .highlight { background: linear-gradient(135deg,var(--blue-600),var(--blue-400)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.hero-desc { font-size: 17px; color: var(--gray-600); line-height: 1.7; margin-bottom: 36px; max-width: 480px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-visual { position: relative; display: flex; align-items: center; justify-content: center; }
.hero-card-float { background: white; border-radius: var(--radius-xl); padding: 32px; box-shadow: 0 20px 60px rgba(37,99,235,0.15),0 4px 16px rgba(0,0,0,0.08); width: 100%; max-width: 420px; border: 1px solid var(--blue-100); animation: float-card 4s ease-in-out infinite; }
@keyframes float-card { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
.hc-top { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.hc-icon { width: 56px; height: 56px; background: linear-gradient(135deg,var(--blue-600),var(--blue-400)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 24px; color: white; box-shadow: var(--shadow-blue); }
.hc-info h3 { font-size: 16px; font-weight: 700; color: var(--gray-800); }
.hc-info span { font-size: 13px; color: var(--gray-400); }
.hc-stat { text-align: right; margin-left: auto; }
.hc-stat .num { font-size: 26px; font-weight: 800; color: var(--blue-600); }
.hc-stat .lbl { font-size: 11px; color: var(--gray-400); }
.hc-divider { height: 1px; background: var(--gray-100); margin: 16px 0; }
.hc-items { display: flex; flex-direction: column; gap: 12px; }
.hc-item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: var(--blue-50); border-radius: var(--radius-md); border: 1px solid var(--blue-100); }
.hc-item-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--blue-500); flex-shrink: 0; }
.hc-item-name { flex: 1; font-size: 13px; font-weight: 500; color: var(--gray-700); }
.hc-item-price { font-size: 13px; font-weight: 700; color: var(--blue-700); }
.hc-btn { display: block; width: 100%; text-align: center; margin-top: 20px; padding: 14px; background: linear-gradient(135deg,var(--blue-600),var(--blue-500)); color: white; border-radius: var(--radius-md); font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.22s; box-shadow: var(--shadow-blue); }
.hc-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,0.30); }
.float-badge-1,.float-badge-2 { position: absolute; background: white; border-radius: var(--radius-md); padding: 10px 16px; box-shadow: var(--shadow-md); font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; border: 1px solid var(--gray-200); }
.float-badge-1 { top: 0; left: -30px; animation: float-b1 3s ease-in-out infinite; color: var(--blue-700); }
.float-badge-2 { bottom: 20px; right: -20px; animation: float-b2 3.5s ease-in-out infinite; color: var(--gray-700); }
@keyframes float-b1 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-8px) rotate(-2deg)} }
@keyframes float-b2 { 0%,100%{transform:translateY(0) rotate(2deg)} 50%{transform:translateY(-6px) rotate(2deg)} }

/* ============================================================
   STATS BANNER
============================================================ */
.stats-banner { background: linear-gradient(135deg,var(--blue-700),var(--blue-600)); padding: 40px 0; }
.stats-grid { max-width: 1280px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(4,1fr); gap: 32px; }
.stat-item { text-align: center; }
.stat-num { font-size: 36px; font-weight: 800; color: white; letter-spacing: -1px; }
.stat-lbl { font-size: 13px; color: var(--blue-200); font-weight: 500; margin-top: 4px; }

/* ============================================================
   SECTION COMMONS
============================================================ */
.section { padding: 80px 0; }
.section-header { text-align: center; margin-bottom: 52px; }
.section-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; background: var(--blue-100); color: var(--blue-700); border-radius: 999px; font-size: 12px; font-weight: 600; margin-bottom: 16px; letter-spacing: 0.5px; }
.section-title { font-size: clamp(28px,4vw,42px); font-weight: 800; color: var(--gray-900); letter-spacing: -1px; margin-bottom: 14px; }
.section-sub { font-size: 16px; color: var(--gray-500); max-width: 520px; margin: 0 auto; }

/* ============================================================
   CATEGORY CARDS — with background images
============================================================ */
.categories-grid { max-width: 1280px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }

.category-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: block;
    text-decoration: none;
    position: relative;
    min-height: 260px;
    transition: all 0.35s ease;
    cursor: pointer;
    border: none;
}
.category-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(0,0,0,0.22); }

/* background image layer */
.cat-bg {
    position: absolute; inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
}
.category-card:hover .cat-bg { transform: scale(1.07); }

/* dark overlay */
.cat-overlay {
    position: absolute; inset: 0;
    transition: opacity 0.35s;
}
.category-card:hover .cat-overlay { opacity: 0.92; }

/* content on top */
.cat-content {
    position: relative; z-index: 2;
    padding: 28px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 260px;
}
.cat-tag {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 11px; font-weight: 700;
    color: rgba(255,255,255,0.9);
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin-bottom: 12px;
    width: fit-content;
}
.cat-name { font-size: 22px; font-weight: 800; color: white; margin-bottom: 6px; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.cat-desc { font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.55; margin-bottom: 14px; }
.cat-count {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 700; color: white;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(4px);
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.25);
    width: fit-content;
}

/* top icon pill */
.cat-icon-pill {
    position: absolute; top: 20px; right: 20px; z-index: 3;
    width: 52px; height: 52px;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
}

/* ============================================================
   FEATURE CARDS — colorful
============================================================ */
.features-section { background: #f8fafc; padding: 80px 0; }
.features-grid { max-width: 1280px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }

.feature-card {
    border-radius: var(--radius-lg);
    padding: 32px 24px; text-align: center;
    position: relative; overflow: hidden;
    transition: all 0.3s;
    border: none;
}
.feature-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.14); }

/* Individual card colors */
.feature-card.fc-blue      { background: linear-gradient(145deg,#1d4ed8,#3b82f6); }
.feature-card.fc-purple    { background: linear-gradient(145deg,#7c3aed,#a78bfa); }
.feature-card.fc-teal      { background: linear-gradient(145deg,#0d9488,#2dd4bf); }
.feature-card.fc-orange    { background: linear-gradient(145deg,#ea580c,#fb923c); }

.feature-card::before { content:''; position:absolute; top:-30px;right:-30px; width:120px;height:120px; background:rgba(255,255,255,0.08); border-radius:50%; }
.feature-card::after  { content:''; position:absolute; bottom:-20px;left:-20px; width:80px;height:80px; background:rgba(255,255,255,0.06); border-radius:50%; }

.feat-icon-wrap {
    width: 72px; height: 72px;
    background: rgba(255,255,255,0.18);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 30px; color: white;
    margin: 0 auto 20px;
    border: 2px solid rgba(255,255,255,0.25);
    position: relative; z-index: 1;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.feat-title { font-size: 16px; font-weight: 700; color: white; margin-bottom: 10px; position: relative; z-index: 1; }
.feat-desc  { font-size: 13px; color: rgba(255,255,255,0.82); line-height: 1.65; position: relative; z-index: 1; }

/* ============================================================
   TESTIMONIALS — dual scrolling marquee
============================================================ */
.testimonials-section {
    background: linear-gradient(160deg, var(--blue-900) 0%, #0d2144 100%);
    padding: 80px 0;
    overflow: hidden;
}
.testimonials-section .section-badge { background: rgba(255,255,255,0.1); color: var(--blue-200); border: 1px solid rgba(255,255,255,0.15); }
.testimonials-section .section-title { color: white; }
.testimonials-section .section-sub   { color: var(--blue-200); }

.marquee-wrapper { overflow: hidden; margin-bottom: 16px; }
.marquee-track {
    display: flex;
    gap: 20px;
    width: max-content;
}
.marquee-track.left-to-right  { animation: scroll-ltr 40s linear infinite; }
.marquee-track.right-to-left  { animation: scroll-rtl 40s linear infinite; }
.marquee-track:hover { animation-play-state: paused; }

@keyframes scroll-ltr { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes scroll-rtl { from{transform:translateX(-50%)} to{transform:translateX(0)} }

.testi-card {
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: var(--radius-lg);
    padding: 24px 28px;
    width: 320px;
    flex-shrink: 0;
    transition: all 0.3s;
    cursor: default;
}
.testi-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(99,179,237,0.3); transform: translateY(-4px); }

.testi-quote { font-size: 36px; color: var(--blue-400); line-height: 1; margin-bottom: 12px; font-family: Georgia, serif; }
.testi-text  { font-size: 14px; color: rgba(255,255,255,0.82); line-height: 1.7; margin-bottom: 20px; }
.testi-stars { color: #fbbf24; font-size: 13px; margin-bottom: 16px; letter-spacing: 2px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; font-weight: 800; color: white;
    flex-shrink: 0;
}
.testi-name { font-size: 14px; font-weight: 700; color: white; }
.testi-role { font-size: 12px; color: var(--blue-300); }

/* ============================================================
   CTA
============================================================ */
.cta-section { background: linear-gradient(135deg,var(--blue-700) 0%,var(--blue-600) 50%,var(--blue-500) 100%); padding: 80px 0; position: relative; overflow: hidden; }
.cta-section::before { content:''; position:absolute; top:-100px;right:-100px; width:400px;height:400px; background:rgba(255,255,255,0.05); border-radius:50%; }
.cta-inner { max-width: 680px; margin: 0 auto; padding: 0 32px; text-align: center; position: relative; z-index: 1; }
.cta-inner h2 { font-size: 40px; font-weight: 800; color: white; margin-bottom: 16px; letter-spacing: -1px; }
.cta-inner p  { font-size: 17px; color: rgba(255,255,255,0.8); margin-bottom: 36px; }
.cta-actions  { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
    .hero-inner { grid-template-columns: 1fr; gap: 40px; }
    .hero-visual { display: none; }
    .categories-grid { grid-template-columns: repeat(2,1fr); }
    .features-grid   { grid-template-columns: repeat(2,1fr); }
    .stats-grid       { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 640px) {
    .categories-grid  { grid-template-columns: 1fr; padding: 0 20px; }
    .features-grid    { grid-template-columns: 1fr; padding: 0 20px; }
    .stats-grid        { grid-template-columns: repeat(2,1fr); }
    .cta-inner h2      { font-size: 28px; }
    .hero-inner        { padding: 0 20px; }
    .testi-card        { width: 280px; }
}
</style>
@endsection

@section('content')

<!-- ===================== HERO ===================== -->
<section class="hero">
    <div class="hero-inner">
        <div class="hero-text">
            <div class="hero-badge"><span></span> India's Trusted Electrical Parts Supplier</div>
            <h1>Power Your Projects with <span class="highlight">Premium Parts</span></h1>
            <p class="hero-desc">From circuit breakers to transformers — RDA PowerTech delivers high-quality electrical components with instant quotations, fast delivery, and expert support.</p>
            <div class="hero-actions">
                <a href="{{ route('products') }}" class="btn btn-primary"><i class="fas fa-microchip"></i> Browse Products</a>
                <a href="{{ route('quotation') }}" class="btn btn-outline"><i class="fas fa-file-invoice"></i> Get a Quote</a>
            </div>
        </div>
        <div class="hero-visual">
            <div class="float-badge-1"><i class="fas fa-check-circle" style="color:#22c55e"></i> ISO Certified</div>
            <div class="hero-card-float">
                <div class="hc-top">
                    <div class="hc-icon"><i class="fas fa-bolt"></i></div>
                    <div class="hc-info"><h3>Quick Quotation</h3><span>Instant price estimate</span></div>
                    <div class="hc-stat"><div class="num">5K+</div><div class="lbl">Products</div></div>
                </div>
                <div class="hc-divider"></div>
                <div class="hc-items">
                    <div class="hc-item"><div class="hc-item-dot"></div><span class="hc-item-name">MCB 32A 3 Pole</span><span class="hc-item-price">₹1,240</span></div>
                    <div class="hc-item"><div class="hc-item-dot"></div><span class="hc-item-name">RCCB 40A 30mA</span><span class="hc-item-price">₹2,180</span></div>
                    <div class="hc-item"><div class="hc-item-dot"></div><span class="hc-item-name">Contactor 25A</span><span class="hc-item-price">₹3,450</span></div>
                </div>
                <a href="{{ route('quotation') }}" class="hc-btn"><i class="fas fa-file-invoice"></i> Generate Quotation</a>
            </div>
            <div class="float-badge-2"><i class="fas fa-truck" style="color:var(--blue-500)"></i> Fast Delivery PAN India</div>
        </div>
    </div>
</section>

<!-- ===================== STATS ===================== -->
<section class="stats-banner">
    <div class="stats-grid">
        <div class="stat-item"><div class="stat-num">5,000+</div><div class="stat-lbl">Products Available</div></div>
        <div class="stat-item"><div class="stat-num">200+</div><div class="stat-lbl">Trusted Brands</div></div>
        <div class="stat-item"><div class="stat-num">15,000+</div><div class="stat-lbl">Happy Clients</div></div>
        <div class="stat-item"><div class="stat-num">14 Yrs</div><div class="stat-lbl">Industry Experience</div></div>
    </div>
</section>

<!-- ===================== CATEGORIES ===================== -->
<section class="section">
    <div class="section-header">
        <div class="section-badge"><i class="fas fa-layer-group"></i> Product Categories</div>
        <h2 class="section-title">Everything Electrical, Under One Roof</h2>
        <p class="section-sub">Browse our wide range of industrial and commercial electrical components from top brands.</p>
    </div>
    <div class="categories-grid">

        <!-- Circuit Breakers -->
        <a href="{{ route('products') }}?category=circuit-breakers" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(30,58,138,0.55) 0%,rgba(30,58,138,0.90) 100%)"></div>
            <div class="cat-icon-pill">⚡</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-bolt"></i> Protection</div>
                <div class="cat-name">Circuit Breakers</div>
                <div class="cat-desc">MCB, MCCB, RCCB, ELCB — full range of protection devices for residential and industrial use.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 320+ Products</div>
            </div>
        </a>

        <!-- Transformers -->
        <a href="{{ route('products') }}?category=transformers" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(124,58,237,0.55) 0%,rgba(124,58,237,0.90) 100%)"></div>
            <div class="cat-icon-pill">🔁</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-exchange-alt"></i> Power</div>
                <div class="cat-name">Transformers</div>
                <div class="cat-desc">Step-up, step-down, isolation and auto transformers for power distribution.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 180+ Products</div>
            </div>
        </a>

        <!-- Cables & Wires -->
        <a href="{{ route('products') }}?category=cables" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(5,150,105,0.55) 0%,rgba(5,150,105,0.90) 100%)"></div>
            <div class="cat-icon-pill">🔌</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-plug"></i> Wiring</div>
                <div class="cat-name">Cables & Wires</div>
                <div class="cat-desc">FR, FRLS, armoured cables in all sizes from 0.5 sqmm to 400 sqmm.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 450+ Products</div>
            </div>
        </a>

        <!-- Switches -->
        <a href="{{ route('products') }}?category=switches" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(219,39,119,0.55) 0%,rgba(219,39,119,0.90) 100%)"></div>
            <div class="cat-icon-pill">🔘</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-toggle-on"></i> Control</div>
                <div class="cat-name">Switches & Sockets</div>
                <div class="cat-desc">Modular, industrial and heavy-duty switches for all types of installations.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 260+ Products</div>
            </div>
        </a>

        <!-- Motors -->
        <a href="{{ route('products') }}?category=motors" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(234,88,12,0.55) 0%,rgba(234,88,12,0.90) 100%)"></div>
            <div class="cat-icon-pill">⚙️</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-cog"></i> Automation</div>
                <div class="cat-name">Motors & Drives</div>
                <div class="cat-desc">AC/DC motors, VFDs, servo drives for industrial automation and control.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 140+ Products</div>
            </div>
        </a>

        <!-- Panels -->
        <a href="{{ route('products') }}?category=panels" class="category-card">
            <div class="cat-bg" style="background-image:url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80')"></div>
            <div class="cat-overlay" style="background:linear-gradient(160deg,rgba(2,132,199,0.55) 0%,rgba(2,132,199,0.90) 100%)"></div>
            <div class="cat-icon-pill">🗄️</div>
            <div class="cat-content">
                <div class="cat-tag"><i class="fas fa-server"></i> Enclosures</div>
                <div class="cat-name">Panels & Enclosures</div>
                <div class="cat-desc">DB boxes, MCC panels, control panels and IP-rated industrial enclosures.</div>
                <div class="cat-count"><i class="fas fa-box"></i> 95+ Products</div>
            </div>
        </a>

    </div>
</section>

<!-- ===================== FEATURES — colorful cards ===================== -->
<section class="features-section">
    <div class="section-header">
        <div class="section-badge"><i class="fas fa-star"></i> Why Choose Us</div>
        <h2 class="section-title">The RDA PowerTech Advantage</h2>
        <p class="section-sub">We don't just supply parts — we deliver trust, reliability, and expert support every step of the way.</p>
    </div>
    <div class="features-grid">
        <div class="feature-card fc-blue">
            <div class="feat-icon-wrap"><i class="fas fa-shield-halved"></i></div>
            <div class="feat-title">100% Genuine Products</div>
            <div class="feat-desc">All products are sourced directly from authorised manufacturers and distributors with full warranty.</div>
        </div>
        <div class="feature-card fc-purple">
            <div class="feat-icon-wrap"><i class="fas fa-file-invoice-dollar"></i></div>
            <div class="feat-title">Instant Quotation</div>
            <div class="feat-desc">Generate detailed, professional quotations in seconds — no waiting, no back-and-forth emails.</div>
        </div>
        <div class="feature-card fc-teal">
            <div class="feat-icon-wrap"><i class="fas fa-truck-fast"></i></div>
            <div class="feat-title">Fast PAN India Delivery</div>
            <div class="feat-desc">Express shipping available. Same-day dispatch for stocked items. Track your order in real time.</div>
        </div>
        <div class="feature-card fc-orange">
            <div class="feat-icon-wrap"><i class="fas fa-headset"></i></div>
            <div class="feat-title">Expert Technical Support</div>
            <div class="feat-desc">Our team of electrical engineers is always ready to help you choose the right product for your need.</div>
        </div>
    </div>
</section>

<!-- ===================== TESTIMONIALS ===================== -->
<section class="testimonials-section">
    <div class="section-header">
        <div class="section-badge"><i class="fas fa-quote-left"></i> Client Reviews</div>
        <h2 class="section-title">Words of Praise From Our Clients</h2>
        <p class="section-sub">Trusted by engineers, contractors, and industries across India.</p>
    </div>

    @php
    $testimonials = [
        ['name'=>'Rajesh Kumar','role'=>'Chief Electrical Engineer, Tata Projects','text'=>'RDA PowerTech has been our go-to supplier for over 5 years. The quality of their circuit breakers is unmatched, and the quotation system saves us hours every week.','stars'=>5,'color'=>'#1d4ed8','init'=>'RK'],
        ['name'=>'Priya Sharma','role'=>'Purchase Manager, L&T Construction','text'=>'Incredible service! We placed a bulk order for 200+ MCBs and they delivered within 24 hours. The online quotation PDF was perfect for our procurement team.','stars'=>5,'color'=>'#7c3aed','init'=>'PS'],
        ['name'=>'Anil Mehta','role'=>'Owner, Mehta Electrical Contractors','text'=>'Best prices in the market with genuine products. Their technical team helped us choose the right transformer for our industrial plant. Highly recommended!','stars'=>5,'color'=>'#0d9488','init'=>'AM'],
        ['name'=>'Suresh Patel','role'=>'Site Engineer, Shapoorji & Pallonji','text'=>'The product range is massive — everything from cables to panels under one roof. Fast delivery and easy returns. Will definitely order again.','stars'=>5,'color'=>'#ea580c','init'=>'SP'],
        ['name'=>'Kavitha Reddy','role'=>'MD, Reddy Power Solutions','text'=>'As a female entrepreneur in the electrical industry, I appreciate how RDA treats every customer professionally. Quick response and zero compromises on quality.','stars'=>5,'color'=>'#be185d','init'=>'KR'],
        ['name'=>'Mohammad Iqbal','role'=>'Electrical Supervisor, Ajman Factory','text'=>'We import our electrical requirements through RDA PowerTech. The pricing is competitive and they always provide ISI-certified products. Trust them completely.','stars'=>4,'color'=>'#1d4ed8','init'=>'MI'],
        ['name'=>'Deepak Joshi','role'=>'Consulting Engineer, Delhi','text'=>'The quotation feature is a game-changer! I can prepare client quotes in 2 minutes instead of spending hours. RDA is now part of every project I do.','stars'=>5,'color'=>'#7c3aed','init'=>'DJ'],
        ['name'=>'Sneha Nair','role'=>'Procurement Head, Infosys Campus','text'=>'Ordered 500+ modular switches for our new campus project. Received them in perfect condition with complete documentation. Zero defects, excellent packaging.','stars'=>5,'color'=>'#0d9488','init'=>'SN'],
    ];
    // Duplicate for seamless loop
    $row1 = array_merge(array_slice($testimonials, 0, 4), array_slice($testimonials, 0, 4));
    $row2 = array_merge(array_slice($testimonials, 4, 4), array_slice($testimonials, 4, 4));
    @endphp

    <!-- Row 1: Left to Right -->
    <div class="marquee-wrapper">
        <div class="marquee-track left-to-right">
            @foreach($row1 as $t)
            <div class="testi-card">
                <div class="testi-quote">"</div>
                <div class="testi-text">{{ $t['text'] }}</div>
                <div class="testi-stars">
                    {{ str_repeat('★', $t['stars']) }}{{ str_repeat('☆', 5 - $t['stars']) }}
                </div>
                <div class="testi-author">
                    <div class="testi-avatar" style="background:{{ $t['color'] }}">{{ $t['init'] }}</div>
                    <div>
                        <div class="testi-name">{{ $t['name'] }}</div>
                        <div class="testi-role">{{ $t['role'] }}</div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>

    <!-- Row 2: Right to Left -->
    <div class="marquee-wrapper">
        <div class="marquee-track right-to-left">
            @foreach($row2 as $t)
            <div class="testi-card">
                <div class="testi-quote">"</div>
                <div class="testi-text">{{ $t['text'] }}</div>
                <div class="testi-stars">
                    {{ str_repeat('★', $t['stars']) }}{{ str_repeat('☆', 5 - $t['stars']) }}
                </div>
                <div class="testi-author">
                    <div class="testi-avatar" style="background:{{ $t['color'] }}">{{ $t['init'] }}</div>
                    <div>
                        <div class="testi-name">{{ $t['name'] }}</div>
                        <div class="testi-role">{{ $t['role'] }}</div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>

<!-- ===================== CTA ===================== -->
<section class="cta-section">
    <div class="cta-inner">
        <h2>Ready to Get Your Quotation?</h2>
        <p>Add products to your quotation cart and generate a professional PDF quote in just a few clicks. No account needed.</p>
        <div class="cta-actions">
            <a href="{{ route('quotation') }}" class="btn btn-white"><i class="fas fa-file-invoice"></i> Generate Quotation</a>
            <a href="{{ route('contact') }}" class="btn" style="background:rgba(255,255,255,0.15);color:white;border:2px solid rgba(255,255,255,0.3)"><i class="fas fa-phone"></i> Talk to an Expert</a>
        </div>
    </div>
</section>

@endsection
