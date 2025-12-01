import { useTheme } from '../../hooks/useTheme';
import type { Variation } from '../../types/chart';
import styles from './VariationSelect.module.css';
import { useState, useRef, useEffect } from 'react';


interface VariationSelectProps {
  variations: Variation[];
  value: string;
  onChange: (value: string) => void;
}

export default function VariationSelect({ variations, value, onChange }: VariationSelectProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const allVariations = [
    { id: 'all', name: 'Все вариации' },
    ...variations
  ];
  
  
  const selectedVariation = allVariations.find(v => String(v.id ?? '0') === value);
  

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div 
      ref={wrapperRef} 
      className={`${styles.wrapper} ${styles[theme]}`}
    >
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
      >
        <span className={styles.selectedText}>
          {selectedVariation?.name}
        </span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {allVariations.map((variation) => {
            const variationId = variation.id ?? '0';            
            return (
              <button
                key={variationId}
                className={`${styles.item} ${value === variationId ? styles.selected : ''}`}
                onClick={() => handleSelect(String(variationId))}
                type="button"
              >
                {variation.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}