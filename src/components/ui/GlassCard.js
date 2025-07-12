'use client';

import { useThemeColor } from '@/hooks/useThemeColor';

export const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  blur = 'md',
  opacity = 0.8,
  border = true,
  shadow = true,
  ...props 
}) => {
  const backgroundColor = useThemeColor('surface.primary');
  const borderColor = useThemeColor('border.primary');
  const textColor = useThemeColor('text.primary');

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const baseClasses = `
    ${blurClasses[blur]} 
    ${shadow ? 'shadow-lg' : ''}
    ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
    ${border ? 'border' : ''}
    rounded-xl
  `;

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={{
        backgroundColor: `${backgroundColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`,
        borderColor: border ? borderColor : 'transparent',
        color: textColor,
      }}
      {...props}
    >
      {children}
    </div>
  );
};