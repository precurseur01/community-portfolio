import { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Star, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ─── Component ───────────────────────────────────────────────────────────────

export default function CMCurriculumPage() {
  const { t } = useTranslation();
  const [activeModule, setActiveModule] = useState('module-1');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ─── Data (Inside component to use t()) ──────────────────────────────────────

  const modules = [
    {
      id: 'module-1',
      num: '01',
      label: t('curriculum.modules.m1.label'),
      title: t('curriculum.modules.m1.title'),
      desc: t('curriculum.modules.m1.desc'),
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m1.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-2',
      num: '02',
      label: t('curriculum.modules.m2.label'),
      title: t('curriculum.modules.m2.title'),
      desc: t('curriculum.modules.m2.desc'),
      img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m2.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-3',
      num: '03',
      label: t('curriculum.modules.m3.label'),
      title: t('curriculum.modules.m3.title'),
      desc: t('curriculum.modules.m3.desc'),
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m3.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-4',
      num: '04',
      label: t('curriculum.modules.m4.label'),
      title: t('curriculum.modules.m4.title'),
      desc: t('curriculum.modules.m4.desc'),
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m4.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-5',
      num: '05',
      label: t('curriculum.modules.m5.label'),
      title: t('curriculum.modules.m5.title'),
      desc: t('curriculum.modules.m5.desc'),
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m5.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-6',
      num: '06',
      label: t('curriculum.modules.m6.label'),
      title: t('curriculum.modules.m6.title'),
      desc: t('curriculum.modules.m6.desc'),
      img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m6.skills', { returnObjects: true }) as string[],
      color: '#09A9E3',
    },
    {
      id: 'module-7',
      num: '07',
      label: t('curriculum.modules.m7.label'),
      title: t('curriculum.modules.m7.title'),
      desc: t('curriculum.modules.m7.desc'),
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=80',
      skills: t('curriculum.modules.m7.skills', { returnObjects: true }) as string[],
      color: '#FF8C42',
      isBonus: true,
    },
  ];

  const navItems = modules.map(m => ({ id: m.id, num: m.num, label: m.label, isBonus: m.isBonus }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveModule(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── Hero Header ── */}
      <header
        className="relative pt-28 pb-20 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B3C5D 0%, #09A9E3 100%)', minHeight: 440 }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #FF8C42 0%, transparent 50%), radial-gradient(circle at 80% 20%, #50BC74 0%, transparent 50%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: 'rgba(9,169,227,0.3)', color: '#A8E6CF', border: '1px solid rgba(168,230,207,0.4)' }}>
            {t('curriculum.label')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t('curriculum.heroTitle')}
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('curriculum.heroSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Award size={16} style={{ color: '#A8E6CF' }} />
              <span>{t('curriculum.certification')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Users size={16} style={{ color: '#A8E6CF' }} />
              <span>{t('curriculum.privateCommunity')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left Sidebar ── */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#09A9E3' }}>
                {t('curriculum.pathOverview')}
              </p>
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeModule === item.id ? '' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'}`}
                  style={activeModule === item.id
                    ? { background: item.isBonus ? 'rgba(255,140,66,0.12)' : 'rgba(9,169,227,0.12)', color: item.isBonus ? '#FF8C42' : '#09A9E3' }
                    : { background: 'transparent' }}
                  onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                    style={{ background: activeModule === item.id ? (item.isBonus ? '#FF8C42' : '#09A9E3') : 'hsl(var(--muted-foreground))' }}
                  >
                    {item.num}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          {/* ── Module Cards ── */}
          <div className="lg:col-span-9 space-y-10">
            {modules.map((mod, i) => (
              <section
                key={mod.id}
                id={mod.id}
                ref={setRef(mod.id)}
                className={`rounded-2xl overflow-hidden transition-all duration-500 relative ${mod.isBonus ? 'bg-[#FF8C42]/10 border-2 border-[#FF8C42]' : 'bg-card border border-border'} shadow-lg`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                  {/* Bonus badge */}
                  {mod.isBonus && (
                    <div className="absolute top-4 right-4 hidden sm:block">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                        style={{ background: '#FF8C42' }}>
                        {t('curriculum.bonusExcl')}
                      </span>
                    </div>
                  )}

                  {/* Image column */}
                  <div className="sm:w-1/3 flex-shrink-0">
                    <div className={`aspect-square rounded-xl overflow-hidden mb-3 ${mod.isBonus ? 'bg-[#FF8C42]/20' : 'bg-primary/10'}`}>
                      <img src={mod.img} alt={mod.title}
                        className="w-full h-full object-cover"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: mod.color }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: mod.color }}>
                        {t('curriculum.moduleLabel', { num: mod.num })}
                      </span>
                      {mod.isBonus && (
                        <span className="sm:hidden px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                          style={{ background: '#FF8C42' }}>{t('curriculum.bonusLabel')}</span>
                      )}
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="sm:w-2/3">
                    <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{mod.desc}</p>
                    <ul className="space-y-2.5">
                      {mod.skills.map((skill, si) => (
                        <li key={si} className="flex items-start gap-3">
                          <CheckCircle size={18} style={{ color: mod.isBonus ? '#FF8C42' : '#09A9E3', flexShrink: 0, marginTop: 1 }} />
                          <span className="text-sm text-foreground/80">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* ── Final CTA ── */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-foreground font-display">
            {t('curriculum.ctaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {t('curriculum.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/preselection')}
              className="px-10 py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
            >
              {t('curriculum.signupNow')}
              <ArrowRight size={18} />
            </button>
            <button
              className="px-10 py-4 rounded-xl font-bold border-2 text-lg transition-all hover:opacity-80"
              style={{ borderColor: '#09A9E3', color: '#09A9E3' }}
            >
              {t('curriculum.downloadBrochure')}
            </button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {t('curriculum.nextCohort', { date: t('cmTraining.date') })}
          </p>
        </div>
      </section>

      {/* ── Floating Rating Badge ── */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary/15">
            <Star size={20} style={{ color: '#09A9E3' }} fill="#09A9E3" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{t('curriculum.avgRating')}</p>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold text-foreground">4.9</span>
              <span className="text-lg text-muted-foreground">/5</span>
              <Star size={14} style={{ color: '#FF8C42' }} fill="#FF8C42" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
