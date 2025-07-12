'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
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
  LinearProgress,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Pets,
  Agriculture,
  Analytics,
  PlayArrow,
  Visibility,
  ChevronRight,
  ArrowForward,
  TrendingUp,
  Science,
  Biotech,
  MonitorHeart,
  Psychology,
  Timeline,
  LiveTv,
  NewReleases,
  CheckCircle,
  Schedule
} from '@mui/icons-material';

const DemoCard = ({ demo, index, isActive, onHover, onLeave }) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight',
    success: 'status.success',
    warning: 'status.warning',
    info: 'status.info'
  });

  const getStatusColor = (status) => {
    const statusMap = {
      "Demo Ready": themeColors.success,
      "Beta Testing": themeColors.warning,
      "Live Demo Available": themeColors.info
    };
    return statusMap[status] || themeColors.primary;
  };

  const getStatusIcon = (status) => {
    const iconMap = {
      "Demo Ready": CheckCircle,
      "Beta Testing": Schedule,
      "Live Demo Available": LiveTv
    };
    return iconMap[status] || NewReleases;
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      "Animal Health": Pets,
      "Plant Tech": Agriculture,
      "Data Solutions": Analytics
    };
    return iconMap[category] || Science;
  };

  const StatusIcon = getStatusIcon(demo.status);
  const CategoryIcon = getCategoryIcon(demo.category);
  const statusColor = getStatusColor(demo.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -12 }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover(index);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        onLeave();
      }}
    >
      <Card
        sx={{
          height: '100%',
          background: isActive || isHovered 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isActive || isHovered 
            ? `2px solid ${themeColors.primary}60`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-12px)',
            boxShadow: `0 24px 60px rgba(0, 0, 0, 0.2)`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.primaryLight})`,
            opacity: isActive || isHovered ? 1 : 0.3,
            transition: 'opacity 0.3s ease'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${themeColors.primary}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Header with Icon and Status */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.primaryLight}10)`,
                  border: `2px solid ${themeColors.primary}30`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <CategoryIcon sx={{ color: themeColors.primary, fontSize: 32 }} />
              </Avatar>
            </motion.div>

            <Stack spacing={1} alignItems="flex-end">
              <Chip
                icon={<StatusIcon sx={{ fontSize: '16px !important' }} />}
                label={demo.status}
                size="small"
                sx={{
                  background: `${statusColor}15`,
                  color: statusColor,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  border: `1px solid ${statusColor}30`,
                  '& .MuiChip-icon': {
                    color: statusColor
                  }
                }}
              />
              
              <Typography
                variant="caption"
                sx={{
                  color: themeColors.textMuted,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {demo.category}
              </Typography>
            </Stack>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mb: 3 }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
            >
              <LinearProgress
                variant="determinate"
                value={demo.progress || 85}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 3,
                    background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.primaryLight})`
                  }
                }}
              />
            </motion.div>
            <Typography
              variant="caption"
              sx={{
                color: themeColors.textMuted,
                fontSize: '0.75rem',
                mt: 0.5,
                display: 'block'
              }}
            >
              {demo.progress || 85}% Development Complete
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: '1.4rem',
                lineHeight: 1.2,
                mb: 2,
                background: isHovered 
                  ? `linear-gradient(135deg, ${themeColors.text}, ${themeColors.primary})`
                  : 'none',
                backgroundClip: isHovered ? 'text' : 'initial',
                WebkitBackgroundClip: isHovered ? 'text' : 'initial',
                WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
                transition: 'all 0.3s ease'
              }}
            >
              {demo.title}
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
              {demo.description}
            </Typography>

            {/* Features List */}
            <Stack spacing={1}>
              {demo.features?.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: themeColors.primary, fontSize: 16 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '0.875rem'
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Footer */}
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
          
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <LiveTv sx={{ color: themeColors.primary, fontSize: 18 }} />
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.primary,
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                Interactive Demo
              </Typography>
            </Stack>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                sx={{
                  color: themeColors.primary,
                  background: `${themeColors.primary}10`,
                  '&:hover': {
                    background: `${themeColors.primary}20`,
                    transform: 'rotate(45deg)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <ArrowForward />
              </IconButton>
            </motion.div>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const InteractiveBackground = ({ activeIndex }) => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

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
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: activeIndex === i ? [1, 1.2, 1] : [1, 1.05, 1],
            opacity: activeIndex === i ? [0.1, 0.2, 0.1] : [0.05, 0.1, 0.05],
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${themeColors.primary}, transparent)`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            filter: 'blur(40px)'
          }}
        />
      ))}
    </Box>
  );
};

export default function ProductDemoCarousel() {
  const { colors, isDark } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  const [activeCard, setActiveCard] = useState(null);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const demoContent = {
    title: "Revolutionary Solutions",
    subtitle: "Cutting-Edge Technology for Bio-Industries",
    description: "Experience the future of agricultural and livestock management through our interactive demonstrations and live prototypes.",
    demos: [
      {
        title: "Smart Livestock Monitoring",
        description: "Advanced AI-powered health tracking and behavioral analysis system for optimal livestock management and early disease detection.",
        category: "Animal Health",
        status: "Demo Ready",
        progress: 95,
        features: [
          "Real-time health monitoring",
          "Behavioral pattern analysis",
          "Predictive health alerts",
          "Integration with farm systems"
        ],
        metrics: {
          accuracy: "98.5%",
          responseTime: "< 2ms",
          coverage: "24/7"
        }
      },
      {
        title: "Precision Agriculture Platform",
        description: "Comprehensive IoT-enabled crop optimization platform using machine learning algorithms for sustainable farming practices.",
        category: "Plant Tech",
        status: "Beta Testing",
        progress: 87,
        features: [
          "Soil condition monitoring",
          "Weather pattern integration",
          "Yield prediction modeling",
          "Resource optimization"
        ],
        metrics: {
          efficiency: "+40%",
          waterSaving: "35%",
          yieldIncrease: "28%"
        }
      },
      {
        title: "Bio-Industry Analytics Suite",
        description: "Comprehensive data analytics and business intelligence platform designed specifically for agricultural and livestock operations.",
        category: "Data Solutions",
        status: "Live Demo Available",
        progress: 92,
        features: [
          "Real-time dashboards",
          "Predictive analytics",
          "Custom reporting",
          "API integrations"
        ],
        metrics: {
          dataPoints: "10M+",
          accuracy: "99.2%",
          uptime: "99.9%"
        }
      }
    ],
    cta: {
      primary: "Request Live Demo",
      secondary: "Explore Portfolio"
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`
          : `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        overflow: 'hidden'
      }}
    >
      <InteractiveBackground activeIndex={activeCard} />
      
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
              <Biotech sx={{ color: themeColors.primary, fontSize: 28 }} />
              <Chip
                label="Product Showcase"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.primaryLight}10)`,
                  color: themeColors.primary,
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
              {demoContent.title}
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
              {demoContent.subtitle}
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
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              {demoContent.description}
            </Typography>
          </motion.div>
        </Box>

        {/* Demo Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {demoContent.demos.map((demo, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <DemoCard 
                demo={demo} 
                index={index}
                isActive={activeCard === index}
                onHover={setActiveCard}
                onLeave={() => setActiveCard(null)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
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
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 3
              }}
            >
              Platform Performance Metrics
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Stack spacing={1} alignItems="center">
                  <TrendingUp sx={{ color: themeColors.primary, fontSize: 32 }} />
                  <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 800 }}>
                    40%
                  </Typography>
                  <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
                    Efficiency Increase
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Stack spacing={1} alignItems="center">
                  <MonitorHeart sx={{ color: themeColors.primary, fontSize: 32 }} />
                  <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 800 }}>
                    99.2%
                  </Typography>
                  <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
                    Accuracy Rate
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Stack spacing={1} alignItems="center">
                  <Timeline sx={{ color: themeColors.primary, fontSize: 32 }} />
                  <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 800 }}>
                    24/7
                  </Typography>
                  <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
                    Monitoring Coverage
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </motion.div>

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
                startIcon={<PlayArrow />}
                endIcon={<ChevronRight />}
                href="/demo"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
                  color: '#ffffff',
                  px: 5,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: `0 8px 32px ${colors.brand.primary}40`,
                  textTransform: 'none',
                  minWidth: '220px',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brand.primaryDark}, ${colors.brand.primary})`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${colors.brand.primary}50`
                  }
                }}
              >
                {demoContent.cta.primary}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Visibility />}
                href="/portfolio"
                sx={{
                  borderColor: colors.brand.primary,
                  color: themeColors.primary,
                  px: 5,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderWidth: '2px',
                  textTransform: 'none',
                  minWidth: '200px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: colors.brand.primaryDark,
                    background: `${colors.brand.primary}10`,
                    borderWidth: '2px'
                  }
                }}
              >
                {demoContent.cta.secondary}
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}