import { useState, useRef, useEffect } from "react";
import {
    Send, Loader, CheckCircle, AlertCircle, ArrowRight, ArrowLeft,
    Clock, Briefcase, Rocket, TrendingUp, GraduationCap, HelpCircle,
    Sparkles, Flame, Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

const TOTAL_STEPS = 5;
const LS_KEY = "preselection_wizard_v1";

// ── Scarcity marketing lever ─────────────────────────────
// Ajuster SEATS_TAKEN manuellement au fil des inscriptions confirmées.
const SEATS_TOTAL = 15;
const SEATS_TAKEN = 9;

const INITIAL_FORM = {
    name: "",
    whatsapp: "",
    email: "",
    city: "",
    country: "",
    age: "",
    objective: "",
    experience: "",
    availability: "",
    exercises: "",
    format: "",
    equipment: [] as string[],
    motivation: "",
    practicalTest: "",
    creativity: "",
    payFees: "",
};

const OBJECTIVE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    emploi: Briefcase,
    freelance: Rocket,
    business: TrendingUp,
    competences: GraduationCap,
    incertain: HelpCircle,
};

export default function PreselectionForm() {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [validationError, setValidationError] = useState<string | null>(null);

    const equipmentOptions = ["Smartphone", "Ordinateur portable", "Tablette"];

    // ── Restore from localStorage ──
    useEffect(() => {
        try {
            const raw = localStorage.getItem(LS_KEY);
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved.formData) setFormData({ ...INITIAL_FORM, ...saved.formData });
                if (saved.currentStep && saved.currentStep >= 1 && saved.currentStep <= TOTAL_STEPS) {
                    setCurrentStep(saved.currentStep);
                }
            }
        } catch { /* noop */ }
    }, []);

    // ── Persist progress ──
    useEffect(() => {
        if (status === "success") return;
        try {
            localStorage.setItem(LS_KEY, JSON.stringify({ formData, currentStep }));
        } catch { /* noop */ }
    }, [formData, currentStep, status]);

    const toggleEquipment = (option: string) => {
        setFormData((prev) => ({
            ...prev,
            equipment: prev.equipment.includes(option)
                ? prev.equipment.filter((e) => e !== option)
                : [...prev.equipment, option],
        }));
    };

    // ── Endowed progress: barre démarre à 15% ──
    const progress = status === "success"
        ? 100
        : Math.round(15 + ((currentStep - 1) / TOTAL_STEPS) * 85);

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                return !!formData.objective;
            case 2:
                return !!formData.experience && !!formData.availability && !!formData.format;
            case 3:
                return formData.equipment.length > 0 && !!formData.practicalTest && !!formData.creativity.trim();
            case 4:
                return !!formData.motivation.trim() && !!formData.exercises && !!formData.payFees;
            case 5:
                return !!formData.name && !!formData.whatsapp && !!formData.email
                    && !!formData.city && !!formData.country && !!formData.age;
            default:
                return true;
        }
    };

    const goNext = () => {
        if (!validateStep(currentStep)) {
            setValidationError(t("preselectionForm.stepIncomplete"));
            return;
        }
        setValidationError(null);
        if (currentStep < TOTAL_STEPS) setCurrentStep(currentStep + 1);
    };

    const goPrev = () => {
        setValidationError(null);
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    // ── Auto-advance sur choix d'objectif (étape 1) ──
    const selectObjective = (key: string) => {
        setFormData((prev) => ({ ...prev, objective: key }));
        setValidationError(null);
        window.setTimeout(() => setCurrentStep(2), 280);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending" || status === "success") return;

        if (!validateStep(TOTAL_STEPS)) {
            setValidationError(t("preselectionForm.stepIncomplete"));
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/xldnpebz", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    ...formData,
                    equipment: formData.equipment.join(", "),
                    _subject: `Préselection formation – ${formData.name}`,
                }),
            });
            if (res.ok) {
                setStatus("success");
                try { localStorage.removeItem(LS_KEY); } catch { /* noop */ }
                setFormData(INITIAL_FORM);
                if (formRef.current) formRef.current.reset();
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const isDisabled = status === "sending" || status === "success";
    const isLastStep = currentStep === TOTAL_STEPS;

    // ── Objective options depuis i18n ──
    const objectiveOptions = Object.entries(
        t("preselectionForm.objectiveOptions", { returnObjects: true }) as Record<string, string>
    ).filter(([key]) => key !== "placeholder");

    return (
        <section className="py-24 bg-gradient-to-b from-blue-900/5 via-emerald-950/10 to-transparent">
            <div className="max-w-3xl mx-auto px-6">

                {/* ── Header ── */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                        {t("preselectionForm.title")}
                    </h2>
                    <p className="text-foreground/80">
                        <Trans i18nKey="preselectionForm.sessionInfo">
                            Session du <span className="text-orange-400 font-bold">06 octobre 2026</span>
                        </Trans>
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-secondary/60 border border-border/60 text-xs text-muted-foreground">
                        <Clock size={12} />
                        <span>{t("preselectionForm.timeEstimate")}</span>
                    </div>
                </div>

                {/* ── Scarcity meter compact (marketing lever) ── */}
                {status !== "success" && (() => {
                    const remaining = Math.max(0, SEATS_TOTAL - SEATS_TAKEN);
                    const fillPct = Math.min(100, (SEATS_TAKEN / SEATS_TOTAL) * 100);
                    const isFull = remaining === 0;
                    const isCritical = remaining > 0 && remaining <= 3;

                    const label = isFull
                        ? t("preselectionForm.scarcityFull")
                        : isCritical
                            ? t("preselectionForm.scarcityLastPlaces")
                            : t("preselectionForm.scarcityRemaining", { count: remaining, total: SEATS_TOTAL });

                    return (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-5 flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-border bg-secondary/40"
                        >
                            <div className="relative flex-shrink-0 text-emerald-500">
                                {isCritical || isFull ? (
                                    <>
                                        <Flame size={14} />
                                        {!isFull && (
                                            <span className="absolute inset-0 animate-ping opacity-50">
                                                <Flame size={14} />
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <Users size={14} />
                                )}
                            </div>

                            <span className="text-xs font-medium text-foreground/90 truncate">
                                {label}
                            </span>

                            <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                                <div className="w-16 sm:w-20 h-1.5 rounded-full bg-background/60 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${fillPct}%` }}
                                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                        className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"
                                    />
                                </div>
                                <span className="text-[11px] font-mono font-semibold text-muted-foreground tabular-nums">
                                    {SEATS_TAKEN}/{SEATS_TOTAL}
                                </span>
                            </div>
                        </motion.div>
                    );
                })()}

                {/* ── Progress + step indicator ── */}
                {status !== "success" && (
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2 text-xs">
                            <span className="font-semibold text-foreground">
                                {t("preselectionForm.stepIndicator", { current: currentStep, total: TOTAL_STEPS })}
                            </span>
                            <span className="text-muted-foreground">{progress}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-secondary/60 overflow-hidden">
                            <motion.div
                                initial={false}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"
                            />
                        </div>
                        <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                            <Sparkles size={12} className="text-emerald-500" />
                            <span>{t(`preselectionForm.steps.${currentStep}.encouragement`)}</span>
                        </div>
                    </div>
                )}

                {/* ── Card wizard ── */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-secondary/20 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-8"
                >
                    {status !== "success" && (
                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {t(`preselectionForm.steps.${currentStep}.title`)}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {t(`preselectionForm.steps.${currentStep}.desc`)}
                            </p>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {status !== "success" && (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* ══════ ÉTAPE 1 — OBJECTIF (cards auto-advance) ══════ */}
                                {currentStep === 1 && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {objectiveOptions.map(([key, label]) => {
                                            const Icon = OBJECTIVE_ICONS[key] || HelpCircle;
                                            const active = formData.objective === key;
                                            return (
                                                <button
                                                    key={key}
                                                    type="button"
                                                    onClick={() => selectObjective(key)}
                                                    disabled={isDisabled}
                                                    className={`group text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${active
                                                        ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                                                        : "border-border bg-background/40 hover:border-foreground/30 hover:bg-background/70"
                                                        }`}
                                                >
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${active
                                                        ? "bg-gradient-to-br from-blue-600 to-emerald-500 text-white"
                                                        : "bg-secondary text-muted-foreground group-hover:text-foreground"
                                                        }`}>
                                                        <Icon size={18} />
                                                    </div>
                                                    <span className="font-medium text-sm text-foreground">{label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* ══════ ÉTAPE 2 — PROFIL ══════ */}
                                {currentStep === 2 && (
                                    <div className="space-y-4">
                                        <select
                                            required
                                            disabled={isDisabled}
                                            value={formData.experience}
                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            name="experience"
                                            className="input-field"
                                        >
                                            <option value="">{t("preselectionForm.experienceOptions.placeholder")}</option>
                                            {Object.entries(t("preselectionForm.experienceOptions", { returnObjects: true }))
                                                .filter(([key]) => key !== "placeholder")
                                                .map(([key, label]) => (
                                                    <option key={key} value={key}>{label as string}</option>
                                                ))}
                                        </select>

                                        <select
                                            required
                                            disabled={isDisabled}
                                            value={formData.availability}
                                            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                                            name="availability"
                                            className="input-field"
                                        >
                                            <option value="">{t("preselectionForm.availabilityOptions.placeholder")}</option>
                                            <option value="oui">{t("preselectionForm.availabilityOptions.oui")}</option>
                                            <option value="non">{t("preselectionForm.availabilityOptions.non")}</option>
                                        </select>

                                        <select
                                            required
                                            disabled={isDisabled}
                                            value={formData.format}
                                            onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                                            name="format"
                                            className="input-field"
                                        >
                                            <option value="">{t("preselectionForm.formatOptions.placeholder")}</option>
                                            <option value="presentiel">{t("preselectionForm.formatOptions.presentiel")}</option>
                                            <option value="enligne">{t("preselectionForm.formatOptions.enligne")}</option>
                                        </select>
                                    </div>
                                )}

                                {/* ══════ ÉTAPE 3 — COMPÉTENCES ══════ */}
                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-foreground mb-1">
                                                {t("preselectionForm.equipmentTitle")}
                                                <span className="text-red-400 ml-1">*</span>
                                            </label>
                                            <p className="text-xs text-muted-foreground mb-3">
                                                {t("preselectionForm.equipmentQuestion")}
                                            </p>
                                            <div className="grid sm:grid-cols-3 gap-2">
                                                {equipmentOptions.map((option) => {
                                                    const active = formData.equipment.includes(option);
                                                    return (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => toggleEquipment(option)}
                                                            disabled={isDisabled}
                                                            className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${active
                                                                ? "border-emerald-500 bg-emerald-500/10 text-foreground"
                                                                : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                                                                }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-foreground mb-2">
                                                {t("preselectionForm.practicalTestQuestion")}
                                            </label>
                                            <p className="text-xs text-muted-foreground mb-3">
                                                {t("preselectionForm.practicalTestDesc1")} {t("preselectionForm.practicalTestDesc2")}
                                            </p>
                                            <div className="space-y-2">
                                                {(t("preselectionForm.practicalTestOptions", { returnObjects: true }) as string[]).map((option: string) => {
                                                    const active = formData.practicalTest === option;
                                                    return (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, practicalTest: option })}
                                                            disabled={isDisabled}
                                                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${active
                                                                ? "border-emerald-500 bg-emerald-500/10 text-foreground"
                                                                : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                                                                }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-foreground mb-2">
                                                {t("preselectionForm.creativityTitle")}
                                            </label>
                                            <textarea
                                                required
                                                disabled={isDisabled}
                                                value={formData.creativity}
                                                onChange={(e) => setFormData({ ...formData, creativity: e.target.value })}
                                                name="creativity"
                                                placeholder={t("preselectionForm.creativityPlaceholder")}
                                                rows={3}
                                                className="input-field resize-none"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* ══════ ÉTAPE 4 — ENGAGEMENT ══════ */}
                                {currentStep === 4 && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-foreground mb-2">
                                                {t("preselectionForm.motivationTitle")}
                                            </label>
                                            <textarea
                                                required
                                                disabled={isDisabled}
                                                value={formData.motivation}
                                                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                                name="motivation"
                                                placeholder={t("preselectionForm.motivationPlaceholder")}
                                                rows={4}
                                                className="input-field resize-none"
                                            />
                                        </div>

                                        <select
                                            required
                                            disabled={isDisabled}
                                            value={formData.exercises}
                                            onChange={(e) => setFormData({ ...formData, exercises: e.target.value })}
                                            name="exercises"
                                            className="input-field"
                                        >
                                            <option value="">{t("preselectionForm.exercisesOptions.placeholder")}</option>
                                            <option value="oui">{t("preselectionForm.exercisesOptions.oui")}</option>
                                            <option value="non">{t("preselectionForm.exercisesOptions.non")}</option>
                                        </select>

                                        <select
                                            required
                                            disabled={isDisabled}
                                            value={formData.payFees}
                                            onChange={(e) => setFormData({ ...formData, payFees: e.target.value })}
                                            name="payFees"
                                            className="input-field"
                                        >
                                            <option value="">{t("preselectionForm.payFeesOptions.placeholder")}</option>
                                            <option value="oui">{t("preselectionForm.payFeesOptions.oui")}</option>
                                            <option value="non">{t("preselectionForm.payFeesOptions.non")}</option>
                                        </select>
                                    </div>
                                )}

                                {/* ══════ ÉTAPE 5 — COORDONNÉES ══════ */}
                                {currentStep === 5 && (
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {["name", "whatsapp", "email", "city", "country", "age"].map((field) => (
                                            <input
                                                key={field}
                                                type={field === "email" ? "email" : field === "age" ? "number" : "text"}
                                                placeholder={t(`preselectionForm.placeholders.${field}`)}
                                                required
                                                disabled={isDisabled}
                                                min={field === "age" ? 18 : undefined}
                                                value={formData[field as keyof typeof formData] as string}
                                                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                name={field}
                                                className="input-field"
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Validation error ── */}
                    {validationError && status !== "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 flex items-center gap-2 text-xs text-red-400"
                        >
                            <AlertCircle size={13} />
                            <span>{validationError}</span>
                        </motion.div>
                    )}

                    {/* ── Navigation ── */}
                    {status !== "success" && (
                        <div className="mt-8 flex items-center justify-between gap-3">
                            <button
                                type="button"
                                onClick={goPrev}
                                disabled={currentStep === 1 || isDisabled}
                                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ArrowLeft size={15} />
                                {t("preselectionForm.previous")}
                            </button>

                            {!isLastStep && currentStep !== 1 && (
                                <button
                                    type="button"
                                    onClick={goNext}
                                    disabled={isDisabled}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {t("preselectionForm.next")}
                                    <ArrowRight size={15} />
                                </button>
                            )}

                            {currentStep === 1 && (
                                <span className="text-xs text-muted-foreground italic">
                                    ↑ {t("preselectionForm.stepIncomplete").replace(".", "")}
                                </span>
                            )}

                            {isLastStep && (
                                <button
                                    type="submit"
                                    disabled={isDisabled}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader size={15} className="animate-spin" />
                                            {t("preselectionForm.sending")}
                                        </>
                                    ) : status === "error" ? (
                                        <>
                                            <AlertCircle size={15} />
                                            {t("preselectionForm.retry")}
                                        </>
                                    ) : (
                                        <>
                                            {t("preselectionForm.submitButton")}
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    )}

                    {/* ── Success ── */}
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                                <CheckCircle size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                {t("preselectionForm.successTitle", { name: formData.name || "" })}
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                {t("preselectionForm.successBody")}
                            </p>
                        </motion.div>
                    )}

                    {/* ── Error banner ── */}
                    {status === "error" && (
                        <div className="mt-4 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-sm">
                            <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-red-400" />
                            <div>
                                <p className="font-semibold text-red-300 mb-0.5">{t("preselectionForm.errorTitle")}</p>
                                <p className="text-red-400/80 text-xs">{t("preselectionForm.errorBody")}</p>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border-radius: 0.875rem;
                    border: 1px solid hsl(var(--border));
                    background: hsl(var(--background) / 0.5);
                    color: hsl(var(--foreground));
                    font-size: 0.95rem;
                    outline: none;
                    transition: all 0.2s;
                }
                .input-field::placeholder { color: hsl(var(--muted-foreground)); }
                .input-field:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16,185,129,0.25);
                }
                .input-field option {
                    background-color: hsl(var(--card));
                    color: hsl(var(--foreground));
                }
                .input-field:disabled { opacity: 0.5; cursor: not-allowed; }
            `}</style>
        </section>
    );
}
