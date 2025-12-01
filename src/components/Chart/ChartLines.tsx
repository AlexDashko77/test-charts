import { Line, Area } from 'recharts';
import type { Variation } from '../../types/chart';
import { hexToRgba, TYPE_MAP } from './utils';

interface ChartLinesProps {
  variations: Variation[];
  lineStyle: string;
  variationColors: Record<string, string>;
  backgroundColor: string;
}

export function ChartLines({ 
  variations, 
  lineStyle, 
  variationColors, 
  backgroundColor 
}: ChartLinesProps) {
  return (
    <>
      {variations.map((variation) => {
        const key = String(variation.id ?? '0');
        const color = variationColors[key] || '#888';

        if (lineStyle === 'area') {
          return (
            <Area
              key={key}
              dataKey={key}
              stroke={color}
              fill={hexToRgba(color, 0.18)}
              strokeWidth={2}
              type="monotone"
              dot={false}
              activeDot={{ 
                r: 6,
                fill: color,
                stroke: backgroundColor,
                strokeWidth: 2 
              }}
            />
          );
        }

        return (
          <Line
            key={key}
            type={TYPE_MAP[lineStyle] || 'monotone'}
            dataKey={key}
            stroke={color}
            strokeWidth={3}
            dot={false}
            activeDot={{ 
              r: 6,
              fill: color,
              stroke: backgroundColor,
              strokeWidth: 2 
            }}
          />
        );
      })}
    </>
  );
}