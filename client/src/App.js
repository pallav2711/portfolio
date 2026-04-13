import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    // Initialize particles with optimized settings
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#6366f1' },
          shape: { type: 'circle' },
          opacity: { value: 0.2, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.15,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.4 } },
            push: { particles_nb: 3 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="App relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Services />
      <WhyWorkWithMe />
      <AnimatedTestimonials />
      <Contact />
      <Footer />
      <FloatingContact />
      <Analytics />
    </div>
  );
}

export default App;
