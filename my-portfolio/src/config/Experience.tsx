import CLIP from '@/components/technologies/CLIP';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import JavaScript from '@/components/technologies/JavaScript';
import LLMs from '@/components/technologies/LLMs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PaddleOCR from '@/components/technologies/PaddleOCR';
import Postman from '@/components/technologies/Postman';
import Python from '@/components/technologies/Python';
import Qdrant from '@/components/technologies/Qdrant';
import RAG from '@/components/technologies/RAG';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  imageDark?: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Vedha AI',
    position: 'AI Engineering Intern (Generative AI)',
    location: 'Remote',
    image: '/company/vedha.png',
    description: [
      'Built an **Enterprise Multimodal Knowledge Intelligence Platform** to process and understand PDFs, technical documents, engineering drawings, and images using OCR, multimodal embeddings, and LLM-powered reasoning.',
      'Developed a **multimodal Retrieval-Augmented Generation (RAG) pipeline** integrating semantic search, cross-document retrieval, and citation-grounded responses; enabled intelligent enterprise knowledge discovery, contextual question answering, and automated technical report generation.',
    ],
    startDate: 'Feb 2026',
    endDate: 'Jun 2026',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <FastAPI />,
      },
      {
        name: 'LLMs',
        href: 'https://en.wikipedia.org/wiki/Large_language_model',
        icon: <LLMs />,
      },
      {
        name: 'RAG',
        href: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation',
        icon: <RAG />,
      },
      {
        name: 'Qdrant',
        href: 'https://qdrant.tech/',
        icon: <Qdrant />,
      },
      {
        name: 'PaddleOCR',
        href: 'https://github.com/PaddlePaddle/PaddleOCR',
        icon: <PaddleOCR />,
      },
      {
        name: 'CLIP',
        href: 'https://openai.com/research/clip',
        icon: <CLIP />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
    ],
    website: 'https://vedha.ai',
  },
  {
    isCurrent: false,
    company: 'Blackbucks',
    position: 'Software Engineering Intern (Full-Stack)',
    location: 'Remote',
    image: '/company/blackbucks-light.png',
    imageDark: '/company/blackbucks-dark.png',
    description: [
      'Built and deployed a proctored hiring and assessment platform (React, Next.js, Node.js, Express, MongoDB, JWT) used by 100+ active users; automated transaction categorization and reduced manual bookkeeping time by 20%.',
      'Backend performance & scaling (MongoDB indexing, query optimization, API refactor): reduced average fetch latency by 40% (250→150 ms), supported 50k+ records and 200 concurrent requests without timeouts.',
    ],
    startDate: 'Aug 2024',
    endDate: 'Jan 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://blackbucks.me',
  },
];
