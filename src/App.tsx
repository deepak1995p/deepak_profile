import React from 'react';
import Navbar from './components/Navbar';
import { Router } from './router';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
