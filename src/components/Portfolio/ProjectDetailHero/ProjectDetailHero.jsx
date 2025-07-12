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
  IconButton,
  Breadcrumbs,
  Link
} from '@mui/material';
import { 
  ArrowBack,
  Launch,
  GitHub,
  Share,
  Bookmark,
  CheckCircle,
  Schedule,
  Planning,
  Agriculture,
  Pets,
  Science,
  Engineering,
  Analytics,
  CloudQueue,
  Memory,
  DeviceHub,
  TrendingUp,
  Speed,
  EmojiEvents,
  Star,
  Verified,
  NavigateNext,
  Home
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const ProjectDetailHero = ({ project }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Agriculture': Agriculture,
      'Livestock': Pets,
      'Bio-Tech': Science,
      'IoT Solutions': Engineering,
      'Analytics': Analytics,
      'Software': Memory,
      'Hardware': DeviceHub,
      'Cloud': CloudQueue
    };
    return iconMap[categoryName] || Science;
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return CheckCircle;
      case 'in progress': return Schedule;
      case 'planning': return Planning;
      case 'live': return CheckCircle;
      case 'beta': return Schedule;
      default: return Schedule;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return '#10B981';
      case 'in progress': return '#F59E0B';
      case 'planning': return '#3B82F6';
      case 'live': return '#10B981';
      case 'beta': return '#8B5CF6';
      default: return '#3B82F6';
    }
  };

  const CategoryIcon = getCategoryIcon(project.category.name);
  const StatusIcon = getStatusIcon(project.status);
  const statusColor = getStatusColor(project.status);

  // Animate progress on mount
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= (project.completionRate || 85)) {
          clearInterval(timer);
          return project.completionRate || 85;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [project.completionRate]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
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
          background: `radial-gradient(circle at 30% 40%, ${project.category.color}06 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${project.category.color}04 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            sx={{ mb: 4 }}
          >
            <Link
              component="button"
              onClick={() => router.push('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: themeColors.textSecondary,
                textDecoration: 'none',
                '&:hover': { color: themeColors.brand }
              }}
            >
              <Home fontSize="small" />
              Home
            </Link>
            <Link
              component="button"
              onClick={() => router.push('/portfolio')}
              sx={{
                color: themeColors.textSecondary,
                textDecoration: 'none',
                '&:hover': { color: themeColors.brand }
              }}
            >
              Portfolio
            </Link>
            <Typography color={themeColors.text} sx={{ fontWeight: 500 }}>
              {project.title}
            </Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            startIcon={<ArrowBack />}
            onClick={() => router.back()}
            sx={{
              mb: 4,
              color: themeColors.textSecondary,
              fontWeight: 500,
              '&:hover': {
                color: themeColors.brand,
                background: 'rgba(255, 255, 255, 0.05)'
              }
            }}
          >
            Back to Portfolio
          </Button>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Project Hero Image/Icon */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <Box
                sx={{
                  height: 400,
                  background: `linear-gradient(135deg, ${project.category.color}15, ${project.category.color}25)`,
                  borderRadius: 6,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 30% 40%, ${project.category.color}20 0%, transparent 50%), 
                                 radial-gradient(circle at 70% 60%, ${project.category.color}15 0%, transparent 50%)`,
                    opacity: 0.8
                  }}
                />

                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{ zIndex: 2 }}
                >
                  <Avatar
                    sx={{
                      width: 160,
                      height: 160,
                      background: `linear-gradient(135deg, ${project.category.color}, ${project.category.color}CC)`,
                      border: `6px solid rgba(255, 255, 255, 0.3)`,
                      boxShadow: `0 30px 80px ${project.category.color}40`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <CategoryIcon sx={{ color: 'white', fontSize: 80 }} />
                  </Avatar>
                </motion.div>

                {/* Status Badge */}
                <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                  <Chip
                    icon={<StatusIcon sx={{ fontSize: '16px !important' }} />}
                    label={project.status}
                    sx={{
                      background: `${statusColor}15`,
                      color: statusColor,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: `2px solid ${statusColor}40`,
                      backdropFilter: 'blur(10px)',
                      '& .MuiChip-icon': {
                        color: statusColor
                      }
                    }}
                  />
                </Box>

                {/* Category Badge */}
                <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
                  <Chip
                    label={project.category.name}
                    sx={{
                      background: `${project.category.color}20`,
                      color: project.category.color,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: `2px solid ${project.category.color}40`,
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Project Info */}
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 2,
                    background: `linear-gradient(135deg, ${themeColors.text}, ${project.category.color})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {project.title}
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    color: themeColors.textSecondary,
                    lineHeight: 1.6,
                    maxWidth: '90%'
                  }}
                >
                  {project.fullDescription || project.description}
                </Typography>
              </motion.div>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 600 }}>
                      Project Progress
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: project.category.color, 
                        fontWeight: 700
                      }}
                    >
                      {progress}%
                    </Typography>
                  </Box>
                  
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 6,
                        background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}CC)`
                      }
                    }}
                  />
                </Box>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Box>
                  <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 600, mb: 2 }}>
                    Key Technologies
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Chip
                          label={tech}
                          sx={{
                            background: `${project.category.color}15`,
                            color: project.category.color,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            border: `1px solid ${project.category.color}30`,
                            '&:hover': {
                              background: `${project.category.color}25`,
                              transform: 'translateY(-2px)'
                            }
                          }}
                        />
                      </motion.div>
                    ))}
                    {project.technologies.length > 5 && (
                      <Chip
                        label={`+${project.technologies.length - 5} more`}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: themeColors.textSecondary,
                          fontWeight: 500
                        }}
                      />
                    )}
                  </Stack>
                </Box>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  {project.links?.demo && (
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Launch />}
                      href={project.links.demo}
                      target="_blank"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${project.category.color}, ${project.category.color}CC)`,
                        boxShadow: `0 8px 32px ${project.category.color}30`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${project.category.color}DD, ${project.category.color})`,
                          boxShadow: `0 12px 48px ${project.category.color}40`,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      View Live Demo
                    </Button>
                  )}
                  
                  {project.links?.github && (
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<GitHub />}
                      href={project.links.github}
                      target="_blank"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        borderColor: `${project.category.color}40`,
                        color: project.category.color,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          borderColor: project.category.color,
                          background: `${project.category.color}10`,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Source Code
                    </Button>
                  )}

                  <IconButton
                    onClick={handleShare}
                    sx={{
                      width: 56,
                      height: 56,
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: themeColors.textSecondary,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        color: themeColors.brand,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Share />
                  </IconButton>

                  <IconButton
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    sx={{
                      width: 56,
                      height: 56,
                      background: isBookmarked ? `${project.category.color}15` : 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${isBookmarked ? project.category.color + '40' : 'rgba(255, 255, 255, 0.12)'}`,
                      color: isBookmarked ? project.category.color : themeColors.textSecondary,
                      '&:hover': {
                        background: `${project.category.color}15`,
                        color: project.category.color,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Bookmark />
                  </IconButton>
                </Stack>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetailHero;