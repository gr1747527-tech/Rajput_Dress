import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    // Disable scrolling
    if (lenis) {
      lenis.stop();
    }

    // Simulate preloading of assets (Images, Fonts, etc.)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 5) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          if (lenis) {
            lenis.start();
          }
        }, 800); // Small delay at 100%
      }
      setProgress(currentProgress);
    }, 50);

    return () => clearInterval(interval);
  }, [lenis]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-text-primary"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-editorial tracking-widest text-gold mb-8 uppercase">
              Ankdip Paridhan
            </h1>
            
            <div className="flex flex-col items-center gap-4">
              <div className="text-sm font-body tracking-[0.3em] text-text-muted uppercase">
                Loading Collection...
              </div>
              <div className="text-2xl font-secondary font-light">
                {progress}%
              </div>
            </div>
            
            {/* Elegant Progress Line */}
            <div className="mt-8 w-64 h-[1px] bg-white/10 relative overflow-hidden mx-auto">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
