import React, { use, useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Cart = () => {

  const {products, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartItems] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
  setCartItems(tempData);
  }, [cartItems]);

  return (
    <div className='bordet-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item, index) => {

            const productData = products.find((product)=> product._id === item._id);

            return(
              <div key = {index} className='py-4 border-gray-300 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium text-gray-700'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:'>{item.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
            
          })
        }
      </div>
    </div>
  )
}

export default Cart
