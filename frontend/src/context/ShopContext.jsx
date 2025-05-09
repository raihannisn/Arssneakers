import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId,size) => {

    if (!size) {
      toast.error('Selecet Prodcut Size');
      return;
    }else{
      toast.success('Product Added to Cart');
    }

      let cartData = structuredClone(cartItems);

      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        }
        else{
          cartData[itemId][size] = 1;
        }
      }
      else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }
      setCartItems(cartData);
  }

  const getCartCount = () => {
    let count = 0;

    for ( const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            count += cartItems[items][item];
          }
        } catch (error) {
          console.error("Terjadi error saat menghitung jumlah cart:", error);
        }
      }
    }

    return count;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    if (quantity < 0) {
      toast.error('Quantity cannot be less than 0');
      return;
    }
  
    let cartData = structuredClone(cartItems);
  
    if (quantity === 0) {
      delete cartData[itemId][size];
  
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
      
      toast.success('Item has been removed from cart');
      setCartItems(cartData);
      return;
    }
  
    cartData[itemId][size] = quantity;
    toast.success('Quantity has been updated');
    setCartItems(cartData);
  };
  

  const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items);
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error("Terjadi error saat menghitung jumlah cart:", error);
        }
      }
    }

    return totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
