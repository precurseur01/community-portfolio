import React, { useState } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[];
  multiSelect: boolean;
}

interface SelectedAnswers {
  [key: number]: number[];
}

const TrainingPage2: React.FC = () => {
const AdvancedTrainingQuestions: Question[] = [
  {
    id: 1,
    question: "Une marque de cosmétiques constate qu'une influenceuse a publié un avis négatif suite à l'utilisation d'un produit défectueux. La publication génère des milliers de commentaires négatifs sur toutes les plateformes de la marque.\n\nQuelle approche stratégique le community manager doit-il adopter en priorité ?",
    options: [
      "Publier immédiatement un communiqué officiel pour démentir les accusations",
      "Contacter l'influenceuse en privé pour comprendre le problème, proposer une solution et demander une mise à jour publique",
      "Ignorer la situation en attendant que la controverse s'apaise naturellement",
      "Lancer une campagne publicitaire massive pour détourner l'attention"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 2,
    question: "Un community manager gère une communauté internationale de gamers. Il remarque que les membres européens et asiatiques ne participent jamais aux mêmes discussions à cause des fuseaux horaires.\n\nQuelles stratégies peuvent favoriser la cohésion globale ? (Sélectionnez deux réponses)",
    options: [
      "Créer des événements asynchrones où chacun peut participer à son rythme (défis sur 48h)",
      "Nommer des modérateurs ambassadeurs dans chaque zone géographique pour animer localement",
      "Obliger tous les membres à participer aux heures GMT uniquement",
      "Diviser la communauté en sous-groupes régionaux séparés"
    ],
    correctAnswers: [0, 1],
    multiSelect: true
  },
  {
    id: 3,
    question: "Une startup SaaS B2B souhaite construire une communauté d'utilisateurs actifs. Actuellement, seuls 5% des 10 000 utilisateurs interagissent sur les réseaux sociaux.\n\nQuelle stratégie d'activation est la plus efficace pour transformer les utilisateurs passifs en membres actifs ?",
    options: [
      "Créer un programme de champions/ambassadeurs avec des avantages exclusifs pour les contributeurs réguliers",
      "Envoyer des emails quotidiens à tous les utilisateurs pour les inciter à participer",
      "Publier plus de contenu promotionnel sur les fonctionnalités du produit",
      "Organiser uniquement des webinaires en direct sans interaction"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 4,
    question: "Un community manager détecte qu'un concurrent utilise de faux comptes pour publier des commentaires négatifs systématiques sur tous les posts de sa marque.\n\nQuelle est la meilleure approche pour gérer cette situation ?",
    options: [
      "Répondre agressivement à chaque faux commentaire pour défendre la marque",
      "Documenter les preuves, signaler les comptes aux plateformes et mettre en place un système de filtrage automatique des commentaires",
      "Créer à son tour de faux comptes pour attaquer le concurrent",
      "Ignorer complètement la situation"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 5,
    question: "Une communauté autour de la parentalité voit émerger un débat houleux sur les méthodes d'éducation. Deux camps s'opposent violemment dans les commentaires.\n\nComment le community manager doit-il modérer ce type de conflit polarisant ? (Sélectionnez deux réponses)",
    options: [
      "Créer un post rappelant que la diversité des approches est normale et inviter au respect mutuel",
      "Supprimer tous les commentaires et bannir les participants les plus actifs",
      "Prendre publiquement position pour l'une des méthodes",
      "Organiser un live avec un expert neutre pour apporter un éclairage objectif"
    ],
    correctAnswers: [0, 3],
    multiSelect: true
  },
  {
    id: 6,
    question: "Un community manager constate que 80% de l'engagement de sa communauté provient de seulement 20 membres sur un total de 50 000.\n\nQuelle analyse doit-il faire de cette situation ?",
    options: [
      "C'est normal et bénéfique, il faut se concentrer uniquement sur ces super-contributeurs",
      "C'est un signal d'alarme : la communauté manque de diversité et risque de devenir un cercle fermé, il faut activer les membres silencieux",
      "Il faut bannir les super-contributeurs pour laisser la place aux autres",
      "Il n'y a aucune action à prendre, les statistiques sont satisfaisantes"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 7,
    question: "Une marque de mode durable lance une collection capsule en édition limitée. Le community manager doit créer du buzz sans budget publicitaire.\n\nQuelle tactique de marketing communautaire sera la plus efficace ?",
    options: [
      "Créer un système de liste d'attente exclusive avec parrainage : chaque membre peut inviter 3 amis pour grimper dans la file",
      "Publier massivement sur toutes les plateformes avec le même message générique",
      "Attendre que les clients partagent organiquement sans stimulation",
      "Envoyer un email de masse à toute la base client"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 8,
    question: "Un groupe Facebook de 100 000 membres commence à être spammé par des vendeurs de produits non sollicités. Les modérateurs reçoivent 200 signalements par jour.\n\nQuelles mesures préventives structurelles doivent être mises en place ? (Sélectionnez deux réponses)",
    options: [
      "Activer les questions de sélection à l'entrée pour filtrer les intentions des nouveaux membres",
      "Mettre tous les posts en approbation manuelle (impossible à gérer à cette échelle)",
      "Créer un système de points de réputation : les nouveaux membres ne peuvent poster qu'après 7 jours et 3 interactions",
      "Bannir tous les nouveaux membres par précaution"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  },
  {
    id: 9,
    question: "Une entreprise technologique souhaite mesurer le ROI exact de sa communauté en ligne. Le community manager doit présenter des métriques business concrètes.\n\nQuels indicateurs sont les plus pertinents pour démontrer la valeur business ? (Sélectionnez deux réponses)",
    options: [
      "Le taux de conversion des membres de la communauté en clients payants vs non-membres",
      "Le nombre total de likes sur les publications",
      "La réduction du coût de support client grâce aux réponses peer-to-peer dans la communauté",
      "Le nombre d'abonnés Instagram"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  },
  {
    id: 10,
    question: "Un community manager remarque que les posts publiés le jeudi à 14h génèrent 10 fois plus d'engagement que ceux du lundi matin, mais son calendrier éditorial impose des publications quotidiennes.\n\nQuelle stratégie d'optimisation doit-il adopter ?",
    options: [
      "Concentrer le contenu premium et les annonces importantes le jeudi, utiliser les autres jours pour du contenu evergreen et de la curation",
      "Publier exactement le même contenu tous les jours sans adaptation",
      "Abandonner complètement les publications du lundi",
      "Publier 10 fois par jour le jeudi uniquement"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 11,
    question: "Une marque fait face à une crise majeure : un produit défectueux a causé des blessures mineures à plusieurs clients. Les réseaux sociaux s'enflamment.\n\nQuelle est la séquence d'actions de gestion de crise la plus appropriée ?",
    options: [
      "1) Reconnaissance publique immédiate, 2) Excuses sincères, 3) Actions correctives concrètes, 4) Communication transparente sur le suivi",
      "Silence total jusqu'à ce que l'équipe juridique donne son feu vert (peut prendre des semaines)",
      "Rejeter la responsabilité sur les utilisateurs qui ont mal utilisé le produit",
      "Supprimer tous les commentaires négatifs et bloquer les utilisateurs concernés"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 12,
    question: "Un community manager gère une communauté de développeurs très techniques. Il n'a pas lui-même de compétences en programmation avancée.\n\nComment peut-il maintenir sa crédibilité et sa légitimité ?",
    options: [
      "Prétendre comprendre tous les sujets techniques même quand ce n'est pas le cas",
      "S'appuyer sur des membres experts comme co-modérateurs, être transparent sur son rôle de facilitateur plutôt que d'expert technique",
      "Éviter complètement les discussions techniques",
      "Démissionner car il n'a pas les compétences requises"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 13,
    question: "Une communauté de créateurs de contenu sur YouTube compte 5 000 membres. Un système de mentorat pourrait créer de la valeur, mais l'organisation manuelle serait impossible à gérer.\n\nQuelle approche scalable le community manager doit-il mettre en place ?",
    options: [
      "Créer un système de matching automatique basé sur les centres d'intérêt et le niveau d'expérience, avec des groupes de mentorat de 5-6 personnes",
      "Assigner manuellement chaque mentor à chaque mentee (impossible avec 5000 membres)",
      "Ne rien faire car c'est trop compliqué",
      "Demander à un seul expert de mentorer les 5000 membres"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 14,
    question: "Un community manager constate qu'après chaque post Instagram Stories, il reçoit 50 à 100 messages directs avec des questions similaires.\n\nComment optimiser ce processus pour gagner du temps tout en maintenant l'engagement ?",
    options: [
      "Ignorer les messages directs pour se concentrer sur les posts publics",
      "Créer des réponses automatiques (Quick Replies) personnalisées pour les questions fréquentes, et un chatbot pour le premier niveau de réponse",
      "Répondre manuellement à chaque message même si cela prend 6 heures par jour",
      "Désactiver complètement les messages directs"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 15,
    question: "Une marque de nutrition sportive souhaite lancer un défi communautaire de 30 jours. L'objectif est d'obtenir un taux de complétion de 40% minimum.\n\nQuels éléments de gamification augmenteront significativement la rétention ? (Sélectionnez deux réponses)",
    options: [
      "Un système de check-in quotidien avec badges de progression et tableau de classement social",
      "Des lots très coûteux uniquement pour le grand gagnant (crée de la frustration)",
      "Des mini-récompenses hebdomadaires pour maintenir la motivation et célébrer les petites victoires",
      "Aucune reconnaissance pour éviter la compétition"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  },
  {
    id: 16,
    question: "Un membre très actif et influent de la communauté commence à diffuser des informations fausses sur un sujet sensible (santé). D'autres membres le suivent et relaient ces informations.\n\nComment gérer cette situation délicate sans créer de conflit majeur ?",
    options: [
      "Le bannir immédiatement sans explication (risque de révolte communautaire)",
      "Le contacter en privé avec des sources fiables, lui proposer de corriger publiquement, et si refus, intervention publique mesurée avec fact-checking",
      "Laisser faire car il est influent et populaire",
      "Publier un message agressif pour le discréditer publiquement"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 17,
    question: "Un community manager doit choisir entre créer du contenu original quotidien ou privilégier l'interaction avec les membres. Son temps est limité à 4h/jour.\n\nQuelle allocation de temps générera le plus de valeur communautaire à long terme ?",
    options: [
      "100% création de contenu, 0% interaction (la communauté se sentira ignorée)",
      "70% interaction et animation, 30% création de contenu stratégique de qualité",
      "50/50 sans stratégie particulière",
      "0% création, 100% interaction (manque de nouveauté)"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 18,
    question: "Une entreprise B2B veut créer une communauté Slack privée pour ses clients premium. Elle hésite entre plusieurs modèles d'animation.\n\nQuel modèle créera le plus de valeur perçue pour les membres ?",
    options: [
      "Accès libre sans structure ni animation (deviendra vite un désert)",
      "Canaux thématiques structurés + AMA mensuels avec les fondateurs + peer-to-peer support + early access aux features",
      "Un canal unique où l'entreprise pousse uniquement ses communications marketing",
      "Interdire les discussions entre membres pour garder le contrôle"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 19,
    question: "Un community manager constate que 60% de son audience est maintenant sur TikTok, mais la marque n'y est pas présente. La direction hésite à investir.\n\nQuels arguments data-driven peut-il présenter pour justifier l'investissement ? (Sélectionnez deux réponses)",
    options: [
      "Analyse comparative du coût d'acquisition client sur TikTok vs autres plateformes (souvent plus bas)",
      "\"Tout le monde est sur TikTok\" sans données précises",
      "Étude de cas de concurrents ayant réussi sur TikTok avec métriques de croissance",
      "L'âge moyen de l'audience actuelle sans lien avec TikTok"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  },
  {
    id: 20,
    question: "Une communauté en ligne traverse une phase de déclin : l'engagement baisse de 30% en 3 mois. Les membres historiques partent.\n\nQuelle approche diagnostique le community manager doit-il adopter en premier ?",
    options: [
      "Paniquer et changer complètement de stratégie du jour au lendemain",
      "Mener une enquête qualitative auprès des membres actifs ET inactifs pour comprendre les causes réelles du désengagement",
      "Augmenter massivement la fréquence de publication sans analyse",
      "Accuser l'algorithme des plateformes sans chercher plus loin"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 21,
    question: "Un événement virtuel réunit 1 000 participants. Le chat est tellement actif que les messages défilent trop vite et personne ne peut suivre.\n\nQuelle solution organisationnelle optimiser l'expérience ?",
    options: [
      "Désactiver complètement le chat pour éviter le chaos",
      "Créer des salles de discussion parallèles par thème + modérateurs dédiés pour animer chaque salon + Q&A structuré",
      "Laisser le chaos sans intervention",
      "Limiter à 10 le nombre de personnes pouvant envoyer des messages"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 22,
    question: "Un community manager doit gérer simultanément 5 plateformes (Facebook, Instagram, LinkedIn, Twitter, TikTok). Les ressources sont limitées.\n\nQuelle approche de priorisation est la plus stratégique ?",
    options: [
      "Être présent de manière médiocre sur les 5 plateformes (dilue les efforts)",
      "Identifier les 2 plateformes où se trouve le cœur de cible et où le ROI est maximum, exceller dessus, puis expansion progressive",
      "Abandonner toutes les plateformes sauf une",
      "Poster exactement le même contenu sur les 5 sans adaptation (mauvaise pratique)"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 23,
    question: "Une marque de luxe veut créer un sentiment d'exclusivité dans sa communauté sans aliéner les nouveaux membres.\n\nQuelle stratégie de tiering (niveaux d'accès) est la plus équilibrée ?",
    options: [
      "Tout le monde a exactement le même accès (pas d'exclusivité)",
      "Système à 3 niveaux : Communauté publique → Membres vérifiés (après 30 jours) → VIP Ambassadeurs (contribution exceptionnelle)",
      "Accès uniquement pour les clients ayant dépensé plus de 10 000€ (trop restrictif)",
      "Système aléatoire sans critères clairs"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 24,
    question: "Un community manager détecte qu'un membre utilise la communauté uniquement pour recruter pour son MLM (marketing multi-niveau). Les autres membres commencent à se plaindre.\n\nQuelle escalade de modération est appropriée ?",
    options: [
      "1er avertissement privé avec rappel des règles → 2e avertissement public si récidive → bannissement temporaire puis permanent si continuation",
      "Bannissement immédiat sans avertissement (trop radical pour une première fois)",
      "Laisser faire car c'est de l'activité (détruit la confiance de la communauté)",
      "Supprimer ses posts sans jamais lui parler directement"
    ],
    correctAnswers: [0],
    multiSelect: false
  },
  {
    id: 25,
    question: "Une communauté de 20 000 membres génère organiquement du contenu UGC (User Generated Content) de qualité. La marque veut le réutiliser.\n\nQuelle approche légale et éthique doit être suivie ?",
    options: [
      "Utiliser tout le contenu sans demander d'autorisation (violation des droits d'auteur)",
      "Créer un programme UGC officiel : demande d'autorisation systématique, crédit à l'auteur, compensation (financière ou en visibilité), contrat clair",
      "Recréer un contenu similaire sans créditer l'auteur original",
      "Voler le contenu et supprimer les watermarks"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 26,
    question: "Un nouveau réseau social émerge et gagne rapidement en popularité. Le community manager doit décider s'il faut y investir immédiatement.\n\nQuels critères d'évaluation doit-il analyser avant de se lancer ? (Sélectionnez deux réponses)",
    options: [
      "La présence de l'audience cible de la marque sur cette plateforme (données démographiques)",
      "Le simple fait que c'est \"nouveau\" sans autre analyse",
      "La capacité de la plateforme à générer du ROI mesurable pour le business (pas juste du vanity metrics)",
      "L'avis personnel du CEO sans données"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  },
  {
    id: 27,
    question: "Un community manager reçoit des retours indiquant que certains membres se sentent exclus car les discussions sont dominées par un petit groupe d'habitués qui utilisent beaucoup de jargon interne.\n\nComment rendre la communauté plus inclusive ?",
    options: [
      "Bannir les membres habitués pour laisser la place aux nouveaux (contre-productif)",
      "Créer un glossaire, un post d'onboarding détaillé, et encourager activement les questions des nouveaux membres (\"Pas de question bête\")",
      "Ignorer les retours car les habitués sont précieux",
      "Créer deux communautés séparées (fragmenté inutilement)"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 28,
    question: "Une marque constate que 70% de ses conversions proviennent de recommandations au sein de sa communauté, mais ce processus n'est pas structuré.\n\nComment transformer ce phénomène organique en programme scalable de referral ?",
    options: [
      "Ne rien faire et espérer que ça continue organiquement",
      "Créer un programme de parrainage avec tracking : incentives pour le parrain et le filleul, tableau de bord de suivi, récompenses graduées",
      "Forcer tous les membres à partager sous peine de bannissement",
      "Acheter de faux avis pour accélérer le processus"
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 29,
    question: "Un community manager doit prouver que son travail a un impact business direct. La direction demande des KPIs concrets liés au chiffre d'affaires.\n\nQuel framework de mesure doit-il mettre en place ?",
    options: [
      "Se concentrer uniquement sur les vanity metrics (followers, likes) sans lien avec le business",
      "Implémenter un système de tracking : Community Lifetime Value, taux de conversion membres vs non-membres, réduction du churn, ticket moyen, NPS",
      "Inventer des chiffres pour satisfaire la direction",
      "Refuser de mesurer car \"la communauté ne se mesure pas\""
    ],
    correctAnswers: [1],
    multiSelect: false
  },
  {
    id: 30,
    question: "Une communauté internationale doit gérer des sensibilités culturelles très différentes. Un post humoristique apprécié dans un pays choque profondément les membres d'une autre culture.\n\nQuelle politique éditoriale globale le community manager doit-il établir ? (Sélectionnez deux réponses)",
    options: [
      "Créer une charte de contenu multiculturel avec guidelines claires sur les sujets sensibles",
      "Imposer la culture du pays d'origine de la marque à tous (ethnocentrique)",
      "Former l'équipe aux différences culturelles et mettre en place une validation croisée pour le contenu global",
      "Ne jamais rien publier pour éviter tout risque (paralyse la communication)"
    ],
    correctAnswers: [0, 2],
    multiSelect: true
  }
];

// export default AdvancedTrainingQuestions;

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswerSelect = (optionIndex: number): void => {
    const question = AdvancedTrainingQuestions[currentQuestion];

    if (question.multiSelect) {
      const current = selectedAnswers[currentQuestion] || [];
      const newSelection = current.includes(optionIndex)
        ? current.filter(i => i !== optionIndex)
        : [...current, optionIndex];

      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: newSelection
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: [optionIndex]
      });
    }
  };

  const isAnswerCorrect = (questionIndex: number): boolean => {
    const question = AdvancedTrainingQuestions[questionIndex];
    const userAnswer = selectedAnswers[questionIndex] || [];

    if (userAnswer.length !== question.correctAnswers.length) return false;

    return question.correctAnswers.every(answer => userAnswer.includes(answer));
  };

  const calculateScore = (): void => {
    let correct = 0;
    AdvancedTrainingQuestions.forEach((_, index) => {
      if (isAnswerCorrect(index)) correct++;
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetQuiz = (): void => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const goToNext = (): void => {
    if (currentQuestion < AdvancedTrainingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const goToPrevious = (): void => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress: number = ((currentQuestion + 1) / AdvancedTrainingQuestions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Résultats du QCM</h2>
            <div className="text-6xl font-bold mb-4">
              <span className={score >= AdvancedTrainingQuestions.length * 0.7 ? 'text-green-500' : 'text-orange-500'}>
                {score}/{AdvancedTrainingQuestions.length}
              </span>
            </div>
            <p className="text-xl text-gray-600">
              Score: {((score / AdvancedTrainingQuestions.length) * 100).toFixed(1)}%
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {AdvancedTrainingQuestions.map((question, qIndex) => {
              const userAnswer = selectedAnswers[qIndex] || [];
              const isCorrect = isAnswerCorrect(qIndex);

              return (
                <div key={qIndex} className="border rounded-lg p-6 bg-gray-50">
                  <div className="flex items-start gap-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    ) : (
                      <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">
                        Question {qIndex + 1}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">{question.question}</p>

                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => {
                          const isUserAnswer = userAnswer.includes(oIndex);
                          const isCorrectAnswer = question.correctAnswers.includes(oIndex);

                          return (
                            <div
                              key={oIndex}
                              className={`p-3 rounded-lg text-sm ${isCorrectAnswer
                                  ? 'bg-green-100 border-2 border-green-500'
                                  : isUserAnswer
                                    ? 'bg-red-100 border-2 border-red-500'
                                    : 'bg-white border border-gray-200'
                                }`}
                            >
                              {option}
                              {isCorrectAnswer && (
                                <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                              )}
                              {isUserAnswer && !isCorrectAnswer && (
                                <span className="ml-2 text-red-600 font-semibold">✗ Votre réponse</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              <RotateCcw size={20} />
              Recommencer le QCM
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = AdvancedTrainingQuestions[currentQuestion];
  const userAnswers = selectedAnswers[currentQuestion] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* En-tête avec progression */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              QCM Community Management
            </h1>
            <span className="text-lg font-semibold text-indigo-600">
              Question {currentQuestion + 1} / {AdvancedTrainingQuestions.length}
            </span>
          </div>

          {/* Barre de progression */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-indigo-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte de question */}
        <div className="bg-white shadow-lg p-8 mb-4">
          <div className="mb-6">
            {question.multiSelect && (
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Sélection multiple
              </span>
            )}
            <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
              {question.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = userAnswers.includes(index);

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${isSelected
                      ? 'border-indigo-600 bg-indigo-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                      }`}>
                      {isSelected && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-b-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <ChevronLeft size={20} />
              Précédent
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {Object.keys(selectedAnswers).length} / {AdvancedTrainingQuestions.length} réponses
              </p>
            </div>

            <button
              onClick={goToNext}
              disabled={userAnswers.length === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${userAnswers.length === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : currentQuestion === AdvancedTrainingQuestions.length - 1
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
            >
              {currentQuestion === AdvancedTrainingQuestions.length - 1 ? 'Terminer' : 'Suivant'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage2;