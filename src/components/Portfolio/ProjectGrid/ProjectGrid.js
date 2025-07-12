'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
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
  Paper,
  Divider,
  IconButton,
  Skeleton,
  Alert,
  LinearProgress
} from '@mui/material';
import { 
  SearchOff,
  ViewModule,
  TrendingUp,
  FilterList,
  Refresh,
  ArrowBack,
  Insights,
  Assessment,
  Category,
  Timeline,
  AutoAwesome,
  Star,
  CheckCircle,
  Science,
  Agriculture,
  Pets,
  Engineering
} from '@mui/icons-material';

const EmptyState = ({ activeCategory, onCategoryChange }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 6,
          textAlign: 'center',
          maxWidth: 500,
          mx: 'auto'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 3,
              background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.primary}10)`,
              border: `2px solid ${themeColors.primary}30`
            }}
          >
            <SearchOff sx={{ color: themeColors.primary, fontSize: 40 }} />
          </Avatar>
        </motion.div>

        <Typography
          variant="h4"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 2
          }}
        >
          No Projects Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: themeColors.textSecondary,
            fontSize: '1rem',
            lineHeight: 1.6,
            mb: 4
          }}
        >
          {"We couldn't find any projects in this category. Try exploring other categories or view all projects."}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<ViewModule />}
            onClick={() => onCategoryChange('all')}
            sx={{
              px: 3,
              py: 1,
              background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
              '&:hover': {
                background: `linear-gradient(135deg, ${themeColors.primary}DD, ${themeColors.primary})`
              }
            }}
          >
            View All Projects
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={() => window.location.reload()}
            sx={{
              px: 3,
              py: 1,
              borderColor: `${themeColors.primary}40`,
              color: themeColors.primary,
              '&:hover': {
                borderColor: themeColors.primary,
                background: `${themeColors.primary}10`
              }
            }}
          >
            Refresh
          </Button>
        </Stack>
      </Card>
    </motion.div>
  );
};

const ProjectGridHeader = ({ activeCategory, filteredProjects, totalProjects }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'all': ViewModule,
      'Agriculture': Agriculture,
      'Livestock': Pets,
      'Bio-Tech': Science,
      'IoT Solutions': Engineering
    };
    return iconMap[categoryName] || ViewModule;
  };

  const CategoryIcon = getCategoryIcon(activeCategory);
  const categoryName = activeCategory === 'all' ? 'All Projects' : `${filteredProjects[0]?.category.name} Projects`;
  const completionRate = totalProjects > 0 ? Math.round((filteredProjects.length / totalProjects) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          p: 4,
          mb: 6
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${themeColors.primary}20, ${themeColors.primary}10)`,
                  border: `2px solid ${themeColors.primary}30`
                }}
              >
                <CategoryIcon sx={{ color: themeColors.primary, fontSize: 24 }} />
              </Avatar>
              
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    lineHeight: 1.2
                  }}
                >
                  {categoryName}
                </Typography>
                
                <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
                  <Chip
                    icon={<Assessment />}
                    label={`${filteredProjects.length} Projects`}
                    size="small"
                    sx={{
                      background: `${themeColors.primary}15`,
                      color: themeColors.primary,
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  />
                  
                  {activeCategory !== 'all' && (
                    <Chip
                      label={`${completionRate}% of Total`}
                      size="small"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: themeColors.textSecondary,
                        fontSize: '0.75rem'
                      }}
                    />
                  )}
                </Stack>
              </Box>
            </Stack>
            
            <Typography
              variant="body1"
              sx={{
                color: themeColors.textSecondary,
                fontSize: '1rem',
                lineHeight: 1.6
              }}
            >
              {activeCategory === 'all' 
                ? `Explore our complete portfolio of ${filteredProjects.length} innovative projects across all categories.`
                : `Discover ${filteredProjects.length} specialized project${filteredProjects.length !== 1 ? 's' : ''} in ${filteredProjects[0]?.category.name}.`
              }
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
                    Category Coverage
                  </Typography>
                  <Typography variant="caption" sx={{ color: themeColors.primary, fontWeight: 700 }}>
                    {completionRate}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={completionRate}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 3,
                      background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.primary}CC)`
                    }
                  }}
                />
              </Box>
              
              <Stack direction="row" spacing={2} justifyContent="center">
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, fontWeight: 700 }}>
                    {filteredProjects.length}
                  </Typography>
                  <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
                    Showing
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, fontWeight: 700 }}>
                    {totalProjects}
                  </Typography>
                  <Typography variant="caption" sx={{ color: themeColors.textSecondary }}>
                    Total
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

const LoadingSkeleton = () => {
  return (
    <Grid container spacing={4}>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Skeleton
              variant="rectangular"
              height={200}
              sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
            />
            <CardContent sx={{ p: 3 }}>
              <Skeleton variant="text" height={40} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
              <Skeleton variant="text" height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 1 }} />
              <Skeleton variant="text" height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
              <Stack direction="row" spacing={1}>
                <Skeleton variant="rounded" width={60} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                <Skeleton variant="rounded" width={60} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default function ProjectGrid({ projects, activeCategory }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.id === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Simulate loading when category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDark 
          ? `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`
          : `linear-gradient(135deg, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 70%, ${colors.brand.primary}03 0%, transparent 50%), 
                       radial-gradient(circle at 70% 30%, ${colors.brand.primaryLight || colors.brand.primary}02 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredProjects.length === 0 ? (
          <EmptyState 
            activeCategory={activeCategory} 
            onCategoryChange={(category) => {
              // This would typically be handled by the parent component
              console.log('Change category to:', category);
            }} 
          />
        ) : (
          <>
            <ProjectGridHeader 
              activeCategory={activeCategory}
              filteredProjects={filteredProjects}
              totalProjects={projects.length}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={4}>
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => (
                    <Grid item xs={12} md={6} lg={4} key={project.id}>
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.1
                        }}
                      >
                        <ProjectCard
                          project={project}
                          onClick={handleProjectClick}
                          index={index}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </AnimatePresence>
              </Grid>
            </motion.div>

            {/* Grid Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Paper
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 4,
                    py: 2,
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 8
                  }}
                >
                  <CheckCircle sx={{ color: themeColors.brand, fontSize: 20 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: themeColors.text,
                      fontWeight: 500
                    }}
                  >
                    Showing {filteredProjects.length} of {projects.length} projects
                  </Typography>
                  <Chip
                    icon={<Star />}
                    label="Portfolio Complete"
                    size="small"
                    sx={{
                      background: `${themeColors.brand}15`,
                      color: themeColors.brand,
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  />
                </Paper>
              </Box>
            </motion.div>
          </>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}