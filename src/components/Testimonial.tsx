import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Star } from "lucide-react";
import AnimatedCounter from "./animation/animationCounter";
import { useTranslation } from "react-i18next";

interface Testimonial {
    id: number;
    nameKey: string;
    quoteKey: string;
    highlights?: { value: number; suffix: string; labelKey: string }[];
    initials: string;
    color: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        nameKey: "testimonials.quotes.0.name",
        quoteKey: "testimonials.quotes.0.quote",
        highlights: [
            { value: 15, suffix: "", labelKey: "testimonials.quotes.0.highlights.0.label" },
            { value: 30, suffix: "", labelKey: "testimonials.quotes.0.highlights.1.label" },
        ],
        initials: "BE",
        color: "from-primary to-accent",
    },
    {
        id: 2,
        nameKey: "testimonials.quotes.1.name",
        quoteKey: "testimonials.quotes.1.quote",
        highlights: [
            { value: 30, suffix: "", labelKey: "testimonials.quotes.0.highlights.0.label" },
        ],
        initials: "CG",
        color: "from-accent to-primary",
    },
    {
        id: 3,
        nameKey: "testimonials.quotes.2.name",
        quoteKey: "testimonials.quotes.2.quote",
        highlights: [],
        initials: "YN",
        color: "from-primary to-success",
    },
    {
        id: 4,
        nameKey: "testimonials.quotes.3.name",
        quoteKey: "testimonials.quotes.3.quote",
        highlights: [
            { value: 300, suffix: "", labelKey: "testimonials.quotes.3.highlights.0.label" },
        ],
        initials: "CF",
        color: "from-success to-primary",
    },
    {
        id: 5,
        nameKey: "testimonials.quotes.4.name",
        quoteKey: "testimonials.quotes.4.quote",
        highlights: [],
        initials: "PA",
        color: "from-accent to-success",
    },
    {
        id: 6,
        nameKey: "testimonials.quotes.5.name",
        quoteKey: "testimonials.quotes.5.quote",
        highlights: [
            { value: 20, suffix: "", labelKey: "testimonials.quotes.5.highlights.0.label" },
            { value: 25, suffix: "", labelKey: "testimonials.quotes.5.highlights.1.label" },
        ],
        initials: "RL",
        color: "from-primary to-accent",
    },
];

const stats = [
    { value: 85, suffix: "%", labelKey: "testimonials.stats.prospects" },
    { value: 220, suffix: "+", labelKey: "testimonials.stats.campaigns" },
    { value: 95, suffix: "%", labelKey: "testimonials.stats.satisfiedClients" },
    { value: 25, suffix: "+", labelKey: "testimonials.stats.appointments" },
];

const Testimonials = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const next = () => setCurrent((p) => (p + 1) % testimonials.length);
    const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

    const currentTestimonial = testimonials[current];

    return (
        <section
            ref={sectionRef}
            aria-label={t("testimonials.sectionTitle")}
            role="region"
            className="relative py-20 md:py-32 overflow-hidden bg-card/50"
        >
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        {t("testimonials.sectionTitle1")}{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            {t("testimonials.sectionTitle2")}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("testimonials.sectionDescription")}</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-4 rounded-xl bg-card/50 border border-border/50"
                        >
                            <AnimatedCounter
                                target={stat.value}
                                suffix={stat.suffix}
                                className="text-3xl md:text-4xl font-bold text-primary"
                            />
                            <p className="text-muted-foreground text-sm mt-1">
                                {t(stat.labelKey)}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Carousel */}
                <div className="relative">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.id}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-card rounded-2xl border border-border/50 p-8 md:p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center">

                                {/* Avatar */}
                                <div
                                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${currentTestimonial.color} flex items-center justify-center`}
                                >
                                    <span className="text-white font-bold text-xl">
                                        {currentTestimonial.initials}
                                    </span>
                                </div>

                                <div className="flex-1 text-center md:text-left">

                                    {/* Stars */}
                                    <div className="flex gap-1 justify-center md:justify-start mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <div className="relative">
                                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                                        <blockquote className="text-lg md:text-xl leading-relaxed italic pl-6">
                                            "{t(currentTestimonial.quoteKey)}"
                                        </blockquote>
                                    </div>
                                    {/* Nom */}
                                    <div className="flex items-center gap-3 mt-8">
                                        <span className="w-6 h-[2px] bg-blue-500"></span>
                                        <h3 className="text-lg italic font-semibold text-primary">
                                            {t(currentTestimonial.nameKey)}
                                        </h3>
                                    </div>

                                    {/* Highlights */}
                                    {currentTestimonial.highlights &&
                                        currentTestimonial.highlights.length > 0 && (
                                            <div className="flex gap-6 mt-4 justify-center md:justify-start flex-wrap">
                                                {currentTestimonial.highlights.map((h, i) => (
                                                    <div key={i} className="text-center">
                                                        <AnimatedCounter
                                                            target={h.value}
                                                            suffix={h.suffix}
                                                            className="text-2xl font-bold text-primary"
                                                        />
                                                        <p className="text-muted-foreground text-xs mt-0.5">
                                                            {t(h.labelKey)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">

                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="p-3 rounded-full border border-border/50"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                                onClick={next}
                                className="p-3 rounded-full border border-border/50"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2.5 h-2.5 rounded-full ${i === current
                                        ? "bg-primary w-8"
                                        : "bg-muted-foreground/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg"
                    >
                        {t("testimonials.cta.button")}
                        <ArrowRight className="w-5 h-5" />
                    </a>

                    <p className="text-muted-foreground text-sm mt-3">
                        {t("testimonials.cta.description")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;