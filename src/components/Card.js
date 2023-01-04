import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  return (
    <Link to={`singleshow/${props.item.id}`}>
    <div className='text-center mt-5 hover:cursor-pointer hover:text-gray-500 transition-all'>
        <div className='h-60 bg-no-repeat bg-cover hover:scale-75 transition-all ease-in-out duration-200' style={{backgroundImage: `url(${props.item.image.medium})`}}></div>
        <div className='mt-2 font-serif'>{props.item.name}</div>
    </div>
    </Link>
  )
}
