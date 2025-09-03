import React from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#recent-work', label: 'Recent Work' },
  { href: '#contact', label: 'Get in Touch' },
];

export default function Navbar() {
  const [hash, setHash] = React.useState(window.location.hash || '#hero');

  React.useEffect(() => {
    const handler = () => setHash(window.location.hash || '#hero');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between">
      <div className="space-x-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${hash === link.href ? 'font-semibold' : ''} hover:underline`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
