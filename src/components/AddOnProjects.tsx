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
        title: "DSHDARK",
        description: "A sleek, modern dark theme for desktop and web applications with customizable accent colors and optimized contrast ratios.",
        techStack: ["JavaScript", "CSS", "HTML"],
        link: "",
        source: "https://github.com/AVAHC4/DSHDARK",
    },
    {
        title: "E-Shop",
        description: "A comprehensive e-commerce platform with product catalog, shopping cart, secure checkout, and user account management.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
        link: "",
        source: "https://github.com/AVAHC4/e-shop",
    }
];