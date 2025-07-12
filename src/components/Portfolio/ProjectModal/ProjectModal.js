'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Dialog,
  DialogContent,
  Typography, 
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
  Chip,
  Button,
  IconButton,
  Divider,
  Tab,
  Tabs,
  LinearProgress,
  Paper,
  Backdrop
} from '@mui/material';
import { 
  Close,
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
  EmojiEvents,
  TrendingUp,
  Insights,
  Timeline,
  Launch,
  GitHub,
  Link,
  Assessment,
  Star,
  AutoAwesome,
  Verified,
  Speed,
  Public,
  Business
} from '@mui/icons-material';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const ProjectHero = ({ project }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
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
      case 'planning': return Timelapse;
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

  return (
    <Box
      sx={{
        height: 280,
        background: `linear-gradient(135deg, ${project.category.color}15, ${project.category.color}25)`,
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        mb: 4,
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

      {/* Main Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ zIndex: 2 }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            background: `linear-gradient(135deg, ${project.category.color}, ${project.category.color}CC)`,
            border: `4px solid rgba(255, 255, 255, 0.3)`,
            boxShadow: `0 20px 60px ${project.category.color}30`,
            backdropFilter: 'blur(10px)'
          }}
        >
          <CategoryIcon sx={{ color: 'white', fontSize: 60 }} />
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
            fontSize: '0.8rem',
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
            fontSize: '0.8rem',
            border: `2px solid ${project.category.color}40`,
            backdropFilter: 'blur(10px)'
          }}
        />
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <LinearProgress
          variant="determinate"
          value={project.completionRate || 85}
          sx={{
            height: 6,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            '& .MuiLinearProgress-bar': {
              background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}CC)`
            }
          }}
        />
      </Box>
    </Box>
  );
};

const OverviewTab = ({ project }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary'
  });

  return (
    <Stack spacing={4}>
      {/* Description */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Assessment sx={{ color: themeColors.primary }} />
          Project Overview
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: themeColors.textSecondary,
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          {project.fullDescription || project.description}
        </Typography>
      </Box>

      {/* Problem, Solution, Outcome */}
      {project.details && (
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: themeColors.text,
              fontWeight: 600,
              mb: 3
            }}
          >
            Project Details
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(project.details).map(([key, value], index) => (
              <Grid item xs={12} md={4} key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 3,
                      p: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}80)`
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        mb: 2
                      }}
                    >
                      {key}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        lineHeight: 1.6
                      }}
                    >
                      {value}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Stack>
  );
};

const TechnicalTab = ({ project }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const getTechIcon = (tech) => {
    const techIconMap = {
      'AI/ML': AutoAwesome,
      'IoT': DeviceHub,
      'Cloud': CloudQueue,
      'Analytics': Insights,
      'Hardware': Engineering,
      'Software': Memory,
      'React': Memory,
      'Node.js': Memory,
      'Python': Memory,
      'TensorFlow': AutoAwesome,
      'AWS': CloudQueue,
      'Docker': DeviceHub
    };
    return techIconMap[tech] || Memory;
  };

  return (
    <Stack spacing={4}>
      {/* Technologies */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Engineering sx={{ color: themeColors.primary }} />
          Technologies & Stack
        </Typography>
        <Grid container spacing={2}>
          {project.technologies.map((tech, index) => {
            const TechIcon = getTechIcon(tech);
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: `1px solid ${project.category.color}40`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <TechIcon sx={{ color: project.category.color, fontSize: 32, mb: 1 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 500,
                        fontSize: '0.875rem'
                      }}
                    >
                      {tech}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Architecture or Additional Technical Details */}
      {project.architecture && (
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: themeColors.text,
              fontWeight: 600,
              mb: 2
            }}
          >
            System Architecture
          </Typography>
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 3,
              p: 3
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6
              }}
            >
              {project.architecture}
            </Typography>
          </Paper>
        </Box>
      )}
    </Stack>
  );
};

const ResultsTab = ({ project }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary'
  });

  return (
    <Stack spacing={4}>
      {/* Impact Statistics */}
      {project.impact && (
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: themeColors.text,
              fontWeight: 700,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TrendingUp sx={{ color: themeColors.primary }} />
            Impact & Results
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(project.impact).map(([key, value], index) => (
              <Grid item xs={6} md={3} key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, ${project.category.color}15, ${project.category.color}08)`,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${project.category.color}30`,
                      borderRadius: 3,
                      p: 3,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}80)`
                      }
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: project.category.color,
                        fontWeight: 700,
                        fontSize: '2rem',
                        mb: 1
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '0.8rem',
                        textTransform: 'capitalize',
                        fontWeight: 500
                      }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Awards/Recognition */}
      {project.awards && project.awards.length > 0 && (
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: themeColors.text,
              fontWeight: 600,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <EmojiEvents sx={{ color: '#F59E0B' }} />
            Recognition & Awards
          </Typography>
          <Grid container spacing={2}>
            {project.awards.map((award, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: 3,
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <EmojiEvents sx={{ color: '#F59E0B', fontSize: 28 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 500,
                        flexGrow: 1
                      }}
                    >
                      {award}
                    </Typography>
                    <Verified sx={{ color: '#10B981', fontSize: 20 }} />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Stack>
  );
};

export default function ProjectModal({ project, isOpen, onClose }) {
  const [tabValue, setTabValue] = useState(0);
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 4,
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column'
            }
          }}
          BackdropComponent={({ children, ...props }) => (
            <Backdrop
              {...props}
              sx={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {children}
              </motion.div>
            </Backdrop>
          )}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <DialogContent sx={{ 
              p: 0, 
              position: 'relative',
              overflow: 'auto',
              flex: 1,
              '&::-webkit-scrollbar': {
                width: '8px'
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '4px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)'
                }
              }
            }}>
              {/* Close Button */}
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: themeColors.text,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <Close />
              </IconButton>

              <Box sx={{ p: 4 }}>
                {/* Project Hero */}
                <ProjectHero project={project} />

                {/* Title & Basic Info */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 800,
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                      lineHeight: 1.2,
                      mb: 2,
                      background: `linear-gradient(135deg, ${themeColors.text}, ${project.category.color})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip
                      icon={<Timeline />}
                      label={`${project.completionRate || 85}% Complete`}
                      sx={{
                        background: `${project.category.color}15`,
                        color: project.category.color,
                        fontWeight: 600
                      }}
                    />
                    <Chip
                      icon={<Speed />}
                      label="High Priority"
                      sx={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        color: '#EF4444',
                        fontWeight: 600
                      }}
                    />
                    {project.links && (
                      <Chip
                        icon={<Launch />}
                        label="Live Project"
                        sx={{
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          fontWeight: 600
                        }}
                      />
                    )}
                  </Stack>
                </Box>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.12)', mb: 3 }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      '& .MuiTab-root': {
                        color: themeColors.textSecondary,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&.Mui-selected': {
                          color: project.category.color
                        }
                      },
                      '& .MuiTabs-indicator': {
                        background: `linear-gradient(90deg, ${project.category.color}, ${project.category.color}80)`,
                        height: 3,
                        borderRadius: 1.5
                      }
                    }}
                  >
                    <Tab
                      label="Overview"
                      icon={<Assessment />}
                      iconPosition="start"
                    />
                    <Tab
                      label="Technical"
                      icon={<Engineering />}
                      iconPosition="start"
                    />
                    <Tab
                      label="Results"
                      icon={<TrendingUp />}
                      iconPosition="start"
                    />
                  </Tabs>
                </Box>

                {/* Tab Content */}
                <Box sx={{ minHeight: 400 }}>
                  <TabPanel value={tabValue} index={0}>
                    <OverviewTab project={project} />
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <TechnicalTab project={project} />
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    <ResultsTab project={project} />
                  </TabPanel>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                    {project.links?.demo && (
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.links.demo}
                        target="_blank"
                        sx={{
                          px: 3,
                          py: 1.5,
                          background: `linear-gradient(135deg, ${project.category.color}, ${project.category.color}CC)`,
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${project.category.color}DD, ${project.category.color})`
                          }
                        }}
                      >
                        View Live Demo
                      </Button>
                    )}
                    
                    {project.links?.github && (
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={project.links.github}
                        target="_blank"
                        sx={{
                          px: 3,
                          py: 1.5,
                          borderColor: `${project.category.color}40`,
                          color: project.category.color,
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: project.category.color,
                            background: `${project.category.color}10`
                          }
                        }}
                      >
                        Source Code
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Box>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}