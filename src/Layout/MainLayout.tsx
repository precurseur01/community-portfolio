import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  bgClassName?: string; // nouvelle prop optionnelle
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  scrolled,
  bgClassName = 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900'
}) => {
  return (
    <div className={`min-h-screen ${bgClassName} text-white`}>
      <Navigation scrolled={scrolled} />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;