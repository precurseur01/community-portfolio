import { Mail, Linkedin, Send, Facebook, Github, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

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
                    message: formData.message,
                    _subject: `Nouveau message de ${formData.name}`,
                }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Retour à idle après 5s
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const socialLinks = [
        { icon: Linkedin, url: "https://linkedin.com/in/yndris-douanla-060968273", label: 'LinkedIn', key: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Facebook, url: 'https://www.facebook.com/share/1C6Lz8aFes/?mibextid=wwXIfr', label: 'Facebook', key: 'Facebook', color: 'hover:text-blue-300' },
        { icon: Github, url: 'https://github.com/precurseur01', label: 'Github', key: 'Github', color: 'hover:text-blue-300' },
        { icon: Mail, url: 'mailto:contact@freedry.dev', label: 'Email', key: 'Email', color: 'hover:text-emerald-400' },
    ];

    const inputClass = `
        w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white
        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const isDisabled = status === 'sending' || status === 'success';

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
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
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* ── Colonne gauche ── */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">{t('contact.connect.title')}</h3>

                            {/* Email */}
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

                            {/* Téléphone */}
                            <a href="tel:+237670616710" className="flex items-center gap-4 mb-8 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Phone size={24} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">{t('contact.connect.phone')}</div>
                                    <div className="text-white font-medium">+237 670616710</div>
                                </div>
                            </a>

                            {/* Réseaux */}
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

                            {/* Pourquoi nous */}
                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="font-semibold mb-3 text-emerald-400">{t('contact.whyWorkWithMe.title')}</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {Object.values(t('contact.whyWorkWithMe.features', { returnObjects: true })).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                                            <span>{feature as string}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ── Colonne droite — Formulaire ── */}
                    <div>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6"
                        >
                            {/* Nom */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={isDisabled}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={inputClass}
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={isDisabled}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={inputClass}
                                    placeholder={t('contact.form.emailPlaceholder')}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    disabled={isDisabled}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`${inputClass} resize-none`}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                            </div>

                            {/* Bouton */}
                            <button
                                type="submit"
                                disabled={isDisabled}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {status === 'sending' && (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        Envoi en cours…
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle size={20} />
                                        Message envoyé !
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <AlertCircle size={20} />
                                        Réessayer
                                    </>
                                )}
                                {status === 'idle' && (
                                    <>
                                        {t('contact.form.submitButton.default')}
                                        <Send size={20} />
                                    </>
                                )}
                            </button>

                            {/* Feedback inline */}
                            {status === 'success' && (
                                <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-sm">
                                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold mb-0.5">Votre message a bien été envoyé 🎉</p>
                                        <p className="text-emerald-400/70">Je vous répondrai dans les plus brefs délais.</p>
                                    </div>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold mb-0.5">Une erreur est survenue</p>
                                        <p className="text-red-400/70">Réessayez ou contactez-nous directement par email.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}