import styles from './Chart.module.css';

interface ChartEmptyProps {
  theme: string;
  textColor: string;
}

export function ChartEmpty({ theme, textColor }: ChartEmptyProps) {
  return (
    <div className={`${styles.chartWrapper} ${styles[theme]}`}>
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        color: textColor 
      }}>
        Нет данных для отображения
      </div>
    </div>
  );
}