import { useTheme } from '../../hooks/useTheme';
import styles from './PeriodSelect.module.css';
import { useState, useRef, useEffect } from 'react';

type PeriodValue = 'day' | 'week';

interface PeriodSelectProps {
  period: PeriodValue;
  setPeriod: (period: PeriodValue) => void;
}

const OPTIONS = [
  { value: 'day' as const, label: 'По дням' },
  { value: 'week' as const, label: 'По неделям' }
];

export default function PeriodSelect({ period, setPeriod }: PeriodSelectProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const selectedOption = OPTIONS.find(opt => opt.value === period);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: PeriodValue) => {
    setPeriod(value);
    setIsOpen(false);
  };

  return (
    <div 
      ref={ref}
      className={`${styles.wrapper} ${styles[theme]}`}
    >
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{selectedOption?.label}</span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              className={`${styles.item} ${period === option.value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value)}
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