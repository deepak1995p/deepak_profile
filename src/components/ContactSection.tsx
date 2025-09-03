import React from 'react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries()));
    form.reset();
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 h-32 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
