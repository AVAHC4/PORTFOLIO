import { Project } from '@/types/project';
import Title from '@/components/ui/Title';
import ProjectCard from '@/app/projects/components/ProjectCard';


const AddOnProjects = () => {
    return (
        <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 pb-8'>
            <Title title='Featured Projects' />

            <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
                {data.map((project: Project, idx: number) => (
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
        </div>
    )
}
export default AddOnProjects;

const data: Project[] = [
    {
        title: "ChatMate",
        description: "AI chat interface built with Next.js, featuring a clean UI and optional speech recognition integration.",
        techStack: ["JavaScript", "CSS", "HTML"],
        link: "",
        source: "https://github.com/AVAHC4/ChatMate",
    },
    {
        title: "Smart Task Planner",
        description: "AI-powered planner that turns goals into a structured plan, schedules tasks with dependencies, and visualizes a timeline.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
        link: "https://smart-task-planner-omega.vercel.app",
        source: "https://github.com/AVAHC4/Smart-Task-Planner",
    }
];