import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Parallax3DPic = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // 3D Parallax effect on scroll
    gsap.fromTo(imageRef.current,
      { y: '-15%', scale: 1.1 },
      {
        y: '15%',
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );

    // Fade in text overlay
    gsap.fromTo(overlayRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[80vh] md:h-screen bg-black overflow-hidden flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Image Container */}
      <div className="absolute inset-0 w-full h-full transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
        <img 
          ref={imageRef}
          src="/assets/3d-pic.jpg" 
          alt="Royal 3D Elegance" 
          className="w-full h-full object-cover object-center md:object-[center_75%] absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-black/40 to-primary/80 opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Content */}
      <div ref={overlayRef} className="relative z-10 text-center px-6" style={{ transform: 'translateZ(50px)' }}>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-white mb-6 drop-shadow-2xl">
          Premium Materials
        </h2>
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-md">
          Crafting Royal Customer Experiences
        </p>
      </div>
    </section>
  );
};

export default Parallax3DPic;
