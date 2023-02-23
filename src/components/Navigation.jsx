import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  const toggleNav= ()=>{
const nav= document.querySelector('nav');
const navItems= document.querySelector('.nav--items');
nav.classList.toggle('nav--active')
navItems.classList.toggle('showNavItems')
  }

  return (
    <div className='sticky top-0'>
    <nav className='flex justify-between items-center px-5 py-5 shadow-md bg-white  z-50'>
        <div className="brandName xl:relative lg:relative md:relative absolute xl:top-0 lg:top-0 md:top-0 top-3">
          {/* <img className='w-16 h-10' src="./../img/DMRY7157.JPG" alt="" /> */}
            <h2 className='font-bold text-black text-2xl'>
            YEC Leadership Talk
            </h2>
        </div>
        <button onClick={toggleNav} className="hamburger text-xl absolute right-5 top-4 px-2">
          &#9776;
        </button>
        <ul className='nav--items flex justify-center xl:items-center lg:items-center md:items-center'>
            <li onClick={toggleNav}><button><Link to={'/'}>Home</Link></button></li>
            <li onClick={toggleNav}><button><Link to={'/about'}>About</Link></button></li>
            <li onClick={toggleNav}><button><Link to={'/events'}>Events</Link></button></li>
            <li onClick={toggleNav}><button><Link to={'/contact'}>Contact Us</Link></button></li>
            <li onClick={toggleNav}><button className='bg-primary text-white rounded-full px-5 py-2 hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300'><Link to={'/take-action'}>Take Action</Link></button></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navigation