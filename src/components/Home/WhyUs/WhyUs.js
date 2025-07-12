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
  IconButton
} from '@mui/material';
import { 
  Science,
  TrendingUp,
  Groups,
  Build,
  // Innovation,
  Biotech,
  Analytics,
  Support,
  Verified,
  Speed,
  Security,
  Star,
  CheckCircle,
  Timeline,
  Psychology,
  AutoAwesome,
  Nature,
  Public,
  School,
  Engineering,
  HealthAndSafety,
  Insights,
  ArrowForward
} from '@mui/icons-material';

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getFeatureIcon = (title) => {
    const iconMap = {
      "Innovation in Bio-IT": Science,
      "Proven Impact": TrendingUp,
      "Cross-disciplinary Expertise": Groups,
      "End-to-End Support": Build,
      "Advanced Research": Biotech,
      "Global Reach": Public,
      "Sustainable Solutions": Nature,
      "Expert Team": School
    };
    return iconMap[title] || Science;
  };

  const getFeatureColor = (title) => {
    const colorMap = {
      "Innovation in Bio-IT": "#8B5CF6",
      "Proven Impact": "#10B981",
      "Cross-disciplinary Expertise": "#F59E0B", 
      "End-to-End Support": "#3B82F6",
      "Advanced Research": "#EF4444",
      "Global Reach": "#06B6D4",
      "Sustainable Solutions": "#84CC16",
      "Expert Team": "#F97316"
    };
    return colorMap[title] || themeColors.primary;
  };

  const FeatureIcon = getFeatureIcon(feature.title);
  const featureColor = getFeatureColor(feature.title);

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (feature.score || 95)) {
            clearInterval(timer);
            return feature.score || 95;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, feature.score]);

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
      whileHover={{ y: -12 }}
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
            ? `2px solid ${featureColor}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 25px 60px rgba(0, 0, 0, 0.2)`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${featureColor}, ${featureColor}80)`,
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
            background: `radial-gradient(circle at 50% 0%, ${featureColor}08, transparent 70%)`,
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
                rotate: isHovered ? [0, -10, 10, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  background: `linear-gradient(135deg, ${featureColor}20, ${featureColor}10)`,
                  border: `3px solid ${featureColor}30`,
                  boxShadow: `0 8px 32px ${featureColor}20`
                }}
              >
                <FeatureIcon sx={{ color: featureColor, fontSize: 36 }} />
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              <Chip
                icon={<Verified sx={{ fontSize: '14px !important' }} />}
                label="Verified"
                size="small"
                sx={{
                  background: `${featureColor}15`,
                  color: featureColor,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  border: `1px solid ${featureColor}30`,
                  '& .MuiChip-icon': {
                    color: featureColor
                  }
                }}
              />
            </motion.div>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                Excellence Score
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: featureColor, 
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
                  background: `linear-gradient(90deg, ${featureColor}, ${featureColor}CC)`
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
                  ? `linear-gradient(135deg, ${themeColors.text}, ${featureColor})`
                  : 'none',
                backgroundClip: isHovered ? 'text' : 'initial',
                WebkitBackgroundClip: isHovered ? 'text' : 'initial',
                WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
                transition: 'all 0.3s ease'
              }}
            >
              {feature.title}
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
              {feature.description}
            </Typography>

            {/* Key Benefits */}
            <Stack spacing={1}>
              {feature.benefits?.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: featureColor, fontSize: 16 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '0.875rem'
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Statistics */}
          {feature.stats && (
            <Box sx={{ mb: 3 }}>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
              <Grid container spacing={2}>
                {Object.entries(feature.stats).map(([key, value], idx) => (
                  <Grid item xs={6} key={idx}>
                    <Stack spacing={0.5} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          color: featureColor,
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
                          textAlign: 'center'
                        }}
                      >
                        {key}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Learn More Button */}
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            fullWidth
            sx={{
              color: featureColor,
              fontWeight: 600,
              textTransform: 'none',
              justifyContent: 'space-between',
              opacity: isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                background: `${featureColor}10`
              }
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CompanyMetric = ({ metric, index }) => {
  const [count, setCount] = useState(0);
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const target = metric.value;
      const increment = target / 60;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
    }, index * 200 + 1000);

    return () => clearTimeout(timer);
  }, [metric.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 1 }}
    >
      <Stack spacing={1} alignItems="center">
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            background: `${metric.color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1
          }}
        >
          <metric.icon sx={{ color: metric.color, fontSize: 28 }} />
        </Box>
        <Typography 
          variant="h4" 
          sx={{ 
            color: metric.color, 
            fontWeight: 800,
            fontSize: { xs: '1.5rem', sm: '2rem' }
          }}
        >
          {count}{metric.suffix}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.textSecondary,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {metric.label}
        </Typography>
      </Stack>
    </motion.div>
  );
};

const FloatingTestimonial = () => {
  const [visible, setVisible] = useState(true);
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    surface: 'surface.primary'
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: 'fixed',
            top: '200px',
            right: '20px',
            zIndex: 1000,
            maxWidth: '320px'
          }}
        >
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${themeColors.primary}30`,
              borderRadius: 3,
              p: 3,
              boxShadow: `0 16px 48px rgba(0, 0, 0, 0.1)`
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 40, height: 40 }}>
                  <AutoAwesome sx={{ color: themeColors.primary }} />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: themeColors.text, fontWeight: 600 }}>
                    Dr. Sarah Mitchell
                  </Typography>
                  <Typography variant="caption" sx={{ color: themeColors.primary }}>
                    Agricultural Director
                  </Typography>
                </Box>
                <IconButton size="small" onClick={() => setVisible(false)}>
                  ×
                </IconButton>
              </Box>
              
              <Typography variant="body2" sx={{ color: themeColors.text, fontStyle: 'italic' }}>
                {"\"Somaticx transformed our farm operations with 40% efficiency gains in just 6 months!\" "}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} sx={{ color: '#F59E0B', fontSize: 16 }} />
                ))}
                <Typography variant="caption" sx={{ color: themeColors.primary, ml: 1 }}>
                  Verified Customer
                </Typography>
              </Box>
            </Stack>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function WhyUs() {
  const { colors, isDark } = useTheme();
  
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

  const whyUsContent = {
    title: "Why Choose Somaticx?",
    subtitle: "Four Pillars of Excellence That Set Us Apart",
    description: "Our unique combination of cutting-edge technology, proven expertise, and unwavering commitment to innovation makes us the trusted partner for bio-industry transformation.",
    features: [
      {
        title: "Innovation in Bio-IT",
        description: "Pioneering technology that seamlessly bridges biology and information systems, delivering breakthrough solutions that revolutionize agricultural practices.",
        score: 96,
        benefits: [
          "AI-powered analytics",
          "Real-time monitoring",
          "Predictive modeling",
          "IoT integration"
        ],
        stats: {
          "Patents": "15+",
          "R&D": "25%"
        }
      },
      {
        title: "Proven Impact",
        description: "Measurable results that drive unprecedented growth, operational efficiency, and environmental sustainability across diverse agricultural sectors.",
        score: 94,
        benefits: [
          "40% efficiency gains",
          "35% cost reduction",
          "98% satisfaction rate",
          "ROI in 6 months"
        ],
        stats: {
          "Success": "98%",
          "Growth": "+40%"
        }
      },
      {
        title: "Cross-disciplinary Expertise",
        description: "Our diverse team uniquely combines deep biological knowledge, advanced technology skills, and extensive industry experience.",
        score: 92,
        benefits: [
          "PhD-level scientists",
          "Industry veterans",
          "Tech innovators",
          "Domain experts"
        ],
        stats: {
          "Team": "50+",
          "Experience": "15 yrs"
        }
      },
      {
        title: "End-to-End Support",
        description: "Comprehensive partnership from initial conception through implementation and beyond, ensuring your success at every step of the transformation journey.",
        score: 97,
        benefits: [
          "24/7 support",
          "Training programs",
          "Custom solutions",
          "Ongoing optimization"
        ],
        stats: {
          "Support": "24/7",
          "Response": "< 2h"
        }
      }
    ],
    metrics: [
      { icon: Science, value: 15, suffix: '+', label: 'Research Papers', color: '#8B5CF6' },
      { icon: Public, value: 50, suffix: '+', label: 'Countries Served', color: '#10B981' },
      { icon: Groups, value: 500, suffix: '+', label: 'Happy Clients', color: '#F59E0B' },
      { icon: Nature, value: 98, suffix: '%', label: 'Sustainability Score', color: '#84CC16' }
    ]
  };

  return (
    <>
      <FloatingTestimonial />
      
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
            background: `radial-gradient(circle at 25% 25%, ${colors.brand.primary}06 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, ${colors.brand.primaryLight}04 0%, transparent 50%)`,
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
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <AutoAwesome sx={{ color: themeColors.primary, fontSize: 28 }} />
                <Chip
                  label="Why Choose Us"
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
                {whyUsContent.title}
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
                {whyUsContent.subtitle}
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
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                {whyUsContent.description}
              </Typography>
            </motion.div>
          </Box>

          {/* Company Metrics */}
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
                mb: 8
              }}
            >
              <Grid container spacing={4}>
                {whyUsContent.metrics.map((metric, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <CompanyMetric metric={metric} index={index} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {whyUsContent.features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <FeatureCard feature={feature} index={index} />
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 4,
                  p: 6,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                <Stack spacing={3} alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 700,
                      textAlign: 'center'
                    }}
                  >
                    Ready to Transform Your Operations?
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: themeColors.textSecondary,
                      textAlign: 'center',
                      lineHeight: 1.6
                    }}
                  >
                    Join hundreds of industry leaders who trust Somaticx to drive their bio-industry innovation and growth.
                  </Typography>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Science />}
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
                        '&:hover': {
                          background: `linear-gradient(135deg, ${colors.brand.primaryDark}, ${colors.brand.primary})`,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 12px 40px ${colors.brand.primary}50`
                        }
                      }}
                    >
                      Start Your Journey
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Support />}
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
                        background: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(8px)',
                        '&:hover': {
                          borderColor: colors.brand.primaryDark,
                          background: `${colors.brand.primary}10`,
                          borderWidth: '2px'
                        }
                      }}
                    >
                      Talk to Expert
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}