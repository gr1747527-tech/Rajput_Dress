import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CottonDresses = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Parallax on image
    gsap.fromTo(imgRef.current,
      { y: '-15%', scale: 1.05 },
      {
        y: '5%',
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

    // Text Reveal
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="cotton-dresses" className="w-full bg-beige py-32 md:py-48 text-black overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        {/* Text Content - Minimal & Bright */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial text-black mb-8 leading-tight">
            Luxury Meets <br/><span className="italic text-black/70">Everyday Comfort</span>
          </h2>
          <p className="text-black/60 text-sm md:text-base font-body leading-relaxed max-w-md mb-12">
            Premium Cotton Dresses crafted for elegance, comfort and effortless everyday fashion.
          </p>
          
          <button className="self-start relative group font-body tracking-widest text-xs uppercase overflow-hidden pb-2 text-black">
            <span className="relative z-10 transition-colors duration-300">Discover Collection</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black/20"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>

        {/* Image Container with Luxury White Space */}
        <div className="w-full lg:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden relative order-1 lg:order-2">
          <img 
            ref={imgRef}
            src="/assets/collection2.jpg" 
            alt="Cotton Dresses" 
            loading="lazy"
            decoding="async"
            width="1000"
            height="1000"
            className="w-full h-[120%] object-cover object-center absolute -top-[15%] left-0"
          />
        </div>

      </div>
    </section>
  );
};

export default CottonDresses;
