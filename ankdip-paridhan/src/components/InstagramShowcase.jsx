import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const instagramPosts = [
  { img: '/assets/collection1.jpg', text: 'Royal Rajputi Elegance.' },
  { img: '/assets/collection2.jpg', text: 'Everyday Comfort in Cotton.' },
  { img: '/assets/collection3.jpg', text: 'Festive Vibes.' },
  { img: '/assets/collection4.jpg', text: 'Timeless Traditions.' },
  { img: '/assets/hero.jpg', text: 'The Golden Hour Edit.' },
  { img: '/assets/collection1.jpg', text: 'Heritage Craftsmanship.' }
];

const InstagramShowcase = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Staggered grid reveal
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="instagram" className="w-full bg-primary py-32 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-white">Join The Campaign</h2>
          </div>
          <a href="https://instagram.com/ankdip_paridhan" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-primary hover:text-gold transition-colors font-body tracking-widest text-xs uppercase relative group pb-1">
            <Camera size={16} /> @ankdip_paridhan
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Luxury Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post, idx) => (
            <div 
              key={idx} 
              className="relative group overflow-hidden aspect-square rounded-sm cursor-pointer bg-white/5"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              
              {/* Glass Overlay & Soft Glow */}
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(212,175,55,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Caption Animation */}
                <p className="text-white font-editorial text-xl md:text-2xl italic transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 relative z-10">
                  "{post.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramShowcase;
