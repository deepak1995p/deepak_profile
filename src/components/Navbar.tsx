import React from 'react';
import { navigate } from '../router';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

export default function Navbar() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between">
      <div className="space-x-4">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => {
              e.preventDefault();
              navigate(link.href);
            }}
            className={`${path === link.href ? 'font-semibold' : ''} hover:underline`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
