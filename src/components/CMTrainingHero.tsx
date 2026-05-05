import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, TrendingUp, AlertCircle, CheckCircle, Rocket, BarChart3, Brain, Palette, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Img from '../constants/img';

const modules = [
  { icon: Users, emoji: '👥', title: 'Fondamentaux du Community Management', desc: 'Maîtrisez les algorithmes et créez des communautés engagées.' },
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

const sliderImages = [
  { src: Img.hero_cm_1, alt: 'Collaboration' },
  { src: Img.hero_cm_2, alt: 'Formation' },
  { src: Img.hero_cm_3, alt: 'Réussite' },
];

export default function CMTrainingHero() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cm-academy"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #fff 50%, #fff8f0 100%)' }}
    >
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmer 3s infinite;
        }
        @keyframes softPulse {
          0% { box-shadow: 0 0 0 0 rgba(9, 169, 227, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(9, 169, 227, 0); }
          100% { box-shadow: 0 0 0 0 rgba(9, 169, 227, 0); }
        }
        .hover-pulse:hover {
          animation: softPulse 1.5s infinite;
        }
        .link-underline {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #09A9E3;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after {
          width: 100%;
        }
        .link-underline:hover .arrow-slide {
          transform: translateX(4px);
        }
        .arrow-slide {
          transition: transform 0.3s ease;
        }
      `}</style>
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #09A9E3 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }} />

      {/* SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="blue-green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#09A9E3" />
          <stop offset="100%" stopColor="#50BC74" />
        </linearGradient>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">

          {/* Left Column — Text Content (Increased space for the headline) */}
          <div
            className={`lg:col-span-7 flex flex-col gap-7 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 mt-2 rounded-full text-sm font-semibold uppercase tracking-wider border"
              style={{ background: '#e6f7fd', color: '#09A9E3', borderColor: '#b3e6f7' }}>
              🎓 CM Academy Premium
            </span>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
                Deviens Community Manager{' '}
                <span className="relative inline-block">
                  <span style={{ color: '#09A9E3' }}>rentable en 12 semaines</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Formation pratique orientée résultats. Maîtrisez l'IA, la création de contenu et la publicité pour devenir un expert recherché sur le marché.
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
                  Places limitées <strong>(15 participants max)</strong> pour un accompagnement ultra-personnalisé.
                </p>
              </div>
            </div>

            {/* CTA Area */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => document.getElementById('cm-modules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="animate-shimmer group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74)' }}
                >
                  <Rocket size={18} />
                  Voir le programme
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/preselection')}
                  className="animate-shimmer group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
                >
                  <CheckCircle size={18} />
                  Je réserve ma place
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle size={15} style={{ color: '#50BC74' }} />
                <span>Inscription rapide</span>
                <span className="text-gray-300 mx-1">•</span>
                <span>Places limitées à 15 participants</span>
              </div>
            </div>

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
                <p className="font-semibold text-sm" style={{ color: '#0B3C5D' }}>Apprenants déjà formés</p>
                <p className="text-xs text-gray-500">Méthode éprouvée et résultats concrets</p>
              </div>
            </div>
          </div>

          {/* Right Column — Visual Slider (Reduced size to give more space to text) */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group" style={{ boxShadow: '0 20px 60px rgba(9,169,227,0.15)' }}>
              {sliderImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                  style={{ transitionProperty: 'opacity, transform' }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/40 to-transparent" />
                </div>
              ))}

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                  />
                ))}
              </div>

              {/* Floating glassmorphism badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-white/50">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50">
                  <TrendingUp size={22} className="text-[#09A9E3]" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0B3C5D]">Accompagnement VIP</p>
                  <p className="text-xs text-gray-500">Transformation garantie</p>
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#50BC74' }} />
                <span className="text-xs font-bold" style={{ color: '#0B3C5D' }}>Live Success</span>
              </div>
            </div>

            {/* Session Date orange pill badge */}
            <div className="absolute top-4 left-4 bg-[#FF8C42] text-white rounded-full px-5 py-2.5 flex items-center gap-3 shadow-xl flex animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-sm flex-shrink-0" />
              <div className="flex flex-col -space-y-0.5">
                <span className="text-[11px] font-bold text-[#0B3C5D]">Prochaine session</span>
                <span className="text-sm font-black tracking-tight">04 JUILLET 2026</span>
              </div>
            </div>

            {/* Decorative float element */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF8C42] text-white p-6 rounded-2xl shadow-xl hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-xs uppercase tracking-wider opacity-80 font-bold">Satisfaction</div>
            </div>
          </div>

          {/* Column previously hosting the visual — removed to avoid duplication */}
        </div>

        {/* ── Modules Grid ── */}
        <div id="cm-modules">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
              Nos modules de formation
            </h3>
            <button
              onClick={() => navigate('/growth/cm-curriculum')}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold link-underline"
              style={{ color: '#09A9E3' }}
            >
              Voir le programme complet
              <ArrowRight size={15} className="arrow-slide" />
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ background: '#f8faff' }}>
                    <mod.icon size={26} style={{ stroke: 'url(#blue-green-gradient)' }} />
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
                className="text-sm font-semibold link-underline"
                style={{ color: '#09A9E3' }}
              >
                Voir le programme complet <ArrowRight size={14} className="arrow-slide" />
              </button>
              <button
                onClick={() => navigate('/growth/cm-programs')}
                className="hover-pulse px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all hover:opacity-80"
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
