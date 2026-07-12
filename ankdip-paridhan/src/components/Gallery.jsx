import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll effect for gallery
    const scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;
    
    gsap.to(scrollRef.current, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
      }
    });
  }, []);

  const images = [
    '/assets/hero.jpg',
    '/assets/collection1.jpg',
    '/assets/collection2.jpg',
    '/assets/collection3.jpg',
    '/assets/hero.jpg',
    '/assets/collection1.jpg',
  ];

  return (
    <section ref={containerRef} id="gallery" className="w-full h-screen bg-primary overflow-hidden flex flex-col justify-center relative">
      
      <div className="absolute top-12 md:top-24 left-6 lg:left-12 z-10">
        <h2 className="text-3xl md:text-5xl font-editorial text-white mb-2">The Campaign</h2>
        <a href="https://instagram.com/ankdip_paridhan" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-gold transition-colors font-body tracking-widest text-xs uppercase">
          <Camera size={16} /> @ankdip_paridhan
        </a>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={scrollRef} className="flex gap-8 px-6 lg:px-12 mt-20 items-center h-[50vh] md:h-[60vh] w-max">
        {images.map((src, index) => (
          <div key={index} className="w-[70vw] md:w-[40vw] lg:w-[30vw] h-full relative group overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
            <img 
              src={src} 
              alt={`Campaign ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs font-body tracking-[0.2em] text-white/40 uppercase">
        <div className="w-12 h-[1px] bg-white/40"></div>
        Scroll to discover
      </div>
    </section>
  );
};

export default Gallery;
