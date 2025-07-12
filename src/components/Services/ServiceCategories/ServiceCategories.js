'use client';

import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceModal from '../ServiceModal/ServiceModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Card,
  Avatar,
  Fade
} from '@mui/material';
import { 
  Business,
  TrendingUp,
  AutoAwesome,
  Verified
} from '@mui/icons-material';

const SectionHeader = () => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Chip
          label="Professional Services"
          icon={<Business />}
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
          Our Service Categories
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: themeColors.textSecondary,
            fontSize: { xs: '1.125rem', sm: '1.25rem' },
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
            mb: 4
          }}
        >
          Comprehensive solutions tailored to your industry needs
        </Typography>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={4} 
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          {[
            { icon: AutoAwesome, label: 'AI-Powered Solutions', value: '4+' },
            { icon: TrendingUp, label: 'Industry Coverage', value: '100%' },
            { icon: Verified, label: 'Client Satisfaction', value: '99%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 3,
                  p: 2,
                  textAlign: 'center',
                  minWidth: 160,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: `1px solid ${themeColors.brand}40`,
                    boxShadow: `0 8px 32px ${themeColors.brand}15`
                  }
                }}
              >
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                    border: `2px solid ${themeColors.brand}30`,
                    mx: 'auto',
                    mb: 1
                  }}
                >
                  <stat.icon sx={{ fontSize: 24, color: themeColors.brand }} />
                </Avatar>
                
                <Typography
                  variant="h6"
                  sx={{
                    color: themeColors.brand,
                    fontWeight: 700,
                    fontSize: '1.25rem'
                  }}
                >
                  {stat.value}
                </Typography>
                
                <Typography
                  variant="caption"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default function ServiceCategories({ services }) {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    backgroundPrimary: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary'
  });

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <Box
      component="section"
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} lg={6} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  <ServiceCard
                    service={service}
                    onLearnMore={handleLearnMore}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                p: 6,
                maxWidth: 800,
                mx: 'auto',
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
              <Typography
                variant="h4"
                sx={{
                  color: themeColors.text,
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.75rem', sm: '2.125rem' }
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: themeColors.textSecondary,
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                {"Let's discuss how our comprehensive solutions can address your specific needs and drive innovation in your industry."}
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
              >
                <Chip
                  label="Get Started Today"
                  clickable
                  sx={{
                    background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 3,
                    px: 4,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 32px ${themeColors.brand}40`
                    }
                  }}
                />
                
                <Chip
                  label="Schedule Consultation"
                  variant="outlined"
                  clickable
                  sx={{
                    borderColor: `${themeColors.brand}60`,
                    color: themeColors.brand,
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 3,
                    px: 4,
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: themeColors.brand,
                      background: `${themeColors.brand}10`,
                      borderWidth: 2
                    }
                  }}
                />
              </Stack>
            </Card>
          </Box>
        </motion.div>

        <Fade in={Boolean(selectedService)} timeout={300}>
          <div>
            {selectedService && (
              <ServiceModal
                service={selectedService}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </Fade>
      </Container>
    </Box>
  );
}