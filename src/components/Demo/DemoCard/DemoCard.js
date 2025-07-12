'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
  Chip,
  IconButton,
  Badge,
  Skeleton
} from '@mui/material';
import { 
  PlayArrow,
  AccessTime,
  BarChart,
  Visibility,
  Add
} from '@mui/icons-material';

export default function DemoCard({ demo, onClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getVideoThumbnail = (url) => {
    // Extract video ID from YouTube URL
    const videoId = url?.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
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
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card
        onClick={() => onClick(demo)}
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '480px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${demo.category?.color || themeColors.brand}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${demo.category?.color || themeColors.brand}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${demo.category?.color || themeColors.brand}, ${demo.category?.color || themeColors.brand}80)`
          }
        }}
      >
        {/* Video Thumbnail */}
        <Box sx={{ position: 'relative', height: 200 }}>
          {isLoading && !imageError && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            />
          )}
          
          {imageError ? (
            <Box
              sx={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${demo.category?.color || themeColors.brand}20, ${demo.category?.color || themeColors.brand}40)`,
                color: demo.category?.color || themeColors.brand
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '3rem' }}>
                {demo.category?.icon || '🎥'}
              </Typography>
            </Box>
          ) : (
            <CardMedia
              component="img"
              height="200"
              image={getVideoThumbnail(demo.videoUrl)}
              alt={demo.title}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setImageError(true);
              }}
              sx={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          )}

          {/* Play Button Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1
              }
            }}
          >
            <IconButton
              sx={{
                width: 64,
                height: 64,
                background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                color: 'white',
                '&:hover': {
                  background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                  transform: 'scale(1.1)'
                }
              }}
            >
              <PlayArrow sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>

          {/* Duration Badge */}
          <Chip
            label={demo.duration}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: getDurationColor(demo.duration),
              color: 'white',
              fontWeight: 600,
              fontSize: '0.75rem'
            }}
          />

          {/* Category Badge */}
          <Chip
            label={demo.category?.name}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: `${demo.category?.color || themeColors.brand}20`,
              backdropFilter: 'blur(8px)',
              color: demo.category?.color || themeColors.brand,
              fontWeight: 600,
              fontSize: '0.75rem',
              border: `1px solid ${demo.category?.color || themeColors.brand}30`
            }}
          />
        </Box>

        {/* Content */}
        <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              color: themeColors.text,
              fontWeight: 600,
              mb: 2,
              fontSize: '1.125rem',
              lineHeight: 1.4,
              height: '3.4rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {demo.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: themeColors.textSecondary,
              mb: 3,
              lineHeight: 1.6,
              height: '4.8rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {demo.description}
          </Typography>

          {/* Metadata */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <AccessTime sx={{ fontSize: 16, color: themeColors.textMuted }} />
                <Typography variant="caption" sx={{ color: themeColors.textMuted, fontWeight: 500 }}>
                  {demo.estimatedTime}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={0.5} alignItems="center">
                <BarChart sx={{ fontSize: 16, color: getDifficultyColor(demo.difficulty) }} />
                <Typography variant="caption" sx={{ color: getDifficultyColor(demo.difficulty), fontWeight: 500 }}>
                  {demo.difficulty}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Visibility sx={{ fontSize: 16, color: themeColors.textMuted }} />
              <Typography variant="caption" sx={{ color: themeColors.textMuted, fontWeight: 500 }}>
                {demo.views}
              </Typography>
            </Stack>
          </Stack>

          {/* Topics Covered */}
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {demo.topics?.slice(0, 3).map((topic, index) => (
              <Chip
                key={index}
                label={topic}
                size="small"
                sx={{
                  background: `${demo.category?.color || themeColors.brand}15`,
                  color: demo.category?.color || themeColors.brand,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  height: 24
                }}
              />
            ))}
            {demo.topics?.length > 3 && (
              <Chip
                icon={<Add sx={{ fontSize: 14 }} />}
                label={demo.topics.length - 3}
                size="small"
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: themeColors.textMuted,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  height: 24
                }}
              />
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}