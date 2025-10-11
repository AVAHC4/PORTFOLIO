'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Proof of Work' />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    title: "ChatMate",
    description: "A sleek, modern dark theme for desktop and web applications with customizable accent colors and optimized contrast ratios.",
    techStack: ["JavaScript", "CSS", "HTML"],
    link: "",
    source: "https://github.com/AVAHC4/ChatMate",
  },
  {
    title: "Smart Task Planner",
    description: "A comprehensive e-commerce platform with product catalog, shopping cart, secure checkout, and user account management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    link: "https://smart-task-planner-omega.vercel.app",
    source: "https://github.com/AVAHC4/Smart-Task-Planner",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance tracking application with expense categorization, budget planning, and visual reporting of spending patterns.",
    techStack: ["JavaScript", "CSS", "Chart.js", "LocalStorage API"],
    link: "",
    source: "https://github.com/AVAHC4/BUDGET-TRACKER",
  },
  {
    title: "NYTimes Replica",
    description: "A faithful recreation of the New York Times website with a custom feature for changing the location of weather information.",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    link: "",
    source: "https://github.com/AVAHC4/nytimes-replica",
  },
  {
    title: "Drone Detection",
    description: "Intuitive task management application with drag-and-drop organization, priority levels, and deadline notifications.",
    techStack: ["React", "TypeScript", "Redux", "Firebase"],
    link: "",
    source: "https://github.com/AVAHC4/DRONE-DETECTION",
  },
  {
    title: "FREEWRITE",
    description: "Distraction-free writing environment with auto-save, markdown support, and export options for various document formats.",
    techStack: ["TypeScript", "React", "Electron", "Marked.js"],
    link: "",
    source: "https://github.com/AVAHC4/FREEWRITE",
  },
];
