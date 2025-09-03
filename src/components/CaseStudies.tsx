import React from 'react';
import studies from '../data/case-studies.json';
import { CaseStudy } from '../data/types';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Case Studies</h2>
        <p className="text-lg text-gray-500 text-center mt-2">
          A selection of projects
        </p>
        <div className="mt-10 space-y-12">
          {(studies as CaseStudy[]).map((c, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <span className={`px-3 py-1 text-sm text-white rounded-md ${c.tagColor}`}>
                  {c.label}
                </span>
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="text-gray-500">{c.description}</p>
                <a
                  href="#"
                  className={`inline-block px-4 py-2 rounded-md text-white font-medium ${c.buttonColor} transition`}
                >
                  View case study
                </a>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full md:w-[500px] rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
