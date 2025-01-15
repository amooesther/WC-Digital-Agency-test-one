import React from 'react';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
import im4 from '../assets/im4.png';
import arrow from '../assets/process-arrow.png';

const AmalB = () => {
  return (
    <div className="py-12 px-8">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
        WHY <span className="text-colorThree">AMAL BOTANICALS</span>
      </h3>
      <p className="text-lg text-center mb-20 md:max-w-xl mx-auto">
        Essentially we use ethically sourced natural ingredients, highly considering the well-being of your babies and kids of all ages in mind.
      </p>

      <div
        className="flex flex-col md:flex-row  bg-center relative"
        style={{
          backgroundImage: `url(${arrow})`,
        }}
      >
        {/* Product 1 */}
        <div className="flex flex-col items-center text-center w-full md:w-auto bg-white bg-opacity-75 p-4 rounded-lg">
          <img src={im1} alt="Non-Toxic Products" className="w-[167px] h-[167px] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Non-Toxic Products</h4>
          <p className="text-base">
            One of the most important USPs for a website that sells baby care products is that.
          </p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center text-center w-full md:w-auto bg-white bg-opacity-75 p-4 rounded-lg transform md:translate-y-[-40px]">
          <img src={im2} alt="Tested Okay" className="w-[167px] h-[167px] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Tested Okay</h4>
          <p className="text-base">
            One of the most important USPs for a website that sells baby care products is that.
          </p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center text-center w-full md:w-auto bg-white bg-opacity-75 p-4 rounded-lg">
          <img src={im3} alt="Convenient Delivery" className="w-[167px] h-[167px] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Convenient Delivery</h4>
          <p className="text-base">
            One of the most important USPs for a website that sells baby care products is that.
          </p>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center text-center w-full md:w-auto bg-white bg-opacity-75 p-4 rounded-lg transform md:translate-y-[-40px]">
          <img src={im4} alt="Competitive Pricing" className="w-[167px] h-[167px] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Competitive Pricing</h4>
          <p className="text-base">
            One of the most important USPs for a website that sells baby care products is that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmalB;
