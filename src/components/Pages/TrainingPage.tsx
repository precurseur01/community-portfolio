import { useTranslation } from 'react-i18next';

const TrainingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{t('services.service7.title')}</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('services.service7.subtitle')}</h2>
      <p className="mb-8">{t('services.service7.description')}</p>

      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>{t('services.service7.features.feature1')}</li>
        <li>{t('services.service7.features.feature2')}</li>
        <li>{t('services.service7.features.feature3')}</li>
      </ul>

      <div className="text-lg font-semibold">
        <p>{t('services.service7.price')}</p>
        <p>{t('services.service7.priceRange')}</p>
      </div>
    </div>
  );
};

export default TrainingPage;
