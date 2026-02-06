# Inventory Survey MVP - React/Next.js Structure

This is the complete React/Next.js version of the Inventory Survey MVP application.

## 📁 Project Structure

```
inventory-survey-mvp/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Dashboard (default route)
│   ├── globals.css              # Global styles + CSS variables
│   ├── dashboard/
│   │   └── page.tsx             # Dashboard page
│   ├── inventory/
│   │   └── page.tsx             # Inventory management page
│   ├── survey/
│   │   └── page.tsx             # Daily survey page
│   ├── analytics/
│   │   └── page.tsx             # Analytics page
│   └── export/
│       └── page.tsx             # Export page
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # App header with gradient
│   │   ├── Navigation.tsx       # Tab navigation
│   │   └── Sidebar.tsx          # Optional sidebar
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Table.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── EmptyState.tsx
│   ├── dashboard/
│   │   ├── StatCard.tsx
│   │   ├── ActivityList.tsx
│   │   └── QuickStats.tsx
│   ├── inventory/
│   │   ├── InventoryTable.tsx
│   │   ├── InventoryFilters.tsx
│   │   ├── InventoryModal.tsx
│   │   └── InventoryRow.tsx
│   ├── survey/
│   │   ├── SurveyForm.tsx
│   │   └── SurveyHistory.tsx
│   ├── analytics/
│   │   ├── CategoryChart.tsx
│   │   ├── SurveyTrendChart.tsx
│   │   ├── InventoryValueChart.tsx
│   │   └── AnalyticsSummary.tsx
│   └── export/
│       └── ExportPanel.tsx
├── hooks/
│   ├── useLocalStorage.ts       # localStorage hook
│   ├── useInventory.ts          # Inventory CRUD operations
│   └── useSurvey.ts             # Survey operations
├── context/
│   └── AppContext.tsx           # Global state management
├── types/
│   └── index.ts                 # TypeScript interfaces
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── exportUtils.ts           # Export functions (CSV, Excel, PDF, JSON)
├── data/
│   └── sampleData.ts            # Sample data for testing
└── public/
    └── ...                      # Static assets
```

## 🚀 Getting Started

### 1. Create Next.js Project

```bash
npx create-next-app@latest inventory-survey-mvp --typescript --tailwind --eslint --app --src-dir
```

### 2. Install Dependencies

```bash
npm install chart.js react-chartjs-2 xlsx html2pdf.js
npm install -D @types/xlsx
```

### 3. Copy Files

Copy all files from this structure into your project directory.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture Decisions

### State Management
- **React Context** for global state (AppContext.tsx)
- **Local Storage** for persistence
- **Custom Hooks** for data operations

### Component Pattern
- **Container/Presentational** pattern
- Each page has its own folder in `app/`
- Components are organized by feature

### Styling
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming (globals.css)
- **Responsive design** with mobile-first approach

## 📦 Component Breakdown

### Layout Components

#### Header.tsx
- Gradient background
- Title and subtitle
- Mobile menu toggle

#### Navigation.tsx
- Tab buttons for each section
- Active state styling
- Responsive (horizontal on desktop, possibly hamburger on mobile)

### UI Components

#### Button.tsx
Props: `variant`, `size`, `onClick`, `children`, `disabled`
Variants: primary, secondary, success, danger, outline

#### Card.tsx
Props: `title`, `children`, `className`
Container with white background, border, shadow

#### Modal.tsx
Props: `isOpen`, `onClose`, `title`, `children`
Overlay with centered content, close button, escape key handling

#### Table.tsx
Props: `columns`, `data`, `onRowClick`
Sortable columns, responsive horizontal scroll on mobile

#### Badge.tsx
Props: `variant`, `children`
Variants: success, warning, danger, default

### Feature Components

#### Dashboard Components
- **StatCard**: Big number + label + trend indicator
- **ActivityList**: Timestamped activity feed
- **QuickStats**: Small table with key metrics

#### Inventory Components
- **InventoryTable**: Main table with actions
- **InventoryFilters**: Search + category dropdown
- **InventoryModal**: Add/Edit form modal
- **InventoryRow**: Single row component

#### Survey Components
- **SurveyForm**: 3-question form with validation
- **SurveyHistory**: Table of recent responses

#### Analytics Components
- **CategoryChart**: Doughnut chart (Chart.js)
- **SurveyTrendChart**: Line chart
- **InventoryValueChart**: Horizontal bar chart
- **AnalyticsSummary**: 3 summary cards

## 🎨 Design System

### Colors (CSS Variables)
```css
--primary: #2563eb;
--primary-dark: #1e40af;
--success: #16a34a;
--warning: #ea580c;
--danger: #dc2626;
--bg: #f8fafc;
--text: #0f172a;
--text-light: #64748b;
--border: #e2e8f0;
```

### Typography
- **Font**: System font stack (Inter on Next.js)
- **Headings**: font-bold, larger sizes
- **Body**: text-base, text-gray-600

### Spacing
- **Container**: max-w-7xl, mx-auto, px-4 sm:px-6 lg:px-8
- **Card padding**: p-6
- **Grid gaps**: gap-4 sm:gap-6
- **Section margins**: mb-6

### Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: sm: (640px+)
- **Desktop**: lg: (1024px+)
- **Large**: xl: (1280px+)

## 🔄 Data Flow

```
User Action → Component → Hook → Context → localStorage
     ↑                                              ↓
   Update UI ← Context Update ← localStorage Change
```

All data operations go through:
1. UI Component triggers action
2. Custom hook handles logic
3. Updates Context state
4. Persists to localStorage
5. UI re-renders with new data

## 🧪 Testing

### Unit Tests
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### Test Structure
```
components/
├── ui/
│   └── Button.test.tsx
├── inventory/
│   └── InventoryTable.test.tsx
└── ...
```

## 📚 Additional Documentation

- See `IMPLEMENTATION.md` for feature details
- See `DEPLOYMENT.md` for deployment options
- See `inventory_survey_prompt.md` for AI prompts

## 📝 Next Steps

1. Set up project with `npx create-next-app`
2. Copy component files from this structure
3. Implement custom hooks
4. Add TypeScript types
5. Style with Tailwind
6. Test locally
7. Deploy to Vercel

---

**Status**: Ready for implementation
**Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
