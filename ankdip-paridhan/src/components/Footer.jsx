const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-20 pb-10 px-6 lg:px-12 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Navigation & Branding */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <h2 className="text-2xl font-editorial text-white uppercase tracking-widest">Ankdip Paridhan</h2>
          <nav className="grid grid-cols-2 gap-y-4 gap-x-8 text-text-muted font-body text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#collections" className="hover:text-gold transition-colors">Collections</a>
            <a href="#rajputi-dresses" className="hover:text-gold transition-colors">Rajputi Dresses</a>
            <a href="#cotton-dresses" className="hover:text-gold transition-colors">Cotton Dresses</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>

        {/* Business Info */}
        <div className="flex flex-col gap-4 text-text-muted font-body text-sm text-left md:text-right w-full md:w-1/2">
          <p className="uppercase tracking-widest text-white/50 text-xs mb-2">Bikaner, Rajasthan</p>
          <a href="tel:+917378288602" className="hover:text-gold transition-colors">+91 73782 88602</a>
          <a href="tel:+916378235612" className="hover:text-gold transition-colors">+91 63782 35612</a>
          <a href="https://instagram.com/ankdip_paridhan" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@ankdip_paridhan</a>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs font-body text-white/30 uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Ankdip Paridhan.</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
