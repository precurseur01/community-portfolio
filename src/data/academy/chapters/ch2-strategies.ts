import type { Chapter } from '../types';

export const ch2: Chapter = {
  id: 'strategies-processus',
  title: 'Stratégies et processus pour une communauté',
  description: 'Audience, insights, stratégie de plateforme, marque, lancement, équipe et partenariats.',
  icon: '📋',
  lessons: [
    {
      id: 'l2-1', title: 'Stratégie d\'audience et profils types', duration: '12 min',
      content: [
        { type: 'text', content: 'Il est important de comprendre les données démographiques des personnes intéressées par votre communauté. Vous pouvez regrouper ces informations dans des « profils types » — des personnes fictives représentant un segment de votre communauté.' },
        { type: 'list', title: 'Créer des profils types', content: [
          'Posez des questions aux membres (sondages, entretiens, questions ouvertes)',
          'Découvrez si vos membres font partie d\'autres communautés',
          'Définissez la valeur de votre communauté aux yeux de ses membres',
          'Dégagez des tendances et rassemblez les membres qui se ressemblent',
          'Créez des profils basés sur les tendances (localisation, démographie, centres d\'intérêt, comportements)',
          'Différenciez vos profils en leur attribuant un nom et une histoire'
        ]},
        { type: 'callout', title: 'Outils d\'insights Meta', content: [
          'Meta Business Suite — Performances des contenus organiques et payants sur Facebook et Instagram',
          'Statistiques de Page — Données démographiques (disponibles dès 100 followers)',
          'Insights de groupe — Pays, villes, âges, genre (disponibles dès 250 membres)',
          'Statistiques Instagram — Performances du compte (nécessite un compte business/Creator)',
          'Insights d\'audiences — Gestionnaire de publicités Meta pour trouver des audiences similaires'
        ]},
      ],
    },
    {
      id: 'l2-2', title: 'Stratégie de plateforme et de marque', duration: '12 min',
      content: [
        { type: 'text', content: 'Différentes applications offrent différentes opportunités. Réfléchissez à ce que chaque application peut faire pour votre communauté, puis établissez une présence sur les plus adaptées à votre stratégie.' },
        { type: 'callout', title: 'Comparatif des plateformes', content: [
          'Facebook Groupes — Stimuler les interactions entre membres (annonces, approbation, insights)',
          'Facebook Pages — Diffuser des informations (statistiques, publicités)',
          'Instagram — Attirer les audiences visuelles (photos, vidéos, Stories, Reels)',
          'WhatsApp — Messages directs en temps réel (jusqu\'à 1024 personnes, chiffrement)',
          'Messenger — Créer des liens par la conversation (appels vocaux/vidéo, messages auto)'
        ]},
        { type: 'text', content: 'Votre marque est la personnalité de votre communauté. Elle comprend trois éléments principaux :' },
        { type: 'list', title: 'Éléments de la marque', content: [
          'Valeurs fondamentales — Les valeurs au cœur de votre stratégie, fidèles à votre mission',
          'Style de communication — Le ton (formel/informel, humoristique/sérieux)',
          'Identité visuelle — Logo, images, typographie, couleurs, design créatif'
        ]},
        { type: 'tip', content: 'Élaborez un guide de marque, rendez votre communauté identifiable (nom, URL personnalisée), appliquez le guide sur toutes les plateformes et assurez la cohérence du ton.' },
      ],
    },
    {
      id: 'l2-3', title: 'Lancement, croissance et équipe', duration: '15 min',
      content: [
        { type: 'text', content: 'Une stratégie de lancement définit les étapes clés et les actions pour les atteindre. Utilisez des indicateurs dès le lancement et redéfinissez régulièrement vos buts.' },
        { type: 'callout', title: 'Développement organique vs payant', content: [
          'Organique — Inviter des connaissances, demander aux membres d\'inviter leurs amis, optimiser pour la recherche (mots-clés, hashtags)',
          'Payant — Créer des campagnes publicitaires Meta, utiliser des produits dérivés pour la publicité hors ligne'
        ]},
        { type: 'list', title: 'Construire une équipe', content: [
          'Identifiez les tâches nécessitant de l\'aide (modération, contenu, discussions)',
          'Définissez les compétences idéales pour chaque rôle',
          'Constituez l\'équipe avec des membres actifs de la communauté',
          'Trouvez des personnes aux compétences et points de vue différents',
          'Intégrez et formez les nouveaux membres (mentorat, coaching)',
          'Communiquez en interne (discussion WhatsApp/Messenger privée)',
          'Déléguez équitablement et motivez votre équipe'
        ]},
        { type: 'callout', title: 'Workflows opérationnels', content: [
          'Organigrammes — Représentation visuelle des processus et décisions',
          'Matrice RACI — Responsable, Approbateur, Consulté, Informé',
          'Diagramme de Gantt — Planification de haut niveau et suivi des tâches',
          'Calendrier de contenu — Quand et quoi publier (jours, semaines, mois)',
          'Guide de community management — Mission, objectifs, valeurs, règles, conseils',
          'Questions/réponses — Réponses aux questions fréquentes'
        ]},
      ],
    },
    {
      id: 'l2-4', title: 'Partenariats stratégiques', duration: '10 min',
      content: [
        { type: 'text', content: 'Les partenariats stratégiques permettent d\'intensifier les efforts de la communauté. Un partenariat met en rapport plusieurs communautés ou organisations pour proposer des avantages mutuels.' },
        { type: 'list', title: 'Types de partenariats', content: [
          'Partenariats de contenu — Blog, vidéo, podcast co-créés',
          'Partage de liens — Rediriger vers les événements du partenaire',
          'Opportunités caritatives — Bénévolat, collecte de fonds',
          'Partage des coûts — Co-organisation d\'événements',
          'Sponsoring — Produits, fonds et installations pour les événements',
          'Remises et promotions — Codes de réduction exclusifs pour les membres'
        ]},
        { type: 'tip', content: 'Les partenaires potentiels doivent partager des valeurs ou objectifs mutuellement bénéfiques. Préparez une présentation concise et mesurez la réussite du partenariat.' },
      ],
    },
  ],
  quiz: [
    { id: 7, question: 'Qu\'est-ce qu\'un « profil type » dans une stratégie d\'audience ?', options: ['Le profil du community manager', 'Une personne fictive représentant un segment de la communauté', 'Le compte administrateur du groupe', 'Une fausse identité pour tester la communauté'], correctAnswers: [1], multiSelect: false, explanation: 'Un profil type est une personne fictive basée sur les tendances démographiques de votre communauté.' },
    { id: 8, question: 'À partir de combien de membres peut-on accéder aux insights de groupe Facebook ?', options: ['50 membres', '100 membres', '250 membres', '500 membres'], correctAnswers: [2], multiSelect: false, explanation: 'Les insights de groupe sont disponibles dès 250 membres. Les statistiques de Page nécessitent 100 followers.' },
    { id: 9, question: 'Quelles sont les deux stratégies de développement d\'une communauté ? (Sélectionnez deux)', options: ['Développement organique (invitations, SEO, hashtags)', 'Développement automatique', 'Développement payant (publicités, produits dérivés)', 'Développement viral obligatoire'], correctAnswers: [0, 2], multiSelect: true, explanation: 'Le développement organique (gratuit) et payant (publicités) sont les deux approches complémentaires.' },
    { id: 10, question: 'Que signifie l\'acronyme RACI dans les workflows opérationnels ?', options: ['Rapport, Analyse, Communication, Information', 'Responsable, Approbateur, Consulté, Informé', 'Recherche, Action, Contrôle, Implémentation', 'Résultat, Audience, Contenu, Impact'], correctAnswers: [1], multiSelect: false, explanation: 'RACI = Responsable, Approbateur, Consulté, Informé. C\'est une matrice qui clarifie les rôles dans l\'équipe.' },
    { id: 11, question: 'Quels sont les trois éléments principaux d\'une stratégie de marque communautaire ?', options: ['Logo, couleurs, publicités', 'Valeurs fondamentales, style de communication, identité visuelle', 'Mission, budget, calendrier', 'Audience, contenu, conversion'], correctAnswers: [1], multiSelect: false, explanation: 'La marque se compose des valeurs fondamentales, du style de communication et de l\'identité visuelle.' },
    { id: 12, question: 'Quel type de partenariat consiste à co-créer un blog, une vidéo ou un podcast avec un partenaire ?', options: ['Partage de liens', 'Partenariat de contenu', 'Sponsoring', 'Remises et promotions'], correctAnswers: [1], multiSelect: false, explanation: 'Les partenariats de contenu impliquent la création collaborative de contenu (blog, vidéo, podcast).' },
  ],
};
