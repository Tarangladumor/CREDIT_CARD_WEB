import React from 'react'
import CARDIMG from '../../../assets/Card_img.png'
import TYPE from '../../../assets/Visa.png'

const similarCards = [
    {
        title: "Rupay Credit Card",
        image: CARDIMG,
        type: TYPE,
        bank: "Axis Bank",
        Rewards: "Earn 2% cashback on all purchases."
    },
    {
        title: "Rupay Credit Card",
        image: CARDIMG,
        type: TYPE,
        bank: "Axis Bank",
        Rewards: "Earn 2% cashback on all purchases."
    },
    {
        title: "Rupay Credit Card",
        image: CARDIMG,
        type: TYPE,
        bank: "Axis Bank",
        Rewards: "Earn 2% cashback on all purchases."
    }
]

const SimmilarCards = () => {
    return (
        <div className='w-10/12 mx-auto mt-20'>

            <div>
                <h1 className='flex justify-center items-center font-extrabold text-5xl mt-10'>Similar Credit Cards</h1>
            </div>

            <div className=' w-[10%] mx-auto' >
                <div className=' border-[#159A9C] border-b border-[5px] my-5 rounded-full'></div>
            </div>

            {
                similarCards.map((card, index) => (
                    <div className='mt-20 border-[#056E67] border-[3px] rounded-2xl py-8 px-5 shadow-[0px_20px_50px_10px_#00000040]' key={index}>
                        <div className='flex justify-center items-center gap-5'>

                            <div>
                                <img src={card.image} className='rotate-15 w-[250px]' />
                            </div>

                            <div className='w-[75%]'>

                                <div className='flex justify-between items-center mb-3'>
                                    <h2 className=' font-semibold text-4xl'>{card.title}</h2>

                                    <div className=' flex gap-x-3 items-center'>
                                        <img src={card.type} className=' h-5 w-auto' />
                                        <button className=' border-[2px] rounded-full border-[#056E67] text-[#056E67] px-5 py-1'>Lifestyle</button>
                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <div>
                                        <p className='font-medium text-xl opacity-65'>{card.bank}</p>

                                        <p className='font-medium text-xl opacity-65'>User Reviews and Ratings:</p>

                                        <p>Stars</p>

                                        <p className='font-medium text-2xl'><span className='text-[#8A8C17]'>Rewards : <p>{card.Rewards}</p></span></p>
                                    </div>

                                    <div className='flex items-end'>
                                        <button className='border-[5px] rounded-full bg-transparent border-[#159A9C]  shadow-[0px_20px_20px_2px_#00000060,inset_0px_7px_15px_0px_#00000060] text-base font-semibold px-5 py-2'>
                                            More Details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default SimmilarCards
