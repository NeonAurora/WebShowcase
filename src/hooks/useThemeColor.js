'use client';

import { useTheme } from '@/context/ThemeContext';
import { useMemo } from 'react';

/**
 * Hook to get a single color from the theme
 */
export function useThemeColor(path, fallback = '#000000') {
  const { getColor } = useTheme();
  
  return useMemo(() => {
    return getColor(path) || fallback;
  }, [getColor, path, fallback]);
}

/**
 * Hook to get multiple colors from the theme
 */
export function useThemeColors(pathsObject) {
  const { getColor } = useTheme();
  
  return useMemo(() => {
    const result = {};
    Object.entries(pathsObject).forEach(([key, path]) => {
      result[key] = getColor(path);
    });
    return result;
  }, [getColor, pathsObject]);
}

/**
 * Hook to get design token colors directly
 */
export function useTokenColor(category, shade, fallback = '#000000') {
  const { getToken } = useTheme();
  
  return useMemo(() => {
    return getToken(category, shade) || fallback;
  }, [getToken, category, shade, fallback]);
}

/**
 * Hook for conditional styling based on theme
 */
export function useThemedStyles(lightStyles, darkStyles) {
  const { isDark } = useTheme();
  return useMemo(() => {
    return isDark ? darkStyles : lightStyles;
  }, [isDark, lightStyles, darkStyles]);
}

/**
 * Hook to get interactive colors (hover, active states)
 */
export function useInteractiveColors(type = 'primary') {
  const { colors } = useTheme();
  
  return useMemo(() => {
    const base = colors.interactive;
    return {
      default: base[type] || base.primary,
      hover: base[`${type}Hover`] || base.primaryHover,
      active: base[`${type}Active`] || base.primaryActive,
      disabled: base[`${type}Disabled`] || base.primaryDisabled,
    };
  }, [colors.interactive, type]);
}

/**
 * Hook to get status colors (success, warning, error, info)
 */
export function useStatusColors() {
  const { colors } = useTheme();
  
  return useMemo(() => ({
    success: colors.status.success,
    successLight: colors.status.successLight,
    successDark: colors.status.successDark,
    
    warning: colors.status.warning,
    warningLight: colors.status.warningLight,
    warningDark: colors.status.warningDark,
    
    error: colors.status.error,
    errorLight: colors.status.errorLight,
    errorDark: colors.status.errorDark,
    
    info: colors.status.info,
    infoLight: colors.status.infoLight,
    infoDark: colors.status.infoDark,
  }), [colors.status]);
}

/**
 * Hook to get navigation colors
 */
export function useNavigationColors() {
  const { colors } = useTheme();
  
  return useMemo(() => ({
    background: colors.navigation.background,
    border: colors.navigation.border,
    text: colors.navigation.text,
    textActive: colors.navigation.textActive,
    textHover: colors.navigation.textHover,
  }), [colors.navigation]);
}

/**
 * Hook for getting multiple theme colors with fallbacks
 */
export function useThemeColorsWithFallbacks(pathsObject) {
  const { getColor } = useTheme();
  
  return useMemo(() => {
    const result = {};
    Object.entries(pathsObject).forEach(([key, config]) => {
      if (typeof config === 'string') {
        result[key] = getColor(config);
      } else if (typeof config === 'object' && config.path) {
        result[key] = getColor(config.path) || config.fallback || '#000000';
      }
    });
    return result;
  }, [getColor, pathsObject]);
}

export default useThemeColor;