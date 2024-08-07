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
        <div className='w-10/12 mx-auto mt-20 border-[#056E67] border-[3px] rounded-2xl py-3 px-5 shadow-[0px_20px_50px_10px_#00000040]'>

            <div className='flex justify-center items-center gap-5'>
                <div className='min-w-[20%]'>
                    <img src={Data?.cardData?.image} alt="Card" />
                </div>

                <div>
                    <div className='flex justify-between items-center mb-3'>
                        <h2 className='font-semibold text-3xl'>{Data?.cardData?.cardName}</h2>

                        <div className='flex gap-x-3 items-center'>
                            {
                                Data?.cardData?.network?.map((item, index) => (
                                    <img
                                        key={item._id}
                                        src={item.image}
                                        className='h-7'
                                        alt={item.name}
                                    />
                                ))
                            }
                            <button className='border-[2px] rounded-full border-[#056E67] text-[#056E67] px-5 py-1'>{Data?.cardData?.type[0]}</button>
                        </div>
                    </div>

                    <div className='text-base font-normal'>
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
