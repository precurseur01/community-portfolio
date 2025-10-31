import { Mail, Linkedin, Instagram, Twitter, Send, Phone } from 'lucide-react';
import { useState, useRef } from 'react';
// import type { FormEvent } from "react";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // const [isSubmitted, setIsSubmitted] = useState(false);


    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        // Optionnel : si tu veux éviter le rechargement complet
        // e.preventDefault();
        // setIsSubmitted(true)
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.reset();
            }
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }, 3000); // 3s après l'envoi
    };

    const socialLinks = [
        { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:text-pink-400' },
        { icon: Twitter, url: '#', label: 'Twitter / X', color: 'hover:text-blue-300' },
        { icon: Mail, url: 'mailto:contact@yndrisdouanla.com', label: 'Email', color: 'hover:text-emerald-400' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Prêt à donner vie à votre <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">communauté</span> ?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Construisons ensemble une stratégie qui fait battre le cœur de votre audience
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Connectons-nous</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Email</div>
                                        <div className="text-white font-medium">yndriswilf@gmail.com</div>
                                    </div>


                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                                        <Phone size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">Tel</div>
                                        <div className="text-white font-medium">+237 650871031</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                                                aria-label={social.label}
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="font-semibold mb-3 text-emerald-400">Pourquoi travailler avec moi ?</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Approche data-driven et créative</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Résultats mesurables et transparents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Expertise multi-plateformes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Accompagnement personnalisé</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            action="https://formspree.io/f/xldnpebz"
                            method="POST"
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Parlez-moi de votre projet..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    // disabled={isSubmitted}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {/* {isSubmitted ? (
                                        <>Message envoyé avec succès !</>
                                    ) : (
                                        <>
                                            Discutons de votre projet
                                            <Send size={20} />
                                        </>
                                    )} */}
                                    <>
                                        Discutons de votre projet
                                        <Send size={20} />
                                    </>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
