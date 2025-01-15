import React from 'react';
import Bg1 from '../assets/bg1.png';
import Bg2 from '../assets/bg2.png';

const Stokist = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image 1 */}
      <img
        src={Bg1}
        alt="Background 1"
        className="absolute top-0 left-0 w-full h-full  object-cover"
      />

      {/* Background Image 2 */}
      <img
        src={Bg2}
        alt="Background 2"
        className="absolute inset-0 m-auto max-w-[80%] md:max-w-[60%] h-auto object-contain"
      />

      {/* Content on Bg2 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Become A Stokist</h3>
        <p className="text-base md:text-lg  max-w-2xl mb-6">
          We are always looking to expand our reach by partnering with brands who share our values. To become an Amal Botanicals stockist, please click to fill the stockist partnership form.
        </p>
        <button className="bg-primary text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
          I want to become a Stokist
        </button>
      </div>
    </div>
  );
};

export default Stokist;
