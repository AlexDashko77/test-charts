import type { ThemeColors, Variation } from '../../types/chart';
import styles from './Chart.module.css';


interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color?: string;
  }>;
  label?: string;
  variations: Variation[];
  selected: string | number;
  variationColors: Record<string, string>;
  colors: ThemeColors;
}

export function CustomTooltip({
  active,
  payload,
  label,
  variations,
  selected,
  variationColors,
  colors,
}: TooltipProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const filtered = selected === 'all'
    ? payload
    : payload.filter(row => row.dataKey === selected);

  return (
    <div 
      className={styles.tooltip}
      style={{
        backgroundColor: colors.bg,
        border: `1px solid ${colors.grid}`,
        color: colors.text,
      }}
    >
      <div style={{ 
        marginBottom: 8, 
        fontWeight: 600,
        color: colors.text,
      }}>
        {label && new Date(label).toLocaleDateString('en-GB')}
      </div>

      {filtered.map((row) => {
        const variation = variations.find(
          v => String(v.id ?? '0') === row.dataKey
        );
        const color = variationColors[row.dataKey] || colors.text;

        return (
          <div 
            key={row.dataKey} 
            className={styles.tooltipRow}
            style={{ color: colors.text }}
          >
            <div className={styles.label}>
              <span
                className={styles.dot}
                style={{ backgroundColor: color }}
              />
              <span className={styles.variationName}>{variation?.name}</span>
            </div>
            <div className={styles.tooltipValue}>
              {row.value?.toFixed(2)}%
            </div>
          </div>
        );
      })}
    </div>
  );
}