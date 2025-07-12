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
  LinearProgress,
  Chip,
  Divider
} from '@mui/material';
import { 
  Handshake,
  Assignment,
  Public,
  StarRate,
  TrendingUp,
  Speed,
  EmojiEvents,
  Verified,
  Timeline,
  Analytics,
  Groups,
  BusinessCenter
} from '@mui/icons-material';

const AnimatedCounter = ({ value, suffix = "", duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      const increment = numericValue / (duration / 16); // 60fps
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, delay, hasAnimated]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const displayValue = value.includes('%') ? `${count}%` : 
                     value.includes('+') ? `${count.toLocaleString()}+` : 
                     count.toLocaleString();

  return (
    <motion.div
      onViewportEnter={handleInView}
      viewport={{ once: true }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          fontWeight: 900,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
        }}
      >
        {displayValue}{suffix}
      </Typography>
    </motion.div>
  );
};

const StatCard = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getStatIcon = (label) => {
    const iconMap = {
      "Active Partners": Handshake,
      "Projects Delivered": Assignment,
      "Industries Served": Public,
      "Client Satisfaction": StarRate,
      "Success Rate": EmojiEvents,
      "Response Time": Speed,
      "Team Members": Groups,
      "Years Experience": BusinessCenter
    };
    return iconMap[label] || Analytics;
  };

  const getStatColor = (label) => {
    const colorMap = {
      "Active Partners": "#10B981",
      "Projects Delivered": "#3B82F6", 
      "Industries Served": "#8B5CF6",
      "Client Satisfaction": "#F59E0B",
      "Success Rate": "#EF4444",
      "Response Time": "#06B6D4",
      "Team Members": "#84CC16",
      "Years Experience": "#F97316"
    };
    return colorMap[label] || "#ffffff";
  };

  const StatIcon = getStatIcon(stat.label);
  const statColor = getStatColor(stat.label);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.25)' 
            : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? '2px solid rgba(255, 255, 255, 0.4)'
            : '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${statColor}, ${statColor}80)`,
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${statColor}15, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          
          {/* Icon */}
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0
            }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <Avatar
              sx={{
                width: 72,
                height: 72,
                background: `linear-gradient(135deg, ${statColor}30, ${statColor}20)`,
                border: `3px solid ${statColor}40`,
                mx: 'auto',
                boxShadow: `0 8px 32px ${statColor}30`
              }}
            >
              <StatIcon sx={{ color: statColor, fontSize: 36 }} />
            </Avatar>
          </motion.div>

          {/* Progress Ring for percentage stats */}
          {stat.number.includes('%') && (
            <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
              <motion.div
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 2 }}
              >
                <svg width="60" height="60" style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)' }}>
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke={statColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 25}`}
                    strokeDashoffset={`${2 * Math.PI * 25 * (1 - parseInt(stat.number) / 100)}`}
                    transform="rotate(-90 30 30)"
                  />
                </svg>
              </motion.div>
            </Box>
          )}

          {/* Counter */}
          <Box sx={{ mb: 2 }}>
            <AnimatedCounter 
              value={stat.number} 
              delay={index * 200 + 500}
            />
          </Box>

          {/* Label */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.3,
              mb: 2,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            {stat.label}
          </Typography>

          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 + 1.2 }}
          >
            <Chip
              icon={<Verified sx={{ fontSize: '16px !important' }} />}
              label={stat.achievement || "Verified"}
              size="small"
              sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 600,
                fontSize: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '& .MuiChip-icon': {
                  color: 'rgba(255, 255, 255, 0.9)'
                }
              }}
            />
          </motion.div>

          {/* Growth Indicator */}
          {stat.growth && (
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                <TrendingUp sx={{ color: '#10B981', fontSize: 16 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#10B981',
                    fontWeight: 700,
                    fontSize: '0.75rem'
                  }}
                >
                  +{stat.growth}% this year
                </Typography>
              </Stack>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FloatingElements = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)`,
            top: `${10 + i * 15}%`,
            left: `${5 + i * 15}%`,
            filter: 'blur(20px)'
          }}
        />
      ))}
    </Box>
  );
};

export default function StatsBar() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    primary: 'brand.flipPrimary',
    primaryDark: 'brand.flipPrimaryDark',
    text: 'text.inverse'
  });

  const statsContent = {
    title: "Impact by Numbers",
    subtitle: "Measurable Results That Define Excellence",
    description: "Our commitment to innovation and quality is reflected in these key metrics that showcase our impact across the bio-industry landscape.",
    stats: [
      { 
        number: "500+", 
        label: "Active Partners", 
        achievement: "Industry Leading",
        growth: "35"
      },
      { 
        number: "150+", 
        label: "Projects Delivered", 
        achievement: "Success Rate",
        growth: "28"
      },
      { 
        number: "25+", 
        label: "Industries Served", 
        achievement: "Global Reach",
        growth: "40"
      },
      { 
        number: "98%", 
        label: "Client Satisfaction", 
        achievement: "Excellence",
        growth: "12"
      }
    ]
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryDark} 100%)`,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)
          `,
          pointerEvents: 'none'
        }
      }}
    >
      <FloatingElements />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Analytics sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 28 }} />
              <Chip
                label="Performance Metrics"
                sx={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 2,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              {statsContent.title}
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
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 600,
                mb: 2
              }}
            >
              {statsContent.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              {statsContent.description}
            </Typography>
          </motion.div>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {statsContent.stats.map((stat, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <StatCard stat={stat} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Additional Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              p: 4,
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 700,
                mb: 3
              }}
            >
              Global Impact Overview
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3}>
                <Stack spacing={1} alignItems="center">
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.95)', 
                      fontWeight: 800 
                    }}
                  >
                    50+
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem'
                    }}
                  >
                    Countries Reached
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={3}>
                <Stack spacing={1} alignItems="center">
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.95)', 
                      fontWeight: 800 
                    }}
                  >
                    10M+
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem'
                    }}
                  >
                    Animals Monitored
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={3}>
                <Stack spacing={1} alignItems="center">
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.95)', 
                      fontWeight: 800 
                    }}
                  >
                    2.5M
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem'
                    }}
                  >
                    Hectares Optimized
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={3}>
                <Stack spacing={1} alignItems="center">
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.95)', 
                      fontWeight: 800 
                    }}
                  >
                    24/7
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.875rem'
                    }}
                  >
                    Support Coverage
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}