import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useGlobal} from './components/context/productcontext'

const API = `https://api.tvmaze.com/shows`

export const SingleShow = () => {
    const {id} = useParams();
    //
    const {getSingleShow,SingleShow,isError,isLoading} = useGlobal();
    const {id:alias,image} = SingleShow;
    useEffect(() => {
      getSingleShow(`${API}/${id}`)
    }, [])
    if(isLoading){
      return <h1 className='text-center text-2xl text-blue-500'>LOADING</h1>
    }
    if(isError){
      return<h1 className='text-center mt-12 text-2xl text-red-500'>ERROR</h1>
    }
    
  return (
    <div className='ml-16 mr-16 min-h-[85vh]'>
      <h1 className='mt-8 text-2xl uppercase font-semibold underline text-center text-gray-500 '>{SingleShow.name}</h1>
     <div className='xl:flex items-center'>
     
      {image?.medium? <img className='mx-auto mt-8 shadow-2xl rounded-xl' src={`${image.medium}`}/> : <h1>bye</h1>}
     
      <div className='ml-8 border-r-2 border-gray-300 shadow-xl pb-4 px-4 mb-16'>
      <p className='mt-8 font-semibold'>Status:  
      <span className='text-red-600'>{SingleShow.status}</span></p>
      <h1 className='mt-4 text-2xl font-semibold text-gray-500'>SUMMARY</h1>
      <p className='text-xl'>{SingleShow.summary}</p>
      </div>
    </div>
    </div>
  )
}
