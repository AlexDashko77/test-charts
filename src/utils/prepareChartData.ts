import type { 
  RawChartData, 
  RawVariation, 
  RawDataItem, 
  ChartDataItem,
  PreparedChartData 
} from '../types/chart';


export function prepareChartData(raw: RawChartData): PreparedChartData {
  const variationKeys = getVariationKeys(raw.variations);
  return raw.data.map(item => 
    createChartDataItem(item, variationKeys)
  );
}

function getVariationKeys(variations: RawVariation[]): string[] {
  return variations.map(variation => 
    String(variation.id ?? "0")
  );
}

function createChartDataItem(
  item: RawDataItem, 
  variationKeys: string[]
): ChartDataItem {
  const result: ChartDataItem = {
    date: item.date
  };
  
  variationKeys.forEach(key => {
    const visits = item.visits[key] ?? 0;
    const conversions = item.conversions[key] ?? 0;
    
    result[key] = calculateConversionRate(visits, conversions);
  });
  
  return result;
}

function calculateConversionRate(visits: number, conversions: number): number {
  if (visits <= 0) return 0;
  const cr = (conversions / visits) * 100;
  return Math.round(cr * 100) / 100;
}