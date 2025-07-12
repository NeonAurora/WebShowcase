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
  LinearProgress,
  Divider,
  Button,
  IconButton,
  Paper
} from '@mui/material';
import { 
  MyLocation,
  Visibility,
  CheckCircle,
  TrendingUp,
  Public,
  Agriculture,
  Pets,
  Analytics,
  Verified,
  EmojiEvents,
  Speed,
  Star,
  KeyboardArrowRight,
  PlayArrow,
  Timeline,
  AutoAwesome,
  Insights,
} from '@mui/icons-material';

const MissionVisionCard = ({ content, type, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary'
  });

  const { icon: Icon, title, description, highlights, color, metrics, goals } = content;

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (content.completionRate || 85)) {
            clearInterval(timer);
            return content.completionRate || 85;
          }
          return prev + 3;
        });
      }, 30);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, content.completionRate]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ y: -16, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={handleInView}
    >
      <Card
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? `2px solid ${color}50`
            : '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 6,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 30px 80px rgba(0, 0, 0, 0.3), 0 12px 40px ${color}25`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: `linear-gradient(90deg, ${color}, ${color}80, ${color}CC)`,
            opacity: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${color}12, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 6, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.15 : 1,
                  rotate: hasAnimated ? [0, -10, 10, 0] : 0
                }}
                transition={{ duration: 0.8 }}
              >
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    background: `linear-gradient(135deg, ${color}25, ${color}15)`,
                    border: `4px solid ${color}40`,
                    boxShadow: `0 16px 48px ${color}25`,
                    mr: 2
                  }}
                >
                  <Icon sx={{ color: color, fontSize: 48 }} />
                </Avatar>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 + 0.8 }}
              >
                <Chip
                  icon={<Verified sx={{ fontSize: '16px !important' }} />}
                  label={type === 'mission' ? 'Our Mission' : 'Our Vision'}
                  sx={{
                    background: `${color}20`,
                    color: color,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    border: `2px solid ${color}40`,
                    backdropFilter: 'blur(10px)',
                    '& .MuiChip-icon': {
                      color: color
                    }
                  }}
                />
              </motion.div>
            </Box>

            <Typography
              variant="h3"
              sx={{
                color: themeColors.text,
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem' },
                lineHeight: 1.2,
                mb: 3,
                background: isHovered 
                  ? `linear-gradient(135deg, ${themeColors.text}, ${color})`
                  : 'none',
                backgroundClip: isHovered ? 'text' : 'initial',
                WebkitBackgroundClip: isHovered ? 'text' : 'initial',
                WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
                transition: 'all 0.4s ease'
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: themeColors.textSecondary,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                maxWidth: '90%',
                mx: 'auto'
              }}
            >
              {description}
            </Typography>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2" sx={{ color: themeColors.textMuted, fontSize: '0.9rem', fontWeight: 600 }}>
                {type === 'mission' ? 'Mission Progress' : 'Vision Achievement'}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: color, 
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                {progress}%
              </Typography>
            </Box>
            
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: `linear-gradient(90deg, ${color}, ${color}DD, ${color}BB)`
                }
              }}
            />
          </Box>

          {/* Highlights */}
          <Box sx={{ flexGrow: 1, mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                fontSize: '1.1rem',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Key Focus Areas
            </Typography>

            <Stack spacing={2}>
              {highlights?.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 + idx * 0.15 + 1 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 3,
                    background: isHovered ? `${color}08` : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${color}20`,
                    transition: 'all 0.3s ease'
                  }}>
                    <CheckCircle sx={{ color: color, fontSize: 20, flexShrink: 0 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '1rem',
                        fontWeight: 500
                      }}
                    >
                      {highlight}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Goals/Metrics */}
          {goals && (
            <>
              <Divider sx={{ borderColor: `${color}20`, mb: 3 }} />
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 2,
                    textAlign: 'center'
                  }}
                >
                  Target Goals
                </Typography>
                
                <Grid container spacing={2}>
                  {Object.entries(goals).map(([key, value], idx) => (
                    <Grid item xs={6} key={idx}>
                      <Stack spacing={0.5} alignItems="center">
                        <Typography
                          variant="h6"
                          sx={{
                            color: color,
                            fontWeight: 700,
                            fontSize: '1.1rem'
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: themeColors.textMuted,
                            fontSize: '0.75rem',
                            textAlign: 'center',
                            textTransform: 'capitalize'
                          }}
                        >
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}

          {/* Action Button */}
          <Box sx={{ textAlign: 'center', mt: 'auto' }}>
            <Button
              variant="outlined"
              endIcon={<KeyboardArrowRight />}
              sx={{
                px: 3,
                py: 1.5,
                borderColor: `${color}60`,
                color: color,
                background: `${color}10`,
                backdropFilter: 'blur(10px)',
                fontWeight: 600,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: color,
                  background: `${color}20`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 25px ${color}30`
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StatisticCard = ({ stat, index }) => {
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
      const numericValue = parseInt(stat.value.toString().replace(/[^\d]/g, ''));
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
    }, index * 200);

    return () => clearTimeout(timer);
  }, [stat.value, index, hasAnimated]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={handleInView}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <Card 
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 3,
          textAlign: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${stat.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${stat.color}15`
          }
        }}
      >
        <stat.icon sx={{ color: stat.color, fontSize: 32, mb: 1 }} />
        
        <Typography 
          variant="h4" 
          sx={{ 
            color: stat.color, 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 1
          }}
        >
          {hasAnimated ? animatedValue.toLocaleString() : '0'}{stat.value.toString().includes('+') ? '+' : ''}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.textSecondary,
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {stat.label}
        </Typography>
      </Card>
    </motion.div>
  );
};

export default function MissionVision() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const content = {
    mission: {
      title: 'Our Mission',
      icon: MyLocation,
      color: '#10B981',
      completionRate: 88,
      description: 'To transform bio-industries through intelligent innovation, creating solutions that enhance productivity, sustainability, and welfare across agriculture and livestock sectors.',
      highlights: [
        'Enhance agricultural productivity through smart technology',
        'Improve animal welfare standards with advanced monitoring',
        'Drive sustainable practices across all operations',
        'Enable data-driven decisions for better outcomes'
      ],
      goals: {
        productivity: '+40%',
        sustainability: '100%',
        welfare: 'A+ Rating',
        adoption: '95%'
      }
    },
    vision: {
      title: 'Our Vision',
      icon: Visibility,
      color: '#3B82F6',
      completionRate: 75,
      description: 'To become the leading provider of bio-industry technology solutions, setting new standards for innovation and sustainability in agriculture and livestock management.',
      highlights: [
        'Global technology leadership in bio-industries',
        'Industry standard setter for innovation practices',
        'Sustainable innovation pioneer and thought leader',
        'Trusted partner for worldwide agricultural transformation'
      ],
      goals: {
        marketShare: '#1 Global',
        standards: '50+ Set',
        partnerships: '100+',
        impact: 'Worldwide'
      }
    }
  };

  const statistics = [
    { value: '2', label: 'Core Pillars', icon: Timeline, color: '#10B981' },
    { value: '85+', label: 'Implementation Rate', icon: TrendingUp, color: '#3B82F6' },
    { value: '50+', label: 'Strategic Goals', icon: EmojiEvents, color: '#8B5CF6' },
    { value: '100', label: 'Team Alignment', icon: Star, color: '#F59E0B' }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`
          : `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 25% 25%, ${colors.brand.primary}05 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, ${colors.brand.primaryLight || colors.brand.primary}04 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <AutoAwesome sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Mission & Vision"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
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
              Our Purpose & Direction
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem' },
                color: themeColors.textSecondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Driving the future of bio-industries with clear purpose, 
              unwavering commitment, and visionary leadership
            </Typography>
          </motion.div>
        </Box>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatisticCard stat={stat} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Grid container spacing={6} sx={{ mb: 10 }}>
            {Object.entries(content).map(([key, item], index) => (
              <Grid item xs={12} lg={6} key={key}>
                <MissionVisionCard content={item} type={key} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                color: themeColors.text,
                mb: 3
              }}
            >
              Join Our Mission
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: themeColors.textSecondary,
                mb: 4,
                maxWidth: '500px',
                mx: 'auto'
              }}
            >
              Be part of transforming bio-industries through intelligent innovation and sustainable practices
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center" 
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRight />}
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
                Explore Opportunities
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
                Watch Our Vision
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}