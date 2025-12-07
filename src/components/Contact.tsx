import { Mail, Linkedin, Send, Facebook, Github } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import type { FormEvent } from "react";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // const [isSubmitted, setIsSubmitted] = useState(false);


    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
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
        { icon: Linkedin, url: "https://linkedin.com/in/yndris-douanla-060968273", label: 'LinkedIn', key: 'LinkedIn', color: 'hover:text-blue-400' },
        // { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:text-pink-400' },
        // { icon: Twitter, url: '#', label: 'Twitter / X', color: 'hover:text-blue-300' },
        { icon: Facebook, url: 'https://www.facebook.com/share/1BC6jjWT3G/?mibextid=wwXIfr', label: 'Facebook', key: 'Facebook', color: 'hover:text-blue-300' },
        { icon: Github, url: 'https://github.com/precurseur01', label: 'Github', key: 'Github', color: 'hover:text-blue-300' },
        { icon: Mail, url: 'mailto:yndriswilf@gmail.com', label: 'Email', key: 'Email', color: 'hover:text-emerald-400' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        {t('contact.titlePrefix')}{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            {t('contact.titleGradient')}
                        </span>
                        ?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">{t('contact.connect.title')}</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{t('contact.connect.emailLabel')}</div>
                                        <div className="text-white font-medium">{t('contact.connect.emailValue')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-lg font-semibold mb-4">{t('contact.connect.followTitle')}</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                                                aria-label={t(`contact.connect.socialLinks.${social.key}`)}
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="font-semibold mb-3 text-emerald-400">{t('contact.whyWorkWithMe.title')}</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {Object.values(t('contact.whyWorkWithMe.features', { returnObjects: true })).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
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
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                // disabled={isSubmitted}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {/* {isSubmitted
                                    ? t('contact.form.submitButton.submitted')
                                    : <>
                                        {t('contact.form.submitButton.default')}
                                        <Send size={20} />
                                    </>} */}
                                <>
                                    {t('contact.form.submitButton.default')}
                                    <Send size={20} />
                                </>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
