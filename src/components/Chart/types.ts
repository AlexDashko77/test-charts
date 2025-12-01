import type { Variation, ChartDataItem, LineStyle } from '../../types/chart';

export interface ThemeColors {
  bg: string;
  text: string;
  grid: string;
  accent1: string;
  accent2: string;
  accent3: string;
}

export interface ChartProps {
  data: ChartDataItem[];
  variations: Variation[];
  selected: string | number;
  lineStyle: LineStyle;
}

export interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color?: string;
  }>;
  label?: string;
  variations: Variation[];
  selected: string;
  variationColors: Record<string, string>;
  colors: ThemeColors;
}