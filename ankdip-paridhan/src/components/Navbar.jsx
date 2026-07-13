import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Camera, Phone, Menu, X } from 'lucide-react';

const Navbar = ({ onBookClick }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
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
          <button onClick={onBookClick} className="hidden md:block px-4 lg:px-6 py-2 border border-white/20 text-white font-body text-[10px] lg:text-xs tracking-widest uppercase hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
            Book Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white ml-2 p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-primary flex flex-col pt-6 px-6 pb-12"
        >
          <div className="flex justify-between items-center mb-16">
            <div className="text-xl font-editorial tracking-widest text-white uppercase">
              Ankdip
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-1 hover:text-gold transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center flex-1 justify-center">
            {navLinks.map((link, i) => {
              const href = link === 'Collections' ? '#womens-fashion' : `#${link.toLowerCase().replace(' ', '-')}`;
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={link}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl md:text-3xl font-editorial text-white hover:text-gold transition-colors"
                >
                  {link}
                </motion.a>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6 mt-auto"
          >
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }} 
              className="w-full py-4 bg-gold text-black font-body text-xs tracking-widest uppercase"
            >
              Book Now
            </button>
            <div className="flex items-center gap-6 text-white/70">
              <a href="https://instagram.com/ankdip_paridhan" className="hover:text-gold transition-colors"><Camera size={24} strokeWidth={1} /></a>
              <a href="tel:+917378288602" className="hover:text-gold transition-colors"><Phone size={24} strokeWidth={1} /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
