import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  { title: 'Dress Materials', subtitle: 'Unstitched Elegance' },
  { title: 'Luxury Fabric', subtitle: 'Premium Textures' },
  { title: 'Traditional Patterns', subtitle: 'Heritage Motifs' },
  { title: 'Premium Collections', subtitle: 'Exclusive Designs' }
];

const DressMaterials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Staggered fade in for cards
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="dress-materials" className="w-full bg-primary py-32 text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-white mb-6">
            Premium Dress Materials
          </h2>
          <p className="text-text-muted text-sm md:text-base font-body leading-relaxed max-w-xl mx-auto">
            Craft your own masterpiece with our exquisite selection of unstitched luxury fabrics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="relative group rounded-xl p-[1px] overflow-hidden bg-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer"
            >
              {/* Animated Gold Border (pseudo-element equivalent) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Glassmorphism Inner Card */}
              <div className="relative h-64 bg-primary/90 backdrop-blur-[20px] rounded-xl flex flex-col items-center justify-center p-8 border border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                {/* Soft Glow */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <h3 className="text-xl md:text-2xl font-editorial text-white mb-2 relative z-10 text-center">{card.title}</h3>
                <p className="text-gold text-xs font-body tracking-widest uppercase relative z-10 text-center">{card.subtitle}</p>
                
                {/* Glass Reflection */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DressMaterials;
