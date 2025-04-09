import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center  pt-8 border-t'>

        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Horizon – where fashion meets simplicity and every product tells a story.
        We’re more than just an online store – we’re a community built on quality, authenticity, and a passion for delivering the best to your doorstep.</p>
        <p>At Horizon, we curate a handpicked collection of products designed to elevate your lifestyle – from everyday essentials to unique finds. Whether you're updating your wardrobe, gifting a loved one, or exploring something new, we've got you covered with fast delivery, secure payments, and top-tier support.</p>
        <b className='text-gray-800'>Our mission is simple</b>
        <p>Make online shopping effortless, enjoyable, and unforgettable.

Thank you for choosing Horizon. Let’s shop smart, live bold, and explore beyond the horizon. </p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Horizon, every product undergoes strict quality checks to ensure it meets our high standards so you always receive nothing but the best.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Horizon is built around your lifestyle fast, easy, and hassle-free shopping, from browse to doorstep.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Horizon, you're not just a customer you're family. We're here to help, 24/7.</p>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About
