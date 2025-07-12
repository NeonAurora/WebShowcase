'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';

// Dynamic imports for hydration-safe components
const DemoHero = dynamic(() => import('@/components/Demo/DemoHero/DemoHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const LiveDemoSection = dynamic(() => import('@/components/Demo/LiveDemoSection/LiveDemoSection'), { 
  ssr: false,
  loading: () => <div style={{ height: '60vh', background: 'transparent' }} />
});

const DemoFilter = dynamic(() => import('@/components/Demo/DemoFilter/DemoFilter'), { 
  ssr: false,
  loading: () => <div style={{ height: '20vh', background: 'transparent' }} />
});

const DemoGrid = dynamic(() => import('@/components/Demo/DemoGrid/DemoGrid'), { 
  ssr: false,
  loading: () => <div style={{ height: '80vh', background: 'transparent' }} />
});

export default function DemoPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Import demo data dynamically to prevent hydration issues
  const [demoData, setDemoData] = useState(null);

  // Load demo data on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@/data/demos').then(({ demoCategories, demos }) => {
        setDemoData({ demoCategories, demos });
      });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />}>
          <DemoHero />
        </ClientOnly>
        
        <ClientOnly fallback={<div style={{ height: '60vh', background: 'transparent' }} />}>
          <LiveDemoSection />
        </ClientOnly>

        {demoData && (
          <>
            <ClientOnly fallback={<div style={{ height: '20vh', background: 'transparent' }} />}>
              <DemoFilter 
                categories={demoData.demoCategories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </ClientOnly>

            <ClientOnly fallback={<div style={{ height: '80vh', background: 'transparent' }} />}>
              <DemoGrid 
                demos={demoData.demos}
                activeCategory={activeCategory}
              />
            </ClientOnly>
          </>
        )}
      </Layout>
    </main>
  );
}