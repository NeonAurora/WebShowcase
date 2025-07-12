// Complete design tokens with all color categories
export const designTokens = {
  primary: {
    50: "#f0fdf4",
    100: "#dcfce7", 
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",  // Main
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    1000: "#0f3e22",
  },
  
  secondary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe", 
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",  // Main
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  
  neutral: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5", 
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    1000: "#000000",
  },

  // NEW: Missing color categories
  accent: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",   // Main accent
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",   // Main warning
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",   // Main error
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",   // Main success
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  
  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe", 
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",   // Main info
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  }
};

// Complete themes with all semantic mappings
export const themes = {
  light: {
    background: {
      primary: designTokens.neutral[0],
      secondary: designTokens.neutral[50],
      tertiary: designTokens.neutral[100],
      elevated: designTokens.neutral[0],
      inverse: designTokens.neutral[900],
    },
    text: {
      primary: designTokens.neutral[900],
      secondary: designTokens.neutral[700],
      tertiary: designTokens.neutral[500],
      muted: designTokens.neutral[400],
      disabled: designTokens.neutral[300],
      inverse: designTokens.neutral[0],
    },
    brand: {
      primary: designTokens.primary[600],
      primaryLight: designTokens.primary[500],
      primaryDark: designTokens.primary[700],
      secondary: designTokens.secondary[600],
      secondaryLight: designTokens.secondary[500],
      secondaryDark: designTokens.secondary[700],
      accent: designTokens.accent[600],
    },
    surface: {
      primary: designTokens.neutral[0],
      secondary: designTokens.neutral[50],
      tertiary: designTokens.neutral[100],
      elevated: designTokens.neutral[0],
      overlay: `${designTokens.neutral[900]}33`,
    },
    border: {
      primary: designTokens.neutral[200],
      secondary: designTokens.neutral[300],
      tertiary: designTokens.neutral[400],
      focus: designTokens.primary[500],
      error: designTokens.error[600],
    },
    interactive: {
      primary: designTokens.primary[600],
      primaryHover: designTokens.primary[700],
      primaryActive: designTokens.primary[800],
      primaryDisabled: designTokens.neutral[300],
      
      secondary: designTokens.neutral[100],
      secondaryHover: designTokens.neutral[200],
      secondaryActive: designTokens.neutral[300],
    },
    // NEW: Complete status colors
    status: {
      success: designTokens.success[600],
      successLight: designTokens.success[500],
      successDark: designTokens.success[700],
      
      warning: designTokens.warning[600],
      warningLight: designTokens.warning[500],
      warningDark: designTokens.warning[700],
      
      error: designTokens.error[600],
      errorLight: designTokens.error[500],
      errorDark: designTokens.error[700],
      
      info: designTokens.info[600],
      infoLight: designTokens.info[500],
      infoDark: designTokens.info[700],
    },
    // NEW: Navigation colors
    navigation: {
      background: designTokens.neutral[0],
      border: designTokens.neutral[200],
      text: designTokens.neutral[700],
      textActive: designTokens.primary[600],
      textHover: designTokens.neutral[900],
    },
    accent: {
      primary: designTokens.accent[600],
      light: designTokens.accent[400],
      dark: designTokens.accent[700],
      background: designTokens.accent[50],
      foreground: designTokens.accent[100],
    },
    tokens: designTokens,
  },
  dark: {
    background: {
      primary: designTokens.neutral[900],
      secondary: designTokens.neutral[800],
      tertiary: designTokens.neutral[700],
      elevated: designTokens.neutral[800],
      inverse: designTokens.neutral[0],
    },
    text: {
      primary: designTokens.neutral[0],
      secondary: designTokens.neutral[300],
      tertiary: designTokens.neutral[400],
      muted: designTokens.neutral[500],
      disabled: designTokens.neutral[600],
      inverse: designTokens.neutral[900],
    },
    brand: {
      primary: designTokens.primary[500],
      primaryLight: designTokens.primary[400],
      primaryDark: designTokens.primary[600],
      secondary: designTokens.secondary[500],
      secondaryLight: designTokens.secondary[400],
      secondaryDark: designTokens.secondary[600],
      accent: designTokens.accent[500],
      flipPrimary: designTokens.primary[900],
      flipPrimaryDark: designTokens.primary[1000],
    },
    surface: {
      primary: designTokens.neutral[800],
      secondary: designTokens.neutral[700],
      tertiary: designTokens.neutral[600],
      elevated: designTokens.neutral[750] || designTokens.neutral[700],
      overlay: `${designTokens.neutral[900]}CC`,
    },
    border: {
      primary: designTokens.neutral[700],
      secondary: designTokens.neutral[600],
      tertiary: designTokens.neutral[500],
      focus: designTokens.primary[500],
      error: designTokens.error[500],
    },
    interactive: {
      primary: designTokens.primary[500],
      primaryHover: designTokens.primary[400],
      primaryActive: designTokens.primary[600],
      primaryDisabled: designTokens.neutral[600],
      
      secondary: designTokens.neutral[700],
      secondaryHover: designTokens.neutral[600],
      secondaryActive: designTokens.neutral[800],
    },
    status: {
      success: designTokens.success[500],
      successLight: designTokens.success[400],
      successDark: designTokens.success[600],
      
      warning: designTokens.warning[500],
      warningLight: designTokens.warning[400],
      warningDark: designTokens.warning[600],
      
      error: designTokens.error[500],
      errorLight: designTokens.error[400],
      errorDark: designTokens.error[600],
      
      info: designTokens.info[500],
      infoLight: designTokens.info[400],
      infoDark: designTokens.info[600],
    },
    navigation: {
      background: designTokens.neutral[900],
      border: designTokens.neutral[700],
      text: designTokens.neutral[200],
      textActive: designTokens.primary[400],
      textHover: designTokens.neutral[0],
    },
    accent: {
      primary: designTokens.accent[500],
      light: designTokens.accent[300],
      dark: designTokens.accent[700],
      background: designTokens.accent[100],
      foreground: designTokens.accent[200],
    },
    tokens: designTokens,
  }
};

// Color categories for TypeScript support
export const colorCategories = {
  brand: Object.keys(themes.light.brand),
  text: Object.keys(themes.light.text),
  background: Object.keys(themes.light.background),
  surface: Object.keys(themes.light.surface),
  border: Object.keys(themes.light.border),
  interactive: Object.keys(themes.light.interactive),
  status: Object.keys(themes.light.status),
  navigation: Object.keys(themes.light.navigation),
  accent: Object.keys(themes.light.accent),
};

export default themes;