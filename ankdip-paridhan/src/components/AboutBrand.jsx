import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutBrand = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full bg-primary py-40 md:py-64 text-white relative flex flex-col items-center justify-center">
      
      {/* Subtle background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h2 className="text-[20vw] font-editorial whitespace-nowrap select-none">HERITAGE</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-transparent mb-12 opacity-50"></div>

        <div ref={textRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial text-white mb-4 leading-tight">
            Our Virasat, Our Heritage
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-editorial text-white/70 italic mb-12">
            The Parampara of Rajasthan
          </h3>
          
          <p className="text-text-muted text-base md:text-lg lg:text-xl font-body leading-relaxed max-w-2xl mx-auto font-light mb-6">
            Welcome to the official home of Ankdip Paridhan. Based in the historic city of Bikaner, we are dedicated to preserving the intricate craftsmanship and regal elegance of traditional Rajputi culture.
          </p>
          <p className="text-text-muted text-base md:text-lg lg:text-xl font-body leading-relaxed max-w-2xl mx-auto font-light">
            Every piece we offer—from our signature Rajputi Poshaks to our premium Cotton Dresses and timeless Ethnic Wear—is a testament to the skill of local artisans, woven with uncompromising quality and authenticity.
          </p>
        </div>

        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-transparent mt-24 opacity-50"></div>

      </div>
    </section>
  );
};

export default AboutBrand;
