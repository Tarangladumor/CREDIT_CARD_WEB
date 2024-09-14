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

                <div className='font-black text-4xl'>
                    <Link to='/'>CARD POUCH</Link>
                </div>

                <div className='hidden md:flex gap-x-16 items-center'>
                    <div className='relative' ref={searchRef}>
                        <input
                            type="text"
                            placeholder='Search'
                            className='rounded-full text-black px-3 border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 sm:focus:border-4 sm:hover:border-2'
                            value={input}
                            onChange={handleChange}
                        />
                        <RiSearch2Line className='absolute top-1 right-2 text-black' />

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
                    <ul className='flex gap-16 items-center font-normal text-xl'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/more-cards'>Credit Cards</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col gap-4 items-center font-normal text-xl bg-[#056E67] text-white p-4 border-b border-gray-300'>
                        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                        <li><Link to='/more-cards' onClick={toggleMenu}>Credit Cards</Link></li>
                        <li><Link to='/about-us' onClick={toggleMenu}>About Us</Link></li>

                        <div className='relative w-2/3' ref={searchRef}>
                            <input
                                type="text"
                                placeholder='Search'
                                className='rounded-full text-black px-3 w-full border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 sm:focus:border-4 sm:hover:border-2'
                                value={input}
                                onChange={handleChange}
                            />
                            <RiSearch2Line className='absolute top-2 right-3 text-black' />

                            {filteredCards.length > 0 && (
                                <div className='absolute top-12 left-0 w-2/3 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20'>
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
