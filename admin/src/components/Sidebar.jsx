import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPlusCircle, FiList, FiShoppingCart } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-gray-300 border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:text-gray-600 md:hover:bg-gray-200 transition duration-500' to={'/'}>
            <FiHome className='w-5 h-5' />
            <p className='hidden md:block'>Home</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:text-gray-600 md:hover:bg-gray-200 transition duration-500' to={'/add'}>
            <FiPlusCircle className='w-5 h-5' />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:text-gray-600 md:hover:bg-gray-200 transition duration-500' to={'/list'}>
            <FiList className='w-5 h-5' />
            <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:text-gray-600 md:hover:bg-gray-200 transition duration-500' to={'/orders'}>
            <FiShoppingCart className='w-5 h-5' />
            <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
