import { motion } from "framer-motion";
import Img from "../constants/img";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router";




export default function HomeServicesSections() {
    const { t } = useTranslation();
    const sections = [
        {
            title: t("sections.0.title"),
            description: t("sections.0.description"),
            description2: t("sections.0.description2"),
            image: Img.imgStrategie,
        },
        {
            title: t("sections.1.title"),
            description: t("sections.1.description"),
            description2: t("sections.1.description2"),
            image: Img.img1,
        },
        {
            title: t("sections.2.title"),
            description: t("sections.2.description"),
            description2: t("sections.2.description2"),
            image: Img.img2,
        },
        {
            title: t("sections.3.title"),
            description: t("sections.3.description"),
            description2: t("sections.3.description2"),
            image: Img.img3,
        },
    ];

    // const navigate = useNavigate();
    return (
        <section className="relative py-24 overflow-hidden bg-black from-slate-950 via-blue-950 to-slate-900">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32">
                {sections.map((section, index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, x: isReverse ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className={`relative group ${isReverse ? "lg:order-1" : "lg:order-2"
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-auto max-h-[600px] object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* TEXT */}
                            <motion.div
                                initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className={`space-y-6 ${isReverse ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                    {section.title}
                                </h2>

                                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>

                                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                    {section.description}
                                </p>

                                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                    {section.description2}
                                </p>

                                <div>
                                    <a href="#contact" className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                                        {t('services.learnMore')}
                                    </a>
                                </div>

                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}