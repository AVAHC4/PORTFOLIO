import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ASL Recognition',
    description:
      'Real-time bidirectional ASL alphabet recognition using BiLSTM-Attention network with confidence-gated decoding. Published on TechRxiv.',
    image: '/project/asl-recognition.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <TypeScript key="python" /> },
      { name: 'TensorFlow', icon: <ReactIcon key="tensorflow" /> },
      { name: 'MediaPipe', icon: <Motion key="mediapipe" /> },
    ],
    github: 'https://github.com/AVAHC4/asl-recognition',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/asl-recognition',
    isWorking: true,
  },
  {
    title: 'AI Chatbot',
    description:
      'A Next.js + DeepSeek-powered engineering assistant with streaming responses and syntax-highlighted code blocks.',
    image: '/project/ai-chatbot.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="motion" /> },
    ],
    github: 'https://github.com/AVAHC4/ai-chatbot',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/ai-chatbot',
    isWorking: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern SSR portfolio with admin CMS, NextAuth session management, and secure admin APIs. Optimized for performance.',
    image: '/project/portfolio.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/AVAHC4/portfolio',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/portfolio',
    isWorking: true,
  },
  {
    title: 'Drone Detection',
    description:
      'YOLOv8-based drone detection system with mAP@0.5: 0.90, Precision: 0.92, Recall: 0.89. Real-time edge deployment.',
    image: '/project/drone-detection.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <TypeScript key="python" /> },
      { name: 'YOLOv8', icon: <ReactIcon key="yolov8" /> },
      { name: 'OpenCV', icon: <Motion key="opencv" /> },
    ],
    github: 'https://github.com/AVAHC4/drone-detection',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/drone-detection',
    isWorking: true,
  },
];
