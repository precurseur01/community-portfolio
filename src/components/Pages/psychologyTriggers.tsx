import { useState } from "react";

const psychologyTriggers = [
    {
        id: "emotion",
        title: "L'émotion déclenche l'achat",
        icon: "❤️",
        description:
            "Les clients achètent rarement avec la logique. La décision est déclenchée par une émotion.",
        details: [
            "La peur de rester bloqué",
            "Le désir de progresser",
            "La frustration face à un problème",
            "L'envie de réussir",
        ],
        example:
            "❌ Formation marketing complète\n✅ Apprenez comment trouver vos premiers clients en ligne",
    },
    {
        id: "result",
        title: "Le client veut un résultat",
        icon: "🎯",
        description:
            "Un client n'achète jamais un produit. Il achète le résultat que ce produit va produire.",
        details: [
            "Un site web = plus de clients",
            "Une formation = plus de compétences",
            "Une stratégie = plus de ventes",
        ],
        example:
            "❌ Création de site web\n✅ Obtenez un site qui attire des clients automatiquement",
    },
    {
        id: "trust",
        title: "La confiance vend",
        icon: "🤝",
        description:
            "Sans confiance, aucune vente n'est possible. La confiance est la vraie monnaie du marketing.",
        details: [
            "Témoignages clients",
            "Résultats visibles",
            "Études de cas",
            "Contenu éducatif",
        ],
        example:
            "« Grâce à cette stratégie, notre entreprise a multiplié ses prospects par 3. »",
    },
    {
        id: "clarity",
        title: "La simplicité convertit",
        icon: "🧠",
        description:
            "Le cerveau humain déteste la complexité. Un message clair convertit toujours plus.",
        details: [
            "Phrase courte",
            "Promesse claire",
            "Bénéfice immédiat",
        ],
        example:
            "❌ Solution digitale innovante\n✅ Trouvez plus de clients grâce à internet",
    },
    {
        id: "urgency",
        title: "L'urgence déclenche l'action",
        icon: "⏳",
        description:
            "Lorsqu'une opportunité est limitée, le cerveau veut agir plus vite.",
        details: [
            "Places limitées",
            "Promotion temporaire",
            "Session prochaine",
        ],
        example:
            "Il ne reste que 5 places pour cette session.",
    },
    {
        id: "recognition",
        title: "Le client veut être compris",
        icon: "💬",
        description:
            "Un client fait confiance lorsqu'il sent que vous comprenez vraiment sa situation.",
        details: [
            "Décrire son problème",
            "Utiliser son langage",
            "Parler de sa réalité",
        ],
        example:
            "Vous avez une entreprise mais peu de clients sur internet ?",
    },
];

export default function PsychologyLearning() {
    const [active, setActive] = useState<string | null>(null);

    const current = psychologyTriggers.find((t) => t.id === active);

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-950 text-white">

            <div className="max-w-6xl mx-auto">

                {/* Header */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold mb-4">
                        Comprendre la <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Psychologie Client</span>
                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Découvrez les principes psychologiques qui expliquent pourquoi les clients achètent.
                        Cliquez sur chaque principe pour apprendre rapidement.
                    </p>

                </div>

                {/* Grid */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                    {psychologyTriggers.map((item) => (

                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className="text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all hover:bg-white/10"
                        >

                            <div className="text-3xl mb-3">{item.icon}</div>

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-400">
                                {item.description}
                            </p>

                        </button>

                    ))}

                </div>

                {/* Detail */}

                {current && (

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                        <div className="flex items-center gap-4 mb-6">

                            <div className="text-4xl">{current.icon}</div>

                            <h3 className="text-2xl font-bold">
                                {current.title}
                            </h3>

                        </div>

                        <ul className="space-y-2 mb-6 text-slate-300">

                            {current.details.map((d) => (
                                <li key={d}>✓ {d}</li>
                            ))}

                        </ul>

                        <div className="bg-slate-900 p-5 rounded-xl border-l-4 border-emerald-500">

                            <div className="text-sm text-slate-400 mb-2">
                                Exemple marketing
                            </div>

                            <pre className="text-sm whitespace-pre-line text-slate-200">
                                {current.example}
                            </pre>

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
}