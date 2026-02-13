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
              <Services />
              <CaseStudies />
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
      </Routes>
    </Router>
  );
}

export default App;
