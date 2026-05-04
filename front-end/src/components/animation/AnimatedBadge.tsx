import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { TFunction } from "i18next";

interface AnimatedBadgeProps {
    t: TFunction;
}

export default function AnimatedBadge({ t }: AnimatedBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative inline-flex items-center gap-2 px-6 py-3 
                 rounded-full mb-6 
                 border border-white/20 
                 overflow-hidden"
            style={{
                background:
                    "linear-gradient(270deg, rgba(255,255,255,0.08), rgba(255,255,255,0.15), rgba(255,255,255,0.08))",
                backgroundSize: "200% 200%",
                animation:
                    "gradientMove 14s ease infinite, floatSoft 8s ease-in-out infinite",
            }}
        >
            {/* SHIMMER CONTINU SANS TEMPS MORT */}
            <span className="absolute inset-0 pointer-events-none overflow-hidden">
                <span
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                        animation: "shimmer 8s linear infinite",
                    }}
                />
            </span>

            {/* ICON PULSE SUBTIL */}
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Sparkles size={18} className="text-emerald-400 drop-shadow-md" />
            </motion.div>

            {/* TEXT */}
            <span className="relative text-md text-gray-200 font-medium tracking-wide">
                {t("hero.role")}
            </span>
        </motion.div>
    );
}