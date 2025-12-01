import { useTheme } from './../../hooks/useTheme';
import styles from './LineStyleSelect.module.css';
import { useState, useRef, useEffect } from 'react';

type LineStyle = 'line' | 'smooth' | 'area';

interface LineStyleSelectProps {
  value: LineStyle;
  onChange: (style: LineStyle) => void;
}

const OPTIONS = [
  { value: 'line' as const, label: 'Line' },
  { value: 'smooth' as const, label: 'Smooth',},
  { value: 'area' as const, label: 'Area', }
];

export default function LineStyleSelect({ value, onChange }: LineStyleSelectProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const selectedOption = OPTIONS.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`${styles.customWrapper} ${styles[theme]}`}>
      <button
        className={styles.customButton}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{selectedOption?.label}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className={styles.customDropdown}>
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              className={`${styles.customItem} ${value === option.value ? styles.selected : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}