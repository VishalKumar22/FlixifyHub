import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-full p-8 flex items-center justify-between z-50'>
      <Link to='/'>
        <h1 className='text-red-600 font-bold cursor-pointer text-4xl'>
        NETFLIX
        </h1>
      </Link>

      <div>
        <Link to='/login'>
          <button className='capitalize pr-4'>
            login
          </button>
        </Link>

        
        <Link to='/signup'>
          <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>
            sign up
           </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar