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
  Button,
  Stack,
  Grid,
  IconButton,
  Chip,
  Avatar,
  Divider,
  LinearProgress
} from '@mui/material';
import { 
  LinkedIn,
  Twitter,
  Facebook,
  YouTube,
  Instagram,
  GitHub,
  TrendingUp,
  Groups,
  Visibility,
  Share,
  OpenInNew,
  NotificationsActive,
  VerifiedUser,
  Timeline,
  Public,
  ConnectWithoutContact,
  Rocket
} from '@mui/icons-material';

const SocialCard = ({ platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getPlatformColor = (name) => {
    const colorMap = {
      "LinkedIn": "#0077B5",
      "Twitter": "#1DA1F2", 
      "Facebook": "#1877F2",
      "YouTube": "#FF0000",
      "Instagram": "#E4405F",
      "GitHub": "#333333"
    };
    return colorMap[name] || themeColors.primary;
  };

  const getPlatformIcon = (name) => {
    const iconMap = {
      "LinkedIn": LinkedIn,
      "Twitter": Twitter,
      "Facebook": Facebook,
      "YouTube": YouTube,
      "Instagram": Instagram,
      "GitHub": GitHub
    };
    return iconMap[name] || Public;
  };

  const PlatformIcon = getPlatformIcon(platform.name);
  const platformColor = getPlatformColor(platform.name);

  // Animate follower count
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const target = platform.followers || 1000;
      const increment = target / 60;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setFollowerCount(target);
          clearInterval(counter);
        } else {
          setFollowerCount(Math.floor(start));
        }
      }, 30);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [platform.followers, index]);

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
        component="a"
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? `2px solid ${platformColor}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 20px 60px ${platformColor}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${platformColor}, ${platformColor}80)`,
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.3s ease'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${platformColor}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          
          {/* Header with Icon and Status */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -10, 10, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${platformColor}20, ${platformColor}10)`,
                  border: `2px solid ${platformColor}30`
                }}
              >
                <PlatformIcon sx={{ color: platformColor, fontSize: 24 }} />
              </Avatar>
            </motion.div>

            {platform.verified && (
              <Chip
                icon={<VerifiedUser sx={{ fontSize: '14px !important' }} />}
                label="Verified"
                size="small"
                sx={{
                  background: `${themeColors.primary}15`,
                  color: themeColors.primary,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  height: '24px',
                  '& .MuiChip-icon': {
                    color: themeColors.primary
                  }
                }}
              />
            )}
          </Box>

          {/* Platform Name */}
          <Typography
            variant="h6"
            sx={{
              color: themeColors.text,
              fontWeight: 700,
              fontSize: '1.1rem',
              mb: 0.5,
              transition: 'color 0.3s ease'
            }}
          >
            {platform.name}
          </Typography>

          {/* Handle */}
          <Typography
            variant="body2"
            sx={{
              color: platformColor,
              fontSize: '0.875rem',
              fontWeight: 600,
              mb: 2
            }}
          >
            {platform.handle}
          </Typography>

          {/* Stats */}
          <Box sx={{ flexGrow: 1, mb: 2 }}>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                  Followers
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: themeColors.text, 
                    fontWeight: 700,
                    fontSize: '0.875rem'
                  }}
                >
                  {followerCount.toLocaleString()}
                </Typography>
              </Box>
              
              {/* Engagement Rate */}
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                  <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                    Engagement
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: platformColor, 
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  >
                    {platform.engagement || '8.5%'}
                  </Typography>
                </Box>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={parseFloat(platform.engagement) || 85}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 2,
                        background: `linear-gradient(90deg, ${platformColor}, ${platformColor}CC)`
                      }
                    }}
                  />
                </motion.div>
              </Box>
            </Stack>
          </Box>

          {/* Footer */}
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
          
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: themeColors.primary,
                  animation: 'pulse 2s infinite'
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: themeColors.textMuted,
                  fontSize: '0.7rem'
                }}
              >
                Active
              </Typography>
            </Stack>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                size="small"
                sx={{
                  color: platformColor,
                  '&:hover': {
                    background: `${platformColor}15`
                  }
                }}
              >
                <OpenInNew sx={{ fontSize: 16 }} />
              </IconButton>
            </motion.div>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EngagementMetrics = () => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  const metrics = [
    { icon: Groups, value: '50K+', label: 'Total Followers', color: themeColors.primary },
    { icon: TrendingUp, value: '15%', label: 'Growth Rate', color: '#10B981' },
    { icon: Visibility, value: '2M+', label: 'Monthly Reach', color: '#F59E0B' },
    { icon: Share, value: '25K', label: 'Shares/Month', color: '#8B5CF6' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
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
          Social Media Impact
        </Typography>
        
        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.9 }}
              >
                <Stack spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `${metric.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <metric.icon sx={{ color: metric.color, fontSize: 24 }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: metric.color, 
                      fontWeight: 800,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
                    }}
                  >
                    {metric.value}
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
                    {metric.label}
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

export default function SocialRow() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const socialContent = {
    title: "Join Our Community",
    subtitle: "Connect, Learn & Grow Together",
    description: "Follow our journey as we revolutionize bio-industries and share insights with a global community of innovators, researchers, and industry leaders.",
    platforms: [
      { 
        name: "LinkedIn", 
        href: "https://linkedin.com/company/somaticx", 
        handle: "@somaticx",
        followers: 12500,
        engagement: "12.3%",
        verified: true
      },
      { 
        name: "Twitter", 
        href: "https://twitter.com/somaticx", 
        handle: "@somaticx",
        followers: 8900,
        engagement: "8.7%",
        verified: true
      },
      { 
        name: "YouTube", 
        href: "https://youtube.com/somaticx", 
        handle: "somaticx",
        followers: 15600,
        engagement: "15.2%",
        verified: false
      },
      { 
        name: "GitHub", 
        href: "https://github.com/somaticx", 
        handle: "somaticx",
        followers: 3400,
        engagement: "25.8%",
        verified: false
      },
      { 
        name: "Instagram", 
        href: "https://instagram.com/somaticx", 
        handle: "@somaticx",
        followers: 6700,
        engagement: "11.4%",
        verified: false
      },
      { 
        name: "Facebook", 
        href: "https://facebook.com/somaticx", 
        handle: "somaticx",
        followers: 9200,
        engagement: "9.6%",
        verified: true
      }
    ]
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.surface.primary} 0%, ${colors.background.secondary} 100%)`
          : `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.surface.primary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${colors.brand.primary}06 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${colors.brand.primaryLight}04 0%, transparent 50%)`,
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
              <ConnectWithoutContact sx={{ color: themeColors.primary, fontSize: 28 }} />
              <Chip
                label="Social Hub"
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
              {socialContent.title}
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
              {socialContent.subtitle}
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
              {socialContent.description}
            </Typography>
          </motion.div>
        </Box>

        {/* Engagement Metrics */}
        <EngagementMetrics />

        {/* Social Platform Cards */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {socialContent.platforms.map((platform, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <SocialCard platform={platform} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 4,
                p: 6,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <NotificationsActive sx={{ color: themeColors.primary }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 700
                    }}
                  >
                    Stay Updated
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    textAlign: 'center',
                    lineHeight: 1.6
                  }}
                >
                  Join thousands of innovators shaping the future of bio-industries. 
                  Get the latest insights, updates, and breakthrough announcements.
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: themeColors.primary
                      }}
                    />
                  </motion.div>
                  <Typography
                    variant="body2"
                    sx={{
                      color: themeColors.textMuted,
                      fontSize: '0.875rem'
                    }}
                  >
                    Live updates and industry insights
                  </Typography>
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Rocket />}
                  sx={{
                    background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
                    color: '#ffffff',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    boxShadow: `0 8px 32px ${colors.brand.primary}40`,
                    textTransform: 'none',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${colors.brand.primaryDark}, ${colors.brand.primary})`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 40px ${colors.brand.primary}50`
                    }
                  }}
                >
                  Follow All Channels
                </Button>
              </Stack>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}