import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    // Configuration des langues disponibles
    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        // Facile d'ajouter d'autres langues :
        // { code: 'es', name: 'Español', flag: '🇪🇸' },
        // { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        // { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (languageCode: string) => {
        console.log("switch lang", i18n);
        i18n.changeLanguage(languageCode);


        setIsOpen(false);
    };

    // Fermer le menu si on clique ailleurs
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.language-switcher')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative language-switcher">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3  text-white-700 hover:text-white-900 transition-colors rounded-lg 0"
                title="Changer de langue / Change language"
            >
                <Globe size={20} />
                <span className="text-sm font-medium flex items-center space-x-1">
                    <span>{currentLanguage.flag}</span>
                    <span>{currentLanguage.code.toUpperCase()}</span>
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[150px] z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary/50 flex items-center space-x-3 ${i18n.language === language.code ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                                }`}
                        >
                            <span className="text-lg">{language.flag}</span>
                            <span>{language.name}</span>
                            {i18n.language === language.code && (
                                <span className="ml-auto text-blue-600">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;