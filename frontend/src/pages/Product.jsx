import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100'>
      {/*  ------- Product Details ------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* ------- Product Info ------- */}
        <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-x-1 mt-2">
                <img src={assets.star_icon} alt="star" className="w-3.5" />
                <img src={assets.star_icon} alt="star" className="w-3.5" />
                <img src={assets.star_icon} alt="star" className="w-3.5" />
                <img src={assets.star_icon} alt="star" className="w-3.5" />
                <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
                <p className="pl-2 text-gray-500">(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button  onClick={() => setSize(item)} className={`border border-gray-300 py-2 px-4 hover:bg-gray-200 cursor-pointer ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white text-sm px-8 py-3 active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 border-t border-gray-400' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% ORIGINAL PRODUCT.</p>
                <p>Cash on delivery available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      {/* ------- Description & Riviews Section ------- */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
          <p>
            Upgrade your wardrobe with this premium cotton t-shirt. Designed for comfort and style, 
            it features a relaxed fit, breathable fabric, and a modern aesthetic. 
            Perfect for casual wear or layering under a jacket.
          </p>
          <p>
            - 100% High-Quality Cotton<br/>
            - Available in multiple sizes (M, L, XL)<br/>
            - Machine washable, easy to maintain<br/>
            - Free returns within 7 days
          </p>
        </div>    
      </div>

      {/* Display related products */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product
