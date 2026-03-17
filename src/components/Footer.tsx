import {
  Facebook,
  Linkedin,
  Mail, Github,
  MapPin, Phone,
  Rocket, TrendingUp, Target, Zap,
  Send, ArrowRight, Sparkles
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import Img from "../constants/img";

export default function Footer() {
  const { t } = useTranslation();

  // ── Newsletter state ──
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const newsletterRef = useRef<HTMLFormElement>(null);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xldnpebz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Nouvelle inscription newsletter' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const serviceKeys = [
    "services.service1.title",
    "services.service2.title",
    "services.service3.title",
    "services.service4.title",
    "services.service5.title",
    "services.service6.title",
    "services.service7.title",
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/yndris-douanla-060968273", label: 'LinkedIn', key: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Facebook, url: 'https://www.facebook.com/share/1C6Lz8aFes/?mibextid=wwXIfr', label: 'Facebook', key: 'Facebook', color: 'hover:text-blue-300' },
    { icon: Github, url: 'https://github.com/precurseur01', label: 'Github', key: 'Github', color: 'hover:text-blue-300' },
    { icon: Mail, url: 'mailto:contact@freedry.dev', label: 'Email', key: 'Email', color: 'hover:text-emerald-400' },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-gray-300">
      <div className="relative py-20 overflow-hidden border-y border-white/10 bg-gradient-to-br from-blue-600/10 via-black to-emerald-600/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{t("footer.processTitle")}</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">{t("footer.processSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-blue-400 text-3xl font-bold mb-4">01</div>
              <h4 className="text-white font-semibold mb-3">{t("footer.step1")}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t("footer.step1Desc")}</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-emerald-400 text-3xl font-bold mb-4">02</div>
              <h4 className="text-white font-semibold mb-3">{t("footer.step2")}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t("footer.step2Desc")}</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-blue-400 text-3xl font-bold mb-4">03</div>
              <h4 className="text-white font-semibold mb-3">{t("footer.step3")}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t("footer.step3Desc")}</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-emerald-400 text-3xl font-bold mb-4">04</div>
              <h4 className="text-white font-semibold mb-3">{t("footer.step4")}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t("footer.step4Desc")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* ── SECTION PRINCIPALE ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Bloc 1 — Logo + Social */}
          <div className="space-y-5">
            <img src={Img.whitelogo} alt="Free Technology Logo" className="max-h-[60px] w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">{t("footer.about")}</p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={t(`contact.connect.socialLinks.${social.key}`)}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bloc 2 — Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t("footer.services")}</h3>
            <ul className="space-y-3 text-sm">
              {serviceKeys.map((key, index) => (
                <li key={index}>
                  <a href="/services" className="hover:text-white transition">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc 3 — Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={18} /> Yaoundé, Cameroun</li>
              <li className="flex items-center gap-2"><Mail size={18} /> contact@freedry.dev</li>
              <li className="flex items-center gap-2"><Phone size={18} /> +237 670616710</li>
            </ul>
          </div>

          {/* Bloc 4 — Pourquoi nous */}
          <div>
            <h3 className="text-white font-semibold mb-5">{t("footer.why")}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Rocket size={18} className="text-white" /> {t("footer.why1")}</li>
              <li className="flex items-center gap-2"><TrendingUp size={18} className="text-white" /> {t("footer.why2")}</li>
              <li className="flex items-center gap-2"><Target size={18} className="text-white" /> {t("footer.why3")}</li>
              <li className="flex items-center gap-2"><Zap size={18} className="text-white" /> {t("footer.why4")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── SECTION MÉTHODE PREMIUM ── */}


      {/* ── NEWSLETTER ── */}
      <div className="relative overflow-hidden border-b border-white/10">
        {/* Fond ambiant */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950 to-emerald-950/60" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/8 blur-[80px] pointer-events-none" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-600/8 blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-16 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/15 to-emerald-600/15 border border-white/10 text-xs text-gray-400 uppercase tracking-widest mb-6">
            <Sparkles size={12} className="text-emerald-400" />
            Newsletter · Gratuit
          </div>

          {/* Titre émotionnel */}
          <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Votre prochain client vous lit{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              déjà.
            </span>
          </h3>

          {/* Sous-titre */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-2 leading-relaxed">
            Chaque semaine, recevez une technique de vente, un script prêt à l'emploi et une stratégie digitale — directement dans votre boîte mail.
          </p>
          <p className="text-xs text-gray-600 mb-10">
            +300 professionnels déjà abonnés · Zéro spam · Désabonnement en 1 clic
          </p>

          {/* Formulaire */}
          <form
            ref={newsletterRef}
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                disabled={status === 'sending' || status === 'success'}
                className="w-full pl-10 pr-4 py-3.5 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white text-sm font-semibold whitespace-nowrap hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {status === 'sending' && (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Envoi…
                </>
              )}
              {status === 'success' && (
                <>✓ Inscrit !</>
              )}
              {status === 'error' && (
                <>Réessayer</>
              )}
              {status === 'idle' && (
                <>
                  Je m'abonne
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Feedback messages */}
          {status === 'success' && (
            <p className="mt-4 text-sm text-emerald-400 flex items-center justify-center gap-2 animate-pulse">
              <Send size={14} />
              Bienvenue ! Votre première édition arrive bientôt.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400">
              Une erreur est survenue. Réessayez ou contactez-nous directement.
            </p>
          )}
        </div>
      </div>

      {/* ── BAS FOOTER ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} – Free Digital Solutions</p>
          <div className="flex gap-6">
            <a href="/legal-notice" className="hover:text-white transition">{t("footer.legal")}</a>
            <a href="/privacy-policy" className="hover:text-white transition">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>

    </footer>
  );
}