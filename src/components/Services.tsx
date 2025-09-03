import React from 'react';

const services = [
  { title: 'Web Development' },
  { title: 'Product Design' },
  { title: 'Consulting' },
  { title: 'Strategy' },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center gap-6 text-center">
        {services.map((service) => (
          <div
            key={service.title}
            className="px-4 py-2 rounded-md bg-white dark:bg-gray-900 shadow"
          >
            {service.title}
          </div>
        ))}
      </div>
    </section>
  );
}
