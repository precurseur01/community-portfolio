/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface AuthModalContextValue {
  isOpen: boolean;
  initialView: 'login' | 'signup';
  openLogin: () => void;
  openSignup: () => void;
  close: () => void;
}

// ─── Context ─────────────────────────────────────────────────────────────────

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'signup'>('login');

  const openLogin = useCallback(() => {
    setInitialView('login');
    setIsOpen(true);
  }, []);

  const openSignup = useCallback(() => {
    setInitialView('signup');
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AuthModalContext.Provider value={{ isOpen, initialView, openLogin, openSignup, close }}>
      {children}
    </AuthModalContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useAuthModal(): AuthModalContextValue {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error('useAuthModal must be used inside <AuthModalProvider>');
  return ctx;
}
