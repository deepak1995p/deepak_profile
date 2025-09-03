import React from 'react';
import profile from '../data/profile.json';

export default function Hero() {
  return (
    <section id="hero" className="bg-white text-black dark:bg-black dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{profile.name}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md md:mx-0 mx-auto">

            {profile.tagline}
          </p>
          <a
            href="#case-studies"
            className="inline-block mt-6 px-6 py-3 rounded-lg font-semibold shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-colors  hover:scale-105"
          >
            Let’s Get Started
          </a>
        </div>
        <div className="flex-1 flex justify-center font-sans">
          <img
            src="/profile.svg"
            alt={profile.name}
            className="w-56 h-56 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="mt-16">
        <p className="text-center text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-6">
          Worked with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 grayscale">
          {['clickup', 'dropbox', 'paychex', 'esestic', 'stripe'].map((logo) => (
            <img
              key={logo}
              src={`/logos/${logo}.svg`}
              alt={logo}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
