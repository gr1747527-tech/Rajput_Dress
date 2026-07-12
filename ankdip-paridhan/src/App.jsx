import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlackTransition from './components/BlackTransition';
import CanvasSequence from './components/CanvasSequence';
import RajputiDresses from './components/RajputiDresses';
import CottonDresses from './components/CottonDresses';
import TraditionalEthnicWear from './components/TraditionalEthnicWear';
import DressMaterials from './components/DressMaterials';
import WomensFashion from './components/WomensFashion';
import InstagramShowcase from './components/InstagramShowcase';
import Testimonials from './components/Testimonials';
import AboutBrand from './components/AboutBrand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, syncTouch: true }}>
      <Preloader />
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <main className="w-full min-h-[100dvh] bg-primary" id="home">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <BlackTransition />
        <CanvasSequence />
        <RajputiDresses />
        <CottonDresses />
        <TraditionalEthnicWear />
        <DressMaterials />
        <WomensFashion />
        <Testimonials />
        <InstagramShowcase />
        <AboutBrand />
        <Contact />
        <Footer />
      </main>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </ReactLenis>
  );
}

export default App;
