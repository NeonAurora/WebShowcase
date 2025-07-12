'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Grid,
  IconButton,
  Fade
} from '@mui/material';
import { 
  NewReleases,
  Handshake,
  EmojiEvents,
  Science,
  TrendingUp,
  ChevronRight,
  AccessTime,
  Visibility,
  OpenInNew,
  NotificationsActive
} from '@mui/icons-material';

const NewsCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getTypeIcon = (type) => {
    const iconMap = {
      "Product Update": NewReleases,
      "Partnership": Handshake,
      "Award": EmojiEvents,
      "Research": Science
    };
    return iconMap[type] || NewReleases;
  };

  const getTypeColor = (type) => {
    const colorMap = {
      "Product Update": themeColors.primary,
      "Partnership": '#2563eb',
      "Award": '#f59e0b',
      "Research": '#8b5cf6'
    };
    return colorMap[type] || themeColors.primary;
  };

  const TypeIcon = getTypeIcon(item.type);
  const typeColor = getTypeColor(item.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            borderColor: `${typeColor}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.15)`,
            transform: 'translateY(-8px)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${typeColor}, ${typeColor}80)`,
            transition: 'opacity 0.3s ease',
            opacity: isHovered ? 1 : 0.7
          }
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background: `${typeColor}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <TypeIcon sx={{ color: typeColor, fontSize: 24 }} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: themeColors.textMuted,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {item.type}
                </Typography>
              </Box>
            </Stack>

            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  background: `${typeColor}20`,
                  color: typeColor,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  height: '24px',
                  '& .MuiChip-label': {
                    px: 1.5
                  }
                }}
              />
            </motion.div>
          </Box>

          {/* Content */}
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.3,
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                fontSize: '0.875rem',
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {item.description}
            </Typography>
          </Box>

          {/* Footer */}
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center"
            sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTime sx={{ color: themeColors.textMuted, fontSize: 16 }} />
              <Typography
                variant="caption"
                sx={{
                  color: themeColors.textMuted,
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}
              >
                {item.date}
              </Typography>
            </Stack>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                size="small"
                sx={{
                  color: typeColor,
                  opacity: isHovered ? 1 : 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `${typeColor}10`
                  }
                }}
              >
                <ChevronRight />
              </IconButton>
            </motion.div>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FloatingNotification = () => {
  const [visible, setVisible] = useState(true);
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary'
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            zIndex: 1000
          }}
        >
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${themeColors.primary}40`,
              borderRadius: 3,
              p: 2,
              boxShadow: `0 12px 40px ${themeColors.primary}20`,
              maxWidth: '280px'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <NotificationsActive sx={{ color: themeColors.primary }} />
              <Box>
                <Typography variant="body2" sx={{ color: themeColors.text, fontWeight: 600 }}>
                  New Update Available
                </Typography>
                <Typography variant="caption" sx={{ color: themeColors.primary }}>
                  Smart Monitoring 2.0 is live!
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setVisible(false)}>
                ×
              </IconButton>
            </Stack>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatisticCounter = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = value / 60;
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      style={{ textAlign: 'center' }}
    >
      <Typography
        variant="h4"
        sx={{
          color: themeColors.primary,
          fontWeight: 800,
          fontSize: { xs: '1.5rem', sm: '2rem' }
        }}
      >
        {count.toLocaleString()}+
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: themeColors.textSecondary,
          fontWeight: 600,
          fontSize: '0.875rem'
        }}
      >
        {label}
      </Typography>
    </motion.div>
  );
};

export default function NewsroomTicker() {
  const { colors, isDark } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.secondary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const newsContent = {
    title: "Latest from Somaticx",
    subtitle: "Innovation Updates & Industry Breakthroughs",
    description: "Stay connected with our latest developments, partnerships, and technological advances in bio-industry solutions.",
    news: [
      {
        type: "Product Update",
        title: "Smart Monitoring System 2.0 Released",
        date: "July 2025",
        description: "Enhanced AI capabilities for livestock health prediction with 40% improved accuracy and real-time analytics dashboard.",
        badge: "New Release",
        readTime: "3 min read"
      },
      {
        type: "Partnership",
        title: "Strategic Alliance with AgriTech Leaders",
        date: "June 2025",
        description: "Expanding our reach in sustainable agriculture solutions through collaboration with industry pioneers.",
        badge: "Partnership",
        readTime: "5 min read"
      },
      {
        type: "Award",
        title: "Innovation Excellence Award 2025",
        date: "May 2025",
        description: "Recognized for outstanding contributions to bio-technology and sustainable agricultural practices.",
        badge: "Achievement",
        readTime: "2 min read"
      },
      {
        type: "Research",
        title: "Breakthrough in Precision Agriculture",
        date: "April 2025",
        description: "New machine learning algorithms improve crop yield predictions by 40% while reducing resource consumption.",
        badge: "Research",
        readTime: "7 min read"
      }
    ],
    statistics: [
      { value: 50, label: "Updates This Year" },
      { value: 125, label: "News Articles" },
      { value: 30, label: "Press Mentions" }
    ]
  };

  return (
    <>
      <FloatingNotification />
      
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
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
            background: `radial-gradient(circle at 30% 60%, ${colors.brand.primary}05 0%, transparent 50%), 
                         radial-gradient(circle at 70% 30%, ${colors.brand.primaryLight}03 0%, transparent 50%)`,
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                label="Newsroom"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.primaryLight}10)`,
                  color: themeColors.primary,
                  border: `1px solid ${colors.brand.primary}25`,
                  backdropFilter: 'blur(8px)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 3
                }}
              />
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
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: themeColors.text,
                  background: `linear-gradient(135deg, ${themeColors.text} 0%, ${themeColors.primary} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                {newsContent.title}
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
                  color: themeColors.primary,
                  fontWeight: 600,
                  mb: 2
                }}
              >
                {newsContent.subtitle}
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
                  color: themeColors.textSecondary,
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                {newsContent.description}
              </Typography>
            </motion.div>
          </Box>

          {/* Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 4,
                p: 4,
                mb: 8,
                textAlign: 'center'
              }}
            >
              <Grid container spacing={4} justifyContent="center">
                {newsContent.statistics.map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <StatisticCounter
                      value={stat.value}
                      label={stat.label}
                      delay={1000 + (index * 200)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </motion.div>

          {/* News Cards Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {newsContent.news.map((item, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <NewsCard item={item} index={index} />
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Visibility />}
                  href="/newsroom"
                  sx={{
                    background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
                    color: '#ffffff',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
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
                  View All Updates
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<OpenInNew />}
                  href="/subscribe"
                  sx={{
                    borderColor: colors.brand.primary,
                    color: themeColors.primary,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
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
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}