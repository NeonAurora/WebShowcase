'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useThemeColor } from '@/hooks/useThemeColor';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const primaryColor = useThemeColor('brand.primary');
  const backgroundColor = useThemeColor('surface.primary');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg backdrop-blur-md border"
          style={{
            backgroundColor: `${backgroundColor}90`,
            borderColor: primaryColor,
          }}
        >
          <ArrowUp className="w-6 h-6" style={{ color: primaryColor }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};