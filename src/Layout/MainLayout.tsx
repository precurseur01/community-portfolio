import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AuthModal from '../components/auth/AuthModal';
import { useAuthModal } from '../context/AuthModalContext';

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
  const { isOpen, initialView, openLogin, openSignup, close } = useAuthModal();

  return (
    <div className={`min-h-screen ${bgClassName} text-white`}>
      <Navigation scrolled={scrolled} onOpenLogin={openLogin} onOpenSignup={openSignup} />

      {children}

      <Footer />

      <AuthModal
        isOpen={isOpen}
        initialView={initialView}
        onClose={close}
      />
    </div>
  );
};

export default MainLayout;