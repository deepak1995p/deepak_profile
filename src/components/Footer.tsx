import React from 'react';
// <<<<<<< codex/review-code-repository-jmyytw

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white text-center py-4">
//       Made with ❤️
// =======
import profile from '../data/profile.json';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <div className="space-x-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
<!-- >>>>>>> main -->
    </footer>
  );
}
