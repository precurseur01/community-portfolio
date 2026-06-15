import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthModal } from '../../context/AuthModalContext';

/**
 * Route guard : redirige vers "/" et ouvre le modal d'authentification
 * si l'utilisateur n'est pas connecté.
 *
 * Pendant le chargement de la session, un spinner plein écran s'affiche
 * pour éviter un flash de redirection.
 */
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const { openLogin } = useAuthModal();

  // Déclenche le modal login dès qu'on sait que l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!loading && !user) {
      openLogin();
    }
  }, [loading, user, openLogin]);

  // Pendant la vérification de session, afficher un loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-[3px] border-border border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground animate-pulse">Vérification…</p>
        </div>
      </div>
    );
  }

  // Pas connecté → redirection vers l'accueil (le modal sera déjà ouvert via useEffect)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Connecté → afficher la page protégée
  return <>{children}</>;
}
