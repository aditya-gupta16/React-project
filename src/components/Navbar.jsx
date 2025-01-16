import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
// import Home from './Home';

const Navbar = () => {

  

  return (

      <>
      <nav className='w-full h-24 bg-black text-white flex items-center justify-between px-8 text-lg'>
        <a href="/"><h1 className='text-blue-500 font-bold text-2xl'>Logo</h1></a>
        <ul className='flex gap-5 '>
            <li><Link to='/'></Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

      </nav>
      </>
    
  ) 
}

export default Navbar;