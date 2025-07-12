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
  Button,
  ButtonGroup,
  Paper,
  Badge,
  IconButton
} from '@mui/material';
import { 
  Agriculture,
  Pets,
  Science,
  Engineering,
  Analytics,
  CloudQueue,
  Memory,
  DeviceHub,
  FilterList,
  ViewModule,
  CheckCircle,
  Star,
  AutoAwesome,
  Insights,
  Nature,
  Computer,
  Psychology,
  Public,
  Build,
  Category
} from '@mui/icons-material';

const FilterButton = ({ category, isActive, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'All Projects': ViewModule,
      'Agriculture': Agriculture,
      'Livestock': Pets,
      'Bio-Tech': Science,
      'IoT Solutions': Engineering,
      'Analytics': Analytics,
      'Software': Memory,
      'Hardware': DeviceHub,
      'Cloud': CloudQueue,
      'AI/ML': AutoAwesome,
      'Research': Psychology,
      'Sustainability': Nature,
      'Infrastructure': Build
    };
    return iconMap[categoryName] || Science;
  };

  const CategoryIcon = getCategoryIcon(category.name);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 120
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={handleInView}
    >
      <Button
        onClick={() => onClick(category.id)}
        sx={{
          minHeight: 80,
          px: 3,
          py: 2,
          borderRadius: 4,
          background: isActive 
            ? `linear-gradient(135deg, ${category.color || themeColors.primary}, ${category.color || themeColors.primary}CC)`
            : isHovered 
              ? 'rgba(255, 255, 255, 0.12)' 
              : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: isActive 
            ? `2px solid ${category.color || themeColors.primary}60`
            : isHovered
              ? `2px solid ${category.color || themeColors.primary}40`
              : '1px solid rgba(255, 255, 255, 0.08)',
          color: isActive ? 'white' : themeColors.text,
          textTransform: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          width: '100%',
          '&:hover': {
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.2), 0 8px 32px ${category.color || themeColors.primary}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${category.color || themeColors.primary}, ${category.color || themeColors.primary}80)`,
            opacity: isActive ? 1 : isHovered ? 0.7 : 0.3,
            transition: 'opacity 0.3s ease'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${category.color || themeColors.primary}08, transparent 70%)`,
            opacity: isHovered || isActive ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <motion.div
          animate={{ 
            scale: isActive ? 1.1 : isHovered ? 1.05 : 1,
            rotate: hasAnimated ? [0, -5, 5, 0] : 0
          }}
          transition={{ duration: 0.6 }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              background: isActive 
                ? 'rgba(255, 255, 255, 0.2)'
                : `linear-gradient(135deg, ${category.color || themeColors.primary}20, ${category.color || themeColors.primary}10)`,
              border: isActive 
                ? '2px solid rgba(255, 255, 255, 0.3)'
                : `2px solid ${category.color || themeColors.primary}30`,
              mb: 1
            }}
          >
            <CategoryIcon 
              sx={{ 
                color: isActive ? 'white' : category.color || themeColors.primary, 
                fontSize: 24 
              }} 
            />
          </Avatar>
        </motion.div>

        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: '0.9rem',
              color: isActive ? 'white' : themeColors.text,
              mb: 0.5,
              background: isActive || isHovered 
                ? 'none' 
                : `linear-gradient(135deg, ${themeColors.text}, ${category.color || themeColors.primary})`,
              backgroundClip: isActive || isHovered ? 'initial' : 'text',
              WebkitBackgroundClip: isActive || isHovered ? 'initial' : 'text',
              WebkitTextFillColor: isActive || isHovered ? 'inherit' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            {category.name}
          </Typography>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Chip
              label={category.count}
              size="small"
              sx={{
                minWidth: 28,
                height: 20,
                background: isActive 
                  ? 'rgba(255, 255, 255, 0.2)'
                  : `${category.color || themeColors.primary}15`,
                color: isActive ? 'white' : category.color || themeColors.primary,
                fontSize: '0.7rem',
                fontWeight: 700,
                border: isActive 
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : `1px solid ${category.color || themeColors.primary}30`,
                '& .MuiChip-label': {
                  px: 1
                }
              }}
            />
          </motion.div>
        </Box>
      </Button>
    </motion.div>
  );
};

const QuickStats = ({ categories, activeCategory }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const totalProjects = categories.reduce((sum, cat) => sum + (cat.count || 0), 0);
  const activeCount = categories.find(cat => cat.id === activeCategory)?.count || totalProjects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 3,
          p: 3,
          textAlign: 'center',
          mb: 4
        }}
      >
        <Stack direction="row" divider={<Box sx={{ width: 1, height: 40, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />} spacing={3} justifyContent="center">
          <Box>
            <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 700 }}>
              {activeCount}
            </Typography>
            <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
              Showing Projects
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 700 }}>
              {totalProjects}
            </Typography>
            <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
              Total Projects
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 700 }}>
              {categories.length - 1}
            </Typography>
            <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
              Categories
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }) {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  // Ensure we have proper color assignments for categories
  const enhancedCategories = categories.map((category, index) => {
    const colorPalette = [
      '#10B981', // Green
      '#3B82F6', // Blue
      '#8B5CF6', // Purple
      '#F59E0B', // Orange
      '#EF4444', // Red
      '#06B6D4', // Cyan
      '#84CC16', // Lime
      '#F97316'  // Orange-red
    ];
    
    return {
      ...category,
      color: category.color || colorPalette[index % colorPalette.length]
    };
  });

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
          background: `radial-gradient(circle at 25% 25%, ${colors.brand.primary}04 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, ${colors.brand.primaryLight || colors.brand.primary}03 0%, transparent 50%)`,
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
              <FilterList sx={{ color: themeColors.brand, fontSize: 28 }} />
              <Chip
                label="Project Categories"
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
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
                background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.01em'
              }}
            >
              Explore by Category
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: themeColors.textSecondary,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Discover innovative solutions tailored to specific industry needs 
              and technological domains
            </Typography>
          </motion.div>
        </Box>

        {/* Quick Stats */}
        <QuickStats categories={enhancedCategories} activeCategory={activeCategory} />

        {/* Filter Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Grid container spacing={3} justifyContent="center">
            {enhancedCategories.map((category, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={category.id}>
                <FilterButton
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={onCategoryChange}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Active Filter Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Paper
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 1.5,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 8
              }}
            >
              <CheckCircle sx={{ color: themeColors.brand, fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.text,
                  fontWeight: 500
                }}
              >
                Showing {enhancedCategories.find(cat => cat.id === activeCategory)?.name || 'All Projects'}
              </Typography>
              <Chip
                label={enhancedCategories.find(cat => cat.id === activeCategory)?.count || 'All'}
                size="small"
                sx={{
                  background: `${themeColors.brand}15`,
                  color: themeColors.brand,
                  fontWeight: 600,
                  fontSize: '0.7rem'
                }}
              />
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}