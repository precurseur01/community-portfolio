import { useTranslation } from "react-i18next";

export default function LegalNotice() {
    const { t } = useTranslation();

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-gray-400 text-3xl font-bold mb-8">
                {t("legal.title")}
            </h1>

            <p className="text-gray-500 mb-6">{t("legal.intro")}</p>

            {/* Informations sur l’entreprise */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.companyTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.companyInfo")}</p>
            </section>

            {/* Directeur de publication */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.directorTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.directorInfo")}</p>
            </section>

            {/* Hébergement */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.hostTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.hostInfo")}</p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.copyrightTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.copyrightInfo")}</p>
            </section>

            {/* Données personnelles */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.dataTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.dataInfo")}</p>
            </section>

            {/* Contact */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-400 mb-3">
                    {t("legal.contactTitle")}
                </h2>
                <p className="text-gray-500">{t("legal.contactInfo")}</p>
            </section>
        </div>
    );
}