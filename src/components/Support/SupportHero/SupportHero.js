'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
  Chip,
  InputBase,
  IconButton,
  Paper
} from '@mui/material';
import { 
  Support,
  Schedule,
  ThumbUp,
  Article,
  Search,
  ChevronRight,
  ContactSupport as ContactSupportIcon,
  MenuBook,
  HeadsetMic,
  AccessTime
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
      if (value.includes('%')) {
        const numericValue = parseInt(value.replace('%', ''));
        let start = 0;
        const increment = numericValue / 60;
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setAnimatedValue(`${numericValue}%`);
            clearInterval(counter);
          } else {
            setAnimatedValue(`${Math.floor(start)}%`);
          }
        }, 30);
      } else if (value.includes('+')) {
        const numericValue = parseInt(value.replace('+', ''));
        let start = 0;
        const increment = numericValue / 60;
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setAnimatedValue(`${numericValue}+`);
            clearInterval(counter);
          } else {
            setAnimatedValue(`${Math.floor(start)}+`);
          }
        }, 30);
      } else {
        // For values like "24/7" or "<2hrs", just set them directly
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

const SearchSection = () => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
    surface: 'surface.primary'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 2,
          maxWidth: 600,
          mx: 'auto',
          mb: 6,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `1px solid ${themeColors.brand}40`
          }
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <InputBase
            placeholder="Search for help articles, tutorials, or documentation..."
            sx={{
              flex: 1,
              color: themeColors.text,
              fontSize: '1.1rem',
              '& .MuiInputBase-input': {
                py: 2,
                px: 2
              },
              '&::placeholder': {
                color: themeColors.textSecondary,
                opacity: 0.7
              }
            }}
          />
          <IconButton
            sx={{
              background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
              color: 'white',
              p: 2,
              '&:hover': {
                background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                transform: 'scale(1.05)'
              }
            }}
          >
            <Search />
          </IconButton>
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default function SupportHero() {
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
    { value: '24/7', label: 'Support Available', icon: Support },
    { value: '<2hrs', label: 'Average Response Time', icon: AccessTime },
    { value: '98%', label: 'Customer Satisfaction', icon: ThumbUp },
    { value: '500+', label: 'Help Articles', icon: Article }
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
                    label="24/7 Customer Support"
                    icon={<HeadsetMic />}
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
                    How Can We Help?
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
                    Get the support you need to succeed
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
                    Our dedicated support team is here to help you get the most out of your 
                    Somaticx solutions. Find answers, get help, or connect with our experts.
                  </Typography>
                </Box>

                <SearchSection />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ContactSupportIcon />}
                    endIcon={<ChevronRight />}
                    href="#contact-support"
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
                    Contact Support
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<MenuBook />}
                    href="/documentation"
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
                    Browse Documentation
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
      </Container>
    </Box>
  );
}