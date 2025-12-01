import { useTheme } from '../../hooks/useTheme';
import styles from './ExportButton.module.css';

interface ExportButtonProps {
  onExport: () => void;
}

export default function ExportButton({ onExport }: ExportButtonProps) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <button
        className={styles.button}
        onClick={onExport}
        type="button"
      >
        <span>Экспорт PNG</span>
      </button>
    </div>
  );
}