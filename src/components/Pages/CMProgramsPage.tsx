import { useEffect } from 'react';
import { ArrowRight, Calendar, Cloud, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ─── Data ───────────────────────────────────────────────────────────────────

interface Program {
  badgeKey: string;
  badgeEmoji: string;
  name: string;
  desc: string;
  scheduleLines: string[];
  highlight: string;
  tier: 'starter' | 'growth' | 'pro' | 'elite' | 'empire';
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const tierStyles: Record<string, { badge: React.CSSProperties; card: React.CSSProperties; highlight: React.CSSProperties; highlightText: React.CSSProperties }> = {
  starter: {
    badge: { background: 'hsl(var(--secondary))', color: 'hsl(var(--muted-foreground))' },
    card: { background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' },
    highlight: { background: 'rgba(9,169,227,0.12)' },
    highlightText: { color: '#09A9E3' },
  },
  growth: {
    badge: { background: 'rgba(80,188,116,0.15)', color: '#50BC74' },
    card: { background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' },
    highlight: { background: 'rgba(9,169,227,0.12)' },
    highlightText: { color: '#09A9E3' },
  },
  pro: {
    badge: { background: 'rgba(9,169,227,0.15)', color: '#09A9E3' },
    card: { background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' },
    highlight: { background: 'rgba(9,169,227,0.12)' },
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
  const { t } = useTranslation();
  const s = tierStyles[program.tier];
  const isPremium = program.tier === 'elite' || program.tier === 'empire';
  const textColor = isPremium ? '#ffffff' : 'hsl(var(--foreground))';
  const mutedColor = isPremium ? 'rgba(255,255,255,0.6)' : 'hsl(var(--muted-foreground))';
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
          style={{ background: '#09A9E3' }}>{t('programs.premiumLabel')}</div>
      )}
      {program.tier === 'empire' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ background: '#FF8C42' }}>{t('programs.masteryLabel')}</div>
      )}

      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold" style={s.badge}>
          {program.badgeEmoji} {t(`programs.tiers.${program.badgeKey}`).toUpperCase()}
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
          {t('programs.register')}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CMProgramsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const presentialPrograms: Program[] = [
    {
      badgeKey: 'starter', badgeEmoji: '🥉',
      name: t('programs.list.presential.start.name'),
      desc: t('programs.list.presential.start.desc'),
      scheduleLines: t('programs.list.presential.start.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.presential.start.highlight'),
      tier: 'starter',
    },
    {
      badgeKey: 'growth', badgeEmoji: '🥈',
      name: t('programs.list.presential.boost.name'),
      desc: t('programs.list.presential.boost.desc'),
      scheduleLines: t('programs.list.presential.boost.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.presential.boost.highlight'),
      tier: 'growth',
    },
    {
      badgeKey: 'pro', badgeEmoji: '🥇',
      name: t('programs.list.presential.pro.name'),
      desc: t('programs.list.presential.pro.desc'),
      scheduleLines: t('programs.list.presential.pro.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.presential.pro.highlight'),
      tier: 'pro',
    },
    {
      badgeKey: 'elite', badgeEmoji: '💎',
      name: t('programs.list.presential.elite.name'),
      desc: t('programs.list.presential.elite.desc'),
      scheduleLines: t('programs.list.presential.elite.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.presential.elite.highlight'),
      tier: 'elite',
    },
    {
      badgeKey: 'empire', badgeEmoji: '👑',
      name: t('programs.list.presential.empire.name'),
      desc: t('programs.list.presential.empire.desc'),
      scheduleLines: t('programs.list.presential.empire.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.presential.empire.highlight'),
      tier: 'empire',
    },
  ];

  const onlinePrograms: Program[] = [
    {
      badgeKey: 'starter', badgeEmoji: '🥉',
      name: t('programs.list.online.start.name'),
      desc: t('programs.list.online.start.desc'),
      scheduleLines: t('programs.list.online.start.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.online.start.highlight'),
      tier: 'starter',
    },
    {
      badgeKey: 'growth', badgeEmoji: '🥈',
      name: t('programs.list.online.boost.name'),
      desc: t('programs.list.online.boost.desc'),
      scheduleLines: t('programs.list.online.boost.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.online.boost.highlight'),
      tier: 'growth',
    },
    {
      badgeKey: 'pro', badgeEmoji: '🥇',
      name: t('programs.list.online.pro.name'),
      desc: t('programs.list.online.pro.desc'),
      scheduleLines: t('programs.list.online.pro.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.online.pro.highlight'),
      tier: 'pro',
    },
    {
      badgeKey: 'elite', badgeEmoji: '💎',
      name: t('programs.list.online.elite.name'),
      desc: t('programs.list.online.elite.desc'),
      scheduleLines: t('programs.list.online.elite.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.online.elite.highlight'),
      tier: 'elite',
    },
    {
      badgeKey: 'empire', badgeEmoji: '👑',
      name: t('programs.list.online.empire.name'),
      desc: t('programs.list.online.empire.desc'),
      scheduleLines: t('programs.list.online.empire.scheduleLines', { returnObjects: true }) as string[],
      highlight: t('programs.list.online.empire.highlight'),
      tier: 'empire',
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── Hero ── */}
      <section
        className="relative py-28 px-4 overflow-hidden bg-background"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(9,169,227,0.12) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/30">
            {t('programs.educationPerformance')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight text-foreground font-display">
            {t('programs.heroTitle')}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('programs.heroSubtitle')}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
          >
            🚀 {t('programs.chooseProgram')}
          </button>
        </div>
      </section>

      {/* ── Presential Programs ── */}
      <section id="in-person" className="py-20 px-4 max-w-[1400px] mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Award size={28} style={{ color: '#FF8C42' }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-foreground font-display">
              {t('programs.presentialTitle')}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            {t('programs.presentialSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {presentialPrograms.map((p) => (
            <ProgramCard key={p.name} program={p} />
          ))}
        </div>
      </section>

      {/* ── Online Programs ── */}
      <section className="py-20 px-4 bg-card/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Globe size={28} style={{ color: '#09A9E3' }} />
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-foreground font-display">
                  {t('programs.onlineTitle')}
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl">
                {t('programs.onlineSubtitle')}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-primary/10 text-primary">
                <Cloud size={14} /> {t('programs.online100')}
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-accent/10 text-accent">
                ⏰ {t('programs.flexibleAccess')}
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
              {t('programs.ctaTitle')}
            </h2>
            <p className="text-lg mb-10 opacity-80 max-w-xl mx-auto">
              {t('programs.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/preselection')}
                className="px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all active:scale-95 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)', color: '#ffffff' }}
              >
                {t('programs.talkToExpert')}
              </button>
              <button
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:bg-white/10"
              >
                {t('programs.downloadBrochure')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
