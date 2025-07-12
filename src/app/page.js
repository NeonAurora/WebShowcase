// src/app/page.js
'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';

// Dynamic imports for animation-heavy components
const HeroSection = dynamic(() => import('@/components/Home/HeroSection/HeroSection'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const WhyUs = dynamic(() => import('@/components/Home/WhyUs/WhyUs'), { ssr: false });
const StatsBar = dynamic(() => import('@/components/Home/StatsBar/StatsBar'), { ssr: false });
const ProductDemoCarousel = dynamic(() => import('@/components/Home/ProductDemoCarousel/ProductDemoCarousel'), { ssr: false });
const NewsroomTicker = dynamic(() => import('@/components/Home/NewsroomTicker/NewsroomTicker'), { ssr: false });
const SupportOverview = dynamic(() => import('@/components/Home/SupportOverview/SupportOverview'), { ssr: false });
const SocialRow = dynamic(() => import('@/components/Home/SocialRow/SocialRow'), { ssr: false });

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh' }} />}>
          <HeroSection />
        </ClientOnly>
        
        <ClientOnly>
          <WhyUs />
          <StatsBar />
          <ProductDemoCarousel />
          <NewsroomTicker />
          <SupportOverview />
          <SocialRow />
        </ClientOnly>
      </Layout>
    </main>
  );
}