
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface ReviewsProps {
  onOpenQuote?: () => void;
}

const Reviews: React.FC<ReviewsProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/6976c78bc1fa0c9f59a78f69.png" 
          alt="Restoration site background" 
          className="w-full h-full object-cover" 
        />
        {/* Dark overlay to match the high-contrast screenshot look */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-white">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-8">
          <div>
            <div className="inline-block bg-black text-white px-6 py-2.5 text-sm font-black uppercase tracking-widest mb-4">
              DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl">REVIEWS</h2>
              <div className="flex-grow h-0.5 bg-primary bg-opacity-60 min-w-[200px]"></div>
            </div>
          </div>
          
          <button 
            onClick={onOpenQuote}
            className="bg-white text-black font-black uppercase px-10 py-5 text-lg flex items-center gap-3 hover:bg-primary hover:text-white transition-all shadow-2xl self-start md:self-center"
          >
            CONTACT US NOW <ArrowRight size={24} className="text-primary" />
          </button>
        </div>

        {/* Central Review Card */}
        <div className="max-w-2xl mx-auto text-center bg-black p-16 rounded-xl border-4 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] transition-all transform hover:scale-[1.02]">
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-10 tracking-tight">REVIEW US ON GOOGLE</h3>
          
          <div className="flex justify-center gap-2 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={40} className="fill-orange-400 text-orange-400" />
            ))}
          </div>
          
          <button className="bg-primary hover:bg-opacity-90 text-white font-black uppercase px-12 py-5 text-xl tracking-tight transition-all shadow-xl">
            LEAVE US A REVIEW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
