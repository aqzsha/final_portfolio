'use client';

import ProjectItem from './projectItem';

export default function Projects() {
  const projects = [
    {
      title: 'AqzshaStore - ongoing...',
      description:
        'AqzshaStore is an app that offers users a convenient way to browse, purchase, and manage products online. ',
      tags: [
        'NextJS 15',
        'TailwindCSS',
        'PostgreSQL',
        'Shadcn',
        'TypeScript',
        'Prisma',
        'Zod',
        'React Hook Form',
        'Jest',
      ],
      link: 'https://github.com/aqzsha/aqzshaStore',
    },
    {
      title: 'AqzshaCinema - ongoing...',
      description:
        'AqzshaCinema is an app that allows users to explore and discover movies effortlessly.',
      tags: [
        'NestJs',
        'MongoDB',
        'Passport.js',
        'TypeScript',
        'NextJs',
        'TailwindCSS',
        'Redux Toolkit',
        'TanStack Query',
      ],
      link: 'https://github.com/aqzsha/aqzshaCinema',
    },
    {
      title: 'AqzshaShop',
      description:
        'AqzshaShop is an app designed to provide users with a seamless shopping experience.',
      tags: [
        'NextJS',
        'TailwindCSS',
        'Redux Toolkit',
        'NodeJs/ExpressJs',
        'MongoDB',
        'JavaScript',
      ],
      link: 'https://github.com/aqzsha/aqzshaShop',
    },
    {
      title: 'AqzshaEstate',
      description:
        'AqzshaEstate is an app designed to help users easily find, buy, rent, or sell properties.',
      tags: ['NextJS', 'NextAuth', 'MongoDB', 'JavaScript'],
      link: 'https://github.com/aqzsha/aqzshaEstate',
    },
    {
      title: 'React Quiz App',
      description:
        'React Quiz App is a dynamic web application built with React that allows users to take quizzes, displaying questions and multiple-choice answers.',
      tags: ['ReactJS', 'TailwindCSS', 'JavaScript'],
      link: 'https://github.com/aqzsha/react_quiz',
    },

    {
      title: 'Jattigu',
      description: 'Jattigu is a app that contains exercises',
      tags: ['NextJs', 'Redux', 'Tailwind', 'Django', 'DRF', 'SQLite'],
      link: 'https://github.com/aqzsha/Jattigu_jasayiq',
    },

    {
      title: '2FIT',
      description:
        '2FIT is a subscription service for various sports, allowing users to visit different gyms.',
      tags: [
        'Angular',
        'RxJS',
        'Tailwind',
        'Django',
        'DRF',
        'SQLite',
        'TypeScript',
      ],
      link: 'https://github.com/aqzsha/ResilienceRealmWeb',
    },
    {
      title: '55 HTML+CSS+JS Projects App',
      description: 'Just 55 HTML+CSS+JS projects',
      tags: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      link: 'https://github.com/xxkernel/55_html',
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
