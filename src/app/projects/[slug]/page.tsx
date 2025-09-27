// src/app/projects/[slug]/page.tsx

import { projectsData } from '../projectsData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn'; 
import { AnimatedTag } from '@/components/AnimatedTag';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to all projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    // Removed the solid background from this div
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <ScrollFadeIn>
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to All Projects
          </Link>
        </ScrollFadeIn>
        
        <div className="space-y-12">
          {/* Header Section with animation */}
          <ScrollFadeIn delay={0.1}>
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">{project.summary}</p>
              {/* Animated Tags would go here if we were using them */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <AnimatedTag key={tech}>
                    {tech}
                  </AnimatedTag>
                ))}
              </div>
            </header>
          </ScrollFadeIn>
          
          <hr className="border-gray-700" />

          {/* Main Content Sections with staggered animations */}
          <div className="space-y-10">
            <ScrollFadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">{project.contributions.title}</h2>
                <ul className="list-disc list-outside space-y-3 pl-5 text-gray-300 leading-relaxed">
                  {project.contributions.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={0.4}>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">The Outcome</h2>
                <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}