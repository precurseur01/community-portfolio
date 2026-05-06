import { useEffect } from 'react';
import { ArrowRight, Calendar, Cloud, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─── Data ───────────────────────────────────────────────────────────────────

interface Program {
  badge: string;
  badgeEmoji: string;
  name: string;
  desc: string;
  scheduleLines: string[];
  highlight: string;
  tier: 'starter' | 'growth' | 'pro' | 'elite' | 'empire';
}

const presentialPrograms: Program[] = [
  {
    badge: 'Starter', badgeEmoji: '🥉',
    name: 'Free Start Digital',
    desc: 'Formation complète pour apprendre en profondeur, étape par étape. (Durée: 3 mois)',
    scheduleLines: ['Mer & Sam: 09h-12h | 13h-16h', 'Rythme: 12h / semaine'],
    highlight: '110 000 FCFA',
    tier: 'starter',
  },
  {
    badge: 'Growth', badgeEmoji: '🥈',
    name: 'Free Boost Digital (Soir)',
    desc: 'Idéal pour obtenir des résultats rapidement avec un rythme intensif. (Durée: 2 mois)',
    scheduleLines: ['Mer & Sam: 17h00 - 20h00', 'Rythme: 6h / semaine'],
    highlight: '150 000 FCFA',
    tier: 'growth',
  },
  {
    badge: 'Professional', badgeEmoji: '🥇',
    name: 'Free Pro',
    desc: 'Maîtrise complète du métier, du planning éditorial aux outils d\'automatisation.',
    scheduleLines: ['Lun-Mer 9h-12h | 14h-18h', 'Jeu-Ven 9h-12h | 14h-18h'],
    highlight: '35h / semaine',
    tier: 'pro',
  },
  {
    badge: 'Elite', badgeEmoji: '💎',
    name: 'Free Elite',
    desc: 'Performance avancée, publicité payante et monétisation de communauté.',
    scheduleLines: ['Lun-Ven 9h-13h | 14h-18h', 'Sam 10h-13h | Coaching 1:1'],
    highlight: '40h / semaine',
    tier: 'elite',
  },
  {
    badge: 'Empire', badgeEmoji: '👑',
    name: 'Free Empire',
    desc: 'Expertise ultime, gestion d\'agence et passage à l\'échelle business.',
    scheduleLines: ['Accès VIP 24h/24 | 7j/7', 'Session Stratégie Mensuelle'],
    highlight: 'Accès VIP 24/7',
    tier: 'empire',
  },
];

const onlinePrograms: Program[] = [
  {
    badge: 'Starter', badgeEmoji: '🥉',
    name: 'Free Start Online',
    desc: 'Bases en ligne à votre rythme.',
    scheduleLines: ['Lun 9h-12h | 13h-16h', 'Mar 9h-12h | 13h-16h'],
    highlight: 'Libre accès',
    tier: 'starter',
  },
  {
    badge: 'Growth', badgeEmoji: '🥈',
    name: 'Free Boost Digital (En ligne)',
    desc: 'Même programme accéléré, accessible partout. (Durée: 2 mois)',
    scheduleLines: ['Lun, Mar, Jeu: 19h00 - 21h00', 'Rythme: 6h / semaine'],
    highlight: '150 000 FCFA',
    tier: 'growth',
  },
  {
    badge: 'Pro', badgeEmoji: '🥇',
    name: 'Free Pro Online',
    desc: 'Maîtrise complète en ligne avec mentor.',
    scheduleLines: ['Lun 17h (Coaching)', 'Ven 16h (Review)'],
    highlight: 'Mentor dédié',
    tier: 'pro',
  },
  {
    badge: 'Elite', badgeEmoji: '💎',
    name: 'Free Elite Online',
    desc: 'Performance avancée avec mastermind privé.',
    scheduleLines: ['Mer 19h (Masterclass)', 'Sam 11h (Q&A Session)'],
    highlight: 'Mastermind Privé',
    tier: 'elite',
  },
  {
    badge: 'Empire', badgeEmoji: '👑',
    name: 'Free Empire Online',
    desc: 'Expertise ultime avec consulting mensuel.',
    scheduleLines: ['Accès VIP 24h/24 | 7j/7', 'Consulting 1:1 Planifié'],
    highlight: 'Consulting Mensuel',
    tier: 'empire',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const tierStyles: Record<string, { badge: React.CSSProperties; card: React.CSSProperties; highlight: React.CSSProperties; highlightText: React.CSSProperties }> = {
  starter: {
    badge: { background: '#f1f5f9', color: '#475569' },
    card: { background: '#ffffff', border: '1px solid #e8edf5' },
    highlight: { background: '#e6f7fd' },
    highlightText: { color: '#09A9E3' },
  },
  growth: {
    badge: { background: '#e8f5f1', color: '#0B3C5D' },
    card: { background: '#ffffff', border: '1px solid #e8edf5' },
    highlight: { background: '#e6f7fd' },
    highlightText: { color: '#09A9E3' },
  },
  pro: {
    badge: { background: '#e6f7fd', color: '#09A9E3' },
    card: { background: '#ffffff', border: '1px solid #e8edf5' },
    highlight: { background: '#e6f7fd' },
    highlightText: { color: '#09A9E3' },
  },
  elite: {
    badge: { background: '#09A9E3', color: '#ffffff' },
    card: { background: '#0B3C5D', border: '2px solid rgba(9,169,227,0.3)' },
    highlight: { background: 'rgba(255,255,255,0.12)' },
    highlightText: { color: '#A8E6CF' },
  },
  empire: {
    badge: { background: '#FF8C42', color: '#ffffff' },
    card: { background: '#0B3C5D', border: '2px solid rgba(255,140,66,0.4)' },
    highlight: { background: 'rgba(255,255,255,0.12)' },
    highlightText: { color: '#FF8C42' },
  },
};

function ProgramCard({ program, compact = false, icon }: { program: Program; compact?: boolean; icon?: React.ReactNode }) {
  const s = tierStyles[program.tier];
  const isPremium = program.tier === 'elite' || program.tier === 'empire';
  const textColor = isPremium ? '#ffffff' : '#0B3C5D';
  const mutedColor = isPremium ? 'rgba(255,255,255,0.6)' : '#64748b';
  const navigate = useNavigate();

  return (
    <div
      className="group flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
      style={{
        ...s.card,
        boxShadow: isPremium ? '0 8px 32px rgba(11,60,93,0.4)' : '0 4px 16px rgba(11,60,93,0.05)',
      }}
    >
      {/* Premium crown label */}
      {program.tier === 'elite' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ background: '#09A9E3' }}>Premium</div>
      )}
      {program.tier === 'empire' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ background: '#FF8C42' }}>Mastery</div>
      )}

      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold" style={s.badge}>
          {program.badgeEmoji} {program.badge.toUpperCase()}
        </span>
        {icon && <span className="opacity-60">{icon}</span>}
      </div>

      <h3
        className={`font-bold mb-2 ${compact ? 'text-base' : 'text-xl'}`}
        style={{ color: textColor, fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {program.name}
      </h3>
      <p className={`mb-4 leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: mutedColor }}>
        {program.desc}
      </p>

      <div className="mt-auto space-y-3">
        {/* Schedule */}
        <div className="flex items-start gap-2">
          <Calendar size={compact ? 14 : 16} style={{ color: isPremium ? '#A8E6CF' : '#09A9E3', flexShrink: 0, marginTop: 2 }} />
          <div className={`font-medium leading-snug ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: isPremium ? 'rgba(255,255,255,0.8)' : '#09A9E3' }}>
            {program.scheduleLines.map((l, i) => <p key={i}>{l}</p>)}
          </div>
        </div>

        {/* Highlight pill */}
        <div className="rounded-xl py-2.5 text-center" style={s.highlight}>
          <span className={`font-bold ${compact ? 'text-sm' : 'text-base'}`} style={s.highlightText}>
            {program.highlight}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/preselection')}
          className="w-full py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 hover:opacity-90 flex items-center justify-center gap-1.5"
          style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)', color: '#ffffff' }}
        >
          S'inscrire
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CMProgramsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#f8faff', fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero ── */}
      <section
        className="relative py-28 px-4 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 40%, #fff8f3 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(9,169,227,0.12) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: '#e6f7fd', color: '#09A9E3', border: '1px solid #b3e6f7' }}>
            Éducation de Performance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight"
            style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
            Choisis ton niveau et deviens{' '}
            <span style={{ color: '#09A9E3' }}>Community Manager professionnel</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Des programmes adaptés à tous les niveaux, du débutant à l'expert, pour transformer votre carrière dans le digital.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
          >
            🚀 Je choisis mon programme
          </button>
        </div>
      </section>

      {/* ── Presential Programs ── */}
      <section id="in-person" className="py-20 px-4 max-w-[1400px] mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Award size={28} style={{ color: '#FF8C42' }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide"
              style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
              Programmes Présentiels
            </h2>
          </div>
          <p className="text-gray-500 max-w-xl">
            L'immersion totale avec nos coachs experts pour une montée en compétences accélérée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {presentialPrograms.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </div>
      </section>

      {/* ── Online Programs ── */}
      <section className="py-20 px-4" style={{ background: '#f1f5f9' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Globe size={28} style={{ color: '#09A9E3' }} />
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide"
                  style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
                  Programmes Online
                </h2>
              </div>
              <p className="text-gray-500 max-w-xl">
                La flexibilité totale pour apprendre à votre rythme, où que vous soyez.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg"
                style={{ background: '#e6f7fd', color: '#09A9E3' }}>
                <Cloud size={14} /> 100% en ligne
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg"
                style={{ background: '#e8f5f1', color: '#50BC74' }}>
                ⏰ Accès flexible
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {onlinePrograms.map((p) => (
              <ProgramCard key={p.name} program={p} compact icon={<Cloud size={16} style={{ color: '#09A9E3' }} />} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0B3C5D 0%, #09A9E3 100%)' }}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ background: '#ffffff' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
            style={{ background: '#FF8C42' }} />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Prêt à transformer votre avenir digital ?
            </h2>
            <p className="text-lg mb-10 opacity-80 max-w-xl mx-auto">
              Nos conseillers vous accompagnent pour choisir la formation qui correspond le mieux à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/preselection')}
                className="px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all active:scale-95 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)', color: '#ffffff' }}
              >
                Parler à un expert
              </button>
              <button
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:bg-white/10"
              >
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
