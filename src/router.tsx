import React from 'react';
import NotFound from './pages/NotFound';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Resume = React.lazy(() => import('./pages/Resume'));

const routes: Record<string, React.ReactNode> = {
  '/': <Home />,
  '/about': <About />,
  '/skills': <Skills />,
  '/projects': <Projects />,
  '/contact': <Contact />,
  '/resume': <Resume />,
};

export const navigate = (to: string) => {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function Router() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const element = routes[path] ?? <NotFound />;

  return (
    <React.Suspense fallback={<div className="p-4">Loading...</div>}>
      {element}
    </React.Suspense>
  );
}
