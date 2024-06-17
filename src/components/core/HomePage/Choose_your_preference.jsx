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
                <div className='flex justify-center items-center font-extrabold text-6xl mt-10'>
                    <h1>Choose your preference</h1>
                </div>

                <div className=' w-1/4 mx-auto' >
                    <div className=' border-[#159A9C] border-b border-[5px] my-12'></div>
                </div>

                <div className=' flex justify-evenly items-center'>

                    <div className='bg-[#DEEFE7] py-14 px-5 rounded-2xl'>
                        <div className=' flex flex-col justify-center items-center gap-0'>

                            <div className='relative text-[#159A9C]'>
                                <BsFillCreditCard2BackFill size={175} />
                                <div>
                                    <RiVipCrown2Fill size={30} className='absolute top-0 left-[67px]' />
                                    <RiVipFill size={80} className='absolute top-[70px] left-10 z-10' />
                                </div>
                            </div>

                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-3xl'>Credit Card by privilege</p>
                        </div>
                    </div>

                    <div className='bg-[#DEEFE7] py-14 px-5 rounded-2xl'>
                        <div  className=' flex flex-col justify-center items-center gap-0'>
                            <div className='relative text-[#159A9C] '>
                                <HiCreditCard size={175} className='z-10' />
                                <div>
                                    <HiCreditCard size={175} className='absolute -top-8 left-12 z-5'/>
                                </div>
                            </div>
                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-3xl'>Credit Card by privilege</p>
                        </div>
                    </div>

                    <div className='bg-[#DEEFE7] py-14 px-5 rounded-2xl'>
                        <div  className=' flex flex-col justify-center items-center gap-0'>
                            <div className='text-[#159A9C]'>
                                <BiSolidCreditCardFront size={175} />
                            </div>
                        </div>

                        <div className=' max-w-[80%] flex justify-center items-center mx-auto text-center'>
                            <p className='font-semibold text-3xl'>Credit Card by privilege</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Choose_your_preference
