import React from 'react'
// import { RiVipLine } from "react-icons/ri";
// import { RiVipCrown2Fill } from "react-icons/ri";

import { RiVipFill } from "react-icons/ri";
import { RiVipCrown2Fill } from "react-icons/ri";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { HiCreditCard } from "react-icons/hi2";
import { BiSolidCreditCardFront } from "react-icons/bi";

const Choose_your_preference = () => {
    return (
        <div>

            <div className='w-11/12 mx-auto'>
                <div className='flex justify-center items-center font-extrabold text-5xl mt-10'>
                    <h1>Choose your preference</h1>
                </div>

                <div className=' w-[20%] mx-auto' >
                    <div className=' border-[#159A9C] border-b border-[5px] my-12'></div>
                </div>

                <div className=' flex justify-evenly items-center'>

                    <div className='bg-[#DEEFE7] py-10 px-3 rounded-2xl'>
                        <div className=' flex flex-col justify-center items-center gap-0'>

                            <div className='relative text-[#159A9C]'>
                                <BsFillCreditCard2BackFill size={125} />
                                <div>
                                    <RiVipCrown2Fill size={20} className='absolute top-0 left-[55px]' />
                                    <RiVipFill size={50} className='absolute top-[55px] left-10 z-10' />
                                </div>
                            </div>

                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-2xl'>Credit Card by privilege</p>
                        </div>
                    </div>

                    <div className='bg-[#DEEFE7] py-10 px-3 rounded-2xl'>
                        <div  className=' flex flex-col justify-center items-center gap-0'>
                            <div className='relative text-[#159A9C] '>
                                <HiCreditCard size={125} className='z-10' />
                                <div>
                                    <HiCreditCard size={125} className='absolute -top-4 left-8 z-5'/>
                                </div>
                            </div>
                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-2xl'>Credit Card by privilege</p>
                        </div>
                    </div>

                    <div className='bg-[#DEEFE7] py-10 px-3 rounded-2xl'>
                        <div  className=' flex flex-col justify-center items-center gap-0'>
                            <div className='text-[#159A9C]'>
                                <BiSolidCreditCardFront size={125} />
                            </div>
                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-2xl'>Credit Card by privilege</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Choose_your_preference
