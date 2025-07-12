'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useNavigationColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Chip,
  Stack
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
  Biotech
} from '@mui/icons-material';

const LogoAnimation = ({ isDark }) => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary'
  });

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.6 }
      }}
      className="flex items-center space-x-3"
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 8px 32px ${themeColors.primary}40`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: `conic-gradient(from 0deg, transparent, ${themeColors.primary}40, transparent)`,
            animation: 'rotate 3s linear infinite',
          },
          '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
          }
        }}
      >
        <Biotech sx={{ color: '#ffffff', fontSize: 24, zIndex: 1 }} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.primary})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}
      >
        Somaticx
      </Typography>
    </motion.div>
  );
};

const NavigationItem = ({ item, onClick, isMobile = false }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  if (isMobile) {
    return (
      <motion.div
        whileHover={{ x: 8 }}
        whileTap={{ scale: 0.95 }}
      >
        <ListItemButton
          component="a"
          href={item.href}
          onClick={onClick}
          sx={{
            borderRadius: 2,
            mx: 1,
            '&:hover': {
              background: `${themeColors.primary}10`,
              '& .MuiListItemText-primary': {
                color: themeColors.primary
              }
            }
          }}
        >
          <ListItemText 
            primary={item.name}
            sx={{
              '& .MuiListItemText-primary': {
                fontWeight: 600,
                color: themeColors.text,
                transition: 'color 0.2s ease'
              }
            }}
          />
        </ListItemButton>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        component="a"
        href={item.href}
        sx={{
          color: themeColors.text,
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'none',
          px: 2,
          py: 1,
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${themeColors.primary}10, ${themeColors.primary}05)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            color: themeColors.primary,
            '&::before': {
              opacity: 1,
            }
          }
        }}
      >
        {item.name}
      </Button>
    </motion.div>
  );
};

export default function Header() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navColors = useNavigationColors();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary',
    surface: 'surface.primary',
    background: 'background.primary'
  });

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Demo', href: '/demo' },
    { name: 'Support', href: '/support' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled 
              ? `rgba(${isDark ? '23, 23, 23' : '255, 255, 255'}, 0.85)`
              : `rgba(${isDark ? '23, 23, 23' : '255, 255, 255'}, 0.70)`,
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid rgba(${isDark ? '255, 255, 255' : '0, 0, 0'}, 0.08)`,
            transition: 'all 0.3s ease',
            boxShadow: scrolled ? `0 8px 32px rgba(${isDark ? '0, 0, 0' : '0, 0, 0'}, 0.1)` : 'none'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ px: { xs: 0, sm: 2 }, minHeight: '72px !important' }}>
              {/* Logo */}
              <Box sx={{ flexGrow: 0, mr: 4 }}>
                <motion.a href="/" style={{ textDecoration: 'none' }}>
                  <LogoAnimation isDark={isDark} />
                </motion.a>
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                <Stack direction="row" spacing={1}>
                  {navigation.map((item) => (
                    <NavigationItem key={item.name} item={item} />
                  ))}
                </Stack>
              </Box>

              {/* Right Side Actions */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Live Status Indicator */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Chip
                    label="Live"
                    size="small"
                    sx={{
                      background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      display: { xs: 'none', sm: 'flex' }
                    }}
                  />
                </motion.div>

                {/* Theme Toggle */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    onClick={toggleTheme}
                    sx={{
                      width: 44,
                      height: 44,
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      color: themeColors.primary,
                      '&:hover': {
                        background: `${themeColors.primary}15`,
                        transform: 'rotate(180deg)',
                        transition: 'all 0.4s ease'
                      }
                    }}
                  >
                    {isDark ? <LightMode /> : <DarkMode />}
                  </IconButton>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <IconButton
                  onClick={() => setIsMenuOpen(true)}
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    color: themeColors.text,
                    width: 44,
                    height: 44,
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid rgba(255, 255, 255, 0.12)`,
                    '&:hover': {
                      background: `${themeColors.primary}15`
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: `rgba(${isDark ? '23, 23, 23' : '255, 255, 255'}, 0.95)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid rgba(255, 255, 255, 0.08)`,
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <LogoAnimation isDark={isDark} />
            <IconButton 
              onClick={() => setIsMenuOpen(false)}
              sx={{ color: themeColors.text }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Items */}
          <List sx={{ px: 0 }}>
            <AnimatePresence>
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <NavigationItem 
                      item={item} 
                      onClick={() => setIsMenuOpen(false)}
                      isMobile={true}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>

          {/* Mobile Footer */}
          <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid rgba(255, 255, 255, 0.08)` }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: themeColors.textSecondary,
                textAlign: 'center',
                fontSize: '0.875rem'
              }}
            >
              Transforming Bio-Industries
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer for fixed header */}
      <Toolbar sx={{ minHeight: '72px !important' }} />
    </>
  );
}