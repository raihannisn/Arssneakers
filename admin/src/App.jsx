import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route, Navigate  } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [ token, setToken ] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>
      { token === ""
      ? <Login  setToken={setToken}/>
      : <>
      <Navbar />
      <hr className='border-gray-300' />
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </div>
      </div>
    </>
      }
      
    </div>
  )
}

export default App
