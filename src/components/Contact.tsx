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
        { icon: Linkedin, url: "https://linkedin.com/in/yndris-douanla-060968273", label: 'LinkedIn', key: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: Facebook, url: 'https://www.facebook.com/share/1C6Lz8aFes/?mibextid=wwXIfr', label: 'Facebook', key: 'Facebook', color: 'hover:text-blue-500' },
        { icon: Github, url: 'https://github.com/precurseur01', label: 'Github', key: 'Github', color: 'hover:text-foreground' },
        { icon: Mail, url: 'mailto:contact@freedry.dev', label: 'Email', key: 'Email', color: 'hover:text-primary' },
    ];

    const isDisabled = status === 'sending' || status === 'success';

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                        {t('contact.titlePrefix')}{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                            {t('contact.titleGradient')}
                        </span>
                        ?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* ── Colonne gauche ── */}
                    <div className="space-y-8">
                        <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-foreground">{t('contact.connect.title')}</h3>

                            {/* Email */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{t('contact.connect.emailLabel')}</div>
                                        <div className="text-foreground font-semibold mt-0.5">{t('contact.connect.emailValue')}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <a href="tel:+237670616710" className="flex items-center gap-4 mb-6 group cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                    <Phone size={22} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{t('contact.connect.phone')}</div>
                                    <div className="text-foreground font-semibold mt-0.5">+237 670616710</div>
                                </div>
                            </a>

                            {/* Réseaux sociaux */}
                            <div className="pt-5 border-t border-border">
                                <h4 className="text-sm font-semibold text-foreground mb-4">{t('contact.connect.followTitle')}</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className={`w-11 h-11 bg-secondary hover:bg-muted border border-border rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color} hover:scale-105 cursor-pointer`}
                                                aria-label={t(`contact.connect.socialLinks.${social.key}`)}
                                            >
                                                <Icon size={18} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Pourquoi nous */}
                            <div className="mt-6 p-5 bg-muted/50 rounded-2xl border border-border">
                                <h4 className="font-semibold mb-3 text-primary text-sm">{t('contact.whyWorkWithMe.title')}</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {Object.values(t('contact.whyWorkWithMe.features', { returnObjects: true })).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
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
                            className="bg-card border border-border rounded-3xl p-8 space-y-5 shadow-sm"
                        >
                            {/* Nom */}
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-1.5">
                                    {t('contact.form.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    required
                                    disabled={isDisabled}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder={t('contact.form.namePlaceholder')}
                                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-1.5">
                                    {t('contact.form.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    required
                                    disabled={isDisabled}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-1.5">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={5}
                                    disabled={isDisabled}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                                />
                            </div>

                            {/* Bouton */}
                            <button
                                type="submit"
                                disabled={isDisabled}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none cursor-pointer"
                            >
                                {status === 'sending' && (
                                    <>
                                        <Loader size={18} className="animate-spin" />
                                        Envoi en cours…
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle size={18} />
                                        Message envoyé !
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <AlertCircle size={18} />
                                        Réessayer
                                    </>
                                )}
                                {status === 'idle' && (
                                    <>
                                        {t('contact.form.submitButton.default')}
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {/* Feedback messages */}
                            {status === 'success' && (
                                <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-600 text-sm">
                                    <CheckCircle size={17} className="flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold mb-0.5">Votre message a bien été envoyé !</p>
                                        <p className="text-emerald-600/70 text-xs">Je vous répondrai dans les plus brefs délais.</p>
                                    </div>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/25 rounded-xl text-red-600 text-sm">
                                    <AlertCircle size={17} className="flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold mb-0.5">Une erreur est survenue</p>
                                        <p className="text-red-600/70 text-xs">Réessayez ou contactez-nous directement par email.</p>
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
