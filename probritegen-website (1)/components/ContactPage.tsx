
import React from 'react';
import Reviews from './Reviews';
import Process from './Process';
import ServiceAreas from './ServiceAreas';
import FinalCTA from './FinalCTA';

const ContactPage: React.FC = () => {
  const bgImage = "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/6976c78bc1fa0c9f59a78f69.png";
  const logoUrl = "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69cd6fb6ddfdcb063981acc7.png";

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Contact background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-white px-6 w-full max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl">
            CONTACT US
          </h1>
          <p className="text-xl md:text-2xl font-bold opacity-90 mb-10 max-w-2xl mx-auto italic">
            Get in touch with any questions or comments and we'll be happy to help.
          </p>
          
          {/* MOBILE ONLY: Email and Phone Buttons + Bouncing Arrow */}
          <div className="lg:hidden flex flex-col items-center space-y-6 mt-8">
            <div className="w-full space-y-4">
              <a 
                href="mailto:probritegen@gmail.com"
                className="block w-full bg-primary py-4 px-6 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-xl"
              >
                EMAIL: PROBRITEGEN@GMAIL.COM
              </a>
              <a 
                href="tel:832-293-2744"
                className="block w-full bg-primary py-4 px-6 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-xl"
              >
                PHONE: (832) 293-2744
              </a>
            </div>

            {/* Bouncing Arrow specifically for mobile under buttons */}
            <div className="flex flex-col items-center gap-2 animate-bounce mt-4">
              <div className="w-0.5 h-8 bg-white opacity-40"></div>
              <div className="w-3 h-3 border-r-2 border-b-2 border-white rotate-45 opacity-60"></div>
              <div className="w-3 h-3 border-r-2 border-b-2 border-white rotate-45 opacity-40"></div>
            </div>
          </div>

          {/* Desktop Only Scroll Indicator */}
          <div className="hidden lg:flex flex-col items-center gap-2 mt-10 animate-bounce">
            <div className="w-1 h-8 bg-white opacity-40"></div>
            <div className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45 opacity-60"></div>
            <div className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45 opacity-40"></div>
          </div>
        </div>
      </section>

      {/* 2. Contact Form & Info Section */}
      <section className="bg-white py-24 relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Use flex-col and order classes for mobile reordering */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
            
            {/* TEXT CONTENT: Mobile Order 1, Desktop Order 1 */}
            <div className="space-y-10 order-1 lg:order-none">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-navy leading-none">
                CONTACT US FOR A FREE QUOTE
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                We are available 24/7 for all your restoration and water solution needs. Contact us by filling in the form or by using any of the methods below and we'll respond immediately.
              </p>
              
              {/* Desktop Only Buttons in this column */}
              <div className="hidden lg:flex flex-col space-y-4">
                <a 
                  href="mailto:probritegen@gmail.com"
                  className="block w-full bg-primary py-5 px-8 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-lg hover:bg-navy transition-all"
                >
                  EMAIL: PROBRITEGEN@GMAIL.COM
                </a>
                <a 
                  href="tel:832-293-2744"
                  className="block w-full bg-primary py-5 px-8 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-lg hover:bg-navy transition-all"
                >
                  PHONE: (832) 293-2744
                </a>
              </div>
            </div>

            {/* FORM CARD: Mobile Order 2 (Above buttons), Desktop Order 2 */}
            <div className="bg-navy rounded-sm p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-20 order-2 lg:order-none">
               {/* Logo hidden on mobile/tablet, visible on large screens */}
               <div className="hidden lg:flex justify-center mb-10">
                  <img src={logoUrl} alt="ProBrite Gen Logo" className="h-24 w-auto object-contain" />
               </div>
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic text-center mb-12 tracking-tight">
                  GET A FREE QUOTE
               </h3>
               
               <form className="space-y-6">
                  <div>
                    <label className="block text-white text-xs font-black uppercase tracking-widest mb-3">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full bg-white border-none p-4 rounded-sm text-navy font-bold text-lg focus:ring-4 focus:ring-primary outline-none transition-all" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-white text-xs font-black uppercase tracking-widest mb-3">Phone *</label>
                    <input 
                      type="tel" 
                      placeholder="(832) 293-2744" 
                      className="w-full bg-white border-none p-4 rounded-sm text-navy font-bold text-lg focus:ring-4 focus:ring-primary outline-none transition-all" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-white text-xs font-black uppercase tracking-widest mb-3">Short message about your needs *</label>
                    <textarea 
                      rows={4} 
                      placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**" 
                      className="w-full bg-white border-none p-4 rounded-sm text-navy font-bold text-lg focus:ring-4 focus:ring-primary outline-none transition-all resize-none italic" 
                      required 
                    />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-none bg-white text-primary focus:ring-0" required id="contact-consent" />
                    <label htmlFor="contact-consent" className="text-[11px] text-white font-bold opacity-80 leading-tight">
                      I agree to <span className="underline cursor-pointer">terms & conditions</span> and the <span className="underline cursor-pointer">privacy policy</span>. By providing my phone number, I agree to receive text messages from ProBrite Gen. Message and data rates may apply.
                    </label>
                  </div>
                  
                  <button className="w-full bg-primary hover:bg-white hover:text-navy text-white font-black uppercase py-5 rounded-sm transition-all text-2xl tracking-[0.25em] shadow-2xl mt-8">
                    SEND
                  </button>
               </form>
            </div>

            {/* MOBILE ONLY: Buttons appearing below the form (Order 3) */}
            <div className="lg:hidden flex flex-col space-y-4 order-3 mt-10 w-full">
                <a 
                  href="mailto:probritegen@gmail.com"
                  className="block w-full bg-primary py-5 px-8 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-lg"
                >
                  EMAIL: PROBRITEGEN@GMAIL.COM
                </a>
                <a 
                  href="tel:832-293-2744"
                  className="block w-full bg-primary py-5 px-8 text-white font-black uppercase text-center tracking-widest rounded-sm shadow-lg"
                >
                  PHONE: (832) 293-2744
                </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Re-used Sections */}
      <Process />
      <ServiceAreas />
      <FinalCTA />
    </div>
  );
};

export default ContactPage;
