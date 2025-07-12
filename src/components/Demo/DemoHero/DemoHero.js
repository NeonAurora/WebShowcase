'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
  Chip,
  Button,
  Paper
} from '@mui/material';
import { 
  PlayCircle,
  Schedule,
  VideoLibrary,
  Category,
  Visibility,
  AccessTime,
  ChevronRight,
  AutoAwesome,
  OndemandVideo,
  TrendingUp
} from '@mui/icons-material';

const AnimatedStatistic = ({ value, label, icon: Icon, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      // Handle special cases for different value formats
      if (value.includes('+')) {
        const numericValue = parseInt(value.replace(/[^\d]/g, ''));
        let start = 0;
        const increment = numericValue / 60;
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setAnimatedValue(value);
            clearInterval(counter);
          } else {
            setAnimatedValue(`${Math.floor(start)}${value.includes('k') ? 'k' : ''}+`);
          }
        }, 30);
      } else {
        // For values like "24/7" or single numbers, just set them directly
        setAnimatedValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, hasAnimated]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      onViewportEnter={handleInView}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card 
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 3,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${themeColors.primary}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${themeColors.primary}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.primary}80)`
          }
        }}
      >
        <Avatar
          sx={{
            width: 64,
            height: 64,
            background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.primary}40)`,
            border: `2px solid ${themeColors.primary}30`,
            mx: 'auto',
            mb: 2
          }}
        >
          <Icon sx={{ fontSize: 32, color: themeColors.primary }} />
        </Avatar>
        
        <Typography 
          variant="h3" 
          sx={{ 
            color: themeColors.primary, 
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem' },
            mb: 1,
            background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {animatedValue || value}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.textSecondary,
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.4
          }}
        >
          {label}
        </Typography>
      </Card>
    </motion.div>
  );
};

export default function DemoHero() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
    surface: 'surface.primary'
  });

  const stats = [
    { value: '25+', label: 'Video Tutorials', icon: VideoLibrary },
    { value: '4', label: 'Product Categories', icon: Category },
    { value: '50k+', label: 'Video Views', icon: Visibility },
    { value: '24/7', label: 'Demo Access', icon: AccessTime }
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${themeColors.background} 0%, ${themeColors.backgroundSecondary} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, lg: 12 }
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 40%, ${themeColors.brand}15 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${themeColors.brand}10 0%, transparent 50%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack spacing={4}>
                <Box>
                  <Chip
                    label="Live Demos & Video Tutorials"
                    icon={<OndemandVideo />}
                    sx={{
                      background: `${themeColors.brand}20`,
                      color: themeColors.brand,
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      mb: 3,
                      border: `1px solid ${themeColors.brand}30`
                    }}
                  />
                  
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4rem' },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      mb: 3,
                      background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    See Our Solutions in Action
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: themeColors.brand,
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
                    }}
                  >
                    Interactive demos and comprehensive tutorials
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: themeColors.textSecondary,
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      lineHeight: 1.7,
                      mb: 4,
                      maxWidth: '600px'
                    }}
                  >
                    Explore comprehensive video tutorials and live demonstrations of our 
                    bio-industry technology solutions. Learn how to maximize your operations 
                    with step-by-step guides and real-world use cases.
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Schedule />}
                    endIcon={<ChevronRight />}
                    href="#live-demo"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: `0 8px 32px ${themeColors.brand}30`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 48px ${themeColors.brand}40`
                      }
                    }}
                  >
                    Schedule Live Demo
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircle />}
                    href="#tutorials"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: `${themeColors.brand}60`,
                      color: themeColors.brand,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: themeColors.brand,
                        background: `${themeColors.brand}10`,
                        borderWidth: 2
                      }
                    }}
                  >
                    Browse Tutorials
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <AnimatedStatistic
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                      delay={index * 200}
                    />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Featured Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ mt: 10 }}>
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                p: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${themeColors.brand}, ${themeColors.brand}80)`
                }
              }}
            >
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                    border: `3px solid ${themeColors.brand}30`
                  }}
                >
                  <TrendingUp sx={{ fontSize: '2rem', color: themeColors.brand }} />
                </Avatar>

                <Typography
                  variant="h4"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2.125rem' }
                  }}
                >
                  Most Popular Demo
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    maxWidth: 600,
                    mx: 'auto'
                  }}
                >
                  <Typography>
                    {"\"Smart Farm Management Dashboard\" - Learn how to monitor your entire operation from a single, intuitive interface with real-time data and automated insights."}
                  </Typography>

                </Typography>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayCircle />}
                    endIcon={<ChevronRight />}
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: `0 8px 32px ${themeColors.brand}30`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 48px ${themeColors.brand}40`
                      }
                    }}
                  >
                    Watch Demo
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<AutoAwesome />}
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: `${themeColors.brand}60`,
                      color: themeColors.brand,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: themeColors.brand,
                        background: `${themeColors.brand}10`,
                        borderWidth: 2
                      }
                    }}
                  >
                    Try Interactive Demo
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}