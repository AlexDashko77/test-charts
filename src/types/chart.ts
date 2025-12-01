export interface RawVariation {
  id?: string | number;
  name: string;
}

export interface RawDataItem {
  date: string;
  visits: Record<string, number>;
  conversions: Record<string, number>;
}

export interface RawChartData {
  variations: RawVariation[];
  data: RawDataItem[];
}
export interface Variation {
  id?: string | number;
  name: string;
}
export type LineStyle = 'line' | 'smooth' | 'area';

export interface ThemeColors {
  bg: string;
  text: string;
  grid: string;
  accent1: string;
  accent2: string;
  accent3: string;
}

export interface ChartDataItem {
  date: string;
  [key: string]: string | number;
}

export type PreparedChartData = ChartDataItem[];