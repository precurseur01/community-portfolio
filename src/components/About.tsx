import { Code2, Heart, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const timeline = [
    { year: '2019', event: t('about.timeline.2019'), icon: Code2 },
    { year: '2021', event: t('about.timeline.2021'), icon: Heart },
    { year: '2023', event: t('about.timeline.2023'), icon: Users },
    { year: '2025', event: t('about.timeline.2025'), icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            {t('about.heading.before')}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {t('about.heading.highlight1')}
            </span>{" "}
            {t('about.heading.middle')}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {t('about.heading.highlight2')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">{t('about.paragraph1')}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{t('about.paragraph2')}</p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl italic text-gray-200">{t('about.quote')}</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10"></div>
              <div className="relative z-10 text-center p-8">
                <Code2 size={80} className="mx-auto mb-4 text-blue-400" />
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">+</div>
                <Heart size={80} className="mx-auto text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t('about.timeline.heading')}</h3>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="relative inline-block mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-4 border-slate-950">
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                    <div className="text-gray-300 font-medium">{item.event}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
