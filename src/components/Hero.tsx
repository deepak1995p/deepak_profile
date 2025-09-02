import React from 'react';
import profile from '../data/profile.json';

export default function Hero() {
  return (
    <section id="hero" className="bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-24">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-xl text-gray-300">{profile.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#recent-work"
              className="px-6 py-3 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/Deepak-Patel-Resume.pdf"
              download
              className="px-6 py-3 rounded-md border border-blue-600 text-blue-400 hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://via.placeholder.com/200"
            alt={profile.name}
            className="rounded-full border-4 border-green-500"
          />
        </div>
      </div>
    </section>
  );
}
