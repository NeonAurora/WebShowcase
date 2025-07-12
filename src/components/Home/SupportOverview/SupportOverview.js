'use client';

import { useTheme } from '@/context/ThemeContext';
import { useInteractiveColors, useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardContent,
  Button,
  Stack,
  Grid,
  Avatar,
  Chip,
  IconButton,
  LinearProgress,
  Divider,
  Badge
} from '@mui/material';
import { 
  SupportAgent,
  Description,
  PlayCircleOutline,
  School,
  Chat,
  LiveHelp,
  Schedule,
  Speed,
  CheckCircle,
  Phone,
  Email,
  VideoCall,
  Forum,
  QuestionAnswer,
  LocalLibrary,
  TrendingUp,
  AccessTime,
  Groups,
  Star,
  Verified,
  NotificationsActive,
  Language,
  Security
} from '@mui/icons-material';

const SupportCard = ({ support, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getSupportIcon = (type) => {
    const iconMap = {
      "24/7 Technical Support": SupportAgent,
      "Comprehensive Documentation": Description,
      "Live Demo Sessions": PlayCircleOutline,
      "Training & Onboarding": School,
      "Live Chat Support": Chat,
      "Knowledge Base": LocalLibrary,
      "Video Tutorials": VideoCall,
      "Community Forum": Forum
    };
    return iconMap[type] || SupportAgent;
  };

  const getSupportColor = (type) => {
    const colorMap = {
      "24/7 Technical Support": "#10B981",
      "Comprehensive Documentation": "#3B82F6",
      "Live Demo Sessions": "#8B5CF6", 
      "Training & Onboarding": "#F59E0B",
      "Live Chat Support": "#EF4444",
      "Knowledge Base": "#06B6D4",
      "Video Tutorials": "#84CC16",
      "Community Forum": "#F97316"
    };
    return colorMap[type] || themeColors.primary;
  };

  const SupportIcon = getSupportIcon(support.type);
  const supportColor = getSupportColor(support.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
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
            ? `2px solid ${supportColor}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.15)`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${supportColor}, ${supportColor}80)`,
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
            background: `radial-gradient(circle at 50% 0%, ${supportColor}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  background: `linear-gradient(135deg, ${supportColor}20, ${supportColor}10)`,
                  border: `2px solid ${supportColor}30`
                }}
              >
                <SupportIcon sx={{ color: supportColor, fontSize: 28 }} />
              </Avatar>
            </motion.div>

            <Stack spacing={1} alignItems="flex-end">
              {support.availability && (
                <Badge
                  badgeContent=""
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: support.availability === 'online' ? '#10B981' : '#F59E0B',
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      animation: support.availability === 'online' ? 'pulse 2s infinite' : 'none'
                    }
                  }}
                >
                  <Chip
                    label={support.availability === 'online' ? 'Online' : 'Busy'}
                    size="small"
                    sx={{
                      background: `${support.availability === 'online' ? '#10B981' : '#F59E0B'}15`,
                      color: support.availability === 'online' ? '#10B981' : '#F59E0B',
                      fontWeight: 600,
                      fontSize: '0.7rem'
                    }}
                  />
                </Badge>
              )}
              
              {support.responseTime && (
                <Typography
                  variant="caption"
                  sx={{
                    color: themeColors.textMuted,
                    fontSize: '0.7rem',
                    fontWeight: 600
                  }}
                >
                  ~{support.responseTime}
                </Typography>
              )}
            </Stack>
          </Box>

          {/* Content */}
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: '1.1rem',
                lineHeight: 1.3,
                mb: 2
              }}
            >
              {support.type}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                fontSize: '0.875rem',
                lineHeight: 1.6,
                mb: 2
              }}
            >
              {support.description}
            </Typography>

            {/* Features */}
            <Stack spacing={1}>
              {support.features?.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 + 0.5 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: supportColor, fontSize: 16 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: themeColors.textSecondary,
                        fontSize: '0.8rem'
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Statistics */}
          {support.stats && (
            <Box sx={{ mb: 3 }}>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
              <Grid container spacing={2}>
                {Object.entries(support.stats).map(([key, value], idx) => (
                  <Grid item xs={6} key={idx}>
                    <Stack spacing={0.5} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          color: supportColor,
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

          {/* Action Button */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<SupportIcon />}
            sx={{
              background: `linear-gradient(135deg, ${supportColor}, ${supportColor}CC)`,
              color: '#ffffff',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                background: `linear-gradient(135deg, ${supportColor}DD, ${supportColor})`
              }
            }}
          >
            {support.action}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SupportTeamMember = ({ member, index }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.8 }}
    >
      <Stack spacing={2} alignItems="center">
        <Badge
          badgeContent=""
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#10B981',
              width: 16,
              height: 16,
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
              border: '2px solid white'
            }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar
            src={member.avatar}
            sx={{
              width: 64,
              height: 64,
              border: `3px solid ${themeColors.primary}40`
            }}
          >
            {member.name.charAt(0)}
          </Avatar>
        </Badge>
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: themeColors.text,
              fontWeight: 600
            }}
          >
            {member.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: themeColors.textSecondary,
              fontSize: '0.75rem'
            }}
          >
            {member.role}
          </Typography>
        </Box>
      </Stack>
    </motion.div>
  );
};

const SupportStats = () => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  const stats = [
    { icon: Speed, value: '< 2min', label: 'Avg Response', color: '#10B981' },
    { icon: Star, value: '4.9/5', label: 'Satisfaction', color: '#F59E0B' },
    { icon: Schedule, value: '24/7', label: 'Availability', color: '#3B82F6' },
    { icon: Language, value: '15+', label: 'Languages', color: '#8B5CF6' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          p: 4,
          mb: 6
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            textAlign: 'center',
            mb: 3
          }}
        >
          Support Excellence Metrics
        </Typography>
        
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 1.1 }}
              >
                <Stack spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `${stat.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <stat.icon sx={{ color: stat.color, fontSize: 24 }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: stat.color, 
                      fontWeight: 800,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
                    }}
                  >
                    {stat.value}
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
                    {stat.label}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </motion.div>
  );
};

export default function SupportOverview() {
  const { colors, isDark } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const supportContent = {
    title: "Always Here For You",
    subtitle: "World-Class Support When You Need It Most",
    description: "Our dedicated support ecosystem ensures your success with comprehensive assistance, expert guidance, and innovative solutions tailored to your bio-industry needs.",
    supports: [
      {
        type: "24/7 Technical Support",
        description: "Round-the-clock technical assistance from our expert team of bio-tech specialists.",
        availability: "online",
        responseTime: "2 min",
        action: "Chat Now",
        features: [
          "Instant live chat support",
          "Phone & video assistance",
          "Emergency escalation",
          "Multi-language support"
        ],
        stats: {
          "Response": "< 2min",
          "Satisfaction": "98%"
        }
      },
      {
        type: "Comprehensive Documentation",
        description: "Extensive knowledge base with detailed guides, API references, and best practices.",
        availability: "online",
        responseTime: "instant",
        action: "Browse Docs",
        features: [
          "Interactive tutorials",
          "API documentation",
          "Video guides",
          "Code samples"
        ],
        stats: {
          "Articles": "500+",
          "Updated": "Daily"
        }
      },
      {
        type: "Live Demo Sessions",
        description: "Personalized demonstration sessions to showcase features and capabilities.",
        availability: "busy",
        responseTime: "1 hour",
        action: "Schedule Demo",
        features: [
          "One-on-one sessions",
          "Custom demonstrations",
          "Q&A included",
          "Follow-up support"
        ],
        stats: {
          "Duration": "45min",
          "Booking": "Same day"
        }
      },
      {
        type: "Training & Onboarding",
        description: "Comprehensive training programs to get your team up to speed quickly.",
        availability: "online",
        responseTime: "1 day",
        action: "Start Training",
        features: [
          "Structured curriculum",
          "Certification programs",
          "Hands-on workshops",
          "Progress tracking"
        ],
        stats: {
          "Completion": "95%",
          "Courses": "25+"
        }
      }
    ],
    team: [
      { name: "Sarah Chen", role: "Lead Support Engineer", avatar: "" },
      { name: "Marcus Rodriguez", role: "Bio-Tech Specialist", avatar: "" },
      { name: "Aisha Patel", role: "Training Manager", avatar: "" },
      { name: "James Wilson", role: "Customer Success", avatar: "" }
    ]
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
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
          background: `radial-gradient(circle at 30% 40%, ${colors.brand.primary}06 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${colors.brand.primaryLight}04 0%, transparent 50%)`,
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
              <SupportAgent sx={{ color: themeColors.primary, fontSize: 28 }} />
              <Chip
                label="Support Center"
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
              {supportContent.title}
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
              {supportContent.subtitle}
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
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              {supportContent.description}
            </Typography>
          </motion.div>
        </Box>

        {/* Support Stats */}
        <SupportStats />

        {/* Support Options Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {supportContent.supports.map((support, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <SupportCard support={support} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Support Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 4,
              p: 6,
              mb: 6
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                textAlign: 'center',
                mb: 4
              }}
            >
              Meet Our Support Team
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              {supportContent.team.map((member, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <SupportTeamMember member={member} index={index} />
                </Grid>
              ))}
            </Grid>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Chat />}
                href="/support"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
                  color: '#ffffff',
                  px: 5,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: `0 8px 32px ${colors.brand.primary}40`,
                  textTransform: 'none',
                  minWidth: '200px',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brand.primaryDark}, ${colors.brand.primary})`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${colors.brand.primary}50`
                  }
                }}
              >
                Get Support Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone />}
                href="tel:+1-555-SUPPORT"
                sx={{
                  borderColor: colors.brand.primary,
                  color: themeColors.primary,
                  px: 5,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderWidth: '2px',
                  textTransform: 'none',
                  minWidth: '180px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: colors.brand.primaryDark,
                    background: `${colors.brand.primary}10`,
                    borderWidth: '2px'
                  }
                }}
              >
                Call Us
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}