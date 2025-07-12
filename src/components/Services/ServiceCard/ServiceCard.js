'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  CheckCircle,
  ChevronRight,
  PlayArrow,
  Star,
  TrendingUp
} from '@mui/icons-material';

export default function ServiceCard({ service, onLearnMore }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${service.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${service.color}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`
          }
        }}
      >
        <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                  border: `3px solid ${service.color}30`,
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2rem'
                }}
              >
                {service.icon}
              </Avatar>
            </motion.div>

            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${themeColors.text}, ${service.color})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {service.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6,
                fontSize: '1rem'
              }}
            >
              {service.description}
            </Typography>
          </Box>

          {/* Key Features Section */}
          <Box sx={{ mb: 3, flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Star sx={{ color: service.color, fontSize: 20 }} />
              Key Features
            </Typography>

            <List sx={{ py: 0 }}>
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircle sx={{ color: service.color, fontSize: 16 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        sx: {
                          color: themeColors.textSecondary,
                          fontSize: '0.875rem',
                          lineHeight: 1.5
                        }
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>

          {/* Technologies Section */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <TrendingUp sx={{ color: service.color, fontSize: 20 }} />
              Technologies
            </Typography>

            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={tech}
                    size="small"
                    sx={{
                      background: `${service.color}20`,
                      color: service.color,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      border: `1px solid ${service.color}30`,
                      '&:hover': {
                        background: `${service.color}30`
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Pricing Section */}
          <Box sx={{ mb: 4 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                border: `1px solid ${service.color}20`,
                borderRadius: 2,
                p: 2
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: themeColors.textMuted,
                    fontWeight: 500
                  }}
                >
                  Starting from
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: service.color,
                    fontWeight: 700
                  }}
                >
                  {service.pricing}
                </Typography>
              </Stack>
              <Typography
                variant="caption"
                sx={{
                  color: themeColors.textMuted,
                  fontSize: '0.75rem'
                }}
              >
                {service.pricingNote}
              </Typography>
            </Card>
          </Box>

          {/* Action Buttons */}
          <Stack spacing={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ChevronRight />}
              onClick={() => onLearnMore(service)}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: `0 8px 32px ${service.color}30`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${service.color}DD, ${service.color})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 48px ${service.color}40`
                }
              }}
            >
              Learn More
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayArrow />}
              href="/demo"
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderColor: `${service.color}60`,
                color: service.color,
                borderRadius: 2,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderColor: service.color,
                  background: `${service.color}10`,
                  borderWidth: 2
                }
              }}
            >
              Request Demo
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}