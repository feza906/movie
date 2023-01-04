import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
  
  return (
    <div className='mt-16 text-center font-serif min-h-[80vh]'>
      <h1 className='text-3xl font-serif'><span className='text-4xl font-semibold'>C</span>onfused?</h1>
      <h1 className=' text-3xl'><span className='text-4xl font-semibold'>W</span>hich movie to watch?</h1>
      <h1 className='mt-4 text-3xl'><span className='text-3xl font-semibold'>R</span>ead the summaries. <span className='text-3xl font-semibold'>I</span>f you like it, then watch it.</h1>
      <Link to={'/shows'}>
      <h1 className='mt-8 border-2 w-3/12 mx-auto py-2 shadow-2xl hover:scale-90 cursor-pointer rounded-md text-lg transition ease-in-out duration-500 '>Shows</h1>
      </Link>
      <h1 className='mt-8 text-2xl'>200+ Shows</h1>
    </div>
  )
}
