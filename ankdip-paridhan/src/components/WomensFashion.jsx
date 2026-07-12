import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WomensFashion = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const images = [
    { src: '/assets/hero.jpg', title: 'The Royal Edit' },
    { src: '/assets/collection1.jpg', title: 'Heritage Collection' },
    { src: '/assets/collection2.jpg', title: 'Everyday Luxury' },
    { src: '/assets/collection3.jpg', title: 'Festive Wear' },
    { src: '/assets/collection4.jpg', title: 'Bridal Couture' }
  ];

  useEffect(() => {
    // Horizontal scroll effect
    const scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;
    
    gsap.to(scrollRef.current, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
      }
    });
  }, []);

  return (
    <section ref={containerRef} id="womens-fashion" className="w-full h-screen bg-primary overflow-hidden flex flex-col justify-center relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-20 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [30, 0, 30],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="absolute top-12 md:top-24 left-6 lg:left-12 z-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-editorial text-white mb-2">Signature Collections</h2>
        <p className="text-text-muted font-body text-sm md:text-base max-w-md">
          Explore our complete range of premium editorial collections.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={scrollRef} className="flex gap-6 lg:gap-10 px-6 lg:px-12 mt-20 md:mt-32 items-center w-max pb-10">
        {images.map((item, index) => (
          <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] md:aspect-video relative group overflow-hidden shrink-0 rounded-xl cursor-pointer border border-white/10 hover:border-gold/50 transition-colors duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-700 opacity-90 group-hover:opacity-70"></div>
            <img 
              src={item.src} 
              alt={item.title} 
              width="1280"
              height="720"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Interactive Card Content */}
            <div className="absolute bottom-8 left-8 z-20 transition-all duration-700 transform md:translate-y-4 md:group-hover:translate-y-0">
              <h3 className="text-3xl md:text-4xl font-editorial text-white mb-2 drop-shadow-lg">{item.title}</h3>
              <div className="flex items-center gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                <div className="w-8 h-[1px] bg-gold"></div>
                <p className="text-xs font-body tracking-[0.2em] text-gold uppercase">Explore Now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs font-body tracking-[0.2em] text-white/40 uppercase">
        <div className="w-12 h-[1px] bg-white/40"></div>
        Scroll to explore
      </div>
    </section>
  );
};

export default WomensFashion;
