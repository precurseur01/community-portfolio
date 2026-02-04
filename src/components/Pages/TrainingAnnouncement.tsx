import { NavLink } from "react-router-dom"; // ou next/link si Next.js
import { useTranslation } from "react-i18next";

export default function TrainingAnnouncement() {
    const { t } = useTranslation();

    const sessionDate = "28 mars 2026";

    return (
        <div className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-4 rounded-b-lg shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-slideDown">
            <div className="text-center sm:text-left">
                <p className="text-lg font-semibold">
                    {t("trainingAnnouncement.title", { date: sessionDate })}
                </p>
                <p className="text-sm mt-1">
                    {t("trainingAnnouncement.subtitle")}
                </p>
            </div>
            <NavLink
                to="/preselection"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all duration-300"
            >
                {t("trainingAnnouncement.button")}
            </NavLink>
        </div>
    );
}
