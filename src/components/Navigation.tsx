import { Menu, X, ChevronRight, ChevronDown, BookOpen, Zap, Star, Users, Brain, LogIn, UserPlus, GraduationCap, LogOut, Sun, Moon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Img from '../constants/img';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserMenu from './auth/UserMenu';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  scrolled: boolean;
  onOpenLogin: () => void;
  onOpenSignup: () => void;
}

const playbookItems = [
  {
    icon: Zap,
    labelKey: 'playbook.items.conversion.label',
    descKey: 'playbook.items.conversion.desc',
    href: '/growth/conversion',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    requiresAuth: true,
  },
  {
    icon: GraduationCap,
    labelKey: 'playbook.items.community.label',
    descKey: 'playbook.items.community.desc',
    href: '/academy',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    requiresAuth: true,
  },
  {
    icon: Brain,
    labelKey: 'playbook.items.psychology.label',
    descKey: 'playbook.items.psychology.desc',
    href: '/growth/psychology',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    requiresAuth: false,
  },
];

const serviceItems = [
  {
    icon: Zap,
    labelKey: 'nav.services',
    descKey: 'nav.servicesDesc',
    href: '/services',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Star,
    labelKey: 'nav.pricing',
    descKey: 'nav.pricingDesc',
    href: '/pricing',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
];

export default function Navigation({ scrolled, onOpenLogin, onOpenSignup }: NavigationProps) {
  const { user, loading, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [playbook, setPlaybook] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobilePlaybook, setMobilePlaybook] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPlaybook(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/', delay: 'delay-75' },
    { name: t('nav.about'), href: '/about', delay: 'delay-100' },
    { name: t('nav.projects'), href: '/projects', delay: 'delay-150' },
    { name: t('nav.contact'), href: '/contact', delay: 'delay-200' },
  ];

  const filteredPlaybookItems = playbookItems.filter(item => !item.requiresAuth || (user && !loading));

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'Utilisateur';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background layer with filter - separated to avoid clipping the fixed mobile menu */}
      <div className={`absolute inset-0 h-[76px] transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border'
          : 'bg-background/70 backdrop-blur-md border-b border-border/50'
      }`} />

      <div className="relative max-w-[1600px] mx-auto px-4 xl:px-8">
        <div className="flex items-center h-[76px] gap-4">

          {/* ── Logo ── */}
          <a href="/" className="relative z-50 flex-shrink-0">
            <img src={Img.logo1} alt="Free Digital Logo" className="max-h-[54px] w-auto" />
          </a>

          {/* ── Centre : liens de navigation ── */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-[13px] uppercase font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* ── Services dropdown ── */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                onMouseEnter={() => setServicesDropdown(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] uppercase font-medium rounded-lg transition-all duration-200 ${
                  servicesDropdown
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary/40'
                }`}
              >
                {t('nav.services')}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                onMouseLeave={() => setServicesDropdown(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-300 origin-top ${servicesDropdown
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                {/* Arrow tip */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-l border-t border-border rotate-45" />

                <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border p-2 shadow-2xl shadow-black/50">
                  {serviceItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/40 transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                        <item.icon size={15} className={item.color} />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-foreground">{t(item.labelKey)}</div>
                        <div className="text-[11px] text-muted-foreground">{t(item.descKey)}</div>
                      </div>
                      <ChevronRight
                        size={14}
                        className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      />
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Growth Playbook dropdown ── */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setPlaybook(!playbook)}
                onMouseEnter={() => setPlaybook(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] uppercase font-medium rounded-lg transition-all duration-200 ${
                  playbook
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary/40'
                }`}
              >
                <BookOpen size={13} className="transition-colors duration-200" />
                {t('playbook.title')}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${playbook ? 'rotate-180' : ''}`}
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
                <div className="absolute -top-1.5 right-[72px] w-3 h-3 bg-card border-l border-t border-border rotate-45" />

                <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border p-3 shadow-2xl shadow-black/50">

                  {/* Header */}
                  <div className="px-3 py-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                        <Star size={12} className="text-white" />
                      </div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        {t('playbook.title')}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 pl-8">
                      {t('playbook.subtitle')}
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2" />

                  {/* Items */}
                  {filteredPlaybookItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setPlaybook(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/40 transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                        <item.icon size={15} className={item.color} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{t(item.labelKey)}</div>
                        <div className="text-xs text-muted-foreground">{t(item.descKey)}</div>
                      </div>
                      <ChevronRight
                        size={14}
                        className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      />
                    </NavLink>
                  ))}

                  {/* CTA footer */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-2 mb-3" />
                  <NavLink
                    to="/growth"
                    onClick={() => setPlaybook(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-emerald-500/20 text-emerald-300 text-xs font-semibold hover:from-blue-600/30 hover:to-emerald-600/30 transition-all duration-200"
                  >
                    <BookOpen size={13} />
                    {t('playbook.viewAll')} →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* ── Droite : langue + séparateur + auth (ancré à droite) ── */}
          <div className="hidden xl:flex flex-shrink-0 items-center gap-3">
            <LanguageSwitcher />

            {/* Toggle Dark / Light */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="relative w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200 overflow-hidden group"
            >
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <Sun size={15} />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <Moon size={15} />
              </span>
            </button>

            {/* Séparateur vertical */}
            <div className="w-px h-5 bg-border rounded-full" />

            {/* Auth buttons / UserMenu */}
            {!loading && (
              user ? (
                <UserMenu />
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenLogin}
                    className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/70 hover:text-foreground border border-border hover:border-border/80 px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-secondary/40"
                  >
                    <LogIn size={14} />
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={onOpenSignup}
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 px-3.5 py-2 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  >
                    <UserPlus size={14} />
                    {t('nav.signup')}
                  </button>
                </div>
              )
            )}
          </div>

          {/* ── Mobile toggle (visible sous xl) ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden ml-auto text-foreground relative z-[70] w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/40 backdrop-blur-sm hover:bg-secondary/70 transition-all duration-300"
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

      {/* ── Menu mobile ── */}
      <div
        className={`xl:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{ top: '76px' }}
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
                      : 'bg-secondary/20 border-border hover:border-border/80'
                    }`
                  }
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <span className="text-xl uppercase font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </span>
                  <ChevronRight
                    size={24}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                  />
                </NavLink>
              ))}

              {/* ── Mobile Services accordion ── */}
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } delay-150 ${mobileServices
                    ? 'border-emerald-500/40 bg-gradient-to-r from-blue-600/10 to-emerald-600/10'
                    : 'border-border bg-secondary/20'
                  }`}
              >
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                      <Zap size={15} className="text-white" />
                    </div>
                    <span className={`text-xl uppercase font-semibold transition-colors duration-200 ${mobileServices ? 'text-primary' : 'text-foreground'
                      }`}>
                      {t('nav.services')}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${mobileServices ? 'rotate-180 text-primary' : 'text-muted-foreground'
                      }`}
                  />
                </button>

                <div className={`transition-all duration-300 ${mobileServices ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 space-y-1.5">
                    {serviceItems.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={() => { setIsOpen(false); setMobileServices(false); }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-all group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={14} className={item.color} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{t(item.labelKey)}</div>
                          <div className="text-xs text-muted-foreground">{t(item.descKey)}</div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="ml-auto text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Mobile Growth Playbook accordion ── */}
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } delay-300 ${mobilePlaybook
                    ? 'border-emerald-500/40 bg-gradient-to-r from-blue-600/10 to-emerald-600/10'
                    : 'border-border bg-secondary/20'
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
                    <span className={`text-xl uppercase font-semibold transition-colors duration-200 ${mobilePlaybook ? 'text-primary' : 'text-foreground'
                      }`}>
                      {t('playbook.title')}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${mobilePlaybook ? 'rotate-180 text-primary' : 'text-muted-foreground'
                      }`}
                  />
                </button>

                <div className={`transition-all duration-300 ${mobilePlaybook ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 space-y-1.5">
                    {filteredPlaybookItems.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={() => { setIsOpen(false); setMobilePlaybook(false); }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-all group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={14} className={item.color} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{t(item.labelKey)}</div>
                          <div className="text-xs text-muted-foreground">{t(item.descKey)}</div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="ml-auto text-muted-foreground group-hover:text-primary transition-colors"
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
                      {t('playbook.viewAll')} →
                    </NavLink>
                  </div>
                </div>
              </div>

              <LanguageSwitcher />

              {/* Toggle thème mobile */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
                className="flex items-center justify-between w-full p-4 rounded-2xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all"
              >
                <span className="text-base font-semibold text-foreground/80">
                  {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
                </span>
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary/50 border border-border text-foreground/70">
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </span>
              </button>
            </div>

            <div className={`mt-8 space-y-4 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-500`}>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* ── Auth mobile ── */}
              {!loading && (
                user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/30 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {initial}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-semibold text-foreground">{displayName}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        await signOut();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/30 text-red-400 font-medium hover:bg-red-500/10 transition-all"
                    >
                      <LogOut size={16} />
                      {t('nav.logout')}
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setIsOpen(false); onOpenLogin(); }}
                      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-border text-foreground font-semibold hover:bg-secondary/40 transition-all"
                    >
                      <LogIn size={16} />
                      {t('nav.login')}
                    </button>
                    <button
                      onClick={() => { setIsOpen(false); onOpenSignup(); }}
                      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
                    >
                      <UserPlus size={16} />
                      {t('nav.signup')}
                    </button>
                  </div>
                )
              )}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl font-semibold text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {t('nav.cta')}
              </a>
              <p className="text-center text-sm text-muted-foreground">{t('nav.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}