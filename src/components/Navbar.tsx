import React from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#recent-work', label: 'Recent Work' },
  { href: '#contact', label: 'Get In Touch' },
];

export default function Navbar() {
  const [hash, setHash] = React.useState(window.location.hash || '#hero');

  React.useEffect(() => {
    const handler = () => setHash(window.location.hash || '#hero');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black dark:bg-black dark:text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${hash === link.href ? 'font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:text-black dark:hover:text-white transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>
        <div className="flex items-center gap-4">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img src="/icons/behance.svg" alt="Behance" className="h-6 w-6" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <img src="/icons/dribbble.svg" alt="Dribbble" className="h-6 w-6" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
