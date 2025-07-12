'use client';

import dynamic from 'next/dynamic';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';

// Dynamic imports for animation-heavy components
const ProjectDetailHero = dynamic(
  () => import('@/components/Portfolio/ProjectDetailHero/ProjectDetailHero'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
        }}
      />
    ),
  }
);

const ProjectDetailContent = dynamic(
  () => import('@/components/Portfolio/ProjectDetailContent/ProjectDetailContent'),
  { ssr: false }
);

export default function ProjectDetailClient({ project }) {
  return (
    <>
      <ClientOnly fallback={<div style={{ height: '100vh' }} />}>
        <ProjectDetailHero project={project} />
      </ClientOnly>
      <ClientOnly>
        <ProjectDetailContent project={project} />
      </ClientOnly>
    </>
  );
}
