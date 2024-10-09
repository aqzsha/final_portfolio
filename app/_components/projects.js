'use client';

import ProjectItem from './projectItem';

export default function Projects() {
  const projects = [
    {
      title: 'Canva Clone',
      description:
        'The Canva Clone is an online design tool for creating visuals with drag-and-drop simplicity. It features customizable templates, text/image editing, and easy exporting.',
      tags: ['NextJS', 'ReactJS', 'PostgreSQL', 'TailwindCSS', 'NextAuth'],
      link: 'https://yuru-camp-psi.vercel.app/',
    },
    {
      title: 'Yuru Camp App',
      description:
        'Yuru Camp App allows users to easily find and reserve campsites. It offers campsite details, availability, and quick booking options.',
      tags: ['NextJS', 'Supabase', 'TailwindCSS', 'NextAuth', 'React Query'],
      link: 'https://yuru-camp-psi.vercel.app/',
    },
    {
      title: 'Online Cinema App',
      description:
        'The Online Cinema App allows users to watch movies and TV shows on demand. It offers a vast library of content, personalized recommendations, and an easy-to-use interface for seamless streaming.',
      tags: [
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'NestJs',
        'TypeScript',
        'MongoDB',
        'TanStack Query',
        'Redux',
      ],
      link: 'https://yuru-camp-psi.vercel.app/',
    },
    {
      title: '55 HTML+CSS+JS Projects App',
      description: 'Just 55 HTML+CSS+JS projects',
      tags: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      link: 'https://yuru-camp-psi.vercel.app/',
    },
  ];

  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="ml-4">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
