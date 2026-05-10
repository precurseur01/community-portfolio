import type { Chapter } from '../types';

export const ch1: Chapter = {
  id: 'etablir-communaute',
  title: 'Établir une communauté',
  description: 'Développer une communauté en ligne sur les technologies Meta : mission, objectifs, règles et confiance.',
  icon: '🏗️',
  lessons: [
    {
      id: 'l1-1', title: 'Développer une communauté en ligne', duration: '12 min',
      content: [
        { type: 'text', content: 'Les gens utilisent les technologies Meta pour entrer en contact avec des communautés locales et internationales autour de centres d\'intérêt communs. Le community management, c\'est superviser et diriger une communauté. Les community managers sont chargés de créer, de développer et d\'entretenir une communauté pertinente.' },
        { type: 'callout', title: 'Applications de communauté Meta', content: [
          'Groupes Facebook — Se rassembler autour d\'un centre d\'intérêt commun (publics ou privés, règles, questions d\'adhésion)',
          'Pages Facebook — Présence publique de la communauté (vitrine visible par tous, contenu contrôlé par l\'admin)',
          'Instagram — Communautés visuelles (comptes publics ou privés, contenu multimédia)',
          'Messenger — Conversations en temps réel ou asynchrones pour créer la confiance',
          'WhatsApp — Groupes jusqu\'à 1024 membres, partage de fichiers, ouverts ou sur invitation'
        ]},
        { type: 'tip', content: 'Chaque plateforme a ses forces : les Groupes pour les interactions entre pairs, les Pages pour diffuser de l\'info, Instagram pour le visuel, Messenger/WhatsApp pour les liens directs.' },
      ],
    },
    {
      id: 'l1-2', title: 'Stratégie de communauté', duration: '15 min',
      content: [
        { type: 'text', content: 'Une stratégie de communauté est un plan que le community manager suit pour créer, développer et maintenir sa communauté en ligne. Elle couvre ses buts, ses règles, et des stratégies pour impliquer la communauté à travers des conversations et du contenu pertinents.' },
        { type: 'list', title: 'Étapes pour établir les bases', content: [
          'Développez votre présence en ligne — Donnez un nom, ajoutez une description et une image reconnaissable',
          'Invitez des amis — Commencez par des personnes de confiance intéressées par le sujet',
          'Encouragez la participation — Publiez une annonce de bienvenue pour lancer la conversation'
        ]},
        { type: 'callout', title: 'Éléments d\'une stratégie robuste', content: [
          'Mission — L\'impact global que votre communauté essaie d\'avoir sur ses membres et dans le monde',
          'Buts — Ce que la communauté doit accomplir pour remplir sa mission (déclarations générales)',
          'Objectifs — Ce que vous souhaitez accomplir : spécifiques, mesurables, adaptés, réalistes et temporels',
          'Mesure — Les données à suivre pour déterminer si les objectifs sont atteints',
          'Valeurs — Les principes de base : positivité, coopération, honnêteté, intégrité...'
        ]},
        { type: 'tip', content: 'Votre mission = votre destination, vos buts = la carte, vos objectifs = les étapes clés, la mesure = votre GPS. Partagez votre stratégie avec les membres !' },
      ],
    },
    {
      id: 'l1-3', title: 'Règles et confiance', duration: '10 min',
      content: [
        { type: 'text', content: 'Les règles indiquent à vos membres comment vous comptez mener votre mission et faire respecter vos valeurs. Elles favorisent une communication respectueuse et vous aident à modérer le contenu.' },
        { type: 'list', title: 'Recommandations pour les règles', content: [
          'Utilisez des phrases affirmatives — Encouragez les conversations respectueuses plutôt qu\'interdire',
          'Mettez vos règles bien en évidence — Partagez-les dès l\'accueil des nouveaux membres',
          'Encouragez les bons comportements — Expliquez le type de comportement souhaité',
          'Épinglez une publication publique avec vos règles sur votre Page',
          'Utilisez l\'approbation des publications pour les groupes'
        ]},
        { type: 'callout', title: 'Inspirer la confiance', content: [
          'Responsabilité — Pliez-vous aux mêmes règles que votre communauté',
          'Cohérence — Surveillez et sélectionnez le contenu de façon juste',
          'Transparence — Ouvrez vos canaux de communication à tout le monde',
          'Communauté intéressante — Respectez les différents points de vue',
          'Avis des membres — Invitez-les à proposer des changements aux règles'
        ]},
      ],
    },
  ],
  quiz: [
    { id: 1, question: 'Une communauté environnementale souhaite définir clairement une direction. Quels éléments le community manager devrait-il privilégier ?', options: ['Objectifs de la communauté', 'Valeurs', 'Indicateurs de performance clés', 'Stratégie de marketing'], correctAnswers: [0], multiSelect: false, explanation: 'Les objectifs de la communauté font partie des éléments fondamentaux de la stratégie, aux côtés de la mission, des buts et des valeurs.' },
    { id: 2, question: 'Quelle plateforme Meta permet aux membres de publier et d\'interagir entre eux, tandis que le community manager peut définir des règles et des questions d\'adhésion ?', options: ['Pages Facebook', 'Groupes Facebook', 'Instagram', 'WhatsApp'], correctAnswers: [1], multiSelect: false, explanation: 'Les Groupes Facebook permettent les interactions entre membres et la publication de contenu par les membres, contrairement aux Pages.' },
    { id: 3, question: 'Un community manager élabore une stratégie de lancement. Quel élément stratégique est le plus critique pour évaluer le succès ?', options: ['Les bios de la plate-forme', 'Un budget médiatique', 'Les rôles de l\'équipe', 'Un critère de réussite bien précis'], correctAnswers: [3], multiSelect: false, explanation: 'Sans critère de réussite mesurable, il est impossible de savoir si la stratégie fonctionne.' },
    { id: 4, question: 'Comment les règles d\'une communauté doivent-elles être formulées selon les bonnes pratiques Meta ?', options: ['Sous forme de liste d\'interdictions', 'Avec des phrases affirmatives encourageant les bons comportements', 'En menaçant de sanctions immédiates', 'En les gardant secrètes pour l\'équipe de modération'], correctAnswers: [1], multiSelect: false, explanation: 'Les règles les plus efficaces sont des déclarations affirmatives qui encouragent une culture positive.' },
    { id: 5, question: 'Quels sont les deux moyens d\'inspirer la confiance au sein d\'une communauté ? (Sélectionnez deux réponses)', options: ['Se plier aux mêmes règles que la communauté', 'Cacher les décisions de modération', 'Faire preuve de transparence dans les communications', 'Traiter les membres différemment selon leur ancienneté'], correctAnswers: [0, 2], multiSelect: true, explanation: 'La responsabilité (montrer l\'exemple) et la transparence (ouvrir les communications) sont deux piliers de la confiance.' },
    { id: 6, question: 'Quelle est la différence entre la « mission » et les « objectifs » dans une stratégie de communauté ?', options: ['La mission est mesurable, les objectifs sont généraux', 'La mission est l\'impact global souhaité, les objectifs sont spécifiques et mesurables', 'Les objectifs définissent les valeurs, la mission définit les règles', 'Il n\'y a pas de différence'], correctAnswers: [1], multiSelect: false, explanation: 'La mission = impact global. Les objectifs sont spécifiques, mesurables, adaptés, réalistes et temporels (SMART).' },
  ],
};
