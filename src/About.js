import React from 'react'

export const About = () => {
  return (
    <div className='min-h-[90vh]'>
      <div className='ml-10 mt-12'>
        <h1 className='text-3xl font-semibold'>About:</h1>
        <div className='mt-8 shadow-2xl px-4 py-6 text-gray-600 hover:text-black transition-all ease-in-out duration-500'>
          <h1 className='text-2xl font-semibold '>About the website:</h1>
          <p className='mt-4 text-lg '>This website is build using 'TV MAZE API'. In this web they are more than 200 movies. Users can view the summary of any movies listed over here. If the user likes the summary then he/she can view the movie on youtube/netflix.</p>
        </div>
        <div className='mt-8 shadow-2xl px-4 py-6 text-gray-600 hover:text-black transition-all ease-in-out duration-500'>
          <h1 className='text-2xl font-semibold '>About the project:</h1>
          <p className='mt-4 text-lg '> Made this website using Reactjs, TailwindCSS, TV API.</p>
          <ul className='text-lg list-disc ml-5 mt-2'>
          
          <li>Used useEffect hook for api calls. So that api is called only for once.</li>
          <li>Used useReducer hooks for multiple state management.</li>
          <li>Used  Context API, useContext to access the information in various pages.</li>

          </ul>

        </div>
      </div>
    </div>
  )
}
