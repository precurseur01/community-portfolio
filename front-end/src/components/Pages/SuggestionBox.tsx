import { Lightbulb, Send, CheckCircle, AlertCircle, Loader, TrendingUp, Users, Target, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function SuggestionBox() {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        category: '',
        suggestion: '' 
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'sending' || status === 'success') return;

        setStatus('sending');

        try {
            const res = await fetch('https://formspree.io/f/xldnpebz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    category: formData.category,
                    suggestion: formData.suggestion,
                    _subject: `💡 Nouvelle suggestion de ${formData.name}`,
                }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', category: '', suggestion: '' });
                setTimeout(() => setStatus('idle'), 6000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const categories = [
        { value: 'formation', label: 'Formations', icon: Users, color: 'from-[#09A9E3] to-[#50BC74]' },
        { value: 'contenu', label: 'Contenus & Stratégie', icon: Target, color: 'from-[#50BC74] to-[#09A9E3]' },
        { value: 'service', label: 'Services', icon: TrendingUp, color: 'from-[#09A9E3] to-[#50BC74]' },
        { value: 'autre', label: 'Autre', icon: Sparkles, color: 'from-[#50BC74] to-[#09A9E3]' }
    ];

    const inputClass = `
        w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white
        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09A9E3]
        focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const isDisabled = status === 'sending' || status === 'success';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-emerald-950 text-white">
            
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#09A9E3]/10 via-transparent to-[#50BC74]/10" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#09A9E3]/20 to-[#50BC74]/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
                            <Lightbulb className="text-[#09A9E3]" size={24} />
                            <span className="text-sm font-medium">Votre avis compte</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                            Boîte à{' '}
                            <span className="bg-gradient-to-r from-[#09A9E3] to-[#50BC74] bg-clip-text text-transparent">
                                Suggestions
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Vous avez une idée pour améliorer nos formations en community management ou nos services de marketing digital ? 
                            <span className="text-[#50BC74] font-medium"> Partagez-la avec nous !</span>
                        </p>

                        <div className="w-24 h-1 bg-gradient-to-r from-[#09A9E3] to-[#50BC74] mx-auto rounded-full mt-8" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        
                        {/* Left Column - Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            
                            {/* Pourquoi suggérer */}
                            <div className="bg-gradient-to-br from-[#09A9E3]/20 to-[#50BC74]/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="text-[#50BC74]" size={24} />
                                    Pourquoi suggérer ?
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#09A9E3] rounded-full mt-2 flex-shrink-0" />
                                        <span>Contribuez à l'amélioration de nos formations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#50BC74] rounded-full mt-2 flex-shrink-0" />
                                        <span>Proposez de nouveaux contenus ou services</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#09A9E3] rounded-full mt-2 flex-shrink-0" />
                                        <span>Partagez votre expérience et vos besoins</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#50BC74] rounded-full mt-2 flex-shrink-0" />
                                        <span>Aidez-nous à mieux vous servir</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Catégories populaires */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                                <h3 className="text-xl font-bold mb-4">Catégories populaires</h3>
                                <div className="space-y-3">
                                    {categories.map((cat) => {
                                        const Icon = cat.icon;
                                        return (
                                            <div key={cat.value} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                                                <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-lg flex items-center justify-center`}>
                                                    <Icon size={20} className="text-white" />
                                                </div>
                                                <span className="text-sm font-medium">{cat.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="bg-gradient-to-br from-[#50BC74]/20 to-[#09A9E3]/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                                <h3 className="text-lg font-bold mb-4 text-center">Impact collectif</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#09A9E3]">247</div>
                                        <div className="text-xs text-gray-400 mt-1">Suggestions</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#50BC74]">89%</div>
                                        <div className="text-xs text-gray-400 mt-1">Satisfaites</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-2">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#09A9E3] to-[#50BC74] rounded-xl flex items-center justify-center">
                                        <Lightbulb size={24} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Partagez votre idée</h2>
                                </div>

                                {/* Name & Email on same row for desktop */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Nom */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Votre nom (optionnel)
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            disabled={isDisabled}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={inputClass}
                                            placeholder="Ex: Marie Dupont"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Votre email (optionnel)
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            disabled={isDisabled}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputClass}
                                            placeholder="marie@exemple.com"
                                        />
                                    </div>
                                </div>

                                {/* Catégorie */}
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                                        Catégorie <span className="text-[#09A9E3]">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        required
                                        disabled={isDisabled}
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className={`${inputClass} cursor-pointer`}
                                    >
                                        <option value="" className="bg-gray-900">Sélectionnez une catégorie</option>
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value} className="bg-gray-900">
                                                {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Suggestion */}
                                <div>
                                    <label htmlFor="suggestion" className="block text-sm font-medium text-gray-300 mb-2">
                                        Votre suggestion <span className="text-[#09A9E3]">*</span>
                                    </label>
                                    <textarea
                                        id="suggestion"
                                        name="suggestion"
                                        required
                                        rows={7}
                                        disabled={isDisabled}
                                        value={formData.suggestion}
                                        onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Décrivez votre idée ou suggestion en détail... Que souhaiteriez-vous voir améliorer ou ajouter ?"
                                    />
                                    <div className="text-xs text-gray-500 mt-2">
                                        {formData.suggestion.length} / 1000 caractères
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isDisabled}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#09A9E3] to-[#50BC74] rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#09A9E3]/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none hover:scale-[1.02] active:scale-100"
                                >
                                    {status === 'sending' && (
                                        <>
                                            <Loader size={22} className="animate-spin" />
                                            Envoi en cours…
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <CheckCircle size={22} />
                                            Suggestion envoyée !
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <>
                                            <AlertCircle size={22} />
                                            Réessayer
                                        </>
                                    )}
                                    {status === 'idle' && (
                                        <>
                                            Envoyer ma suggestion
                                            <Send size={22} />
                                        </>
                                    )}
                                </button>

                                {/* Success Message */}
                                {status === 'success' && (
                                    <div className="flex items-start gap-3 p-5 bg-[#50BC74]/10 border border-[#50BC74]/30 rounded-xl text-[#50BC74] animate-in fade-in slide-in-from-top-2 duration-500">
                                        <CheckCircle size={22} className="flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold mb-1">Merci pour votre suggestion ! 🎉</p>
                                            <p className="text-sm text-emerald-300/80">
                                                Nous l'étudierons avec attention et reviendrons vers vous si nécessaire.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="flex items-start gap-3 p-5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 animate-in fade-in slide-in-from-top-2 duration-500">
                                        <AlertCircle size={22} className="flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold mb-1">Une erreur est survenue</p>
                                            <p className="text-sm text-red-400/80">
                                                Veuillez réessayer ou nous contacter directement par email.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Privacy Note */}
                                <p className="text-xs text-gray-500 text-center pt-4 border-t border-white/10">
                                    🔒 Vos données sont traitées de manière confidentielle et utilisées uniquement pour améliorer nos services.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                            <Sparkles size={16} className="text-[#50BC74]" />
                            <span>Chaque suggestion compte • Ensemble, innovons !</span>
                            <Sparkles size={16} className="text-[#09A9E3]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}