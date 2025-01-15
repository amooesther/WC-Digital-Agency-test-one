import React from 'react';
import hero_img from '../assets/hero-img.png';
import hero_bg from '../assets/hero-bg.png';
import dot from '../assets/dot.png';

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Hero Background */}
      <img
        src={hero_bg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center w-full h-full px-6 sm:px-8">
        {/* Hero Image */}
        <div className="w-full mb-6 sm:mb-0 flex justify-center">
          <img
            src={hero_img}
            alt="Hero"
            className="w-[80%] max-w-[300px] sm:max-w-[400px]"
          />
        </div>

        {/* Text and Button */}
        <div className="w-full text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight mb-6">
            Give Your{' '}
            <span className="text-primary">
              Little One the Best Care
            </span>{' '}
            with Our Safe and Trusted Baby Products
          </h2>
          <button className="px-6 py-3 bg-primary text-gray-700 rounded-full text-lg font-medium hover:bg-colorThree hover:text-white transition duration-300 shadow-md">
            Shop Now
          </button>
        </div>
      </div>

      {/* Dot for small screen */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:block hidden">
        <img
          src={dot}
          alt="Dot"
          className="w-8 sm:w-12 opacity-80 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Hero;
