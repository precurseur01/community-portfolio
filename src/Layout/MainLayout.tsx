import React from 'react';
import Navigation from '../components/Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, scrolled }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Navigation scrolled={scrolled} />

      {children}

      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 – Free Digital Solutions | Powered by Passion & Precision
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
