'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';

// Dynamic imports for hydration-safe components
const SupportHero = dynamic(() => import('@/components/Support/SupportHero/SupportHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const SupportCategories = dynamic(() => import('@/components/Support/SupportCategories/SupportCategories'), { 
  ssr: false,
  loading: () => <div style={{ height: '50vh', background: 'transparent' }} />
});

const FAQ = dynamic(() => import('@/components/Support/FAQ/FAQ'), { 
  ssr: false,
  loading: () => <div style={{ height: '40vh', background: 'transparent' }} />
});

const ContactSupport = dynamic(() => import('@/components/Support/ContactSupport/ContactSupport'), { 
  ssr: false,
  loading: () => <div style={{ height: '40vh', background: 'transparent' }} />
});

const ResourceLinks = dynamic(() => import('@/components/Support/ResourceLinks/ResourceLinks'), { 
  ssr: false,
  loading: () => <div style={{ height: '30vh', background: 'transparent' }} />
});

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />}>
          <SupportHero />
        </ClientOnly>
        
        <ClientOnly fallback={<div style={{ height: '50vh', background: 'transparent' }} />}>
          <SupportCategories />
        </ClientOnly>

        <ClientOnly fallback={<div style={{ height: '40vh', background: 'transparent' }} />}>
          <FAQ />
        </ClientOnly>

        <ClientOnly fallback={<div style={{ height: '40vh', background: 'transparent' }} />}>
          <ContactSupport />
        </ClientOnly>

        <ClientOnly fallback={<div style={{ height: '30vh', background: 'transparent' }} />}>
          <ResourceLinks />
        </ClientOnly>
      </Layout>
    </main>
  );
}