'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  LinearProgress,
  Divider,
  IconButton
} from '@mui/material';
import { 
  BusinessCenter,
  Timeline,
  TrendingUp,
  Verified,
  Agriculture,
  Pets,
  Analytics,
  Engineering,
  CheckCircle,
  PlayArrow,
  ChevronRight,
  AutoAwesome,
  EmojiEvents,
  Speed,
  Star,
  Science,
  Insights,
  Public
} from '@mui/icons-material';

const AnimatedStatistic = ({ value, label, icon: Icon, delay = 0, color }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const numericValue = parseInt(value.toString().replace(/[^\d]/g, ''));
      const increment = numericValue / 60;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setAnimatedValue(numericValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(start));
        }
      }, 30);
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
            border: `2px solid ${color || themeColors.primary}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${color || themeColors.primary}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${color || themeColors.primary}, ${color || themeColors.primary}80)`,
            opacity: 0.8
          }
        }}
      >
        <motion.div
          animate={{ 
            scale: hasAnimated ? [1, 1.1, 1] : 1,
            rotate: hasAnimated ? [0, -5, 5, 0] : 0
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
              mx: 'auto',
              mb: 2,
              background: `linear-gradient(135deg, ${color || themeColors.primary}20, ${color || themeColors.primary}10)`,
              border: `2px solid ${color || themeColors.primary}30`,
              boxShadow: `0 8px 32px ${color || themeColors.primary}20`
            }}
          >
            <Icon sx={{ color: color || themeColors.primary, fontSize: 32 }} />
          </Avatar>
        </motion.div>
        
        <Typography 
          variant="h4" 
          sx={{ 
            color: color || themeColors.primary, 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 1
          }}
        >
          {hasAnimated ? animatedValue.toLocaleString() : '0'}{value.toString().includes('+') ? '+' : value.toString().includes('%') ? '%' : ''}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.textSecondary,
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

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const { icon: Icon, title, description, color } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 120
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? `2px solid ${color}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 3,
          p: 3,
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.2)`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          }
        }}
      >
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -10, 10, 0] : 0
          }}
          transition={{ duration: 0.6 }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              mx: 'auto',
              mb: 2,
              background: `linear-gradient(135deg, ${color}20, ${color}10)`,
              border: `2px solid ${color}30`
            }}
          >
            <Icon sx={{ color: color, fontSize: 28 }} />
          </Avatar>
        </motion.div>

        <Typography
          variant="h6"
          sx={{
            color: themeColors.text,
            fontWeight: 600,
            fontSize: '1rem',
            mb: 1,
            background: isHovered 
              ? `linear-gradient(135deg, ${themeColors.text}, ${color})`
              : 'none',
            backgroundClip: isHovered ? 'text' : 'initial',
            WebkitBackgroundClip: isHovered ? 'text' : 'initial',
            WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
            transition: 'all 0.3s ease'
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: themeColors.textSecondary,
            fontSize: '0.85rem',
            lineHeight: 1.4
          }}
        >
          {description}
        </Typography>
      </Card>
    </motion.div>
  );
};

export default function PortfolioHero() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const statistics = [
    { value: '50+', label: 'Projects Completed', icon: BusinessCenter, color: '#10B981' },
    { value: '25+', label: 'Active Solutions', icon: Timeline, color: '#3B82F6' },
    { value: '4', label: 'Core Categories', icon: Analytics, color: '#8B5CF6' },
    { value: '98', label: 'Success Rate', icon: TrendingUp, color: '#F59E0B' }
  ];

  const highlights = [
    {
      icon: Agriculture,
      title: 'Agricultural Tech',
      description: 'Smart farming solutions for enhanced crop yields',
      color: '#10B981'
    },
    {
      icon: Pets,
      title: 'Livestock Management',
      description: 'Advanced monitoring systems for animal welfare',
      color: '#3B82F6'
    },
    {
      icon: Science,
      title: 'Bio-Tech Innovation',
      description: 'Cutting-edge biotechnology applications',
      color: '#8B5CF6'
    },
    {
      icon: Engineering,
      title: 'IoT Integration',
      description: 'Connected systems for seamless operations',
      color: '#F59E0B'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`
          : `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 40%, ${colors.brand.primary}06 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${colors.brand.primaryLight || colors.brand.primary}04 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Content */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <BusinessCenter sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Portfolio Showcase"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.primaryLight || colors.brand.primary}10)`,
                  color: themeColors.brand,
                  border: `1px solid ${colors.brand.primary}25`,
                  backdropFilter: 'blur(8px)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              />
            </Stack>
          </motion.div>

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
                mb: 3,
                background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}
            >
              Innovation Portfolio
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 600,
                color: themeColors.brand,
                mb: 4,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Transforming Bio-Industries Through Breakthrough Innovation
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.6,
                color: themeColors.textSecondary,
                mb: 6,
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
              Explore our cutting-edge projects in agriculture, livestock management, 
              and bio-industry technology. Each solution is designed to enhance productivity, 
              sustainability, and operational efficiency across diverse sectors.
            </Typography>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center" 
              alignItems="center"
              sx={{ mb: 8 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ChevronRight />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryLight || colors.brand.primary}DD)`,
                  boxShadow: `0 8px 32px ${colors.brand.primary}30`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brand.primaryLight || colors.brand.primary}, ${colors.brand.primary})`,
                    boxShadow: `0 12px 48px ${colors.brand.primary}40`,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Explore Projects
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                endIcon={<PlayArrow />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: `${colors.brand.primary}40`,
                  color: themeColors.brand,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.brand.primary,
                    background: `${colors.brand.primary}10`,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Watch Demo
              </Button>
            </Stack>
          </motion.div>
        </Box>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <AnimatedStatistic
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  delay={index * 200}
                  color={stat.color}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                fontWeight: 700,
                color: themeColors.text,
                mb: 2
              }}
            >
              Portfolio Highlights
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: themeColors.textSecondary,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Discover our core competencies and technological expertise across various domains
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard feature={highlight} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Chip
              icon={<Star />}
              label="Ready to get started?"
              sx={{
                background: `${colors.brand.primary}15`,
                color: themeColors.brand,
                border: `1px solid ${colors.brand.primary}30`,
                fontWeight: 600,
                fontSize: '0.875rem',
                mb: 3
              }}
            />
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 600,
                color: themeColors.text,
                mb: 2
              }}
            >
              {"Let's Build Something Amazing Together"}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: themeColors.textSecondary,
                maxWidth: '400px',
                mx: 'auto'
              }}
            >
              Contact us to discuss your bio-industry technology needs
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}