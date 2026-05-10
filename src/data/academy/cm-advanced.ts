import type { Course, Chapter, Question } from './types';

// ─── Questions extraites de TrainingPage2.tsx (réparties en 6 chapitres de 5) ──

const ch1Quiz: Question[] = [
  { id:1, question:"Une marque de cosmétiques constate qu'une influenceuse a publié un avis négatif suite à un produit défectueux. La publication génère des milliers de commentaires négatifs.\n\nQuelle approche stratégique adopter en priorité ?", options:["Publier un communiqué officiel pour démentir","Contacter l'influenceuse en privé pour comprendre le problème et proposer une solution","Ignorer la situation","Lancer une campagne publicitaire massive"], correctAnswers:[1], multiSelect:false },
  { id:2, question:"Un community manager gère une communauté internationale de gamers. Les membres européens et asiatiques ne participent jamais aux mêmes discussions.\n\nQuelles stratégies favoriser la cohésion ? (Sélectionnez deux réponses)", options:["Créer des événements asynchrones (défis sur 48h)","Nommer des modérateurs ambassadeurs dans chaque zone","Obliger tous les membres à participer aux heures GMT","Diviser la communauté en sous-groupes séparés"], correctAnswers:[0,1], multiSelect:true },
  { id:3, question:"Une startup SaaS B2B : seuls 5% des 10 000 utilisateurs interagissent.\n\nQuelle stratégie d'activation est la plus efficace ?", options:["Créer un programme de champions/ambassadeurs avec avantages exclusifs","Envoyer des emails quotidiens","Publier plus de contenu promotionnel","Organiser uniquement des webinaires sans interaction"], correctAnswers:[0], multiSelect:false },
  { id:4, question:"Un concurrent utilise de faux comptes pour publier des commentaires négatifs systématiques.\n\nQuelle est la meilleure approche ?", options:["Répondre agressivement","Documenter les preuves, signaler et mettre en place un filtrage automatique","Créer de faux comptes pour attaquer en retour","Ignorer complètement"], correctAnswers:[1], multiSelect:false },
  { id:5, question:"Un débat polarisant sur les méthodes d'éducation émerge dans une communauté de parentalité.\n\nComment modérer ? (Sélectionnez deux réponses)", options:["Rappeler que la diversité est normale et inviter au respect","Supprimer tous les commentaires et bannir les participants","Prendre position publiquement","Organiser un live avec un expert neutre"], correctAnswers:[0,3], multiSelect:true },
];

const ch2Quiz: Question[] = [
  { id:6, question:"80% de l'engagement provient de seulement 20 membres sur 50 000.\n\nQuelle analyse faire ?", options:["C'est normal, se concentrer sur ces super-contributeurs","Signal d'alarme : la communauté manque de diversité, il faut activer les membres silencieux","Bannir les super-contributeurs","Aucune action à prendre"], correctAnswers:[1], multiSelect:false },
  { id:7, question:"Une marque de mode durable lance une collection capsule sans budget publicitaire.\n\nQuelle tactique marketing sera la plus efficace ?", options:["Système de liste d'attente exclusive avec parrainage","Publier massivement le même message partout","Attendre le partage organique","Envoyer un email de masse"], correctAnswers:[0], multiSelect:false },
  { id:8, question:"Un groupe de 100 000 membres est spammé. 200 signalements par jour.\n\nQuelles mesures préventives structurelles ? (Sélectionnez deux réponses)", options:["Activer les questions de sélection à l'entrée","Mettre tous les posts en approbation manuelle","Créer un système de points de réputation","Bannir tous les nouveaux membres"], correctAnswers:[0,2], multiSelect:true },
  { id:9, question:"Une entreprise technologique veut mesurer le ROI exact de sa communauté.\n\nQuels indicateurs sont les plus pertinents ? (Sélectionnez deux réponses)", options:["Taux de conversion membres vs non-membres","Nombre total de likes","Réduction du coût de support grâce au peer-to-peer","Nombre d'abonnés Instagram"], correctAnswers:[0,2], multiSelect:true },
  { id:10, question:"Les posts du jeudi à 14h génèrent 10x plus d'engagement que le lundi matin.\n\nQuelle stratégie d'optimisation ?", options:["Concentrer le contenu premium le jeudi, contenu evergreen les autres jours","Publier le même contenu tous les jours","Abandonner le lundi","Publier 10 fois le jeudi uniquement"], correctAnswers:[0], multiSelect:false },
];

const ch3Quiz: Question[] = [
  { id:11, question:"Un produit défectueux a causé des blessures. Les réseaux sociaux s'enflamment.\n\nQuelle séquence de gestion de crise ?", options:["Reconnaissance immédiate, excuses, actions correctives, communication transparente","Silence total en attendant le feu vert juridique","Rejeter la responsabilité sur les utilisateurs","Supprimer les commentaires négatifs et bloquer"], correctAnswers:[0], multiSelect:false },
  { id:12, question:"Le community manager gère des développeurs techniques mais n'a pas de compétences en programmation.\n\nComment maintenir sa crédibilité ?", options:["Prétendre comprendre tous les sujets","S'appuyer sur des membres experts comme co-modérateurs, être transparent sur son rôle","Éviter les discussions techniques","Démissionner"], correctAnswers:[1], multiSelect:false },
  { id:13, question:"Une communauté de 5 000 créateurs YouTube. Un système de mentorat serait utile mais l'organisation manuelle impossible.\n\nQuelle approche scalable ?", options:["Matching automatique basé sur les centres d'intérêt, groupes de 5-6","Assigner manuellement chaque paire","Ne rien faire","Un seul expert pour 5000 membres"], correctAnswers:[0], multiSelect:false },
  { id:14, question:"Après chaque Story, 50-100 DM avec des questions similaires.\n\nComment optimiser ?", options:["Ignorer les DM","Créer des Quick Replies et un chatbot pour le premier niveau","Répondre manuellement à chaque message","Désactiver les DM"], correctAnswers:[1], multiSelect:false },
  { id:15, question:"Défi communautaire de 30 jours. Objectif : 40% de complétion.\n\nQuels éléments de gamification ? (Sélectionnez deux réponses)", options:["Check-in quotidien avec badges et tableau de classement","Lots très coûteux uniquement pour le gagnant","Mini-récompenses hebdomadaires","Aucune reconnaissance"], correctAnswers:[0,2], multiSelect:true },
];

const ch4Quiz: Question[] = [
  { id:16, question:"Un membre influent diffuse des fausses informations de santé. D'autres relaient.\n\nComment gérer ?", options:["Le bannir immédiatement","Le contacter en privé avec des sources fiables, proposer correction, puis intervention mesurée si refus","Laisser faire car il est populaire","Le discréditer publiquement"], correctAnswers:[1], multiSelect:false },
  { id:17, question:"Le community manager a 4h/jour. Choix entre création de contenu et interaction.\n\nQuelle allocation de temps ?", options:["100% création, 0% interaction","70% interaction, 30% création stratégique de qualité","50/50 sans stratégie","0% création, 100% interaction"], correctAnswers:[1], multiSelect:false },
  { id:18, question:"Communauté Slack privée B2B pour clients premium.\n\nQuel modèle créera le plus de valeur ?", options:["Accès libre sans structure","Canaux thématiques + AMA mensuels + peer-to-peer support + early access","Un canal unique de communications marketing","Interdire les discussions entre membres"], correctAnswers:[1], multiSelect:false },
  { id:19, question:"60% de l'audience est sur TikTok. La direction hésite à investir.\n\nQuels arguments data-driven ? (Sélectionnez deux réponses)", options:["Analyse comparative du coût d'acquisition client TikTok vs autres","'Tout le monde est sur TikTok' sans données","Étude de cas de concurrents avec métriques","L'âge moyen de l'audience sans lien avec TikTok"], correctAnswers:[0,2], multiSelect:true },
  { id:20, question:"L'engagement baisse de 30% en 3 mois. Les membres historiques partent.\n\nQuelle approche diagnostique en premier ?", options:["Paniquer et tout changer","Mener une enquête qualitative auprès des membres actifs ET inactifs","Augmenter la fréquence de publication","Accuser l'algorithme"], correctAnswers:[1], multiSelect:false },
];

const ch5Quiz: Question[] = [
  { id:21, question:"Événement virtuel avec 1 000 participants. Le chat défile trop vite.\n\nQuelle solution ?", options:["Désactiver le chat","Salles parallèles par thème + modérateurs dédiés + Q&A structuré","Laisser le chaos","Limiter à 10 personnes"], correctAnswers:[1], multiSelect:false },
  { id:22, question:"Gérer simultanément 5 plateformes avec des ressources limitées.\n\nQuelle priorisation ?", options:["Présence médiocre sur les 5","Identifier les 2 plateformes à plus fort ROI, exceller dessus, puis expansion","Abandonner toutes sauf une","Poster le même contenu partout"], correctAnswers:[1], multiSelect:false },
  { id:23, question:"Marque de luxe : créer l'exclusivité sans aliéner les nouveaux.\n\nQuelle stratégie de tiering ?", options:["Même accès pour tous","3 niveaux : Public → Vérifiés (30 jours) → VIP Ambassadeurs","Accès uniquement pour +10 000€","Système aléatoire"], correctAnswers:[1], multiSelect:false },
  { id:24, question:"Un membre utilise la communauté uniquement pour recruter pour son MLM.\n\nQuelle escalade de modération ?", options:["1er avertissement privé → 2e avertissement public → bannissement progressif","Bannissement immédiat sans avertissement","Laisser faire","Supprimer ses posts sans communication"], correctAnswers:[0], multiSelect:false },
  { id:25, question:"La communauté génère du UGC de qualité. La marque veut le réutiliser.\n\nQuelle approche légale et éthique ?", options:["Utiliser sans permission","Programme UGC officiel : autorisation, crédit, compensation, contrat clair","Recréer un contenu similaire sans créditer","Voler le contenu"], correctAnswers:[1], multiSelect:false },
];

const ch6Quiz: Question[] = [
  { id:26, question:"Un nouveau réseau social émerge. Faut-il y investir immédiatement ?\n\nQuels critères d'évaluation ? (Sélectionnez deux réponses)", options:["Présence de l'audience cible (données démographiques)","Le simple fait que c'est nouveau","Capacité à générer du ROI mesurable","L'avis personnel du CEO"], correctAnswers:[0,2], multiSelect:true },
  { id:27, question:"Des habitués utilisent du jargon interne. De nouveaux membres se sentent exclus.\n\nComment rendre la communauté plus inclusive ?", options:["Bannir les habitués","Créer un glossaire, un post d'onboarding, encourager les questions des nouveaux","Ignorer les retours","Créer deux communautés séparées"], correctAnswers:[1], multiSelect:false },
  { id:28, question:"70% des conversions viennent de recommandations organiques non structurées.\n\nComment transformer en programme scalable ?", options:["Ne rien faire","Programme de parrainage avec tracking, incentives, tableau de bord, récompenses graduées","Forcer le partage sous peine de bannissement","Acheter de faux avis"], correctAnswers:[1], multiSelect:false },
  { id:29, question:"La direction demande des KPIs concrets liés au chiffre d'affaires.\n\nQuel framework de mesure ?", options:["Se concentrer sur les vanity metrics","Implémenter : Community Lifetime Value, conversion, réduction du churn, ticket moyen, NPS","Inventer des chiffres","Refuser de mesurer"], correctAnswers:[1], multiSelect:false },
  { id:30, question:"Un post humoristique choque les membres d'une autre culture dans une communauté internationale.\n\nQuelle politique éditoriale ? (Sélectionnez deux réponses)", options:["Charte de contenu multiculturel avec guidelines","Imposer la culture du pays d'origine","Former l'équipe aux différences culturelles + validation croisée","Ne jamais rien publier"], correctAnswers:[0,2], multiSelect:true },
];

// ─── Chapitres ────────────────────────────────────────────────────────────────

const chapters: Chapter[] = [
  {
    id: 'gestion-crise-influence',
    title: 'Gestion de Crise & Influence',
    description: 'Gérer les crises de réputation et les relations avec les influenceurs.',
    icon: '🔥',
    lessons: [
      { id: 'al1', title: 'Répondre aux crises d\'influence', duration: '12 min', content: [
        { type: 'text', content: 'Quand un influenceur publie un avis négatif justifié, la réaction de la marque définit la suite de la crise. L\'approche privée-d\'abord est toujours préférable.' },
        { type: 'callout', title: 'Protocole de crise influenceur', content: ['1. Contacter en privé pour comprendre le problème', '2. Proposer une solution concrète et rapide', '3. Demander une mise à jour publique', '4. Communiquer de manière transparente'] },
        { type: 'warning', content: 'Ne jamais publier un communiqué de déni comme première réaction. Cela amplifie la crise et détruit la confiance.' },
      ]},
      { id: 'al2', title: 'Communautés internationales', duration: '10 min', content: [
        { type: 'text', content: 'Gérer une communauté internationale nécessite des stratégies qui transcendent les fuseaux horaires et les différences culturelles.' },
        { type: 'list', title: 'Stratégies de cohésion globale', content: ['Événements asynchrones (défis sur 48-72h)', 'Modérateurs ambassadeurs par zone géographique', 'Contenu multilingue ou traduit', 'Sensibilité culturelle dans les publications'] },
      ]},
    ],
    quiz: ch1Quiz,
  },
  {
    id: 'croissance-avancee',
    title: 'Croissance & Scaling',
    description: 'Stratégies avancées pour scaler une communauté et combattre le spam.',
    icon: '🚀',
    lessons: [
      { id: 'al3', title: 'Activer les membres silencieux', duration: '10 min', content: [
        { type: 'text', content: 'Si 80% de l\'engagement vient de 20 membres sur 50 000, c\'est un signal d\'alarme. La communauté risque de devenir un cercle fermé. Il faut activer les membres silencieux.' },
        { type: 'callout', title: 'Techniques d\'activation', content: ['Programmes de champions/ambassadeurs avec avantages exclusifs', 'Système de liste d\'attente avec parrainage', 'Questions de sélection à l\'entrée pour filtrer les intentions', 'Système de points de réputation progressive'] },
      ]},
      { id: 'al4', title: 'Mesurer le ROI', duration: '12 min', content: [
        { type: 'text', content: 'Le ROI d\'une communauté se mesure par des indicateurs business concrets, pas des vanity metrics.' },
        { type: 'list', title: 'KPI business', content: ['Taux de conversion membres vs non-membres', 'Réduction du coût de support (peer-to-peer)', 'Optimisation des horaires de publication par les données', 'Impact direct sur le chiffre d\'affaires'] },
      ]},
    ],
    quiz: ch2Quiz,
  },
  {
    id: 'leadership-crise',
    title: 'Leadership & Crédibilité',
    description: 'Maintenir la crédibilité et gérer les crises produit majeures.',
    icon: '👑',
    lessons: [
      { id: 'al5', title: 'Gestion de crise produit', duration: '12 min', content: [
        { type: 'text', content: 'Quand un produit cause des problèmes réels, la séquence de communication est critique : reconnaissance, excuses, actions correctives, suivi transparent.' },
        { type: 'warning', content: 'Le silence en attendant le feu vert juridique peut prendre des semaines et détruire la confiance. Communiquez immédiatement sur ce que vous savez.' },
      ]},
      { id: 'al6', title: 'Crédibilité sans expertise technique', duration: '8 min', content: [
        { type: 'text', content: 'Un community manager n\'a pas besoin d\'être expert dans le domaine technique. Son rôle est de faciliter, pas d\'être l\'expert. Appuyez-vous sur des co-modérateurs experts et soyez transparent sur votre rôle.' },
        { type: 'tip', content: 'Le mentorat scalable passe par le matching automatique en petits groupes (5-6 personnes) basés sur les centres d\'intérêt et le niveau d\'expérience.' },
      ]},
    ],
    quiz: ch3Quiz,
  },
  {
    id: 'strategie-contenu',
    title: 'Stratégie de Contenu & Animation',
    description: 'Optimiser la création de contenu et la gestion des plateformes multiples.',
    icon: '📝',
    lessons: [
      { id: 'al7', title: 'Gérer la désinformation', duration: '10 min', content: [
        { type: 'text', content: 'Quand un membre influent diffuse de fausses informations, l\'approche doit être graduée : contact privé avec sources fiables, puis intervention publique mesurée si refus de corriger.' },
        { type: 'callout', title: 'Allocation de temps optimale', content: ['70% interaction et animation communautaire', '30% création de contenu stratégique de qualité', 'L\'interaction génère plus de valeur que le contenu unidirectionnel'] },
      ]},
      { id: 'al8', title: 'Communautés B2B premium', duration: '10 min', content: [
        { type: 'text', content: 'Les communautés Slack/Discord B2B les plus réussies combinent : canaux thématiques, AMA mensuels avec les fondateurs, support peer-to-peer, et early access aux fonctionnalités.' },
        { type: 'tip', content: 'Pour justifier un investissement TikTok, utilisez des arguments data-driven : coût d\'acquisition comparatif et études de cas de concurrents avec métriques de croissance.' },
      ]},
    ],
    quiz: ch4Quiz,
  },
  {
    id: 'events-plateformes',
    title: 'Événements & Multi-Plateformes',
    description: 'Organiser des événements virtuels et gérer plusieurs plateformes efficacement.',
    icon: '🎪',
    lessons: [
      { id: 'al9', title: 'Événements à grande échelle', duration: '10 min', content: [
        { type: 'text', content: 'Pour un événement de 1 000+ participants, le chat unique est ingérable. Créez des salles parallèles thématiques avec des modérateurs dédiés et un Q&A structuré.' },
        { type: 'list', title: 'Priorisation multi-plateformes', content: ['Identifier les 2 plateformes à plus fort ROI', 'Exceller sur celles-ci avant d\'élargir', 'Adapter le contenu à chaque plateforme', 'Ne jamais poster le même contenu partout'] },
      ]},
      { id: 'al10', title: 'Exclusivité & modération avancée', duration: '10 min', content: [
        { type: 'text', content: 'Le tiering (niveaux d\'accès) crée de l\'exclusivité sans aliéner : Public → Membres vérifiés (30 jours) → VIP Ambassadeurs. La modération suit une escalade progressive.' },
        { type: 'example', title: 'Escalade de modération', content: '1er avertissement privé → 2e avertissement public si récidive → Bannissement temporaire → Permanent si continuation.' },
      ]},
    ],
    quiz: ch5Quiz,
  },
  {
    id: 'ethique-international',
    title: 'Éthique, UGC & International',
    description: 'Gérer les droits d\'auteur, le referral et les sensibilités culturelles.',
    icon: '🌍',
    lessons: [
      { id: 'al11', title: 'UGC et droits d\'auteur', duration: '10 min', content: [
        { type: 'text', content: 'Réutiliser le contenu généré par les utilisateurs nécessite un programme officiel : demande d\'autorisation systématique, crédit à l\'auteur, compensation (financière ou visibilité), et contrat clair.' },
        { type: 'callout', title: 'Programme de referral scalable', content: ['Tracking des recommandations', 'Incentives pour le parrain ET le filleul', 'Tableau de bord de suivi', 'Récompenses graduées selon le volume'] },
      ]},
      { id: 'al12', title: 'Sensibilités culturelles', duration: '10 min', content: [
        { type: 'text', content: 'Dans une communauté internationale, un post humoristique peut choquer une autre culture. La solution : charte de contenu multiculturel et validation croisée par une équipe formée aux différences culturelles.' },
        { type: 'list', title: 'Framework de mesure business', content: ['Community Lifetime Value', 'Taux de conversion membres vs non-membres', 'Réduction du churn', 'Ticket moyen', 'Net Promoter Score (NPS)'] },
      ]},
    ],
    quiz: ch6Quiz,
  },
];

const exam: Question[] = [ch1Quiz[0], ch1Quiz[2], ch1Quiz[4], ch2Quiz[1], ch2Quiz[3], ch3Quiz[0], ch3Quiz[2], ch3Quiz[4], ch4Quiz[1], ch4Quiz[3], ch5Quiz[0], ch5Quiz[2], ch5Quiz[4], ch6Quiz[1], ch6Quiz[4]];

export const cmAdvanced: Course = {
  id: 'cm-advanced',
  title: 'Community Management — Avancé',
  description: 'Stratégies avancées : gestion de crise, scaling, ROI, leadership et gestion internationale.',
  icon: '🎓',
  color: '#FF8C42',
  gradient: 'from-[#FF8C42] to-[#d96a2a]',
  chapters,
  exam,
  level: 'advanced',
  duration: '5h00',
};
