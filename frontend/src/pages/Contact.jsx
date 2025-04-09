import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact" />
        
        <div className='flex flex-col justify-center items-start gap-6 text-gray-700'>
          <p className='font-semibold text-xl text-gray-800'>Our Store</p>
          <p>
            50493 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          
          <p>
            <span className='font-medium'>Phone:</span> +1 (555) 123-4567
          </p>
          
          <p>
            <span className='font-medium'>Email:</span> support@horizonstore.com
          </p>
          
          <p className='font-semibold text-xl text-gray-600'>Careers at Horizon</p>
          <p> Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
