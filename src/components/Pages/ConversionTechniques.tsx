import { useState, useRef, useEffect } from 'react';

const techniques = [
  {
    id: 'aida',
    acronym: 'AIDA',
    title: 'La méthode AIDA',
    subtitle: 'La base du marketing',
    color: 'from-violet-600 to-indigo-600',
    accent: '#7c3aed',
    badge: 'Fondamentale',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    description: "La méthode la plus connue dans le monde. Structure tout message de vente en 4 étapes logiques.",
    letters: [
      { letter: 'A', word: 'Attention', desc: "Attirer l'attention du prospect", example: '"Bonjour Mme Martine, merci pour votre intérêt pour notre formation."', icon: '👀' },
      { letter: 'I', word: 'Intérêt', desc: "Lui montrer que l'offre répond à son besoin", example: 'Mettez en avant les points précis qui correspondent à sa situation.', icon: '💡' },
      { letter: 'D', word: 'Désir', desc: 'Lui montrer les bénéfices concrets', example: 'Parlez de résultats, de transformation, de gains réels.', icon: '🔥' },
      { letter: 'A', word: 'Action', desc: "L'amener à passer à l'action", example: '"Souhaitez-vous recevoir le programme complet de la formation ?"', icon: '🚀' },
    ],
    tip: 'Chaque étape prépare la suivante. Ne sautez jamais une étape !',
  },
  {
    id: 'spin',
    acronym: 'SPIN',
    title: 'La méthode SPIN Selling',
    subtitle: 'Ventes complexes',
    color: 'from-cyan-600 to-teal-600',
    accent: '#0891b2',
    badge: 'Avancée',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    description: "Très utilisée dans les ventes complexes. Basée sur des questions stratégiques pour guider le prospect.",
    letters: [
      { letter: 'S', word: 'Situation', desc: 'Comprendre la situation du prospect', example: '"Depuis combien de temps cherchez-vous une formation dans ce domaine ?"', icon: '🗺️' },
      { letter: 'P', word: 'Problem', desc: 'Identifier son problème', example: '"Quelles difficultés rencontrez-vous actuellement dans votre parcours ?"', icon: '🔍' },
      { letter: 'I', word: 'Implication', desc: "Montrer l'impact du problème", example: '"Sans formation, comment cela affecte-t-il vos opportunités d\'emploi ?"', icon: '⚡' },
      { letter: 'N', word: 'Need Payoff', desc: 'Montrer la valeur de ta solution', example: '"Est-ce que vous cherchez cette formation pour trouver un emploi ou améliorer vos compétences ?"', icon: '🏆' },
    ],
    tip: 'Laissez le prospect découvrir lui-même la valeur de votre solution grâce aux bonnes questions.',
  },
  {
    id: 'soncas',
    acronym: 'SONCAS',
    title: 'La méthode SONCAS',
    subtitle: 'Psychologie d\'achat',
    color: 'from-amber-500 to-orange-600',
    accent: '#d97706',
    badge: 'Psychologie',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: "Repose sur les 6 motivations psychologiques profondes qui poussent à l'achat.",
    letters: [
      { letter: 'S', word: 'Sécurité', desc: 'Le besoin de se protéger, de faire confiance', example: '"Notre formation est certifiée et reconnue par les employeurs."', icon: '🛡️' },
      { letter: 'O', word: 'Orgueil', desc: "Le besoin de se sentir important, valorisé", example: '"Nos apprenants font partie d\'une communauté d\'élite."', icon: '👑' },
      { letter: 'N', word: 'Nouveauté', desc: "L'attrait pour l'innovation, la modernité", example: '"Méthode d\'apprentissage révolutionnaire basée sur la pratique."', icon: '✨' },
      { letter: 'C', word: 'Confort', desc: 'Le besoin de facilité, de praticité', example: '"Formation 100% pratique, accessible depuis chez vous."', icon: '🛋️' },
      { letter: 'A', word: 'Argent', desc: "La recherche de valeur, de retour sur investissement", example: '"Possibilité d\'obtenir un emploi et récupérer votre investissement rapidement."', icon: '💰' },
      { letter: 'S', word: 'Sympathie', desc: 'Le besoin de relation humaine, de connexion', example: '"Nous construisons une vraie relation avec chaque apprenant."', icon: '🤝' },
    ],
    tip: "Identifiez la motivation dominante du prospect et adaptez votre discours en conséquence.",
  },
  {
    id: 'cab',
    acronym: 'CAB',
    title: 'La méthode CAB',
    subtitle: 'Argumentaire de vente',
    color: 'from-emerald-600 to-green-600',
    accent: '#059669',
    badge: 'Structurée',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: "Transformer les caractéristiques d'un produit en bénéfices concrets pour le client.",
    letters: [
      { letter: 'C', word: 'Caractéristiques', desc: "Ce qu'est le produit / la formation", example: 'Formation 100% pratique sur 8 semaines intensives.', icon: '📋' },
      { letter: 'A', word: 'Avantages', desc: "Ce que ça apporte concrètement", example: 'Vous pratiquez directement sur des cas réels.', icon: '⚙️' },
      { letter: 'B', word: 'Bénéfices', desc: "Ce que le client y gagne vraiment", example: 'Vous êtes opérationnel pour travailler rapidement après la formation.', icon: '🎯' },
    ],
    tip: "Ne restez jamais aux caractéristiques. Les clients achètent des bénéfices, pas des fonctionnalités.",
  },
  {
    id: 'question-solution',
    acronym: 'Q→S',
    title: 'La méthode Question–Solution',
    subtitle: 'WhatsApp & Messenger',
    color: 'from-pink-600 to-rose-600',
    accent: '#db2777',
    badge: 'Digitale',
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    description: "Très efficace sur les messageries instantanées. Convertir en 3 étapes simples.",
    letters: [
      { letter: '1', word: 'Poser une question', desc: "Ouvrir le dialogue avec une question ciblée", example: '"Vous souhaitez suivre la formation pour travailler rapidement ou pour lancer votre activité ?"', icon: '❓' },
      { letter: '2', word: 'Comprendre le besoin', desc: 'Écouter et analyser la réponse du prospect', example: 'Laissez parler le prospect. Notez les mots-clés qu\'il utilise.', icon: '👂' },
      { letter: '3', word: 'Proposer la solution', desc: 'Adapter votre offre à ce besoin précis', example: '"Alors notre formation X est exactement ce qu\'il vous faut car..."', icon: '💎' },
    ],
    tip: "Sur WhatsApp, les messages courts et les questions directes convertissent 3x mieux.",
  },
  {
    id: 'social-proof',
    acronym: '★★★',
    title: 'La preuve sociale',
    subtitle: 'Déclencher la confiance',
    color: 'from-yellow-500 to-amber-500',
    accent: '#eab308',
    badge: 'Influence',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    description: "Les gens achètent quand ils voient que d'autres ont réussi. La preuve sociale rassure et convainc.",
    letters: [
      { letter: '👥', word: 'Témoignages', desc: "Les avis et retours d'expérience de vrais clients", example: '"Grâce à cette formation, j\'ai trouvé un emploi en 2 mois." — Aminata K.', icon: '💬' },
      { letter: '📸', word: 'Visuels', desc: "Photos et vidéos des apprenants en action", example: "Partagez les succès de vos apprenants avec leur permission.", icon: '📷' },
      { letter: '📊', word: 'Statistiques', desc: "Des chiffres concrets qui prouvent les résultats", example: '"Plus de 300 apprenants ont déjà suivi cette formation avec succès."', icon: '📈' },
    ],
    tip: "Un seul vrai témoignage concret vaut 100 promesses. Collectez-les systématiquement.",
  },
  {
    id: 'rarity',
    acronym: '⏳',
    title: 'La méthode de Rareté',
    subtitle: 'Créer l\'urgence',
    color: 'from-red-600 to-rose-700',
    accent: '#dc2626',
    badge: 'Urgence',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    description: "La rareté déclenche la peur de manquer et accélère la décision d'achat.",
    letters: [
      { letter: '🔢', word: 'Places limitées', desc: "Limiter le nombre de participants crée de la valeur", example: '"Il ne reste que 3 places disponibles pour cette session."', icon: '🎟️' },
      { letter: '⏰', word: 'Promotion limitée', desc: "Une offre qui expire pousse à l'action immédiate", example: '"Tarif spécial valable jusqu\'au vendredi 23h59."', icon: '💸' },
      { letter: '📅', word: 'Session prochaine', desc: "La prochaine occasion peut sembler lointaine", example: '"La prochaine session démarre le 1er du mois prochain."', icon: '🗓️' },
    ],
    tip: "La rareté doit être RÉELLE. Une fausse urgence détruit la confiance définitivement.",
  },
  {
    id: 'progressive',
    acronym: '→→→',
    title: 'Engagement Progressif',
    subtitle: 'Vendre sans vendre',
    color: 'from-blue-600 to-indigo-600',
    accent: '#2563eb',
    badge: 'Stratégique',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    description: "On ne vend pas directement. On crée une relation par des petits engagements successifs.",
    letters: [
      { letter: '1', word: 'Envoyer le programme', desc: "Premier engagement : donner de la valeur gratuitement", example: '"Je vous envoie le programme détaillé de la formation."', icon: '📄' },
      { letter: '2', word: 'Partager un témoignage', desc: "Renforcer la confiance par la preuve sociale", example: '"Voici le retour d\'expérience de notre dernier apprenant."', icon: '⭐' },
      { letter: '3', word: 'Répondre aux questions', desc: "Lever les objections une par une", example: '"Avez-vous des questions sur le contenu ou l\'organisation ?"', icon: '💭' },
      { letter: '4', word: 'Proposer l\'inscription', desc: "La vente arrive naturellement après la relation", example: '"Voulez-vous confirmer votre place dans la formation ?"', icon: '✅' },
    ],
    tip: "Chaque 'oui' petit prépare le grand 'oui'. Ne brûlez pas les étapes.",
  },
];

const nameGuide = {
  title: "Comment appeler votre prospect ?",
  subtitle: "L'art de l'adresse personnalisée",
  stages: [
    {
      phase: "Premier contact",
      recommendation: "Monsieur / Madame + Nom",
      example: '"Bonjour Mme Martine"',
      why: ["Respect", "Crédibilité", "Professionnalisme"],
      icon: '🤝',
      color: 'border-violet-500/40 bg-violet-500/5',
    },
    {
      phase: "Après quelques échanges",
      recommendation: "Prénom seul",
      example: '"Martine, je comprends votre situation."',
      why: ["Proximité", "Relation humaine", "Chaleur"],
      icon: '💛',
      color: 'border-amber-500/40 bg-amber-500/5',
    },
  ],
};

export default function ConversionTechniques() {
  const [activeMethod, setActiveMethod] = useState('aida');
  const [activeLetterIndex, setActiveLetterIndex] = useState<number | null>(null);
  const [showNameGuide, setShowNameGuide] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const current = techniques.find(t => t.id === activeMethod)!;

  const handleMethodChange = (id: string) => {
    setActiveMethod(id);
    setActiveLetterIndex(null);
    setAnimKey(k => k + 1);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeMethod]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4 font-sans">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .letter-card { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .letter-card:hover { transform: translateY(-4px) scale(1.02); }
        .letter-card.active { transform: translateY(-6px) scale(1.04); }
        .method-btn { transition: all 0.25s ease; }
        .fade-in { animation: fadeSlideIn 0.4s ease forwards; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .stagger-1 { animation-delay: 0.05s; opacity: 0; }
        .stagger-2 { animation-delay: 0.1s; opacity: 0; }
        .stagger-3 { animation-delay: 0.15s; opacity: 0; }
        .stagger-4 { animation-delay: 0.2s; opacity: 0; }
        .stagger-5 { animation-delay: 0.25s; opacity: 0; }
        .stagger-6 { animation-delay: 0.3s; opacity: 0; }
        .progress-bar { transition: width 0.4s ease; }
        .glow-effect { box-shadow: 0 0 30px rgba(124, 58, 237, 0.15); }
      `}</style>

      <div className="max-w-6xl mx-auto font-body">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-display tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            Module Formation · Techniques de Vente
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-800 text-white mb-4 leading-tight">
            Techniques de <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Conversion</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Maîtrisez les 8 méthodes qui transforment un prospect en client. Cliquez sur chaque lettre pour découvrir les détails.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {techniques.map((t) => (
              <button
                key={t.id}
                onClick={() => handleMethodChange(t.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeMethod === t.id ? 'w-8 bg-violet-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* Sidebar nav */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-3 space-y-1">
              <p className="text-xs font-display font-600 text-slate-500 uppercase tracking-wider px-3 py-2">Méthodes</p>
              {techniques.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleMethodChange(t.id)}
                  className={`method-btn w-full text-left px-3 py-3 rounded-xl flex items-center gap-3 group ${
                    activeMethod === t.id
                      ? 'bg-white/10 border border-white/15'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-800 text-white text-xs">{t.acronym.slice(0, 3)}</span>
                  </div>
                  <div className="min-w-0">
                    <div className={`font-display font-600 text-sm truncate ${activeMethod === t.id ? 'text-white' : 'text-slate-300'}`}>
                      {t.acronym}
                    </div>
                    <div className="text-xs text-slate-500 truncate">{t.subtitle}</div>
                  </div>
                  {activeMethod === t.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                  )}
                </button>
              ))}

              {/* Name guide button */}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => setShowNameGuide(!showNameGuide)}
                  className={`method-btn w-full text-left px-3 py-3 rounded-xl flex items-center gap-3 ${
                    showNameGuide ? 'bg-amber-500/10 border border-amber-500/20' : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 text-sm">
                    🙋
                  </div>
                  <div>
                    <div className={`font-display font-600 text-sm ${showNameGuide ? 'text-amber-300' : 'text-slate-300'}`}>Appel du prospect</div>
                    <div className="text-xs text-slate-500">Nom ou prénom ?</div>
                  </div>
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div ref={contentRef}>
            {showNameGuide ? (
              <div className="fade-in bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-8 py-6">
                  <div className="text-3xl mb-2">🙋</div>
                  <h2 className="font-display text-2xl font-700 text-white">{nameGuide.title}</h2>
                  <p className="text-amber-100 text-sm mt-1">{nameGuide.subtitle}</p>
                </div>
                <div className="p-8 space-y-6">
                  {nameGuide.stages.map((stage, i) => (
                    <div key={i} className={`rounded-xl border p-6 ${stage.color}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{stage.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-display font-700 text-white text-lg">{stage.phase}</span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 text-xs font-display">Recommandé</span>
                          </div>
                          <div className="bg-white/10 rounded-lg px-4 py-2 inline-block mb-4">
                            <span className="font-display font-600 text-white">{stage.recommendation}</span>
                          </div>
                          <blockquote className="text-slate-300 italic text-sm mb-4 border-l-2 border-white/20 pl-3">
                            {stage.example}
                          </blockquote>
                          <div className="flex flex-wrap gap-2">
                            {stage.why.map(w => (
                              <span key={w} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-display">
                                ✓ {w}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-slate-800/60 rounded-xl p-5 border border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <span className="text-white font-600">Règle d'or :</span> La relation évolue. Commencez formel pour établir la crédibilité, puis passez au prénom pour créer la proximité. Ce passage est un signal fort que la relation progresse.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={animKey} className="space-y-6">
                {/* Method header card */}
                <div className={`fade-in stagger-1 rounded-2xl bg-gradient-to-br ${current.color} p-8 relative overflow-hidden`}>
                  <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5" />
                  <div className="absolute -right-4 -bottom-12 w-56 h-56 rounded-full bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-display font-600 border ${current.badgeColor} mb-3`}>
                          {current.badge}
                        </span>
                        <h2 className="font-display text-3xl font-800 text-white">{current.title}</h2>
                        <p className="text-white/70 text-sm mt-1 font-display">{current.subtitle}</p>
                      </div>
                      <div className="font-display font-800 text-5xl text-white/20 tracking-widest">{current.acronym}</div>
                    </div>
                    <p className="text-white/85 leading-relaxed max-w-xl">{current.description}</p>
                  </div>
                </div>

                {/* Letters/Steps grid */}
                <div className={`grid gap-4 ${current.letters.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : current.letters.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'}`}>
                  {current.letters.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveLetterIndex(activeLetterIndex === i ? null : i)}
                      className={`fade-in stagger-${i + 1} letter-card text-left rounded-xl border p-5 cursor-pointer bg-white/5 backdrop-blur-sm ${
                        activeLetterIndex === i
                          ? 'border-white/30 bg-white/10 active'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center`}>
                          <span className="font-display font-800 text-white text-xl">{item.letter}</span>
                        </div>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="font-display font-700 text-white text-base mb-1">{item.word}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Expanded detail */}
                {activeLetterIndex !== null && (
                  <div className="fade-in rounded-2xl bg-white/5 border border-white/15 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="font-display font-800 text-white text-2xl">{current.letters[activeLetterIndex].letter}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-display font-700 text-white text-xl mb-1">
                          {current.letters[activeLetterIndex].word}
                        </div>
                        <p className="text-slate-300 text-sm mb-4">{current.letters[activeLetterIndex].desc}</p>
                        <div className="bg-slate-800/80 rounded-xl p-4 border-l-4" style={{ borderColor: current.accent }}>
                          <div className="text-xs font-display text-slate-400 uppercase tracking-wider mb-2">Exemple concret</div>
                          <p className="text-slate-200 text-sm italic leading-relaxed">
                            {current.letters[activeLetterIndex].example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pro tip */}
                <div className="fade-in rounded-xl bg-white/5 border border-white/10 p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                    💡
                  </div>
                  <div>
                    <div className="font-display font-600 text-yellow-400 text-sm mb-1">Conseil Pro</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{current.tip}</p>
                  </div>
                </div>

                {/* Navigation between methods */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      const idx = techniques.findIndex(t => t.id === activeMethod);
                      if (idx > 0) handleMethodChange(techniques[idx - 1].id);
                    }}
                    disabled={techniques.findIndex(t => t.id === activeMethod) === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm font-display disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← Précédent
                  </button>
                  <span className="text-slate-500 text-xs font-display">
                    {techniques.findIndex(t => t.id === activeMethod) + 1} / {techniques.length}
                  </span>
                  <button
                    onClick={() => {
                      const idx = techniques.findIndex(t => t.id === activeMethod);
                      if (idx < techniques.length - 1) handleMethodChange(techniques[idx + 1].id);
                    }}
                    disabled={techniques.findIndex(t => t.id === activeMethod) === techniques.length - 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm font-display disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}