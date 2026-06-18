import { useState, useEffect } from 'react';
import BrandLoader from './components/BrandLoader';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
// import TrainingPage from './components/Pages/TrainingPage';
import PreselectionForm from './components/Pages/PreselectionForm';
import MainLayout from './Layout/MainLayout';
import LegalNotice from './components/Pages/LegalNotice';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import HomeServicesSections from './components/Home';
import Testimonials from './components/Testimonial';
import NotFound from './components/Pages/NotFound';
import ReceiptGenerator from './components/Pages/ReceiptGenerator';
import ConversionTechniques from './components/Pages/ConversionTechniques';
import GrowthPlaybook from './components/Pages/GrowthPlaybook';
import PsychologyLearning from './components/Pages/psychologyTriggers';
// import TrainingPage2 from './components/Pages/TrainingPage2';
import SuggestionBox from './components/Pages/SuggestionBox';
import CMTrainingHero from './components/CMTrainingHero';
import CMCurriculumPage from './components/Pages/CMCurriculumPage';
import CMProgramsPage from './components/Pages/CMProgramsPage';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AcademyLayout from './components/Academy/AcademyLayout';

import PricingPage from './components/Pages/PricingPage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {appLoading && <BrandLoader onComplete={() => setAppLoading(false)} />}
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ═══ Pages publiques ═══ */}
        <Route
          path="/"
          element={
            <MainLayout scrolled={scrolled}>
              <CMTrainingHero />
              <Hero />
              <HomeServicesSections />
              <Services />
              <Testimonials />
              <Contact />
              <FloatingWhatsAppButton />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout scrolled={scrolled}>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout scrolled={scrolled}>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <MainLayout scrolled={scrolled}>
              <PricingPage />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout scrolled={scrolled}>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout scrolled={scrolled}>
              <CaseStudies />
            </MainLayout>
          }
        />
        <Route
          path="/legal-notice"
          element={
            <MainLayout scrolled={scrolled} >
              <LegalNotice />
            </MainLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <MainLayout scrolled={scrolled}>
              <PrivacyPolicy />
            </MainLayout>
          }
        />

        {/* ═══ Pages protégées (authentification requise) ═══ */}

        {/* Academy — plateforme e-learning unifiée */}
        <Route
          path="/academy"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <AcademyLayout />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Legacy redirects */}
        <Route path="/growth/formation" element={<Navigate to="/academy" replace />} />
        <Route path="/growth/formation2" element={<Navigate to="/academy" replace />} />
        <Route
          path="/growth/cm-curriculum"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <CMCurriculumPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth/cm-programs"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <CMProgramsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <GrowthPlaybook />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth/Conversion"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <ConversionTechniques />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth/Psychology"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <PsychologyLearning />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/preselection"
          element={
              <MainLayout scrolled={scrolled}>
                <PreselectionForm />
              </MainLayout>
          }
        />
        <Route
          path="/receipt-generator"
          element={
        
              <MainLayout scrolled={scrolled}>
                <ReceiptGenerator />
              </MainLayout>
         
          }
        />
        <Route
          path="/suggestion"
          element={
            <ProtectedRoute>
              <MainLayout scrolled={scrolled}>
                <SuggestionBox />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ═══ 404 ═══ */}
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;

