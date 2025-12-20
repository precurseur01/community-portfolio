import { Target, Palette, TrendingUp, Megaphone, Zap, ArrowRight, Code, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


// Définition du type pour un service
interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleKey: string;
  subtitleKey?: string;
  descriptionKey: string;
  color: string;
  featuresKeys?: string[];
  priceKey?: string;
  priceRangeKey?: string;
}


export default function Services() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleLearnMore = (service: Service, index: number) => {
    // Service Formation (service7) → route interne
    if (service.titleKey === 'services.service7.title') {
      navigate('/formation');
      return;
    }

    // Dernier service (index 5) → lien externe
    if (index === 5) {
      window.open('https://www.freedry.dev/', '_blank');
      return;
    }

    // Cas général → scroll vers contact
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }

  const services = [
    {
      icon: Target,
      titleKey: 'services.service1.title',
      subtitleKey: 'services.service1.subtitle',
      descriptionKey: 'services.service1.description',
      color: 'from-blue-600 to-blue-400',
      featuresKeys: [
        'services.service1.features.feature1',
        'services.service1.features.feature2',
        'services.service1.features.feature3'
      ],
      priceKey: 'services.service1.price',
      priceRangeKey: 'services.service1.priceRange'
    },
    {
      icon: Palette,
      titleKey: 'services.service2.title',
      subtitleKey: 'services.service2.subtitle',
      descriptionKey: 'services.service2.description',
      color: 'from-emerald-600 to-emerald-400',
      featuresKeys: [
        'services.service2.features.feature1',
        'services.service2.features.feature2',
        'services.service2.features.feature3'
      ],
      priceKey: 'services.service2.price',
      priceRangeKey: 'services.service2.priceRange'
    },
    {
      icon: TrendingUp,
      titleKey: 'services.service3.title',
      subtitleKey: 'services.service3.subtitle',
      descriptionKey: 'services.service3.description',
      color: 'from-blue-500 to-emerald-500',
      featuresKeys: [
        'services.service3.features.feature1',
        'services.service3.features.feature2',
        'services.service3.features.feature3'
      ],
      priceKey: 'services.service3.price',
      priceRangeKey: 'services.service3.priceRange'
    },
    {
      icon: Megaphone,
      titleKey: 'services.service4.title',
      subtitleKey: 'services.service4.subtitle',
      descriptionKey: 'services.service4.description',
      color: 'from-emerald-500 to-blue-500',
      featuresKeys: [
        'services.service4.features.feature1',
        'services.service4.features.feature2',
        'services.service4.features.feature3'
      ],
      priceKey: 'services.service4.price',
      priceRangeKey: 'services.service4.priceRange'
    },
    {
      icon: Zap,
      titleKey: 'services.service5.title',
      subtitleKey: 'services.service5.subtitle',
      descriptionKey: 'services.service5.description',
      color: 'from-blue-400 to-emerald-600',
      featuresKeys: [
        'services.service5.features.feature1',
        'services.service5.features.feature2',
        'services.service5.features.feature3'
      ],
      priceKey: 'services.service5.price',
      priceRangeKey: 'services.service5.priceRange'
    },
    {
      icon: Code,
      titleKey: 'services.service6.title',
      subtitleKey: 'services.service6.subtitle',
      descriptionKey: 'services.service6.description',
      color: 'from-violet-600 to-blue-500',
      featuresKeys: [
        'services.service6.features.feature1',
        'services.service6.features.feature2',
        'services.service6.features.feature3'
      ],
      priceKey: 'services.service6.price',
      priceRangeKey: 'services.service6.priceRange'
    },
    {
      icon: GraduationCap,
      titleKey: 'services.service7.title',
      subtitleKey: 'services.service7.subtitle',
      descriptionKey: 'services.service7.description',
      color: 'from-blue-600 to-emerald-500',
      featuresKeys: [
        'services.service7.features.feature1',
        'services.service7.features.feature2',
        'services.service7.features.feature3'
      ],
      priceKey: 'services.service7.price',
      priceRangeKey: 'services.service7.priceRange'
    }
  ];


  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('services.titlePrefix')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {t('services.titleGradient')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('services.description')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={
                  "group backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl " +
                  (index === 5
                    ? "bg-gradient-to-br from-violet-700/30 to-blue-700/20 hover:bg-gradient-to-br hover:from-violet-600/40 hover:to-blue-600/30"
                    : "bg-white/5 hover:bg-white/10")
                }
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{t(service.titleKey)}</h3>
                <p className="text-sm text-emerald-400 mb-4 font-medium">{t(service.subtitleKey)}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{t(service.descriptionKey)}</p>

                <ul className="space-y-2 mb-6">
                  {service.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <button

                    onClick={(e) => {
                      e.preventDefault();
                      handleLearnMore(service, index);
                    }}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    {t('services.learnMore')}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-lg"
          >
            {t('services.cta')}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
