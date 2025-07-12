'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import { 
  QuestionMark,
  ExpandMore,
  Support,
  ChevronRight,
  ContactSupport,
  Category,
  HelpCenter,
  Settings,
  CreditCard,
  AutoAwesome
} from '@mui/icons-material';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const categoryIcons = {
    'General': HelpCenter,
    'Technical': Settings,
    'Billing & Plans': CreditCard
  };

  const categoryColors = {
    'General': '#10B981', // Success green
    'Technical': '#3B82F6', // Info blue
    'Billing & Plans': '#F59E0B' // Warning amber
  };

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What industries does Somaticx serve?',
          answer: 'Somaticx specializes in bio-industry technology solutions, primarily serving agriculture, livestock management, dairy farming, and related agricultural sectors. Our solutions are designed to help farmers, ranchers, and agricultural businesses optimize their operations through innovative technology.'
        },
        {
          question: 'How does Somaticx ensure data security and privacy?',
          answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards. Your farm data is never shared with third parties without your explicit consent.'
        },
        {
          question: 'What support options are available?',
          answer: 'We offer 24/7 technical support, comprehensive documentation, video tutorials, live chat support, and dedicated customer success managers for enterprise clients. Our support team includes agricultural technology experts who understand your industry.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What are the system requirements for Somaticx solutions?',
          answer: 'Our software runs on any modern web browser and mobile device. For hardware solutions, you\'ll need a stable Wi-Fi connection and power source. Specific requirements vary by product - check our installation guides for detailed specifications.'
        },
        {
          question: 'Can Somaticx integrate with my existing farm management software?',
          answer: 'Yes! We offer APIs and integrations with popular farm management platforms including FarmLogs, Granular, Climate FieldView, and many others. Our technical team can help with custom integrations if needed.'
        },
        {
          question: 'How reliable is the IoT connectivity in rural areas?',
          answer: 'Our devices support multiple connectivity options including Wi-Fi, cellular (4G/5G), and LoRaWAN for long-range, low-power communication. We design our solutions specifically for rural environments with intermittent connectivity.'
        }
      ]
    },
    {
      category: 'Billing & Plans',
      questions: [
        {
          question: 'What pricing plans are available?',
          answer: 'We offer flexible pricing based on your operation size and needs. Plans start with basic monitoring for small farms at $50/month, with enterprise solutions available for large operations. Contact our sales team for custom pricing.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 30-day free trial for most of our software solutions. Hardware solutions include a 60-day money-back guarantee. No setup fees or long-term commitments required during the trial period.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Absolutely. You can cancel your subscription at any time with 30 days notice. Your data remains accessible during the notice period, and we provide export options to ensure you retain all your historical data.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  const SectionHeader = () => {
    return (
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            label="Frequently Asked Questions"
            icon={<QuestionMark />}
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
            Quick Answers to Common Questions
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: themeColors.textSecondary,
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Find instant answers to help you get the most out of Somaticx solutions
          </Typography>
        </motion.div>
      </Box>
    );
  };

  const CategorySection = ({ category, categoryIndex }) => {
    const IconComponent = categoryIcons[category.category];
    const categoryColor = categoryColors[category.category];

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      >
        <Box sx={{ mb: 6 }}>
          {/* Category Header */}
          <Stack 
            direction="row" 
            spacing={2} 
            alignItems="center" 
            sx={{ mb: 4 }}
          >
            <Avatar
              sx={{
                width: 56,
                height: 56,
                background: `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}40)`,
                border: `2px solid ${categoryColor}30`
              }}
            >
              <IconComponent sx={{ fontSize: '1.5rem', color: categoryColor }} />
            </Avatar>
            
            <Typography
              variant="h4"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.125rem' },
                background: `linear-gradient(135deg, ${themeColors.text}, ${categoryColor})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {category.category}
            </Typography>
          </Stack>

          {/* Questions */}
          <Stack spacing={3}>
            {category.questions.map((item, questionIndex) => {
              const itemId = `${categoryIndex}-${questionIndex}`;
              const isOpen = openItems.has(itemId);
              
              return (
                <motion.div
                  key={questionIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: questionIndex * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Accordion
                    expanded={isOpen}
                    onChange={() => toggleItem(categoryIndex, questionIndex)}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: `1px solid ${categoryColor}40`,
                        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px ${categoryColor}15`
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}80)`
                      },
                      '&.Mui-expanded': {
                        margin: 0,
                        '&::before': {
                          background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor})`
                        }
                      }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExpandMore sx={{ color: categoryColor, fontSize: '1.5rem' }} />
                        </motion.div>
                      }
                      sx={{
                        p: 3,
                        '& .MuiAccordionSummary-content': {
                          margin: 0,
                          pr: 2
                        }
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: themeColors.text,
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.125rem' },
                          lineHeight: 1.4
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    
                    <AccordionDetails sx={{ p: 0 }}>
                      <Box sx={{ px: 3, pb: 3 }}>
                        <Divider sx={{ mb: 3, borderColor: `${categoryColor}20` }} />
                        <Typography
                          variant="body1"
                          sx={{
                            color: themeColors.textSecondary,
                            fontSize: '1rem',
                            lineHeight: 1.7
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              );
            })}
          </Stack>
        </Box>
      </motion.div>
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
        <SectionHeader />

        <Stack spacing={8}>
          {faqCategories.map((category, categoryIndex) => (
            <CategorySection 
              key={categoryIndex}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </Stack>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ mt: 10 }}>
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
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                    border: `3px solid ${themeColors.brand}30`
                  }}
                >
                  <ContactSupport sx={{ fontSize: '2rem', color: themeColors.brand }} />
                </Avatar>

                <Typography
                  variant="h4"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2.125rem' }
                  }}
                >
                  Still Have Questions?
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    maxWidth: 600,
                    mx: 'auto'
                  }}
                >
                  Our expert support team is ready to help you succeed with personalized assistance 
                  and in-depth knowledge of your Somaticx solutions.
                </Typography>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Support />}
                    endIcon={<ChevronRight />}
                    href="#contact-support"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: `0 8px 32px ${themeColors.brand}30`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 48px ${themeColors.brand}40`
                      }
                    }}
                  >
                    Contact Support Team
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<AutoAwesome />}
                    href="/demo"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: `${themeColors.brand}60`,
                      color: themeColors.brand,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: themeColors.brand,
                        background: `${themeColors.brand}10`,
                        borderWidth: 2
                      }
                    }}
                  >
                    Request Demo
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}