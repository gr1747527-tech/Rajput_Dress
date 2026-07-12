import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Camera, Phone } from 'lucide-react';

const Navbar = ({ onBookClick }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
      if (latest > lastScrollY && latest > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setIsScrolled(false);
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  const navLinks = [
    'Home', 'Collections', 'Rajputi Dresses', 'Cotton Dresses', 'About', 'Contact'
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-primary/70 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-editorial tracking-widest text-white uppercase cursor-pointer">
          Ankdip Paridhan
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const href = link === 'Collections' ? '#womens-fashion' : `#${link.toLowerCase().replace(' ', '-')}`;
            return (
              <a
                key={link}
                href={href}
                className="text-sm font-body tracking-wider text-text-muted hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 lg:gap-6">
          <a href="https://instagram.com/ankdip_paridhan" target="_blank" rel="noreferrer" aria-label="Instagram" className="hidden md:block text-text-muted hover:text-gold transition-colors">
            <Camera size={20} strokeWidth={1.5} />
          </a>
          <a href="tel:+917378288602" aria-label="Call Now" className="flex items-center gap-2 text-text-muted hover:text-gold transition-colors">
            <Phone size={20} strokeWidth={1.5} />
            <span className="hidden lg:block text-xs font-body tracking-widest mt-0.5">+91 73782 88602</span>
          </a>
          <button onClick={onBookClick} className="px-4 lg:px-6 py-2 border border-white/20 text-white font-body text-[10px] lg:text-xs tracking-widest uppercase hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
