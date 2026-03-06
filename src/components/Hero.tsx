import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TrainingAnnouncement from './Pages/TrainingAnnouncement';
import AnimatedBadge from './animation/AnimatedBadge';
import Img from '../constants/img';


export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-16"
    >
      {/* Image Background */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${Img.bg3})` }}
      ></div>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient coloré léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-emerald-600/10 to-transparent"></div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

        <TrainingAnnouncement />

        <div
          className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >

          <AnimatedBadge t={t} />

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.headingPrefix')}{' '}
            <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              {t('hero.headingGradient')}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.descriptionMiddle')}{' '}
            <span className="text-emerald-400">{t('hero.descriptionStrong')}</span>,{' '}
            <span className="text-blue-400">{t('hero.descriptionHuman')}</span> et{' '}
            <span className="text-white">{t('hero.descriptionHigh')}</span>{' '}
            {t('hero.descriptionSuffix')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/services"
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}