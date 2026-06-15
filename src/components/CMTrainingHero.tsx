import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, TrendingUp, AlertCircle, CheckCircle, Rocket, BarChart3, Brain, Palette, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img from '../constants/img';

const modules = [
  { icon: Users, emoji: '👥', titleKey: 'cmTraining.modules.fundamentals.title', descKey: 'cmTraining.modules.fundamentals.desc' },
  { icon: Brain, emoji: '🤖', titleKey: 'cmTraining.modules.ia.title', descKey: 'cmTraining.modules.ia.desc' },
  { icon: Palette, emoji: '🎨', titleKey: 'cmTraining.modules.content.title', descKey: 'cmTraining.modules.content.desc' },
  { icon: BarChart3, emoji: '📊', titleKey: 'cmTraining.modules.ads.title', descKey: 'cmTraining.modules.ads.desc' },
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
  const { t } = useTranslation();
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
      className="relative py-20 overflow-hidden bg-background"
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
            <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 mt-2 rounded-full text-sm font-semibold uppercase tracking-wider border bg-primary/10 text-primary border-primary/30">
              {t('cmTraining.label')}
            </span>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground font-display">
                {t('cmTraining.headline.prefix')}{' '}
                <span className="relative inline-block">
                  <span className="text-primary">{t('cmTraining.headline.highlight')}</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {t('cmTraining.description')}
              </p>
            </div>

            {/* Session Box */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-md space-y-3 max-w-md">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-primary" />
                <p className="font-bold text-sm uppercase tracking-wide text-foreground">
                  {t('cmTraining.nextSession', { date: t('cmTraining.date') })}
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-lg p-3 bg-[#FF8C42]/10 border border-[#FF8C42]/20">
                <AlertCircle size={18} className="text-[#FF8C42] flex-shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-[#FF8C42]">
                  {t('cmTraining.limitedPlaces')}
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
                  {t('cmTraining.viewProgram')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/preselection')}
                  className="animate-shimmer group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
                >
                  <CheckCircle size={18} />
                  {t('cmTraining.reservePlace')}
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle size={15} className="text-accent" />
                <span>{t('cmTraining.quickSignup')}</span>
                <span className="text-foreground/40 mx-1">•</span>
                <span>{t('cmTraining.limit15')}</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="Apprenant"
                    className="w-10 h-10 rounded-full border-2 border-background bg-secondary object-cover" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground bg-primary">
                  +{count}
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{t('cmTraining.studentsCount')}</p>
                <p className="text-xs text-muted-foreground">{t('cmTraining.provenMethod')}</p>
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
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/15">
                  <TrendingUp size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{t('cmTraining.vipSupport')}</p>
                  <p className="text-xs text-muted-foreground">{t('cmTraining.guaranteedTransformation')}</p>
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow border border-border">
                <div className="w-2 h-2 rounded-full animate-pulse bg-accent" />
                <span className="text-xs font-bold text-foreground">{t('cmTraining.liveSuccess')}</span>
              </div>
            </div>

            {/* Session Date orange pill badge */}
            <div className="absolute top-4 left-4 bg-[#FF8C42] text-white rounded-full px-5 py-2.5 flex items-center gap-3 shadow-xl flex animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-sm flex-shrink-0" />
              <div className="flex flex-col -space-y-0.5">
                <span className="text-[11px] font-bold text-white/90">{t('cmTraining.nextSessionLabel')}</span>
                <span className="text-sm font-black tracking-tight">{t('cmTraining.date')}</span>
              </div>
            </div>

            {/* Decorative float element */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF8C42] text-white p-6 rounded-2xl shadow-xl hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-xs uppercase tracking-wider opacity-80 font-bold">{t('cmTraining.satisfaction')}</div>
            </div>
          </div>

          {/* Column previously hosting the visual — removed to avoid duplication */}
        </div>

        {/* ── Modules Grid ── */}
        <div id="cm-modules">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground font-display">
              {t('cmTraining.modulesTitle')}
            </h3>
            <button
              onClick={() => navigate('/growth/cm-curriculum')}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold link-underline text-primary"
            >
              {t('cmTraining.viewFullProgram')}
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
                <div className="bg-card rounded-2xl p-6 h-full transition-colors border border-border group-hover:bg-secondary/50">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm bg-primary/10">
                    <mod.icon size={26} style={{ stroke: 'url(#blue-green-gradient)' }} />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-foreground">{t(mod.titleKey)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(mod.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              {t('cmTraining.intensiveProgram')}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/growth/cm-curriculum')}
                className="text-sm font-semibold link-underline text-primary"
              >
                {t('cmTraining.viewFullProgram')} <ArrowRight size={14} className="arrow-slide" />
              </button>
              <button
                onClick={() => navigate('/growth/cm-programs')}
                className="hover-pulse px-5 py-2 rounded-full text-sm font-semibold border-2 border-primary text-primary transition-all hover:bg-primary/10"
              >
                {t('cmTraining.discoverFormulas')} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
