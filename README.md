# RDA PowerTech - Brand Website

A high-performance B2B website for **RDA PowerTech** (Electrical Components Supplier).

---

## Technical Stack & Architecture
- **Frontend**: React (Vite) + Vanilla CSS (Glassmorphism design, responsive layouts, responsive product catalog with specification modals and interactive quotation builder).
- **Backend**: PHP (REST API) for processing contact requests, product catalog queries, and quotation submissions.
- **Database**: MySQL (Hostinger compatible with PDO connection and table schemas).

---

## Directory Overview

```
RDAnew/
├── database.sql           # Database schema & sample product seed data
├── backend/               # PHP API endpoints for Hostinger
│   ├── config.php         # DB credentials & CORS setup
│   ├── db.php             # PDO database connection script
│   ├── products.php       # Products API
│   ├── quotation.php      # Quotation submission API
│   └── contact.php        # Contact message submission API
└── frontend/              # React frontend application
    ├── src/
    │   ├── components/    # Header & Footer components
    │   ├── pages/         # Home, Products, Quotation, About, Contact
    │   ├── data/          # Seed data & standalone fallbacks
    │   ├── index.css      # Custom design system
    │   └── App.jsx        # Routing & Quotation Cart state
    └── dist/              # Production static build files ready for Hostinger
```

---

## How to Host on Hostinger (Step-by-Step)

### Step 1: Set Up MySQL Database on Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **Databases** -> **MySQL Databases**.
3. Create a new database (e.g. `rda_powertech`) and create a database user with a strong password.
4. Click **Enter phpMyAdmin** next to your database.
5. Select your database, click the **Import** tab, upload the `database.sql` file from this project root, and click **Go**.

### Step 2: Configure PHP Backend
1. Open `backend/config.php` and update the database credentials to match your Hostinger database:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'your_hostinger_db_name');
   define('DB_USER', 'your_hostinger_db_user');
   define('DB_PASS', 'your_hostinger_db_password');
   ```
2. Upload the contents of the `backend/` folder into a subfolder named `api` inside your Hostinger `public_html/` directory (so files are accessible at `yourdomain.com/api/products.php`, etc.).

### Step 3: Build & Deploy React Frontend
1. Open terminal in the `frontend` folder and run:
   ```bash
   npm run build
   ```
2. Open the `frontend/dist/` directory.
3. Upload all files inside `frontend/dist/` directly into your Hostinger `public_html/` root directory.

---

## Local Development Setup

To test locally on your computer:
1. **Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
2. **Backend** (Optional PHP local test server):
   ```bash
   cd backend
   php -S localhost:8000
   ```

---

## Features Built
1. **Landing Page (Home)**: Hero section, brand showcase for all 9 specified brands (Phoenix Contact, Eaton, L&T, Mitsubishi, Siemens, Schneider, Yaskawa, Solar DB, Telergon), categories grid, and quotation CTAs.
2. **Our Products**:
   - Sidebar on the left listing category names (e.g. MCB, Switchgears, Drives, Contactors, Solar DB, Isolators, Power Supplies).
   - Product grid on the right displaying products matching the selected category.
   - Pop-up modal when clicking any product to show technical specifications, complete description, and an **Arrow Back** button to return to the catalog.
3. **Quotation Generation Page**:
   - Takes input fields: Name, Phone Number, Email, Company Name, and Remarks.
   - Displays items added to the quotation cart with quantity modifiers.
   - Custom part addition option to request pricing for unlisted part codes.
   - Generates a unique quotation reference number upon submission.
4. **About Us Page**:
   - Past collaborations details (Solar Grid Integration, Plant Automation, Switchgear Assemblies, OEM Machinery).
   - Key stats: 500+ Clients Served, 10,000+ Parts Delivered, 9+ Global Brands.
5. **Contact Us Page**:
   - Blank placeholder blocks for Address, Phone, Email, and Working Hours ready for you to input later.
   - Send Email Message contact form.
