import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <button 
        className={styles.button}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </button>
    </div>
  );
}