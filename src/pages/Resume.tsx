import React from 'react';

export default function Resume() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <a
        href="/Deepak-Patel-Resume.pdf"
        download
        className="text-blue-500 underline"
      >
        Download Resume
      </a>
    </section>
  );
}
