import React, { useContext, useState } from 'react';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import searchLogo from './search_icon.png';
import favorite_logo from '../../component/image/favorite.svg';
import Favorite from '../../pages/favorites';
import { GlobalContext } from '../../context/GlobalContext';


function Navbar() {
  const [show, setShow] = useState(false);
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);


  return <div className='flex flex-row justify-between px-4 bg-red-500 text-white shadow-md py-4'>
    <div className='lg:hidden'>
      <Hamburger onToggle={toggled => setShow(!show)} />
      {
        show && (
          <ul className='flex flex-col gap-4 px-5 text-2xl py-2'>
            <li><NavLink to={'/'} onClick={() => setShow(false)}>HOME</NavLink></li>
            <li><NavLink to={'/meals'} onClick={() => setShow(false)}>MEALS</NavLink></li>
            <li><NavLink to={'/about'} onClick={() => setShow(false)}>ABOUT</NavLink></li>
            <li><NavLink to={'/contact'} onClick={() => setShow(false)}>CONTACT</NavLink></li>
          </ul>
        )
      }
    </div>

    <div>
    <ul className='hidden lg:flex lg:flex-row lg:gap-4 lg:px-5 lg:text-2xl lg:py-2'>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/meals'}>MEALS</NavLink></li>
            <li><NavLink to={'/about'}>ABOUT</NavLink></li>
            <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
          </ul>
    </div>
    
    <div className='flex flex-row gap-5 mr-3'>
      <form onSubmit={handleSubmit} className='flex row px-3 py-2 h-10 outline outline-2 outline-slate-300 rounded-full'>
        <input
          className='bg-transparent px-1 w-48 mr-2 focus:outline-none'
          type='search'
          onChange={e => setSearchParam(e.target.value)}
          value={searchParam}
          name='searchInput'
          id='searchInput'          
        />
        <button type='submit'><img className='size-6' src={searchLogo} /></button>
        
      </form>
      <NavLink to={'/favorites'} ><span className='bg-white rounded-md font-bold text-xl text-red-600 py-1 px-3 h-10'>FAVORITES</span></NavLink>
    </div>
  </div>
}

export default function SearchNavbar({ searchParam, setSearchParam, handleSubmit }) {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('All meals');
  
  function handleClick() {
    setOpen(prevOpen => !prevOpen)
    
  }
  return (
    <nav className='w-full flex justify-center lg:justify-end lg:pr-24'>
      <form onSubmit={handleSubmit} className='flex w-full md:w-3/4 lg:w-1/3 bg-transparent outline outline-1 outline-red-500 rounded-full m-1 p-3'>
        <input
          className='focus:outline-none w-full'
          type='search'
          id='navbar-search'
          name='navbar-search'
          placeholder='Search recipes...'
          onChange={e => setSearchParam(e.target.value)}
          value={searchParam}
        />
        <button className='hover:bg-slate-200 px-2 rounded-md text-red-500 font-semibold'>SEARCH</button>
        <select name='meals'>
          <option value='AllMeals'>All Meals</option>
          <option vallue='Area'>Area</option>
        </select>
       
      </form>
      
    </nav>
  )
}



export { Navbar }

