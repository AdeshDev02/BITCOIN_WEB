import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="h-[80px] bg-white w-full sticky top-0 transition-transform duration-500 z-50 flex justify-around items-center shadow-md">
        <div className='text-3xl'>
            <img className='text-2xl' src="https://livedemo00.template-help.com/wt_prod-16462/images/logo-default-105x38.png" alt="" srcset="" />
        </div>
        <nav>
        <ul className='flex gap-16 sm:gap-1 lg:gap-6 lg:pl-[370px]'>
            <h2 className="rounded-md p-1 pl-1 mt-4 text-xl hover:shadow-lg text-center items-center w-20 h-9 font-bold">
                <Link to="/">Home</Link>
            </h2>
            <h2 className='rounded-md p-1 pl-1 mt-4 text-xl hover:shadow-lg text-center items-center w-24 h-9 font-bold'>
                <Link to="about">About</Link>
            </h2>
            <h2 className='rounded-md p-1 pl-1 mt-4 text-xl hover:shadow-lg text-center items-center w-28 h-9 font-bold'>
                <Link to="feature">Features</Link>
            </h2>
            <h2 className='rounded-md p-1 pl-1 mt-4 text-xl hover:shadow-lg text-center items-center w-24 h-9 font-bold'>
                <Link to="team">Team</Link>
            </h2>
            <h2 className='rounded-md p-1 pl-1 mt-4 text-xl hover:shadow-lg text-center items-center w-28 h-9 font-bold'>
                <Link to="contact">Contact</Link>
            </h2>
        </ul>
        </nav>
    </header>
  )
}

export default Header