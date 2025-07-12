'use client';

import { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { themes } from '@/constants/Colors';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Apply theme to document for CSS custom properties
  const applyThemeToDocument = useCallback((themeName) => {
    if (typeof window === 'undefined') return; // Server-side safety
    
    try {
      const root = document.documentElement;
      const themeColors = themes[themeName];

      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      root.classList.add(themeName);

      // Set CSS custom properties for the theme
      if (themeColors) {
        // Flatten theme object to CSS custom properties
        const setCSSProperties = (obj, prefix = '--color') => {
          Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null && key !== 'tokens') {
              setCSSProperties(value, `${prefix}-${key}`);
            } else if (typeof value === 'string') {
              root.style.setProperty(`${prefix}-${key}`, value);
            }
          });
        };

        setCSSProperties(themeColors);
      }

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        const newColor = themeColors?.background?.primary || (themeName === 'dark' ? '#171717' : '#ffffff');
        metaThemeColor.setAttribute('content', newColor);
      }
    } catch (error) {
      console.error('Error applying theme to document:', error);
    }
  }, []);

  // Handle theme initialization and system preference detection
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('somaticx-theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const initialTheme = savedTheme || systemTheme;
      
      setTheme(initialTheme);
      setMounted(true);
      
      // Apply theme to document
      applyThemeToDocument(initialTheme);
    } catch (error) {
      console.error('Error in theme initialization:', error);
      setTheme('light');
      setMounted(true);
    }
  }, [applyThemeToDocument]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('somaticx-theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyThemeToDocument(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [mounted, applyThemeToDocument]);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    try {
      setTheme(newTheme);
      localStorage.setItem('somaticx-theme', newTheme);
      applyThemeToDocument(newTheme);
    } catch (error) {
      console.error('Error toggling theme:', error);
      setTheme(newTheme); // Still update the theme even if localStorage fails
    }
  }, [theme, applyThemeToDocument]);

  // Set specific theme function with validation
  const setSpecificTheme = useCallback((newTheme) => {
    if (newTheme !== 'light' && newTheme !== 'dark') {
      console.warn(`Invalid theme: ${newTheme}. Defaulting to light.`);
      newTheme = 'light';
    }
    
    try {
      setTheme(newTheme);
      localStorage.setItem('somaticx-theme', newTheme);
      applyThemeToDocument(newTheme);
    } catch (error) {
      console.error('Error setting specific theme:', error);
      setTheme(newTheme); // Still update the theme even if localStorage fails
    }
  }, [applyThemeToDocument]);

  // Memoized theme colors
  const colors = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  // Color helper functions
  const getColor = useCallback((path) => {
    const pathArray = path.split('.');
    let current = colors;
    
    for (const key of pathArray) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        console.warn(`Color path "${path}" not found in theme "${theme}"`);
        return colors.text?.primary || '#000000';
      }
    }
    
    return current;
  }, [colors, theme]);

  // Get token color (direct access to design tokens)
  const getToken = useCallback((category, shade) => {
    const token = colors.tokens?.[category]?.[shade];
    if (!token) {
      console.warn(`Token "${category}.${shade}" not found`);
      return colors.text?.primary || '#000000';
    }
    return token;
  }, [colors]);

  // Multi-color getter
  const getColors = useCallback((pathArray) => {
    return pathArray.reduce((acc, path) => {
      acc[path] = getColor(path);
      return acc;
    }, {});
  }, [getColor]);

  const value = {
    // Theme state
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    
    // Theme functions
    toggleTheme,
    setTheme: setSpecificTheme,
    
    // Color access
    colors,
    getColor,
    getToken,
    getColors,
    
    // Utility
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>
      {!mounted ? (
        <div suppressHydrationWarning={true} style={{ visibility: 'hidden' }}>
          {children}
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
};