import React from 'react';
import profile from '../data/profile.json';

export default function About() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="mb-2">{profile.title}</p>
      <p>{profile.location}</p>
    </section>
  );
}
