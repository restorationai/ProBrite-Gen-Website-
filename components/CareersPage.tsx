
import React from 'react';
import { MapPin } from 'lucide-react';

const CareersPage: React.FC = () => {
  const bgImage = "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/6976c78bc1fa0c9f59a78f69.png";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Careers background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 w-full text-center text-white py-20">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
            Join Our Team
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-bold mb-12 drop-shadow-lg">
            ProBrite Gen is looking for dedicated, hardworking water damage restoration technicians to grow with our team in Houston, TX.
          </p>
        </div>
      </section>

      {/* Body Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-navy">WHO WE ARE LOOKING FOR</h2>
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                ProBrite Gen is actively hiring water damage restoration technicians to join our growing team in Houston, TX. We are looking for individuals who are reliable, physically capable, and genuinely committed to doing quality work. You do not need years of experience to apply — we are willing to train the right people. What matters most to us is your attitude, your work ethic, and your willingness to show up and do the job right every time.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-navy">WHAT THE ROLE INVOLVES</h2>
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-6">
                As a water damage restoration technician at ProBrite Gen, your day-to-day responsibilities will include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl font-medium text-gray-700">
                <li>Responding to water damage calls at residential and commercial properties</li>
                <li>Setting up and operating water extraction equipment, air movers, and dehumidifiers</li>
                <li>Performing moisture readings and monitoring drying progress on active jobs</li>
                <li>Removing damaged materials such as drywall, flooring, and insulation when required</li>
                <li>Maintaining equipment and keeping job sites clean and organized</li>
                <li>Communicating professionally with homeowners and property managers on site</li>
                <li>Following safety protocols and company procedures on every job</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-navy">WHAT WE OFFER</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl font-medium text-gray-700">
                <li>Competitive pay</li>
                <li>On-the-job training and development</li>
                <li>Opportunities for growth within the company</li>
                <li>Consistent work in a high-demand industry</li>
                <li>A team environment built on respect and accountability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-navy">REQUIREMENTS</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl font-medium text-gray-700">
                <li>Must be reliable and punctual</li>
                <li>Must be able to perform physical labor including lifting, bending, and working in confined spaces</li>
                <li>Valid driver's license required</li>
                <li>Ability to work flexible hours including evenings and weekends when needed</li>
                <li>Previous restoration or construction experience is a plus but not required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase mb-6 text-navy">HOW TO APPLY</h2>
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                If you are interested in joining the ProBrite Gen team, reach out to us directly. Send your name, contact information, and a brief description of your background and experience to <a href="mailto:probritegen@gmail.com" className="text-primary font-bold underline">probritegen@gmail.com</a> with the subject line "Technician Application." We review every application and will follow up with qualified candidates to schedule a conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Proudly Serving Section */}
      <section className="bg-navy py-32 text-white border-t border-white border-opacity-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center">
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center">
            PROUDLY SERVING
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-10 gap-x-32 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-6 text-2xl font-black uppercase tracking-[0.1em] group border-b border-white border-opacity-5 pb-4">
              <MapPin size={32} className="text-primary group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-primary transition-colors">Houston, TX & Surrounding Cities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
