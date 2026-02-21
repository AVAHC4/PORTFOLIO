import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';


export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
  PostgreSQL: PostgreSQL,
};

export const heroConfig = {

  name: 'Akhil Chava',
  title: 'A Software Engineer.',
  avatar: '/assets/logo.png',


  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
  ],

  description: {
    template:
      'I build full-stack web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Passionate about <b>AI/ML</b>, <b>Cloud Computing</b>, and creating impactful software solutions.',
  },


  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akhil-chava-96b314258/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/AVAHC4',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:akhilchava4@gmail.com',
    icon: <Mail />,
  },
];
