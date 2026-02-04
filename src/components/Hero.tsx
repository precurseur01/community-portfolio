import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TrainingAnnouncement from './Pages/TrainingAnnouncement';

export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-16">
      {/* Background dégradé + formes floues */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-emerald-600/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

        {/* ⚡ Bandeau annonce formation */}

        <TrainingAnnouncement />

        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge rôle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="text-emerald-400" />
            <span className="text-md text-gray-300">{t('hero.role')}</span>
          </div>

          {/* Heading avec gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.headingPrefix')}{' '}
            <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              {t('hero.headingGradient')}
            </span>
          </h1>

          {/* Description avec couleurs */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.descriptionMiddle')}{' '}
            <span className="text-emerald-400">{t('hero.descriptionStrong')}</span>,{' '}
            <span className="text-blue-400">{t('hero.descriptionHuman')}</span> et{' '}
            <span className="text-white">{t('hero.descriptionHigh')}</span> {t('hero.descriptionSuffix')}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              {t('hero.cta.services')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">+30</div>
              <div className="text-sm text-gray-400">{t('hero.stats.brands')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">+200K</div>
              <div className="text-sm text-gray-400">{t('hero.stats.followers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">+320%</div>
              <div className="text-sm text-gray-400">{t('hero.stats.engagement')}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
