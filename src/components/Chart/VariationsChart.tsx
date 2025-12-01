import { useMemo } from 'react';
import {
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import type { ChartProps } from './types';
import { 
  THEME_COLORS, 
  getDisplayedVariations, 
  getVariationColors 
} from './utils';
import { ChartEmpty } from './ChartEmpty';
import { ChartAxes } from './ChartAxes';
import { ChartLines } from './ChartLines';
import { CustomTooltip } from './Tooltip';
import styles from './Chart.module.css';
import { useTheme } from '../../hooks/useTheme';

export default function VariationsChart({
  data,
  variations,
  selected,
  lineStyle,
}: ChartProps) {
  const { theme } = useTheme();
  
  const colors = THEME_COLORS[theme];

  const variationColors = useMemo(() => 
    getVariationColors(colors), 
    [colors]
  );

  const displayed = useMemo(() => 
    getDisplayedVariations(variations, selected), 
    [variations, selected]
  );

  if (!data || data.length === 0) {
    return <ChartEmpty theme={theme} textColor={colors.text} />;
  }

  return (
    <div 
      id="chart-export-container" 
      className={`${styles.chartWrapper} ${styles[theme]}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart 
          data={data} 
          margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={colors.grid}
            strokeOpacity={0.6}
          />

          <ChartAxes textColor={colors.text} />

          <Tooltip 
            content={
              <CustomTooltip 
                variations={variations} 
                selected={selected}
                variationColors={variationColors}
                colors={colors}
              />
            }
          />

          <ChartLines 
            variations={displayed}
            lineStyle={lineStyle}
            variationColors={variationColors}
            backgroundColor={colors.bg}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}