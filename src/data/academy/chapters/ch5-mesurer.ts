import type { Chapter } from '../types';

export const ch5: Chapter = {
  id: 'mesurer-reussite',
  title: 'Mesurer la réussite',
  description: 'Performances du contenu, rapports de données, avis communautaires, monétisation et modèles de revenus.',
  icon: '📊',
  lessons: [
    {
      id: 'l5-1', title: 'Mesurer les performances du contenu', duration: '12 min',
      content: [
        { type: 'text', content: 'Il existe trois indicateurs clés pour comprendre les performances : la couverture (nombre de personnes qui voient le contenu), les interactions (j\'aime, commentaires, partages) et la conversion (interactions devenues actions : visites, inscriptions, achats).' },
        { type: 'callout', title: 'Outil de suivi des interactions', content: [
          'Créez une feuille de calcul pour suivre chaque publication',
          'Colonnes : Date, Heure, Campagne, Description, Couverture, Interactions, Conversions',
          'Exemple : Publication du 04/05 à 12h — Couverture: 122, Réactions: 4, Commentaires: 9, Sondage: 108 réponses'
        ]},
        { type: 'callout', title: 'Insights par plateforme', content: [
          'Statistiques de Page — Dès 100 followers (démographie, performances publications)',
          'Insights de groupe — Dès 250 membres (interactions, heures d\'affluence)',
          'Statistiques Instagram — Avec compte business/Creator (followers, contenu le plus vu)'
        ]},
        { type: 'tip', content: 'Testez différentes approches et optimisez pour la couverture, les interactions ou la conversion selon vos besoins. Vous détecterez des tendances de performances.' },
      ],
    },
    {
      id: 'l5-2', title: 'Données et rapports', duration: '12 min',
      content: [
        { type: 'text', content: 'Les rapports aident à comprendre l\'état de la communauté et à partager les apprentissages. Il existe des données quantitatives (chiffres) et qualitatives (avis, sentiments).' },
        { type: 'callout', title: 'Données quantitatives — Représentations visuelles', content: [
          'Tableaux — Feuilles de calcul téléchargeables depuis les insights',
          'Histogrammes — Évolution des données au fil du temps (croissance des membres)',
          'Diagrammes à barres — Comparaison par catégories (couverture vs interactions)',
          'Diagrammes circulaires — Relations entre ensembles (proportion H/F des membres)'
        ]},
        { type: 'callout', title: 'Données qualitatives', content: [
          'Citations — Sélectionnez des citations résumant l\'avis du groupe',
          'Nuages de mots — Identifiez les thèmes fréquemment abordés',
          'Catégorisation — Classez les réponses qualitatives en catégories quantifiables'
        ]},
        { type: 'callout', title: 'Indicateurs de réussite populaires', content: [
          'Membres actifs — Nombre de personnes actives par jour dans le groupe',
          'Nouveaux membres — Total de membres par période (organique vs payé)',
          'Interactions — Publications, commentaires et réactions sur une période donnée'
        ]},
      ],
    },
    {
      id: 'l5-3', title: 'Avis et changements de stratégie', duration: '8 min',
      content: [
        { type: 'text', content: 'Votre stratégie évoluera pour répondre aux besoins changeants de la communauté. Les changements doivent être basés sur des données concrètes.' },
        { type: 'callout', title: 'Trois types de données concrètes', content: [
          'Données — Chiffres, statistiques et faits (nombre de réactions par publication)',
          'Informations — Contexte des données (réactions organisées par type de publication)',
          'Insights — Découvertes basées sur les données et informations (le contenu vidéo suscite plus d\'interactions)'
        ]},
        { type: 'list', title: 'Comment recueillir des avis', content: [
          'Interrogez votre communauté (questions ouvertes, sondages)',
          'Utilisez les statistiques de Page / insights de groupe',
          'Consultez d\'autres community managers',
          'Explorez, mettez en œuvre et évaluez — Commencez par de petits changements'
        ]},
      ],
    },
    {
      id: 'l5-4', title: 'Communauté durable et monétisation', duration: '12 min',
      content: [
        { type: 'text', content: 'Au fur et à mesure que les communautés se développent, elles ont parfois besoin de sources de revenus. Un modèle de revenus combine une source de revenus, des ressources et une activité génératrice de revenus.' },
        { type: 'callout', title: 'Sources de revenus', content: [
          'Dons — De personnes, institutions ou événements au profit de la communauté',
          'Revenus récurrents — Abonnements ou frais d\'adhésion temporels',
          'Ventes — Produits (souvenirs) ou services (cours en ligne)',
          'Partenariats avec des marques — Promotion de marques au sein de la communauté',
          'Publications — Livres, magazines, blogs racontant l\'histoire de la communauté'
        ]},
        { type: 'callout', title: 'Monétisation dans les Groupes', content: [
          'Contenu de marque — Tag de collaboration commerciale avec annonceurs',
          'Vente de produits — Fonctionnalité d\'achat et de vente',
          'Événements payants — Billets pour des événements sponsorisés',
          'Boutiques — Vitrine digitale pour vendre aux membres',
          'Collectes de fonds — Dons pour soutenir la communauté'
        ]},
        { type: 'callout', title: 'Monétisation sur les Pages', content: [
          'Bouton Faire un don — Dons ponctuels ou récurrents',
          'Collectes de fonds — Pour un programme ou une cause',
          'Boutiques Facebook — Répertorier et vendre des produits',
          'Abonnements — Contenus exclusifs et avantages mensuels',
          'Publicités in-stream — Revenus sur les vidéos',
          'Étoiles Meta — Revenus sur les vidéos en direct'
        ]},
        { type: 'warning', content: 'Le contenu monétisé doit respecter les Règles de monétisation pour le contenu ET les Règles de monétisation pour les partenaires (contenu authentique, audience authentique).' },
      ],
    },
  ],
  quiz: [
    { id: 25, question: 'Quels sont les trois indicateurs clés de performance du contenu ?', options: ['Likes, followers, partages', 'Couverture, interactions, conversion', 'Budget, ROI, croissance', 'Impressions, clics, temps passé'], correctAnswers: [1], multiSelect: false, explanation: 'Couverture (qui voit), interactions (j\'aime, commentaires, partages), conversion (actions comme inscriptions, achats).' },
    { id: 26, question: 'Le community manager d\'une ONG veut démontrer une hausse de l\'interaction ce trimestre. Quelle information utiliser ?', options: ['La comparaison des abonnés au fil du temps', 'L\'évolution du taux d\'engagement tout au long du trimestre', 'Le nombre total de réactions par publication', 'La somme des interactions'], correctAnswers: [1], multiSelect: false, explanation: 'L\'évolution du taux d\'engagement sur la période montre la tendance de hausse ou de baisse.' },
    { id: 27, question: 'Quelle est la différence entre « données », « informations » et « insights » ?', options: ['Ce sont des synonymes', 'Données = chiffres bruts, Informations = données contextualisées, Insights = découvertes actionnables', 'Données = qualitatif, Informations = quantitatif, Insights = visuels', 'Il n\'y a pas de hiérarchie entre ces termes'], correctAnswers: [1], multiSelect: false, explanation: 'Données = faits bruts → Informations = données organisées → Insights = découvertes pour améliorer la stratégie.' },
    { id: 28, question: 'Quel type de graphique est utilisé pour montrer l\'évolution de la base de membres au fil du temps ?', options: ['Diagramme circulaire', 'Histogramme', 'Nuage de mots', 'Tableau simple'], correctAnswers: [1], multiSelect: false, explanation: 'Les histogrammes représentent l\'évolution des données au fil du temps avec des barres de différentes hauteurs.' },
    { id: 29, question: 'Un modèle de revenus combine quels trois éléments ?', options: ['Publicité, sponsoring, ventes', 'Source de revenus, ressources pour la communauté, activité génératrice', 'Budget, investissement, retour', 'Contenu, audience, plateforme'], correctAnswers: [1], multiSelect: false, explanation: 'Un modèle de revenus = source de revenus + ressources communautaires + activité génératrice de revenus.' },
    { id: 30, question: 'Quels sont les deux moyens de monétisation exclusifs aux Pages Facebook ? (Sélectionnez deux)', options: ['Publicités in-stream sur les vidéos', 'Vente de produits dans les groupes', 'Étoiles Meta sur les vidéos en direct', 'Collectes de fonds dans les groupes'], correctAnswers: [0, 2], multiSelect: true, explanation: 'Les publicités in-stream et les Étoiles Meta sont disponibles uniquement sur les Pages.' },
  ],
};
