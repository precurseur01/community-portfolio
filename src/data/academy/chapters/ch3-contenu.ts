import type { Chapter } from '../types';

export const ch3: Chapter = {
  id: 'contenu-strategique',
  title: 'Prendre des décisions stratégiques en matière de contenu',
  description: 'Stratégie de contenu, planification, évaluation des performances et outils de création.',
  icon: '📝',
  lessons: [
    {
      id: 'l3-1', title: 'Stratégie de contenu', duration: '12 min',
      content: [
        { type: 'text', content: 'Le contenu désigne ce que vous partagez : publications, memes, photos, vidéos ou stories. Une stratégie de contenu associe vos efforts quotidiens à votre stratégie de communauté globale. Elle se développe en trois étapes : définir quoi publier, déterminer quand publier, évaluer les performances.' },
        { type: 'callout', title: 'Définir ce que vous allez publier', content: [
          'Mission de la communauté — Le contenu doit contribuer à votre mission globale',
          'Stratégie de plateforme — Le contenu fonctionne différemment sur chaque plateforme',
          'Membres — Utilisez les statistiques et sondages pour comprendre ce qui plaît',
          'Contenu multimédia — Images, animations, GIF, vidéos, infographies, liens',
          'Call-to-action — Questions ouvertes, GIF, commentaires, identifications, partages',
          'Autres sources — Partagez du contenu de qualité d\'autres sources (toujours créditer)',
          'Partage — Encouragez les membres à créer et partager du contenu (UGC)'
        ]},
      ],
    },
    {
      id: 'l3-2', title: 'Quand publier et évaluer', duration: '10 min',
      content: [
        { type: 'text', content: 'Utilisez les statistiques de Page ou les insights de groupe pour déterminer quand votre communauté est la plus active. Votre audience sera plus susceptible de voir votre contenu à ces moments-là.' },
        { type: 'list', title: 'Outils de planification', content: [
          'Calendrier de contenu — Sélectionnez les jours et heures, programmez les publications',
          'Publications régulières — Publiez régulièrement pour maintenir l\'intérêt',
        ]},
        { type: 'callout', title: 'Mesurer les performances du contenu', content: [
          'Couverture — Nombre de personnes qui voient votre contenu',
          'Interactions — Nombre de j\'aime, commentaires et partages',
          'Conversion — Interactions devenues actions : visites, inscriptions, participation'
        ]},
        { type: 'tip', content: 'Testez différentes variables : heure de publication, type de contenu multimédia, call-to-action. Modifiez une variable à la fois pour identifier ce qui fonctionne.' },
      ],
    },
    {
      id: 'l3-3', title: 'Sujets populaires et outils de contenu', duration: '12 min',
      content: [
        { type: 'text', content: 'Intégrez les sujets populaires (actualités, fêtes, memes viraux, Creators) à votre contenu avec modération pour ne pas détourner l\'attention de votre mission.' },
        { type: 'callout', title: 'Outils de contenu sur les technologies Meta', content: [
          'Annonces et publications épinglées — Visibilité maximale en haut du groupe/Page',
          'Stories — Collections d\'images/vidéos courtes avec stickers de sondage (Facebook, Instagram)',
          'Reels — Format vidéo court avec musique, audio et effets AR',
          'Sondages — Questions ouvertes dans Stories, groupes et Pages',
          'Événements Facebook — Rencontres en personne et en ligne',
          'Facebook/Instagram Live — Diffusion en temps réel',
          'Salons Messenger — Appels vidéo ouverts à tous',
          'Canaux de publications — Échanges thématiques dans les groupes',
          'Guides — Séries de publications séquentielles/thématiques avec suivi de progression',
          'Hashtags — Sujets de discussion et découverte de contenu',
          'Collectes de fonds — Outils de dons sur Facebook et Instagram'
        ]},
        { type: 'tip', content: 'Le Gestionnaire de publicités Meta permet de booster des publications, de diffuser des publicités et de créer des campagnes. Définissez votre budget et le type d\'audience à toucher.' },
      ],
    },
  ],
  quiz: [
    { id: 13, question: 'Quelles sont les trois étapes d\'une stratégie de contenu ?', options: ['Créer, diffuser, oublier', 'Définir quoi publier, déterminer quand, évaluer les performances', 'Copier, coller, partager', 'Photographier, filmer, publier'], correctAnswers: [1], multiSelect: false, explanation: 'Une stratégie de contenu = 1. Quoi publier 2. Quand publier 3. Évaluer les performances.' },
    { id: 14, question: 'Un gestionnaire veut partager un lien vers un webinar via Instagram. Quel outil utiliser ?', options: ['Stories Instagram', 'Messages directs', 'Campagne de hashtag', 'Statistiques Instagram'], correctAnswers: [0], multiSelect: false, explanation: 'Les Stories Instagram permettent de partager des liens renvoyant vers des pages d\'événements.' },
    { id: 15, question: 'Quelle est la différence entre « couverture » et « interactions » ?', options: ['Aucune différence', 'La couverture = nombre de personnes qui voient le contenu ; les interactions = j\'aime, commentaires, partages', 'La couverture = les partages ; les interactions = les vues', 'La couverture est payante, les interactions sont organiques'], correctAnswers: [1], multiSelect: false, explanation: 'La couverture mesure qui voit le contenu. Les interactions mesurent les j\'aime, commentaires et partages.' },
    { id: 16, question: 'Que désigne la « conversion » dans les indicateurs de contenu ?', options: ['Le nombre de followers gagnés', 'Les interactions devenues des actions (visites, inscriptions, achats)', 'Le nombre de publications par jour', 'Le taux de croissance du groupe'], correctAnswers: [1], multiSelect: false, explanation: 'La conversion = les interactions des membres devenues des actions importantes (visites, inscriptions, achats).' },
    { id: 17, question: 'Quel outil Meta permet de créer des séries de publications séquentielles avec suivi de progression ?', options: ['Stories', 'Reels', 'Guides', 'Sondages'], correctAnswers: [2], multiSelect: false, explanation: 'Les Guides dans les groupes Facebook permettent de créer des parcours de formation séquentiels.' },
    { id: 18, question: 'Quelle approche est recommandée pour optimiser les performances du contenu ?', options: ['Changer toutes les variables en même temps', 'Modifier une seule variable à la fois pour identifier ce qui fonctionne', 'Ne jamais changer de stratégie', 'Publier uniquement le week-end'], correctAnswers: [1], multiSelect: false, explanation: 'Testez une variable à la fois (heure, format, CTA) pour déterminer ce qui a le meilleur effet.' },
  ],
};
