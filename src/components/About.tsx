import { Code2, Heart, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '2019', event: 'Développeur Tech', icon: Code2 },
    { year: '2021', event: 'Découverte du Marketing Digital', icon: Heart },
    { year: '2023', event: 'Community Manager Expert', icon: Users },
    { year: '2025', event: 'Stratège Digital & Growth', icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            De la <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">technologie</span> à la <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">communication</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur à l'origine, j'ai appris à comprendre les algorithmes. Aujourd'hui, je les transforme en
              <span className="text-emerald-400 font-semibold"> leviers d'émotion</span> et de
              <span className="text-blue-400 font-semibold"> croissance</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon approche du community management est
              <span className="text-white font-semibold"> analytique</span>,
              <span className="text-white font-semibold"> humaine</span> et
              <span className="text-white font-semibold"> orientée impact</span>.
              Je ne gère pas simplement des comptes, je construis des communautés qui transforment les marques en mouvements.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl italic text-gray-200">
                "Ici, la créativité rencontre la stratégie. Chaque publication est pensée, chaque communauté est cultivée, chaque marque devient un mouvement."
              </p>
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
            <h3 className="text-3xl font-bold mb-4">Mon parcours</h3>
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
