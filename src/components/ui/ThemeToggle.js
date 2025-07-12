'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const textColor = useThemeColor('text.primary');
  const backgroundColor = useThemeColor('surface.primary');
  const borderColor = useThemeColor('border.primary');
  const primaryColor = useThemeColor('brand.primary');

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-2 rounded-full transition-all duration-300
        backdrop-blur-md border
        ${className}
      `}
      style={{
        backgroundColor: `${backgroundColor}80`,
        borderColor: borderColor,
        color: textColor,
      }}
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" style={{ color: primaryColor }} />
        ) : (
          <Moon className="w-5 h-5" style={{ color: primaryColor }} />
        )}
      </motion.div>
    </motion.button>
  );
};