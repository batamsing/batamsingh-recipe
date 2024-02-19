import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex flex-row justify-between py-4 px-5'>
        <div className='size-16'>
            <Link to={'/'}><p className='text-2xl text-red-800 font-extrabold'>FOOD RECIPE</p></Link>
        </div>
        <div>
            <span className='italic'>Design & Developed by BatamSingh</span>
        </div>
    </header>
  )
}

export default Header