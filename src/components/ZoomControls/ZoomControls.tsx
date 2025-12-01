import { useTheme } from '../../hooks/useTheme';
import styles from './ZoomControls.module.css';

interface ZoomControlsProps {
  zoom: number;
  setZoom: (zoom: number | ((prev: number) => number)) => void;
  minZoom?: number;
  maxZoom?: number;
}

export default function ZoomControls({ 
  zoom, 
  setZoom, 
  minZoom = 1, 
  maxZoom = 3
}: ZoomControlsProps) {
  const { theme } = useTheme();

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 1, maxZoom));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 1, minZoom));
  };

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <button
        className={styles.button}
        onClick={handleZoomOut}
        type="button"
        disabled={zoom <= minZoom}
        aria-label="Уменьшить масштаб"
      >
        <span className={styles.icon}>−</span>
      </button>
      
      <div className={styles.zoomValue}>
        {zoom}x
      </div>
      
      <button
        className={styles.button}
        onClick={handleZoomIn}
        type="button"
        disabled={zoom >= maxZoom}
        aria-label="Увеличить масштаб"
      >
        <span className={styles.icon}>+</span>
      </button>
    </div>
  );
}