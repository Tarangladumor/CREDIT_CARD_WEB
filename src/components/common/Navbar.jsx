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

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Debounce input value for search
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

    // Fetch card data based on debounced input value
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

    const scrollToContactUs = () => {
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu(); // Close menu when Contact Us is clicked
    };

    // Automatically close the menu when navigating to a different route
    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <div className={`${location.pathname === '/' ? "bg-[#056E67]" : "bg-white"} text-white pt-3 transition duration-500 ease-in-out`}>
            <div className='w-full lg:w-10/12 mx-auto flex justify-between items-center py-3 h-10vh rounded-full px-5 bg-[#056E67] '>

                {/* Logo */}
                <div className='font-black text-3xl md:text-4xl md:max-w-[25%]'>
                    <Link to='/'>CARD POUCH</Link>
                </div>

                {/* Search Input and Links (Visible on md and larger screens) */}
                <div className='hidden md:flex gap-x-8 lg:gap-x-16 items-center'>
                    <div className='relative w-64 md:w-48 lg:w-64' ref={searchRef}>
                        <input
                            type="text"
                            placeholder='Search'
                            className='w-full rounded-full text-black px-3 border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 placeholder:text-sm'
                            value={input}
                            onChange={handleChange}
                        />
                        <RiSearch2Line className='absolute top-1 right-4 text-black' />

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
                        <li><a href="#contact-us" onClick={scrollToContactUs}>Contact Us</a></li>
                    </ul>
                </div>

                {/* Hamburger Menu (Visible on smaller screens) */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Side Mounted for small screens */}
            <div className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed top-0 left-0 h-full w-3/4 bg-[#056E67] p-6 shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <button onClick={toggleMenu} className='self-end'>
                        <AiOutlineClose size={24} className="text-white" />
                    </button>
                    
                    <ul className='flex flex-col gap-4 items-start font-normal text-lg text-white mt-4'>
                        <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                        <li><Link to='/more-cards' onClick={closeMenu}>Credit Cards</Link></li>
                        <li><Link to='/cardByPrivilege' onClick={closeMenu}>Card By Privilege</Link></li>
                        <li><Link to='/cardByNetwork' onClick={closeMenu}>Card By Network</Link></li>
                        <li><Link to='/cardByIncome' onClick={closeMenu}>Card By Income</Link></li>
                        <li><a href="#contact-us" onClick={scrollToContactUs}>Contact Us</a></li>
                    </ul>

                    {/* Search Input for Mobile */}
                    <div className='relative w-full mt-3' ref={searchRef}>
                        <input
                            type="text"
                            placeholder='Search'
                            className='w-full rounded-full text-black px-3 border border-gray-300 transition duration-500 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 placeholder:text-sm'
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
