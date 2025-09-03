import React from 'react';
import projects from '../data/projects.json';

export default function RecentWork() {
  const work = projects.slice(3, 6);
  return (
    <section id="recent-work" className="max-w-5xl mx-auto py-12 space-y-8">
      <h2 className="text-3xl font-bold text-center">Recent Work</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {work.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.contributions}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{project.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
