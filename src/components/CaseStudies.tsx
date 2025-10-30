import { TrendingUp, Users, BarChart3, Quote } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Lancement de marque tech sur Instagram',
      category: 'Tech Startup',
      challenge: 'Construire une présence digitale de zéro',
      strategy: 'Stratégie de contenu éducatif + collaborations ciblées + storytelling authentique',
      results: [
        { label: 'Abonnés', value: '+5000', period: 'en 3 mois', icon: Users },
        { label: 'Taux d\'engagement', value: '8.2%', period: 'moyenne', icon: TrendingUp },
        { label: 'Reach mensuel', value: '150K', period: 'impressions', icon: BarChart3 },
      ],
      quote: 'Yndris a transformé notre vision en une communauté engagée. Son approche stratégique a dépassé toutes nos attentes.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Campagne d\'engagement LinkedIn B2B',
      category: 'Agence Marketing',
      challenge: 'Améliorer la visibilité et générer des leads qualifiés',
      strategy: 'Thought leadership + contenu premium + engagement actif avec décideurs',
      results: [
        { label: 'Interactions', value: '+320%', period: 'vs période précédente', icon: TrendingUp },
        { label: 'Leads qualifiés', value: '47', period: 'par mois', icon: Users },
        { label: 'Taux de conversion', value: '12%', period: 'leads to clients', icon: BarChart3 },
      ],
      quote: 'Une expertise rare en B2B. Les résultats parlent d\'eux-mêmes.',
      color: 'from-emerald-600 to-emerald-400'
    },
    {
      title: 'Refonte stratégique de communication',
      category: 'E-commerce Mode',
      challenge: 'Revitaliser une marque dormante sur les réseaux sociaux',
      strategy: 'Repositionnement complet + UGC strategy + campagnes créatives multi-plateformes',
      results: [
        { label: 'Trafic social', value: '+70%', period: 'vers le site', icon: TrendingUp },
        { label: 'Communauté', value: '+12K', period: 'nouveaux followers', icon: Users },
        { label: 'Ventes', value: '+45%', period: 'via social', icon: BarChart3 },
      ],
      quote: 'Yndris a redonné vie à notre marque. L\'impact sur nos ventes a été immédiat.',
      color: 'from-blue-500 to-emerald-500'
    },
  ];

  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Résultats <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Concrets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des marques transformées, des communautés construites, des résultats mesurables
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm text-emerald-400 mb-4">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-white">{caseStudy.title}</h3>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">Challenge</h4>
                    <p className="text-gray-300">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">Stratégie</h4>
                    <p className="text-gray-300">{caseStudy.strategy}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <Quote size={24} className="text-blue-400 mb-3" />
                    <p className="text-gray-200 italic">{caseStudy.quote}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Résultats</h4>
                  {caseStudy.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${caseStudy.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <Icon size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                            <div className="text-sm text-gray-400">{result.period}</div>
                            <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
