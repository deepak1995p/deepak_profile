import React from 'react';
import profile from '../data/profile.json';

export default function Home() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-lg">{profile.tagline}</p>
    </section>
  );
}
