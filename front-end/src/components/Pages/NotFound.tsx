import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Compass, Zap } from "lucide-react";
import Img from "../../constants/img";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#3b82f6' : '#ffffff22',
}));

const SUGGESTIONS = [
    { label: 'Accueil', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Zap },
    { label: 'Growth Playbook', href: '/growth', icon: Compass },
    { label: 'Contact', href: '/contact', icon: ArrowLeft },
];

export default function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    const [glitch, setGlitch] = useState(false);
    const [counter, setCounter] = useState(10);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.error("404 — Route inexistante :", location.pathname);
        setMounted(true);

        // Glitch effect toutes les 3s
        const glitchInterval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 300);
        }, 3000);

        // Compte à rebours
        const tick = setInterval(() => {
            setCounter((c) => {
                if (c <= 1) {
                    clearInterval(tick);
                    navigate('/');
                    return 0;
                }
                return c - 1;
            });
        }, 1000);

        return () => {
            clearInterval(glitchInterval);
            clearInterval(tick);
        };
    }, [location.pathname, navigate]);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex flex-col items-center justify-center font-sans">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        .font-mono-display { font-family: 'Space Mono', monospace; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        /* ── GRID bg ── */
        .grid-bg {
          background-image:
            linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── GLITCH ── */
        .glitch { position: relative; display: inline-block; }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          clip-path: polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
        }
        .glitch.active::before {
          animation: glitch-1 0.3s steps(2) forwards;
          color: #10b981;
          left: -3px;
        }
        .glitch.active::after {
          animation: glitch-2 0.3s steps(2) forwards;
          color: #3b82f6;
          left: 3px;
          clip-path: polygon(0 55%, 100% 55%, 100% 80%, 0 80%);
        }
        @keyframes glitch-1 {
          0%   { transform: translateX(-4px) skewX(-2deg); opacity: 0.9; }
          50%  { transform: translateX(4px)  skewX(2deg);  opacity: 0.7; }
          100% { transform: translateX(0);                 opacity: 0; }
        }
        @keyframes glitch-2 {
          0%   { transform: translateX(4px)  skewX(2deg);  opacity: 0.9; }
          50%  { transform: translateX(-4px) skewX(-2deg); opacity: 0.7; }
          100% { transform: translateX(0);                 opacity: 0; }
        }

        /* ── SCAN LINE ── */
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
        }

        /* ── FLOAT PARTICLES ── */
        @keyframes float-particle {
          0%   { transform: translateY(0px)   rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
        }

        /* ── REVEAL ── */
        .reveal-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── PROGRESS BAR ── */
        .progress-bar {
          animation: shrink linear forwards;
        }
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }

        /* ── ORBIT ── */
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        .orbit-dot {
          animation: orbit 8s linear infinite;
        }
        .orbit-dot-2 {
          animation: orbit 12s linear infinite reverse;
        }

        /* ── PULSE RING ── */
        @keyframes pulse-ring {
          0%   { transform: scale(0.9); opacity: 0.6; }
          50%  { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        .pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }

        /* ── NAV CARD HOVER ── */
        .nav-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nav-card:hover {
          transform: translateY(-4px) scale(1.02);
        }

        /* ── COUNTER PULSE ── */
        @keyframes counter-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .counter-pulse { animation: counter-pulse 1s ease-in-out infinite; }
      `}</style>

            {/* ── Background grid ── */}
            <div className="absolute inset-0 grid-bg" />

            {/* ── Ambient blobs ── */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-600/8 blur-[120px]" />

            {/* ── Floating particles ── */}
            {PARTICLES.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        animation: `float-particle ${p.duration}s ${p.delay}s ease-in-out infinite`,
                    }}
                />
            ))}

            {/* ── Logo top ── */}
            <div className={`absolute top-8 left-1/2 -translate-x-1/2 z-20 reveal-up ${mounted ? 'visible' : ''}`}>
                <a href="/">
                    <img
                        src={Img.whitelogo}
                        alt="Free Technology"
                        className="max-h-[48px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                </a>
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">

                {/* Orbit decoration around 404 */}
                <div className="relative flex items-center justify-center mb-8">

                    {/* Pulse rings */}
                    <div className="absolute w-64 h-64 rounded-full border border-emerald-500/10 pulse-ring" />
                    <div className="absolute w-48 h-48 rounded-full border border-blue-500/10 pulse-ring" style={{ animationDelay: '1s' }} />

                    {/* Orbit dots */}
                    <div className="absolute w-0 h-0 flex items-center justify-center">
                        <div className="orbit-dot w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="absolute w-0 h-0 flex items-center justify-center">
                        <div className="orbit-dot-2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>

                    {/* 404 Number — GLITCH HERO */}
                    <div className="scanlines relative">
                        <h1
                            data-text="404"
                            className={`glitch ${glitch ? 'active' : ''} font-mono-display font-700 text-[10rem] sm:text-[14rem] leading-none select-none`}
                            style={{
                                background: 'linear-gradient(135deg, #fff 0%, #94a3b8 40%, #10b981 70%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 40px rgba(16,185,129,0.2))',
                            }}
                        >
                            404
                        </h1>
                    </div>
                </div>

                {/* Path badge */}
                <div className={`reveal-up ${mounted ? 'visible' : ''} mb-5`} style={{ transitionDelay: '0.1s' }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono-display text-xs text-slate-500">
                        <span className="text-red-400">✗</span>
                        <span className="text-slate-600 truncate max-w-[240px]">{location.pathname}</span>
                        <span className="text-slate-600">→ introuvable</span>
                    </div>
                </div>

                {/* Title */}
                <h2
                    className={`reveal-up ${mounted ? 'visible' : ''} font-body font-500 text-2xl sm:text-3xl text-white mb-3`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    Cette page s'est{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        perdue dans le digital.
                    </span>
                </h2>

                {/* Subtitle */}
                <p
                    className={`reveal-up ${mounted ? 'visible' : ''} font-body text-slate-400 text-base leading-relaxed mb-10 max-w-md`}
                    style={{ transitionDelay: '0.3s' }}
                >
                    La page que vous cherchez n'existe pas ou a été déplacée. Retournez sur le bon chemin.
                </p>

                {/* Navigation cards */}
                <div
                    className={`reveal-up ${mounted ? 'visible' : ''} grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-10`}
                    style={{ transitionDelay: '0.4s' }}
                >
                    {SUGGESTIONS.map((s) => (
                        <a
                            key={s.href}
                            href={s.href}
                            className="nav-card group flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30"
                        >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-white/10 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-emerald-600/30 transition-all">
                                <s.icon size={16} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            </div>
                            <span className="font-body text-xs text-slate-400 group-hover:text-white transition-colors">{s.label}</span>
                        </a>
                    ))}
                </div>

                {/* Auto-redirect countdown */}
                <div
                    className={`reveal-up ${mounted ? 'visible' : ''} w-full max-w-xs`}
                    style={{ transitionDelay: '0.5s' }}
                >
                    <div className="flex items-center justify-between mb-2 font-body text-xs text-slate-600">
                        <span>Redirection automatique vers l'accueil</span>
                        <span className={`counter-pulse font-mono-display text-emerald-400 font-700`}>{counter}s</span>
                    </div>
                    <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full progress-bar"
                            style={{ animationDuration: '10s' }}
                        />
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 font-body font-500 text-white text-sm hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Retourner à l'accueil maintenant →
                    </button>
                </div>
            </div>

            {/* ── Bottom brand signature ── */}
            <div className={`absolute bottom-6 font-mono-display text-xs text-slate-700 reveal-up ${mounted ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                FREE DIGITAL SOLUTIONS · ERROR_404 · {new Date().getFullYear()}
            </div>

        </div>
    );
}