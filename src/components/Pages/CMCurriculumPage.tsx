import { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Star, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─── Data ───────────────────────────────────────────────────────────────────

const modules = [
  {
    id: 'module-1',
    num: '01',
    label: 'Fondamentaux',
    title: 'Fondamentaux du Community Management',
    desc: 'Comprenez les rouages profonds des réseaux sociaux pour bâtir une stratégie solide et pérenne.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&q=80',
    skills: [
      'Élaboration de stratégie social media de A à Z.',
      'Déchiffrage des algorithmes (Instagram, LinkedIn, TikTok).',
      'Positionnement de marque et étude d\'audience.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-2',
    num: '02',
    label: 'IA & Workflow',
    title: 'IA appliquée au Community Management',
    desc: 'Décuplez votre productivité grâce aux dernières avancées de l\'intelligence artificielle.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=400&fit=crop&q=80',
    skills: [
      'Prompt Engineering avancé pour ChatGPT et Claude.',
      'Automatisation des workflows répétitifs.',
      'Génération d\'idées et calendriers éditoriaux assistée par IA.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-3',
    num: '03',
    label: 'Contenu & Canva',
    title: 'Création de contenu (Canva & IA)',
    desc: 'Maîtrisez les outils visuels pour créer des contenus qui arrêtent le scroll.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&q=80',
    skills: [
      'Design graphique professionnel avec Canva.',
      'Génération d\'images et de visuels par IA (Midjourney).',
      'Montage vidéo court (Reels, TikTok) à fort impact.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-4',
    num: '04',
    label: 'Ads & Campagnes',
    title: 'Publicité et campagnes + Andromeda',
    desc: 'Passez à la vitesse supérieure avec l\'acquisition payante et les outils propriétaires.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80',
    skills: [
      'Gestion du Ads Manager (Facebook, Instagram, TikTok).',
      'Exploitation de la puissance d\'Andromeda pour vos campagnes.',
      'Optimisation du budget et A/B testing rigoureux.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-5',
    num: '05',
    label: 'Analytics',
    title: 'Analytics et reporting',
    desc: 'Apprenez à faire parler les chiffres et prouvez la valeur de vos actions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80',
    skills: [
      'Définition et suivi des KPIs stratégiques.',
      'Création de rapports professionnels pour vos clients.',
      'Analyse du ROI et ajustements stratégiques basés sur la data.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-6',
    num: '06',
    label: 'Web & Pratique',
    title: 'Site web et mise en pratique',
    desc: 'Transformez votre présence sociale en un véritable écosystème web performant.',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop&q=80',
    skills: [
      'Création de Landing Pages optimisées pour la conversion.',
      'Intégration d\'outils de tracking et pixels publicitaires.',
      'Projets réels pour valider vos acquis techniques.',
    ],
    color: '#09A9E3',
  },
  {
    id: 'module-7',
    num: '07',
    label: 'Conversion (Bonus)',
    title: 'Techniques de conversion (Vente & Branding)',
    desc: 'Apprenez à vous vendre et à transformer vos abonnés en clients fidèles et engagés.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=80',
    skills: [
      'Développement de votre Personal Branding d\'expert.',
      'Psychologie de vente et copywriting persuasif.',
      'Méthodes d\'acquisition de clients premium.',
    ],
    color: '#FF8C42',
    isBonus: true,
  },
];

const navItems = modules.map(m => ({ id: m.id, num: m.num, label: m.label, isBonus: m.isBonus }));

// ─── Component ───────────────────────────────────────────────────────────────

export default function CMCurriculumPage() {
  const [activeModule, setActiveModule] = useState('module-1');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveModule(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen" style={{ background: '#f8faff', fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero Header ── */}
      <header
        className="relative pt-28 pb-20 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B3C5D 0%, #09A9E3 100%)', minHeight: 440 }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #FF8C42 0%, transparent 50%), radial-gradient(circle at 80% 20%, #50BC74 0%, transparent 50%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: 'rgba(9,169,227,0.3)', color: '#A8E6CF', border: '1px solid rgba(168,230,207,0.4)' }}>
            Curriculum 2025
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Programme Complet : Votre chemin vers l'expertise CM
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Une formation intensive structurée en 7 modules stratégiques pour maîtriser l'art du Community Management moderne et les outils de pointe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Award size={16} style={{ color: '#A8E6CF' }} />
              <span>Certification Professionnelle</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Users size={16} style={{ color: '#A8E6CF' }} />
              <span>Accès Communauté Privée</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left Sidebar ── */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#09A9E3' }}>
                Aperçu du parcours
              </p>
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={activeModule === item.id
                    ? { background: item.isBonus ? '#fff3ee' : '#e6f7fd', color: item.isBonus ? '#FF8C42' : '#09A9E3' }
                    : { color: '#64748b', background: 'transparent' }}
                  onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                    style={{ background: activeModule === item.id ? (item.isBonus ? '#FF8C42' : '#09A9E3') : '#cbd5e1' }}
                  >
                    {item.num}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          {/* ── Module Cards ── */}
          <div className="lg:col-span-9 space-y-10">
            {modules.map((mod, i) => (
              <section
                key={mod.id}
                id={mod.id}
                ref={setRef(mod.id)}
                className="rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: mod.isBonus ? 'linear-gradient(135deg, #fff8f3, #fff3ee)' : '#ffffff',
                  border: mod.isBonus ? '2px solid #FF8C42' : '1px solid #e8edf5',
                  boxShadow: '0 4px 24px rgba(11,60,93,0.06)',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                  {/* Bonus badge */}
                  {mod.isBonus && (
                    <div className="absolute top-4 right-4 hidden sm:block">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                        style={{ background: '#FF8C42' }}>
                        Bonus Exclusif
                      </span>
                    </div>
                  )}

                  {/* Image column */}
                  <div className="sm:w-1/3 flex-shrink-0">
                    <div className="aspect-square rounded-xl overflow-hidden mb-3"
                      style={{ background: mod.isBonus ? '#ffdbc9' : '#f0f9ff' }}>
                      <img src={mod.img} alt={mod.title}
                        className="w-full h-full object-cover"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: mod.color }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: mod.color }}>
                        Module {mod.num}
                      </span>
                      {mod.isBonus && (
                        <span className="sm:hidden px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                          style={{ background: '#FF8C42' }}>Bonus</span>
                      )}
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="sm:w-2/3">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {mod.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">{mod.desc}</p>
                    <ul className="space-y-2.5">
                      {mod.skills.map((skill, si) => (
                        <li key={si} className="flex items-start gap-3">
                          <CheckCircle size={18} style={{ color: mod.isBonus ? '#FF8C42' : '#09A9E3', flexShrink: 0, marginTop: 1 }} />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* ── Final CTA ── */}
      <section className="py-20 border-t" style={{ borderColor: '#e8edf5', background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#0B3C5D', fontFamily: "'Space Grotesk', sans-serif" }}>
            Prêt à commencer ? Rejoignez la prochaine session
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Ne laissez pas votre carrière au hasard. Maîtrisez les compétences les plus demandées du marché actuel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/preselection')}
              className="px-10 py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74, #FF8C42)' }}
            >
              Je m'inscris maintenant
              <ArrowRight size={18} />
            </button>
            <button
              className="px-10 py-4 rounded-xl font-bold border-2 text-lg transition-all hover:opacity-80"
              style={{ borderColor: '#09A9E3', color: '#09A9E3' }}
            >
              Télécharger la brochure
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Prochaine cohorte : 04 Juillet 2026 • Places limitées à 15 participants.
          </p>
        </div>
      </section>

      {/* ── Floating Rating Badge ── */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3"
          style={{ border: '1px solid #e8edf5' }}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: '#e6f7fd' }}>
            <Star size={20} style={{ color: '#09A9E3' }} fill="#09A9E3" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Évaluation moyenne</p>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold" style={{ color: '#0B3C5D' }}>4.9</span>
              <span className="text-lg text-gray-400">/5</span>
              <Star size={14} style={{ color: '#FF8C42' }} fill="#FF8C42" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
