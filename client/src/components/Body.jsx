import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-400 '>
      <Navbar/>
      <div className="flex-grow">

      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Body
