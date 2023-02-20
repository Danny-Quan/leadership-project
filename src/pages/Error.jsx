import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='flex justify-center items-center h-96'>
        <div className='text-center'>
            <h1 className='font-bold text-4xl'>404 Error! <br /> page not found </h1>
            <button className='text-white bg-primary px-5 py-2 rounded-full mt-5 mb-5'><Link to={'/'}>go back home</Link></button>
        </div>
    </section>
  )
}

export default Error