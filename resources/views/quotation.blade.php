@extends('layouts.app')

@section('title', 'Quotation - RDA PowerTech | Generate Electrical Parts Quote')

@section('styles')
<style>
    .page-header {
        background: linear-gradient(135deg, var(--blue-800), var(--blue-700));
        padding: 48px 0; position: relative; overflow: hidden;
    }
    .page-header::before { content:'';position:absolute;top:-40px;right:-40px;width:300px;height:300px;background:rgba(255,255,255,0.04);border-radius:50%; }
    .page-header-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index:1; }
    .breadcrumb { display:flex; align-items:center; gap:8px; margin-bottom:14px; }
    .breadcrumb a { color:var(--blue-300); font-size:13px; text-decoration:none; }
    .breadcrumb span { color:rgba(255,255,255,0.4); font-size:13px; }
    .page-title { font-size:34px; font-weight:800; color:white; letter-spacing:-0.8px; margin-bottom:10px; }
    .page-subtitle { font-size:15px; color:var(--blue-200); }

    /* ============================================================ */
    .quotation-section { padding: 48px 0; }
    .quotation-inner {
        max-width: 1280px; margin: 0 auto; padding: 0 32px;
        display: grid; grid-template-columns: 1fr 380px; gap: 32px; align-items: start;
    }

    /* ===================== ADD PRODUCT PANEL ===================== */
    .add-product-card {
        background: white; border-radius: var(--radius-xl);
        border: 1px solid var(--gray-200); overflow: hidden;
        box-shadow: var(--shadow-sm);
    }
    .card-section-head {
        display: flex; align-items: center; gap: 10px;
        padding: 20px 24px; border-bottom: 1px solid var(--gray-100);
        background: var(--gray-50);
    }
    .card-section-head h2 { font-size: 17px; font-weight: 700; color: var(--gray-800); }
    .card-section-head i { color: var(--blue-500); }

    .add-product-body { padding: 24px; }

    /* Search to add */
    .product-search-add {
        display: flex; gap: 0;
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md);
        overflow: hidden; margin-bottom: 20px; transition: border-color 0.2s;
    }
    .product-search-add:focus-within { border-color: var(--blue-400); box-shadow: 0 0 0 3px var(--blue-100); }
    .product-search-add input {
        flex: 1; border: none; padding: 12px 14px;
        font-family: 'Inter', sans-serif; font-size: 14px; outline: none; color: var(--gray-700);
    }
    .product-search-add button {
        padding: 12px 18px; background: var(--blue-600); color: white; border: none;
        font-size: 14px; cursor: pointer; transition: background 0.2s;
    }
    .product-search-add button:hover { background: var(--blue-700); }

    /* Quick add suggestions */
    .quick-products { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 24px; }
    .quick-label { font-size: 12px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; grid-column: 1/-1; }
    .quick-product-card {
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md); padding: 12px;
        display: flex; flex-direction: column; gap: 6px;
        cursor: pointer; transition: all 0.2s;
    }
    .quick-product-card:hover { border-color: var(--blue-400); background: var(--blue-50); }
    .qp-name { font-size: 13px; font-weight: 600; color: var(--gray-700); }
    .qp-brand { font-size: 11px; color: var(--blue-600); font-weight: 600; text-transform: uppercase; }
    .qp-price { font-size: 14px; font-weight: 800; color: var(--gray-900); }
    .qp-add {
        display: flex; align-items: center; gap: 4px;
        font-size: 11px; color: var(--blue-600); font-weight: 700; margin-top: 4px;
    }

    /* ===================== QUOTE TABLE ===================== */
    .quote-table-area { margin-top: 24px; }
    .quote-table { width: 100%; border-collapse: collapse; }
    .quote-table th {
        background: var(--gray-50); text-align: left;
        padding: 12px 14px; font-size: 12px; font-weight: 700;
        color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.5px;
        border-bottom: 1px solid var(--gray-200);
    }
    .quote-table td { padding: 14px; font-size: 14px; color: var(--gray-700); border-bottom: 1px solid var(--gray-100); vertical-align: middle; }
    .quote-table tr:last-child td { border-bottom: none; }
    .quote-table tr:hover td { background: var(--blue-50); }

    .qty-control { display: flex; align-items: center; gap: 0; border: 1.5px solid var(--gray-200); border-radius: var(--radius-sm); overflow: hidden; width: fit-content; }
    .qty-btn { width: 28px; height: 28px; background: var(--gray-50); border: none; cursor: pointer; font-size: 14px; color: var(--gray-600); transition: all 0.15s; }
    .qty-btn:hover { background: var(--blue-50); color: var(--blue-600); }
    .qty-display { width: 36px; text-align: center; font-size: 13px; font-weight: 600; color: var(--gray-800); border-left: 1px solid var(--gray-200); border-right: 1px solid var(--gray-200); height: 28px; display: flex; align-items: center; justify-content: center; }

    .remove-btn {
        background: none; border: none; color: var(--gray-300); cursor: pointer;
        font-size: 14px; padding: 4px 8px; border-radius: var(--radius-sm);
        transition: all 0.2s;
    }
    .remove-btn:hover { color: #ef4444; background: #fff5f5; }

    .row-total { font-weight: 700; color: var(--gray-800); }

    .empty-quote {
        text-align: center; padding: 60px 20px; color: var(--gray-400);
    }
    .empty-quote i { font-size: 56px; display: block; margin-bottom: 16px; opacity: 0.3; }
    .empty-quote h3 { font-size: 18px; font-weight: 600; color: var(--gray-500); margin-bottom: 6px; }
    .empty-quote p { font-size: 14px; }

    /* ===================== QUOTE SUMMARY ===================== */
    .quote-summary-card {
        background: white; border-radius: var(--radius-xl);
        border: 1px solid var(--gray-200);
        position: sticky; top: 140px;
        box-shadow: var(--shadow-sm);
        overflow: hidden;
    }
    .qs-head {
        padding: 20px 24px; background: linear-gradient(135deg, var(--blue-700), var(--blue-600));
        display: flex; align-items: center; gap: 10px;
    }
    .qs-head h3 { font-size: 16px; font-weight: 700; color: white; }
    .qs-head i { color: rgba(255,255,255,0.8); }

    .qs-body { padding: 24px; }
    .qs-company { margin-bottom: 20px; }
    .qs-company label { font-size: 12px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px; }
    .qs-input {
        width: 100%; padding: 10px 12px;
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md);
        font-family: 'Inter', sans-serif; font-size: 13px; color: var(--gray-700); outline: none;
        transition: border-color 0.2s;
    }
    .qs-input:focus { border-color: var(--blue-400); box-shadow: 0 0 0 3px var(--blue-100); }

    .qs-divider { height: 1px; background: var(--gray-100); margin: 18px 0; }

    .qs-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .qs-label { font-size: 13px; color: var(--gray-500); }
    .qs-value { font-size: 14px; font-weight: 600; color: var(--gray-700); }
    .qs-total-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: var(--blue-50); border-radius: var(--radius-md); border: 1px solid var(--blue-100); margin-bottom: 20px; }
    .qs-total-label { font-size: 14px; font-weight: 700; color: var(--blue-800); }
    .qs-total-value { font-size: 22px; font-weight: 800; color: var(--blue-700); }

    .note-area label { font-size: 12px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px; }
    .note-area textarea {
        width: 100%; min-height: 70px; resize: none;
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md);
        font-family: 'Inter', sans-serif; font-size: 13px; color: var(--gray-700); outline: none; padding: 10px 12px;
        transition: border-color 0.2s;
    }
    .note-area textarea:focus { border-color: var(--blue-400); box-shadow: 0 0 0 3px var(--blue-100); }

    .gen-quote-btn {
        width: 100%; margin-top: 16px; padding: 15px;
        background: linear-gradient(135deg, var(--blue-700), var(--blue-600));
        color: white; border: none; border-radius: var(--radius-md);
        font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; cursor: pointer;
        display: flex; align-items: center; justify-content: center; gap: 10px;
        transition: all 0.22s; box-shadow: var(--shadow-blue);
    }
    .gen-quote-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,0.35); background: linear-gradient(135deg, var(--blue-800), var(--blue-700)); }

    .clear-btn {
        width: 100%; margin-top: 10px; padding: 10px;
        background: white; color: var(--gray-500);
        border: 1.5px solid var(--gray-200); border-radius: var(--radius-md);
        font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer;
        display: flex; align-items: center; justify-content: center; gap: 8px;
        transition: all 0.2s;
    }
    .clear-btn:hover { border-color: #fca5a5; color: #ef4444; background: #fff5f5; }

    /* ===================== PRINT QUOTATION ===================== */
    @media print {
        .navbar, footer, .page-header, .add-product-card .card-section-head ~ .add-product-body .product-search-add,
        .add-product-card .card-section-head ~ .add-product-body .quick-products,
        .quote-summary-card, .remove-btn, .qty-btn,
        .gen-quote-btn, .clear-btn, button { display: none !important; }

        body { background: white; font-size: 12px; }
        .quotation-inner { grid-template-columns: 1fr; }
        .print-header { display: block !important; }
    }

    .print-header {
        display: none;
        padding: 0 24px 20px;
        border-bottom: 2px solid var(--blue-200);
        margin-bottom: 20px;
    }
    .print-header h1 { font-size: 24px; font-weight: 800; color: var(--blue-800); }
    .print-header p { font-size: 13px; color: var(--gray-500); }

    @media (max-width: 1024px) {
        .quotation-inner { grid-template-columns: 1fr; }
        .quote-summary-card { position: static; }
    }
    @media (max-width: 640px) {
        .quotation-inner { padding: 0 16px; }
        .quick-products { grid-template-columns: 1fr; }
    }
</style>
@endsection

@section('content')

<div class="page-header">
    <div class="page-header-inner">
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Home</a>
            <span>/</span>
            <span style="color:rgba(255,255,255,0.7)">Quotation</span>
        </div>
        <h1 class="page-title">Generate Quotation</h1>
        <p class="page-subtitle">Build your list, fill in details, and generate a professional PDF quotation instantly.</p>
    </div>
</div>

<section class="quotation-section">
    <div class="quotation-inner">

        <!-- ============== LEFT: PRODUCT TABLE ============== -->
        <div>
            <div class="add-product-card">
                <!-- Print Header (shows only on print) -->
                <div class="print-header" id="printHeader">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start">
                        <div>
                            <h1>⚡ RDA PowerTech</h1>
                            <p>123, Industrial Estate, Andheri East, Mumbai – 400093<br>Phone: +91 12345 67890 | Email: info@rdapowertech.com</p>
                        </div>
                        <div style="text-align:right">
                            <div style="font-size:20px;font-weight:800;color:var(--blue-700)">QUOTATION</div>
                            <div style="font-size:13px;color:var(--gray-500)" id="printQuoteNo">Quote #RDA-001</div>
                            <div style="font-size:13px;color:var(--gray-500)" id="printDate"></div>
                        </div>
                    </div>
                    <div style="margin-top:16px;padding:12px;background:#f0f7ff;border-radius:8px">
                        <div style="font-size:12px;font-weight:700;color:var(--gray-500);text-transform:uppercase;">Bill To</div>
                        <div id="printCompanyName" style="font-size:15px;font-weight:700;color:var(--gray-800)"></div>
                    </div>
                </div>

                <div class="card-section-head">
                    <i class="fas fa-microchip"></i>
                    <h2>Add Products to Quotation</h2>
                </div>
                <div class="add-product-body">
                    <div class="product-search-add">
                        <input type="text" id="quickSearchInput" placeholder="Type product name or part number to add…" autocomplete="off">
                        <button type="button" id="quickAddBtn"><i class="fas fa-plus"></i></button>
                    </div>

                    <div class="quick-products">
                        <div class="quick-label">Popular Products — Click to Add</div>
                        @php
                        $popularProducts = [
                            ['id'=>'p1','name'=>'MCB Single Pole 16A','brand'=>'Schneider','price'=>485],
                            ['id'=>'p2','name'=>'RCCB 40A 30mA 4P','brand'=>'ABB','price'=>2880],
                            ['id'=>'p3','name'=>'Contactor 25A 240V','brand'=>'L&T','price'=>1640],
                            ['id'=>'p4','name'=>'MCCB 100A 3P 25kA','brand'=>'Schneider','price'=>18500],
                            ['id'=>'p5','name'=>'Modular Switch 16A','brand'=>'Legrand','price'=>320],
                            ['id'=>'p6','name'=>'FR Cable 4 Sqmm (100m)','brand'=>'Havells','price'=>3200],
                        ];
                        @endphp
                        @foreach($popularProducts as $pp)
                        <div class="quick-product-card"
                             onclick="addProductToQuote('{{$pp['id']}}','{{$pp['name']}}','{{$pp['brand']}}',{{$pp['price']}})">
                            <div class="qp-brand">{{ $pp['brand'] }}</div>
                            <div class="qp-name">{{ $pp['name'] }}</div>
                            <div class="qp-price">₹{{ number_format($pp['price']) }}</div>
                            <div class="qp-add"><i class="fas fa-plus-circle"></i> Add to Quote</div>
                        </div>
                        @endforeach
                    </div>

                    <!-- Quote Table -->
                    <div class="quote-table-area">
                        <div id="emptyQuote" class="empty-quote">
                            <i class="fas fa-file-invoice"></i>
                            <h3>Your quotation is empty</h3>
                            <p>Click on any product above or browse the <a href="{{ route('products') }}" style="color:var(--blue-600)">product catalog</a> to add items.</p>
                        </div>
                        <table class="quote-table" id="quoteTable" style="display:none">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Brand</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="quoteTableBody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============== RIGHT: SUMMARY ============== -->
        <div class="quote-summary-card">
            <div class="qs-head">
                <i class="fas fa-file-invoice-dollar"></i>
                <h3>Quotation Summary</h3>
            </div>
            <div class="qs-body">
                <div class="qs-company">
                    <label>Your Company Name</label>
                    <input type="text" class="qs-input" id="companyNameInput" placeholder="e.g. Acme Industries Pvt. Ltd.">
                </div>
                <div class="qs-company">
                    <label>Contact Person</label>
                    <input type="text" class="qs-input" id="contactPersonInput" placeholder="e.g. Rahul Sharma">
                </div>
                <div class="qs-company">
                    <label>Phone / Email</label>
                    <input type="text" class="qs-input" id="contactDetailInput" placeholder="e.g. +91 98765 43210">
                </div>

                <div class="qs-divider"></div>

                <div class="qs-row">
                    <span class="qs-label">Items</span>
                    <span class="qs-value" id="totalItems">0 items</span>
                </div>
                <div class="qs-row">
                    <span class="qs-label">Subtotal</span>
                    <span class="qs-value" id="subtotalDisplay">₹0</span>
                </div>
                <div class="qs-row">
                    <span class="qs-label">GST @ 18%</span>
                    <span class="qs-value" id="gstDisplay">₹0</span>
                </div>

                <div class="qs-divider"></div>

                <div class="qs-total-row">
                    <span class="qs-total-label">Grand Total (incl. GST)</span>
                    <span class="qs-total-value" id="grandTotalDisplay">₹0</span>
                </div>

                <div class="note-area">
                    <label>Notes / Special Requirements</label>
                    <textarea id="notesInput" placeholder="Delivery address, special requirements, validity, etc."></textarea>
                </div>

                <button class="gen-quote-btn" onclick="generateQuotation()">
                    <i class="fas fa-print"></i> Generate & Print Quotation
                </button>
                <button class="clear-btn" onclick="clearQuote()">
                    <i class="fas fa-trash-alt"></i> Clear Quotation
                </button>
            </div>
        </div>
    </div>
</section>

@endsection

@section('scripts')
<script>
// ============ Quotation Logic ============
let quoteItems = JSON.parse(sessionStorage.getItem('quoteItems') || '[]');
let quoteCounter = 1;

// Render on load
renderQuote();

function addProductToQuote(id, name, brand, price) {
    const existing = quoteItems.find(i => i.id === id);
    if (existing) {
        existing.qty = parseInt(existing.qty) + 1;
    } else {
        quoteItems.push({ id, name, brand, price: parseFloat(price), qty: 1 });
    }
    saveAndRender();
}

function removeItem(id) {
    quoteItems = quoteItems.filter(i => i.id !== id);
    saveAndRender();
}

function changeQty(id, delta) {
    const item = quoteItems.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, parseInt(item.qty) + delta);
    saveAndRender();
}

function saveAndRender() {
    sessionStorage.setItem('quoteItems', JSON.stringify(quoteItems));
    renderQuote();
}

function renderQuote() {
    const tbody = document.getElementById('quoteTableBody');
    const emptyEl = document.getElementById('emptyQuote');
    const tableEl = document.getElementById('quoteTable');

    if (quoteItems.length === 0) {
        emptyEl.style.display = 'block';
        tableEl.style.display = 'none';
        updateSummary(0, 0);
        return;
    }

    emptyEl.style.display = 'none';
    tableEl.style.display = 'table';

    let subtotal = 0;
    tbody.innerHTML = '';

    quoteItems.forEach((item, idx) => {
        const rowTotal = item.price * item.qty;
        subtotal += rowTotal;
        tbody.innerHTML += `
        <tr>
            <td style="color:var(--gray-400)">${idx + 1}</td>
            <td style="font-weight:600;color:var(--gray-800)">${item.name}</td>
            <td><span style="font-size:11px;font-weight:700;color:var(--blue-600);text-transform:uppercase">${item.brand}</span></td>
            <td>₹${parseFloat(item.price).toLocaleString('en-IN')}</td>
            <td>
                <div class="qty-control">
                    <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
                    <div class="qty-display">${item.qty}</div>
                    <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </td>
            <td class="row-total">₹${rowTotal.toLocaleString('en-IN')}</td>
            <td><button class="remove-btn" onclick="removeItem('${item.id}')" title="Remove"><i class="fas fa-times"></i></button></td>
        </tr>
        `;
    });

    updateSummary(subtotal, quoteItems.length);
}

function updateSummary(subtotal, count) {
    const gst = subtotal * 0.18;
    const grand = subtotal + gst;
    document.getElementById('totalItems').textContent = count + (count === 1 ? ' item' : ' items');
    document.getElementById('subtotalDisplay').textContent = '₹' + subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2});
    document.getElementById('gstDisplay').textContent = '₹' + gst.toLocaleString('en-IN', {minimumFractionDigits: 2});
    document.getElementById('grandTotalDisplay').textContent = '₹' + grand.toLocaleString('en-IN', {minimumFractionDigits: 2});
}

function clearQuote() {
    if (quoteItems.length === 0) return;
    if (confirm('Clear all items from the quotation?')) {
        quoteItems = [];
        saveAndRender();
    }
}

function generateQuotation() {
    if (quoteItems.length === 0) {
        alert('Please add at least one product to generate a quotation.');
        return;
    }
    const companyName = document.getElementById('companyNameInput').value || 'Customer';
    const quoteNo = 'RDA-' + String(Date.now()).slice(-6);
    const today = new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });

    document.getElementById('printHeader').style.display = 'block';
    document.getElementById('printQuoteNo').textContent = 'Quote #' + quoteNo;
    document.getElementById('printDate').textContent = 'Date: ' + today;
    document.getElementById('printCompanyName').textContent = companyName;

    window.print();
}

// Quick add button
document.getElementById('quickAddBtn').addEventListener('click', function() {
    const val = document.getElementById('quickSearchInput').value.trim();
    if (!val) return;
    const id = 'custom-' + Date.now();
    addProductToQuote(id, val, 'Custom', 0);
    document.getElementById('quickSearchInput').value = '';
});
document.getElementById('quickSearchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.getElementById('quickAddBtn').click();
});
</script>
@endsection
