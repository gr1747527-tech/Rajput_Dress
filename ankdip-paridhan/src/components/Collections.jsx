import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collectionsData = [
  {
    id: 'rajputi-dresses',
    title: 'Rajputi Dresses',
    description: 'The epitome of royal grace. Handcrafted poshaks reflecting the vibrant heritage and timeless elegance of Rajasthan.',
    image: '/assets/collection1.jpg',
    align: 'left'
  },
  {
    id: 'cotton-dresses',
    title: 'Cotton Dresses',
    description: 'Breathable, elegant, and minimally sophisticated. Perfect for everyday luxury and effortless style.',
    image: '/assets/collection2.jpg',
    align: 'right'
  },
  {
    id: 'traditional-wear',
    title: 'Traditional Wear',
    description: 'Curated ethnic ensembles designed to make you stand out at every celebration and grand occasion.',
    image: '/assets/collection3.jpg',
    align: 'left'
  }
];

const Collections = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.collection-panel');
    
    panels.forEach((panel) => {
      const img = panel.querySelector('.collection-img');
      const text = panel.querySelector('.collection-text');

      // Parallax effect on image
      gsap.fromTo(img, 
        { y: '-10%' },
        {
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      // Text reveal
      gsap.fromTo(text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 70%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="w-full bg-primary py-32 text-text-primary">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-32">
          <h2 className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Our Heritage</h2>
          <h3 className="text-4xl md:text-6xl font-editorial">Curated Collections</h3>
        </div>

        <div className="flex flex-col gap-32">
          {collectionsData.map((collection, index) => (
            <div 
              key={collection.id} 
              id={collection.id}
              className={`collection-panel flex flex-col ${collection.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Image Container with Mask/Parallax */}
              <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="collection-img w-full h-[120%] object-cover object-center absolute -top-[10%] left-0"
                />
              </div>

              {/* Text Content */}
              <div className="collection-text w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-gold font-body tracking-widest text-xs mb-6 uppercase">0{index + 1}</div>
                <h4 className="text-4xl md:text-5xl font-editorial mb-6">{collection.title}</h4>
                <p className="text-text-muted font-body leading-relaxed max-w-md mb-10">
                  {collection.description}
                </p>
                <button className="self-start relative group font-body tracking-widest text-xs uppercase overflow-hidden pb-2">
                  <span className="relative z-10 group-hover:text-gold transition-colors duration-300">Discover More</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
