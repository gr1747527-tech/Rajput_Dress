import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collection: 'Rajputi Poshak',
    date: '',
    requests: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.booking-modal-overlay', { opacity: 0 }, { opacity: 1, duration: 0.5 });
      gsap.fromTo('.booking-modal-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2 });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({
            name: '', phone: '', email: '', collection: 'Rajputi Poshak', date: '', requests: ''
          });
        }, 3000);
      } else if (response.status === 404 && import.meta.env.DEV) {
        // Fallback for local Vite dev server without Vercel CLI
        console.warn('API endpoint not found. Simulating success for local development.');
        setTimeout(() => {
          setStatus('success');
          setTimeout(() => {
            onClose();
            setStatus('idle');
            setFormData({
              name: '', phone: '', email: '', collection: 'Rajputi Poshak', date: '', requests: ''
            });
          }, 3000);
        }, 1000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
         console.warn('API fetch failed. Simulating success for local development.');
         setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
              onClose();
              setStatus('idle');
              setFormData({
                name: '', phone: '', email: '', collection: 'Rajputi Poshak', date: '', requests: ''
              });
            }, 3000);
          }, 1000);
      } else {
         setStatus('error');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8 booking-modal-overlay">
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div 
        className="booking-modal-content relative bg-[#0a0a0a] border-0 md:border border-white/10 rounded-none md:rounded-2xl w-full h-[100dvh] max-h-[100dvh] md:h-auto md:max-h-[90vh] max-w-2xl flex flex-col shadow-2xl z-10"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)'
        }}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex justify-end p-4 md:p-6 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/90 backdrop-blur-sm">
          <button 
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/10 md:bg-transparent md:hover:bg-white/5 rounded-full text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Form Content */}
        <div 
          className="flex-1 overflow-y-auto overflow-x-hidden p-4 min-[360px]:p-5 sm:p-8 md:p-12 md:pt-0 pt-0 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[28px] min-[360px]:text-[32px] sm:text-[40px] md:text-[48px] leading-tight font-editorial text-white mb-2">Advance Booking</h2>
            <p className="text-text-muted font-body text-xs md:text-sm tracking-widest uppercase">Reserve your exclusive piece</p>
          </div>
          
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-editorial text-white mb-2">Booking Confirmed</h3>
              <p className="text-white/60 font-body text-sm">Thank you for your reservation. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 w-full pb-8 md:pb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 h-[56px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors box-border" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 h-[56px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors box-border" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 h-[56px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors box-border" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Collection Preference</label>
                  <select name="collection" value={formData.collection} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 h-[56px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors appearance-none box-border">
                    <option value="Rajputi Poshak" className="bg-primary">Rajputi Poshak</option>
                    <option value="Cotton Dress" className="bg-primary">Cotton Dress</option>
                    <option value="Traditional Ethnic Wear" className="bg-primary">Traditional Ethnic Wear</option>
                    <option value="Dress Materials" className="bg-primary">Dress Materials</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Preferred Date</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 h-[56px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors box-border" style={{colorScheme: 'dark'}} />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[11px] md:text-xs text-white/60 uppercase tracking-widest font-body">Special Requests</label>
                <textarea name="requests" value={formData.requests} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 min-h-[140px] text-[16px] text-white focus:outline-none focus:border-gold transition-colors resize-none box-border"></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm font-body text-center">There was an error processing your request. Please try again later.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full mt-4 min-h-[56px] bg-gold hover:bg-gold/90 text-primary rounded-lg font-body text-xs sm:text-sm tracking-widest uppercase transition-colors disabled:opacity-70 flex justify-center items-center box-border"
              >
                {status === 'loading' ? 'Processing...' : 'Confirm Booking'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
