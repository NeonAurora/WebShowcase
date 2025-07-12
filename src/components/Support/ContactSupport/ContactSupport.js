'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
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
  TextField,
  MenuItem,
  Alert,
  Divider,
  Paper
} from '@mui/material';
import { 
  Chat,
  Phone,
  Email,
  VideoCall,
  Send,
  CheckCircle,
  ContactSupport as ContactSupportIcon,
  AccessTime,
  Business,
  Subject,
  Message,
  PriorityHigh,
  Category,
  AutoAwesome
} from '@mui/icons-material';

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    priority: 'medium',
    category: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your support system
    console.log('Support request:', formData);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: Chat,
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: '#10B981' // Success green
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with a technical expert',
      icon: Phone,
      availability: 'Mon-Fri, 6AM-8PM PST',
      action: 'Call Now',
      color: '#3B82F6' // Info blue
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions via email',
      icon: Email,
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: '#F59E0B' // Warning amber
    },
    {
      title: 'Video Call',
      description: 'Screen sharing and guided troubleshooting',
      icon: VideoCall,
      availability: 'By appointment',
      action: 'Schedule Call',
      color: themeColors.brand
    }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low', color: '#6B7280' },
    { value: 'medium', label: 'Medium', color: '#F59E0B' },
    { value: 'high', label: 'High', color: '#EF4444' },
    { value: 'urgent', label: 'Urgent', color: '#DC2626' }
  ];

  const categoryOptions = [
    { value: 'general', label: 'General Question' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing & Account' },
    { value: 'hardware', label: 'Hardware Support' },
    { value: 'integration', label: 'Integration Help' },
    { value: 'feature', label: 'Feature Request' }
  ];

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
            label="Contact Support"
            icon={<ContactSupportIcon />}
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
            Get Expert Support
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
            Choose the best way to connect with our support team
          </Typography>
        </motion.div>
      </Box>
    );
  };

  const ContactMethodCard = ({ method, index }) => {
    const IconComponent = method.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
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
              border: `2px solid ${method.color}40`,
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 32px ${method.color}15`
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${method.color}, ${method.color}80)`
            }
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Stack direction="row" spacing={3}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    background: `linear-gradient(135deg, ${method.color}20, ${method.color}40)`,
                    border: `3px solid ${method.color}30`
                  }}
                >
                  <IconComponent sx={{ fontSize: '1.75rem', color: method.color }} />
                </Avatar>
              </motion.div>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '1.25rem'
                  }}
                >
                  {method.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: themeColors.textSecondary,
                    mb: 2,
                    lineHeight: 1.6
                  }}
                >
                  {method.description}
                </Typography>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Chip
                    icon={<AccessTime sx={{ fontSize: 16 }} />}
                    label={method.availability}
                    size="small"
                    sx={{
                      background: `${method.color}15`,
                      color: method.color,
                      fontWeight: 500,
                      fontSize: '0.75rem'
                    }}
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: `${method.color}60`,
                      color: method.color,
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: method.color,
                        background: `${method.color}10`
                      }
                    }}
                  >
                    {method.action}
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const ContactForm = () => {
    const selectedPriority = priorityOptions.find(p => p.value === formData.priority);

    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Paper
          sx={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 4,
            p: 4,
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
              mb: 4,
              fontSize: { xs: '1.5rem', sm: '1.75rem' }
            }}
          >
            Submit a Support Request
          </Typography>

          {!isSubmitted ? (
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company/Farm Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Business sx={{ color: themeColors.textSecondary, mr: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: <PriorityHigh sx={{ color: selectedPriority?.color || themeColors.textSecondary, mr: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  >
                    {priorityOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: option.color
                            }}
                          />
                          <Typography>{option.label}</Typography>
                        </Stack>
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Category sx={{ color: themeColors.textSecondary, mr: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  >
                    {categoryOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Subject sx={{ color: themeColors.textSecondary, mr: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    placeholder="Please describe your issue or question in detail..."
                    InputProps={{
                      startAdornment: <Message sx={{ color: themeColors.textSecondary, mr: 1, alignSelf: 'flex-start', mt: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: `${themeColors.brand}60`
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: themeColors.textSecondary
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    fullWidth
                    sx={{
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
                    Submit Support Request
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Alert
              severity="success"
              icon={<CheckCircle sx={{ fontSize: '2rem' }} />}
              sx={{
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 4,
                p: 4,
                '& .MuiAlert-icon': {
                  fontSize: '2rem',
                  color: '#10B981'
                },
                '& .MuiAlert-message': {
                  width: '100%'
                }
              }}
            >
              <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem' }
                  }}
                >
                  Request Submitted Successfully!
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: 1.6
                  }}
                >
                  {"Thank you for contacting us. We'll get back to you within 2 hours during business hours."}
                </Typography>

                <Chip
                  label={`Reference ID: #SUP-${Date.now().toString().slice(-6)}`}
                  sx={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    fontWeight: 600,
                    fontSize: '0.875rem'
                  }}
                />
              </Stack>
            </Alert>
          )}
        </Paper>
      </motion.div>
    );
  };

  return (
    <Box
      component="section"
      id="contact-support"
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        <Grid container spacing={6}>
          {/* Contact Methods */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: themeColors.text,
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '1.5rem', sm: '1.75rem' }
                }}
              >
                Get Immediate Help
              </Typography>

              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <ContactMethodCard
                    key={index}
                    method={method}
                    index={index}
                  />
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}