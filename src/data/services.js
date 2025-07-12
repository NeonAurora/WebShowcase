export const services = [
  {
    id: 'livestock-solutions',
    title: 'Livestock IT Solutions',
    icon: '🐄',
    color: '#2563eb',
    description: 'Comprehensive technology solutions for livestock management, health monitoring, and productivity optimization.',
    detailedDescription: 'Our livestock IT solutions combine IoT sensors, AI analytics, and mobile applications to revolutionize how farmers monitor, manage, and optimize their livestock operations. From health tracking to feed optimization, we provide end-to-end digital transformation.',
    features: [
      'Real-time health monitoring with IoT sensors',
      'Behavioral analysis and anomaly detection',
      'Automated feeding and nutrition optimization',
      'Breeding management and genetic tracking',
      'Mobile dashboard for remote monitoring',
      'Predictive analytics for disease prevention'
    ],
    technologies: ['IoT Sensors', 'Machine Learning', 'Mobile Apps', 'Cloud Computing', 'Data Analytics'],
    pricing: 'Custom',
    pricingNote: 'Based on herd size and features',
    subservices: [
      {
        name: 'Health Monitoring System',
        description: 'Continuous monitoring of vital signs, activity levels, and health indicators.',
        features: ['Wearable sensors', 'Health alerts', 'Veterinary integration']
      },
      {
        name: 'Feed Management Platform',
        description: 'Automated feeding systems with nutritional optimization.',
        features: ['Smart dispensers', 'Nutrition tracking', 'Cost optimization']
      },
      {
        name: 'Breeding Analytics',
        description: 'Advanced breeding management with genetic tracking.',
        features: ['Breeding schedules', 'Genetic analysis', 'Performance tracking']
      },
      {
        name: 'Farm Dashboard',
        description: 'Centralized control panel for all livestock operations.',
        features: ['Real-time data', 'Mobile access', 'Custom reports']
      }
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Farm evaluation and needs analysis'
      },
      {
        title: 'Design',
        description: 'Custom solution architecture'
      },
      {
        title: 'Installation',
        description: 'Hardware setup and integration'
      },
      {
        title: 'Training',
        description: 'Staff training and support'
      }
    ],
    caseStudies: [
      {
        title: 'Dairy Farm Optimization',
        description: 'Improved milk production and reduced veterinary costs for a 500-cow dairy operation.',
        results: {
          milkIncrease: '+23%',
          costReduction: '35%',
          healthImprovement: '89%'
        }
      },
      {
        title: 'Cattle Ranch Management',
        description: 'Enhanced breeding efficiency and pasture management for 2,000+ head cattle ranch.',
        results: {
          breedingEfficiency: '+45%',
          pastureUtilization: '92%',
          timeSaved: '40hrs/week'
        }
      }
    ]
  },
  {
    id: 'plant-technology',
    title: 'Plant Technology Solutions',
    icon: '🌾',
    color: '#dc2626',
    description: 'Advanced agricultural technology for crop monitoring, precision farming, and yield optimization.',
    detailedDescription: 'Transform your agricultural operations with cutting-edge plant technology solutions. Our integrated platform combines satellite imagery, soil sensors, weather data, and AI to provide precise insights for optimal crop management and maximum yield.',
    features: [
      'Satellite imagery and drone surveillance',
      'Soil moisture and nutrient monitoring',
      'Weather station integration',
      'Crop disease detection and prediction',
      'Irrigation automation and optimization',
      'Yield prediction and harvest planning'
    ],
    technologies: ['Satellite Imagery', 'Drone Technology', 'Soil Sensors', 'AI/ML', 'GIS', 'Weather APIs'],
    pricing: '$2,500/month',
    pricingNote: 'Per 1,000 acres, scalable pricing',
    subservices: [
      {
        name: 'Precision Agriculture Platform',
        description: 'Complete farm management with satellite imagery and sensor integration.',
        features: ['Field mapping', 'Variable rate application', 'Yield optimization']
      },
      {
        name: 'Crop Health Monitoring',
        description: 'Early detection of diseases, pests, and nutrient deficiencies.',
        features: ['Disease detection', 'Pest monitoring', 'Nutrient analysis']
      },
      {
        name: 'Smart Irrigation Systems',
        description: 'Automated irrigation with water optimization and scheduling.',
        features: ['Soil moisture sensors', 'Weather integration', 'Water conservation']
      },
      {
        name: 'Harvest Analytics',
        description: 'Predictive analytics for optimal harvest timing and planning.',
        features: ['Yield prediction', 'Quality assessment', 'Market timing']
      }
    ],
    process: [
      {
        title: 'Field Analysis',
        description: 'Comprehensive field assessment and mapping'
      },
      {
        title: 'Sensor Deployment',
        description: 'Installation of monitoring equipment'
      },
      {
        title: 'System Integration',
        description: 'Platform setup and data integration'
      },
      {
        title: 'Optimization',
        description: 'Continuous monitoring and adjustment'
      }
    ],
    caseStudies: [
      {
        title: 'Corn Farm Optimization',
        description: 'Increased yield and reduced water usage for a 5,000-acre corn operation.',
        results: {
          yieldIncrease: '+32%',
          waterSaving: '28%',
          costReduction: '22%'
        }
      },
      {
        title: 'Organic Vegetable Farm',
        description: 'Improved crop quality and reduced disease impact for organic vegetable production.',
        results: {
          qualityImprovement: '+41%',
          diseaseReduction: '67%',
          profitIncrease: '+38%'
        }
      }
    ]
  },
  {
    id: 'hardware-solutions',
    title: 'Custom Hardware Solutions',
    icon: '⚙️',
    color: '#ea580c',
    description: 'Specialized hardware development for bio-industry applications including sensors, automation, and monitoring devices.',
    detailedDescription: 'We design and manufacture custom hardware solutions specifically for bio-industry applications. From environmental sensors to automated feeding systems, our hardware integrates seamlessly with our software platforms to deliver complete solutions.',
    features: [
      'Custom sensor development and manufacturing',
      'Automated feeding and watering systems',
      'Environmental monitoring equipment',
      'Wireless communication modules',
      'Solar-powered field devices',
      'Rugged, weather-resistant designs'
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'LoRaWAN', 'Solar Power', '3D Printing', 'PCB Design'],
    pricing: '$5,000+',
    pricingNote: 'Custom development and manufacturing',
    subservices: [
      {
        name: 'Environmental Sensors',
        description: 'Custom sensors for temperature, humidity, soil conditions, and air quality.',
        features: ['Multi-parameter monitoring', 'Wireless connectivity', 'Long battery life']
      },
      {
        name: 'Automation Systems',
        description: 'Automated feeding, watering, and climate control systems.',
        features: ['Precision control', 'Remote operation', 'Energy efficient']
      },
      {
        name: 'Monitoring Devices',
        description: 'Specialized monitoring equipment for livestock and crop applications.',
        features: ['Real-time data', 'Cloud connectivity', 'Mobile alerts']
      },
      {
        name: 'Communication Hubs',
        description: 'Central communication devices for farm-wide data collection.',
        features: ['Multi-protocol support', 'Edge computing', 'Data aggregation']
      }
    ],
    process: [
      {
        title: 'Requirements',
        description: 'Define specifications and constraints'
      },
      {
        title: 'Prototyping',
        description: 'Design and build initial prototypes'
      },
      {
        title: 'Testing',
        description: 'Field testing and validation'
      },
      {
        title: 'Production',
        description: 'Manufacturing and deployment'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Greenhouse System',
        description: 'Custom automation system for 50,000 sq ft greenhouse operation.',
        results: {
          energySaving: '35%',
          yieldIncrease: '+28%',
          laborReduction: '45%'
        }
      },
      {
        title: 'Livestock Monitoring Network',
        description: 'Wireless sensor network for 1,000+ head cattle monitoring.',
        results: {
          healthDetection: '94%',
          responseTime: '15min',
          costSaving: '42%'
        }
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Consulting',
    icon: '📈',
    color: '#7c3aed',
    description: 'Advanced data analytics, business intelligence, and strategic consulting for bio-industry optimization.',
    detailedDescription: 'Unlock the power of your agricultural and livestock data with our advanced analytics platform. We provide comprehensive data analysis, predictive modeling, and strategic consulting to help you make data-driven decisions and optimize operations.',
    features: [
      'Advanced data analytics and visualization',
      'Predictive modeling and forecasting',
      'Business intelligence dashboards',
      'Strategic consulting and optimization',
      'Regulatory compliance reporting',
      'Market analysis and trend forecasting'
    ],
    technologies: ['Python', 'R', 'Power BI', 'Tableau', 'Machine Learning', 'Big Data'],
    pricing: '$1,500/month',
    pricingNote: 'Base package, additional services available',
    subservices: [
      {
        name: 'Data Analytics Platform',
        description: 'Comprehensive analytics platform with custom dashboards and reports.',
        features: ['Interactive dashboards', 'Custom reports', 'Trend analysis']
      },
      {
        name: 'Predictive Modeling',
        description: 'Machine learning models for forecasting and optimization.',
        features: ['Yield prediction', 'Market forecasting', 'Risk analysis']
      },
      {
        name: 'Business Intelligence',
        description: 'Strategic insights and performance optimization recommendations.',
        features: ['KPI tracking', 'Benchmarking', 'Strategic planning']
      },
      {
        name: 'Consulting Services',
        description: 'Expert consulting for operational improvement and technology adoption.',
        features: ['Process optimization', 'Technology roadmap', 'Training programs']
      }
    ],
    process: [
      {
        title: 'Data Audit',
        description: 'Assess current data infrastructure'
      },
      {
        title: 'Platform Setup',
        description: 'Deploy analytics infrastructure'
      },
      {
        title: 'Model Development',
        description: 'Build custom analytical models'
      },
      {
        title: 'Optimization',
        description: 'Continuous improvement and support'
      }
    ],
    caseStudies: [
      {
        title: 'Multi-Farm Analytics',
        description: 'Centralized analytics platform for agricultural cooperative with 50+ farms.',
        results: {
          efficiency: '+31%',
          costReduction: '24%',
          decisionSpeed: '3x faster'
        }
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Optimized supply chain and logistics for large agricultural distributor.',
        results: {
          supplyEfficiency: '+48%',
          wasteReduction: '33%',
          profitIncrease: '+27%'
        }
      }
    ]
  }
];