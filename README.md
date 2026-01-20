# Inventory Survey MVP

Complete, ready-to-deploy **inventory management + survey** MVP with real-time analytics, export, and local persistence.

## ✅ Features Implemented
- **Dashboard**: Real-time stats (total items, inventory value, low stock alerts, survey count)
- **Inventory Management**: Add/edit/delete items, search, filter by category, track SKU, quantity, location, pricing
- **Survey Collection**: Daily 3-question survey with timestamp tracking and comment fields
- **Analytics Dashboard**: Category distribution, survey accuracy trends, inventory value breakdown
- **Export Functionality**: CSV, Excel (XLSX), PDF, JSON formats with date range selection
- **Responsive Design**: Mobile-optimized, works on all devices
- **Local Storage**: All data persists across browser sessions
- **Sample Data**: Pre-loaded demo data for immediate testing

## 🧱 Tech Stack
- Single-file HTML/JS/CSS (no backend required)
- LocalStorage for persistence
- Minimal external libs only for export and charts
- Fully client-side, deployable to any static hosting (GitHub Pages, Vercel, Netlify)

## 🚀 How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/Gzeu/inventory-survey-mvp.git
   cd inventory-survey-mvp
   ```
2. Open the main HTML file in your browser (or serve with any static server):
   ```bash
   # Example using VS Code Live Server, http-server, or simple Python server
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```
3. Click **"Load Sample Data"** inside the app.
4. Test flows: add items → take survey → view analytics → export data.

## 🧪 Core User Flows
- **Flow 1 – Add Inventory Item**: Add new SKU with quantity, location, and pricing, see it immediately in dashboard and tables.
- **Flow 2 – Daily Survey**: Open daily survey, answer 3 quick questions + optional comments, responses logged with timestamps.
- **Flow 3 – Analytics**: View charts for category distribution, survey trends, and inventory value.
- **Flow 4 – Export**: Export filtered data to CSV, Excel, PDF, or JSON with optional date range.

## 🔧 Customization Ideas
- Replace `localStorage` with real DB (Firebase, Supabase, PostgreSQL, MongoDB).
- Add authentication and multi-user support.
- Integrate with e-commerce/ERP APIs (Shopify, WooCommerce, custom REST).
- Add barcode/QR scanning for faster stock updates.
- Extend survey module with more question types and logic.

## 📄 Prompt Spec
A complete prompt spec for regenerating or extending this MVP with AI is kept in `inventory_survey_prompt.md`. Use it with tools like Cursor, Claude, or ChatGPT to:
- Regenerate the UI with a different design system.
- Switch tech stack (React/Next.js, Vue, Svelte, etc.).
- Auto-generate backend + database schema.

---

PRs and extensions are welcome. This repo is meant as a solid starting point for inventory + survey tools.
