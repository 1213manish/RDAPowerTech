<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="RDA PowerTech - Your trusted electrical parts & components supplier. Get instant quotations for all your electrical component needs.">
    <title>@yield('title', 'RDA PowerTech - Electrical Parts Supplier')</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <style>
        /* ============================================
           CSS RESET & BASE
        ============================================ */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Inter', sans-serif;
            background: #f0f4f8;
            color: #1a2332;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* ============================================
           CSS VARIABLES
        ============================================ */
        :root {
            --blue-900: #0a1628;
            --blue-800: #0d2144;
            --blue-700: #1a3a6b;
            --blue-600: #1d4ed8;
            --blue-500: #2563eb;
            --blue-400: #3b82f6;
            --blue-300: #60a5fa;
            --blue-200: #bfdbfe;
            --blue-100: #dbeafe;
            --blue-50:  #eff6ff;
            --white: #ffffff;
            --gray-50: #f8fafc;
            --gray-100: #f1f5f9;
            --gray-200: #e2e8f0;
            --gray-300: #cbd5e1;
            --gray-400: #94a3b8;
            --gray-500: #64748b;
            --gray-600: #475569;
            --gray-700: #334155;
            --gray-800: #1e293b;
            --gray-900: #0f172a;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
            --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
            --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
            --shadow-blue: 0 4px 20px rgba(37,99,235,0.18);
            --radius-sm: 6px;
            --radius-md: 10px;
            --radius-lg: 16px;
            --radius-xl: 24px;
        }

        /* ============================================
           NAVBAR
        ============================================ */
        .navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255,255,255,0.97);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--gray-200);
            box-shadow: 0 2px 20px rgba(37,99,235,0.08);
        }
        .navbar-inner {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 32px;
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .navbar-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
        }
        .brand-logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--blue-600), var(--blue-400));
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-blue);
        }
        .brand-logo i { color: white; font-size: 18px; }
        .brand-name {
            font-size: 22px;
            font-weight: 800;
            background: linear-gradient(135deg, var(--blue-700), var(--blue-500));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.5px;
        }
        .brand-tagline {
            font-size: 10px;
            color: var(--gray-400);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .navbar-nav {
            display: flex;
            align-items: center;
            gap: 4px;
            list-style: none;
        }
        .nav-link {
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 9px 18px;
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--gray-600);
            font-size: 14px;
            font-weight: 500;
            transition: all 0.22s ease;
            position: relative;
        }
        .nav-link:hover {
            background: var(--blue-50);
            color: var(--blue-600);
        }
        .nav-link.active {
            background: var(--blue-50);
            color: var(--blue-600);
            font-weight: 600;
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -17px;
            left: 18px;
            right: 18px;
            height: 2px;
            background: var(--blue-500);
            border-radius: 2px 2px 0 0;
        }
        .nav-cta {
            margin-left: 12px;
            background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
            color: var(--white) !important;
            border-radius: var(--radius-md);
            padding: 9px 20px !important;
            font-weight: 600 !important;
            box-shadow: var(--shadow-blue);
            transition: all 0.22s ease !important;
        }
        .nav-cta:hover {
            background: linear-gradient(135deg, var(--blue-700), var(--blue-600)) !important;
            transform: translateY(-1px);
            box-shadow: 0 6px 24px rgba(37,99,235,0.28) !important;
            color: var(--white) !important;
        }

        /* Hamburger */
        .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 8px;
            border-radius: var(--radius-sm);
            background: none;
            border: none;
        }
        .hamburger span {
            display: block;
            width: 24px;
            height: 2px;
            background: var(--gray-700);
            border-radius: 2px;
            transition: all 0.3s;
        }

        /* ============================================
           MAIN CONTENT
        ============================================ */
        .main-content { flex: 1; }

        /* ============================================
           FOOTER
        ============================================ */
        footer {
            background: linear-gradient(160deg, var(--blue-900) 0%, var(--blue-800) 100%);
            color: var(--gray-300);
            padding: 64px 0 0;
            margin-top: auto;
        }
        .footer-grid {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 32px;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 48px;
        }
        .footer-brand .brand-name-footer {
            font-size: 26px;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 12px;
        }
        .footer-brand p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--gray-400);
            margin-bottom: 24px;
            max-width: 300px;
        }
        .footer-social { display: flex; gap: 10px; }
        .social-btn {
            width: 38px; height: 38px;
            border-radius: 50%;
            background: rgba(255,255,255,0.08);
            display: flex; align-items: center; justify-content: center;
            color: var(--gray-300);
            text-decoration: none;
            font-size: 15px;
            transition: all 0.22s;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .social-btn:hover { background: var(--blue-600); color: white; border-color: var(--blue-600); transform: translateY(-2px); }

        .footer-col h4 {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--white);
            margin-bottom: 20px;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a {
            color: var(--gray-400);
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .footer-col ul li a:hover { color: var(--blue-300); }
        .footer-col ul li a i { font-size: 12px; }

        .footer-bottom {
            max-width: 1280px;
            margin: 40px auto 0;
            padding: 20px 32px;
            border-top: 1px solid rgba(255,255,255,0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
        }
        .footer-bottom p { font-size: 13px; color: var(--gray-500); }
        .footer-bottom a { color: var(--blue-400); text-decoration: none; }

        /* ============================================
           UTILITY CLASSES
        ============================================ */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            border-radius: var(--radius-md);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.22s ease;
            border: none;
            text-decoration: none;
            font-family: 'Inter', sans-serif;
        }
        .btn-primary {
            background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
            color: white;
            box-shadow: var(--shadow-blue);
        }
        .btn-primary:hover { background: linear-gradient(135deg, var(--blue-700), var(--blue-600)); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,0.30); }
        .btn-outline {
            background: transparent;
            color: var(--blue-600);
            border: 2px solid var(--blue-200);
        }
        .btn-outline:hover { background: var(--blue-50); border-color: var(--blue-400); }
        .btn-white {
            background: white;
            color: var(--blue-700);
        }
        .btn-white:hover { background: var(--blue-50); transform: translateY(-2px); }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 32px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 12px;
            background: var(--blue-100);
            color: var(--blue-700);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        /* ============================================
           RESPONSIVE
        ============================================ */
        @media (max-width: 768px) {
            .navbar-inner { padding: 0 20px; }
            .hamburger { display: flex; }
            .navbar-nav {
                display: none;
                position: absolute;
                top: 68px;
                left: 0; right: 0;
                background: white;
                border-bottom: 1px solid var(--gray-200);
                flex-direction: column;
                padding: 12px 20px 20px;
                gap: 4px;
                box-shadow: var(--shadow-md);
            }
            .navbar-nav.open { display: flex; }
            .nav-link.active::after { display: none; }
            .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
            .container { padding: 0 20px; }
            .footer-grid { padding: 0 20px; }
            .footer-bottom { padding: 20px; }
        }
        @media (max-width: 480px) {
            .footer-grid { grid-template-columns: 1fr; }
        }
    </style>

    @yield('styles')
</head>
<body>

    <!-- ===================== NAVBAR ===================== -->
    <nav class="navbar" id="navbar">
        <div class="navbar-inner">
            <a href="{{ route('home') }}" class="navbar-brand">
                <div class="brand-logo">
                    <i class="fas fa-bolt"></i>
                </div>
                <div>
                    <div class="brand-name">RDA</div>
                    <div class="brand-tagline">PowerTech</div>
                </div>
            </a>

            <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>

            <ul class="navbar-nav" id="navMenu">
                <li>
                    <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" id="nav-home">
                        <i class="fas fa-house"></i> Home
                    </a>
                </li>
                <li>
                    <a href="{{ route('products') }}" class="nav-link {{ request()->routeIs('products') ? 'active' : '' }}" id="nav-products">
                        <i class="fas fa-microchip"></i> Products
                    </a>
                </li>
                <li>
                    <a href="{{ route('contact') }}" class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}" id="nav-contact">
                        <i class="fas fa-envelope"></i> Contact Us
                    </a>
                </li>
                <li>
                    <a href="{{ route('quotation') }}" class="nav-link nav-cta" id="nav-quote">
                        <i class="fas fa-file-invoice"></i> Get Quotation
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- ===================== MAIN ===================== -->
    <main class="main-content">
        @yield('content')
    </main>

    <!-- ===================== FOOTER ===================== -->
    <footer>
        <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
                <div class="brand-name-footer">⚡ RDA PowerTech</div>
                <p>Your trusted partner for high-quality electrical components and parts. Serving industries with reliability, speed, and expert support since 2010.</p>
                <div class="footer-social">
                    <a href="#" class="social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="{{ route('home') }}"><i class="fas fa-chevron-right"></i> Home</a></li>
                    <li><a href="{{ route('products') }}"><i class="fas fa-chevron-right"></i> Products</a></li>
                    <li><a href="{{ route('quotation') }}"><i class="fas fa-chevron-right"></i> Get Quotation</a></li>
                    <li><a href="{{ route('contact') }}"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div class="footer-col">
                <h4>Categories</h4>
                <ul>
                    <li><a href="{{ route('products') }}?category=circuit-breakers"><i class="fas fa-chevron-right"></i> Circuit Breakers</a></li>
                    <li><a href="{{ route('products') }}?category=transformers"><i class="fas fa-chevron-right"></i> Transformers</a></li>
                    <li><a href="{{ route('products') }}?category=cables"><i class="fas fa-chevron-right"></i> Cables & Wires</a></li>
                    <li><a href="{{ route('products') }}?category=switches"><i class="fas fa-chevron-right"></i> Switches</a></li>
                    <li><a href="{{ route('products') }}?category=motors"><i class="fas fa-chevron-right"></i> Motors</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:+911234567890"><i class="fas fa-phone"></i> +91 123 456 7890</a></li>
                    <li><a href="mailto:info@rdapowertech.com"><i class="fas fa-envelope"></i> info@rdapowertech.com</a></li>
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> Mumbai, Maharashtra</a></li>
                    <li><a href="#"><i class="fas fa-clock"></i> Mon–Sat: 9AM – 6PM</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ date('Y') }} RDA PowerTech. All rights reserved.</p>
            <p>Built with ❤️ for the electrical industry</p>
        </div>
    </footer>

    <!-- ===================== JS ===================== -->
    <script>
        // Hamburger menu toggle
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navMenu = document.getElementById('navMenu');
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 4px 30px rgba(37,99,235,0.12)';
            } else {
                navbar.style.boxShadow = '0 2px 20px rgba(37,99,235,0.08)';
            }
        });
    </script>

    @yield('scripts')
</body>
</html>
