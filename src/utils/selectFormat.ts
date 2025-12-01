import type { ChartDataItem, Variation } from '../types/chart';

export function groupByWeek(
  data: ChartDataItem[],
  variations: Variation[]
): ChartDataItem[] {
  const weeks: Record<string, Record<string, number[]>> = {};

  data.forEach(item => {
    const weekKey = getWeekKey(item.date);
    
    if (!weeks[weekKey]) {
      weeks[weekKey] = {};
      variations.forEach(v => {
        weeks[weekKey][String(v.id ?? "0")] = [];
      });
    }

    variations.forEach(v => {
      const key = String(v.id ?? "0");
      const value = item[key];
      if (typeof value === 'number') {
        weeks[weekKey][key].push(value);
      }
    });
  });

  return Object.entries(weeks).map(([weekKey, weekData]) => {
    const result: ChartDataItem = { date: weekKey };
    
    Object.entries(weekData).forEach(([key, values]) => {
      result[key] = values.length > 0 
        ? Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100
        : 0;
    });
    
    return result;
  });
}

function getWeekKey(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDay();
  const daysToMonday = day === 0 ? -6 : 1 - day;
  
  const monday = new Date(date);
  monday.setDate(date.getDate() + daysToMonday);
  
  return monday.toISOString().split('T')[0];
}