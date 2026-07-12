const BlackTransition = () => {
  return (
    <section className="w-full h-[100dvh] bg-black relative flex items-center justify-center">
      {/* Soft Ambient Particles (simulated with CSS for now) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 10%)',
          backgroundSize: '100px 100px'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>
    </section>
  );
};

export default BlackTransition;
