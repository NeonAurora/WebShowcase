'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Divider
} from '@mui/material';
import { 
  MenuBook,
  PlayCircle,
  Forum,
  Assessment,
  ChevronRight,
  Extension,
  Phone,
  Emergency,
  LibraryBooks,
  Support,
  Accessibility
} from '@mui/icons-material';

const SectionHeader = () => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Chip
          label="Additional Resources"
          icon={<LibraryBooks />}
          sx={{
            background: `${themeColors.brand}20`,
            color: themeColors.brand,
            fontWeight: 600,
            fontSize: '0.875rem',
            mb: 4,
            border: `1px solid ${themeColors.brand}30`,
            py: 2,
            px: 1
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 3,
            background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Additional Resources
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: themeColors.textSecondary,
            fontSize: { xs: '1.125rem', sm: '1.25rem' },
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Everything you need to succeed with Somaticx solutions
        </Typography>
      </motion.div>
    </Box>
  );
};

const ResourceCard = ({ resource, index }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary'
  });

  const IconComponent = resource.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 3,
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${resource.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${resource.color}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${resource.color}, ${resource.color}80)`
          }
        }}
      >
        <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, ${resource.color}20, ${resource.color}40)`,
                  border: `3px solid ${resource.color}30`,
                  mx: 'auto',
                  mb: 3
                }}
              >
                <IconComponent sx={{ fontSize: '2rem', color: resource.color }} />
              </Avatar>
            </motion.div>

            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${themeColors.text}, ${resource.color})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {resource.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}
            >
              {resource.description}
            </Typography>
          </Box>

          {/* Links Section */}
          <Box sx={{ mb: 3, flex: 1 }}>
            <List sx={{ py: 0 }}>
              {resource.links.map((link, linkIndex) => (
                <motion.div
                  key={linkIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: linkIndex * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <ListItem 
                    component="a"
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    sx={{ 
                      py: 0.5, 
                      px: 0,
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${resource.color}10`,
                        '& .MuiListItemIcon-root': {
                          color: resource.color
                        },
                        '& .MuiListItemText-primary': {
                          color: resource.color
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <ChevronRight sx={{ color: themeColors.textSecondary, fontSize: 16 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        sx: {
                          color: themeColors.textSecondary,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'color 0.3s ease'
                        }
                      }}
                    />
                    {link.url.startsWith('http') && (
                      <Extension sx={{ color: themeColors.textSecondary, fontSize: 16, ml: 1 }} />
                    )}
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>

          {/* Action Button */}
          <Button
            variant="outlined"
            endIcon={<ChevronRight />}
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '0.95rem',
              fontWeight: 600,
              borderColor: `${resource.color}60`,
              color: resource.color,
              borderRadius: 3,
              textTransform: 'none',
              borderWidth: 2,
              '&:hover': {
                borderColor: resource.color,
                background: `${resource.color}10`,
                borderWidth: 2,
                transform: 'translateY(-2px)'
              }
            }}
          >
            Explore {resource.title}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ResourceLinks() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides, API docs, and technical resources',
      icon: MenuBook,
      color: '#3B82F6', // Info blue
      links: [
        { name: 'API Documentation', url: '/documentation/api' },
        { name: 'Installation Guides', url: '/documentation/installation' },
        { name: 'User Manuals', url: '/documentation/user-guides' },
        { name: 'Troubleshooting', url: '/documentation/troubleshooting' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all Somaticx solutions',
      icon: PlayCircle,
      color: '#F59E0B', // Warning amber
      links: [
        { name: 'Getting Started Series', url: '/demo?category=getting-started' },
        { name: 'Hardware Setup', url: '/demo?category=hardware' },
        { name: 'Software Training', url: '/demo?category=software' },
        { name: 'Advanced Features', url: '/demo?category=advanced' }
      ]
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: Forum,
      color: '#10B981', // Success green
      links: [
        { name: 'General Discussion', url: '#general-discussion' },
        { name: 'Technical Q&A', url: '#technical-qa' },
        { name: 'Feature Requests', url: '#feature-requests' },
        { name: 'Best Practices', url: '#best-practices' }
      ]
    },
    {
      title: 'System Status',
      description: 'Real-time status and maintenance updates',
      icon: Assessment,
      color: themeColors.brand,
      links: [
        { name: 'Service Status', url: '#service-status' },
        { name: 'Maintenance Schedule', url: '#maintenance' },
        { name: 'Incident History', url: '#incidents' },
        { name: 'Subscribe to Updates', url: '#subscribe' }
      ]
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, lg: 12 },
        background: `linear-gradient(135deg, ${themeColors.background} 0%, ${themeColors.backgroundSecondary} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${themeColors.brand}08 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${themeColors.brand}08 0%, transparent 50%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={4}>
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <ResourceCard resource={resource} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Emergency Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ mt: 10 }}>
            <Alert
              severity="error"
              icon={<Emergency sx={{ fontSize: '2rem' }} />}
              sx={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 4,
                p: 4,
                maxWidth: 800,
                mx: 'auto',
                '& .MuiAlert-icon': {
                  fontSize: '2rem',
                  color: '#EF4444'
                },
                '& .MuiAlert-message': {
                  width: '100%'
                }
              }}
            >
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2.125rem' }
                  }}
                >
                  Emergency Support
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    maxWidth: 500
                  }}
                >
                  For critical issues affecting your farm operations, contact our emergency hotline immediately.
                </Typography>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    href="tel:+1-800-SOMATICX"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: '0 8px 32px rgba(239, 68, 68, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 48px rgba(239, 68, 68, 0.4)'
                      }
                    }}
                  >
                    Emergency Hotline
                  </Button>
                  
                  <Chip
                    icon={<Accessibility />}
                    label="Available 24/7 for critical issues"
                    sx={{
                      background: 'rgba(239, 68, 68, 0.15)',
                      color: '#EF4444',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      border: '1px solid rgba(239, 68, 68, 0.3)'
                    }}
                  />
                </Stack>
              </Stack>
            </Alert>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}