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

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Page d'accueil avec sections */}
        <Route
          path="/"
          element={
            <MainLayout scrolled={scrolled}>
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
          path="/formation"
          element={
            <MainLayout scrolled={scrolled}>
              <TrainingPage />
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
