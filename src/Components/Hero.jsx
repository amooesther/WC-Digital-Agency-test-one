import React from 'react';
import hero_img from '../assets/hero-img.png';
import hero_bg from '../assets/hero-bg.png';
import dot from '../assets/dot.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Background */}
      <img
        src={hero_bg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-8">
        {/* Hero Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={hero_img}
            alt="Hero"
            className="w-full max-w-[300px] md:max-w-[400px]"
          />
        </div>

        {/* Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-white text-center">
          <p className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Give Your{' '}
            <span className="text-primary">
              Little One the Best Care
            </span>{' '}
            with Our Safe and Trusted Baby Products
          </p>
          <button className="px-8 py-3 mb-10  bg-primary text-gray-700 rounded-full text-lg font-medium hover:bg-colorThree hover:text-white transition duration-300 shadow-md">
            Shop Now
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
  <img
    src={dot}
    alt="Dot"
    className="w-8 md:w-12 opacity-80 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
  />
</div>

    </div>
  );
};

export default Hero;
