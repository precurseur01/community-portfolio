import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Users, TrendingUp, AlertCircle, CheckCircle, Rocket, BarChart3, Brain, Palette, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Img from '../constants/img';

const modules = [
  { icon: Smartphone, emoji: '📱', title: 'Fondamentaux du Community Management', desc: 'Maîtrisez les algorithmes et créez des communautés engagées.' },
  { icon: Brain, emoji: '🤖', title: 'IA appliquée au CM', desc: 'Automatisez vos tâches et boostez votre créativité avec l\'IA.' },
  { icon: Palette, emoji: '🎨', title: 'Création de contenu', desc: 'Produisez des visuels et vidéos impactants qui convertissent.' },
  { icon: BarChart3, emoji: '📊', title: 'Publicité & analytics', desc: 'Gérez des budgets publicitaires et mesurez votre ROI précisément.' },
];

const avatars = [
  Img.avatar1,
  Img.avatar2,
  Img.avatar3,
  Img.avatar4,
  Img.avatar5,
  Img.avatar6,
  Img.avatar7,
];

export default function CMTrainingHero() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let n = 0;
    const timer = setInterval(() => {
      n += 3;
      if (n >= 100) { setCount(100); clearInterval(timer); }
      else setCount(n);
    }, 20);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="cm-academy"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #fff 50%, #fff8f0 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #09A9E3 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">

          {/* Left Column */}
          <div
            className={`lg:col-span-6 flex flex-col gap-7 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider border"
              style={{ background: '#e6f7fd', color: '#09A9E3', borderColor: '#b3e6f7' }}>
              🎓 CM Academy Premium
            </span>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
                Deviens Community Manager{' '}
                <span className="relative inline-block">
                  <span style={{ color: '#09A9E3' }}>rentable en 8 semaines</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Formation pratique orientée résultats. Utilisation de l'IA, du contenu et de la publicité.
                Accompagnement structuré vers la réussite professionnelle.
              </p>
            </div>

            {/* Session Box */}
            <div className="bg-white border rounded-2xl p-5 shadow-md space-y-3 max-w-md"
              style={{ borderColor: '#e2e8f0' }}>
              <div className="flex items-center gap-3">
                <Calendar size={20} style={{ color: '#09A9E3' }} />
                <p className="font-bold text-sm uppercase tracking-wide" style={{ color: '#0B3C5D' }}>
                  Prochaine session : 04 Juillet 2026
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-lg p-3" style={{ background: '#fff3ee' }}>
                <AlertCircle size={18} style={{ color: '#FF8C42', flexShrink: 0, marginTop: 1 }} />
                <p className="text-sm" style={{ color: '#7c4700' }}>
                  Places limitées <strong>(15 participants max)</strong> pour un accompagnement personnalisé.
                </p>
              </div>
            </div>

            {/* CTA Area */}
            <div className="flex flex-col items-start gap-3">
              <button
                onClick={() => document.getElementById('cm-modules')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #FF8C42, #e67000)' }}
              >
                <Rocket size={18} />
                Voir le programme
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle size={15} style={{ color: '#50BC74' }} />
                <span>Inscription rapide</span>
                <span className="text-gray-300 mx-1">•</span>
                <span>Début le 04 Juillet 2026</span>
              </div>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 pl-4 italic text-gray-600"
              style={{ borderColor: '#09A9E3' }}>
              « Quel que soit votre profil ou votre niveau, savoir vendre — et savoir se vendre — est une compétence essentielle. »
            </blockquote>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-gray-100">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="Apprenant"
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 object-cover" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: '#09A9E3' }}>
                  +{count}
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#0B3C5D' }}>Apprenants formés</p>
                <p className="text-xs text-gray-500">Méthode orientée résultats</p>
              </div>
            </div>
          </div>

          {/* Right Column — Visual */}
          <div
            className={`lg:col-span-6 relative mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(9,169,227,0.2)' }}>
              {/* Dashboard visual placeholder */}
              <div className="w-full aspect-[4/3] flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0B3C5D 0%, #09A9E3 100%)' }}>
                {/* Simulated dashboard UI */}
                <div className="w-full h-full p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                    <div className="ml-2 flex-1 h-4 rounded-full bg-white/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['+45%', '12K', '98%'].map((v, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <p className="text-white font-bold text-lg">{v}</p>
                        <p className="text-white/60 text-xs">Metric {i + 1}</p>
                      </div>
                    ))}
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex-1 bg-white/5 rounded-xl p-3 flex items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all"
                        style={{ height: `${h}%`, background: i % 3 === 0 ? '#FF8C42' : i % 3 === 1 ? '#50BC74' : '#09A9E3', opacity: 0.85 }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Engagement +45%', 'Reach ×3.2', 'Conversions +78%', 'ROI positif'].map((label, i) => (
                      <div key={i} className="bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: ['#50BC74', '#09A9E3', '#FF8C42', '#A8E6CF'][i] }} />
                        <span className="text-white/80 text-xs font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating glassmorphism badge */}
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-3 flex items-center gap-3"
                style={{ border: '1px solid rgba(255,255,255,0.6)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: '#e6f7fd' }}>
                  <TrendingUp size={18} style={{ color: '#09A9E3' }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#0B3C5D' }}>Croissance ciblée</p>
                  <p className="text-xs text-gray-500">+45% d'engagement</p>
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#50BC74' }} />
                <span className="text-xs font-bold" style={{ color: '#0B3C5D' }}>Live Analytics</span>
              </div>
            </div>

            {/* Secondary float card */}
            <div className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl p-3 flex flex-col items-center gap-1 hidden lg:flex"
              style={{ border: '1px solid #f0f0f0' }}>
              <Users size={20} style={{ color: '#FF8C42' }} />
              <p className="font-bold text-lg" style={{ color: '#0B3C5D' }}>15</p>
              <p className="text-xs text-gray-400 text-center leading-tight">places<br />max</p>
            </div>
          </div>
        </div>

        {/* ── Modules Grid ── */}
        <div id="cm-modules">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
              Nos modules de formation
            </h3>
            <button
              onClick={() => navigate('/growth/cm-curriculum')}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#09A9E3' }}
            >
              Voir le programme complet
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-px transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)`,
                  animationDelay: `${i * 100}ms`
                }}
              >
                <div className="bg-white rounded-2xl p-6 h-full transition-colors group-hover:bg-gray-50">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm"
                    style={{ background: '#f8faff' }}>
                    {mod.emoji}
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: '#0B3C5D' }}>{mod.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm text-gray-500">
              Programme intensif couvrant de la stratégie (Module 1) à la monétisation (Module 7).
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/growth/cm-curriculum')}
                className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: '#09A9E3' }}
              >
                Voir le programme complet →
              </button>
              <button
                onClick={() => navigate('/growth/cm-programs')}
                className="px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all hover:opacity-80"
                style={{ borderColor: '#09A9E3', color: '#09A9E3' }}
              >
                Découvrir les formules →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
