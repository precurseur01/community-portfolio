import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthModal } from '../../context/AuthModalContext';

/**
 * Route guard : redirige vers "/" et ouvre le modal d'authentification
 * si l'utilisateur n'est pas connecté.
 *
 * Le chemin protégé est mémorisé dans le contexte AuthModal afin que
 * l'utilisateur soit redirigé vers la page souhaitée après connexion.
 *
 * Pendant le chargement de la session, un spinner plein écran s'affiche
 * pour éviter un flash de redirection.
 */
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const { openLogin } = useAuthModal();
  const location = useLocation();

  // Déclenche le modal login et mémorise l'URL cible
  useEffect(() => {
    if (!loading && !user) {
      openLogin(location.pathname + location.search);
    }
  }, [loading, user, openLogin, location.pathname, location.search]);

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
