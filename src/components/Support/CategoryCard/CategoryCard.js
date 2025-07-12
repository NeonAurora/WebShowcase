'use client';

import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  ChevronRight,
  Article
} from '@mui/icons-material';

export default function CategoryCard({ category, index }) {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary'
  });

  const IconComponent = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
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
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.12)',
            border: `2px solid ${category.color}40`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${category.color}15`
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
          }
        }}
      >
        <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                  border: `3px solid ${category.color}30`,
                  mx: 'auto',
                  mb: 3
                }}
              >
                <IconComponent sx={{ fontSize: '2rem', color: category.color }} />
              </Avatar>
            </motion.div>

            <Typography
              variant="h5"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${themeColors.text}, ${category.color})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {category.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}
            >
              {category.description}
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Box sx={{ mb: 3, flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Article sx={{ color: category.color, fontSize: 18 }} />
              Quick Links
            </Typography>

            <List sx={{ py: 0 }}>
              {category.links.map((link, linkIndex) => (
                <motion.div
                  key={linkIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: linkIndex * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <ListItem 
                    component="a"
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    sx={{ 
                      py: 0.5, 
                      px: 0,
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${category.color}10`,
                        '& .MuiListItemIcon-root': {
                          color: category.color
                        },
                        '& .MuiListItemText-primary': {
                          color: category.color
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <ChevronRight sx={{ color: themeColors.textSecondary, fontSize: 16 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={link}
                      primaryTypographyProps={{
                        sx: {
                          color: themeColors.textSecondary,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'color 0.3s ease'
                        }
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>

          {/* Action Button */}
          <Button
            variant="contained"
            endIcon={<ChevronRight />}
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '0.95rem',
              fontWeight: 600,
              background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
              color: category.color,
              border: `1px solid ${category.color}30`,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: `linear-gradient(135deg, ${category.color}, ${category.color}CC)`,
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 32px ${category.color}30`
              }
            }}
          >
            View All Articles
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}