import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-[#F1ECE9]'>
        <header className='flex items-center justify-between px-10 ' >
            
            <div>
                <ul className='flex space-x-6 md:space-x-10 md:text-lg text-pink-600 font-semibold py-3'>
                    <Link to='/'>
                    <li className='border-b border-[#F1ECE9] transition duration-300 ease-in-out hover:border-b hover:border-pink-600 cursor-pointer' >Home</li>
                    </Link>
                    <Link to='/about'>
                    <li className='border-b border-[#F1ECE9] transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer'>About</li>
                    </Link>
                    <Link to='/shows'>
                    <li className='border-b border-[#F1ECE9] transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer'>Shows</li>
                    </Link>
                </ul>

            </div>
        </header>
    </div>
  )
}
