export const demoCategories = [
  {
    id: 'all',
    name: 'All Tutorials',
    icon: '🎥',
    count: 25,
    color: '#16a34a'
  },
  {
    id: 'livestock',
    name: 'Livestock Management',
    icon: '🐄',
    count: 8,
    color: '#2563eb'
  },
  {
    id: 'agriculture',
    name: 'Agriculture Solutions',
    icon: '🌾',
    count: 7,
    color: '#dc2626'
  },
  {
    id: 'hardware',
    name: 'Hardware Setup',
    icon: '⚙️',
    count: 6,
    color: '#ea580c'
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    icon: '📊',
    count: 4,
    color: '#7c3aed'
  }
];

export const demos = [
  {
    id: 'livestock-setup-guide',
    title: 'Complete Livestock Monitoring Setup Guide',
    description: 'Step-by-step tutorial on setting up your livestock monitoring system from unboxing to first data collection.',
    fullDescription: 'This comprehensive tutorial walks you through the entire process of setting up our livestock monitoring system. From initial hardware installation to configuring your first monitoring dashboard, you\'ll learn everything needed to get started.',
    category: demoCategories[1], // Livestock
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Long',
    estimatedTime: '25 min',
    difficulty: 'Beginner',
    views: '12.5k',
    topics: ['Hardware Installation', 'Software Setup', 'Sensor Calibration', 'Dashboard Configuration', 'First Data Collection'],
    learningObjectives: [
      'Install and configure livestock monitoring hardware',
      'Set up the mobile and web dashboard',
      'Calibrate sensors for accurate readings',
      'Configure alerts and notifications',
      'Understand data interpretation basics'
    ],
    prerequisites: [
      'Basic smartphone or computer skills',
      'Access to farm Wi-Fi network',
      'Livestock monitoring hardware kit'
    ],
    relatedResources: [
      {
        title: 'Hardware Installation Manual',
        description: 'Detailed PDF guide for hardware setup',
        url: '/documentation/hardware-manual'
      },
      {
        title: 'Troubleshooting Guide',
        description: 'Common issues and solutions',
        url: '/documentation/troubleshooting'
      }
    ]
  },
  {
    id: 'health-monitoring-dashboard',
    title: 'Understanding Your Animal Health Dashboard',
    description: 'Learn how to interpret health data, set up alerts, and make informed decisions using our health monitoring dashboard.',
    category: demoCategories[1], // Livestock
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Medium',
    estimatedTime: '15 min',
    difficulty: 'Beginner',
    views: '8.9k',
    topics: ['Dashboard Navigation', 'Health Metrics', 'Alert Configuration', 'Data Interpretation', 'Report Generation'],
    learningObjectives: [
      'Navigate the health monitoring dashboard effectively',
      'Understand key health indicators and metrics',
      'Set up custom alerts for different scenarios',
      'Generate and interpret health reports',
      'Identify early warning signs of health issues'
    ],
    prerequisites: [
      'Completed livestock setup',
      'Basic understanding of animal health'
    ],
    relatedResources: [
      {
        title: 'Health Metrics Reference',
        description: 'Complete guide to understanding health data',
        url: '/documentation/health-metrics'
      }
    ]
  },
  {
    id: 'feeding-automation-setup',
    title: 'Automated Feeding System Configuration',
    description: 'Configure your automated feeding system for optimal nutrition delivery and waste reduction.',
    category: demoCategories[1], // Livestock
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Long',
    estimatedTime: '30 min',
    difficulty: 'Intermediate',
    views: '6.2k',
    topics: ['System Installation', 'Nutrition Programming', 'Schedule Setup', 'Waste Monitoring', 'Maintenance'],
    learningObjectives: [
      'Install and calibrate feeding hardware',
      'Program nutritional requirements by animal group',
      'Set up feeding schedules and portions',
      'Monitor feed consumption and waste',
      'Perform routine maintenance tasks'
    ],
    prerequisites: [
      'Basic electrical knowledge',
      'Understanding of animal nutrition',
      'Feeding system hardware'
    ]
  },
  {
    id: 'crop-monitoring-intro',
    title: 'Introduction to Precision Agriculture Monitoring',
    description: 'Get started with our precision agriculture platform for crop monitoring and field management.',
    category: demoCategories[2], // Agriculture
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Medium',
    estimatedTime: '18 min',
    difficulty: 'Beginner',
    views: '15.3k',
    topics: ['Platform Overview', 'Field Mapping', 'Sensor Deployment', 'Data Collection', 'Basic Analytics'],
    learningObjectives: [
      'Understand the precision agriculture platform',
      'Create and manage field maps',
      'Deploy monitoring sensors effectively',
      'Collect and view basic crop data',
      'Interpret initial analytics results'
    ],
    prerequisites: [
      'Basic farming knowledge',
      'Smartphone or tablet access'
    ]
  },
  {
    id: 'irrigation-optimization',
    title: 'Smart Irrigation System Setup and Optimization',
    description: 'Learn how to set up and optimize your smart irrigation system for water conservation and crop health.',
    category: demoCategories[2], // Agriculture
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Long',
    estimatedTime: '35 min',
    difficulty: 'Intermediate',
    views: '9.1k',
    topics: ['Hardware Installation', 'Soil Sensors', 'Weather Integration', 'Scheduling', 'Water Conservation'],
    learningObjectives: [
      'Install smart irrigation controllers and sensors',
      'Configure soil moisture monitoring',
      'Integrate weather data for optimal scheduling',
      'Set up zone-specific irrigation programs',
      'Monitor water usage and conservation metrics'
    ],
    prerequisites: [
      'Basic irrigation system knowledge',
      'Understanding of soil types',
      'Smart irrigation hardware kit'
    ]
  },
  {
    id: 'disease-detection-mobile',
    title: 'Using Mobile App for Crop Disease Detection',
    description: 'Master our mobile app for instant crop disease identification and treatment recommendations.',
    category: demoCategories[2], // Agriculture
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Short',
    estimatedTime: '12 min',
    difficulty: 'Beginner',
    views: '22.7k',
    topics: ['Mobile App', 'Photo Capture', 'Disease Identification', 'Treatment Plans', 'Historical Tracking'],
    learningObjectives: [
      'Download and set up the mobile app',
      'Capture high-quality plant photos for analysis',
      'Interpret disease identification results',
      'Access treatment recommendations',
      'Track disease history and patterns'
    ],
    prerequisites: [
      'Smartphone with camera',
      'Mobile app installed'
    ]
  },
  {
    id: 'sensor-installation-guide',
    title: 'Environmental Sensor Installation and Maintenance',
    description: 'Complete guide to installing, calibrating, and maintaining environmental monitoring sensors.',
    category: demoCategories[3], // Hardware
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Long',
    estimatedTime: '28 min',
    difficulty: 'Intermediate',
    views: '7.8k',
    topics: ['Sensor Types', 'Installation Process', 'Calibration', 'Wireless Setup', 'Maintenance Schedule'],
    learningObjectives: [
      'Identify appropriate sensor types for different applications',
      'Install sensors in optimal locations',
      'Calibrate sensors for accurate readings',
      'Configure wireless communication',
      'Establish maintenance routines'
    ],
    prerequisites: [
      'Basic technical skills',
      'Understanding of environmental factors',
      'Sensor hardware kit'
    ]
  },
  {
    id: 'power-management-guide',
    title: 'Solar Power and Battery Management for Field Devices',
    description: 'Learn how to set up and manage solar power systems for remote monitoring devices.',
    category: demoCategories[3], // Hardware
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Medium',
    estimatedTime: '20 min',
    difficulty: 'Intermediate',
    views: '5.4k',
    topics: ['Solar Panel Setup', 'Battery Management', 'Power Optimization', 'Weather Considerations', 'Backup Systems'],
    learningObjectives: [
      'Install and position solar panels effectively',
      'Configure battery management systems',
      'Optimize power consumption for longevity',
      'Prepare for adverse weather conditions',
      'Set up backup power solutions'
    ],
    prerequisites: [
      'Basic electrical knowledge',
      'Solar power kit',
      'Safety equipment'
    ]
  },
  {
    id: 'data-analytics-intro',
    title: 'Introduction to Farm Data Analytics',
    description: 'Get started with data analytics to turn your farm data into actionable insights.',
    category: demoCategories[4], // Analytics
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Medium',
    estimatedTime: '22 min',
    difficulty: 'Beginner',
    views: '11.2k',
    topics: ['Data Overview', 'Dashboard Navigation', 'Key Metrics', 'Trend Analysis', 'Report Generation'],
    learningObjectives: [
      'Understand the types of data collected',
      'Navigate analytics dashboards effectively',
      'Identify key performance indicators',
      'Analyze trends and patterns',
      'Generate custom reports'
    ],
    prerequisites: [
      'Data collection system in place',
      'Basic understanding of farming operations'
    ]
  },
  {
    id: 'predictive-analytics-setup',
    title: 'Setting Up Predictive Analytics Models',
    description: 'Configure predictive models for yield forecasting, disease prediction, and optimization recommendations.',
    category: demoCategories[4], // Analytics
    videoUrl: 'https://youtu.be/QtQ67stwYoY?si=9suWKxxqvnKzbs7c',
    duration: 'Long',
    estimatedTime: '40 min',
    difficulty: 'Advanced',
    views: '4.1k',
    topics: ['Model Configuration', 'Historical Data', 'Prediction Accuracy', 'Alert Setup', 'Continuous Learning'],
    learningObjectives: [
      'Configure predictive models for your specific operations',
      'Use historical data to improve accuracy',
      'Set up predictive alerts and notifications',
      'Monitor and improve model performance',
      'Implement continuous learning systems'
    ],
    prerequisites: [
      'Significant historical data',
      'Understanding of predictive analytics',
      'Advanced analytics package'
    ]
  }
];