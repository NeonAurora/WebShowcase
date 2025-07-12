'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import { 
  Person,
  Group,
  Build,
  Schedule,
  CheckCircle,
  CalendarMonth,
  Support,
  AutoAwesome,
  VideoCall,
  ChevronRight
} from '@mui/icons-material';

export default function LiveDemoSection() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    backgroundPrimary: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const demoOptions = [
    {
      type: 'Personal Demo',
      icon: Person,
      duration: '30 minutes',
      color: '#10B981', // Success green
      description: 'One-on-one demonstration tailored to your specific needs and use cases.',
      features: ['Personalized walkthrough', 'Q&A session', 'Custom scenarios', 'Follow-up materials'],
      recommended: false
    },
    {
      type: 'Group Demo',
      icon: Group,
      duration: '45 minutes',
      color: '#3B82F6', // Info blue
      description: 'Perfect for teams and organizations looking to evaluate our solutions.',
      features: ['Team-focused presentation', 'Multiple use cases', 'Group discussion', 'Implementation planning'],
      recommended: true
    },
    {
      type: 'Technical Deep Dive',
      icon: Build,
      duration: '60 minutes',
      color: '#8B5CF6', // Purple
      description: 'In-depth technical demonstration for developers and technical teams.',
      features: ['API walkthrough', 'Integration examples', 'Technical architecture', 'Development support'],
      recommended: false
    }
  ];

  const SectionHeader = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip
          label="Live Demonstrations"
          icon={<VideoCall />}
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
          Schedule a Live Demo
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
          Get a personalized demonstration of our solutions tailored to your needs
        </Typography>
      </Box>
    </motion.div>
  );

  const DemoCard = ({ option, index }) => {
    const IconComponent = option.icon;

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
            p: 4,
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.12)',
              border: `2px solid ${option.color}40`,
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${option.color}15`
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${option.color}, ${option.color}80)`
            }
          }}
        >
          {option.recommended && (
            <Chip
              label="Most Popular"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: `${option.color}20`,
                color: option.color,
                fontWeight: 600,
                fontSize: '0.75rem',
                border: `1px solid ${option.color}30`
              }}
            />
          )}

          <CardContent sx={{ p: 0, textAlign: 'center' }}>
            {/* Icon Section */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, ${option.color}20, ${option.color}40)`,
                  border: `3px solid ${option.color}30`,
                  mx: 'auto',
                  mb: 3
                }}
              >
                <IconComponent sx={{ fontSize: '2rem', color: option.color }} />
              </Avatar>
            </motion.div>

            {/* Title & Duration */}
            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 1,
                fontSize: '1.375rem'
              }}
            >
              {option.type}
            </Typography>

            <Chip
              icon={<Schedule sx={{ fontSize: 16 }} />}
              label={option.duration}
              sx={{
                background: `${option.color}20`,
                color: option.color,
                fontWeight: 600,
                fontSize: '0.875rem',
                mb: 3,
                border: `1px solid ${option.color}30`
              }}
            />

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6,
                mb: 4,
                fontSize: '0.95rem'
              }}
            >
              {option.description}
            </Typography>

            {/* Features List */}
            <Box sx={{ mb: 4, textAlign: 'left' }}>
              <List sx={{ py: 0 }}>
                {option.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle sx={{ fontSize: 16, color: option.color }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          sx: {
                            color: themeColors.textSecondary,
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Box>

            {/* Action Button */}
            <Button
              variant="contained"
              fullWidth
              startIcon={<CalendarMonth />}
              sx={{
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                background: `linear-gradient(135deg, ${option.color}, ${option.color}CC)`,
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: `0 8px 32px ${option.color}30`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${option.color}DD, ${option.color})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 48px ${option.color}40`
                }
              }}
            >
              Book {option.type}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const CallToActionSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 6,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${themeColors.brand}, ${themeColors.brand}80)`
          }
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Avatar
            sx={{
              width: 64,
              height: 64,
              background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
              border: `3px solid ${themeColors.brand}30`
            }}
          >
            <AutoAwesome sx={{ fontSize: '1.75rem', color: themeColors.brand }} />
          </Avatar>

          <Typography
            variant="h4"
            sx={{
              color: themeColors.text,
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '1.75rem' }
            }}
          >
            Not Sure Which Demo Is Right for You?
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
            Let our experts help you choose the best demonstration format for your specific needs and goals.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Support />}
              endIcon={<ChevronRight />}
              href="/support"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: `0 8px 32px ${themeColors.brand}30`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 48px ${themeColors.brand}40`
                }
              }}
            >
              Contact Our Team
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<VideoCall />}
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderColor: `${themeColors.brand}60`,
                color: themeColors.brand,
                borderRadius: 3,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderColor: themeColors.brand,
                  background: `${themeColors.brand}10`,
                  borderWidth: 2
                }
              }}
            >
              Quick Consultation
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </motion.div>
  );

  return (
    <Box
      component="section"
      id="live-demo"
      sx={{
        py: { xs: 8, lg: 12 },
        background: `linear-gradient(135deg, ${themeColors.background} 0%, ${themeColors.backgroundPrimary} 100%)`,
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {demoOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <DemoCard option={option} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <CallToActionSection />
      </Container>
    </Box>
  );
}