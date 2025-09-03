import React from 'react';
import projects from '../data/projects.json';

export default function CaseStudies() {
  const studies = projects.slice(0, 3);
  return (
    <section id="case-studies" className="max-w-5xl mx-auto py-12 space-y-8">
      <h2 className="text-3xl font-bold text-center">Case Studies</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {studies.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x250"
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.contributions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
