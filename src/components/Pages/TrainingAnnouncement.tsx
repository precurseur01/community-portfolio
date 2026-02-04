// components/TrainingAnnouncement.jsx
import { NavLink } from "react-router-dom"; // ou next/link si Next.js

export default function TrainingAnnouncement() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-4 rounded-b-lg shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-slideDown">
            <div className="text-center sm:text-left">
                <p className="text-lg font-semibold">
                    🏆 Formation Community Managers – Session du{' '}
                    <span className="text-orange-400 font-bold">28 mars 2026</span> ! Devenez un CM professionnel en 3 mois
                </p>
                <p className="text-sm mt-1">
                    Suivi personnalisé, exercices pratiques et attestation de fin de formation
                </p>
            </div>
            <NavLink
                to="/preselection"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all duration-300"
            >
                Je veux ma place
            </NavLink>
        </div>
    );
}
