import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <ToastContainer />
      <h2 className="text-lg font-semibold mb-4">All Products List</h2>

      <div className="w-full flex flex-col gap-2">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[80px_2fr_1fr_1fr_1fr_60px] items-center px-4 py-3 bg-gray-100 border text-sm font-semibold rounded">
          <span className="flex items-center justify-center">Image</span>
          <span className="flex items-center justify-center">Name</span>
          <span className="flex items-center justify-center">Category</span>
          <span className="flex items-center justify-center">Sub Category</span>
          <span className="flex items-center justify-center">Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Content */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[80px_2fr_1fr_1fr_1fr_60px] items-center px-4 py-3 border rounded text-sm hover:bg-pink-100"
          >
            <div className="flex justify-center items-center">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
            </div>
            <div className="flex items-center justify-center">{item.name}</div>
            <div className="flex items-center justify-center">{item.category}</div>
            <div className="flex items-center justify-center">{item.subCategory}</div>
            <div className="flex items-center justify-center">{currency}{item.price}</div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => removeProduct(item._id)}
                className="text-red-600 hover:text-red-800 text-lg font-bold cursor-pointer"
                title="Delete Product"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;