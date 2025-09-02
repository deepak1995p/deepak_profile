import React from 'react';
import profile from '../data/profile.json';
import { navigate } from '../router';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center space-y-8">
      <div>
        <h1 className="text-5xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          {profile.tagline}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition"
        >
          View Projects
        </button>
        <a
          href="/Deepak-Patel-Resume.pdf"
          download
          className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
