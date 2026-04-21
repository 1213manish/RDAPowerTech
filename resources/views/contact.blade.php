@extends('layouts.app')

@section('title', 'Contact Us - RDA PowerTech')

@section('styles')
<style>
/* ============================================================
   CONTACT PAGE — Split Layout
============================================================ */
.contact-page {
    min-height: calc(100vh - 68px);
    display: grid;
    grid-template-columns: 1fr 1.1fr;
}

/* ============================================================
   LEFT PANEL — Radar / decoration side
============================================================ */
.contact-left {
    background: linear-gradient(160deg, var(--blue-800) 0%, var(--blue-900) 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 48px;
    min-height: 700px;
}

/* Background subtle grid */
.contact-left::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
}

.left-content {
    position: relative; z-index: 2;
    text-align: center;
    width: 100%;
}

.left-content h2 {
    font-size: 32px;
    font-weight: 800;
    color: white;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
}
.left-content p {
    font-size: 15px;
    color: var(--blue-200);
    line-height: 1.65;
    margin-bottom: 40px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
}

/* === RADAR / CONCENTRIC CIRCLES === */
.radar-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto 40px;
}

/* Rings */
.radar-ring {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.12);
    animation: radar-pulse 3s ease-in-out infinite;
}
.radar-ring:nth-child(1) { width: 80px;  height: 80px;  border-color: rgba(99,179,237,0.5); animation-delay: 0s; }
.radar-ring:nth-child(2) { width: 140px; height: 140px; border-color: rgba(99,179,237,0.3); animation-delay: 0.4s; }
.radar-ring:nth-child(3) { width: 200px; height: 200px; border-color: rgba(99,179,237,0.2); animation-delay: 0.8s; }
.radar-ring:nth-child(4) { width: 260px; height: 260px; border-color: rgba(99,179,237,0.1); animation-delay: 1.2s; }
.radar-ring:nth-child(5) { width: 300px; height: 300px; border-color: rgba(99,179,237,0.06); animation-delay: 1.6s; }

@keyframes radar-pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

/* Center dot */
.radar-center {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 36px; height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--blue-400), var(--blue-600));
    box-shadow: 0 0 0 6px rgba(96,165,250,0.2), 0 0 0 14px rgba(96,165,250,0.1);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 16px;
    z-index: 2;
    animation: center-pulse 2s ease-in-out infinite;
}
@keyframes center-pulse {
    0%, 100% { box-shadow: 0 0 0 6px rgba(96,165,250,0.2), 0 0 0 14px rgba(96,165,250,0.1); }
    50% { box-shadow: 0 0 0 10px rgba(96,165,250,0.25), 0 0 0 22px rgba(96,165,250,0.08); }
}

/* Rotating sweep line */
.radar-sweep {
    position: absolute;
    top: 50%; left: 50%;
    width: 50%; height: 1px;
    transform-origin: 0 50%;
    background: linear-gradient(90deg, rgba(96,165,250,0.7), transparent);
    animation: sweep 4s linear infinite;
}
@keyframes sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* Floating avatar dots on rings */
.radar-avatar {
    position: absolute;
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 800;
    color: white;
    border: 2px solid rgba(255,255,255,0.4);
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    cursor: default;
    transition: transform 0.3s;
    animation: avatar-float 3s ease-in-out infinite;
    z-index: 3;
}
.radar-avatar:hover { transform: scale(1.15) !important; }

/* Positions around rings */
.ra-1 { top: calc(50% - 70px - 20px); left: calc(50% - 20px); background: #1d4ed8; animation-delay: 0s; }
.ra-2 { top: calc(50% - 20px); left: calc(50% + 70px - 20px); background: #7c3aed; animation-delay: 0.5s; }
.ra-3 { top: calc(50% + 70px - 20px); left: calc(50% - 20px); background: #0d9488; animation-delay: 1s; }
.ra-4 { top: calc(50% - 100px - 20px); left: calc(50% - 100px - 20px + 30px); background: #ea580c; animation-delay: 0.3s; }
.ra-5 { top: calc(50% + 100px - 20px ); left: calc(50% + 100px - 20px - 30px); background: #be185d; animation-delay: 0.8s; }
.ra-6 { top: calc(50% - 20px); left: calc(50% - 130px - 20px); background: #0284c7; animation-delay: 1.3s; }

@keyframes avatar-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

/* Avatar tooltip */
.radar-avatar[data-name]::after {
    content: attr(data-name);
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%; transform: translateX(-50%);
    background: rgba(15,23,42,0.9);
    color: white;
    font-size: 10px; font-weight: 600;
    padding: 3px 8px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
}
.radar-avatar:hover::after { opacity: 1; }

/* Info pills below radar */
.left-info-pills {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}
.info-pill {
    display: flex; align-items: center; gap: 14px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: var(--radius-md);
    padding: 12px 16px;
    transition: all 0.2s;
}
.info-pill:hover { background: rgba(255,255,255,0.1); border-color: rgba(96,165,250,0.3); }
.ip-icon {
    width: 36px; height: 36px;
    border-radius: var(--radius-sm);
    background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 14px; flex-shrink: 0;
}
.ip-text {}
.ip-label { font-size: 10px; font-weight: 700; color: var(--blue-300); text-transform: uppercase; letter-spacing: 0.7px; }
.ip-value { font-size: 13px; font-weight: 600; color: white; }

/* ============================================================
   RIGHT PANEL — Form
============================================================ */
.contact-right {
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 48px;
}

.contact-form-wrap {
    width: 100%;
    max-width: 520px;
}

.form-eyebrow {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 14px;
    background: var(--blue-100); color: var(--blue-700);
    border-radius: 999px; font-size: 12px; font-weight: 700;
    letter-spacing: 0.5px; margin-bottom: 20px;
    border: 1px solid var(--blue-200);
}

.form-title {
    font-size: 36px;
    font-weight: 900;
    color: var(--gray-900);
    letter-spacing: -1px;
    margin-bottom: 8px;
    line-height: 1.1;
}
.form-subtitle {
    font-size: 15px;
    color: var(--gray-500);
    margin-bottom: 36px;
    line-height: 1.6;
}

.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-field  { margin-bottom: 16px; }

.field-label {
    display: block;
    font-size: 12px; font-weight: 700;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 7px;
}
.field-label .req { color: var(--blue-500); }

.field-input, .field-select, .field-textarea {
    width: 100%;
    padding: 13px 16px;
    border: 1.5px solid var(--gray-200);
    border-radius: var(--radius-md);
    background: white;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--gray-800);
    outline: none;
    transition: all 0.2s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.field-input::placeholder, .field-textarea::placeholder { color: var(--gray-400); }
.field-input:focus, .field-select:focus, .field-textarea:focus {
    border-color: var(--blue-500);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    background: white;
}
.field-select {
    appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 14px center;
    padding-right: 40px;
}
.field-textarea { min-height: 110px; resize: vertical; }

/* Privacy checkbox */
.privacy-row {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 24px;
}
.privacy-cb { width: 16px; height: 16px; margin-top: 2px; accent-color: var(--blue-600); cursor: pointer; flex-shrink: 0; }
.privacy-label { font-size: 13px; color: var(--gray-500); line-height: 1.5; }
.privacy-label a { color: var(--blue-600); text-decoration: underline; }

.submit-btn {
    width: 100%; padding: 15px;
    background: linear-gradient(135deg, var(--blue-700), var(--blue-600));
    color: white; border: none; border-radius: var(--radius-md);
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
    transition: all 0.22s;
    box-shadow: 0 4px 20px rgba(37,99,235,0.25);
}
.submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37,99,235,0.35); background: linear-gradient(135deg, var(--blue-800), var(--blue-700)); }
.submit-btn i { font-size: 16px; }

/* Success msg */
.success-banner {
    display: none;
    background: linear-gradient(135deg, #dcfce7, #f0fdf4);
    border: 1px solid #bbf7d0;
    border-radius: var(--radius-md);
    padding: 16px 20px;
    margin-top: 16px;
    align-items: center; gap: 12px;
}
.success-banner i { font-size: 20px; color: #16a34a; }
.success-banner span { font-size: 14px; font-weight: 600; color: #15803d; }

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
    .contact-page { grid-template-columns: 1fr; }
    .contact-left { min-height: 400px; padding: 48px 32px; }
    .radar-container { width: 240px; height: 240px; }
    .radar-ring:nth-child(4) { width: 220px; height: 220px; }
    .radar-ring:nth-child(5) { display: none; }
    .contact-right { padding: 48px 32px; }
}
@media (max-width: 640px) {
    .form-grid-2 { grid-template-columns: 1fr; }
    .contact-right { padding: 32px 20px; }
    .form-title { font-size: 28px; }
    .left-info-pills { display: none; }
}
</style>
@endsection

@section('content')

<div class="contact-page">

    <!-- ========== LEFT: RADAR PANEL ========== -->
    <div class="contact-left">
        <div class="left-content">
            <h2>We're Here to Help</h2>
            <p>Reach out to our team of electrical experts. We respond within 24 hours on business days.</p>

            <!-- RADAR -->
            <div class="radar-container">
                <!-- Rings -->
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>

                <!-- Sweep -->
                <div class="radar-sweep"></div>

                <!-- Center -->
                <div class="radar-center"><i class="fas fa-bolt"></i></div>

                <!-- Floating Avatars -->
                <div class="radar-avatar ra-1" data-name="Rahul S.">RS</div>
                <div class="radar-avatar ra-2" data-name="Priya M.">PM</div>
                <div class="radar-avatar ra-3" data-name="Anil K.">AK</div>
                <div class="radar-avatar ra-4" data-name="Deepa R.">DR</div>
                <div class="radar-avatar ra-5" data-name="Suresh P.">SP</div>
                <div class="radar-avatar ra-6" data-name="Kavita N.">KN</div>
            </div>

            <!-- Info Pills -->
            <div class="left-info-pills">
                <div class="info-pill">
                    <div class="ip-icon"><i class="fas fa-phone"></i></div>
                    <div class="ip-text">
                        <div class="ip-label">Call Us</div>
                        <div class="ip-value">+91 12345 67890</div>
                    </div>
                </div>
                <div class="info-pill">
                    <div class="ip-icon"><i class="fas fa-envelope"></i></div>
                    <div class="ip-text">
                        <div class="ip-label">Email Us</div>
                        <div class="ip-value">info@rdapowertech.com</div>
                    </div>
                </div>
                <div class="info-pill">
                    <div class="ip-icon"><i class="fas fa-clock"></i></div>
                    <div class="ip-text">
                        <div class="ip-label">Business Hours</div>
                        <div class="ip-value">Mon–Sat: 9 AM – 6 PM</div>
                    </div>
                </div>
                <div class="info-pill">
                    <div class="ip-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="ip-text">
                        <div class="ip-label">Location</div>
                        <div class="ip-value">Andheri East, Mumbai</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ========== RIGHT: FORM PANEL ========== -->
    <div class="contact-right">
        <div class="contact-form-wrap">

            <div class="form-eyebrow"><i class="fas fa-paper-plane"></i> Get In Touch</div>
            <h1 class="form-title">Contact us</h1>
            <p class="form-subtitle">Reach out and we'll get back to you within 24 hours.</p>

            <form id="contactForm" novalidate>
                @csrf
                <div class="form-grid-2">
                    <div>
                        <label class="field-label">First name <span class="req">*</span></label>
                        <input id="f_firstname" type="text" class="field-input" placeholder="First name" required>
                    </div>
                    <div>
                        <label class="field-label">Last name <span class="req">*</span></label>
                        <input id="f_lastname" type="text" class="field-input" placeholder="Last name" required>
                    </div>
                </div>

                <div class="form-field">
                    <label class="field-label">Email <span class="req">*</span></label>
                    <input id="f_email" type="email" class="field-input" placeholder="Email address" required>
                </div>

                <div class="form-grid-2">
                    <div>
                        <label class="field-label">Company Name</label>
                        <input id="f_company" type="text" class="field-input" placeholder="Your company">
                    </div>
                    <div>
                        <label class="field-label">Phone Number</label>
                        <input id="f_phone" type="tel" class="field-input" placeholder="+91 98765 43210">
                    </div>
                </div>

                <div class="form-grid-2">
                    <div>
                        <label class="field-label">Subject <span class="req">*</span></label>
                        <select id="f_subject" class="field-select" required>
                            <option value="">Select topic…</option>
                            <option>Product Enquiry</option>
                            <option>Request for Quotation</option>
                            <option>Technical Support</option>
                            <option>Bulk Order</option>
                            <option>Partnership</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="field-label">Location</label>
                        <select id="f_location" class="field-select">
                            <option>Select state…</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Gujarat</option>
                            <option>Rajasthan</option>
                            <option>Uttar Pradesh</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div class="form-field">
                    <label class="field-label">Message <span class="req">*</span></label>
                    <textarea id="f_message" class="field-textarea" placeholder="Leave us a message…" required></textarea>
                </div>

                <div class="privacy-row">
                    <input type="checkbox" id="f_privacy" class="privacy-cb" required>
                    <label for="f_privacy" class="privacy-label">
                        You agree to our friendly <a href="#">privacy policy</a>.
                    </label>
                </div>

                <button type="submit" class="submit-btn" id="submitBtn">
                    <i class="fas fa-paper-plane"></i> Send Message
                </button>

                <div class="success-banner" id="successBanner">
                    <i class="fas fa-check-circle"></i>
                    <span>Message sent! Our team will contact you within 24 hours.</span>
                </div>
            </form>

        </div>
    </div>

</div>

@endsection

@section('scripts')
<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const privacy = document.getElementById('f_privacy');
    if (!privacy.checked) {
        privacy.style.outline = '2px solid #ef4444';
        return;
    }
    privacy.style.outline = '';

    const btn = document.getElementById('submitBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    setTimeout(() => {
        const banner = document.getElementById('successBanner');
        banner.style.display = 'flex';
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
        this.reset();
    }, 1800);
});
</script>
@endsection
