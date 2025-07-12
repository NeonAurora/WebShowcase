'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Box, 
  Dialog,
  DialogContent,
  Typography, 
  Button,
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Backdrop
} from '@mui/material';
import { 
  Close,
  Star,
  TrendingUp,
  CheckCircle,
  PlayArrow,
  RocketLaunch,
  Business,
  Engineering,
  AutoAwesome,
  Timeline,
  Assessment,
  Speed,
  Support
} from '@mui/icons-material';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`service-tabpanel-${index}`}
      aria-labelledby={`service-tab-${index}`}
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

const ServiceHero = ({ service }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  return (
    <Box
      sx={{
        height: 280,
        background: `linear-gradient(135deg, ${service.color}15, ${service.color}25)`,
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
          background: `radial-gradient(circle at 30% 40%, ${service.color}20 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${service.color}15 0%, transparent 50%)`,
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
            background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
            border: `4px solid rgba(255, 255, 255, 0.3)`,
            boxShadow: `0 20px 60px ${service.color}30`,
            backdropFilter: 'blur(10px)',
            fontSize: '3rem'
          }}
        >
          {service.icon}
        </Avatar>
      </motion.div>

      {/* Service Badge */}
      <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
        <Chip
          icon={<Business />}
          label="Professional Service"
          sx={{
            background: `${service.color}20`,
            color: service.color,
            fontWeight: 700,
            fontSize: '0.8rem',
            border: `2px solid ${service.color}40`,
            backdropFilter: 'blur(10px)'
          }}
        />
      </Box>

      {/* Category Badge */}
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Chip
          label="Enterprise Solution"
          sx={{
            background: `${service.color}20`,
            color: service.color,
            fontWeight: 700,
            fontSize: '0.8rem',
            border: `2px solid ${service.color}40`,
            backdropFilter: 'blur(10px)'
          }}
        />
      </Box>
    </Box>
  );
};

const OverviewTab = ({ service }) => {
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
          <Assessment sx={{ color: service.color }} />
          Service Overview
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: themeColors.textSecondary,
            fontSize: '1.1rem',
            lineHeight: 1.7,
            mb: 4
          }}
        >
          {service.description}
        </Typography>
      </Box>

      {/* Key Features */}
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
          <Star sx={{ color: service.color }} />
          Key Features
        </Typography>
        <Grid container spacing={2}>
          {service.features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 2,
                    p: 2,
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.12)',
                      border: `1px solid ${service.color}40`
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <CheckCircle sx={{ color: service.color, fontSize: 20, mt: 0.5 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        lineHeight: 1.5,
                        flex: 1
                      }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pricing Info */}
      <Box>
        <Card
          sx={{
            background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
            border: `1px solid ${service.color}20`,
            borderRadius: 3,
            p: 3
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600
              }}
            >
              Investment
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: service.color,
                fontWeight: 700
              }}
            >
              {service.pricing}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: themeColors.textSecondary,
              lineHeight: 1.6
            }}
          >
            {service.pricingNote}
          </Typography>
        </Card>
      </Box>
    </Stack>
  );
};

const TechnicalTab = ({ service }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

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
          <Engineering sx={{ color: service.color }} />
          Technologies & Stack
        </Typography>
        <Grid container spacing={2}>
          {service.technologies.map((tech, index) => (
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
                      border: `1px solid ${service.color}40`,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <AutoAwesome sx={{ color: service.color, fontSize: 32, mb: 1 }} />
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
          ))}
        </Grid>
      </Box>

      {/* Implementation Details */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: themeColors.text,
            fontWeight: 600,
            mb: 2
          }}
        >
          Implementation Approach
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
            Our implementation follows industry best practices with agile methodologies, 
            ensuring scalable, maintainable, and high-performance solutions tailored to your specific requirements.
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

const BenefitsTab = ({ service }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const benefits = [
    'Increased operational efficiency',
    'Reduced costs and improved ROI',
    'Enhanced data-driven decision making',
    'Scalable and future-proof solutions',
    '24/7 technical support and maintenance',
    'Comprehensive training and documentation'
  ];

  return (
    <Stack spacing={4}>
      {/* Key Benefits */}
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
          <TrendingUp sx={{ color: service.color }} />
          Key Benefits
        </Typography>
        
        <List sx={{ py: 0 }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 2,
                  mb: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: `1px solid ${service.color}40`
                  }
                }}
              >
                <ListItemIcon>
                  <CheckCircle sx={{ color: service.color }} />
                </ListItemIcon>
                <ListItemText
                  primary={benefit}
                  primaryTypographyProps={{
                    sx: {
                      color: themeColors.text,
                      fontWeight: 500
                    }
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      {/* Support & Timeline */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
              border: `1px solid ${service.color}30`,
              borderRadius: 3,
              p: 3,
              textAlign: 'center'
            }}
          >
            <Support sx={{ color: service.color, fontSize: 48, mb: 2 }} />
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                mb: 1
              }}
            >
              24/7 Support
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary
              }}
            >
              Round-the-clock technical support and maintenance
            </Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
              border: `1px solid ${service.color}30`,
              borderRadius: 3,
              p: 3,
              textAlign: 'center'
            }}
          >
            <Timeline sx={{ color: service.color, fontSize: 48, mb: 2 }} />
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                mb: 1
              }}
            >
              Fast Delivery
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary
              }}
            >
              Rapid implementation with agile methodologies
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default function ServiceModal({ service, isOpen, onClose }) {
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

  if (!service) return null;

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
                {/* Service Hero */}
                <ServiceHero service={service} />

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
                      background: `linear-gradient(135deg, ${themeColors.text}, ${service.color})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip
                      icon={<Speed />}
                      label="Enterprise Ready"
                      sx={{
                        background: `${service.color}15`,
                        color: service.color,
                        fontWeight: 600
                      }}
                    />
                    <Chip
                      icon={<Support />}
                      label="24/7 Support"
                      sx={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#10B981',
                        fontWeight: 600
                      }}
                    />
                    <Chip
                      icon={<AutoAwesome />}
                      label="AI-Powered"
                      sx={{
                        background: 'rgba(147, 51, 234, 0.15)',
                        color: '#9333EA',
                        fontWeight: 600
                      }}
                    />
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
                          color: service.color
                        }
                      },
                      '& .MuiTabs-indicator': {
                        background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
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
                      label="Benefits"
                      icon={<TrendingUp />}
                      iconPosition="start"
                    />
                  </Tabs>
                </Box>

                {/* Tab Content */}
                <Box sx={{ minHeight: 400 }}>
                  <TabPanel value={tabValue} index={0}>
                    <OverviewTab service={service} />
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <TechnicalTab service={service} />
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    <BenefitsTab service={service} />
                  </TabPanel>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      href="/demo"
                      target="_blank"
                      sx={{
                        px: 3,
                        py: 1.5,
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                        fontWeight: 600,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${service.color}DD, ${service.color})`
                        }
                      }}
                    >
                      Request Demo
                    </Button>
                    
                    <Button
                      variant="outlined"
                      startIcon={<RocketLaunch />}
                      href="/contact"
                      target="_blank"
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderColor: `${service.color}40`,
                        color: service.color,
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: service.color,
                          background: `${service.color}10`
                        }
                      }}
                    >
                      Get Started
                    </Button>
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