import React from 'react';
import testimonials from '../data/testimonials.json';
import { Testimonial } from '../data/types';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Testimonials</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {(testimonials as Testimonial[]).map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 shadow flex flex-col h-full">
              <svg
                className="h-8 w-8 text-gray-400 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17v7.66A1.17 1.17 0 003.17 20h7.66A1.17 1.17 0 0012 18.83v-7.66A5.17 5.17 0 006.83 6H7.17zm10 0A5.17 5.17 0 0012 11.17v7.66A1.17 1.17 0 0013.17 20h7.66A1.17 1.17 0 0022 18.83v-7.66A5.17 5.17 0 0016.83 6h.34z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 flex-1">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
