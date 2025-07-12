export const newsCategories = [
  {
    id: 'all',
    name: 'All News',
    icon: '📰',
    count: 15,
    color: '#16a34a'
  },
  {
    id: 'product-updates',
    name: 'Product Updates',
    icon: '🚀',
    count: 6,
    color: '#2563eb'
  },
  {
    id: 'funding',
    name: 'Funding',
    icon: '💰',
    count: 2,
    color: '#059669'
  },
  {
    id: 'partnerships',
    name: 'Partnerships',
    icon: '🤝',
    count: 3,
    color: '#dc2626'
  },
  {
    id: 'awards',
    name: 'Awards',
    icon: '🏆',
    count: 2,
    color: '#d97706'
  },
  {
    id: 'press-coverage',
    name: 'Press Coverage',
    icon: '📺',
    count: 2,
    color: '#7c3aed'
  }
];

export const newsArticles = [
  {
    id: 'series-a-funding',
    title: 'Somaticx Raises $5M Series A to Accelerate Bio-Industry Innovation',
    excerpt: 'Leading biotech startup secures significant funding to expand R&D capabilities and accelerate product development in agricultural and livestock technology.',
    category: 'Funding',
    categoryId: 'funding',
    categoryIcon: '💰',
    date: '2024-12-15',
    author: 'Press Team',
    readTime: '3 min',
    tags: ['funding', 'series-a', 'growth', 'investors'],
    content: `
      <p>Somaticx, a leading innovator in bio-industry technology solutions, announced today that it has successfully closed a $5 million Series A funding round. The round was led by AgTech Ventures with participation from BioInnovation Capital and several strategic angel investors.</p>
      
      <p>The funding will be used to accelerate product development, expand the engineering team, and enhance our go-to-market capabilities across North America and Europe.</p>
      
      <p>"This investment validates our vision of transforming bio-industries through intelligent technology," said Dr. Sarah Chen, CEO and Co-Founder of Somaticx. "We're excited to use this capital to bring our innovative solutions to more farmers and livestock producers worldwide."</p>
      
      <p>The company plans to use the funds to:</p>
      <ul>
        <li>Expand the product development team by 50%</li>
        <li>Accelerate time-to-market for new features</li>
        <li>Enhance customer support and success programs</li>
        <li>Explore new markets and partnerships</li>
      </ul>
    `,
    relatedLinks: [
      {
        title: 'AgTech Ventures Portfolio',
        description: 'Learn more about our lead investor',
        url: 'https://agtechventures.com'
      }
    ]
  },
  {
    id: 'livestock-monitoring-v2',
    title: 'Smart Livestock Monitoring System 2.0 Now Available',
    excerpt: 'Enhanced AI capabilities, improved sensor accuracy, and new predictive health analytics now available to all customers.',
    category: 'Product Updates',
    categoryId: 'product-updates',
    categoryIcon: '🚀',
    date: '2024-12-01',
    author: 'Product Team',
    readTime: '4 min',
    tags: ['product', 'livestock', 'ai', 'health-monitoring'],
    content: `
      <p>We're excited to announce the launch of Smart Livestock Monitoring System 2.0, featuring significant improvements in AI accuracy, sensor reliability, and user experience.</p>
      
      <p>Key improvements include:</p>
      <ul>
        <li>95% accuracy in health issue detection (up from 87%)</li>
        <li>Extended battery life of up to 18 months</li>
        <li>New predictive analytics for breeding optimization</li>
        <li>Enhanced mobile app with offline capabilities</li>
        <li>Integration with popular farm management software</li>
      </ul>
      
      <p>All existing customers will receive a free upgrade to the new system, with installation support provided by our technical team.</p>
    `
  },
  {
    id: 'agtech-excellence-award',
    title: 'Somaticx Wins AgTech Excellence Award 2024',
    excerpt: 'Recognition for outstanding innovation in agricultural technology and commitment to sustainable farming practices.',
    category: 'Awards',
    categoryId: 'awards',
    categoryIcon: '🏆',
    date: '2024-11-20',
    author: 'Communications Team',
    readTime: '2 min',
    tags: ['awards', 'recognition', 'agtech', 'innovation'],
    content: `
      <p>Somaticx has been honored with the AgTech Excellence Award 2024, recognizing our innovative contributions to agricultural technology and sustainable farming practices.</p>
      
      <p>The award was presented at the International AgTech Conference in Chicago, where our precision agriculture platform was highlighted for its impact on water conservation and yield optimization.</p>
      
      <p>"This recognition belongs to our entire team and the farmers who trust us with their operations," said Dr. Emily Johnson, Head of Research. "It motivates us to continue pushing the boundaries of what's possible in agricultural technology."</p>
    `
  },
  {
    id: 'university-partnership',
    title: 'Strategic Partnership with State Agricultural Universities',
    excerpt: 'Collaboration to advance research in precision agriculture and livestock management technologies.',
    category: 'Partnerships',
    categoryId: 'partnerships',
    categoryIcon: '🤝',
    date: '2024-11-10',
    author: 'Partnership Team',
    readTime: '3 min',
    tags: ['partnerships', 'research', 'universities', 'education'],
    content: `
      <p>Somaticx announces strategic partnerships with leading state agricultural universities to advance research and development in precision agriculture and livestock management technologies.</p>
      
      <p>The partnerships will focus on:</p>
      <ul>
        <li>Joint research projects on sustainable farming practices</li>
        <li>Student internship and co-op programs</li>
        <li>Technology validation in real-world farm environments</li>
        <li>Development of educational curricula for modern farming</li>
      </ul>
      
      <p>These collaborations will help bridge the gap between academic research and practical agricultural applications.</p>
    `
  },
  {
    id: 'tech-news-feature',
    title: 'Featured in TechNews: The Future of Smart Farming',
    excerpt: 'In-depth coverage of how Somaticx is leading the digital transformation of agriculture and livestock industries.',
    category: 'Press Coverage',
    categoryId: 'press-coverage',
    categoryIcon: '📺',
    date: '2024-10-25',
    author: 'External Coverage',
    readTime: '5 min',
    external: true,
    externalUrl: 'https://technews.example.com/somaticx-smart-farming',
    tags: ['press', 'media', 'smart-farming', 'technology'],
    content: `
      <p>TechNews featured Somaticx in their comprehensive report on the future of smart farming, highlighting our innovative approach to bio-industry technology.</p>
      
      <p>The article explores how our solutions are helping farmers increase productivity while reducing environmental impact, featuring case studies from customers across North America.</p>
      
      <p>Click the link to read the full article on TechNews.</p>
    `
  }
];