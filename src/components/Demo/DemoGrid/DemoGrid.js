'use client';

import { useState, useRef } from 'react';
import DemoCard from '../DemoCard/DemoCard';
import DemoModal from '../DemoModal/DemoModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
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
  Alert
} from '@mui/material';
import { 
  VideoLibrary,
  FilterList,
  Movie,
  Circle
} from '@mui/icons-material';

export default function DemoGrid({ demos, activeCategory }) {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    backgroundSecondary: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary'
  });

  const filteredDemos = demos && activeCategory === 'all' 
    ? demos 
    : demos?.filter(demo => demo.category.id === activeCategory) || [];

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDemo(null), 300);
  };

  const SectionHeader = () => {
    const categoryName = activeCategory === 'all' 
      ? 'All Tutorials' 
      : filteredDemos[0]?.category.name 
        ? `${filteredDemos[0].category.name} Tutorials`
        : 'Tutorials';

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                border: `2px solid ${themeColors.brand}30`
              }}
            >
              <VideoLibrary sx={{ fontSize: '1.5rem', color: themeColors.brand }} />
            </Avatar>
            
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: themeColors.text,
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem' },
                  background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {categoryName}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: themeColors.textSecondary,
                  fontSize: '1.125rem'
                }}
              >
                Showing {filteredDemos.length} tutorial{filteredDemos.length !== 1 ? 's' : ''}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </motion.div>
    );
  };

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Alert
        severity="info"
        icon={<Movie sx={{ fontSize: '2rem' }} />}
        sx={{
          background: 'rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(59, 130, 246, 0.3)',
          borderRadius: 4,
          p: 4,
          maxWidth: 600,
          mx: 'auto',
          '& .MuiAlert-icon': {
            fontSize: '2rem',
            color: '#3B82F6'
          },
          '& .MuiAlert-message': {
            width: '100%'
          }
        }}
      >
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: themeColors.text,
              fontWeight: 700,
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            No Demos Found
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: themeColors.textSecondary,
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}
          >
            Try selecting a different category to see more tutorials and demonstrations.
          </Typography>

          <Chip
            icon={<FilterList />}
            label="Use filters above to browse categories"
            sx={{
              background: 'rgba(59, 130, 246, 0.15)',
              color: '#3B82F6',
              fontWeight: 600,
              fontSize: '0.875rem'
            }}
          />
        </Stack>
      </Alert>
    </motion.div>
  );

  const TimelineItem = ({ demo, index, isLeft }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Calculate responsive line distance based on container width and card size
    const cardWidth = '400px';
    const timelineOffset = '80px'; // Half of the gap between cards and center line
    const lineDistance = `calc((50% - ${timelineOffset}) - (${cardWidth}) / 1.25)`;
    
    return (
      <Box
        sx={{
          position: 'relative',
          mb: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isLeft ? 'flex-start' : 'flex-end',
          width: '100%'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Container */}
        <Box
          sx={{
            width: { xs: '100%', md: 'calc(50% - 80px)' },
            display: 'flex',
            justifyContent: isLeft ? 'flex-start' : 'flex-end'
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            style={{ width: '100%', maxWidth: '400px' }}
          >
            <DemoCard
              demo={demo}
              onClick={handleDemoClick}
            />
          </motion.div>
        </Box>

        {/* Connecting Line */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: isLeft ? `calc(50% - ${lineDistance})` : '50%',
            right: isLeft ? '50%' : `calc(50% - ${lineDistance})`,
            height: '2px',
            background: isHovered 
              ? `linear-gradient(${isLeft ? '90deg' : '270deg'}, ${demo.category?.color || themeColors.brand}, transparent)`
              : `linear-gradient(${isLeft ? '90deg' : '270deg'}, ${demo.category?.color || themeColors.brand}60, transparent)`,
            zIndex: 1,
            display: { xs: 'none', md: 'block' },
            transition: 'all 0.3s ease',
            boxShadow: isHovered ? `0 0 8px ${demo.category?.color || themeColors.brand}80` : 'none'
          }}
        />

        {/* Card-side Diamond Node */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: isLeft ? `calc(50% - ${lineDistance})` : `calc(50% + ${lineDistance})`,
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: 12,
            height: 12,
            background: isHovered 
              ? demo.category?.color || themeColors.brand
              : `${demo.category?.color || themeColors.brand}70`,
            border: `2px solid ${themeColors.background}`,
            boxShadow: isHovered 
              ? `0 0 0 1px ${demo.category?.color || themeColors.brand}, 0 0 8px ${demo.category?.color || themeColors.brand}50`
              : `0 0 0 1px ${demo.category?.color || themeColors.brand}30`,
            zIndex: 2,
            display: { xs: 'none', md: 'block' },
            transition: 'all 0.3s ease'
          }}
        />

        {/* Center Timeline Node - Diamond Shape */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: 16,
            height: 16,
            background: isHovered 
              ? demo.category?.color || themeColors.brand
              : `${demo.category?.color || themeColors.brand}80`,
            border: `3px solid ${themeColors.background}`,
            boxShadow: isHovered 
              ? `0 0 0 2px ${demo.category?.color || themeColors.brand}, 0 0 12px ${demo.category?.color || themeColors.brand}60`
              : `0 0 0 2px ${demo.category?.color || themeColors.brand}40`,
            zIndex: 3,
            display: { xs: 'none', md: 'block' },
            transition: 'all 0.3s ease'
          }}
        />
      </Box>
    );
  };

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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {filteredDemos.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <SectionHeader />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Central Timeline Line */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: `linear-gradient(180deg, transparent 0%, ${themeColors.brand}40 10%, ${themeColors.brand}40 90%, transparent 100%)`,
                    transform: 'translateX(-50%)',
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' }
                  }}
                />

                {/* Timeline Items */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  {filteredDemos.map((demo, index) => (
                    <TimelineItem
                      key={demo.id}
                      demo={demo}
                      index={index}
                      isLeft={index % 2 === 0}
                    />
                  ))}
                </Box>

                {/* Mobile Grid Layout */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <Grid container spacing={4}>
                    {filteredDemos.map((demo, index) => (
                      <Grid item xs={12} key={`mobile-${demo.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <DemoCard
                            demo={demo}
                            onClick={handleDemoClick}
                          />
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </AnimatePresence>
          </>
        )}

        <AnimatePresence>
          {selectedDemo && (
            <DemoModal
              demo={selectedDemo}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}