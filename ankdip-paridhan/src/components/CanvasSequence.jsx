import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MAX_FRAMES = 480;

const CanvasSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [frameConfig, setFrameConfig] = useState({ total: 0, step: 1 });

  useEffect(() => {
    // Determine frame configuration based on window width
    const width = window.innerWidth;
    let step = 1;
    if (width <= 768) {
      step = 4; // 120 frames for mobile
    } else if (width <= 1024) {
      step = 2; // 240 frames for tablet
    }
    
    const framesToLoad = Math.floor(MAX_FRAMES / step);
    setFrameConfig({ total: framesToLoad, step });

    // Preload images based on step
    const loadImages = async () => {
      imagesRef.current = new Array(framesToLoad).fill(null);
      for (let i = 0; i < framesToLoad; i++) {
        const img = new Image();
        // Calculate original frame index (1-indexed)
        const frameIndex = (i * step) + 1;
        const paddedIndex = frameIndex.toString().padStart(4, '0');
        img.src = `/assets/sequence/${paddedIndex}.jpg`;
        
        await new Promise((resolve) => {
          img.onload = () => {
            imagesRef.current[i] = img;
            setLoadedFrames((prev) => prev + 1);
            resolve();
          };
          img.onerror = resolve; // Continue even if one fails
        });
      }
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    if (frameConfig.total === 0 || loadedFrames < frameConfig.total) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    const container = containerRef.current;

    const drawImage = (index) => {
      if (!imagesRef.current[index]) return;
      const img = imagesRef.current[index];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    drawImage(0);

    const state = { frame: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=400%', 
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const nextFrame = Math.min(
            frameConfig.total - 1,
            Math.floor(self.progress * frameConfig.total)
          );
          
          if (state.frame !== nextFrame) {
            state.frame = nextFrame;
            requestAnimationFrame(() => drawImage(state.frame));
          }
        }
      }
    });

    // Add text animations to the timeline
    tl.to(text1Ref.current, { opacity: 1, y: -20, duration: 1, ease: 'power2.out' }, 0.5)
      .to(text1Ref.current, { opacity: 0, y: -40, duration: 1, ease: 'power2.in' }, 2)
      .to(text2Ref.current, { opacity: 1, y: -20, duration: 1, ease: 'power2.out' }, 3)
      .to(text2Ref.current, { opacity: 0, y: -40, duration: 1, ease: 'power2.in' }, 4.5)
      .to(text3Ref.current, { opacity: 1, y: -20, duration: 1, ease: 'power2.out' }, 5.5)
      .to(text3Ref.current, { opacity: 0, y: -40, duration: 1, ease: 'power2.in' }, 7);

    const handleResize = () => drawImage(state.frame);
    window.addEventListener('resize', handleResize);

    return () => {
      tl.scrollTrigger.kill();
      tl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [loadedFrames, frameConfig]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-primary overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/30 pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h2 ref={text1Ref} className="text-4xl md:text-6xl lg:text-7xl font-editorial text-white text-center drop-shadow-2xl opacity-0 absolute transform translate-y-10">
          Timeless Elegance
        </h2>
        <h2 ref={text2Ref} className="text-4xl md:text-6xl lg:text-7xl font-editorial text-white text-center drop-shadow-2xl opacity-0 absolute transform translate-y-10">
          Unmatched Craftsmanship
        </h2>
        <h2 ref={text3Ref} className="text-4xl md:text-6xl lg:text-7xl font-editorial text-white text-center drop-shadow-2xl opacity-0 absolute transform translate-y-10">
          A Royal Experience
        </h2>
      </div>
    </section>
  );
};

export default CanvasSequence;
