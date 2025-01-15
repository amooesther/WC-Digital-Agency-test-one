import React from 'react';
import search from '../assets/search.png';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import cart from '../assets/shopping-bag.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-4 sm:mx-[10%] ">
      {/* Search Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          className="pl-10 pr-4 py-2 border rounded-full w-full md:w-80"
          placeholder="Search..."
        />
        <img 
          src={search}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
      </div>

      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-24" />
      </div>

      {/* User Account and Shopping Cart */}
      <div className="flex gap-4">
        {/* User Account */}
        <div className=" items-center space-x-2 hidden sm:flex">
          <img src={user} alt="User" className="w-6 h-6" />
          <p className="text-sm">My Account</p>
        </div>

        {/* Shopping Cart */}
        <div className=" items-center space-x-2 hidden sm:flex">
          <img src={cart} alt="Cart" className="w-6 h-6" />
          <p className="text-sm">₦0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
