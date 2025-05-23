import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(15%,80px)]' src={assets.logoo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>    
    </div>
  )
}

export default Navbar
