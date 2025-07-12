'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';
import { projectCategories, projects } from '@/data/projects';

// Dynamic imports for animation-heavy components
const PortfolioHero = dynamic(() => import('@/components/Portfolio/PortfolioHero/PortfolioHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const ProjectFilter = dynamic(() => import('@/components/Portfolio/ProjectFilter/ProjectFilter'), { ssr: false });
const ProjectGrid = dynamic(() => import('@/components/Portfolio/ProjectGrid/ProjectGrid'), { ssr: false });

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh' }} />}>
          <PortfolioHero />
        </ClientOnly>
        
        <ClientOnly>
          <ProjectFilter 
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ProjectGrid 
            projects={projects}
            activeCategory={activeCategory}
          />
        </ClientOnly>
      </Layout>
    </main>
  );
}