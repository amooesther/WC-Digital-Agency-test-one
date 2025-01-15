import React from 'react';
import bgBaby from '../assets/bgBaby.png';
import Happy_Customers from '../assets/Happy_Customers.png';
import Baby1 from '../assets/Baby1.png';
import Baby2 from '../assets/Baby2.png';
import Baby3 from '../assets/Baby3.png';
import Baby4 from '../assets/Baby4.png';
import Baby5 from '../assets/Baby5.png';
import Baby6 from '../assets/Baby6.png';
import Baby7 from '../assets/Baby7.png';
import Baby8 from '../assets/Baby8.png';

const Baby = () => {
  return (
    <div className="relative">
    
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center gap-12 md:gap-20 px-4 md:px-16 py-8">
        <div
          className="flex flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center py-12 px-6 md:w-2/3 rounded-lg"
          style={{
            backgroundImage: `url(${Happy_Customers})`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Baby</h3>
          <p className="text-lg">
            What our Products look like on your babies
          </p>
        </div>
      </div>

      {/* Top-left Background Image */}
      <img
        src={bgBaby}
        alt="Background Baby"
        className="absolute top-40 left-0 w-24 h-24 md:w-40 md:h-40 object-contain"
      />

      {/* Grid Section */}
      <div className="mx-4 sm:mx-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        <img src={Baby1} alt="Baby 1" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby2} alt="Baby 2" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby3} alt="Baby 3" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby4} alt="Baby 4" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby5} alt="Baby 5" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby6} alt="Baby 6" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby7} alt="Baby 7" className="w-full h-auto object-cover rounded-lg" />
        <img src={Baby8} alt="Baby 8" className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Bottom-right Background Image */}
      <img
        src={bgBaby}
        alt="Background Baby"
        className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 object-contain"
      />
    </div>
  );
};

export default Baby;
