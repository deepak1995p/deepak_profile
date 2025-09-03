import React from 'react';
import skills from '../data/skills.json';
import type { SkillCategory } from '../data/types';

export default function Skills() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      {skills.map((cat: SkillCategory) => (
        <div key={cat.category} className="mb-6">
          <h3 className="font-semibold mb-2">{cat.category}</h3>
          <ul>
            {cat.skills.map(skill => (
              <li key={skill.name} className="flex items-center mb-1">
                <span className="w-32">{skill.name}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-2 mx-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
