import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Video, Laptop } from 'lucide-react';
import Img from '../constants/img';

type PartnerKey = 'ifpit' | 'pixiris' | 'freetech';

interface Partner {
  key: PartnerKey;
  logo: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  glow: string;
  logoClass: string;
}

const partners: Partner[] = [
  {
    key: 'ifpit',
    logo: Img.partnerIfpit,
    Icon: GraduationCap,
    glow: 'radial-gradient(circle at center, rgba(37,99,235,0.35), transparent 65%)',
    logoClass: 'max-h-24 md:max-h-28',
  },
  {
    key: 'pixiris',
    logo: Img.partnerPixiris,
    Icon: Video,
    glow: 'radial-gradient(circle at center, rgba(20,184,166,0.35), transparent 65%)',
    logoClass: 'max-h-32 md:max-h-40',
  },
  {
    key: 'freetech',
    logo: Img.partnerFreetech,
    Icon: Laptop,
    glow: 'radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 65%)',
    logoClass: 'max-h-32 md:max-h-40',
  },
];

export default function Ecosystem() {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-background">
      {/* ── Grain texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header (épuré, centré) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-foreground/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('ecosystem.eyebrow')}
            </span>
            <div className="h-px w-8 bg-foreground/30" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.02] tracking-[-0.02em]">
            {t('ecosystem.title')}{' '}
            <span className="italic font-light bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              {t('ecosystem.titleHighlight')}
            </span>
          </h2>

          <p className="mt-7 text-base md:text-[17px] text-muted-foreground leading-relaxed">
            {t('ecosystem.subtitle')}
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {partners.map(({ key, logo, Icon, glow, logoClass }, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Gradient border wrapper */}
              <div className="absolute -inset-px rounded-[24px] bg-gradient-to-b from-foreground/[0.08] to-transparent group-hover:from-foreground/25 transition-all duration-500" />

              {/* Card body */}
              <div className="relative h-full rounded-[23px] bg-card overflow-hidden">
                {/* Aurora background (always subtle, brighter on hover) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
                  style={{ background: glow }}
                />

                {/* Content */}
                <div className="relative flex flex-col h-full p-8 md:p-10">
                  {/* ── LOGO HERO (grand format, mis en valeur) ── */}
                  <div className="relative flex items-center justify-center h-40 md:h-48 mb-8">
                    {/* Backdrop plate for logo prominence */}
                    <div className="absolute inset-x-4 inset-y-2 rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 group-hover:border-border transition-all duration-500 group-hover:scale-[1.02]" />

                    <img
                      src={logo}
                      alt={t(`ecosystem.partners.${key}.name`)}
                      className={`relative ${logoClass} w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>

                  {/* Role badge */}
                  <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 mb-4 rounded-full bg-secondary/70 border border-border/60 backdrop-blur-sm">
                    <Icon size={11} className="text-muted-foreground" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(`ecosystem.partners.${key}.role`)}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-[22px] font-semibold text-foreground tracking-[-0.01em] leading-tight">
                    {t(`ecosystem.partners.${key}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {t(`ecosystem.partners.${key}.desc`)}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-7 h-px w-full bg-border overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
