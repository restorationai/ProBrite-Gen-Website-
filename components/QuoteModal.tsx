
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-navy bg-opacity-90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-y-auto max-h-full scrollbar-hide">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors z-10"
        >
          <X size={28} />
        </button>

        {/* Form Content */}
        <div className="p-8 sm:p-10">
          {/* Logo hidden on mobile/tablet, visible on large screens */}
          <div className="hidden lg:flex justify-center mb-6">
            <img 
              src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69cd6fb6ddfdcb063981acc7.png" 
              alt="ProBrite Gen" 
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-navy text-3xl font-black text-center uppercase mb-8 italic">Get A Free Quote</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase text-gray-400 mb-2">Full Name *</label>
              <input 
                type="text" 
                placeholder="John Smith" 
                className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all text-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-400 mb-2">Phone *</label>
              <input 
                type="tel" 
                placeholder="(832) 293-2744" 
                className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all text-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-400 mb-2">Short message about your needs *</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about the damage and how we can help..." 
                className="w-full border border-gray-300 p-4 rounded-md focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-lg" 
                required
              ></textarea>
            </div>
            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded" required id="modal-consent" />
              <label htmlFor="modal-consent" className="text-xs text-gray-500 leading-snug font-medium">
                I agree to <span className="text-navy font-bold underline cursor-pointer">terms & conditions</span> and the <span className="text-navy font-bold underline cursor-pointer">privacy policy</span> provided by ProBrite Gen. Message and data rates may apply.
              </label>
            </div>
            <button className="w-full bg-primary hover:bg-opacity-90 text-white font-black uppercase py-5 rounded-md transition-all text-2xl tracking-[0.2em] shadow-lg mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
