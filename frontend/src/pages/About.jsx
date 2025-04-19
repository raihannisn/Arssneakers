import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis sunt qui alias vitae ipsam, recusandae eos mollitia doloremque delectus voluptatibus earum reprehenderit et amet totam hic, eius quia necessitatibus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis labore at earum minus cumque consectetur dicta eum, error, maxime mollitia quibusdam reiciendis nam, quisquam quis!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quas necessitatibus, voluptatibus tenetur ratione facilis blanditiis repellendus debitis sunt, eum nulla sit! Repellat, vero exercitationem doloribus architecto ipsa aspernatur nostrum?</p>
        </div>
      </div>

    <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurence:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque provident iste possimus dicta nobis?</p>
      </div>
      <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque provident iste possimus dicta nobis?</p>
      </div>
      <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Execptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque provident iste possimus dicta nobis?</p>
      </div>
    </div>

    <NewsletterBox />

    </div>
  )
}

export default About
