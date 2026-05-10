import type { Question } from './types';

// ─── Questions 16-30 — Examen Premium (suite) ───────────────────────────────

export const examPremiumPart2: Question[] = [
  {
    id: 16,
    question: `Un club de lecture en ligne a une politique stricte concernant l'autopromotion au sein du groupe. Les membres de la communauté sont encouragés à partager du contenu sur leurs livres préférés ou sur la parution à venir d'un auteur, mais ils ne sont pas autorisés à promouvoir leurs propres œuvres.
Un nouveau membre intègre le groupe et publie immédiatement un lien permettant d'acheter un livre qu'il a écrit. Après avoir vu cette publication, plusieurs autres membres du groupe commentent avec des liens vers leurs propres sites web, afin de faire la promotion de leurs ouvrages.
Le gestionnaire de communauté souhaite renforcer les règles du groupe auprès des membres.

Quelles mesures le gestionnaire de communauté doit-il prendre ? (Sélectionnez deux réponses)`,
    options: [
      "Supprimer la publication en utilisant la fonctionnalité Donner un avis",
      "Publier à nouveau les règles du groupe concernant l'auto-promotion",
      "Répondre à la publication en expliquant que ce comportement n'est pas autorisé",
      "Supprimer du groupe le membre qui a créé la publication",
    ],
    correctAnswers: [0, 1],
    multiSelect: true,
  },
  {
    id: 17,
    question: `L'équipe de gestion d'une application mobile est censée maintenir un haut niveau d'efficacité. Un membre de la communauté d'un groupe qui traite de l'application a publié la même question plusieurs fois au cours des dernières semaines. L'équipe a répondu à plusieurs reprises que la solution à ce problème était toujours en phase de développement. Le membre a alors commencé à poser la même question à de nombreuses reprises dans des commentaires sur des publications sans rapport avec son interrogation.
Le gestionnaire de communauté doit s'assurer que ce membre n'affecte pas négativement les autres.

Que doit faire le gestionnaire de communauté ?`,
    options: [
      "Inviter d'autres membres à expliquer que la réponse à la question a déjà été apportée",
      "Bloquer le membre du groupe pour éviter la question",
      "Supprimer le commentaire en appliquant la règle appropriée et en expliquant les mesures disciplinaires éventuelles",
      "Contacter le membre en privé pour lui demander si les réponses de l'équipe manquent de clarté",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 18,
    question: `Il existe une communauté en ligne qui vient principalement en aide aux parents célibataires. L'équipe de direction remarque une recrudescence de témoignages de parents isolés. L'un des principaux objectifs de la communauté est de mettre en relation les parents qui se trouvent à proximité géographiquement.

Que peut faire le gestionnaire de communauté pour aider les parents isolés à établir des liens entre eux ?`,
    options: [
      "Organiser une conférence en ligne d'une semaine sur le thème de la lutte contre l'isolement",
      "Créer une salle de réunion en ligne pour les membres de la communauté, qui soit ouverte 24 heures sur 24 et 7 jours sur 7",
      "Publier un message demandant aux membres d'indiquer leur adresse dans les commentaires",
      "Créer du contenu qui favorise les rencontres hors ligne, avec des schémas représentant des points de repère locaux",
    ],
    correctAnswers: [3],
    multiSelect: false,
  },
  {
    id: 19,
    question: `Une entreprise de lait maternisé pour enfants en bas âge dotée d'une importante communauté sollicite l'aide du gestionnaire de communauté en raison du faible taux d'interaction des membres.
Les parents rejoignent la communauté pour obtenir du soutien et créer des liens avec d'autres parents. Pourtant, la plupart des membres ne participent pas.

Que doit faire le gestionnaire de communauté pour augmenter les échanges significatifs entre les membres du groupe fermé ?`,
    options: [
      "Développer du contenu qui favorise le partage de photos et de témoignages",
      "Réaliser un sondage pour recueillir des réactions sur le lait maternisé",
      "Demander aux membres de partager leur publication préférée du groupe sur leur profil",
      "Créer une publication annonçant la commercialisation du dernier type de lait maternisé",
    ],
    correctAnswers: [0],
    multiSelect: false,
  },
  {
    id: 20,
    question: `Un gestionnaire de communauté nouvellement nommé apprend l'existence d'un conflit au sujet d'une publication dans la communauté. Cette communauté a récemment ajouté de nouvelles règles stipulant que seuls les liens provenant de sources crédibles sont autorisés. Plusieurs membres ont commencé à publier sur le fil de discussion des liens provenant de sources non fiables, et d'autres membres commencent à s'énerver. La publication a été signalée plusieurs fois. Le gestionnaire de communauté souhaite sensibiliser la communauté aux nouvelles règles.

Quelles mesures le gestionnaire de communauté doit-il prendre ? (Sélectionnez deux réponses)`,
    options: [
      "Supprimer et bloquer les membres qui ont enfreint les règles",
      "Supprimer les commentaires contenant des liens provenant de sources non fiables sur la publication",
      "Supprimer immédiatement la publication et envoyer un message aux membres concernés",
      "Publier un lien vers les règles du groupe qui sont en rapport avec ce sujet",
    ],
    correctAnswers: [1, 3],
    multiSelect: true,
  },
  {
    id: 21,
    question: `Une communauté reposant sur des centres d'intérêt, et dont les membres sont issus de différentes cultures, partage souvent de nombreuses publications sur le thème de l'émancipation individuelle. L'approbation des publications n'étant pas activée, les conversations font l'objet d'une étroite surveillance pour veiller à ce que les débats et les commentaires houleux ne dégénèrent pas en attaques personnelles. Un membre de longue date qui n'a rien publié sur le groupe depuis un an laisse un commentaire qui enfreint les règles relatives au marketing et au spam. Le commentaire est supprimé et un avis lui est communiqué par message privé.
Le membre est mécontent et publie à nouveau un message dans lequel il exprime son opinion au sujet de la suppression de son commentaire. Il critique l'équipe chargée de la gestion de la communauté et son approche vis-à-vis des règles.

Que doit faire le gestionnaire de communauté pour résoudre ce conflit ?`,
    options: [
      "Consulter l'historique personnel des administrateurs pour analyser l'efficacité de l'équipe d'administrateurs à faire respecter les règles du groupe",
      "Partager les règles et les directives en commentaire à la publication du membre et détecter les futures infractions en opérant un suivi régulier",
      "Supprimer le membre du groupe et éliminer tous les commentaires et publications des 30 derniers jours",
      "Utiliser le gestionnaire de contenu de marque pour déterminer quelles publications promotionnelles ont été approuvées par l'équipe d'administrateurs",
    ],
    correctAnswers: [1],
    multiSelect: false,
  },
  {
    id: 22,
    question: `Le gestionnaire de communauté d'une start-up spécialisée dans les technologies souhaite développer de nouveaux canaux de prospection des clients. La start-up possède une Page Facebook et un compte Instagram dont la couverture totale est de 80 000 abonnés.
Le responsable marketing de la start-up demande au gestionnaire de communauté de se renseigner sur les modalités de lancement d'un podcast. La start-up n'a jamais réalisé de podcasts auparavant.

Quelle est la première mesure que doit prendre le gestionnaire de communauté ?`,
    options: [
      "Rechercher et acheter le matériel technique nécessaire à l'enregistrement de podcasts, puis soumettre les dépenses à son responsable",
      "Identifier le contenu le plus performant de la présence actuelle de la start-up sur les médias sociaux en vue d'une éventuelle réutilisation dans le podcast",
      "Lancer le podcast dans les plus brefs délais et en assurer la promotion exclusivement sur la Page Facebook",
      "Examiner tous les podcasts existants dans le secteur et proposer du contenu inédit",
    ],
    correctAnswers: [1],
    multiSelect: false,
  },
  {
    id: 23,
    question: `Une communauté d'experts en médias sociaux souhaite stimuler les interactions et se développer. Pour ce faire, elle souhaite proposer à ses membres davantage d'occasions exclusives de faire connaissance et de tisser des liens en ligne.
Elle aimerait organiser régulièrement des séminaires où les influenceurs partageraient leur expertise.

Que peut faire le gestionnaire de communauté pour atteindre cet objectif ?`,
    options: [
      "Publier du contenu personnalisé par les influenceurs dans le groupe et stimuler les publications",
      "Donner aux membres un accès exclusif à la Page et au contenu des influenceurs",
      "Organiser des séances vidéo de questions-réponses en direct dans le groupe où les influenceurs animent le séminaire",
      "Organiser une séance de questions-réponses sous forme de Stories Instagram, où les membres peuvent poser des questions aux influenceurs",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 24,
    question: `Un gestionnaire de communauté dirige un groupe pour une équipe de rugby locale. Le groupe n'autorise que les membres actuels et anciens de l'équipe à en faire partie. La demande d'adhésion d'un joueur de 11 ans est refusée. Le joueur se plaint et affirme que le gestionnaire de communauté fait preuve de discrimination à son égard.

Que doit faire le gestionnaire de communauté ?`,
    options: [
      "Ignorer le dossier au motif que les critères d'adhésion sont clairement énoncés",
      "Autoriser la demande d'adhésion du joueur de 11 ans pour qu'il ne signale pas le groupe",
      "Répondre à la plainte du joueur en lui envoyant un lien vers les Standards de la communauté Facebook",
      "Demander à la communauté de voter pour décider d'autoriser ou non d'autres personnes à faire partie du groupe",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 25,
    question: `Un gestionnaire de communauté lance une campagne pour la Journée de la Terre. L'objectif est de susciter un taux d'interaction plus élevé chez les personnes extérieures à la communauté, en invitant un influenceur à diffuser une vidéo en direct sur une Page Facebook.

Quelle variable devrait être prise en considération pour déterminer si l'objectif est atteint ?`,
    options: [
      "Les interactions de la part de nouveaux abonnés",
      "Les vues de la vidéo",
      "Les interactions résultant des partages",
      "Les mentions J'aime sur la vidéo",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 26,
    question: `Une marque de joaillerie possède une Page Facebook qu'elle utilise pour attirer les personnes sur son site web.
Le gestionnaire de communauté sélectionne régulièrement les publications organiques les plus performantes afin de les transformer en contenu publicitaire pour des publicités payantes sur Facebook.
Le gestionnaire de communauté dispose des éléments de contenu suivants :

Type de publication | Couverture | Interaction | Clics vers un site web | Taux de conversion
Streaming en direct | 15 745 | 5 432 | 805 | 5%
Image | 7 998 | 2 362 | 799 | 10%
Sondage | 4 770 | 1 520 | 175 | 3,5%
Vidéo | 10 523 | 5 480 | 429 | 4%

Quel est le contenu dont le gestionnaire de communauté doit s'attendre à obtenir les meilleurs résultats lors d'une première campagne publicitaire ?`,
    options: [
      "La vidéo",
      "Le streaming en direct",
      "Le sondage",
      "L'image",
    ],
    correctAnswers: [3],
    multiSelect: false,
  },
  {
    id: 27,
    question: `Une entreprise propose une formation en marketing moyennant un abonnement mensuel. En plus de la formation, les membres adhérents ont accès à une communauté en ligne exclusive qui leur permet d'entrer en contact avec leurs collègues. La communauté est très active et les membres affirment que le groupe leur est très utile. Toutefois, le PDG s'inquiète du fait que la communauté ne génère pas d'augmentation des revenus ni de diminution des coûts pour l'entreprise, et il envisage de mettre fin à l'aspect communautaire de ce service.

Quelle mesure le gestionnaire de communauté doit-il prendre pour plaider en faveur du maintien de la communauté ?`,
    options: [
      "Sonder les membres pour recueillir des témoignages positifs sur la communauté, puis en faire part au PDG",
      "Déterminer si les membres du groupe sont plus susceptibles de conserver leur abonnement mensuel",
      "Publier un sondage dans la communauté pour demander aux membres s'ils souhaitent que l'entreprise supprime le groupe",
      "Apporter des éléments d'information sur le nombre de membres et les statistiques d'interaction pour que le PDG puisse les consulter",
    ],
    correctAnswers: [1],
    multiSelect: false,
  },
  {
    id: 28,
    question: `Une communauté qui jouit d'une importante offre en ligne et en personne s'est vu octroyer un financement il y a 12 mois pour se développer et s'étendre à l'échelle mondiale. Pour bénéficier d'opportunités de financement et de partenariats de marque similaires à l'avenir, le gestionnaire de communauté doit rédiger un rapport montrant que la communauté a atteint ses objectifs avec le financement initial.

Quelles données le gestionnaire de communauté doit-il inclure dans ce rapport ?`,
    options: [
      "Partager des devis et un nuage de mots-clés détaillé illustrant les sentiments principaux et les recommandations fortes des membres",
      "Recueillir un ensemble de recommandations et de témoignages de la communauté avec des données démographiques individuelles",
      "Compiler des statistiques comprenant des dates, des données démographiques concernant les membres de la communauté et des chiffres de croissance",
      "Présenter un graphique qui reprend les chiffres de croissance des membres de la communauté en ligne et hors ligne au cours des cinq dernières années",
    ],
    correctAnswers: [2],
    multiSelect: false,
  },
  {
    id: 29,
    question: `Une entreprise en pleine croissance souhaite créer un sommet annuel pour ses clients actuels et potentiels afin de les sensibiliser davantage à la marque et de stimuler les ventes. Le gestionnaire de communauté doit faire en sorte que 30 % des membres actuels de la communauté achètent des billets pour l'événement inaugural.

Quelles mesures le gestionnaire de communauté doit-il prendre pour accomplir cette tâche ? (Sélectionnez deux réponses)`,
    options: [
      "Publier un lien vers le site web de l'événement avec un rappel quotidien de la possibilité d'acheter des billets",
      "Programmer des séances de questions-réponses avec les intervenants de l'événement dans la communauté à l'approche de l'événement",
      "Offrir des codes de réduction aux membres de la communauté qui achètent leurs billets à l'avance",
      "Contacter en privé les membres de la communauté qui sont susceptibles d'être intéressés par l'événement",
    ],
    correctAnswers: [1, 2],
    multiSelect: true,
  },
  {
    id: 30,
    question: `Un groupe Facebook de longue date compte plus d'un million de membres. Les gestionnaires de communauté décident de le déclarer en tant qu'organisation à but non lucratif. Pour organiser davantage d'événements, ils comptent faire appel à la communauté pour aider à la réalisation d'événements caritatifs. Ils reçoivent un soutien organisationnel positif de la part de leur communauté, mais le groupe a besoin d'un modèle économique plus durable.

Quelles sont les tactiques que les gestionnaires de communauté doivent employer pour établir un modèle de financement durable pour leur organisation à but non lucratif ? (Sélectionnez deux réponses)`,
    options: [
      "Réclamer une cotisation pour les membres actuels du groupe Facebook",
      "Préparer des supports pour les influenceurs qui mettent en évidence l'impact récent sur la communauté",
      "Créer une Page Facebook et utiliser l'outil de collecte de fonds pour partager les collectes de fonds avec la communauté",
      "Créer une Page Facebook et organiser des événements en utilisant la fonctionnalité des événements payants",
    ],
    correctAnswers: [2, 3],
    multiSelect: true,
  },
];
