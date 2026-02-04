import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import TrainingPage from './components/Pages/TrainingPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import PreselectionForm from './components/Pages/PreselectionForm';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <Navigation scrolled={scrolled} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <CaseStudies />
                <Contact />
                <FloatingWhatsAppButton />
              </>
            }
          />
          <Route path="/formation" element={<TrainingPage />} />
          <Route path="/preselection" element={<PreselectionForm />} />
        </Routes>

        <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 – Yndris Douanla | Powered by Passion & Precision
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
