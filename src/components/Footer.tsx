import {
  Facebook,
  Linkedin,
  Mail, Github,
  MapPin, Phone,
  Rocket, TrendingUp, Target, Zap
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Img from "../constants/img";

export default function Footer() {
  const { t } = useTranslation();

  const serviceKeys = [
    "services.service1.title",
    "services.service2.title",
    "services.service3.title",
    "services.service4.title",
    "services.service5.title",
    "services.service6.title",
    "services.service7.title",
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/yndris-douanla-060968273", label: 'LinkedIn', key: 'LinkedIn', color: 'hover:text-blue-400' },
    // { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    // { icon: Twitter, url: '#', label: 'Twitter / X', color: 'hover:text-blue-300' },
    { icon: Facebook, url: 'https://www.facebook.com/share/1C6Lz8aFes/?mibextid=wwXIfr', label: 'Facebook', key: 'Facebook', color: 'hover:text-blue-300' },
    { icon: Github, url: 'https://github.com/precurseur01', label: 'Github', key: 'Github', color: 'hover:text-blue-300' },
    { icon: Mail, url: 'mailto:contact@freedry.dev', label: 'Email', key: 'Email', color: 'hover:text-emerald-400' },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-gray-300">

      {/* SECTION PRINCIPALE */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Bloc 1 */}
          <div className="space-y-5">
            <img
              src={Img.whitelogo}
              alt="Free Technology Logo"
              className="max-h-[60px] w-auto"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.about")}
            </p>

            <div className="flex gap-4 pt-2">
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

          {/* Bloc 2 – Services dynamiques */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceKeys.map((key, index) => (
                <li key={index}>
                  <a href={`/services`} className="hover:text-white transition">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc 3 – Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={18} /> Yaoundé, Cameroun
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} /> contact@freedry.dev
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} /> +237 670616710
              </li>
            </ul>
          </div>

          {/* Bloc 4 – Pourquoi nous */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              {t("footer.why")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Rocket size={18} className="text-white" /> {t("footer.why1")}
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp size={18} className="text-white" /> {t("footer.why2")}
              </li>
              <li className="flex items-center gap-2">
                <Target size={18} className="text-white" /> {t("footer.why3")}
              </li>
              <li className="flex items-center gap-2">
                <Zap size={18} className="text-white" /> {t("footer.why4")}
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* SECTION MÉTHODE PREMIUM */}
      <div className="relative py-20 overflow-hidden border-y border-white/10 bg-gradient-to-br from-blue-600/10 via-black to-emerald-600/10">

        <div className="max-w-6xl mx-auto px-6">

          {/* Titre */}
          <div className="text-center mb-14">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t("footer.processTitle")}
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              {t("footer.processSubtitle")}
            </p>
          </div>

          {/* Étapes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Étape 1 */}
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-blue-400 text-3xl font-bold mb-4">01</div>
              <h4 className="text-white font-semibold mb-3">
                {t("footer.step1")}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("footer.step1Desc")}
              </p>
            </div>

            {/* Étape 2 */}
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-emerald-400 text-3xl font-bold mb-4">02</div>
              <h4 className="text-white font-semibold mb-3">
                {t("footer.step2")}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("footer.step2Desc")}
              </p>
            </div>

            {/* Étape 3 */}
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-blue-400 text-3xl font-bold mb-4">03</div>
              <h4 className="text-white font-semibold mb-3">
                {t("footer.step3")}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("footer.step3Desc")}
              </p>
            </div>

            {/* Étape 4 */}
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2">
              <div className="text-emerald-400 text-3xl font-bold mb-4">04</div>
              <h4 className="text-white font-semibold mb-3">
                {t("footer.step4")}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("footer.step4Desc")}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* BAS FOOTER */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-4 text-sm text-gray-500 text-center md:text-left">

          <p>
            © {new Date().getFullYear()} – Free Digital Solutions
          </p>

          <div className="flex gap-6">
            <a href="/legal-notice" className="hover:text-white transition">
              {t("footer.legal")}
            </a>
            <a href="/privacy-policy" className="hover:text-white transition">
              {t("footer.privacy")}
            </a>
            {/* <a href="/cgv" className="hover:text-white transition">
              {t("footer.cgv")}
            </a> */}
          </div>
        </div>
      </div>

    </footer>
  );
}