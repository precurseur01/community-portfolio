import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.home'), href: '/', delay: 'delay-75' },
    { name: t('nav.about'), href: '/about', delay: 'delay-100' },
    { name: t('nav.services'), href: '#services', delay: 'delay-150' },
    { name: t('nav.projects'), href: '#cases', delay: 'delay-200' },
    { name: t('nav.contact'), href: '#contact', delay: 'delay-300' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent relative z-50">
            {t('nav.brand')}
          </a>

          {/* Desktop menus */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile toggle  */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            aria-label={t('nav.toggleMenu')}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menus */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: '4rem' }}>
        <div className="h-full overflow-y-auto">
          <div className="min-h-full flex flex-col justify-between p-8">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/0 hover:from-blue-600/20 hover:to-emerald-600/20 border border-white/10 hover:border-white/20 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${link.delay}`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <span className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {link.name}
                  </span>
                  <ChevronRight size={24} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
                </a>
              ))}
              <LanguageSwitcher />
            </div>

            <div className={`mt-8 space-y-6 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-500`}>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl font-semibold text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {t('nav.cta')}
              </a>

              <p className="text-center text-sm text-gray-400">
                {t('nav.tagline')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
