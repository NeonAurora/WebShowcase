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
  IconButton,
  Button,
  Divider,
  Paper,
  LinearProgress
} from '@mui/material';
import { 
  Science,
  Engineering,
  HealthAndSafety,
  Computer,
  LinkedIn,
  Twitter,
  GitHub,
  Verified,
  EmojiEvents,
  School,
  TrendingUp,
  Groups,
  WorkspacePremium,
  Star,
  KeyboardArrowRight,
  PlayArrow,
  Person,
  Business,
  Psychology,
  AutoAwesome
} from '@mui/icons-material';

const LeaderCard = ({ leader, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary'
  });

  const { 
    name, 
    role, 
    bio, 
    icon: Icon, 
    color, 
    expertise, 
    achievements, 
    experience,
    social 
  } = leader;

  // Animate progress on hover
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (leader.leadershipScore || 92)) {
            clearInterval(timer);
            return leader.leadershipScore || 92;
          }
          return prev + 3;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, leader.leadershipScore]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const getSocialIcon = (platform) => {
    const iconMap = {
      linkedin: LinkedIn,
      twitter: Twitter,
      github: GitHub
    };
    return iconMap[platform] || Person;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={handleInView}
    >
      <Card
        sx={{
          height: '100%',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? `2px solid ${color}40`
            : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 25px 60px rgba(0, 0, 0, 0.25), 0 8px 32px ${color}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            opacity: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, ${color}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          
          {/* Avatar and Badge */}
          <Box sx={{ mb: 3, position: 'relative' }}>
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: hasAnimated ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 2,
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                  border: `4px solid ${color}30`,
                  boxShadow: `0 12px 40px ${color}20`,
                  position: 'relative'
                }}
              >
                <Icon sx={{ color: color, fontSize: 48 }} />
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 + 0.5 }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '50%',
                transform: 'translateX(50%)'
              }}
            >
              <Chip
                icon={<Verified sx={{ fontSize: '14px !important' }} />}
                label="Leader"
                size="small"
                sx={{
                  background: `${color}15`,
                  color: color,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  border: `1px solid ${color}30`,
                  '& .MuiChip-icon': {
                    color: color
                  }
                }}
              />
            </motion.div>
          </Box>

          {/* Name and Role */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: '1.3rem',
                lineHeight: 1.2,
                mb: 1,
                background: isHovered 
                  ? `linear-gradient(135deg, ${themeColors.text}, ${color})`
                  : 'none',
                backgroundClip: isHovered ? 'text' : 'initial',
                WebkitBackgroundClip: isHovered ? 'text' : 'initial',
                WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
                transition: 'all 0.3s ease'
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: color,
                fontWeight: 600,
                fontSize: '1rem',
                mb: 2
              }}
            >
              {role}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                fontSize: '0.875rem',
                lineHeight: 1.5,
                mb: 2
              }}
            >
              {experience} years experience
            </Typography>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}>
                Leadership Rating
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: color, 
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
                  background: `linear-gradient(90deg, ${color}, ${color}CC)`
                }
              }}
            />
          </Box>

          {/* Bio */}
          <Typography
            variant="body2"
            sx={{
              color: themeColors.textSecondary,
              fontSize: '0.875rem',
              lineHeight: 1.6,
              mb: 3,
              flexGrow: 1
            }}
          >
            {bio}
          </Typography>

          {/* Expertise Tags */}
          {expertise && (
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                {expertise.slice(0, 2).map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + idx * 0.1 + 0.8 }}
                  >
                    <Chip
                      label={skill}
                      size="small"
                      sx={{
                        background: `${color}10`,
                        color: color,
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        border: `1px solid ${color}20`,
                        mb: 0.5
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Box>
          )}

          {/* Achievements */}
          {achievements && (
            <>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
              <Grid container spacing={1} sx={{ mb: 3 }}>
                {Object.entries(achievements).map(([key, value], idx) => (
                  <Grid item xs={6} key={idx}>
                    <Stack spacing={0.5} alignItems="center">
                      <Typography
                        variant="body2"
                        sx={{
                          color: color,
                          fontWeight: 700,
                          fontSize: '0.875rem'
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
            </>
          )}

          {/* Social Links */}
          <Box sx={{ mt: 'auto' }}>
            <Stack direction="row" spacing={1} justifyContent="center">
              {Object.entries(social).map(([platform, url]) => {
                const SocialIcon = getSocialIcon(platform);
                return (
                  <motion.div
                    key={platform}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      component="a"
                      href={url}
                      size="small"
                      sx={{
                        width: 36,
                        height: 36,
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color: color,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: color,
                          color: 'white',
                          boxShadow: `0 8px 24px ${color}40`
                        }
                      }}
                    >
                      <SocialIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </motion.div>
                );
              })}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StatisticCard = ({ stat, index }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const numericValue = parseInt(stat.value.toString().replace(/[^\d]/g, ''));
      const increment = numericValue / 60;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setAnimatedValue(numericValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(start));
        }
      }, 30);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [stat.value, index, hasAnimated]);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={handleInView}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <Card 
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 3,
          textAlign: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${stat.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${stat.color}15`
          }
        }}
      >
        <stat.icon sx={{ color: stat.color, fontSize: 32, mb: 1 }} />
        
        <Typography 
          variant="h4" 
          sx={{ 
            color: stat.color, 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 1
          }}
        >
          {hasAnimated ? animatedValue.toLocaleString() : '0'}{stat.value.toString().includes('+') ? '+' : ''}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: themeColors.textSecondary,
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          {stat.label}
        </Typography>
      </Card>
    </motion.div>
  );
};

export default function Leadership() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const leaders = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'PhD in Biotechnology with 15+ years in agricultural innovation. Former lead researcher at major agtech companies, driving strategic vision and market expansion.',
      icon: Science,
      color: '#10B981',
      experience: 15,
      leadershipScore: 98,
      expertise: ['Biotechnology', 'Strategic Leadership', 'Market Development', 'Innovation Management'],
      achievements: {
        patents: '8+',
        publications: '25+',
        awards: '12+',
        teamSize: '50+'
      },
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Computer Science PhD specializing in IoT and machine learning for biological systems. Published researcher and technology innovator with deep expertise in scalable systems.',
      icon: Engineering,
      color: '#3B82F6',
      experience: 12,
      leadershipScore: 96,
      expertise: ['Machine Learning', 'IoT Systems', 'Software Architecture', 'Data Science'],
      achievements: {
        systems: '100+',
        algorithms: '30+',
        patents: '6+',
        repositories: '200+'
      },
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Head of Research',
      bio: 'Veterinary Medicine background with expertise in animal behavior and welfare. Leading our livestock technology initiatives and research partnerships.',
      icon: HealthAndSafety,
      color: '#8B5CF6',
      experience: 10,
      leadershipScore: 94,
      expertise: ['Veterinary Medicine', 'Animal Welfare', 'Research Leadership', 'Product Development'],
      achievements: {
        studies: '40+',
        partnerships: '15+',
        innovations: '20+',
        certifications: '8+'
      },
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'James Park',
      role: 'Head of Engineering',
      bio: 'Software engineering leader with experience in scalable systems and hardware integration for agricultural applications. Expert in building high-performance teams.',
      icon: Computer,
      color: '#F59E0B',
      experience: 8,
      leadershipScore: 92,
      expertise: ['Software Engineering', 'Hardware Integration', 'Team Leadership', 'System Architecture'],
      achievements: {
        projects: '60+',
        integrations: '25+',
        platforms: '10+',
        efficiency: '40%'
      },
      social: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const statistics = [
    { value: '4', label: 'Leadership Team', icon: Groups, color: '#10B981' },
    { value: '45+', label: 'Combined Experience', icon: WorkspacePremium, color: '#3B82F6' },
    { value: '100+', label: 'Publications & Patents', icon: School, color: '#8B5CF6' },
    { value: '95', label: 'Team Satisfaction', icon: Star, color: '#F59E0B' }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
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
          background: `radial-gradient(circle at 30% 40%, ${colors.brand.primary}04 0%, transparent 50%), 
                       radial-gradient(circle at 70% 60%, ${colors.brand.primaryLight || colors.brand.primary}03 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <Groups sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Leadership"
                sx={{
                  background: `linear-gradient(135deg, ${colors.brand.primary}15, ${colors.brand.primaryLight || colors.brand.primary}10)`,
                  color: themeColors.brand,
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
                fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}
            >
              Visionary Leadership Team
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
                color: themeColors.textSecondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Experienced leaders and innovators driving the future of bio-industries 
              through cutting-edge technology and strategic vision
            </Typography>
          </motion.div>
        </Box>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatisticCard stat={stat} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {leaders.map((leader, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <LeaderCard leader={leader} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                color: themeColors.text,
                mb: 3
              }}
            >
              Join Our Leadership Journey
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: themeColors.textSecondary,
                mb: 4,
                maxWidth: '500px',
                mx: 'auto'
              }}
            >
              Connect with our leadership team and explore opportunities to shape the future together
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center" 
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRight />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.primaryLight || colors.brand.primary}DD)`,
                  boxShadow: `0 8px 32px ${colors.brand.primary}30`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brand.primaryLight || colors.brand.primary}, ${colors.brand.primary})`,
                    boxShadow: `0 12px 48px ${colors.brand.primary}40`,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Meet Our Team
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                endIcon={<PlayArrow />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: `${colors.brand.primary}40`,
                  color: themeColors.brand,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.brand.primary,
                    background: `${colors.brand.primary}10`,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Leadership Vision
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}