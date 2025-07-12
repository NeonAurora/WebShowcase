'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Card,
  CardContent,
  Chip,
  IconButton
} from '@mui/material';
import { 
  PlayArrow,
  TrendingUp,
  Nature,
  Pets,
  Agriculture,
  ChevronRight,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

const AnimatedStatistic = ({ value, label, icon: Icon, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    secondary: 'text.secondary',
    success: 'status.success'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = value / 60;
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setAnimatedValue(value);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(start));
        }
      }, 30);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <Card 
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 3,
          p: 2,
          textAlign: 'center',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(22, 163, 74, 0.15)'
          }
        }}
      >
        <Icon sx={{ color: themeColors.primary, fontSize: 32, mb: 1 }} />
        <Typography 
          variant="h4" 
          sx={{ 
            color: themeColors.primary, 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' }
          }}
        >
          {animatedValue.toLocaleString()}+
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.secondary,
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {label}
        </Typography>
      </Card>
    </motion.div>
  );
};

const FloatingElement = ({ children, delay = 0, direction = 'up' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 30 : -30 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default function HeroSection() {
  const { colors, isDark } = useTheme();
  const interactiveColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.muted',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight',
    primaryDark: 'brand.primaryDark',
    surface: 'surface.primary',
    overlay: 'surface.overlay'
  });

  const heroContent = {
    eyebrow: "Transforming Lives Through Technology",
    headline: "Intelligent Solutions for Agricultural & Livestock Excellence",
    subheadline: "Empowering Pet Owners, Livestock Managers & Crop Farmers",
    description: "We develop cutting-edge software solutions that revolutionize animal care, crop management, and agricultural operations. Our technology bridges the gap between traditional farming wisdom and modern innovation.",
    primaryCTA: "Explore Our Solutions",
    secondaryCTA: "Watch Demo",
    trustBadges: [
      { label: "Eco-Friendly", icon: Nature },
      { label: "Life-Focused", icon: Pets },
      { label: "Sustainable", icon: Agriculture }
    ]
  };

  const statistics = [
    { value: 50000, label: "Animals Monitored", icon: Pets },
    { value: 1200, label: "Farms Enhanced", icon: Agriculture },
    { value: 95, label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 50%, ${colors.background.tertiary} 100%)`
          : `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 50%, ${colors.brand.primary}08 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${colors.brand.primaryLight}06 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={6} alignItems="center" textAlign="center">
          
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label={heroContent.eyebrow}
              sx={{
                background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.primaryLight}10)`,
                color: themeColors.primary,
                border: `1px solid ${colors.brand.primary}25`,
                backdropFilter: 'blur(8px)',
                fontWeight: 600,
                fontSize: '0.875rem',
                py: 0.5,
                px: 2
              }}
            />
          </motion.div>

          {/* Main Headlines */}
          <Stack spacing={3} sx={{ maxWidth: '900px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: themeColors.text,
                  background: `linear-gradient(135deg, ${themeColors.text} 0%, ${themeColors.primary} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center'
                }}
              >
                {heroContent.headline}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  fontWeight: 600,
                  color: themeColors.primary,
                  mb: 2
                }}
              >
                {heroContent.subheadline}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  color: themeColors.textSecondary,
                  maxWidth: '700px',
                  mx: 'auto'
                }}
              >
                {heroContent.description}
              </Typography>
            </motion.div>
          </Stack>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
            >
              {heroContent.trustBadges.map((badge, index) => (
                <Chip
                  key={index}
                  icon={<badge.icon sx={{ color: themeColors.primary }} />}
                  label={badge.label}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${colors.brand.primary}20`,
                    color: themeColors.textSecondary,
                    fontWeight: 500,
                    '&:hover': {
                      background: `${colors.brand.primary}10`
                    }
                  }}
                />
              ))}
            </Stack>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ChevronRight />}
                href="/services"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: `0 8px 32px ${colors.brand.primary}40`,
                  textTransform: 'none',
                  minWidth: '200px',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brand.primaryDark}, ${colors.brand.primary})`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${colors.brand.primary}50`
                  }
                }}
              >
                {heroContent.primaryCTA}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  borderColor: colors.brand.primary,
                  color: themeColors.primary,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderWidth: '2px',
                  textTransform: 'none',
                  minWidth: '180px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: colors.brand.primaryDark,
                    background: `${colors.brand.primary}10`,
                    borderWidth: '2px'
                  }
                }}
              >
                {heroContent.secondaryCTA}
              </Button>
            </Stack>
          </motion.div>

          {/* Statistics Cards */}
          <Box sx={{ mt: 8, width: '100%', maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                {statistics.map((stat, index) => (
                  <FloatingElement key={index} delay={1.4 + (index * 0.2)}>
                    <AnimatedStatistic
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                      delay={1400 + (index * 200)}
                    />
                  </FloatingElement>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* Visual Element - Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            style={{ width: '100%', maxWidth: '600px', marginTop: '4rem' }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                border: `1px solid rgba(255, 255, 255, 0.08)`,
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${colors.brand.primary}, transparent)`
                }
              }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <Box 
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${colors.brand.primary}20, ${colors.brand.primaryLight}10)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <Nature sx={{ color: themeColors.primary, fontSize: 40 }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: themeColors.text,
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Sustainable Innovation
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      lineHeight: 1.6
                    }}
                  >
                    Every solution we create prioritizes environmental sustainability and the wellbeing of animals and ecosystems.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>

        </Stack>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.brand.primary}08, transparent)`,
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.brand.primaryLight}06, transparent)`,
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
}