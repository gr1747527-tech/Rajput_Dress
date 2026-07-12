import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RajputiDresses = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Subtle Parallax on Image
    gsap.fromTo(imgRef.current,
      { y: '-10%', scale: 1.1 },
      {
        y: '10%',
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Fade Up and Blur Reveal on Text
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="rajputi-dresses" className="relative w-full h-[100dvh] bg-primary overflow-hidden flex items-center">
      {/* Background Image Container for Mask Reveal */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          ref={imgRef}
          src="/assets/collection1.jpg" 
          alt="Rajputi Dress Collection" 
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
          className="w-full h-[120%] object-cover object-top absolute -top-[10%] left-0"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 h-full flex flex-col justify-center">
        <div ref={textRef} className="max-w-3xl">
          <h2 className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-6 drop-shadow-lg">Section 04</h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-white mb-8 leading-tight drop-shadow-2xl">
            The Royal <br/> <span className="italic text-white/90">Rajputi Collection</span>
          </h3>
          <p className="text-text-primary text-sm md:text-base font-body leading-relaxed max-w-xl mb-12 drop-shadow-md">
            Discover handcrafted Rajputi Dresses that celebrate Rajasthan's royal heritage through luxurious fabrics, intricate embroidery, timeless silhouettes and exceptional craftsmanship.
          </p>
          
          {/* Luxury Button */}
          <button className="relative px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-[20px] rounded-full text-white font-body text-xs tracking-widest uppercase overflow-hidden group hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="relative z-10 group-hover:text-gold transition-colors duration-300">Explore Collection</span>
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RajputiDresses;
