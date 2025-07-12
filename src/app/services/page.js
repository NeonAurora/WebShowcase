'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';
import { services } from '@/data/services';

// Dynamic imports for hydration-safe components
const ServicesHero = dynamic(() => import('@/components/Services/ServicesHero/ServicesHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const ServiceCategories = dynamic(() => import('@/components/Services/ServiceCategories/ServiceCategories'), { 
  ssr: false,
  loading: () => <div style={{ height: '50vh', background: 'transparent' }} />
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />}>
          <ServicesHero />
        </ClientOnly>
        
        <ClientOnly fallback={<div style={{ height: '50vh', background: 'transparent' }} />}>
          <ServiceCategories services={services} />
        </ClientOnly>
      </Layout>
    </main>
  );
}