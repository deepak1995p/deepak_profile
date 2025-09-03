import React from 'react';
import projects from '../data/projects.json';
import type { Project } from '../data/types';

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project: Project) => (
          <li
            key={project.title}
            className="border rounded p-4 dark:border-gray-700"
          >
            <h3 className="font-semibold">{project.title}</h3>
            {project.role && (
              <p className="text-sm text-gray-500 mt-1">{project.role}</p>
            )}
            <p className="text-sm mt-2">{project.contributions}</p>
            {project.tech.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
