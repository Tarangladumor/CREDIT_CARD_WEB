import React, { useState } from 'react';

const CardSummary = ({ Data }) => {
    const [showFull, setShowFull] = useState(false);
    const words = 50;

    const truncateDescription = (desc) => {
        if (!desc) return '';
        const descWords = desc.split(' ');
        if (descWords.length <= words) return desc;
        return descWords.slice(0, words).join(' ') + '...';
    };

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-8 lg:mt-20 border-[#056E67] border-[3px] rounded-2xl py-4 lg:py-3 px-4 lg:px-5 shadow-[0px_20px_50px_10px_#00000040]'>

            <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8 lg:gap-10'>
                <div className='w-full md:w-1/3 lg:min-w-[20%] mb-4 md:mb-0'>
                    <img src={Data?.cardData?.image} alt="Card" className='w-full h-auto object-cover' />
                </div>

                <div className='w-full md:w-2/3'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-3 md:mb-4'>
                        <h2 className='font-semibold text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-0 text-center md:text-left'>
                            {Data?.cardData?.cardName}
                        </h2>

                        <div className='flex gap-x-2 md:gap-x-3 items-center flex-wrap justify-center md:justify-end'>
                            {Data?.cardData?.network?.map((item) => (
                                <img
                                    key={item._id}
                                    src={item.image}
                                    className='h-5 md:h-6 lg:h-7'
                                    alt={item.name}
                                />
                            ))}
                            <button className='border-[2px] rounded-full border-[#056E67] text-[#056E67] px-3 md:px-4 lg:px-5 py-1 text-sm md:text-base lg:text-lg'>
                                {Data?.cardData?.type}
                            </button>
                        </div>
                    </div>

                    <div className='text-sm md:text-base font-normal text-center md:text-left'>
                        <p>
                            {showFull ? Data?.cardData?.description : truncateDescription(Data?.cardData?.description)}
                            <span
                                className='text-[#159A9C] cursor-pointer'
                                onClick={() => setShowFull(!showFull)}
                            >
                                {showFull ? ' Show less' : ' Read More details below!'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CardSummary;
