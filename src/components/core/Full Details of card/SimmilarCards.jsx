import React from 'react';
import { Link } from 'react-router-dom';

const SimilarCards = ({ Data }) => {
    console.log("Data:", Data);

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-10 lg:mt-20'>
            <div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center'>
                    Similar Credit Cards
                </h1>
            </div>

            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-[10%] mx-auto'>
                <div className='border-[#159A9C] border-b-3 sm:border-b-4 md:border-b-4 my-5 rounded-full'></div>
            </div>

            {Data?.similarCards?.map((card, index) => (
                <div
                    className='mt-10 sm:mt-12 md:mt-10 lg:mt-16 border-[#056E67] border-2 sm:border-3 md:border-2 lg:border-3 rounded-2xl p-4 sm:p-6 md:p-6 lg:p-8 shadow-md lg:shadow-lg'
                    key={index}
                >
                    <div className='flex flex-col sm:flex-row justify-center items-start sm:items-center lg:items-center gap-6 sm:gap-4 md:gap-4'>
                        {/* Image Container */}
                        <div className='flex justify-center sm:justify-start'>
                            <img src={card?.image} className='w-36 sm:w-32 md:w-40 lg:w-[250px]' alt={card?.cardName} />
                        </div>

                        {/* Content Container */}
                        <div className='w-full sm:w-[65%] md:w-[70%] lg:w-[75%]'>
                            {/* Card Name and Network */}
                            <div className='flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center lg:items-center mb-4'>
                                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold'>
                                    {card?.cardName}
                                </h2>
                                <div className='flex gap-2 sm:gap-2 items-center mt-3 sm:mt-0 md:mt-2 lg:mt-0'>
                                    {card?.network?.map((item) => (
                                        <img
                                            key={item._id}
                                            src={item.image}
                                            className='h-5 sm:h-6 md:h-7 lg:h-8'
                                            alt={item.name}
                                        />
                                    ))}
                                    <button className='border border-[#056E67] text-[#056E67] rounded-full px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-1.5'>
                                        {card?.type}
                                    </button>
                                </div>
                            </div>

                            {/* Card Details and Button */}
                            <div className='flex flex-col sm:flex-row justify-between'>
                                {/* Card Details */}
                                <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 lg:gap-4 mt-2 md:mt-3'>
                                    <div className='flex flex-col'>
                                        <p className='text-sm sm:text-xs md:text-sm lg:text-base font-medium opacity-75'>
                                            {card.bank}
                                        </p>
                                        <p className='text-sm sm:text-xs md:text-sm lg:text-base font-medium opacity-75'>
                                            User Reviews and Ratings:
                                        </p>
                                        <p className='text-sm sm:text-xs md:text-sm lg:text-base'>
                                            Stars
                                        </p>
                                    </div>


                                    {/* More Details Button */}
                                    <div className='flex items-start md:items-end mt-4 sm:mt-4'>
                                        <Link to={`/fulldetailsofcard/${card._id}`}>
                                            <button className="border-2 md:border-2 rounded-full bg-transparent border-[#159A9C] shadow-md lg:shadow-lg text-sm sm:text-xs md:text-sm lg:text-base font-semibold px-4 sm:px-2 md:px-4 lg:px-6 py-2 mt-4 md:mt-0">
                                                More Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


