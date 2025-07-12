'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Container,
  Typography,
  Card,
  Stack,
  Avatar,
  Chip,
  Button,
  Badge
} from '@mui/material';
import { 
  Category,
  FilterList,
  PlayArrow
} from '@mui/icons-material';

export default function DemoFilter({ categories, activeCategory, onCategoryChange }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    backgroundPrimary: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const SectionHeader = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip
          label="Browse Categories"
          icon={<FilterList />}
          sx={{
            background: `${themeColors.brand}20`,
            color: themeColors.brand,
            fontWeight: 600,
            fontSize: '0.875rem',
            mb: 3,
            border: `1px solid ${themeColors.brand}30`,
            py: 2,
            px: 1
          }}
        />

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.25rem', lg: '2.5rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Browse by Category
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: themeColors.textSecondary,
            fontSize: { xs: '1rem', sm: '1.125rem' },
            lineHeight: 1.6,
            maxWidth: '500px',
            mx: 'auto'
          }}
        >
          Find the perfect tutorial for your needs and expertise level
        </Typography>
      </Box>
    </motion.div>
  );

  const CategoryButton = ({ category, index }) => {
    const isActive = activeCategory === category.id;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card
          onClick={() => onCategoryChange(category.id)}
          sx={{
            background: isActive 
              ? `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`
              : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: isActive 
              ? `2px solid ${themeColors.brand}` 
              : '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 3,
            p: 2.5,
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: isActive 
                ? `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`
                : 'rgba(255, 255, 255, 0.12)',
              border: `2px solid ${themeColors.brand}60`,
              boxShadow: `0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 16px ${themeColors.brand}20`
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: isActive 
                ? `linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))`
                : `linear-gradient(90deg, ${themeColors.brand}, ${themeColors.brand}80)`,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 48,
                height: 48,
                background: isActive 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                border: isActive 
                  ? '2px solid rgba(255, 255, 255, 0.3)' 
                  : `2px solid ${themeColors.brand}30`
              }}
            >
              <PlayArrow sx={{ 
                fontSize: '1.5rem', 
                color: isActive ? 'white' : themeColors.brand 
              }} />
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: isActive ? 'white' : themeColors.text,
                  fontWeight: 600,
                  mb: 0.5,
                  fontSize: { xs: '1rem', sm: '1.125rem' }
                }}
              >
                {category.name}
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: isActive ? 'rgba(255, 255, 255, 0.8)' : themeColors.textSecondary,
                  fontSize: '0.875rem'
                }}
              >
                {category.description || `${category.count} tutorials available`}
              </Typography>
            </Box>

            <Badge
              badgeContent={category.count}
              sx={{
                '& .MuiBadge-badge': {
                  background: isActive 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : `${themeColors.brand}20`,
                  color: isActive ? themeColors.brand : themeColors.brand,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  minWidth: '20px',
                  height: '20px',
                  border: isActive 
                    ? `1px solid rgba(255, 255, 255, 0.3)` 
                    : `1px solid ${themeColors.brand}30`
                }
              }}
            >
              <Box sx={{ width: 24, height: 24 }} />
            </Badge>
          </Stack>
        </Card>
      </motion.div>
    );
  };

  return (
    <Box
      component="section"
      id="tutorials"
      sx={{
        py: { xs: 6, lg: 8 },
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
          background: `radial-gradient(circle at 20% 80%, ${themeColors.brand}06 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${themeColors.brand}06 0%, transparent 50%)`,
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
          <Stack spacing={3}>
            {categories && categories.map((category, index) => (
              <CategoryButton 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}