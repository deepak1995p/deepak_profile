import React from 'react';
import work from '../data/recent-work.json';
import { Work } from '../data/types';

export default function RecentWork() {
  return (
    <section id="recent-work" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Recent Work</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {(work as Work[]).map((w, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-4">
              <img
                src={w.image}
                alt={w.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
              <p className="text-gray-500 mt-2">{w.description}</p>
              <a
                href={w.link}
                className="inline-block mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
