import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PreselectionForm() {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        city: "",
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
    });

    const equipmentOptions = ["Smartphone", "Ordinateur portable", "Tablette"];

    useEffect(() => {
        navigate('/preselection');
    }, []);

    const toggleEquipment = (option: string) => {
        setFormData((prev) => ({
            ...prev,
            equipment: prev.equipment.includes(option)
                ? prev.equipment.filter((e) => e !== option)
                : [...prev.equipment, option],
        }));
    };

    const handleSubmit = () => {
        setTimeout(() => {
            if (formRef.current) formRef.current.reset();
            setFormData({
                name: "",
                whatsapp: "",
                email: "",
                city: "",
                age: "",
                objective: "",
                experience: "",
                availability: "",
                exercises: "",
                format: "",
                equipment: [],
                motivation: "",
                practicalTest: "",
                creativity: "",
                payFees: "",
            });
        }, 3000);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-blue-900/5 via-emerald-950/10 to-transparent">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6">{t("preselectionForm.title")}</h2>
                <p className="text-center text-gray-300 mb-12">
                    <Trans i18nKey="preselectionForm.sessionInfo">
                        Session du <span className="text-orange-400 font-bold">28 mars 2026</span> – 3 mois pour devenir un CM professionnel !
                    </Trans>
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xldnpebz"
                    method="POST"
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6"
                >
                    {/* Infos personnelles */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.personalInfo")}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {["name", "whatsapp", "email", "city", "age"].map((field) => (
                            <input
                                key={field}
                                type={field === "email" ? "email" : field === "age" ? "number" : "text"}
                                placeholder={t(`preselectionForm.placeholders.${field}`)}
                                required
                                min={field === "age" ? 18 : undefined}
                                value={formData[field as keyof typeof formData]}
                                onChange={(e) =>
                                    setFormData({ ...formData, [field]: e.target.value })
                                }
                                name={field}
                                className={`input-field ${field === "age" ? "col-span-2" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Profil et objectif */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.profileObjective")}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <select
                            required
                            value={formData.objective}
                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                            name="objective"
                            className="input-field"
                        >
                            <option value="">{t("preselectionForm.objectiveOptions.placeholder")}</option>
                            {Object.entries(t("preselectionForm.objectiveOptions", { returnObjects: true }))
                                .filter(([key]) => key !== "placeholder")
                                .map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                        </select>

                        <select
                            required
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            name="experience"
                            className="input-field"
                        >
                            <option value="">{t("preselectionForm.experienceOptions.placeholder")}</option>
                            {Object.entries(t("preselectionForm.experienceOptions", { returnObjects: true }))
                                .filter(([key]) => key !== "placeholder")
                                .map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                        </select>
                    </div>

                    {/* Disponibilité et format */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.availabilityTitle")}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <select
                            required
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

                    {/* Équipement */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.equipmentTitle")}</h3>
                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                        {equipmentOptions.map((option) => (
                            <label key={option} className="flex items-center gap-2 text-white cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={formData.equipment.includes(option)}
                                    value={option}
                                    onChange={() => toggleEquipment(option)}
                                    name="equipment"
                                    className="accent-emerald-400 w-5 h-5"
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    {/* Motivation */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.motivationTitle")}</h3>
                    <textarea
                        required
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        name="motivation"
                        placeholder={t("preselectionForm.motivationPlaceholder")}
                        rows={5}
                        className="input-field resize-none"
                    />

                    {/* Mise en situation */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.practicalTestTitle")}</h3>
                    <p className="text-gray-300 mb-4">{t("preselectionForm.practicalTestDesc1")}</p>
                    <p className="text-gray-300 mb-4">{t("preselectionForm.practicalTestDesc2")}</p>
                    <p className="text-gray-300 mb-4 font-semibold">{t("preselectionForm.practicalTestQuestion")}</p>
                    <div className="space-y-2 mb-6">
                        {(t("preselectionForm.practicalTestOptions", { returnObjects: true }) as string[]).map((option: string) => (
                            <label key={option} className="flex items-center gap-2 text-white cursor-pointer select-none">
                                <input
                                    type="radio"
                                    name="practicalTest"
                                    value={option}
                                    checked={formData.practicalTest === option}
                                    onChange={(e) => setFormData({ ...formData, practicalTest: e.target.value })}
                                    className="accent-emerald-400 w-5 h-5"
                                    required
                                />
                                {option}
                            </label>
                        ))}

                    </div>

                    {/* Créativité */}
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{t("preselectionForm.creativityTitle")}</h3>
                    <textarea
                        required
                        value={formData.creativity}
                        onChange={(e) => setFormData({ ...formData, creativity: e.target.value })}
                        name="creativity"
                        placeholder={t("preselectionForm.creativityPlaceholder")}
                        rows={3}
                        className="input-field resize-none"
                    />

                    {/* Paiement */}
                    <select
                        required
                        value={formData.payFees}
                        onChange={(e) => setFormData({ ...formData, payFees: e.target.value })}
                        name="payFees"
                        className="input-field"
                    >
                        <option value="">{t("preselectionForm.payFeesOptions.placeholder")}</option>
                        <option value="oui">{t("preselectionForm.payFeesOptions.oui")}</option>
                        <option value="non">{t("preselectionForm.payFeesOptions.non")}</option>
                    </select>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        {t("preselectionForm.submitButton")} <Send size={20} />
                    </button>
                </form>
            </div>
            <style>
                {`
  .input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.05);
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s;
  }
  .input-field:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16,185,129,0.3);
  }
  .input-field option {
    background-color: #1e293b; /* bleu foncé similaire au bg */
    color: white;
  }
`}
            </style>

        </section>
    );
}
