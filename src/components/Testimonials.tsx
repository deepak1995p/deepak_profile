import React from 'react';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
              <p className="italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold">{t.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
