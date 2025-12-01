import type { Variation } from '../../types/chart';
import type { ThemeColors } from './types';

export const THEME_COLORS: Record<string, ThemeColors> = {
  light: {
    bg: '#ffffff',
    text: '#111827',
    grid: '#e5e7eb',
    accent1: '#4f46e5',
    accent2: '#06b6d4',
    accent3: '#f97316',
  },
  dark: {
    bg: '#0d0d0d',
    text: '#f3f4f6',
    grid: '#1f2937',
    accent1: '#6366f1',
    accent2: '#22d3ee',
    accent3: '#fb923c',
  },
};

export const TYPE_MAP: Record<string, 'linear' | 'monotone'> = {
  line: 'linear',
  smooth: 'monotone',
  area: 'monotone',
};

export function hexToRgba(hex: string, alpha: number = 0.2): string {
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
  
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.slice(0, 2), 16);
    const g = parseInt(cleanHex.slice(2, 4), 16);
    const b = parseInt(cleanHex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  return hex;
}

export function getDisplayedVariations(
  variations: Variation[],
  selected: string | number
): Variation[] {
  if (selected === 'all') {
    return variations;
  }
  return variations.filter(v => String(v.id ?? '0') === selected);
}

export function getVariationColors(colors: ThemeColors): Record<string, string> {
  return {
    '0': colors.text,       
    '10001': colors.accent1, 
    '10002': colors.accent2, 
    '10003': colors.accent3,
  };
}