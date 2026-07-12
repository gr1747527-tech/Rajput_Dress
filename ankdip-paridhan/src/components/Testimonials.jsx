import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  },
  {
    name: "Harpreet",
    location: "Bikaner",
    text: "Bohut pyara suit hai! Stoff di quality top class hai. Main hor vi order karangi jald hi. 💕"
  },
  {
    name: "Sunita",
    location: "Hanumangarh",
    text: "Suti kapdo bhot aacho h, garmiyo m pehan n ekdum aaramdayak. Badiya kaam."
  },
  {
    name: "Ananya",
    location: "Lalgarh",
    text: "I ordered a poshak for my sister's wedding and she looked stunning. The intricate work is unparalleled!"
  },
  {
    name: "Kavita",
    location: "Bikaner",
    text: "Delivery bohut fast thi aur packing bhi premium lagi. Customer service bahot helpful hai."
  },
  {
    name: "Navjot",
    location: "Hanumangarh",
    text: "Design bohut unique aa. Pura desi touch milda hai. Ankdip Paridhan da kaam sach ch lajawab aa."
  },
  {
    name: "Pooja",
    location: "Lalgarh",
    text: "Poshak ko rang chokho aayo hai. Or fitting bhi ekdum sahi hai. Dhanyawad."
  },
  {
    name: "Sarah",
    location: "Bikaner",
    text: "Authentic Rajasthani vibe. The fabric flows beautifully and the stitching is perfect."
  },
  {
    name: "Neha",
    location: "Hanumangarh",
    text: "Maine apni mom ke liye cotton suit liya tha, unhe bahot pasand aaya. Very elegant designs."
  },
  {
    name: "Aman",
    location: "Lalgarh",
    text: "Jina sohna suit online lag riha si, real vich us ton vi zyada sohna hai. Must buy!"
  },
  {
    name: "Geeta",
    location: "Bikaner",
    text: "Aapo collection ekdum badhiya h. Har design m alg he baat h. Bikaner ko asali rang."
  },
  {
    name: "Natasha",
    location: "Hanumangarh",
    text: "A seamless shopping experience. The quality justifies every penny. Beautiful luxury ethnic wear."
  },
  {
    name: "Anjali",
    location: "Lalgarh",
    text: "Rajputi poshak ki aisi collection maine pehle nahi dekhi. Ankdip Paridhan se shopping karke maza aa gaya!"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial Reveal
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    // Auto-advance carousel
    const interval = setInterval(() => {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
          gsap.fromTo(cardRef.current, 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
          );
        }
      });
    }, 4500); // Change review every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentReview = customerReviews[currentIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="w-full bg-primary py-32 text-white relative flex flex-col items-center overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <h2 className="text-[20vw] font-editorial whitespace-nowrap leading-none mt-20">PATRONS</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-white mb-4">Customer Experiences</h2>
          <p className="text-text-muted font-body text-sm tracking-widest uppercase">The Royal Feedback</p>
        </div>

        {/* Animated Single Review Card */}
        <div 
          ref={cardRef}
          className="bg-white/5 backdrop-blur-md border border-gold/20 rounded-2xl p-10 md:p-16 flex flex-col items-center text-center w-full max-w-4xl shadow-[0_0_50px_rgba(212,175,55,0.05)] relative group"
        >
          {/* Subtle Glow */}
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
        </div>

        {/* Pagination dots (Visual only) */}
        <div className="flex gap-2 mt-12 flex-wrap justify-center max-w-md">
            {customerReviews.map((_, idx) => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-gold w-6' : 'bg-white/20 w-2'}`}></div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
