
import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenQuote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const areas = [
    "Houston, TX & Surrounding Cities"
  ];

  return (
    <header className="bg-navy text-white sticky top-0 z-50 border-b border-white border-opacity-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-28">
          
          {/* MOBILE ONLY: Left & Center buttons */}
          <div className="flex lg:hidden items-center gap-2 flex-1">
            <button 
              onClick={onOpenQuote}
              className="bg-primary hover:bg-opacity-90 text-white px-3 py-2.5 text-[10px] xs:text-xs font-black uppercase rounded-sm transition-all shadow-md whitespace-nowrap"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:832-293-2744" 
              className="flex items-center gap-2 bg-accent border-2 border-accent text-white px-3 py-2 rounded-sm font-black text-[10px] xs:text-xs hover:bg-transparent hover:text-accent transition-all shadow-md whitespace-nowrap"
            >
              <Phone size={14} className="fill-current" />
              <span className="font-bold">(832) 293-2744</span>
            </a>
          </div>

          {/* DESKTOP ONLY: Logo */}
          <div 
            className="hidden lg:flex flex-shrink-0 items-center gap-4 cursor-pointer -ml-4"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69cd6fb6ddfdcb063981acc7.png" 
              alt="ProBrite Gen Logo" 
              className="h-24 w-auto object-contain"
            />
            <div className="font-black text-xl leading-tight italic">
              ProBrite Gen<br/>
              <span className="text-xs font-bold opacity-80 uppercase not-italic tracking-wider text-primary">Water Solutions Experts</span>
            </div>
          </div>

          {/* DESKTOP ONLY: Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center text-sm font-black uppercase tracking-widest h-full">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-primary transition-colors focus:outline-none py-8 font-black uppercase text-sm tracking-widest"
            >
              Home
            </button>
            
            <div className="relative group py-8 h-full flex items-center">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                Services <ChevronDown size={14} />
              </div>
              <div className="absolute top-full left-0 w-72 bg-navy border border-white border-opacity-10 shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="flex flex-col">
                  <button onClick={() => onNavigate('water-damage')} className="px-6 py-5 hover:bg-primary text-left transition-colors border-b border-white border-opacity-5">Water Damage Restoration</button>
                  <button onClick={() => onNavigate('sewage-backup')} className="px-6 py-5 hover:bg-primary text-left transition-colors border-b border-white border-opacity-5">Sewage Backup and Cleanup</button>
                  <button onClick={() => onNavigate('mold-remediation')} className="px-6 py-5 hover:bg-primary text-left transition-colors border-b border-white border-opacity-5">Mold Removal</button>
                  <button onClick={() => onNavigate('water-softener')} className="px-6 py-5 hover:bg-primary text-left transition-colors border-b border-white border-opacity-5">Water Softener Solutions</button>
                  <button onClick={() => onNavigate('hot-water')} className="px-6 py-5 hover:bg-primary text-left transition-colors">Hot Water Installation</button>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('gallery')} className="hover:text-primary transition-colors focus:outline-none py-8 font-black uppercase text-sm tracking-widest">Gallery</button>
            
            {/* Service Areas Dropdown */}
            <div className="relative group py-8 h-full flex items-center flex-shrink-0">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors whitespace-nowrap">
                Service Areas <ChevronDown size={14} />
              </div>
              <div className="absolute top-full left-0 w-64 bg-navy border border-white border-opacity-10 shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="flex flex-col">
                  {areas.map((area, idx) => (
                    <div 
                      key={idx} 
                      className={`px-6 py-4 hover:bg-primary transition-colors text-xs font-bold tracking-widest ${idx !== areas.length - 1 ? 'border-b border-white border-opacity-5' : ''}`}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('blog')} className="hover:text-primary transition-colors focus:outline-none py-8 font-black uppercase text-sm tracking-widest">Blog</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors font-black uppercase text-sm tracking-widest">Contact</button>
          </nav>

          {/* DESKTOP ONLY: Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 flex-shrink-0 -mr-4 ml-8">
            <button 
              onClick={onOpenQuote}
              className="bg-primary hover:bg-opacity-90 text-white px-4 xl:px-6 py-3 text-sm font-black uppercase rounded-sm transition-all shadow-md whitespace-nowrap"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:832-293-2744" 
              className="flex items-center gap-2 bg-accent border-2 border-accent text-white px-3 xl:px-4 py-2.5 rounded-sm font-black text-sm hover:bg-transparent hover:text-accent transition-all shadow-md whitespace-nowrap"
            >
              <Phone size={16} className="fill-current" />
              <span className="font-bold">(832) 293-2744</span>
            </a>
          </div>

          {/* MOBILE ONLY: Hamburger Menu Button */}
          <div className="lg:hidden flex items-center justify-end ml-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white border-opacity-10 absolute top-full left-0 w-full shadow-2xl animate-fadeIn max-h-[calc(100vh-7rem)] overflow-y-auto">
          <nav className="flex flex-col text-sm font-black uppercase tracking-widest">
            <button 
              onClick={() => handleNavigate('home')} 
              className="px-6 py-6 border-b border-white border-opacity-5 text-left hover:bg-primary transition-colors"
            >
              Home
            </button>
            
            {/* Services Mobile Dropdown */}
            <div className="flex flex-col border-b border-white border-opacity-5">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-6 py-6 flex items-center justify-between text-left hover:bg-primary transition-colors"
              >
                Services <ChevronDown size={18} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="bg-black bg-opacity-20 flex flex-col">
                  <button onClick={() => handleNavigate('water-damage')} className="px-10 py-5 border-b border-white border-opacity-5 text-left text-xs hover:text-primary transition-colors">Water Damage Restoration</button>
                  <button onClick={() => handleNavigate('sewage-backup')} className="px-10 py-5 border-b border-white border-opacity-5 text-left text-xs hover:text-primary transition-colors">Sewage Backup and Cleanup</button>
                  <button onClick={() => handleNavigate('mold-remediation')} className="px-10 py-5 border-b border-white border-opacity-5 text-left text-xs hover:text-primary transition-colors">Mold Removal</button>
                  <button onClick={() => handleNavigate('water-softener')} className="px-10 py-5 border-b border-white border-opacity-5 text-left text-xs hover:text-primary transition-colors">Water Softener Solutions</button>
                  <button onClick={() => handleNavigate('hot-water')} className="px-10 py-5 text-left text-xs hover:text-primary transition-colors">Hot Water Installation</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigate('gallery')} 
              className="px-6 py-6 border-b border-white border-opacity-5 text-left hover:bg-primary transition-colors"
            >
              Gallery
            </button>
            
            {/* Service Areas Mobile Dropdown */}
            <div className="flex flex-col border-b border-white border-opacity-5">
              <button 
                onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                className="px-6 py-6 flex items-center justify-between text-left hover:bg-primary transition-colors"
              >
                Service Areas <ChevronDown size={18} className={`transition-transform ${isMobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileAreasOpen && (
                <div className="bg-black bg-opacity-20 flex flex-col">
                  {areas.map((area, idx) => (
                    <div 
                      key={idx} 
                      className={`px-10 py-4 text-xs font-bold tracking-widest ${idx !== areas.length - 1 ? 'border-b border-white border-opacity-5' : ''}`}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigate('blog')}
              className="px-6 py-6 border-b border-white border-opacity-5 text-left hover:bg-primary transition-colors"
            >
              Blog
            </button>

            <button 
              onClick={() => handleNavigate('contact')}
              className="px-6 py-6 text-left hover:bg-primary transition-colors"
            >
              Contact
            </button>

            <div className="p-6 bg-black bg-opacity-20">
               <button 
                 onClick={() => { onOpenQuote(); setIsMenuOpen(false); }}
                 className="w-full bg-primary py-4 rounded-sm shadow-xl font-black mb-4"
               >
                 GET FREE QUOTE
               </button>
               <a 
                 href="tel:832-293-2744"
                 className="w-full flex items-center justify-center gap-3 bg-accent py-4 rounded-sm shadow-xl font-black"
               >
                 <Phone size={20} className="fill-current" /> (832) 293-2744
               </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
