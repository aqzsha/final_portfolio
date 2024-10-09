'use client';

export default function ProjectItem({ title, description, tags, link }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
      <a
        href={link}
        target="_blank"
      >
        <h3 className="text-l font-semibold mb-2">
          {title}
          <span className="ml-2 text-green-500">•</span>
        </h3>
      </a>

      <p className="text-gray-700 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
