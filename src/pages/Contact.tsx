import React from 'react';
import profile from '../data/profile.json';

export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>
        Email:{' '}
        <a href={`mailto:${profile.email}`} className="text-blue-500 underline">
          {profile.email}
        </a>
      </p>
    </section>
  );
}
