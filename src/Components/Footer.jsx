import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import twitter from '../assets/twitter.png'
import email from '../assets/email.png'
import instagram from '../assets/instagram.png'
import arrow_right from '../assets/arrow_right.png'

const Footer = () => {
  return (
    <div className='bg-secondary text-white p-8'>
        <div className='flex flex-col gap-8 sm:flex-row '>
            <div className='sm:w-1/4 md:mx-10'>
                <img src={logo} alt="Amal Botanicals Logo" className='mb-4'/>
                <p className='text-sm sm:text-base'>
                    At Amal Botanicals, we believe that the best care for your baby should come from natural and pure ingredients. 
                    We believe in taking care of your little ones with the same love and care that we would give our own.
                </p>
                <div className='flex space-x-4 mt-4'>
                    <img src={facebook} alt="Facebook" className='w-6 h-6'/>
                    <img src={twitter} alt="Twitter" className='w-6 h-6'/>
                    <img src={instagram} alt="Instagram" className='w-6 h-6'/>
                    <img src={whatsapp} alt="Whatsapp" className='w-6 h-6'/>
                    <img src={email} alt="Email" className='w-6 h-6'/>
                </div>
            </div>
            
            <div className='sm:w-1/4 mt-8 sm:mt-0'>
                <h4 className='font-semibold text-lg mb-2'>Navigation</h4>
                <ul className='space-y-2 text-sm sm:text-base'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Stokist</li>
                    <li>Ultimatum Guide</li>
                    <li>Delivery & Return</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='sm:w-1/4 mt-8 sm:mt-0'>
                <h4 className='font-semibold text-lg mb-2'>Store</h4>
                <ul className='space-y-2 text-sm sm:text-base'>
                    <li>Soap</li>
                    <li>Cream</li>
                    <li>Oils</li>
                    <li>Balms</li>
                    <li>Powders</li>
                    <li>Scrub</li>
                    <li>Mother Care</li>
                </ul>
            </div>

            <div className='sm:w-1/4 mt-8 sm:mt-0'>
                <h4 className='font-semibold text-lg mb-2'>Newsletter</h4>
                <p className='text-sm sm:text-base mb-4'>
                    Be the first to know about our latest promotions and special offers.
                </p>
                <div className='flex'>
                    <input type="text" className='p-2 border-none rounded-l-md w-full'/>
                    <img src={arrow_right} alt="Arrow" className='bg-primary p-2 rounded-r-md'/>
                </div>
                <h4 className='font-semibold text-lg mt-4'>Open Times</h4>
                <p className='text-sm sm:text-base'>10 AM - 6 PM (MON-SAT)</p>
            </div>
        </div>

        <hr className='text-white mt-8' />

        <div className='flex flex-col sm:flex-row justify-between items-center px-4 py-2'>
            <span>© 2023 Amal Botanicals. All rights reserved.</span>
            <span className='mt-4 sm:mt-0'>Designed with ❤ by: Websitechic</span>
        </div>
    </div>
  )
}

export default Footer
