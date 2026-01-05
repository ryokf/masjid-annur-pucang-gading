import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import WellWaterBusiness from './components/WellWaterBusiness';
import Donation from './components/Donation';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks';

function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Agenda />
        <WellWaterBusiness />
        <Donation />
      </main>
      <Footer />
    </div>
  );
}

export default App;

