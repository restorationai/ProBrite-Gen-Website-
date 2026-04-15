
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[750px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d454413d829c73b28678e0.png" 
          alt="ProBrite Gen Restoration" 
          className="w-full h-full object-cover object-center scale-100 lg:scale-[1.05] transition-transform duration-700 brightness-90 contrast-110"
          style={{ imageRendering: 'auto' }}
        />
        {/* Adjusted overlay to be more transparent (40%) so the image is clearly visible behind the content */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column Content - Strictly Centered on mobile */}
          <div className="text-white flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h1 className="text-5xl xs:text-6xl md:text-8xl font-black uppercase mb-6 lg:mb-8 leading-[0.95] lg:leading-[0.9] tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] lg:whitespace-nowrap">
              ProBrite Gen
            </h1>
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-base sm:text-lg md:text-2xl opacity-100 leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-6">
                ProBrite Gen provides expert water damage restoration, mold removal, and water solutions in Houston, TX. We work with insurance to restore your property quickly and safely.
              </p>
              <div className="inline-block border-b-2 border-white pb-1">
                <span className="text-base sm:text-xl font-black uppercase tracking-widest text-white">Houston, TX</span>
              </div>
            </div>
          </div>

          {/* Right Column Form - Centered via mx-auto */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg p-8 sm:p-10 shadow-2xl max-w-lg w-full">
              {/* Logo hidden on mobile/tablet, visible on large screens */}
              <div className="hidden lg:flex justify-center mb-6">
                 <img 
                   src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69cd6fb6ddfdcb063981acc7.png" 
                   alt="ProBrite Gen" 
                   className="h-12 md:h-14 w-auto"
                 />
              </div>
              <h2 className="text-navy text-2xl sm:text-3xl font-black text-center uppercase mb-8 italic">Get A Free Quote</h2>
              
              <form className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Full Name *</label>
                  <input type="text" placeholder="John Smith" className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all text-base sm:text-lg" required />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Phone *</label>
                  <input type="tel" placeholder="(832) 293-2744" className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all text-base sm:text-lg" required />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Short message about your needs *</label>
                  <textarea rows={3} placeholder="Tell us about the damage and how we can help..." className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-base sm:text-lg" required></textarea>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded" required id="consent" />
                  <label htmlFor="consent" className="text-[10px] sm:text-xs text-gray-500 leading-snug font-medium">
                    I agree to <span className="text-navy font-bold underline cursor-pointer">terms & conditions</span> and the <span className="text-navy font-bold underline cursor-pointer">privacy policy</span> provided by ProBrite Gen. Message and data rates may apply.
                  </label>
                </div>
                <button className="w-full bg-primary hover:bg-opacity-90 text-white font-black uppercase py-4 sm:py-5 rounded-md transition-all text-xl sm:text-2xl tracking-[0.2em] shadow-lg mt-4">
                  Send
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
