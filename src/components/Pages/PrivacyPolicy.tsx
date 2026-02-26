import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-400 mb-8">
                {t("privacy.title")}
            </h1>

            <p className="text-gray-500 mb-6">{t("privacy.intro")}</p>

            {/* Collecte des données */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.collectTitle")}</h2>
                <p className="text-gray-500">{t("privacy.collectInfo")}</p>
            </section>

            {/* Utilisation des données */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.useTitle")}</h2>
                <p className="text-gray-500">{t("privacy.useInfo")}</p>
            </section>

            {/* Cookies */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.cookiesTitle")}</h2>
                <p className="text-gray-500">{t("privacy.cookiesInfo")}</p>
            </section>

            {/* Partage et sécurité */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.shareTitle")}</h2>
                <p className="text-gray-500">{t("privacy.shareInfo")}</p>
            </section>

            {/* Vos droits */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.rightsTitle")}</h2>
                <p className="text-gray-500">{t("privacy.rightsInfo")}</p>
            </section>

            {/* Contact */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">{t("privacy.contactTitle")}</h2>
                <p className="text-gray-500">{t("privacy.contactInfo")}</p>
            </section>
        </div>
    );
}