import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = ({ onBookClick }) => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Slow camera push on background
    gsap.to(bgRef.current, {
      scale: 1.1,
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

    // Content fade in
    gsap.fromTo(contentRef.current.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax & Scale */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      />

      {/* Overlays for cinematic lighting */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 via-transparent to-primary"></div>
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-primary/80"></div>
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
          Khamma Ghani &bull; Welcome to Ankdip Paridhan
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-white leading-[1.1] mb-8 drop-shadow-2xl">
          The Essence of <br />
          <span className="italic text-white/90">Royal Rajasthan</span>
        </h1>
        <p className="text-white/80 font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light mb-8">
          Discover the official destination for authentic Rajputi Poshak and premium ethnic wear. Handcrafted in Bikaner, preserving our timeless heritage through exceptional quality and craftsmanship.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 font-body text-xs tracking-widest uppercase w-full md:w-auto px-4 md:px-0">
          <a href="#womens-fashion" className="w-full md:w-auto px-8 py-3.5 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-500 text-center inline-block">
            Explore Collection
          </a>
          <button onClick={onBookClick} className="w-full md:w-auto px-8 py-3.5 border border-white/30 text-white hover:border-gold hover:text-gold transition-colors duration-500">
            Book Now
          </button>
          <a href="tel:+917378288602" className="w-full md:w-auto px-8 py-3 border border-transparent text-text-muted hover:text-white transition-colors duration-500 underline underline-offset-4 inline-block text-center">
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[10px] uppercase tracking-[0.3em] font-body text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
