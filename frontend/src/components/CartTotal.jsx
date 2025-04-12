import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

  const {curenncy, delivery_fee, getCartAmount} = useContext(ShopContext); 

  return (
    <div className='w-full'>
      <div className='text-2xl'>
       <Title text1={'CART'} text2={'TOTALS'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{curenncy}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
        <p>Shipping fee</p>
        <p>{curenncy}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
        <p>Total</p>
        <p>{curenncy}{getCartAmount() === 0 ? 0 :getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
