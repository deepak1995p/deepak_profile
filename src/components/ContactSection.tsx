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
    <section id="contact" className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mt-2">
          I'd love to hear from you
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
            required
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 h-32 rounded-lg bg-white text-black border border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg shadow-md font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-colors transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
