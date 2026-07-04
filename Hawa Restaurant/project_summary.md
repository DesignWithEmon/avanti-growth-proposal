# Hawa Restaurant — Project Summary

This document outlines all the development work, features, and systems created for the **Hawa Restaurant & Party Centre** project to date.

---

## 1. Main Website Frontend (UI/UX)
Built a premium, luxurious, and fully responsive static website tailored for a high-end dining experience in Mymensingh.

* **Design Aesthetics:**
  * Dark theme (`#070707`) with elegant champagne gold (`#c5a880`) accents.
  * Modern UI/UX patterns including Glassmorphism (frosted glass effects).
  * Animated aurora background with floating gradient waves.
  * Cormorant Garamond (serif) + Inter (sans-serif) font pairing.
* **Core Sections:**
  * **Animated Header:** Sticky blur-effect navigation bar with language toggle (EN/BN).
  * **Hero Section:** Full-screen hero with parallax steak image and gold CTA buttons.
  * **Features Grid:** 3 cards — In-House Party, Outdoor Catering, Buffet Setup — with glass hover effects.
  * **Featured Menu:** 3 featured dishes with image, price badge, and category links.
  * **Interactive Menu Page:** Filterable food menu (Appetizers, Soups, Fast Food, Chinese Fusion, Bengali Cuisine, Desserts) with search, ratings, and "Add to Cart" functionality.
  * **Chef's Specials Callout:** Interior background section for event space promotion.
  * **Testimonials:** Guest review with star ratings.
  * **Booking Page:** Dual-tab form — Dining Table booking + Party Centre Hall booking with full event details.
  * **Gallery Page:** Scanned menu slideshow (16 pages) with thumbnails + Restaurant ambience photo grid with lightbox.
  * **Contact Page:** Info cards + contact form + Google Maps directions link.
  * **Tubelight Navigation:** Floating bottom navbar with tubelight glow effect.
* **Deployment:** Ready for Vercel (`vercel.json` configured — no build step needed).

## 2. Admin Dashboard (Operator Portal)
Developed a secure, dedicated portal for restaurant operators to manage the business in real-time.

* **Security:**
  * Implemented `admin/login.html` requiring admin password (`Hawa@Admin2026`).
  * Unauthorized users are automatically redirected to the login page.
  * Session-based auth using sessionStorage.
* **Features & Tabs:**
  * **Live Orders (🔴):** Real-time monitoring of incoming customer orders, including customer details, items list, and total price. Status management — Confirm → Preparing → Ready → Delivered → Cancel.
  * **Stats Dashboard:** Total orders, new orders count, today's orders, total revenue.
  * **Table Reservations (📅):** View and manage both dining table and event hall booking requests. Status — Pending → Confirm → Complete → Cancel.
  * **Menu Stock Control (🍔):** Toggle switches for ALL 55+ menu items to mark as "In Stock" or "Out of Stock". Items marked Out of Stock instantly grey out on the main website with a red badge and disabled Add button.
* **Design:** Perfectly matched with the main website's dark, professional champagne gold theme with glassmorphism cards.

## 3. Serverless Backend (Vercel APIs)
Created lightweight Node.js Serverless Functions to bridge the frontend and the WhatsApp bot without needing a heavy traditional server.

* **Endpoints Created:**
  * `POST /api/orders` — Receives orders from the website cart checkout.
  * `GET /api/orders` — Fetches orders with optional filters (status, since, limit).
  * `POST /api/reservations` — Handles both table and event booking requests.
  * `GET /api/reservations` — Fetches reservations with optional filters (type, status, since, limit).
  * `POST /api/menu_stock` — Updates stock status for individual menu items (admin only).
  * `GET /api/menu_stock` — Returns current stock status for all items.
  * `POST /api/admin_auth` — Verifies admin password for dashboard login.
  * `POST /api/order_status` — Updates order status (Confirm/Prepare/Ready/Deliver/Cancel).
  * `POST /api/reservation_status` — Updates reservation status (Confirm/Complete/Cancel).
* **Architecture:** Uses in-memory storage (shared across endpoints via `_store.js`). Keeps last 200 orders/reservations. Password-protected admin endpoints.

## 4. WhatsApp Automation System
Built a completely custom, local Node.js bot using `whatsapp-web.js` to handle customer communication and business alerts.

* **Polling Architecture:**
  * The bot securely queries the Vercel APIs every 10 seconds to fetch new orders or reservations.
* **Core Capabilities:**
  * **Auto-Responder:** Automatically replies to customer messages based on keyword detection — Menu, Location, Hours, Booking, Contact, Greetings, Thanks.
  * **Customer Confirmations:** Sends a beautifully formatted WhatsApp receipt to the customer the moment they place an order or book a table on the website.
  * **Owner Alerts:** Sends an instant notification to the owner's WhatsApp number (`8801705036161`) whenever a new order or reservation is received.
  * **Multi-language Support:** Auto-reply messages in both English and Bengali-friendly format.
  * **Reconnection:** Auto-restarts on disconnect with 5-second delay.
* **Local Management:**
  * `Start_WhatsApp_Bot.bat` — Double-click to launch the bot.
  * `Install_Bot_Deps.bat` — One-time dependency installer.
  * QR code scanning via WhatsApp Linked Devices (one-time setup).

## 5. Website → API Integration
The main website is now fully connected to the backend:

* **Cart Checkout:** When a user clicks "Proceed to Table Booking", their cart items are automatically submitted to `POST /api/orders` before redirecting to the booking page.
* **Booking Forms:** Both Dining Table and Party Centre Hall forms submit to `POST /api/reservations`. The API-generated booking ID is displayed in the confirmation modal.
* **Menu Stock Sync:** The menu page fetches stock status from `GET /api/menu_stock` on every render. Out-of-stock items show with reduced opacity, red "Out of Stock" badge, and a disabled button.

---

## Project Structure
```
Hawa Restaurant/
├── index.html                    # Homepage
├── menu.html                     # Interactive menu page
├── booking.html                  # Reservations page
├── gallery.html                  # Photo gallery + scanned menu
├── contact.html                  # Contact page
├── style.css                     # Main stylesheet (1923 lines)
├── main.js                       # Frontend logic (translations, cart, API integration)
├── menu-data.js                  # 55+ menu items with EN/BN names
├── vercel.json                   # Vercel deployment config
├── assets/
│   ├── logo.svg                  # Restaurant logo
│   ├── hawa_hero_steak.png       # Hero background
│   └── hawa_interior.png         # Interior photo
├── Hawa menu/                    # Scanned menu sheets (16 JPGs)
├── api/                          # Serverless API
│   ├── package.json
│   ├── _store.js                 # Shared in-memory storage
│   ├── orders.js                 # Order CRUD
│   ├── reservations.js           # Reservation CRUD
│   ├── menu_stock.js             # Stock management
│   ├── admin_auth.js             # Login auth
│   ├── order_status.js           # Order status updates
│   └── reservation_status.js     # Reservation status updates
├── admin/                        # Operator dashboard
│   ├── login.html                # Password-protected login
│   └── dashboard.html            # Full admin panel
├── bot/                          # WhatsApp automation
│   ├── package.json
│   └── bot.js                    # WhatsApp bot (whatsapp-web.js)
├── Start_WhatsApp_Bot.bat        # One-click bot launcher
└── Install_Bot_Deps.bat          # Dependency installer
```

---

## Key Credentials
| Item | Value |
|------|-------|
| Admin Dashboard Password | `Hawa@Admin2026` |
| Owner WhatsApp | `8801705036161` (Hotline) |
| Facebook | `facebook.com/hawatheplace` |
| Email | `hawatheplace@gmail.com` |
| Address | Near Dhaka bypass, Maskanda Road, Mymensingh |

---

## Deployment Checklist
1. **Deploy to Vercel** — Push entire folder to Vercel (or connect GitHub repo). The `vercel.json` is already configured.
2. **Update API Base in Bot** — Edit `bot/bot.js` line ~50: change `API_BASE` to the actual Vercel URL.
3. **Install Bot Dependencies** — Double-click `Install_Bot_Deps.bat` or run `npm install` inside `bot/`.
4. **Start WhatsApp Bot** — Double-click `Start_WhatsApp_Bot.bat`, scan QR code with WhatsApp.
5. **Access Admin Dashboard** — Go to `https://your-vercel-url.vercel.app/admin/login.html`, password: `Hawa@Admin2026`.

---

## Future Enhancement Opportunities
1. **Permanent Database (Firebase/Supabase):** Replace in-memory storage for persistent order history.
2. **Cloud Bot Hosting (VPS/Railway):** Move WhatsApp bot to 24/7 cloud server.
3. **Custom Domain:** Link to a `.com` or `.com.bd` domain.
4. **Dynamic Pricing Control:** Allow admins to update prices from dashboard.
5. **Analytics Dashboard:** Charts, trends, and monthly revenue reports.
6. **SMS Notifications:** Twilio integration as WhatsApp fallback.
