'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Card,
  CardContent,
  CardMedia,
  Typography, 
  Stack,
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  Divider,
  IconButton,
  Button,
  Paper
} from '@mui/material';
import { 
  Agriculture,
  Pets,
  Science,
  Engineering,
  Analytics,
  CloudQueue,
  Memory,
  DeviceHub,
  CheckCircle,
  Schedule,
  // Planning,
  Timelapse,
  Verified,
  TrendingUp,
  Speed,
  EmojiEvents,
  ChevronRight,
  Launch,
  Star,
  AutoAwesome,
  Insights
} from '@mui/icons-material';

const ProjectCard = ({ project, onClick, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

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

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return CheckCircle;
      case 'in progress': return Schedule;
      case 'planning': return Timelapse;
      case 'live': return CheckCircle;
      case 'beta': return Schedule;
      default: return Schedule;
    }
  };

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Agriculture': Agriculture,
      'Livestock': Pets,
      'Bio-Tech': Science,
      'IoT': Engineering,
      'Analytics': Analytics,
      'Software': Memory,
      'Hardware': DeviceHub,
      'Cloud': CloudQueue
    };
    return iconMap[categoryName] || Science;
  };

  const getTechIcon = (tech) => {
    const techIconMap = {
      'AI/ML': AutoAwesome,
      'IoT': DeviceHub,
      'Cloud': CloudQueue,
      'Analytics': Insights,
      'Hardware': Engineering,
      'Software': Memory
    };
    return techIconMap[tech] || Memory;
  };

  const statusColor = getStatusColor(project.status);
  const StatusIcon = getStatusIcon(project.status);
  const CategoryIcon = getCategoryIcon(project.category.name);

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (project.completionRate || 85)) {
            clearInterval(timer);
            return project.completionRate || 85;
          }
          return prev + 3;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, project.completionRate]);

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
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={handleInView}
    >
      <Card
        onClick={() => onClick(project)}
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? `2px solid ${project.category.color}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 25px 60px rgba(0, 0, 0, 0.25), 0 8px 32px ${project.category.color}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}80)`,
            opacity: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${project.category.color}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        {/* Project Hero Section */}
        <Box
          sx={{
            height: 200,
            background: `linear-gradient(135deg, ${project.category.color}15, ${project.category.color}25)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
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
              opacity: isHovered ? 1 : 0.5,
              transition: 'opacity 0.4s ease'
            }}
          />

          <motion.div
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: hasAnimated ? [0, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: 1 }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                background: `linear-gradient(135deg, ${project.category.color}, ${project.category.color}CC)`,
                border: `3px solid rgba(255, 255, 255, 0.3)`,
                boxShadow: `0 12px 40px ${project.category.color}30`
              }}
            >
              <CategoryIcon sx={{ color: 'white', fontSize: 40 }} />
            </Avatar>
          </motion.div>

          {/* Status Badge */}
          <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
            <Chip
              icon={<StatusIcon sx={{ fontSize: '14px !important' }} />}
              label={project.status}
              size="small"
              sx={{
                background: `${statusColor}15`,
                color: statusColor,
                fontWeight: 600,
                fontSize: '0.7rem',
                border: `1px solid ${statusColor}30`,
                backdropFilter: 'blur(10px)',
                '& .MuiChip-icon': {
                  color: statusColor
                }
              }}
            />
          </Box>

          {/* Category Badge */}
          <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
            <Chip
              label={project.category.name}
              size="small"
              sx={{
                background: `${project.category.color}20`,
                color: project.category.color,
                fontWeight: 600,
                fontSize: '0.7rem',
                border: `1px solid ${project.category.color}40`,
                backdropFilter: 'blur(10px)'
              }}
            />
          </Box>
        </Box>

        <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Progress Indicator */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                Project Progress
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: project.category.color, 
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
                  background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}CC)`
                }
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              color: themeColors.text,
              fontWeight: 700,
              fontSize: '1.25rem',
              lineHeight: 1.3,
              mb: 2,
              background: isHovered 
                ? `linear-gradient(135deg, ${themeColors.text}, ${project.category.color})`
                : 'none',
              backgroundClip: isHovered ? 'text' : 'initial',
              WebkitBackgroundClip: isHovered ? 'text' : 'initial',
              WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
              transition: 'all 0.3s ease',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: themeColors.textSecondary,
              fontSize: '0.875rem',
              lineHeight: 1.6,
              mb: 3,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flexGrow: 1
            }}
          >
            {project.description}
          </Typography>

          {/* Technologies */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                color: themeColors.textMuted,
                fontSize: '0.75rem',
                fontWeight: 600,
                mb: 1,
                display: 'block'
              }}
            >
              Technologies
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.technologies.slice(0, 3).map((tech, idx) => {
                const TechIcon = getTechIcon(tech);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 + 0.5 }}
                  >
                    <Chip
                      icon={<TechIcon sx={{ fontSize: '14px !important' }} />}
                      label={tech}
                      size="small"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: themeColors.textSecondary,
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(5px)',
                        '& .MuiChip-icon': {
                          color: project.category.color
                        }
                      }}
                    />
                  </motion.div>
                );
              })}
              {project.technologies.length > 3 && (
                <Chip
                  label={`+${project.technologies.length - 3}`}
                  size="small"
                  sx={{
                    background: `${project.category.color}15`,
                    color: project.category.color,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    border: `1px solid ${project.category.color}30`
                  }}
                />
              )}
            </Stack>
          </Box>

          {/* Impact Stats */}
          {project.impact && (
            <>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: themeColors.textMuted,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  Impact Metrics
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(project.impact).slice(0, 2).map(([key, value], idx) => (
                    <Grid item xs={6} key={idx}>
                      <Stack spacing={0.5} alignItems="center">
                        <Typography
                          variant="h6"
                          sx={{
                            color: project.category.color,
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
                            fontSize: '0.65rem',
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
          <Box sx={{ mt: 'auto' }}>
            <Button
              variant="outlined"
              fullWidth
              endIcon={<ChevronRight />}
              sx={{
                borderColor: `${project.category.color}40`,
                color: project.category.color,
                background: `${project.category.color}08`,
                backdropFilter: 'blur(10px)',
                fontWeight: 600,
                py: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: project.category.color,
                  background: `${project.category.color}15`,
                  transform: 'translateY(-1px)',
                  boxShadow: `0 8px 25px ${project.category.color}20`
                }
              }}
            >
              View Details
            </Button>
          </Box>
        </CardContent>

        {/* Hover Effect Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${project.category.color}05, transparent)`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;