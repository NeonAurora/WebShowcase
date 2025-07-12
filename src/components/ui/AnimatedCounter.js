'use client';

import { useState, useEffect, useRef } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = '', 
  prefix = '',
  className = '',
  decimals = 0,
  separator = ',',
  delay = 0
}) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const textColor = useThemeColor('text.primary');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const timer = setTimeout(() => {
      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, hasAnimated, start, end, duration, delay]);

  const formatNumber = (num) => {
    const rounded = parseFloat(num.toFixed(decimals));
    return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <span 
      ref={counterRef}
      className={`font-bold transition-all duration-300 ${className}`}
      style={{ color: textColor }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};