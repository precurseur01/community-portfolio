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

const TrainingPage: React.FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "Une communauté qui a récemment vu le jour souhaite faire face aux problèmes environnementaux de son voisinage. Elle a conscience de l'importance de définir clairement une mission, des objectifs, des valeurs et des indicateurs de performance clés (KPI) pour mobiliser efficacement ses efforts.\n\nQuels sont les aspects que le community manager devrait privilégier afin d'établir une direction et un cadre clairs pour les activités de la communauté ?",
      options: [
        "Objectifs de la communauté",
        "Valeurs",
        "Indicateurs de performance clés",
        "Stratégie de marketing"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 2,
      question: "Un gestionnaire de communauté souhaite utiliser Instagram pour promouvoir le webinar d'une marque. Plus précisément, il souhaite partager un lien renvoyant à la page d'évènement du webinar, afin que les participants puissent s'y inscrire à l'avance.\n\nQuel outil le gestionnaire de communauté doit-il utiliser ?",
      options: [
        "Stories Instagram",
        "Messages directs",
        "Campagne de hashtag",
        "Statistiques Instagram"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 3,
      question: "Une marque de tisanes développe des réseaux sociaux pour sa marque dans le cadre d'une nouvelle stratégie de marketing digital. Le gestionnaire de communauté travaille avec des parties prenantes internes à l'élaboration de la stratégie de lancement, qui comprend l'image de marque de la communauté, les directives en matière de contenu et d'interaction et l'audience cible.\n\nQuel est l'élément stratégique manquant ?",
      options: [
        "Les bios et la description de la plate-forme",
        "Un budget médiatique approximatif",
        "Les rôles et les responsabilités de l'équipe",
        "Un critère de réussite bien précis"
      ],
      correctAnswers: [3],
      multiSelect: false
    },
    {
      id: 4,
      question: "Une salle de sport haut de gamme ouvrira l'année prochaine dans cinq villes: Londres, New York, Sydney, Dubaï et Rio de Janeiro. L'audience cible est large et englobe tous les âges. Les fondateurs souhaitent développer un fort sentiment d'appartenance à la communauté parmi les clients du monde entier.\n\nLe gestionnaire de communauté en ligne décide de créer une communauté qui rassemble exclusivement les membres de la salle de sport au moyen d'une application.\n\nQuel bénéfice le gestionnaire de communauté peut-il prévoir de tirer de cette initiative?",
      options: [
        "La communauté aura le sentiment d'être plus exclusive et sera plus fidèle à la marque.",
        "Les réactions négatives ne seront pas rendues publiques et n'appelleront pas à prendre de mesures.",
        "Il y aura moins de risques que le contenu généré par les membres ne porte publiquement atteinte à la réputation de la marque.",
        "La communauté s'auto-gérera et ne nécessitera pas une prise en charge quotidienne."
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 5,
      question: "Une application de rencontres doit modifier son image de marque, et charge une agence publicitaire de présenter de nouveaux logos et concepts visuels aux partenaires internes.\n\nQuels sont les éléments dont le gestionnaire de communauté doit tenir compte lors de l'élaboration de la nouvelle image de marque ? (Sélectionnez deux réponses)",
      options: [
        "La popularité des couleurs et de la police de caractères qui ont été choisis",
        "Les similitudes avec d'autres entreprises célèbres",
        "La cohérence des ressources de la stratégie sociale de la marque",
        "L'impact de la nouvelle image de marque sur la communauté"
      ],
      correctAnswers: [2, 3],
      multiSelect: true
    },
    {
      id: 6,
      question: "Un groupe Facebook est composé d'une communauté jeune dont les membres partagent leurs expériences avec des jouets. Le groupe se développe rapidement. Récemment, des membres se sont plaints d'une apparition répétitive de questions similaires sur les jouets.\n\nQue doit faire l'équipe d'administrateurs pour résoudre ce problème ?",
      options: [
        "Mettre en sourdine les membres qui posent souvent les mêmes questions",
        "Créer un document de questions/réponses pour le groupe",
        "Supprimer les publications qui contiennent des questions similaires",
        "Commenter toutes les publications pour rappeler les règles à la communauté"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 7,
      question: "Un groupe implanté de longue date se consacre à l'observation des baleines en Californie. Certains membres manifestent le désir d'élargir le champ d'action du groupe à l'observation des baleines dans le monde entier.\n\nQuels sont les exigences régionales que les gestionnaires de communauté doivent prendre en compte ? (Sélectionnez deux réponses)",
      options: [
        "La répartition par fuseaux horaires",
        "Le développement de partenariats internationaux",
        "Le respect de la législation californienne",
        "L'accessibilité et l'inclusion dans différents pays"
      ],
      correctAnswers: [0, 3],
      multiSelect: true
    },
    {
      id: 8,
      question: "Un concessionnaire automobile souhaite se lancer dans la vente de voitures électriques. Il décide d'utiliser les réseaux sociaux et engage un community manager pour sa campagne. Le concessionnaire a déjà créé une Page Facebook sans abonné ni contenu.\n\nQuelles sont les deux mesures que le community manager peut prendre pour accroître rapidement la taille de la communauté ?",
      options: [
        "Demander aux employés de l'entreprise d'inviter leurs amis.",
        "Publier du contenu pertinent pour l'utiliser dans des campagnes publicitaires.",
        "Mettre en place un groupe privé pour les employés afin qu'ils y partagent des publications.",
        "Créer un compte Instagram et associer la Page Facebook."
      ],
      correctAnswers: [0, 1],
      multiSelect: true
    },
    {
      id: 9,
      question: "Un groupe Facebook est composé de nouveaux créateurs qui partagent des conseils et astuces sur la façon de développer son activité de créateur sur les plateformes Meta. Le community manager veut établir des partenariats stratégiques avec des marques pertinentes.\n\nQuelle mesure le community manager doit-il prendre lors de la prochaine étape ?",
      options: [
        "Envoyer un message individuel aux créateurs du groupe pour demander quels types de partenariats les intéressent",
        "Effectuer un sondage dans le groupe et demander aux créateurs d'effectuer un classement des trois partenariats qui les intéressent le plus",
        "Publier des demandes de suggestions de marques tout de suite dans le groupe",
        "Répondre aux commentaires et aux publications qui mentionnent les marques"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 10,
      question: "Un groupe Facebook a pour objectif de promouvoir la créativité. Afin d'atteindre une croissance soutenue, l'équipe d'administrateurs crée un guide de community management avec le contenu généré par les utilisateurs comme stratégie.\n\nQuels sont les deux moyens que l'équipe d'administrateurs peut utiliser pour mettre en place cette stratégie ?",
      options: [
        "Épingler chaque publication de membre dans le groupe Facebook",
        "Créer un hashtag dédié pour partager du contenu dans la communauté",
        "Souhaiter la bienvenue aux nouveaux membres à travers des publications hebdomadaires",
        "Proposer aux membres tous les mois de créer du contenu dans la communauté"
      ],
      correctAnswers: [1, 3],
      multiSelect: true
    },
    {
      id: 11,
      question: "Un groupe Facebook bien établi compte beaucoup de membres partageant de nombreuses discussions utiles. Les membres se plaignent de ne pas pouvoir trouver facilement les informations pertinentes.\n\nQuelles mesures le gestionnaire de communauté doit-il prendre ? (Sélectionnez deux réponses)",
      options: [
        "Apprendre aux membres de la communauté à ajouter un sujet à leurs publications et à utiliser les sujets pour trouver le contenu",
        "Créer un nouveau groupe pour que les sujets qui intéressent les membres puissent être discutés séparément",
        "Mettre en place une meilleure organisation des publications par sujet et par catégorie",
        "Organiser les publications existantes et les plus intéressantes en unités d'apprentissage"
      ],
      correctAnswers: [0, 2],
      multiSelect: true
    },
    {
      id: 12,
      question: "Une marque souhaite élargir sa communauté en ligne en s'adressant à des personnes appartenant à la même audience cible, mais situées dans différentes régions du pays.\n\nQuelle est la stratégie qu'un gestionnaire de communauté doit adopter en premier lieu ?",
      options: [
        "Déployer des campagnes publicitaires nationales uniquement",
        "Recruter des modérateurs locaux pour chaque région et adapter le contenu",
        "Lancer une seule communication uniforme sans localisation",
        "Utiliser des partenariats avec des influenceurs régionaux pour augmenter la portée"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 13,
      question: "Un membre d'une communauté en ligne publie une question. Le gestionnaire de communauté sait que beaucoup de membres ont de l'expérience dans ce domaine.\n\nQue doit faire le gestionnaire de communauté pour aider ce membre à obtenir une réponse appropriée ?",
      options: [
        "Identifier les membres qui ont de l'expérience dans ce domaine et les inviter à répondre",
        "Répondre rapidement à la question et aider le membre à trouver une réponse",
        "Laisser la question publiée durant toute la semaine",
        "Laisser la question dans la communauté et attendre que les membres y répondent"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 14,
      question: "Dans un groupe Facebook pour créateurs émergents, un community manager observe des difficultés à établir des liens entre les membres.\n\nQuelles mesures le community manager doit-il prendre pour encourager les interactions ?",
      options: [
        "Encourager les publications incitant les membres à interagir entre eux et à partager des contenus",
        "Mettre à jour le calendrier éditorial pour inclure plus d'activités de réseau",
        "Organiser des événements virtuels et des sessions AMA (Ask Me Anything)",
        "Demander aux créateurs actifs de publier des présentations régulières dans le groupe"
      ],
      correctAnswers: [2],
      multiSelect: false
    },
    {
      id: 15,
      question: "Un groupe Facebook est composé de membres qui discutent de leurs morceaux de musique préférés. Un nouveau membre effectue plusieurs publications pour promouvoir sa propre musique, ce qui déclenche des disputes.\n\nQuelle mesure le community manager doit-il prendre en priorité ?",
      options: [
        "Demander aux membres qui signalent le contenu d'ignorer les publications",
        "Supprimer le membre qui enfreint les règles et l'empêcher de revenir",
        "Supprimer les publications qui enfreignent les règles et rappeler les règles",
        "Modifier les règles du groupe afin que les membres puissent faire leur promotion"
      ],
      correctAnswers: [2],
      multiSelect: false
    },
    {
      id: 16,
      question: "Deux membres sont en désaccord dans les commentaires. Plus tard, l'un signale que l'autre lui a envoyé des messages injurieux hors de la communauté.\n\nQuelle mesure le community manager doit-il prendre ?",
      options: [
        "Le gestionnaire ne peut pas intervenir dans des conflits qui se produisent hors de la communauté",
        "Contacter les deux membres pour discuter de la situation et proposer des alternatives",
        "Mettre les deux membres en quarantaine et bloquer leurs comptes",
        "Avertir les membres d'éviter tout contact et chercher une médiation"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 17,
      question: "Une marque de vêtements de sport réalise une vidéo de questions-réponses en direct avec un célèbre joueur. Dès le début, des internautes laissent des commentaires désobligeants.\n\nQuelle mesure prendre en premier pour limiter ce type de commentaires ?",
      options: [
        "Publier et épingler un commentaire rappelant aux internautes d'être respectueux",
        "Désactiver complètement les commentaires sur la vidéo en direct",
        "Demander à l'animateur de réagir aux commentaires sur le live",
        "Bannir toute personne publiant des commentaires hors sujet"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 18,
      question: "L'administratrice d'un groupe remarque des publications en attente d'approbation, émanant de deux membres qui se menacent mutuellement avec violence.\n\nQuelle mesure doit-elle prendre ?",
      options: [
        "Approuver les publications et retirer les membres du groupe",
        "Refuser les publications et signaler les deux membres",
        "Approuver les publications et modérer la conversation",
        "Envoyer un message aux deux membres et les référer aux lignes de conduite"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 19,
      question: "Le gestionnaire d'une petite ONG souhaite démontrer que l'interaction sur sa Page a connu une hausse ce trimestre. Les publications récentes ont fait l'objet de 183 commentaires, 147 partages et 478 réactions.\n\nQuelle information statistique doit-il utiliser ?",
      options: [
        "La comparaison des abonnés au fil du temps",
        "L'évolution du taux d'engagement tout au long du trimestre",
        "Le nombre total de réactions par publication",
        "La somme des interactions (commentaires + partages + réactions)"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 20,
      question: "Une grande communauté de voyage mène une campagne publicitaire avec une marque partenaire pour proposer des offres de voyage. Le gestionnaire doit évaluer le succès.\n\nQuelle approche adopter pour mesurer l'impact sur les revenus ? (Sélectionnez deux réponses)",
      options: [
        "Regrouper les indicateurs de couverture de la campagne",
        "S'appuyer sur les statistiques pour relancer l'interaction",
        "Exploiter les données pour augmenter le nombre d'abonnés",
        "Analyser les données de conversion de la campagne"
      ],
      correctAnswers: [0, 3],
      multiSelect: true
    },
    {
      id: 21,
      question: "Un community manager d'un groupe de fans remarque une activité importante certains jours et faible les jours suivants. L'objectif est d'augmenter la participation tout au long de la semaine.\n\nComment atteindre cet objectif ?",
      options: [
        "Utiliser les statistiques pour voir quel type de contenu suscite le plus d'interactions et publier aux meilleurs moments",
        "Publier à des heures fixes sans analyser les données",
        "Encourager les membres à partager des contenus qu'ils aiment",
        "Publier des contenus jugés pertinents sans tenir compte des préférences"
      ],
      correctAnswers: [0],
      multiSelect: false
    },
    {
      id: 22,
      question: "Le community manager d'un restaurant local souhaite obtenir des données qualitatives sur la satisfaction des clients au sujet des nouveaux choix de menu.\n\nComment doit-il collecter ces données ?",
      options: [
        "Compter combien de fois les membres répondent à la publication du nouveau menu",
        "Publier un sondage pour demander aux membres leur avis sur le nouveau menu",
        "Demander aux membres leurs suggestions d'éléments à ajouter au menu",
        "Demander aux membres de partager leur expérience sur leur dernière visite"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 23,
      question: "Un community manager crée un groupe pour créateurs de contenus. Il remarque que des membres manifestent leur frustration concernant la monétisation, sujet à l'origine de réactions négatives.\n\nComment recueillir les avis pour accroître le sentiment positif ?",
      options: [
        "Approuver les publications en attente et commenter chacune pour demander leur avis",
        "Contacter chaque membre individuellement",
        "Créer des publications concernant les avis sur les produits et organiser des sessions de retour d'expérience",
        "Accéder à la section des commentaires et demander aux membres de partager des retours"
      ],
      correctAnswers: [2],
      multiSelect: false
    },
    {
      id: 24,
      question: "Des membres d'un groupe partagent leurs restaurants préférés. Les propriétaires d'un restaurant local contactent le community manager pour diffuser des publicités dans le groupe.\n\nComment doit réagir le community manager ?",
      options: [
        "Montrer aux propriétaires la liste des membres pour qu'ils puissent leur envoyer des publicités",
        "Créer un sondage pour voir si les membres seraient d'accord pour autoriser la diffusion de publicités",
        "Faire payer les propriétaires pour chaque publication publicitaire",
        "Demander aux propriétaires d'entrer directement en contact avec les membres"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 25,
      question: "Une Page Facebook possède une large audience d'experts en couture. De nombreux experts ont fait part de leur intérêt pour dispenser des séminaires suite à des demandes d'abonnés.\n\nComment faciliter l'organisation d'événements en ligne ?",
      options: [
        "Fournir aux abonnés une liste d'experts et leur demander de les contacter directement",
        "Collaborer avec les experts pour organiser des événements sur la Page",
        "Attribuer le rôle d'admin aux experts pour leur permettre d'organiser des événements",
        "Demander aux experts de contacter les membres pour savoir lesquels sont intéressés"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 26,
      question: "Le community manager d'un restaurant local souhaite obtenir des données qualitatives sur la satisfaction des clients au sujet des nouveaux choix de menu.\n\nComment le community manager doit-il collecter ces données auprès des membres du groupe ?",
      options: [
        "Compter combien de fois les membres répondent à la publication du nouveau menu",
        "Publier un sondage à destination des clients pour demander aux membres leur avis sur le nouveau menu",
        "Demander aux membres leurs suggestions d'éléments à ajouter au menu dans un mois ou deux",
        "Demander aux membres de partager leur expérience sur leur dernière visite au restaurant"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 27,
      question: "Un community manager crée un groupe pour des créateurs de contenus émergents. Il remarque que dans plusieurs publications, des membres manifestent leur frustration concernant la monétisation et les indicateurs de produits. Sujet à l'origine de nombreuses réactions négatives dans le groupe. Les membres souhaitent faire part de leurs avis en détail.\n\nComment le community manager peut-il recueillir les avis des membres afin d'accroître le sentiment positif dans le groupe ?",
      options: [
        "Approuver les publications en attente et commenter chacune d'entre elles pour demander leur avis aux membres",
        "Contacter chaque membre individuellement pour leur demander directement leur avis",
        "Créer des publications concernant les avis sur les produits et organiser des sessions de retour d'expérience",
        "Accéder à la section des commentaires et demander aux membres de partager des retours sur l'expérience"
      ],
      correctAnswers: [2],
      multiSelect: false
    },
    {
      id: 28,
      question: "Des membres d'un groupe partagent leurs restaurants préférés dans un groupe Facebook très important avec des membres très impliqués. Le groupe possède également une Page Facebook associée dans laquelle des photos de plats locaux sont régulièrement publiées. Les propriétaires d'un restaurant local contactent le community manager pour diffuser des publicités dans le groupe.\n\nComment doit réagir le community manager ?",
      options: [
        "Montrer aux propriétaires du restaurant la liste des membres afin qu'ils puissent leur envoyer des publicités",
        "Créer un sondage pour voir si les membres seraient d'accord pour autoriser la diffusion de publicités par des entreprises locales",
        "Faire payer les propriétaires du restaurant pour chaque publication publicitaire",
        "Demander aux propriétaires du restaurant d'entrer directement en contact avec les membres via leurs publicités"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 29,
      question: "Une Page Facebook possède une large audience d'experts et de passionnés de couture. De nombreux experts ont fait part de leur intérêt pour dispenser des séminaires sur comment acquérir des compétences spécialisées en couture suite à des demandes d'abonnés sur la Page.\n\nLe community manager souhaite faciliter l'organisation d'événements en ligne lors desquels les experts peuvent dispenser des séminaires.\n\nComment cette tâche doit-elle être accomplie ?",
      options: [
        "Fournir aux abonnés une liste d'experts et leur demander de les contacter directement",
        "Collaborer avec les experts pour organiser des événements sur la Page",
        "Attribuer le rôle d'admin aux experts pour leur permettre d'organiser des événements en fonction de leurs horaires",
        "Demander aux experts de contacter les membres pour savoir lesquels sont intéressés par l'événement"
      ],
      correctAnswers: [1],
      multiSelect: false
    },
    {
      id: 30,
      question: "Un community manager est à la tête d'une communauté Facebook dynamique dénommée « Amoureux de la vie saine ». Les discussions du groupe tournent autour de la santé, du bien-être et du style de vie. Le community manager souhaite créer une source de revenus stable sans pour autant renoncer à l'authenticité de la communauté.\n\nAprès avoir analysé les indicateurs d'interactions, les données démographiques et les contenus populaires, il apparaît clairement que les membres sont passionnés de fitness, de nutrition et de bien-être mental. Il s'agit alors d'identifier des entreprises en phase avec ces centres d'intérêt pour établir des partenariats.\n\nQuels sont les deux types d'entreprises qui conviendraient le mieux à ces opportunités de partenariat ? (Sélectionnez 2 réponses)",
      options: [
        "Un studio de yoga",
        "Un magasin spécialisé en produits sains",
        "Une grande marque de prêt-à-porter",
        "Une entreprise pharmaceutique"
      ],
      correctAnswers: [0, 1],
      multiSelect: true
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswerSelect = (optionIndex: number): void => {
    const question = questions[currentQuestion];

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
    const question = questions[questionIndex];
    const userAnswer = selectedAnswers[questionIndex] || [];

    if (userAnswer.length !== question.correctAnswers.length) return false;

    return question.correctAnswers.every(answer => userAnswer.includes(answer));
  };

  const calculateScore = (): void => {
    let correct = 0;
    questions.forEach((_, index) => {
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
    if (currentQuestion < questions.length - 1) {
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

  const progress: number = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Résultats du QCM</h2>
            <div className="text-6xl font-bold mb-4">
              <span className={score >= questions.length * 0.7 ? 'text-green-500' : 'text-orange-500'}>
                {score}/{questions.length}
              </span>
            </div>
            <p className="text-xl text-gray-600">
              Score: {((score / questions.length) * 100).toFixed(1)}%
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {questions.map((question, qIndex) => {
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

  const question = questions[currentQuestion];
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
              Question {currentQuestion + 1} / {questions.length}
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
                {Object.keys(selectedAnswers).length} / {questions.length} réponses
              </p>
            </div>

            <button
              onClick={goToNext}
              disabled={userAnswers.length === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${userAnswers.length === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : currentQuestion === questions.length - 1
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;