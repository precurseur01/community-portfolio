import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Zap, Brain, MessageSquare, TrendingUp,
    ArrowRight, BookOpen, Star, Clock, ChevronRight,
    Target, Users, Award, Flame
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const modules = [
    {
        id: 'conversion',
        href: '/growth/conversion',
        icon: Zap,
        number: '01',
        title: 'Techniques de Conversion',
        tagline: 'De l\'intérêt à l\'action',
        desc: 'Maîtrisez les 8 méthodes qui transforment un prospect hésitant en client convaincu. AIDA, SPIN, CAB et bien plus.',
        duration: '45 min',
        level: 'Fondamental',
        levelColor: 'text-violet-400',
        tags: ['AIDA', 'SPIN', 'SONCAS', 'CAB'],
        gradient: 'from-violet-600 to-indigo-700',
        glow: 'shadow-violet-500/20',
        border: 'border-violet-500/20',
        hover: 'hover:border-violet-500/40',
        accent: '#7c3aed',
        featured: true,
    },
    {
        id: 'psychology',
        href: '/growth/psychology',
        icon: Brain,
        number: '02',
        title: 'Psychologie Client',
        tagline: 'Comprendre pour convaincre',
        desc: 'Décryptez les 6 motivations profondes d\'achat. Adaptez votre discours à chaque profil psychologique.',
        duration: '30 min',
        level: 'Intermédiaire',
        levelColor: 'text-cyan-400',
        tags: ['SONCAS', 'Profils', 'Émotions', 'Objections'],
        gradient: 'from-cyan-600 to-teal-700',
        glow: 'shadow-cyan-500/20',
        border: 'border-cyan-500/20',
        hover: 'hover:border-cyan-500/40',
        accent: '#0891b2',
        featured: false,
    },
    {
        id: 'scripts',
        href: '/growth/scripts',
        icon: MessageSquare,
        number: '03',
        title: 'Scripts WhatsApp',
        tagline: 'Les mots qui vendent',
        desc: 'Templates de messages prêts à l\'emploi pour WhatsApp et Messenger. Copier, adapter, envoyer.',
        duration: '20 min',
        level: 'Pratique',
        levelColor: 'text-emerald-400',
        tags: ['Templates', 'WhatsApp', 'Messenger', 'Relance'],
        gradient: 'from-emerald-600 to-green-700',
        glow: 'shadow-emerald-500/20',
        border: 'border-emerald-500/20',
        hover: 'hover:border-emerald-500/40',
        accent: '#059669',
        featured: false,
    },
    {
        id: 'funnel',
        href: '/growth/funnel',
        icon: TrendingUp,
        number: '04',
        title: 'Tunnel de Vente',
        tagline: 'De prospect à ambassadeur',
        desc: 'Construisez un parcours client sans friction. De la première impression à la fidélisation durable.',
        duration: '35 min',
        level: 'Avancé',
        levelColor: 'text-amber-400',
        tags: ['Funnel', 'Fidélisation', 'Upsell', 'Rétention'],
        gradient: 'from-amber-500 to-orange-600',
        glow: 'shadow-amber-500/20',
        border: 'border-amber-500/20',
        hover: 'hover:border-amber-500/40',
        accent: '#d97706',
        featured: false,
    },
];

const stats = [
    { icon: BookOpen, value: '8+', label: 'Méthodes de vente', color: 'text-violet-400' },
    { icon: Target, value: '4', label: 'Modules pratiques', color: 'text-cyan-400' },
    { icon: Users, value: '300+', label: 'Apprenants actifs', color: 'text-emerald-400' },
    { icon: Award, value: '100%', label: 'Contenu actionnable', color: 'text-amber-400' },
];

const featured = modules[0];

/* ─────────────────────────────────────────────
   HOOK : intersection observer for animations
───────────────────────────────────────────── */
function useVisible(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function GrowthPlaybook() {
    const [hovered, setHovered] = useState<string | null>(null);
    const heroVisible = useVisible(0.1);
    const statsVisible = useVisible(0.1);
    const modulesVisible = useVisible(0.1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 font-sans overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }

        .module-card { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease; }
        .module-card:hover { transform: translateY(-8px); }

        .tag-pill { transition: all 0.2s ease; }
        .tag-pill:hover { transform: scale(1.05); }

        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .diagonal-line {
          background: linear-gradient(135deg, transparent 49%, rgba(255,255,255,0.04) 49%, rgba(255,255,255,0.04) 51%, transparent 51%);
          background-size: 32px 32px;
        }

        .number-stroke {
          -webkit-text-stroke: 1px rgba(255,255,255,0.08);
          color: transparent;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

            {/* ── HERO ───────────────────────────────── */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 overflow-hidden grid-bg">
                {/* Ambient blobs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/10 blur-[100px] pulse-glow" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-600/10 blur-[100px] pulse-glow" style={{ animationDelay: '1.5s' }} />

                <div className="max-w-6xl mx-auto w-full">
                    <div ref={heroVisible.ref} className={`grid lg:grid-cols-2 gap-16 items-center`}>

                        {/* Left — text */}
                        <div className={`reveal ${heroVisible.visible ? 'visible' : ''}`}>
                            {/* Eyebrow */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-px bg-gradient-to-r from-violet-400 to-transparent" />
                                <span className="text-xs font-body font-500 text-violet-400 uppercase tracking-[0.2em]">
                                    Free Digital Solutions
                                </span>
                            </div>

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                                Growth
                                <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
                                    Playbook
                                </span>
                            </h1>

                            <p className="font-body text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                                Toutes les techniques, méthodes et scripts pour transformer vos prospects en clients — et vos clients en ambassadeurs.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <NavLink
                                    to="/growth/conversion"
                                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl text-white font-body font-500 text-sm hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Commencer le module 01
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </NavLink>
                                <a
                                    href="#modules"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 font-body font-500 text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    Explorer les modules
                                </a>
                            </div>
                        </div>

                        {/* Right — featured card */}
                        <div className={`reveal ${heroVisible.visible ? 'visible' : ''} hidden lg:block`} style={{ transitionDelay: '0.2s' }}>
                            <div className="relative float-anim">
                                {/* Glow behind card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-2xl scale-105" />

                                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-violet-500/20 overflow-hidden">
                                    {/* Card header */}
                                    <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-6 relative overflow-hidden">
                                        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/5" />
                                        <div className="absolute -right-2 -bottom-8 w-24 h-24 rounded-full bg-black/10" />
                                        <div className="relative flex items-start justify-between">
                                            <div>
                                                <div className="text-white/50 text-xs font-body uppercase tracking-widest mb-2">Module en vedette</div>
                                                <h3 className="font-serif text-2xl text-white font-700">{featured.title}</h3>
                                                <p className="text-white/70 text-sm mt-1 font-body">{featured.tagline}</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                                <featured.icon size={22} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-6">
                                        <p className="text-slate-400 text-sm font-body leading-relaxed mb-5">{featured.desc}</p>

                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {featured.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-body">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-xs text-slate-500 font-body">
                                                <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.duration}</span>
                                                <span className={`flex items-center gap-1.5 ${featured.levelColor}`}>
                                                    <Star size={12} /> {featured.level}
                                                </span>
                                            </div>
                                            <NavLink
                                                to={featured.href}
                                                className="flex items-center gap-1.5 text-xs font-body font-500 text-violet-400 hover:text-violet-300 transition-colors"
                                            >
                                                Démarrer <ChevronRight size={14} />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ──────────────────────────── */}
            <section className="border-y border-white/5 bg-white/[0.02] py-10 px-4">
                <div ref={statsVisible.ref} className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className={`reveal ${statsVisible.visible ? 'visible' : ''} flex items-center gap-4`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <s.icon size={18} className={s.color} />
                                </div>
                                <div>
                                    <div className={`font-serif text-2xl font-700 ${s.color}`}>{s.value}</div>
                                    <div className="text-xs text-slate-500 font-body">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MODULES GRID ───────────────────────── */}
            <section id="modules" className="py-24 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Section header */}
                    <div ref={modulesVisible.ref} className={`reveal ${modulesVisible.visible ? 'visible' : ''} mb-14`}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
                            <span className="text-xs font-body text-slate-500 uppercase tracking-[0.2em]">Curriculum</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
                            <h2 className="font-serif text-4xl md:text-5xl text-white">
                                Les 4 modules<br />
                                <span className="italic text-slate-400">du Playbook</span>
                            </h2>
                            <p className="text-slate-500 text-sm font-body max-w-xs leading-relaxed">
                                Un parcours progressif, du fondamental à l'avancé. Chaque module est autonome et directement applicable.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {modules.map((mod, i) => (
                            <NavLink
                                key={mod.id}
                                to={mod.href}
                                onMouseEnter={() => setHovered(mod.id)}
                                onMouseLeave={() => setHovered(null)}
                                className={`module-card reveal ${modulesVisible.visible ? 'visible' : ''} group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border ${mod.border} ${mod.hover} overflow-hidden cursor-pointer block ${hovered === mod.id ? `shadow-2xl ${mod.glow}` : ''}`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                {/* Big background number */}
                                <div className="absolute -right-4 -top-4 font-serif text-[120px] font-900 number-stroke leading-none pointer-events-none select-none">
                                    {mod.number}
                                </div>

                                {/* Gradient top bar */}
                                <div className={`h-1 w-full bg-gradient-to-r ${mod.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                <div className="p-7 relative">
                                    {/* Icon + number */}
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center shadow-lg`}>
                                            <mod.icon size={20} className="text-white" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-xs font-body font-500 ${mod.levelColor} px-2.5 py-1 rounded-full bg-white/5 border border-white/10`}>
                                                {mod.level}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="mb-5">
                                        <div className="text-xs font-body text-slate-500 uppercase tracking-widest mb-1.5">Module {mod.number}</div>
                                        <h3 className="font-serif text-xl text-white font-700 mb-1 group-hover:text-white transition-colors">
                                            {mod.title}
                                        </h3>
                                        <p className="text-sm font-body italic text-slate-400 mb-3">{mod.tagline}</p>
                                        <p className="text-sm font-body text-slate-500 leading-relaxed">{mod.desc}</p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {mod.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="tag-pill px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-body"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-1.5 text-xs font-body text-slate-500">
                                            <Clock size={12} />
                                            {mod.duration}
                                        </div>
                                        <div className={`flex items-center gap-1.5 text-sm font-body font-500 transition-all duration-300 group-hover:gap-2.5`} style={{ color: mod.accent }}>
                                            Accéder au module
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUOTE BANNER ───────────────────────── */}
            <section className="py-20 px-4 relative overflow-hidden diagonal-line">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-cyan-600/5 to-emerald-600/5" />
                <div className="max-w-3xl mx-auto text-center relative">
                    <div className="text-6xl font-serif text-white/5 mb-2 leading-none">"</div>
                    <blockquote className="font-serif text-2xl md:text-3xl text-white/80 italic leading-relaxed mb-6">
                        Les gens n'achètent pas ce que vous faites,<br className="hidden md:block" />
                        ils achètent <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">pourquoi</span> vous le faites.
                    </blockquote>
                    <cite className="text-slate-500 text-sm font-body not-italic">— Simon Sinek · Start With Why</cite>
                </div>
            </section>

            {/* ── CTA FINAL ──────────────────────────── */}
            <section className="py-24 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-body uppercase tracking-wider mb-8">
                        <Flame size={13} />
                        Prêt à convertir ?
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Démarrez avec<br />
                        <span className="italic text-slate-400">le module 01</span>
                    </h2>
                    <p className="text-slate-500 font-body leading-relaxed mb-10">
                        Commencez par maîtriser les techniques de conversion fondamentales. 45 minutes suffisent pour transformer votre approche commerciale.
                    </p>
                    <NavLink
                        to="/growth/conversion"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl text-white font-body font-500 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <BookOpen size={18} />
                        Techniques de Conversion → Module 01
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                </div>
            </section>
        </div>
    );
}