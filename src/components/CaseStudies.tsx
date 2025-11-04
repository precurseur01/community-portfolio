import { TrendingUp, Users, BarChart3, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CaseStudies() {
  const { t } = useTranslation();

  const cases = [
    {
      title: t('cases.case1.title'),
      category: t('cases.case1.category'),
      challenge: t('cases.case1.challenge'),
      strategy: t('cases.case1.strategy'),
      results: [
        { label: t('cases.case1.results.followers.label'), value: '+5000', period: t('cases.case1.results.followers.period'), icon: Users },
        { label: t('cases.case1.results.engagement.label'), value: '8.2%', period: t('cases.case1.results.engagement.period'), icon: TrendingUp },
        { label: t('cases.case1.results.reach.label'), value: '150K', period: t('cases.case1.results.reach.period'), icon: BarChart3 },
      ],
      quote: t('cases.case1.quote'),
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: t('cases.case2.title'),
      category: t('cases.case2.category'),
      challenge: t('cases.case2.challenge'),
      strategy: t('cases.case2.strategy'),
      results: [
        { label: t('cases.case2.results.interactions.label'), value: '+320%', period: t('cases.case2.results.interactions.period'), icon: TrendingUp },
        { label: t('cases.case2.results.leads.label'), value: '47', period: t('cases.case2.results.leads.period'), icon: Users },
        { label: t('cases.case2.results.conversion.label'), value: '12%', period: t('cases.case2.results.conversion.period'), icon: BarChart3 },
      ],
      quote: t('cases.case2.quote'),
      color: 'from-emerald-600 to-emerald-400'
    },
    {
      title: t('cases.case3.title'),
      category: t('cases.case3.category'),
      challenge: t('cases.case3.challenge'),
      strategy: t('cases.case3.strategy'),
      results: [
        { label: t('cases.case3.results.traffic.label'), value: '+70%', period: t('cases.case3.results.traffic.period'), icon: TrendingUp },
        { label: t('cases.case3.results.community.label'), value: '+12K', period: t('cases.case3.results.community.period'), icon: Users },
        { label: t('cases.case3.results.sales.label'), value: '+45%', period: t('cases.case3.results.sales.period'), icon: BarChart3 },
      ],
      quote: t('cases.case3.quote'),
      color: 'from-blue-500 to-emerald-500'
    },
  ];

  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('cases.titlePrefix')} <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{t('cases.titleGradient')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('cases.description')}
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
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">{t('cases.challenge')}</h4>
                    <p className="text-gray-300">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">{t('cases.strategy')}</h4>
                    <p className="text-gray-300">{caseStudy.strategy}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <Quote size={24} className="text-blue-400 mb-3" />
                    <p className="text-gray-200 italic">{caseStudy.quote}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">{t('cases.results')}</h4>
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
