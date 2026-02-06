# Inventory Survey MVP - AI Prompt Specification

**Use this prompt with Claude, ChatGPT, or other LLMs to regenerate, customize, or extend the application.**

---

## Quick Start Prompt

```
Regenerating from this specification:

Build a complete, single-file inventory management and daily survey application with the following requirements:

## Core Requirements

1. **Technology Stack**
   - Framework/Language: [HTML/CSS/JS | React/Next.js | Vue | Flutter | etc.]
   - Storage: [localStorage | Firebase | MongoDB | PostgreSQL | etc.]
   - UI Framework: [Bootstrap | Tailwind | Material-UI | etc.]

2. **Data Models**
   - Inventory Items: SKU, Name, Category (Electronics/Furniture/Supplies/Clothing/Other), Quantity, Unit Price, Location, Reorder Level, Notes, Created Date
   - Survey Responses: Question 1 (Accuracy 1-5), Question 2 (Stock-outs: yes/no/partial), Question 3 (Performance 1-5), Comments, Timestamp
   - Activity Log: Message, Type (info/success/warning), Timestamp

3. **Dashboard Section**
   - Real-time stat boxes: Total Items, Inventory Value, Low Stock Count, Survey Responses
   - Quick stats table: Total Categories, Avg Item Price, Locations Used, Last Survey Date
   - Recent activity feed (last 50 actions)

4. **Inventory Management Section**
   - Add/Edit/Delete items with modal forms
   - Search by SKU or product name
   - Filter by category
   - Full inventory table showing: SKU, Name, Category, Quantity, Price, Total Value, Location, Status badge
   - Low stock highlighting (when qty <= reorder level)

5. **Daily Survey Section**
   - 3-question form (Q1: 1-5 rating, Q2: dropdown, Q3: 1-5 rating)
   - Optional comments field
   - Response history table with last 20 entries
   - Timestamp tracking for all responses

6. **Analytics Dashboard**
   - Category distribution (doughnut chart)
   - Survey accuracy trend (line chart by date)
   - Top 10 items by inventory value (bar chart)
   - Summary statistics (total value, avg rating, response count)

7. **Export Functionality**
   - CSV export with proper escaping
   - Excel/XLSX export with multiple sheets
   - PDF export with professional layout
   - JSON export with full data structure
   - Optional date range filtering for exports

8. **Design Requirements**
   - Responsive mobile-first design
   - Professional UI with modern styling
   - Color scheme: Primary blue (#2563eb), Success green (#16a34a), Warning orange, Danger red
   - Navigation tabs for each section
   - Modal forms for adding/editing items

9. **Features**
   - Load sample data button (5 demo items, 5 demo surveys)
   - Clear all data button with confirmation
   - Activity logging for all major actions
   - Real-time updates without page refresh
   - Input validation on all forms

10. **Deployment**
    - Should work on static hosting (GitHub Pages, Vercel, Netlify)
    - No backend server required (if using localStorage)
    - Fully functional offline
    - Files: index.html, optional CSS/JS files if needed

## Output Requirements

- Complete, production-ready code
- No TODOs or placeholder functionality
- All features fully implemented and tested
- Clean, maintainable code with comments
- Mobile responsive (test on 320px and up)
- Performance optimized

Generate this application now:
```

---

## Customization Prompts

### Add Authentication

```
Update the Inventory Survey MVP to include:

1. User registration and login
2. JWT-based authentication (or Firebase Auth)
3. Each user has isolated data
4. "Logout" button in header
5. Protected routes/sections
6. Persistent session (remember me option)

Implement this using [Firebase/Auth0/NextAuth.js/Custom JWT]
```

### Switch to React

```
Convert the inventory survey MVP from vanilla HTML/JS to React with the following structure:

1. Create React components:
   - Dashboard.jsx
   - InventoryTable.jsx
   - InventoryForm.jsx
   - SurveyForm.jsx
   - Analytics.jsx
   - Export.jsx

2. State management: [useState/useContext | Redux | Zustand]
3. Styling: [Tailwind CSS | Material-UI | styled-components]
4. Package all in Next.js with:
   - API routes for data (if using backend)
   - Static export support for GitHub Pages
   - Mobile-responsive

5. Keep all original features:
   - Dashboard with real-time stats
   - Inventory CRUD
   - Survey collection
   - Analytics charts
   - Multi-format export

Generate the complete React/Next.js application:
```

### Add Backend Database

```
Extend the Inventory Survey MVP with a Node.js/Express backend and database:

1. Backend Stack:
   - Node.js + Express
   - Database: PostgreSQL (or MongoDB)
   - ORM: Prisma or Mongoose
   - Authentication: JWT

2. Create API endpoints:
   - POST /api/inventory - Create item
   - GET /api/inventory - List items
   - PUT /api/inventory/:id - Update item
   - DELETE /api/inventory/:id - Delete item
   - POST /api/surveys - Create survey
   - GET /api/surveys - List surveys
   - GET /api/analytics - Get aggregated stats

3. Database schema:
   - users table
   - inventory_items table (with user_id foreign key)
   - surveys table (with user_id foreign key)
   - activity_logs table

4. Frontend:
   - Replace localStorage with API calls
   - Add error handling and retry logic
   - Loading states and optimistic updates
   - Keep all existing UI features

5. Deploy:
   - Backend: Heroku, Railway, or AWS
   - Frontend: Vercel or Netlify

Generate complete backend and updated frontend:
```

### Add Real-time Collaboration

```
Add real-time multi-user collaboration to the Inventory Survey MVP:

1. Technology: WebSockets (Socket.io) or Firebase Realtime DB
2. Features:
   - Multiple users can view/edit inventory simultaneously
   - Live updates when others make changes
   - Conflict resolution for simultaneous edits
   - User presence indicators
   - Comment threads on items

3. UI Updates:
   - Show active users in header
   - Highlight items being edited by others
   - Toast notifications for real-time events
   - Merge conflicts dialog if needed

Implement using [Firebase | Socket.io + Node.js]:
```

### Add Barcode Scanning

```
Integrate barcode/QR code scanning into the Inventory Survey MVP:

1. Libraries: [jsQR | QuaggaJS | html5-qrcode]
2. Features:
   - Camera-based QR code scanning
   - Manual barcode input fallback
   - Auto-populate SKU field when scanning
   - Link QR code to inventory item
   - Generate QR codes for items

3. Workflows:
   - Scan to add/update item
   - Scan to take inventory count
   - Scan to receive shipment

4. Mobile-optimized camera UI

Implement barcode scanning now:
```

### Add Email Notifications

```
Add email notification system to Inventory Survey MVP:

1. Setup:
   - Email service: SendGrid or Mailgun
   - Scheduler: node-cron or AWS Lambda

2. Notification Types:
   - Daily survey reminder email
   - Low stock alerts
   - Daily inventory report
   - Weekly summary
   - Admin notifications for critical events

3. Features:
   - User email preferences/subscription settings
   - Customizable email templates (HTML)
   - Scheduled sends
   - Unsubscribe links

4. Implementation:
   - Backend API to send emails
   - User settings UI
   - Email templates
   - Cron jobs for scheduled sends

Implement email notification system:
```

### Add Mobile App

```
Convert Inventory Survey MVP to a mobile app:

1. Framework: [React Native | Flutter | Kotlin | Swift]
2. Features:
   - All features from web version
   - Barcode/QR scanning
   - Offline-first capability with sync
   - Push notifications
   - Home screen widgets
   - Background survey reminders

3. Platforms:
   - iOS
   - Android
   - Option: Cross-platform with React Native

4. Stores:
   - App Store
   - Google Play

Generate the mobile app:
```

### Add Machine Learning Predictions

```
Add predictive analytics to Inventory Survey MVP:

1. Predictions:
   - Forecast demand for each item
   - Predict optimal reorder quantities
   - Identify slow-moving inventory
   - Anomaly detection for unusual inventory changes

2. Implementation:
   - Backend: Python with scikit-learn or TensorFlow
   - Model: Time series forecasting (ARIMA/Prophet)
   - Trigger: Monthly recalculation

3. UI:
   - Forecast charts on dashboard
   - Recommended reorder levels
   - Trend analysis for each item
   - Inventory optimization suggestions

4. Data:
   - Train on historical inventory and survey data
   - Use survey accuracy as a feature

Add ML predictions:
```

### Add Dark Mode

```
Add dark mode support to Inventory Survey MVP:

1. Features:
   - Toggle button in header
   - Persist preference to localStorage
   - Automatic system theme detection
   - Smooth color transitions

2. Colors:
   - Dark background (#1e293b)
   - Dark cards (#0f172a)
   - Light text (#f1f5f9)
   - Maintain contrast ratios

3. Implementation:
   - CSS variables for all colors
   - data-theme attribute on body
   - Media query: prefers-color-scheme

Add dark mode:
```

---

## Advanced Customization Template

```
For highly custom requirements, use this template:

# Inventory Survey MVP - Custom Build

## Changes from Original
1. [List specific changes]

## New Features to Add
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

## Technology Stack
- Frontend: [Your choice]
- Backend: [Your choice]
- Database: [Your choice]
- Storage: [Your choice]

## Design Requirements
- [Design system or theme]
- [Color palette]
- [Typography]
- [Component library]

## Data Model Changes
- [Additional fields]
- [New tables/collections]
- [Relationships]

## Integration Requirements
- [External APIs]
- [Third-party services]
- [Webhooks]

## Performance Requirements
- [Load time targets]
- [Concurrent users]
- [Data volume]

## Security Requirements
- [Authentication type]
- [Authorization model]
- [Data encryption]
- [Compliance standards]

Build this custom version:
```

---

## Usage Instructions

1. **Choose your prompt** from above based on what you want to do
2. **Copy the relevant prompt text**
3. **Paste into Claude, ChatGPT, or other LLM**
4. **Add any specific customizations** (your company name, colors, features, etc.)
5. **Generate the code**
6. **Deploy and test**

## Tips

- **Be specific**: Add details about your requirements (colors, frameworks, features)
- **Include context**: Explain why you need certain features
- **Ask for explanations**: Request comments and documentation
- **Iterate**: Generate, test, then ask for improvements
- **Version control**: Keep each iteration in git

## Example Full Prompt

```
I need an inventory and survey management application with the following specs:

1. **Tech Stack**:
   - Frontend: React 18 with Vite
   - Backend: Node.js + Express
   - Database: PostgreSQL with Prisma
   - Styling: Tailwind CSS

2. **Company Branding**:
   - Primary color: #0066cc (company blue)
   - Logo URL: https://example.com/logo.png
   - Company name: "Acme Corp"

3. **Additional Features**:
   - Multi-tenant support (different companies)
   - Department-level permissions
   - Advanced reporting with charts
   - Barcode scanning integration
   - Email notifications for low stock

4. **Data**:
   - 50,000+ inventory items
   - 10,000+ daily survey responses
   - 100+ concurrent users

5. **Deployment**:
   - Docker containerization
   - AWS deployment ready
   - CI/CD with GitHub Actions

6. **Security**:
   - OAuth2 single sign-on
   - Row-level security in database
   - Audit logging

Generate the complete application with all these requirements:
```

---

## Support

For questions about extending this MVP:
1. Check IMPLEMENTATION.md for architecture details
2. Review the original index.html for code patterns
3. Refer to the customization prompts above
4. Create issues on GitHub with specific questions

---

**Last Updated**: February 2026  
**Status**: Ready for AI-assisted regeneration and extension
