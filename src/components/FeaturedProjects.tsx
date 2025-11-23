import React from 'react';
import Image from 'next/image';
import { ScrollFadeIn } from './ui/ScrollFadeIn';

const projectsData = [
  {
    title: "VISPA - An AI-Powered Sign Language Learning Platform",
    summary: "A full-stack web application designed to make learning sign language accessible and engaging. As a UI/UX designer on the team, I designed the application's prototypes in Figma and gained valuable insight into the implementation of a modern Next.js application.",
    techTags: ["Next.js", "Flask", "Supabase", "Figma", "AI/ML"],
    caseStudyUrl: "/projects/vispa",
    imageUrl: "/images/vispa.png",
    status: "Completed",
    githubUrl: "https://github.com/Exilitys/vispa", 
    demoUrl: "https://youtu.be/3TXRCrHGDfI",
  },
  {
    title: "Evaluating Deep vs. Lightweight CNNs for Real-Time Traffic Sign Recognition",
    summary: "A research project that quantitatively compared a deep CNN (ResNet50) and a lightweight CNN (MobileNetV3). The findings revealed a critical trade-off: ResNet50 achieved a higher test accuracy of 94.16%, while MobileNetV3 demonstrated significantly faster GPU inference speed.",
    techTags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    caseStudyUrl: "/projects/cnn-research",
    imageUrl: "/images/cnn.webp",
    status: "Completed",
    paperUrl: "/documents/cnn-research-paper.pdf",
  },
  {
    title: "House Price Prediction for the Jabodetabek Region",
    summary: "An end-to-end machine learning project to predict house prices. I contributed to the crucial data preprocessing stage by cleaning the raw dataset and assisted the team throughout the full project lifecycle.",
    techTags: ["Scikit-Learn", "Pandas", "Flask", "Machine Learning"],
    caseStudyUrl: "/projects/house-price-prediction",
    imageUrl: "/images/house.png", 
    status: "Completed",
    githubUrl: "https://github.com/Exilitys/House-Prediction-Jabodetabek-WebAPP",
    demoUrl: "https://youtu.be/xHIay5RtXT0", 
  },
];

const StatusTag = ({ status }: { status: string }) => {
  const statusStyles: { [key:string]: string } = { Completed: "bg-green-800/50 text-green-300 border-green-700/60", Live: "bg-blue-800/50 text-blue-300 border-blue-700/60" };
  const dotStyles: { [key:string]: string } = { Completed: "bg-green-500", Live: "bg-blue-500" };
  return <div className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-2 ${statusStyles[status] || 'bg-gray-700'}`}><span className={`h-2 w-2 rounded-full ${dotStyles[status] || 'bg-gray-400'}`}></span>{status}</div>;
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="text-white py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <div className="bg-black/[.3] border border-gray-700 rounded-lg overflow-hidden flex flex-col h-full relative">
                <StatusTag status={project.status} />
                <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="object-cover h-48 w-full" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techTags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-800/50 text-xs font-semibold px-2.5 py-1 rounded-full hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-4">
                    <a href={project.caseStudyUrl} className="px-5 py-2.5 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">View Case Study</a>
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-500 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium">View on GitHub</a>}
                    {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-500 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium">Watch Demo</a>}
                    {project.paperUrl && <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-500 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium">View Paper</a>}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;