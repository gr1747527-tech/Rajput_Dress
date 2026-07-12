import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const customerReviews = [
  {
    name: "Sneha",
    location: "Bikaner",
    text: "Kapdo bhot chokho hai, or kadhai bhi badiya karakhi hai. Bikaner me eesi poshak or kathe koni mile. 🙏"
  },
  {
    name: "Priya",
    location: "Hanumangarh",
    text: "Bhut sundar poshak hai. Quality ekdum premium hai, pehan ke bilkul royal feel aati hai! Thank you Ankdip Paridhan. ❤️"
  },
  {
    name: "Simran",
    location: "Lalgarh",
    text: "Suit di fitting te embroidery bohut kaim aa. Pura paisa vasool! Sab nu bohut pasand aaya. ✨"
  },
  {
    name: "Aisha",
    location: "Bikaner",
    text: "Absolutely in love with the cotton collection! It's so comfortable yet elegant for daily wear. Highly recommended."
  },
  {
    name: "Meera",
    location: "Hanumangarh",
    text: "Material bilkul soft hai, colors bhi waise hi hain jaise photo me dikhaye the. Very satisfied with the purchase."
  },
  {
    name: "Riya",
    location: "Lalgarh",
    text: "The craftsmanship on the Rajputi dress is stunning. It truly feels like a royal heritage piece. Flawless!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentReview = customerReviews[currentIndex];

  return (
    <section id="testimonials" className="w-full bg-primary py-32 text-white relative flex flex-col items-center overflow-hidden">
      
      {/* Animated Glowing Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
        <h2 className="text-[20vw] font-editorial whitespace-nowrap leading-none">PATRONS</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-white mb-4">Customer Experiences</h2>
          <p className="text-text-muted font-body text-sm tracking-widest uppercase">The Royal Feedback</p>
        </motion.div>

        {/* Animated Single Review Card */}
        <div className="relative w-full max-w-4xl min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl border border-gold/20 rounded-2xl p-10 md:p-16 flex flex-col items-center text-center w-full shadow-[0_0_50px_rgba(212,175,55,0.05)] relative group absolute"
            >
              {/* Subtle Glow inside card */}
              <div className="absolute inset-0 bg-gold/5 rounded-2xl opacity-50 pointer-events-none transition-opacity duration-700 group-hover:opacity-100"></div>

              <div className="mb-8 relative z-10">
                <div className="text-gold font-editorial text-7xl leading-none opacity-40 mb-6">"</div>
                <p className="text-white/90 font-body text-xl md:text-3xl leading-relaxed italic font-light px-4">
                  {currentReview.text}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-[1px] bg-gold mb-6"></div>
                <h4 className="text-white font-editorial text-2xl md:text-3xl tracking-wide">{currentReview.name}</h4>
                <p className="text-gold font-body text-xs md:text-sm uppercase tracking-[0.2em] mt-2">{currentReview.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2 mt-12 flex-wrap justify-center max-w-md relative z-10">
            {customerReviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex ? 'bg-gold w-8' : 'bg-white/20 w-3 hover:bg-white/40'}`}
                aria-label={`Go to review ${idx + 1}`}
              ></button>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
