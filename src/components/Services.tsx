import { Target, Palette, TrendingUp, Megaphone, Zap, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Stratégie Digitale',
      subtitle: 'Audit & Positionnement de marque',
      description: 'Analyse complète des réseaux, des concurrents et du ton de marque pour construire une stratégie gagnante.',
      color: 'from-blue-600 to-blue-400',
      features: ['Audit complet', 'Positionnement unique', 'Roadmap stratégique']
    },
    {
      icon: Palette,
      title: 'Création de Contenu',
      subtitle: 'Gestion & Storytelling visuel',
      description: 'Création de visuels, vidéos et textes captivants qui construisent une identité forte et mémorable.',
      color: 'from-emerald-600 to-emerald-400',
      features: ['Design créatif', 'Vidéos engageantes', 'Copywriting percutant']
    },
    {
      icon: TrendingUp,
      title: 'Croissance & Engagement',
      subtitle: "Campagnes d'influence",
      description: "Développement d'une audience fidèle, active et qualifiée qui transforme votre marque en communauté.",
      color: 'from-blue-500 to-emerald-500',
      features: ['Growth hacking', 'Community building', 'Engagement authentique']
    },
    {
      icon: Megaphone,
      title: 'Publicité Sociale',
      subtitle: 'Meta Ads, TikTok, LinkedIn',
      description: 'Optimisation des campagnes publicitaires pour maximiser la portée et les conversions avec un ROI optimal.',
      color: 'from-emerald-500 to-blue-500',
      features: ['Ciblage précis', 'Optimisation ROI', 'A/B testing avancé']
    },
    {
      icon: Zap,
      title: 'Automatisation & Performance',
      subtitle: 'Veille concurrentielle',
      description: "Mise en place d'outils de reporting, d'alertes et de publication automatique pour gagner en efficacité.",
      color: 'from-blue-400 to-emerald-600',
      features: ['Reporting automatisé', 'Veille en temps réel', 'Optimisation continue']
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Services & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Offres Premium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des solutions complètes pour transformer votre présence digitale en machine de croissance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-emerald-400 mb-4 font-medium">{service.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <a href="#contact" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-lg"
          >
            Réserver une session stratégie gratuite
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
