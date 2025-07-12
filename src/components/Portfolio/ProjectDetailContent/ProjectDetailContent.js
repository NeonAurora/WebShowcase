'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
  Divider,
  Tab,
  Tabs,
  Paper,
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/material';
import { 
  Assessment,
  Engineering,
  TrendingUp,
  Timeline as TimelineIcon,
  EmojiEvents,
  CheckCircle,
  Code,
  Architecture,
  Speed,
  Security,
  Cloud,
  Analytics,
  Star,
  Verified
} from '@mui/icons-material';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`detail-tabpanel-${index}`}
      aria-labelledby={`detail-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 4 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const ProjectDetailContent = ({ project }) => {
  const [tabValue, setTabValue] = useState(0);
  
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    brand: 'brand.primary',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`
          : `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        
        {/* Quick Stats */}
        {project.impact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                p: 4,
                mb: 6
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: themeColors.text,
                  fontWeight: 700,
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Project Impact
              </Typography>
              
              <Grid container spacing={4}>
                {Object.entries(project.impact).map(([key, value], index) => (
                  <Grid item xs={6} md={3} key={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
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
                          height: '100%'
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            color: project.category.color,
                            fontWeight: 700,
                            fontSize: '2.5rem',
                            mb: 1
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: themeColors.textSecondary,
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
            </Paper>
          </motion.div>
        )}

        {/* Detailed Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  px: 2,
                  '& .MuiTab-root': {
                    color: themeColors.textSecondary,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    minHeight: 64,
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
                  label="Technical Details"
                  icon={<Engineering />}
                  iconPosition="start"
                />
                <Tab
                  label="Development Timeline"
                  icon={<TimelineIcon />}
                  iconPosition="start"
                />
                <Tab
                  label="Results & Awards"
                  icon={<EmojiEvents />}
                  iconPosition="start"
                />
              </Tabs>
            </Box>

            {/* Tab Content */}
            <Box sx={{ p: 4 }}>
              <TabPanel value={tabValue} index={0}>
                {/* Overview Content */}
                <Stack spacing={4}>
                  {project.details && (
                    <Grid container spacing={3}>
                      {Object.entries(project.details).map(([key, value], index) => (
                        <Grid item xs={12} md={4} key={key}>
                          <Card
                            sx={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: 3,
                              p: 3,
                              height: '100%'
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
                              variant="body1"
                              sx={{
                                color: themeColors.textSecondary,
                                lineHeight: 1.6
                              }}
                            >
                              {value}
                            </Typography>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Stack>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                {/* Technical Details */}
                <Stack spacing={4}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h5" sx={{ color: themeColors.text, fontWeight: 600, mb: 3 }}>
                        Technology Stack
                      </Typography>
                      <Grid container spacing={2}>
                        {project.technologies.map((tech, index) => (
                          <Grid item xs={6} sm={4} md={3} key={index}>
                            <Chip
                              label={tech}
                              sx={{
                                width: '100%',
                                background: `${project.category.color}15`,
                                color: project.category.color,
                                fontWeight: 600,
                                border: `1px solid ${project.category.color}30`
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 600, mb: 2 }}>
                        Key Features
                      </Typography>
                      <Stack spacing={1}>
                        {['Scalable Architecture', 'Real-time Processing', 'Cloud Integration', 'Security First'].map((feature, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle sx={{ color: project.category.color, fontSize: 16 }} />
                            <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                {/* Development Timeline */}
                <Timeline position="alternate">
                  {[
                    { phase: 'Planning & Research', duration: '2 weeks', status: 'completed' },
                    { phase: 'Design & Prototyping', duration: '3 weeks', status: 'completed' },
                    { phase: 'Development', duration: '8 weeks', status: 'completed' },
                    { phase: 'Testing & QA', duration: '2 weeks', status: 'in-progress' },
                    { phase: 'Deployment', duration: '1 week', status: 'pending' }
                  ].map((item, index) => (
                    <TimelineItem key={index}>
                      <TimelineOppositeContent sx={{ color: themeColors.textSecondary }}>
                        {item.duration}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            bgcolor: item.status === 'completed' ? project.category.color : 
                                    item.status === 'in-progress' ? '#F59E0B' : 'rgba(255, 255, 255, 0.3)'
                          }}
                        />
                        {index < 4 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 600 }}>
                          {item.phase}
                        </Typography>
                        <Chip
                          label={item.status}
                          size="small"
                          sx={{
                            mt: 1,
                            textTransform: 'capitalize',
                            background: item.status === 'completed' ? `${project.category.color}15` : 
                                       item.status === 'in-progress' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                            color: item.status === 'completed' ? project.category.color : 
                                  item.status === 'in-progress' ? '#F59E0B' : themeColors.textSecondary
                          }}
                        />
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </TabPanel>

              <TabPanel value={tabValue} index={3}>
                {/* Results & Awards */}
                <Stack spacing={4}>
                  {project.awards && project.awards.length > 0 && (
                    <Box>
                      <Typography variant="h5" sx={{ color: themeColors.text, fontWeight: 600, mb: 3 }}>
                        Awards & Recognition
                      </Typography>
                      <Grid container spacing={3}>
                        {project.awards.map((award, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Card
                              sx={{
                                background: 'rgba(245, 158, 11, 0.1)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(245, 158, 11, 0.3)',
                                borderRadius: 3,
                                p: 3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                              }}
                            >
                              <EmojiEvents sx={{ color: '#F59E0B', fontSize: 32 }} />
                              <Box>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: themeColors.text,
                                    fontWeight: 600
                                  }}
                                >
                                  {award}
                                </Typography>
                                <Chip
                                  icon={<Verified />}
                                  label="Verified"
                                  size="small"
                                  sx={{
                                    mt: 1,
                                    background: 'rgba(16, 185, 129, 0.15)',
                                    color: '#10B981'
                                  }}
                                />
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Stack>
              </TabPanel>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectDetailContent;