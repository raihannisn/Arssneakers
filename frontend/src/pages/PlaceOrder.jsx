import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt14 min-h-[80vh] border-t'>

      {/* ------- Left Side ------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 pt-10'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Last Name' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Email Address' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />        
        <input type="email" placeholder='Street' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zipcode' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* ------- Right Side ------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
        <div className='flex gap-3 flex-col lg:flex-row'>

        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
