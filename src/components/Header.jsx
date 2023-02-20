import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className=''>
      <div className="header--content ">
      <h1 className='font-bold text-white xl:text-7xl lg:text-7xl md:text-6xl text-5xl uppercase'>start with <br /> Leadership</h1>
      <button className='capitalize text-white bg-primary rounded-full py-2 px-10 mt-10 hover:text-primary border-2 border-primary hover:bg-transparent transition-all duration-300'><Link to={'/services'}>Learn more</Link></button>
      </div>
    </header>
  )
}

export default Header