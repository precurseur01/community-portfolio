import { Menu, X, ChevronRight, ChevronDown, BookOpen, Zap, Star, Users, Brain } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Img from '../constants/img';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  scrolled: boolean;
}

const playbookItems = [
  {
    icon: Zap,
    label: 'Techniques de Conversion',
    desc: '8 méthodes pour convertir',
    href: '/growth/conversion',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Users,
    label: 'Community Management',
    desc: 'qcm',
    href: '/growth/formation',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Brain,
    label: 'Psychologie Client',
    desc: 'SONCAS & motivations',
    href: '/growth/psychology',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  // {
  //   icon: MessageSquare,
  //   label: 'Scripts WhatsApp',
  //   desc: 'Templates de messages',
  //   href: '/growth/scripts',
  //   color: 'text-emerald-400',
  //   bg: 'bg-emerald-500/10',
  // },
  // {
  //   icon: TrendingUp,
  //   label: 'Tunnel de Vente',
  //   desc: 'De prospect à client',
  //   href: '/growth/funnel',
  //   color: 'text-blue-400',
  //   bg: 'bg-blue-500/10',
  // },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [playbook, setPlaybook] = useState(false);
  const [mobilePlaybook, setMobilePlaybook] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPlaybook(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/', delay: 'delay-75' },
    { name: t('nav.about'), href: '/about', delay: 'delay-100' },
    { name: t('nav.services'), href: '/services', delay: 'delay-150' },
    { name: t('nav.projects'), href: '/projects', delay: 'delay-200' },
    { name: t('nav.contact'), href: '/contact', delay: 'delay-300' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="/" className="relative z-50">
            <img src={Img.logo} alt="Free Technology Logo" className="max-h-[60px] w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm uppercase font-medium transition-colors duration-200 ${isActive
                    ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1'
                    : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* ── Growth Playbook dropdown ── */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setPlaybook(!playbook)}
                onMouseEnter={() => setPlaybook(true)}
                className={`flex items-center gap-1.5 text-sm uppercase font-medium transition-colors duration-200 ${playbook ? 'text-emerald-400' : 'text-gray-300 hover:text-white'
                  }`}
              >
                <BookOpen
                  size={14}
                  className={`transition-colors duration-200 ${playbook ? 'text-emerald-400' : ''}`}
                />
                Growth Playbook
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${playbook ? 'rotate-180 text-emerald-400' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                onMouseLeave={() => setPlaybook(false)}
                className={`absolute top-full right-0 mt-3 w-72 transition-all duration-300 origin-top-right ${playbook
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                {/* Arrow tip */}
                <div className="absolute -top-1.5 right-[72px] w-3 h-3 bg-slate-900 border-l border-t border-white/10 rotate-45" />

                <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 p-3 shadow-2xl shadow-black/50">

                  {/* Header */}
                  <div className="px-3 py-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                        <Star size={12} className="text-white" />
                      </div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        Growth Playbook
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-8">
                      Développez vos compétences digitales
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2" />

                  {/* Items */}
                  {playbookItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setPlaybook(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                        <item.icon size={15} className={item.color} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{item.label}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                      <ChevronRight
                        size={14}
                        className="ml-auto text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all"
                      />
                    </NavLink>
                  ))}

                  {/* CTA footer */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2 mb-3" />
                  <NavLink
                    to="/growth"
                    onClick={() => setPlaybook(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-emerald-500/20 text-emerald-300 text-xs font-semibold hover:from-blue-600/30 hover:to-emerald-600/30 transition-all duration-200"
                  >
                    <BookOpen size={13} />
                    Voir tout le Playbook →
                  </NavLink>
                </div>
              </div>
            </div>

            <LanguageSwitcher />
          </div>

          {/* Mobile toggle */}
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

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ top: '4rem' }}
      >
        <div className="h-full overflow-y-auto">
          <div className="min-h-full flex flex-col justify-between p-8">
            <div className="space-y-2">

              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    } ${link.delay} ${isActive
                      ? 'bg-gradient-to-r from-blue-600/30 to-emerald-600/30 border-emerald-400'
                      : 'bg-gradient-to-r from-white/5 to-white/0 border-white/10 hover:border-white/20'
                    }`
                  }
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <span className="text-xl uppercase font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {link.name}
                  </span>
                  <ChevronRight
                    size={24}
                    className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300"
                  />
                </NavLink>
              ))}

              {/* ── Mobile Growth Playbook accordion ── */}
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } delay-300 ${mobilePlaybook
                    ? 'border-emerald-500/40 bg-gradient-to-r from-blue-600/10 to-emerald-600/10'
                    : 'border-white/10 bg-gradient-to-r from-white/5 to-white/0'
                  }`}
              >
                <button
                  onClick={() => setMobilePlaybook(!mobilePlaybook)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                      <BookOpen size={15} className="text-white" />
                    </div>
                    <span className={`text-xl uppercase font-semibold transition-colors duration-200 ${mobilePlaybook ? 'text-emerald-400' : 'text-white'
                      }`}>
                      Growth Playbook
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${mobilePlaybook ? 'rotate-180 text-emerald-400' : 'text-gray-400'
                      }`}
                  />
                </button>

                <div className={`transition-all duration-300 ${mobilePlaybook ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 space-y-1.5">
                    {playbookItems.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={() => { setIsOpen(false); setMobilePlaybook(false); }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={14} className={item.color} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{item.label}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="ml-auto text-slate-600 group-hover:text-emerald-400 transition-colors"
                        />
                      </NavLink>
                    ))}

                    {/* CTA mobile — plein dégradé comme les autres CTA du site */}
                    <NavLink
                      to="/growth"
                      onClick={() => { setIsOpen(false); setMobilePlaybook(false); }}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold mt-2 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                    >
                      <BookOpen size={14} />
                      Voir tout le Playbook →
                    </NavLink>
                  </div>
                </div>
              </div>

              <LanguageSwitcher />
            </div>

            <div className={`mt-8 space-y-6 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-500`}>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl font-semibold text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {t('nav.cta')}
              </a>
              <p className="text-center text-sm text-gray-400">{t('nav.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}