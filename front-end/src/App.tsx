import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import TrainingPage from './components/Pages/TrainingPage';
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
import TrainingPage2 from './components/Pages/TrainingPage2';
import SuggestionBox from './components/Pages/SuggestionBox';
import CMTrainingHero from './components/CMTrainingHero';
import CMCurriculumPage from './components/Pages/CMCurriculumPage';
import CMProgramsPage from './components/Pages/CMProgramsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Page d'accueil avec sections */}
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

        {/* Pages standalone */}
        <Route
          path="/growth/formation"
          element={
            <MainLayout scrolled={scrolled}>
              <TrainingPage />
            </MainLayout>
          }
        />
        <Route
          path="/growth/formation2"
          element={
            <MainLayout scrolled={scrolled}>
              <TrainingPage2 />
            </MainLayout>
          }
        />
        <Route
          path="/growth/cm-curriculum"
          element={
            <MainLayout scrolled={scrolled}>
              <CMCurriculumPage />
            </MainLayout>
          }
        />
        <Route
          path="/growth/cm-programs"
          element={
            <MainLayout scrolled={scrolled}>
              <CMProgramsPage />
            </MainLayout>
          }
        />
        <Route
          path="/growth"
          element={
            <MainLayout scrolled={scrolled}>
              <GrowthPlaybook />
            </MainLayout>
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
          path="/about"
          element={
            <MainLayout scrolled={scrolled}>
              <About />
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
        <Route
          path="/receipt-generator"
          element={
            <MainLayout scrolled={scrolled}>
              <ReceiptGenerator />
            </MainLayout>
          }
        />
        <Route
          path="/growth/Conversion"
          element={
            <MainLayout scrolled={scrolled}>
              <ConversionTechniques />
            </MainLayout>
          }
        />
        <Route
          path="/growth/Psychology"
          element={
            <MainLayout scrolled={scrolled}>
              <PsychologyLearning />
            </MainLayout>
          }
        />
        <Route
          path="/suggestion"
          element={
            <MainLayout scrolled={scrolled}>
              <SuggestionBox />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
