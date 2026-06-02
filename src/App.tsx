import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';
import './index.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="dark" style={{ background: '#0F172A' }}>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Main App */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen"
            style={{ background: '#0F172A' }}
          >
            {/* Noise overlay for texture */}
            <div className="noise-overlay" />

            {/* Particle Background */}
            <ParticleBackground />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <WhyHireMe />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll progress indicator */}
            <ScrollProgress />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(pct);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5">
      <div
        className="h-full"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)',
          transition: 'width 0.1s ease',
          boxShadow: '0 0 10px rgba(99,102,241,0.7)',
        }}
      />
    </div>
  );
}
