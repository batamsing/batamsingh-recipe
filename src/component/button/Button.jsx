import React from 'react'

export const ButtonFav = (props) => {

  return (
    <button
      onClick={() => props.handleFav(props.id)}
      className='p-2 bg-red-700 text-white rounded-md w-48 hover:bg-red-600 trasition duration-100 ease-in-out font-semibold'>
    {props.text}</button>
  )
}
