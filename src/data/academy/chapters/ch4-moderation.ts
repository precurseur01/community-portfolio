import type { Chapter } from '../types';

export const ch4: Chapter = {
  id: 'moderer-communaute',
  title: 'Modérer une communauté',
  description: 'Accueil des nouveaux membres, relations, Standards de la communauté, gestion des conflits et automatisation.',
  icon: '🛡️',
  lessons: [
    {
      id: 'l4-1', title: 'Accueil et intégration des nouveaux membres', duration: '10 min',
      content: [
        { type: 'text', content: 'L\'un de vos rôles consiste à accueillir les nouveaux membres et à les préparer à prendre part au groupe. La première étape est d\'encourager les nouveaux membres à se sentir bienvenus et à l\'aise.' },
        { type: 'list', title: 'Stratégies d\'accueil', content: [
          'Publiez un message de bienvenue — Identifiez les nouveaux membres dans un message',
          'Encouragez les membres à se souhaiter la bienvenue mutuellement (comité d\'accueil)',
          'Demandez aux nouveaux de consulter les règles (publication épinglée ou annonce)',
          'Utilisez un questionnaire d\'adhésion dans les groupes pour examiner les candidatures',
          'Répondez rapidement aux questions des nouveaux membres'
        ]},
        { type: 'tip', content: 'La stratégie d\'intégration dépend de la plateforme : questions d\'adhésion dans les groupes, message épinglé sur les Pages, message de bienvenue sur Messenger/WhatsApp.' },
      ],
    },
    {
      id: 'l4-2', title: 'Favoriser les relations', duration: '10 min',
      content: [
        { type: 'text', content: 'Les community managers encouragent la participation, reconnaissent les membres individuellement et facilitent la création de liens au sein de la communauté.' },
        { type: 'callout', title: 'Promouvoir la participation', content: [
          'Reconnaissez les membres qui s\'impliquent (insights de groupe, badges de super fan)',
          'Encouragez la communication entre membres (identifiez-les, invitez aux conversations)',
          'Organisez des rencontres en ligne (Live, salons Messenger, événements)',
          'Posez des questions et demandez l\'avis (sondages et questions ouvertes)',
          'Donnez l\'exemple — Répondez et lancez des conversations sur les publications'
        ]},
      ],
    },
    {
      id: 'l4-3', title: 'Standards de la communauté Meta', duration: '12 min',
      content: [
        { type: 'text', content: 'Les Standards de la communauté définissent ce qui est autorisé ou non sur Facebook. Ils s\'appuient sur quatre valeurs : authenticité, sécurité, confidentialité et dignité.' },
        { type: 'callout', title: 'Les 7 catégories de Standards', content: [
          'Violence ou comportement criminel — Interdit la violence, les organisations dangereuses, la fraude',
          'Sécurité — Interdit le harcèlement, l\'exploitation, le contenu d\'automutilation',
          'Contenu répréhensible — Interdit les discours haineux, le contenu violent et explicite',
          'Intégrité et authenticité — Interdit le spam, les fausses informations, les médias manipulés',
          'Propriété intellectuelle — Protège les droits d\'auteur et marques déposées',
          'Demandes relatives au contenu — Régit les demandes de suppression de comptes',
          'Protection des personnes mineures — Protection spéciale pour les mineurs'
        ]},
        { type: 'warning', content: 'Si vous repérez du contenu enfreignant les Standards, signalez-le via les outils de modération (groupes/Pages) ou le bouton « Trouver de l\'aide ou Signaler ».' },
      ],
    },
    {
      id: 'l4-4', title: 'Gestion des conflits et automatisation', duration: '12 min',
      content: [
        { type: 'text', content: 'Des conflits éclateront inévitablement. Les règles de la communauté définissent les attentes, mais ne suffiront pas à prévenir tous les conflits. Voici comment les atténuer et y réagir.' },
        { type: 'list', title: 'Atténuer les conflits', content: [
          'Rédigez des règles claires avec les conséquences de non-respect',
          'Repartagez les règles régulièrement (publication épinglée, annonce)',
          'Encouragez les membres à signaler les conflits',
          'Utilisez les alertes de mots-clés pour anticiper les désaccords',
          'Utilisez l\'approbation des publications pour examiner le contenu avant publication'
        ]},
        { type: 'callout', title: 'Réagir aux conflits — Escalade', content: [
          '1. Toujours intervenir — Modérez ou commentez les conversations à risque',
          '2. Parler en privé — Rappelez les règles et comprenez l\'origine du conflit',
          '3. Mettre fin aux conversations — Désactivez les commentaires ou supprimez les publications',
          '4. Mise en sourdine / Suppression / Bannissement — En dernier recours, avec transparence',
          '5. Signaler — Contenu enfreignant les Standards → bouton Signaler'
        ]},
        { type: 'callout', title: 'Assistance admin — Automatisation', content: [
          'Refuser automatiquement les publications entrantes selon des critères',
          'Supprimer automatiquement les publications non conformes',
          'Désactiver les commentaires sur certaines publications',
          'Approuver automatiquement les nouveaux membres selon des critères'
        ]},
      ],
    },
  ],
  quiz: [
    { id: 19, question: 'Quelle est la première étape pour accueillir un nouveau membre ?', options: ['Lui envoyer les statistiques du groupe', 'Publier un message de bienvenue et l\'identifier', 'Lui donner le rôle d\'administrateur', 'Lui demander de payer une cotisation'], correctAnswers: [1], multiSelect: false, explanation: 'Souhaiter la bienvenue aide les nouveaux membres à se sentir acceptés et valorisés.' },
    { id: 20, question: 'Des publications en attente contiennent des menaces de violence entre deux membres. Quelle mesure prendre ?', options: ['Approuver et modérer la conversation', 'Refuser les publications et signaler les deux membres', 'Approuver et retirer les membres', 'Envoyer un message et référer aux lignes de conduite'], correctAnswers: [1], multiSelect: false, explanation: 'Face à des menaces de violence : refusez les publications ET signalez les membres. Ne jamais approuver du contenu violent.' },
    { id: 21, question: 'Quelles sont les quatre valeurs fondamentales des Standards de la communauté Meta ?', options: ['Popularité, engagement, croissance, monétisation', 'Authenticité, sécurité, confidentialité, dignité', 'Innovation, créativité, liberté, diversité', 'Rapidité, efficacité, qualité, quantité'], correctAnswers: [1], multiSelect: false, explanation: 'Les Standards Meta reposent sur : authenticité, sécurité, confidentialité et dignité.' },
    { id: 22, question: 'Une marque fait un Q&A en direct et des commentaires désobligeants apparaissent. Que faire en premier ?', options: ['Publier et épingler un commentaire rappelant le respect', 'Désactiver les commentaires', 'Bannir toute personne hors sujet', 'Demander à l\'animateur de réagir'], correctAnswers: [0], multiSelect: false, explanation: 'Publier et épingler un rappel de respect est la mesure préventive la plus efficace en live.' },
    { id: 23, question: 'Que permet l\'outil « Assistance admin » dans les groupes ?', options: ['Créer du contenu automatiquement', 'Automatiser la modération : refuser, supprimer, désactiver commentaires, approuver membres', 'Gérer les publicités du groupe', 'Changer les règles automatiquement'], correctAnswers: [1], multiSelect: false, explanation: 'L\'Assistance admin automatise les tâches de modération selon des règles que vous définissez.' },
    { id: 24, question: 'Quel est le bon ordre d\'escalade face à un conflit ?', options: ['Bannir → Avertir → Signaler', 'Intervenir/commenter → Parler en privé → Mettre fin → Mise en sourdine/Bannissement → Signaler', 'Ignorer → Supprimer → Oublier', 'Signaler → Supprimer le groupe → Recréer'], correctAnswers: [1], multiSelect: false, explanation: 'L\'escalade progressive : intervention → contact privé → fin de conversation → sanction → signalement.' },
  ],
};
