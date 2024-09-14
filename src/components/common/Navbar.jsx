import React, { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${location.pathname === '/' ? "bg-[#056E67]" : "bg-white"} text-white pt-3`} >
            <div className='w-10/12 mx-auto flex justify-between gap-6 items-center py-3 h-10vh rounded-full md:px-5 bg-[#056E67]'>

                <div className='font-black text-4xl'>
                    <Link to='/'>CARD POUCH</Link>
                </div>

                <div className='hidden md:flex gap-x-16 items-center'>
                    <ul className='flex gap-16 items-center font-normal text-xl'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/more-cards'>Credit Cards</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>
                    {/* Uncomment the following code for a search bar */}
                    {/* <form className='relative'>
                        <input type="text" placeholder='Search' className='rounded-full text-black px-3' />
                        <button type="submit" className='absolute top-1 right-2 text-black '><RiSearch2Line /></button>
                    </form> */}
                </div>

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col gap-4 items-center font-normal text-xl bg-[#056E67] text-white p-4'>
                        <li><Link to='/' onClick={toggleMenu} >Home</Link></li>
                        <li ><Link to='/more-cards' onClick={toggleMenu}  >Credit Cards</Link></li>
                        <li ><Link to='/about-us' onClick={toggleMenu} >About Us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
