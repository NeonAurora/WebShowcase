'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';

// Dynamic imports for animation-heavy components
const AboutHero = dynamic(() => import('@/components/About/AboutHero/AboutHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const MissionVision = dynamic(() => import('@/components/About/MissionVision/MissionVision'), { ssr: false });
const CoreValues = dynamic(() => import('@/components/About/CoreValues/CoreValues'), { ssr: false });
const Leadership = dynamic(() => import('@/components/About/Leadership/Leadership'), { ssr: false });
const CompanyStory = dynamic(() => import('@/components/About/CompanyStory/CompanyStory'), { ssr: false });

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh' }} />}>
          <AboutHero />
        </ClientOnly>
        
        <ClientOnly>
          <MissionVision />
          <CoreValues />
          <Leadership />
          <CompanyStory />
        </ClientOnly>
      </Layout>
    </main>
  );
}