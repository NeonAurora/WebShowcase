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
  IconButton,
  Button
} from '@mui/material';
import { 
  Nature,
  RocketLaunch,
  TrendingUp,
  Public,
  Timeline,
  PlayArrow,
  CheckCircle,
  AutoAwesome,
  KeyboardArrowRight,
  FiberManualRecord,
  BusinessCenter,
  Engineering,
  Science,
  Verified
} from '@mui/icons-material';

const TimelineCard = ({ item, index, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const { icon: Icon, year, title, description, color, achievements } = item;
  const isEven = index % 2 === 0;

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (item.progressValue || 85)) {
            clearInterval(timer);
            return item.progressValue || 85;
          }
          return prev + 3;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, item.progressValue]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 80
      }}
      onViewportEnter={handleInView}
      className="relative"
    >
      {/* Timeline Connection Line */}
      {!isLast && (
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '24px', md: '50%' },
            top: '120px',
            width: { xs: '2px', md: '2px' },
            height: '120px',
            background: `linear-gradient(180deg, ${color}60, ${color}20)`,
            transform: { md: 'translateX(-50%)' },
            zIndex: 0
          }}
        />
      )}

      {/* Timeline Dot */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '16px', md: '50%' },
          top: '32px',
          transform: { md: 'translateX(-50%)' },
          zIndex: 2
        }}
      >
        <motion.div
          animate={{ 
            scale: hasAnimated ? [1, 1.3, 1] : 1,
            rotate: hasAnimated ? [0, 180, 360] : 0
          }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              background: `linear-gradient(135deg, ${color}, ${color}CC)`,
              border: `3px solid rgba(255, 255, 255, 0.2)`,
              boxShadow: `0 8px 32px ${color}30, 0 0 0 8px rgba(255, 255, 255, 0.05)`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Icon sx={{ color: 'white', fontSize: 28 }} />
          </Avatar>
        </motion.div>
      </Box>

      {/* Content Card */}
      <Box
        sx={{
          pl: { xs: '80px', md: 0 },
          pr: { xs: 0, md: isEven ? '60px' : 0 },
          pl: { xs: '80px', md: isEven ? 0 : '60px' },
          textAlign: { md: isEven ? 'right' : 'left' }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            sx={{
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
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.25), 0 8px 32px ${color}20`,
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
                background: `radial-gradient(circle at ${isEven ? '100% 0%' : '0% 0%'}, ${color}08, transparent 60%)`,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none'
              }
            }}
          >
            <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
              
              {/* Header */}
              <Stack 
                direction="row" 
                justifyContent="space-between" 
                alignItems="flex-start" 
                spacing={2}
                sx={{ mb: 3 }}
              >
                <Box sx={{ flexGrow: 1, order: { md: isEven ? 2 : 1 } }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: color,
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em',
                      mb: 1,
                      display: 'block'
                    }}
                  >
                    {year}
                  </Typography>
                  
                  <Typography
                    variant="h4"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 700,
                      fontSize: '1.5rem',
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
                </Box>

                <Box sx={{ order: { md: isEven ? 1 : 2 } }}>
                  <Chip
                    icon={<Verified sx={{ fontSize: '14px !important' }} />}
                    label={index === 3 ? "Vision" : "Milestone"}
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
                </Box>
              </Stack>

              {/* Progress Indicator */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: themeColors.textSecondary, fontSize: '0.75rem' }}>
                    {index === 3 ? 'Vision Progress' : 'Completion Status'}
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

              {/* Description */}
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

              {/* Achievements */}
              {achievements && (
                <>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
                  <Stack spacing={1}>
                    {achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
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
                            {achievement}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default function CompanyStory() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
    brand: 'brand.primary',
  });

  const timeline = [
    {
      year: '2023',
      title: 'The Foundation',
      description: 'Founded by a team of biotechnology and software engineering experts who recognized the transformative potential of intelligent systems in bio-industries.',
      icon: Nature,
      color: '#10B981',
      progressValue: 100,
      achievements: [
        'Assembled core founding team',
        'Defined company vision and mission',
        'Secured initial seed funding',
        'Established development infrastructure'
      ]
    },
    {
      year: '2024',
      title: 'Technology Breakthrough',
      description: 'Developed our revolutionary core technology platform and successfully completed initial proof-of-concept projects in livestock monitoring and agricultural optimization.',
      icon: RocketLaunch,
      color: '#3B82F6',
      progressValue: 95,
      achievements: [
        'Core AI platform development',
        'IoT integration framework',
        'First pilot customer deployments',
        'Patent applications filed'
      ]
    },
    {
      year: '2025',
      title: 'Market Expansion',
      description: 'Scaling our innovative technology stack, building strategic industry partnerships, and preparing for the commercial launch of our flagship bio-industry solutions.',
      icon: TrendingUp,
      color: '#F59E0B',
      progressValue: 78,
      achievements: [
        'Strategic partnerships established',
        'Technology stack optimization',
        'Market validation completed',
        'Go-to-market strategy finalized'
      ]
    },
    {
      year: 'Future',
      title: 'Global Innovation Leadership',
      description: 'Our vision to become the definitive platform for bio-industry innovation, fundamentally transforming how agriculture and livestock industries operate worldwide.',
      icon: Public,
      color: '#8B5CF6',
      progressValue: 25,
      achievements: [
        'Global market presence',
        'Industry standard establishment',
        'Sustainable impact at scale',
        'Next-generation platform evolution'
      ]
    }
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
          background: `radial-gradient(circle at 20% 30%, ${colors.brand.primary}04 0%, transparent 50%), 
                       radial-gradient(circle at 80% 70%, ${colors.brand.primaryLight || colors.brand.primary}03 0%, transparent 50%)`,
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
              <Timeline sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Our Journey"
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
              Our Innovation Story
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
              From ambitious startup vision to industry transformation - 
              charting our path toward revolutionizing bio-industries
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', position: 'relative' }}>
          <Stack spacing={8}>
            {timeline.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </Stack>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 12 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                color: themeColors.text,
                mb: 3
              }}
            >
              Be Part of Our Story
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
              Join us as we continue to shape the future of bio-industries
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
                Join Our Mission
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
                Watch Our Journey
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}