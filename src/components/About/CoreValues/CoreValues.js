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
  AutoAwesome,
  Nature,
  VerifiedUser,
  Science,
  CenterFocusStrong,
  School,
  Verified,
  CheckCircle,
  TrendingUp,
  EmojiEvents,
  Star,
  KeyboardArrowRight,
  PlayArrow,
  Insights,
  Groups,
  Psychology
} from '@mui/icons-material';

const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary'
  });

  const { icon: Icon, title, description, color, metrics, principles } = value;

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (value.score || 92)) {
            clearInterval(timer);
            return value.score || 92;
          }
          return prev + 3;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, value.score]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={handleInView}
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
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 25px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${color}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            opacity: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${color}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Header with Icon and Badge */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: hasAnimated ? [0, -10, 10, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                  border: `3px solid ${color}30`,
                  boxShadow: `0 8px 32px ${color}20`
                }}
              >
                <Icon sx={{ color: color, fontSize: 36 }} />
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 + 0.5 }}
            >
              <Chip
                icon={<Verified sx={{ fontSize: '14px !important' }} />}
                label="Core Value"
                size="small"
                sx={{
                  background: `${color}15`,
                  color: color,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  border: `1px solid ${color}30`,
                  '& .MuiChip-icon': {
                    color: color
                  }
                }}
              />
            </motion.div>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                Excellence Rating
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: color, 
                  fontWeight: 700,
                  fontSize: '0.75rem'
                }}
              >
                {progress}%
              </Typography>
            </Box>
            
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${color}, ${color}CC)`
                }
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: '1.3rem',
                lineHeight: 1.2,
                mb: 2,
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
              variant="body1"
              sx={{
                color: themeColors.textSecondary,
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 3
              }}
            >
              {description}
            </Typography>

            {/* Key Principles */}
            <Stack spacing={1}>
              {principles?.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + idx * 0.1 + 0.8 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: color, fontSize: 16 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '0.875rem'
                      }}
                    >
                      {principle}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Metrics */}
          {metrics && (
            <>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
              <Grid container spacing={2}>
                {Object.entries(metrics).map(([key, value], idx) => (
                  <Grid item xs={6} key={idx}>
                    <Stack spacing={0.5} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          color: color,
                          fontWeight: 700,
                          fontSize: '1rem'
                        }}
                      >
                        {value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: themeColors.textMuted,
                          fontSize: '0.7rem',
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
            </>
          )}
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
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={handleInView}
      whileHover={{ y: -8, scale: 1.05 }}
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
            border: `2px solid ${stat.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${stat.color}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
            opacity: 0.8
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

export default function CoreValues() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
    brand: 'brand.primary',
  });

  const values = [
    {
      title: 'Innovation Excellence',
      icon: AutoAwesome,
      description: 'We push boundaries and embrace cutting-edge technologies to create revolutionary bio-industry solutions.',
      color: '#10B981',
      score: 95,
      principles: [
        'Breakthrough technology development',
        'Continuous R&D investment',
        'Patent-driven innovation',
        'Future-focused solutions'
      ],
      metrics: {
        patents: '12+',
        innovations: '50+'
      }
    },
    {
      title: 'Sustainability Focus',
      icon: Nature,
      description: 'Environmental responsibility and sustainable practices guide every decision we make across all operations.',
      color: '#22C55E',
      score: 98,
      principles: [
        'Carbon-neutral operations',
        'Sustainable technology design',
        'Environmental impact reduction',
        'Green energy utilization'
      ],
      metrics: {
        carbonReduction: '40%',
        sustainability: '98%'
      }
    },
    {
      title: 'Ethical Standards',
      icon: VerifiedUser,
      description: 'We maintain the highest ethical standards in animal welfare, data privacy, and business practices.',
      color: '#3B82F6',
      score: 99,
      principles: [
        'Animal welfare priority',
        'Data privacy protection',
        'Transparent operations',
        'Responsible AI development'
      ],
      metrics: {
        compliance: '100%',
        certification: 'AAA+'
      }
    },
    {
      title: 'Scientific Rigor',
      icon: Science,
      description: 'Evidence-based approaches and rigorous scientific methodology drive our development and validation processes.',
      color: '#8B5CF6',
      score: 94,
      principles: [
        'Peer-reviewed research',
        'Data-driven decisions',
        'Scientific validation',
        'Academic collaboration'
      ],
      metrics: {
        publications: '25+',
        accuracy: '99.2%'
      }
    },
    {
      title: 'Customer Partnership',
      icon: CenterFocusStrong,
      description: 'We build lasting partnerships by deeply understanding and consistently exceeding customer expectations.',
      color: '#F59E0B',
      score: 96,
      principles: [
        'Customer-centric design',
        '24/7 support availability',
        'Collaborative development',
        'Success-driven partnerships'
      ],
      metrics: {
        satisfaction: '4.9/5',
        retention: '95%'
      }
    },
    {
      title: 'Continuous Learning',
      icon: School,
      description: 'We foster a culture of continuous learning and adaptation in our rapidly evolving technological landscape.',
      color: '#EF4444',
      score: 92,
      principles: [
        'Skills development programs',
        'Knowledge sharing culture',
        'Industry trend analysis',
        'Technology adaptation'
      ],
      metrics: {
        training: '120hrs',
        certifications: '30+'
      }
    }
  ];

  const statistics = [
    { value: '6', label: 'Core Values', icon: Star, color: '#10B981' },
    { value: '99+', label: 'Satisfaction Score', icon: EmojiEvents, color: '#F59E0B' },
    { value: '500+', label: 'Ethical Practices', icon: VerifiedUser, color: '#3B82F6' },
    { value: '100', label: 'Team Alignment', icon: Groups, color: '#8B5CF6' }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`
          : `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 25% 25%, ${colors.brand.primary}04 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, ${colors.brand.primaryLight || colors.brand.primary}03 0%, transparent 50%)`,
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
              <Star sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Core Values"
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
              Our Guiding Principles
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
              The fundamental values that shape our culture, drive our decisions, 
              and define our commitment to excellence in bio-industry innovation
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

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ValueCard value={value} index={index} />
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
              Values-Driven Innovation
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
              Experience how our core values translate into exceptional bio-industry solutions
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
                See Values in Action
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
                Watch Our Culture
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}