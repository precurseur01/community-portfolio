import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Rocket, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Img from '../../constants/img';

// ─── Types ───────────────────────────────────────────────────────────────────

type AuthView = 'login' | 'signup' | 'reset';

interface AuthModalProps {
  isOpen: boolean;
  initialView?: 'login' | 'signup';
  onClose: () => void;
}

// ─── Sous-composant : champ input ─────────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
  disabled?: boolean;
}

function InputField({ id, label, type, placeholder, value, onChange, icon, rightElement, disabled }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-300 pl-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50"
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function AuthModal({ isOpen, initialView = 'login', onClose }: AuthModalProps) {
  const { signIn, signUp, resetPassword } = useAuth();

  // ── State ──
  const [view, setView] = useState<AuthView>(initialView);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Synchronise la vue avec initialView quand le modal s'ouvre
  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      setEmail('');
      setFullName('');
      setPassword('');
      setFeedback(null);
      setShowPassword(false);
    }
  }, [isOpen, initialView]);

  // Fermeture sur Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Handlers ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    if (view === 'login') {
      const { error } = await signIn(email, password);
      if (error) {
        setFeedback({ type: 'error', message: 'Email ou mot de passe incorrect.' });
      } else {
        onClose();
      }
    } else if (view === 'signup') {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        setFeedback({ type: 'error', message: error.message });
      } else {
        setFeedback({
          type: 'success',
          message: 'Compte créé ! Vérifiez votre boîte mail pour confirmer votre adresse.',
        });
      }
    } else {
      const { error } = await resetPassword(email);
      if (error) {
        setFeedback({ type: 'error', message: error.message });
      } else {
        setFeedback({
          type: 'success',
          message: 'Lien de réinitialisation envoyé ! Vérifiez votre boîte mail.',
        });
      }
    }

    setLoading(false);
  };

  const switchView = (v: AuthView) => {
    setView(v);
    setFeedback(null);
    setPassword('');
  };

  // ── Contenu dynamique ──
  const titles: Record<AuthView, string> = {
    login: 'Bon retour 👋',
    signup: 'Créer un compte',
    reset: 'Mot de passe oublié',
  };

  const subtitles: Record<AuthView, string> = {
    login: 'Accédez à votre espace personnel.',
    signup: 'Rejoignez la communauté Free Technology.',
    reset: 'Entrez votre email pour recevoir un lien de réinitialisation.',
  };

  const ctaLabels: Record<AuthView, string> = {
    login: 'Se connecter',
    signup: 'Créer mon compte',
    reset: 'Envoyer le lien',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Overlay ── */}
          <motion.div
            ref={overlayRef}
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md"
          />

          {/* ── Modal ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-[900px] flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
              style={{ background: 'rgba(8, 14, 30, 0.92)', backdropFilter: 'blur(32px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Colonne gauche : visuel impact (desktop) ── */}
              <div className="hidden md:flex md:w-5/12 relative flex-col justify-end p-10 overflow-hidden">
                {/* Fond animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-900 to-emerald-900/40" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-[60px]" />

                {/* Contenu */}
                <div className="relative z-10 space-y-5">
                  {/* Logo */}
                  <img
                    src={Img.logo}
                    alt="Free Digital Solutions"
                    className="max-h-[52px] w-auto"
                  />

                  {/* Titre */}
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    Développez votre{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      présence digitale.
                    </span>
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Stratégies data-driven, growth marketing et outils de conversion pensés pour les entrepreneurs ambitieux.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { value: '+300', label: 'Clients actifs' },
                      { value: '98%', label: 'Satisfaction' },
                      { value: '5×', label: 'ROI moyen' },
                      { value: '24h', label: 'Support réactif' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Colonne droite : formulaire ── */}
              <div className="flex-1 flex flex-col p-7 md:p-10">

                {/* En-tête */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Rocket size={22} className="text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">{titles[view]}</h1>
                      <p className="text-sm text-slate-400 mt-0.5">{subtitles[view]}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                    aria-label="Fermer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Tabs (Login / Signup) */}
                {view !== 'reset' && (
                  <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-7">
                    {(['login', 'signup'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => switchView(v)}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          view === v
                            ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {v === 'login' ? 'Connexion' : 'Inscription'}
                      </button>
                    ))}
                  </div>
                )}

                {/* Vue reset : bouton retour */}
                {view === 'reset' && (
                  <button
                    onClick={() => switchView('login')}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition-colors self-start group"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    Retour à la connexion
                  </button>
                )}

                {/* ── Formulaire ── */}
                <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                  <InputField
                    id="auth-email"
                    label="Adresse email"
                    type="email"
                    placeholder="nom@entreprise.com"
                    value={email}
                    onChange={setEmail}
                    icon={<Mail size={18} />}
                    disabled={loading}
                  />

                  {view === 'signup' && (
                    <InputField
                      id="auth-name"
                      label="Nom complet"
                      type="text"
                      placeholder="Jean Dupont"
                      value={fullName}
                      onChange={setFullName}
                      icon={<Rocket size={18} />}
                      disabled={loading}
                    />
                  )}

                  {view !== 'reset' && (
                    <InputField
                      id="auth-password"
                      label="Mot de passe"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={setPassword}
                      icon={<Lock size={18} />}
                      disabled={loading}
                      rightElement={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-slate-500 hover:text-slate-300 transition-colors"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      }
                    />
                  )}

                  {/* Lien "mot de passe oublié" (login uniquement) */}
                  {view === 'login' && (
                    <div className="flex justify-end -mt-2">
                      <button
                        type="button"
                        onClick={() => switchView('reset')}
                        className="text-xs text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-colors"
                      >
                        Mot de passe oublié ?
                      </button>
                    </div>
                  )}

                  {/* Feedback */}
                  <AnimatePresence>
                    {feedback && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex items-start gap-3 p-3.5 rounded-xl text-sm border ${
                          feedback.type === 'success'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                            : 'bg-red-500/10 border-red-500/30 text-red-300'
                        }`}
                      >
                        {feedback.type === 'success'
                          ? <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                          : <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                        }
                        {feedback.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {ctaLabels[view]}
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Bas de modal */}
                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  {view === 'login' && (
                    <p className="text-sm text-slate-500">
                      Pas encore de compte ?{' '}
                      <button
                        onClick={() => switchView('signup')}
                        className="text-blue-400 hover:text-blue-300 font-semibold hover:underline underline-offset-4 transition-colors"
                      >
                        Créer un compte
                      </button>
                    </p>
                  )}
                  {view === 'signup' && (
                    <p className="text-sm text-slate-500">
                      Déjà un compte ?{' '}
                      <button
                        onClick={() => switchView('login')}
                        className="text-blue-400 hover:text-blue-300 font-semibold hover:underline underline-offset-4 transition-colors"
                      >
                        Se connecter
                      </button>
                    </p>
                  )}
                  {view === 'reset' && (
                    <p className="text-xs text-slate-600">
                      Vérifiez également votre dossier spam si vous ne recevez rien.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
