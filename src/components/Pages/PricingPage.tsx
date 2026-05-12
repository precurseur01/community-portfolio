import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Target, Users, Crown, ArrowRight, MessageCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "FREE PUB ONLY",
    price: "50 000",
    period: "FCFA/mois",
    description: "Campagne publicitaire uniquement",
    tagline: "Hors budget pub",
    features: [
      "Mise en place & optimisation des campagnes",
      "Création des audiences ciblées",
      "Suivi quotidien ou hebdomadaire",
      "Ajustements coût par lead",
      "Reporting simple de performance"
    ],
    bonus: "Techniques de conversion + Coaching",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    icon: <Target className="w-6 h-6 text-blue-400" />,
    popular: false
  },
  {
    name: "FREE COMMUNITY ONLY",
    price: "60 000",
    period: "FCFA/mois",
    description: "Gestion de communauté",
    tagline: "1 plateforme",
    features: [
      "3 posts/semaine + stories",
      "Création & planification du contenu",
      "Animation de la page (posts, stories)",
      "Réponse aux commentaires & messages",
      "Calendrier éditorial mensuel",
      "Reporting mensuel"
    ],
    bonus: null,
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    popular: false
  },
  {
    name: "FREE VISIBILITÉ",
    price: "90 000",
    period: "FCFA/mois",
    description: "Contenu + Boost Pub",
    tagline: "1 plateforme | Hors budget pub",
    features: [
      "4 posts/semaine + stories",
      "Community management (1 plateforme)",
      "Boost de publications stratégiques",
      "Ciblage d'audience de base",
      "Suivi des performances",
      "Reporting mensuel"
    ],
    bonus: "Conseils stratégie de contenu",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    icon: <Sparkles className="w-6 h-6 text-orange-400" />,
    popular: false
  },
  {
    name: "FREE COMMUNITY + ADS",
    price: "150 000",
    period: "FCFA/mois",
    description: "Communauté → Leads qualifiés",
    tagline: "2 plateformes | Hors budget pub",
    features: [
      "5 posts/semaine + stories",
      "Community management complet",
      "Stratégie de contenu personnalisée",
      "Calendrier de contenu mensuel",
      "Gestion des campagnes publicitaires",
      "Qualification des leads",
      "Optimisation des performances",
      "Reporting mensuel détaillé"
    ],
    bonus: "Techniques de conversion + Coaching",
    color: "text-green-400",
    borderColor: "border-green-500/50",
    icon: <Zap className="w-6 h-6 text-green-400" />,
    popular: true
  },
  {
    name: "FREE PREMIUM 360°",
    price: "250 000",
    period: "FCFA/mois",
    description: "Présence digitale complète",
    tagline: "3 plateformes | Hors budget pub",
    features: [
      "7 posts/semaine + stories & reels",
      "Community management multi-plateformes",
      "Campagnes publicitaires avancées",
      "Création de visuels & vidéos courtes",
      "Stratégie de contenu personnalisée",
      "Suivi & gestion des leads",
      "Rapports hebdomadaires & mensuels"
    ],
    bonus: "Tunnel de vente + Coaching + Support prioritaire",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    icon: <Crown className="w-6 h-6 text-red-400" />,
    popular: false
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Nos Tarifs & Forfaits</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Investissez dans votre <span className="text-gradient">Croissance Digitale</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions marketing adaptées à chaque étape de votre développement. 
            Choisissez le forfait qui correspond à vos ambitions.
          </p>
        </motion.div>
        
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative flex flex-col p-8 rounded-3xl border bg-card/40 backdrop-blur-xl ${
              plan.popular ? 'border-primary/50 glow-primary scale-105 z-10' : plan.borderColor
            } transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Sparkles size={14} />
                Plus Populaire
              </div>
            )}

            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-secondary/50">
                {plan.icon}
              </div>
              <div className="text-right">
                <h3 className={`font-display font-bold text-lg ${plan.color}`}>{plan.name}</h3>
                <p className="text-muted-foreground text-xs">{plan.tagline}</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-display font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground font-medium">{plan.period}</span>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/70'}`}>
                    <Check size={12} />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.bonus && (
              <div className="mb-8 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles size={12} /> Bonus
                </p>
                <p className="text-sm font-medium">{plan.bonus}</p>
              </div>
            )}

            <a 
              href={`https://wa.me/237670616710?text=${encodeURIComponent(
                `Bonjour, je suis intéressé par le forfait ${plan.name} de Free Digital Solutions. Pouvez-vous m'en dire plus ?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:scale-[1.02] shadow-lg shadow-primary/20' 
                  : 'bg-secondary hover:bg-secondary/80 border border-white/10'
              }`}
            >
              Choisir ce forfait
              <ArrowRight size={18} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-card p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden text-center"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <MessageCircle size={120} />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Besoin d'un accompagnement sur mesure ?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto space-y-2">
            <span className="block">📌 Budget publicitaire non inclus dans les forfaits.</span>
            <span className="block">📌 Engagement minimum : <span className="text-white font-bold">3 mois</span>.</span>
            <span className="block">📌 Devis personnalisé disponible pour vos besoins spécifiques.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/237670616710?text=${encodeURIComponent(
                "Bonjour, je souhaiterais obtenir un devis sur mesure pour les services de Free Digital Solutions."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all flex items-center gap-2"
            >
              Demander un devis
              <ArrowRight size={18} />
            </a>
            <p className="text-sm text-muted-foreground">
              Tu veux que je t'aide à choisir ? <span className="text-primary cursor-pointer hover:underline">Parlons-en !</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;
