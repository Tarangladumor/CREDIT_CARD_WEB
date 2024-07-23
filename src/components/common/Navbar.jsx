import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    return (
        <div className={`${location.pathname === '/' ? "bg-[#056E67]" : "bg-white"} text-white pt-3`} >

            <div className='w-10/12 mx-auto flex justify-between items-center py-3 h-10vh border-2 border-red-400 rounded-full px-5 bg-[#056E67]'>

                <div className=' font-black text-4xl'>
                    LOGO
                </div>

                <div>
                    <div className=' flex gap-x-16 items-center'>
                        <ul className=' flex gap-16 items-center font-normal text-xl'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                        <form className='relative'>
                            <input type="text" placeholder='Search' className=' rounded-full  text-black px-3' />
                            <button type="submit" className='absolute top-1 right-2 text-black '><RiSearch2Line /></button>
                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Navbar
