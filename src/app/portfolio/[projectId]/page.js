import Layout from '@/components/common/Layout/Layout';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id
  }));
}

export default function ProjectDetailPage({ params }) {
  const { projectId } = params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Layout>
        <ProjectDetailClient project={project} />
      </Layout>
    </main>
  );
}
