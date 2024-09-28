import React, { useEffect, useRef, useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { fetchAllCard } from '../../services/Operations/cardAPI';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [debouncedInput, setDebouncedInput] = useState(input);
    const searchRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(input);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [input]);

    const fetchData = async (value = "") => {
        if (!value) {
            setFilteredCards([]);
            return;
        }

        try {
            const data = await fetchAllCard();
            console.log(data);

            const result = data.filter((card) =>
                card?.cardName?.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCards(result);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    useEffect(() => {
        fetchData(debouncedInput);
    }, [debouncedInput]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setFilteredCards([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCardClick = () => {
        setFilteredCards([]);
        setInput("");
    };

    return (
        <div className={`${location.pathname === '/' ? "bg-[#056E67]" : "bg-white"} text-white pt-3 transition duration-500 ease-in-out`}>
            <div className='w-10/12 mx-auto flex justify-between items-center py-3 h-10vh rounded-full px-5 bg-[#056E67] '>

                {/* Logo */}
                <div className='font-black text-4xl md:max-w-[25%]'>
                    <Link to='/'>CARD POUCH</Link>
                </div>

                {/* Search Input and Links (Visible on md and larger screens) */}
                <div className='hidden md:flex gap-x-8 lg:gap-x-16 items-center'>
                    <div className='relative w-64 md:w-48 lg:w-64' ref={searchRef}>
                        <input
                            type="text"
                            placeholder='Search'
                            className='w-full rounded-full text-black px-3 border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200'
                            value={input}
                            onChange={handleChange}
                        />
                        <RiSearch2Line className='absolute top-2 right-3 text-black' />

                        {filteredCards.length > 0 && (
                            <div className='absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10000'>
                                {filteredCards.map((card, index) => (
                                    <Link
                                        to={`/fulldetailsofcard/${card._id}`}
                                        key={index}
                                        className='block px-4 py-2 text-black hover:bg-gray-100'
                                        onClick={handleCardClick}
                                    >
                                        {card.cardName}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links */}
                    <ul className='flex gap-8 lg:gap-16 items-center font-normal text-lg'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/more-cards'>Credit Cards</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>
                </div>

                {/* Hamburger Menu (Visible on smaller screens) */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Visible on smaller screens when toggled) */}
            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col gap-4 items-center font-normal text-xl bg-[#056E67] text-white p-4 border-b border-gray-300'>
                        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                        <li><Link to='/more-cards' onClick={toggleMenu}>Credit Cards</Link></li>
                        <li><Link to='/about-us' onClick={toggleMenu}>About Us</Link></li>

                        {/* Search Input for Mobile */}
                        <div className='relative w-2/3' ref={searchRef}>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-full rounded-full text-black px-3 border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200'
                                value={input}
                                onChange={handleChange}
                            />
                            <RiSearch2Line className='absolute top-2 right-3 text-black' />

                            {filteredCards.length > 0 && (
                                <div className='absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20'>
                                    {filteredCards.map((card, index) => (
                                        <Link
                                            to={`/fulldetailsofcard/${card._id}`}
                                            key={index}
                                            className='block px-4 py-2 text-black hover:bg-gray-100'
                                            onClick={handleCardClick}
                                        >
                                            {card.cardName}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
