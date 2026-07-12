import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TraditionalEthnicWear = () => {
  const sectionRef = useRef(null);
  const imgContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Image Mask Reveal
    gsap.fromTo(imgContainerRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      }
    );

    // Text Reveal & Blur
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.5,
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
    <section ref={sectionRef} id="traditional-wear" className="w-full bg-primary py-32 md:py-48 text-white relative">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Editorial Text */}
        <div ref={textRef} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-editorial text-white mb-8 leading-tight">
            Tradition Woven <br/><span className="italic text-white/80">Into Every Thread</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base font-body leading-relaxed max-w-2xl mx-auto">
            Celebrate Indian culture with timeless ethnic wear designed for every occasion.
          </p>
        </div>

        {/* Large Editorial Image */}
        <div ref={imgContainerRef} className="w-full h-[60vh] md:h-[80vh] lg:h-[100vh] relative overflow-hidden">
          <img 
            src="/assets/collection4.jpg" 
            alt="Traditional Ethnic Wear" 
            loading="lazy"
            decoding="async"
            width="1000"
            height="1500"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient overlay to merge with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
        </div>

      </div>
    </section>
  );
};

export default TraditionalEthnicWear;
