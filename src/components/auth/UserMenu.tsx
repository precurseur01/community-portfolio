import { useState, useRef, useEffect } from 'react';
import { LogOut, User, ChevronDown, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function UserMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermeture au clic extérieur
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const initial = user?.email?.charAt(0).toUpperCase() ?? 'U';
  const email = user?.email ?? '';

  return (
    <div ref={menuRef} className="relative">
      {/* ── Avatar Button ── */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
        aria-label="Menu utilisateur"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold shadow-sm flex-shrink-0">
          {initial}
        </div>

        {/* Email (desktop) */}
        <span className="hidden lg:block text-sm text-slate-300 group-hover:text-white transition-colors max-w-[120px] truncate">
          {email}
        </span>

        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-60 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50"
            style={{ background: 'rgba(8,14,30,0.95)', backdropFilter: 'blur(24px)' }}
          >
            {/* Info utilisateur */}
            <div className="px-4 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {initial}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-white">Mon compte</p>
                  <p className="text-xs text-slate-400 truncate">{email}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-2">
              <button
                onClick={() => setOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <User size={14} className="text-blue-400" />
                </div>
                Profil
              </button>

              <button
                onClick={() => setOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Settings size={14} className="text-emerald-400" />
                </div>
                Paramètres
              </button>
            </div>

            {/* Déconnexion */}
            <div className="p-2 border-t border-white/10">
              <button
                onClick={async () => { setOpen(false); await signOut(); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <LogOut size={14} className="text-red-400" />
                </div>
                Se déconnecter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
