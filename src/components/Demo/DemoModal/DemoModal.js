'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box,
  Modal,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  Alert
} from '@mui/material';
import { 
  Close,
  PlayArrow,
  AccessTime,
  BarChart,
  CheckCircle,
  Warning,
  Launch,
  Support,
  MenuBook,
  YouTube
} from '@mui/icons-material';

export default function DemoModal({ demo, isOpen, onClose }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getEmbedUrl = (url) => {
    const videoId = url?.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1` : url;
  };

  const getDurationColor = (duration) => {
    if (duration === 'Short') return '#10B981'; // Success green
    if (duration === 'Medium') return '#F59E0B'; // Warning amber
    return '#3B82F6'; // Info blue
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Beginner') return '#10B981';
    if (difficulty === 'Intermediate') return '#F59E0B';
    return '#EF4444'; // Advanced red
  };

  return (
    <AnimatePresence>
      {isOpen && demo && (
        <Modal
          open={isOpen}
          onClose={onClose}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backdropFilter: 'blur(8px)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ width: '100%', maxWidth: '6xl', maxHeight: '95vh' }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                maxHeight: '95vh',
                overflow: 'auto',
                position: 'relative',
                // Custom scrollbar
                '&::-webkit-scrollbar': {
                  width: '8px'
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: `${themeColors.brand}60`,
                  borderRadius: '4px',
                  '&:hover': {
                    background: `${themeColors.brand}80`
                  }
                }
              }}
            >
              {/* Header with Close Button */}
              <Box sx={{ position: 'sticky', top: 0, zIndex: 10, p: 2, pb: 0 }}>
                <Stack direction="row" justifyContent="flex-end">
                  <IconButton
                    onClick={onClose}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      color: themeColors.text,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Close />
                  </IconButton>
                </Stack>
              </Box>

              <CardContent sx={{ pt: 0 }}>
                {/* Video Player */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 4,
                    background: 'rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Box
                    component="iframe"
                    src={getEmbedUrl(demo.videoUrl)}
                    title={demo.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>

                {/* Video Info Header */}
                <Box sx={{ mb: 4 }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    <Chip
                      label={demo.category?.name}
                      sx={{
                        background: `${demo.category?.color || themeColors.brand}20`,
                        color: demo.category?.color || themeColors.brand,
                        fontWeight: 600,
                        border: `1px solid ${demo.category?.color || themeColors.brand}30`
                      }}
                    />
                    
                    <Chip
                      icon={<AccessTime sx={{ fontSize: 16 }} />}
                      label={`${demo.duration} • ${demo.estimatedTime}`}
                      sx={{
                        background: getDurationColor(demo.duration),
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                    
                    <Chip
                      icon={<BarChart sx={{ fontSize: 16 }} />}
                      label={demo.difficulty}
                      sx={{
                        background: `${getDifficultyColor(demo.difficulty)}20`,
                        color: getDifficultyColor(demo.difficulty),
                        fontWeight: 600,
                        border: `1px solid ${getDifficultyColor(demo.difficulty)}30`
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="h4"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '1.75rem', sm: '2.125rem' }
                    }}
                  >
                    {demo.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: themeColors.textSecondary,
                      fontSize: '1.125rem',
                      lineHeight: 1.7
                    }}
                  >
                    {demo.fullDescription || demo.description}
                  </Typography>
                </Box>

                {/* What You'll Learn */}
                {demo.learningObjectives && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 600,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <CheckCircle sx={{ color: demo.category?.color || themeColors.brand }} />
                      {"What You'll Learn"}
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {demo.learningObjectives.map((objective, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Stack direction="row" spacing={2} alignItems="flex-start">
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: '50%',
                                  background: demo.category?.color || themeColors.brand,
                                  mt: 1,
                                  flexShrink: 0
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: themeColors.textSecondary,
                                  lineHeight: 1.6
                                }}
                              >
                                {objective}
                              </Typography>
                            </Stack>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                {/* Topics Covered */}
                {demo.topics && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 600,
                        mb: 3
                      }}
                    >
                      Topics Covered
                    </Typography>
                    
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {demo.topics.map((topic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Chip
                            label={topic}
                            sx={{
                              background: `${demo.category?.color || themeColors.brand}15`,
                              color: demo.category?.color || themeColors.brand,
                              fontWeight: 500,
                              fontSize: '0.875rem'
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                )}

                {/* Prerequisites */}
                {demo.prerequisites && demo.prerequisites.length > 0 && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 600,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Warning sx={{ color: '#F59E0B' }} />
                      Prerequisites
                    </Typography>
                    
                    <Alert
                      severity="warning"
                      sx={{
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: 3,
                        '& .MuiAlert-icon': {
                          color: '#F59E0B'
                        }
                      }}
                    >
                      <List sx={{ py: 0 }}>
                        {demo.prerequisites.map((prereq, index) => (
                          <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Warning sx={{ fontSize: 16, color: '#F59E0B' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={prereq}
                              primaryTypographyProps={{
                                sx: {
                                  color: themeColors.textSecondary,
                                  fontSize: '0.875rem'
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Alert>
                  </Box>
                )}

                {/* Related Resources */}
                {demo.relatedResources && (
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 600,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Launch sx={{ color: themeColors.brand }} />
                      Related Resources
                    </Typography>
                    
                    <Grid container spacing={3}>
                      {demo.relatedResources.map((resource, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                          >
                            <Card
                              component="a"
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: 3,
                                p: 3,
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.12)',
                                  border: `1px solid ${themeColors.brand}40`
                                }
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  color: themeColors.text,
                                  fontWeight: 600,
                                  mb: 1
                                }}
                              >
                                {resource.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: themeColors.textSecondary,
                                  lineHeight: 1.5
                                }}
                              >
                                {resource.description}
                              </Typography>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

                {/* Action Buttons */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  sx={{ pt: 2 }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Support />}
                    href="/support"
                    sx={{
                      flex: 1,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                      borderRadius: 3,
                      textTransform: 'none',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Get Help with This
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<MenuBook />}
                    href="/documentation"
                    sx={{
                      flex: 1,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: `${demo.category?.color || themeColors.brand}60`,
                      color: demo.category?.color || themeColors.brand,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: demo.category?.color || themeColors.brand,
                        background: `${demo.category?.color || themeColors.brand}10`,
                        borderWidth: 2
                      }
                    }}
                  >
                    View Documentation
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<YouTube />}
                    onClick={() => window.open(demo.videoUrl, '_blank')}
                    sx={{
                      flex: 1,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: themeColors.text,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 2
                      }
                    }}
                  >
                    Watch on YouTube
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}