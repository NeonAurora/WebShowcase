'use client';

import { motion } from 'framer-motion';
import { useThemeColor } from '@/hooks/useThemeColor';

export const InteractiveCard = ({ 
  children, 
  className = '', 
  onClick,
  disabled = false,
  glowEffect = true,
  ...props 
}) => {
  const backgroundColor = useThemeColor('surface.primary');
  const borderColor = useThemeColor('border.primary');
  const primaryColor = useThemeColor('brand.primary');
  const textColor = useThemeColor('text.primary');

  return (
    <motion.div
      whileHover={disabled ? {} : { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={disabled ? undefined : onClick}
      className={`
        relative backdrop-blur-md border rounded-xl p-6 cursor-pointer
        transition-all duration-300 overflow-hidden
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        backgroundColor: `${backgroundColor}80`,
        borderColor: borderColor,
        color: textColor,
      }}
      {...props}
    >
      {glowEffect && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 0.1 }}
          style={{
            background: `radial-gradient(circle at center, ${primaryColor}, transparent 70%)`,
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};