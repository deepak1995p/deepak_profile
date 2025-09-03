import React from 'react';
import projects from '../data/projects.json';
import type { Project } from '../data/types';

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project: Project) => (
          <li key={project.title} className="border rounded p-4 dark:border-gray-700">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm mt-1">{project.contributions}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
