import type { Question } from './types';

// ─── Métadonnées de l'examen premium ─────────────────────────────────────────
export const examPremiumMeta = {
  title: 'EXAMEN DE COMMUNITY MANAGEMENT',
  subtitle: 'Épreuve Écrite Premium',
  duration: '2 heures',
  documents: 'Aucun',
  materiel: 'Calculatrice non programmable',
};

// ─── 30 questions — Examen Premium ───────────────────────────────────────────
export const examFinal3: Question[] = [
  {
    id: 1,
    question: `Un fournisseur de salons de coiffure souhaite créer une communauté virtuelle pour stimuler les ventes de sa boutique en ligne. Son objectif est de suivre les tendances et de faire connaître ses produits.
Il a pour mission de devenir la principale source d'inspiration en matière de style. Pour ce faire, il doit rester à la pointe des nouveautés dans un secteur en pleine évolution et conserver son attrait auprès d'une large audience.

Sur quelle série de KPI le gestionnaire de communauté doit-il concentrer ses efforts ?`,
    options: [
      "Le trafic du site web • Le sentiment • La croissance de l'audience",
      "La couverture • Le trafic du site web • La croissance de l'audience",
      "La couverture • Le sentiment • Le trafic du site web",
      "La couverture • La croissance de l'audience • Le sentiment",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 2,
    question: `Après plusieurs années de croissance rapide, un groupe très actif perd son gestionnaire de communauté initial. Lorsqu'une nouvelle personne prend la relève, elle découvre que de nombreuses publications enfreignent les règles de la communauté et doivent être soumises à une modération. Ce nouveau gestionnaire de communauté souhaite donc asseoir sa présence et clarifier les règles du groupe.

Laquelle de ces options constitue la méthode la plus efficace pour restaurer et faire connaître les règles de la communauté ?`,
    options: [
      "Identifier les membres dans une publication lorsqu'ils enfreignent les règles de la communauté",
      "Commenter les publications en insérant des liens vers les règles de la communauté",
      "Publier une annonce expliquant les règles de la communauté",
      "Supprimer les membres qui ont déjà enfreint les règles de la communauté",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 3,
    question: `Un coach personnel souhaite accroître sa présence en ligne. Pour attirer davantage de clients potentiels, il crée une page Facebook, un groupe Facebook et un profil Instagram.
Cependant, le coach éprouve des difficultés à assurer la gestion de son marketing sur les médias sociaux, en raison du temps nécessaire pour créer du contenu et promouvoir chaque plate-forme. Les résultats ne compensent tout simplement pas le temps investi.
C'est le profil Instagram qui obtient la plus grande couverture, tandis que le groupe Facebook suscite le plus fort taux d'interaction. Le coach contacte un gestionnaire de communauté pour qu'il l'aide à déterminer quelle est la plate-forme sur laquelle il doit se concentrer.

De quelle information cruciale le gestionnaire de communauté a-t-il besoin pour prendre cette décision ?`,
    options: [
      "À quel point le coach apprécie l'utilisation de chaque plate-forme",
      "Combien de ses clients actuels ont découvert le coach sur chaque plate-forme",
      "Le niveau d'interaction obtenu sur chaque plate-forme",
      "Combien de temps le coach consacre à chaque plate-forme",
    ],
    correctAnswers: [1],
    multiSelect: false,
  },
  {
    id: 4,
    question: `Un groupe de soutien aux parents composé de personnes très soudées a commencé à se développer rapidement. L'équipe de direction a reçu plusieurs signalements indiquant que le groupe compte désormais trop de membres et que les discussions s'écartent fréquemment du sujet initial. Afin de continuer à développer les liens étroits que la communauté cultivait auparavant et de répondre aux préoccupations des membres de longue date, le gestionnaire de communauté doit créer de nouveaux groupes consacrés à des sujets spécifiques.

De quelles manières le gestionnaire de communauté peut-il créer ces groupes thématiques ? (Sélectionnez deux réponses)`,
    options: [
      "En créant un sondage pour demander aux membres ce qui les intéresse et ce dont ils veulent que ces nouveaux groupes traitent",
      "En lançant quelques groupes, en les promouvant dans le groupe actuel et en commençant à créer du contenu pour ces nouveaux groupes",
      "En analysant les publications les plus populaires sur les six derniers mois et en créant des groupes basés sur ces thèmes",
      "En adhérant à des groupes similaires pour voir de quoi ils débattent et en créant des groupes liés à ces thématiques",
    ],
    correctAnswers: [0, 2],
    multiSelect: true,
  },
  {
    id: 5,
    question: `Un gestionnaire de communauté gère un groupe Facebook réunissant des personnes qui se sont lancé le défi de ne pas boire d'alcool pendant 30 jours.
Le groupe a connu une croissance organique en deux ans, après que le fondateur a lui-même relevé un défi de 30 jours et invité d'autres personnes à en faire autant. Le groupe compte aujourd'hui plus de 3 000 membres qui y puisent des astuces, des conseils et du soutien pour relever le défi.
Le gestionnaire de communauté souhaite que le groupe devienne la référence en matière de soutien.

Quelle mesure le gestionnaire de communauté doit-il prendre en premier ?`,
    options: [
      "Définir les principes de la marque pour garantir un contenu cohérent dans la communauté",
      "Passer en revue les publications de la communauté et supprimer le contenu non professionnel",
      "Demander aux membres de soumettre des idées rentables pour la communauté",
      "Informer les membres qu'ils doivent payer une cotisation pour continuer à faire partie de la communauté",
    ],
    correctAnswers: [0],
    multiSelect: false,
  },
  {
    id: 6,
    question: `Le responsable de la gestion de la communauté d'une agence touristique en ligne recrute 15 gestionnaires de communauté régionaux. Chaque gestionnaire de communauté est à la tête d'une Page Facebook et d'un compte Instagram régionaux. Le responsable de la gestion de la communauté doit assurer le leadership avec un sentiment et des indicateurs globaux.

Pour instaurer un système de reporting global, que doit faire le responsable de la gestion de la communauté ?`,
    options: [
      "Demander à chaque gestionnaire régional de soumettre un rapport individuel, puis les fusionner en un seul rapport",
      "Créer un modèle et demander à chaque gestionnaire régional de le remplir une fois par mois",
      "Organiser une réunion quotidienne avec l'ensemble de l'équipe pour suivre les progrès réalisés dans chaque zone géographique",
      "Créer un modèle et demander à chaque gestionnaire régional de présenter des résultats supérieurs au seuil de référence",
    ],
    correctAnswers: [1],
    multiSelect: false,
  },
  {
    id: 7,
    question: `Un gestionnaire de communauté doit développer une équipe de direction chargée de gérer le contenu d'une communauté au sein de laquelle les membres partagent des informations privées.
Par le passé, deux membres reconnus ont dirigé cette communauté, et les membres de la communauté sont réticents à l'idée d'une équipe de direction plus importante.
L'équipe de direction élargie doit faire preuve de cohérence et préserver un environnement inclusif.

Comment le gestionnaire de communauté peut-il répondre à ces exigences ?`,
    options: [
      "En présentant l'équipe de direction à l'aide de photos et d'annonces, et en les identifiant régulièrement",
      "En créant un profil d'équipe administrative que tous les membres de l'équipe peuvent utiliser lorsqu'ils effectuent une action officielle au nom de l'équipe",
      "En confiant à certains membres de l'équipe administrative la tâche de faire respecter les règles, et en chargeant d'autres membres de préserver un environnement inclusif",
      "En créant une Page d'équipe pour les communications officielles, et en invitant les membres de l'équipe administrative à utiliser leur profil personnel",
    ],
    correctAnswers: [3],
    multiSelect: false,
  },
  {
    id: 8,
    question: `Une célèbre marque de prêt-à-porter féminin a une présence en ligne significative et une clientèle importante dans la tranche d'âge 50-65 ans. Pour attirer une clientèle plus jeune, l'entreprise passe un contrat avec un célèbre créateur en vue de lancer une nouvelle collection, qui sera commercialisée dans un mois.

Quelles mesures le gestionnaire de communauté doit-il prendre pour accroître la notoriété de la marque ? (Sélectionnez deux réponses)`,
    options: [
      "Demander aux membres de la communauté de créer une publication et d'identifier plusieurs de leurs amis",
      "Diffuser des publicités ciblées sur toutes les plates-formes utilisées par la marque",
      "Inviter des influenceurs de mode à promouvoir la nouvelle collection lors de son lancement en direct",
      "Créer de nouveaux comptes sur les médias sociaux pour cibler la nouvelle tranche d'âge",
      "Commenter les publications des concurrents pour que leur communauté soit informée du lancement de la nouvelle collection",
    ],
    correctAnswers: [1, 2],
    multiSelect: true,
  },
  {
    id: 9,
    question: `Le recteur d'une grande école souhaite lancer une nouvelle campagne de financement en partenariat avec les anciens élèves, afin de collecter des fonds pour un bâtiment de la faculté de sciences sociales.
Cependant, la plupart des anciens élèves perdent le contact avec l'école quelques années après l'obtention de leur diplôme et ne participent pas à la communauté des anciens élèves. Avant de lancer une campagne de collecte de fonds, le gestionnaire de communauté doit déterminer exactement quand et pourquoi la participation des anciens élèves diminue.

Quelles sont les deux tactiques que le gestionnaire de communauté doit adopter pour obtenir ces renseignements ? (Sélectionnez deux réponses)`,
    options: [
      "Analyser la baisse de participation aux contenus vidéo",
      "Interroger les anciens élèves",
      "Examiner les schémas d'interaction sur la Page Facebook de l'école",
      "Réaliser un sondage auprès des membres de la communauté",
    ],
    correctAnswers: [1, 3],
    multiSelect: true,
  },
  {
    id: 10,
    question: `Un grand groupe de soutien parental est ouvert à tous les parents. Il a débuté au Royaume-Uni sans aucune forme de publicité et possède désormais une communauté internationale dont les membres se trouvent principalement dans les pays anglophones.
Les membres situés dans les autres pays sont beaucoup moins nombreux que ceux du Royaume-Uni, mais leur effectif ne cesse d'augmenter. Le groupe souhaite être plus ouvert à la diversité culturelle.

Quelle stratégie le gestionnaire de communauté peut-il adopter pour inclure toutes les catégories d'audience ?`,
    options: [
      "Réutiliser du contenu en passant en revue et en recyclant de précédentes publications",
      "Augmenter les publications qui suscitent l'interaction et n'utiliser que du contenu inédit pour générer de l'interaction",
      "Demander aux membres quels types d'outils et de contenus ils aimeraient voir davantage figurer",
      "Effectuer des recherches et modifier les types de contenus pour qu'ils correspondent aux caractéristiques démographiques de tous les membres de la communauté",
    ],
    correctAnswers: [3],
    multiSelect: false,
  },
  {
    id: 11,
    question: `Le gestionnaire d'une grande communauté de professionnels élabore un calendrier de contenu afin de proposer un contenu thématique pour venir en aide aux membres qui en sont au début de leur carrière. Le groupe a connu un faible taux d'interaction au cours de l'année écoulée.

Quelle stratégie le gestionnaire de communauté doit-il appliquer pour planifier le contenu le plus pertinent ?`,
    options: [
      "Rechercher des thèmes de contenu populaires qui pourraient être intéressants pour la communauté",
      "Demander aux membres de la communauté de partager leurs publications les plus mémorables",
      "Passer en revue les données pour se faire une idée du contenu ayant reçu le plus d'interaction au sein de la communauté",
      "Réaliser un sondage auprès des membres de la communauté pour recueillir leurs questions les plus fréquentes sur les thématiques de contenu",
    ],
    correctAnswers: [3],
    multiSelect: false,
  },
  {
    id: 12,
    question: `Un consultant en entreprises met à disposition de ses clients potentiels un groupe Facebook gratuit pour les accompagner. Il a pour objectif de créer une interaction quotidienne constante.

Quelles stratégies le consultant peut-il appliquer pour atteindre son objectif ? (Sélectionnez deux réponses)`,
    options: [
      "Examiner les statistiques d'interaction pour comparer le nombre quotidien de publications",
      "Faire appel à un outil de planification pour créer des publications quotidiennes d'actualité afin de stimuler les échanges",
      "Mettre à la une les utilisateurs qui commentent le plus dans une publication hebdomadaire spéciale",
      "Fixer une règle de groupe qui exige une interaction quotidienne pour rester dans la communauté",
      "Commenter toutes les publications des membres au sein du groupe",
    ],
    correctAnswers: [0, 1],
    multiSelect: true,
  },
  {
    id: 13,
    question: `Un établissement privé qui dispense un enseignement sur les questions politiques gère un groupe public sur Facebook afin de sensibiliser les jeunes adultes (18 à 25 ans) à l'importance de la politique. L'objectif est de promouvoir un débat constructif.

Quelles stratégies le gestionnaire de communauté du groupe Facebook doit-il mettre en œuvre pour atteindre cet objectif ? (Sélectionnez deux réponses)`,
    options: [
      "Mettre en sourdine les membres qui enfreignent les règles du groupe à plusieurs reprises",
      "Publier les règles applicables à la communauté et les épingler comme une annonce",
      "Identifier des membres dans chaque sujet de discussion pour les encourager à publier des commentaires",
      "Utiliser un outil analytique pour déterminer quel est le meilleur contenu à diffuser",
    ],
    correctAnswers: [1, 3],
    multiSelect: true,
  },
  {
    id: 14,
    question: `Une communauté de randonneurs compte réunir un grand nombre de membres afin de relever un défi d'alpinisme au profit d'une œuvre de charité.
Il s'agit de la plus grande collecte de fonds menée par la communauté, et ce sera la troisième année qu'elle l'organise.

Quelles sont les deux mesures que le gestionnaire de communauté peut prendre pour s'assurer qu'autant de membres que possible participeront à ce défi ? (Sélectionnez deux réponses)`,
    options: [
      "Envoyer un message aux nouveaux membres en les invitant à participer au défi",
      "Créer un groupe secret réservé aux personnes qui participent au défi et y publier toutes les informations",
      "Mettre à la une les photos et les success stories passées et identifier les membres qui ont déjà participé à des défis",
      "Créer des publications pour encourager les personnes à s'inscrire et demander aux modérateurs de répondre à toutes les questions",
    ],
    correctAnswers: [2, 3],
    multiSelect: true,
  },
  {
    id: 15,
    question: `Un nouveau membre s'inscrit à un groupe local pour les mamans. Le groupe a des règles strictes, notamment : « Aucune publication d'achat, de vente ou d'échange n'est autorisée ». La nouvelle adhérente crée une publication dans laquelle elle indique qu'elle a des vêtements de bébé usagés à vendre.

Que doit faire le gestionnaire de communauté avant toute chose ?`,
    options: [
      "Approuver la publication mais identifier le membre dans les règles du groupe",
      "Publier un message de bienvenue en incluant un lien vers les règles de la communauté",
      "Refuser la publication et fournir une explication au membre",
      "Publier un rappel des règles à l'ensemble du groupe",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
];
