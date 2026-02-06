// TypeScript interfaces for Inventory Survey MVP

export interface InventoryItem {
  id: number;
  sku: string;
  name: string;
  category: Category;
  quantity: number;
  price: number;
  location: string;
  reorderLevel: number;
  notes?: string;
  createdAt: string;
}

export type Category = 'Electronics' | 'Furniture' | 'Supplies' | 'Clothing' | 'Other';

export const CATEGORIES: Category[] = [
  'Electronics',
  'Furniture',
  'Supplies',
  'Clothing',
  'Other'
];

export interface SurveyResponse {
  id: number;
  q1: string; // 1-5
  q2: 'yes' | 'no' | 'partial';
  q3: string; // 1-5
  comments?: string;
  timestamp: string;
  date: string;
}

export interface Activity {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
}

export interface AppState {
  inventory: InventoryItem[];
  surveys: SurveyResponse[];
  activities: Activity[];
}

export interface DashboardStats {
  totalItems: number;
  inventoryValue: number;
  lowStockCount: number;
  surveyCount: number;
  totalCategories: number;
  avgPrice: number;
  locationsCount: number;
  lastSurvey: string | null;
}

export interface ExportOptions {
  fromDate?: Date;
  toDate?: Date;
  includeInventory: boolean;
  includeSurveys: boolean;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
    fill?: boolean;
  }[];
}
