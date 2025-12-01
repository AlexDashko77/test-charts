import type { ChartDataItem } from '../types/chart';

export function applyZoom(
  data: ChartDataItem[], 
  zoom: number
): ChartDataItem[] {
  if (zoom <= 1 || !data.length) {
    return data;
  }

  const zoomFactors: Record<number, number> = {
    1: 1,    
    2: 0.7,   
    3: 0.5,   
  };

  const factor = zoomFactors[zoom] ?? 1;
  const visibleCount = Math.floor(data.length * factor);
  
  return data.slice(-visibleCount);
}