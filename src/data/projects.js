export const projectCategories = [
  {
    id: 'all',
    name: 'All Projects',
    icon: '📊',
    count: 12,
    color: '#16a34a'
  },
  {
    id: 'animal-health',
    name: 'Animal Health',
    icon: '🐄',
    count: 4,
    color: '#2563eb'
  },
  {
    id: 'plant-tech',
    name: 'Plant Technology',
    icon: '🌾',
    count: 3,
    color: '#dc2626'
  },
  {
    id: 'hardware',
    name: 'Hardware Solutions',
    icon: '⚙️',
    count: 3,
    color: '#ea580c'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: '📈',
    count: 2,
    color: '#7c3aed'
  }
];

export const projects = [
  {
    id: 'smart-livestock-monitor',
    title: 'Smart Livestock Monitoring System',
    description: 'Real-time health tracking and behavioral analysis for optimal livestock management using IoT sensors and machine learning.',
    fullDescription: 'A comprehensive livestock monitoring solution that combines IoT sensors, computer vision, and machine learning to provide real-time insights into animal health, behavior, and productivity. The system helps farmers detect early signs of illness, optimize feeding schedules, and improve overall animal welfare.',
    category: projectCategories[1], // Animal Health
    status: 'Completed',
    technologies: ['IoT Sensors', 'Machine Learning', 'Computer Vision', 'React Native', 'Node.js', 'MongoDB'],
    image: '🐄',
    impact: {
      healthDetection: '95%',
      costReduction: '30%',
      animalWelfare: '+40%',
      earlyDetection: '72hrs'
    },
    details: {
      problem: 'Traditional livestock monitoring methods are time-consuming and often miss early signs of health issues, leading to higher veterinary costs and reduced animal welfare.',
      solution: 'Deployed IoT sensors and computer vision systems to continuously monitor vital signs, movement patterns, and feeding behavior, with ML algorithms for predictive health analytics.',
      outcome: 'Achieved 95% accuracy in health issue detection, reduced veterinary costs by 30%, and improved animal welfare scores by 40% across pilot farms.'
    },
    awards: ['Best Innovation Award 2024', 'AgTech Excellence Recognition']
  },
  {
    id: 'precision-agriculture',
    title: 'Precision Agriculture Platform',
    description: 'Data-driven crop optimization using IoT sensors, satellite imagery, and machine learning algorithms for maximum yield.',
    fullDescription: 'An integrated platform that combines satellite imagery, soil sensors, weather data, and machine learning to provide farmers with precise recommendations for irrigation, fertilization, and pest management.',
    category: projectCategories[2], // Plant Tech
    status: 'In Progress',
    technologies: ['Satellite Imagery', 'Soil Sensors', 'Machine Learning', 'GIS', 'Python', 'React'],
    image: '🌾',
    impact: {
      yieldIncrease: '35%',
      waterSaving: '25%',
      fertilizerReduction: '20%',
      coverage: '5000 acres'
    },
    details: {
      problem: 'Farmers struggle with inefficient resource usage and suboptimal crop yields due to lack of precise, data-driven insights.',
      solution: 'Integrated satellite imagery analysis with ground-based sensors to create detailed field maps and provide AI-powered recommendations for optimal resource allocation.',
      outcome: 'Currently showing 35% yield improvements and 25% water savings in beta testing across 5,000 acres of farmland.'
    }
  },
  {
    id: 'automated-feeding-system',
    title: 'Automated Feeding System',
    description: 'Intelligent feeding automation for livestock with nutritional optimization and waste reduction capabilities.',
    fullDescription: 'A smart feeding system that automatically adjusts feed quantities and nutritional composition based on individual animal needs, growth stages, and health status.',
    category: projectCategories[3], // Hardware
    status: 'Completed',
    technologies: ['Arduino', 'Raspberry Pi', 'Load Sensors', 'Mobile App', 'Cloud Computing', 'Nutritional AI'],
    image: '🥗',
    impact: {
      feedEfficiency: '+45%',
      wasteReduction: '60%',
      timesSaved: '8hrs/day',
      animals: '500+'
    },
    details: {
      problem: 'Manual feeding processes are labor-intensive, imprecise, and often result in overfeeding or underfeeding, affecting animal health and farm profitability.',
      solution: 'Developed an automated system with precision dispensers, load sensors, and AI algorithms to deliver optimal nutrition based on individual animal profiles.',
      outcome: 'Improved feed efficiency by 45%, reduced waste by 60%, and saved farmers 8 hours per day while supporting 500+ animals across multiple installations.'
    },
    awards: ['AgTech Innovation Award 2024']
  },
  {
    id: 'crop-disease-detection',
    title: 'AI Crop Disease Detection',
    description: 'Computer vision system for early detection and identification of plant diseases using mobile devices.',
    fullDescription: 'A mobile application that uses advanced computer vision and deep learning to identify plant diseases from smartphone photos, providing instant diagnosis and treatment recommendations.',
    category: projectCategories[2], // Plant Tech
    status: 'Completed',
    technologies: ['TensorFlow', 'Computer Vision', 'Mobile Development', 'Deep Learning', 'Flutter', 'Firebase'],
    image: '🔬',
    impact: {
      accuracy: '92%',
      diseases: '50+',
      response: '<30sec',
      farmers: '1000+'
    },
    details: {
      problem: 'Farmers often struggle to identify plant diseases early, leading to crop losses and unnecessary pesticide usage.',
      solution: 'Created a mobile app with AI-powered image recognition trained on thousands of plant disease images to provide instant, accurate diagnosis.',
      outcome: 'Achieved 92% accuracy in disease identification across 50+ disease types, with response times under 30 seconds, now used by over 1,000 farmers.'
    }
  },
  {
    id: 'environmental-monitoring',
    title: 'Environmental Monitoring Hub',
    description: 'Comprehensive environmental monitoring system for greenhouse and field conditions with predictive analytics.',
    fullDescription: 'A complete environmental monitoring solution that tracks temperature, humidity, soil moisture, light levels, and air quality to optimize growing conditions.',
    category: projectCategories[3], // Hardware
    status: 'In Progress',
    technologies: ['IoT Sensors', 'LoRaWAN', 'Data Analytics', 'Predictive Modeling', 'Vue.js', 'PostgreSQL'],
    image: '🌡️',
    impact: {
      energySaving: '30%',
      yieldImprovement: '25%',
      parameters: '15+',
      facilities: '50+'
    },
    details: {
      problem: 'Maintaining optimal growing conditions requires constant monitoring and adjustment, which is resource-intensive and prone to human error.',
      solution: 'Deployed a network of environmental sensors with automated control systems and predictive analytics to maintain ideal growing conditions.',
      outcome: 'Currently achieving 30% energy savings and 25% yield improvements across 50+ facilities through automated environmental optimization.'
    }
  },
  {
    id: 'farm-management-software',
    title: 'Integrated Farm Management Platform',
    description: 'Comprehensive software solution for farm operations, inventory, financial tracking, and compliance management.',
    fullDescription: 'An all-in-one farm management platform that integrates operational data, financial tracking, inventory management, and regulatory compliance into a single, user-friendly interface.',
    category: projectCategories[4], // Data Analytics
    status: 'Completed',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Business Intelligence', 'Mobile App'],
    image: '💼',
    impact: {
      efficiency: '+50%',
      paperwork: '-80%',
      compliance: '100%',
      users: '200+'
    },
    details: {
      problem: 'Farm operations involve complex data management across multiple systems, leading to inefficiencies and compliance challenges.',
      solution: 'Built an integrated platform that centralizes all farm data with automated reporting, financial tracking, and compliance monitoring.',
      outcome: 'Increased operational efficiency by 50%, reduced paperwork by 80%, achieved 100% compliance rates, now serving 200+ farms.'
    },
    awards: ['Best Farm Tech Solution 2024']
  }
];