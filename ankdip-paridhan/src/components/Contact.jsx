import { Camera, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 md:py-48 relative text-white flex justify-center items-center overflow-hidden">
      
      {/* Royal Maroon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B1023] to-[#050505] z-0 opacity-80"></div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-10 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        <h2 className="text-4xl md:text-6xl font-editorial text-white mb-2">Jee Aayan Nu</h2>
        <h3 className="text-xl md:text-2xl font-body text-white/80 mb-16 tracking-widest font-light italic">We Welcome You</h3>

        {/* Luxury Glassmorphism Card */}
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-[20px] border border-gold/30 rounded-2xl p-8 md:p-16 shadow-[0_0_50px_rgba(123,16,35,0.3)] relative overflow-hidden group">
          
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 justify-between items-center text-center md:text-left">
            
            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-editorial text-white mb-1">Ankdip Paridhan</h3>
                <p className="text-text-muted font-body text-sm uppercase tracking-widest">Bikaner, Rajasthan</p>
              </div>
              
              <div className="flex flex-col gap-2 font-body text-sm text-text-primary">
                <a href="tel:+917378288602" className="hover:text-gold transition-colors">+91 73782 88602</a>
                <a href="tel:+916378235612" className="hover:text-gold transition-colors">+91 63782 35612</a>
                <a href="https://instagram.com/ankdip_paridhan" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors mt-2">@ankdip_paridhan</a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="tel:+917378288602" aria-label="Call Now" className="flex items-center justify-center gap-3 px-8 py-3 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold rounded-full font-body text-xs uppercase tracking-widest transition-all duration-300">
                <Phone size={16} /> Call Now
              </a>
              <a href="#whatsapp" aria-label="WhatsApp" className="flex items-center justify-center gap-3 px-8 py-3 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold rounded-full font-body text-xs uppercase tracking-widest transition-all duration-300">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="https://instagram.com/ankdip_paridhan" aria-label="Instagram" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-3 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold rounded-full font-body text-xs uppercase tracking-widest transition-all duration-300">
                <Camera size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
