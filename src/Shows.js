import React from 'react'
import { Card } from './components/Card';
import {useGlobal} from './components/context/productcontext'

export const Shows = () => {
  const {Shows,isLoading,isError} = useGlobal();
  if(isLoading){
    return <h1 className='text-center text-2xl text-blue-500'>LOADING</h1>
  }
  if(isError){
    return<h1 className='text-center mt-12 text-2xl text-red-500'>ERROR</h1>
  }
  return (
    <div>
      <ul className='grid grid-cols-3 gap-0 md:grid-cols-5 lg:grid-cols-8'>
      {Shows.map((item) => 
      <Card item={item} key={item.id}/>
      )}
      </ul>
    </div>
  )
}
