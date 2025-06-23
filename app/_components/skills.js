'use client';

export default function Skills() {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">Technical Skills</h1>

      <div className="text-l font-bold ml-4">
        Languages:
        <span className="text-sm font-medium">
          {' '}
          C++, Python, Java, JavaScript, TypeScript
        </span>
      </div>

      <div className="text-l font-bold ml-4">
        Frontend:
        <span className="text-sm font-medium">
          {' '}
          HTML, CSS, SASS/SCSS, React, NextJs, TailwindCSS, Shadcn, Angular
        </span>
      </div>

      <div className="text-l font-bold ml-4">
        Backend:
        <span className="text-sm font-medium">
          {' '}
          NodeJs, ExpressJs, NestJs, Django, Firebase, Supabase, MongoDB,
          PostgreSQL, Spring, PhP, Laravel, Golang
        </span>
      </div>

      <div className="text-l font-bold ml-4">
        Tools:
        <span className="text-sm font-medium">
          {' '}
          Git, Gulp, Webpack, Postman, Docker, Kubernetes
        </span>
      </div>
    </div>
  );
}
