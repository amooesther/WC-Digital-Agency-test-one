import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import line from '../assets/line.png';

const Products = () => {
  return (
    <div className="bg-colorFour py-12 px-8 mx-4">
     <div className="flex flex-col sm:flex-row justify-between items-center mb-6 mx-4 sm:mx-[10%]">
  <h3 className="text-xl sm:text-3xl font-bold text-center sm:text-left mb-4 sm:mb-0">
    LATEST <span className="text-colorThree">PRODUCTS</span>
  </h3>
  <button className="px-8 py-3 bg-primary text-gray-700 rounded-full text-lg font-medium hover:bg-blue-700 hover:text-white transition duration-300 shadow-md mx-auto sm:mx-0 mb-6 sm:mb-0">
    Shop Now
  </button>
</div>

      <img 
        src={line} 
        alt="Line" 
        className="mb-8 mx-4 sm:mx-[10%] w-4/5 sm:w-2/3 md:w-4/5" 
      />

      {/* Product Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 mx-4 sm:mx-[10%]">
        {/* Product 1 */}
        <div className="flex flex-col items-center w-full sm:w-1/4">
          <img src={product1} alt="Satin Schrunchies" className="w-full h-[200px] object-cover mb-4" />
          <p className="text-[16px] font-semibold mb-2">Satin Schrunchies</p>
          <span className="text-[14px] text-primary">#10,000.00</span>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/4">
          <img src={product2} alt="Kids Nourishing Bath Polish" className="w-full h-[200px] object-cover mb-4" />
          <p className="text-[16px]  font-semibold mb-2">Kids Nourishing Bath Polish</p>
          <span className="text-[14px] text-primary">#10,000.00</span>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center w-full sm:w-1/4">
          <img src={product3} alt="Multipurpose Bar Soap" className="w-full h-[200px] object-cover mb-4" />
          <p className="text-[16px]  font-semibold mb-2">Multipurpose Bar Soap</p>
          <span className="text-[14px]  text-primary">#10,000.00</span>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center w-full sm:w-1/4">
          <img src={product4} alt="Argan Oil Black Soap Bar" className="w-full h-[200px] object-cover mb-4" />
          <p className="text-[16px]  font-semibold mb-2">Argan Oil Black Soap Bar</p>
          <span className="text-[14px] text-primary">#10,000.00</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
