import FeaturedProjects from '@/components/FeaturedProjects';
import AboutMe from '@/components/AboutMe';
import OtherProjects from '@/components/OtherProjects';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full flex flex-col items-center justify-center text-center p-4 relative">

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <ScrollFadeIn>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
              Clariant Benedictus Tan | AI & Software Developer
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-gray-300">
              A Computer Science student specializing in Intelligent Systems, passionate about building and deploying real-world AI applications.
            </p>
            <div className="flex gap-4 mt-8 justify-center">
              <a href="/documents/clariant-resume.pdf" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                View Resume
              </a>
              <a href="https://github.com/clariantb" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/clariant-tan-125603298/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      <FeaturedProjects />
      <AboutMe />
      <OtherProjects />
      <Contact />
    </main>
  );
}