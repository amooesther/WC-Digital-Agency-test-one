import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-secondary text-white'>
      {/* Hamburger Icon for small screens */}
      <div className='md:hidden flex justify-end p-4'>
        <AiOutlineMenu
          onClick={toggleMenu}
          className='text-2xl cursor-pointer'
        />
      </div>

      {/* Navbar Links (Visible only on larger screens) */}
      <ul className='hidden md:flex flex-wrap justify-center md:justify-center space-x-8 p-4'>
        <li className='text-primary hover:text-gray-300 cursor-pointer'>Home</li>
        <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
        <li className='hover:text-gray-300 cursor-pointer'>Store</li>
        <li className='hover:text-gray-300 cursor-pointer'>Our Stokist</li>
        <li className='hover:text-gray-300 cursor-pointer'>Ultimate Guide</li>
        <li className='hover:text-gray-300 cursor-pointer'>Delivery and Return</li>
        <li className='hover:text-gray-300 cursor-pointer'>FAQS</li>
        <li className='hover:text-gray-300 cursor-pointer'>Contact us</li>
      </ul>

      {/* Mobile Menu Links (Visible when hamburger is clicked) */}
      <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} space-y-4 p-4`}>
        <li className='text-primary hover:text-gray-300 cursor-pointer'>Home</li>
        <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
        <li className='hover:text-gray-300 cursor-pointer'>Store</li>
        <li className='hover:text-gray-300 cursor-pointer'>Our Stokist</li>
        <li className='hover:text-gray-300 cursor-pointer'>Ultimate Guide</li>
        <li className='hover:text-gray-300 cursor-pointer'>Delivery and Return</li>
        <li className='hover:text-gray-300 cursor-pointer'>FAQS</li>
        <li className='hover:text-gray-300 cursor-pointer'>Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
