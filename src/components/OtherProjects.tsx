import React from 'react';
import { ScrollFadeIn } from './ui/ScrollFadeIn';
const otherProjectsData = [
  {
    title: "Company Website Modernization",
    description: "Redeveloped and modernized a company's outdated Blogspot website into a professional, custom-coded site using foundational web technologies to improve its brand presence and maintainability.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://sanminglobe.netlify.app/",
    status: "Live",
  },
  {
    title: "ABC Lima Dasar Game",
    description: "An online multiplayer word game based on the popular Indonesian game 'ABC Lima Dasar'.",
    tags: ["React", "Socket.IO", "Node.js"], 
    link: "#",
  status: "In Progress",
  },
  // add piano memory game here in the future
];

const StatusTag = ({ status }: { status: string }) => {
  const statusStyles: { [key: string]: string } = {
    Completed: "bg-green-800/50 text-green-300 border-green-700/60",
    Live: "bg-blue-800/50 text-blue-300 border-blue-700/60",
    "In Progress": "bg-yellow-800/50 text-yellow-300 border-yellow-700/60",
  };
  const dotStyles: { [key: string]: string } = {
    Completed: "bg-green-500",
    Live: "bg-blue-500",
    "In Progress": "bg-yellow-500",
  }
  return (
    <div className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-2 ${statusStyles[status] || 'bg-gray-700'}`}>
      <span className={`h-2 w-2 rounded-full ${dotStyles[status] || 'bg-gray-400'}`}></span>
      {status}
    </div>
  );
};

const OtherProjects = () => {
  return (
    <section id="other-projects" className="py-20 px-4 md:px-8 relative z-10">
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Other Projects</h2>
          <div className="space-y-6">
            {otherProjectsData.map((project, index) => (
              <div key={index} className="bg-black/[.3] border border-gray-700 rounded-lg p-6 text-left relative">
                <StatusTag status={project.status} />
                <h3 className="text-xl font-bold mb-2 mt-8 md:mt-0">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-800/50 text-xs font-semibold px-2.5 py-1 rounded-full hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-500 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};


export default OtherProjects;