import React, { useState, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AuthModal from '../components/auth/AuthModal';

interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  bgClassName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  scrolled,
  bgClassName = 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900'
}) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authInitialView, setAuthInitialView] = useState<'login' | 'signup'>('login');

  const openLogin = useCallback(() => {
    setAuthInitialView('login');
    setAuthOpen(true);
  }, []);

  const openSignup = useCallback(() => {
    setAuthInitialView('signup');
    setAuthOpen(true);
  }, []);

  return (
    <div className={`min-h-screen ${bgClassName} text-white`}>
      <Navigation scrolled={scrolled} onOpenLogin={openLogin} onOpenSignup={openSignup} />

      {children}

      <Footer />

      <AuthModal
        isOpen={authOpen}
        initialView={authInitialView}
        onClose={() => setAuthOpen(false)}
      />
    </div>
  );
};

export default MainLayout;