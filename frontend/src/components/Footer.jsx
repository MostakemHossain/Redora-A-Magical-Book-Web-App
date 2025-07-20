import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa';

export default function Footer(){
  return(
    <footer className='bg-[#1F2A37] text-white px-6 md:px-20 py-12'>
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className='md:w-1/3'>
         <h1 className='text-3xl font-bold mb-2'>
          <span className='text-green-400'>ReaDora</span>
         </h1>
         <p className='text-lg mt-4'>Discover, buy, and sell your favourite books - all in one place.</p>
         <p className='text-sm text-gray-400 mt-4'>Get updates, deal, and reading tips straight to your inbox.</p>
         <div className='mt-4 flex'>
          <input type="email" placeholder='Enter your email' 
                 className='w-full mt-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400'/>
          <button className='bg-blue-400 text-white px-3 py-1 rounded-lg font-semibold'>Subscribe</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">You can unsubscribe at any time.</p>
          </div>
         


         <div className='flex flex-wrap gap-10'>
          <div>
            <h3 className='uppercase font-semibold mb-2'>Explore</h3>
            <ul className='text-gray-300 space-y-1'>
              <li>Browse Books</li>
              <li>Genres</li>
              <li>Best Seller</li>
              <li>New Arrivals</li>
              <li>Sell Your Book</li>
            </ul>
          </div>

           <div>
            <h3 className="uppercase font-semibold mb-2">Help</h3>
            <ul className="text-gray-300 space-y-1">
              <li>How It Works</li>
              <li>Shipping & Returns</li>
              <li>FAQs</li>
              <li>Customer Support</li>
            </ul>
            </div>

          <div>
            <h3 className='uppercase font-semibold mb-2'>Company</h3>
            <ul className='text-gray-300 space-y-1'>
              <li>About Us</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Affiliates</li>
              <li>Log In / Sign Up</li>

            </ul>
          </div>
         </div>
         
          </div>
          <hr className='border-gray-700 my-8'/>



         <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
          <p>© 2025 • ReaDora</p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <FaTwitter className='hover:text-white cursor-pointer'/>
            <FaFacebookF className='hover:text-white cursor-pointer'/>
            <FaInstagram className='hover:text-white cursor-pointer'/>


         </div>
        
        </div>
      
    </footer>
  );
}