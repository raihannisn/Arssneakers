import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='text-white py-10 px-5'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-48' alt='' />
          <p className='text-gray-600 text-sm'>
            100% Money Back Guarantee
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat magni nulla cumque unde. Officiis cum, neque eum sit deserunt consequatur. Assumenda, aut. Necessitatibus consequuntur, quam sit natus provident temporibus.
          </p>
        </div>
        <div>
          <p className=' text-black text-lg font-medium mb-3'>Company</p>
          <ul className='text-gray-600 text-sm space-y-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-black text-lg font-medium mt-3'>Keep in touch with us!</p>
          <div className='flex space-x-4 text-gray-600'>
            <a href="https://www.instagram.com/arssneakerssociety/" target='_blank' rel='noopener noreferrer'><FaInstagram size={20} /></a>
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            <FaTiktok size={20} />
          </div>
        </div>
      </div>
      <div className='text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-5'>
      Copyright &copy; {currentYear} Arssneakerssociety. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
