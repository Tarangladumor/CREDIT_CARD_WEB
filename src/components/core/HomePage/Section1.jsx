import React from 'react'
import VISA from '../../../assets/Visa.png'
import CHIP from '../../../assets/Chip.png'
import MASTER from '../../../assets/mastercard.png'
import IMG1 from "../../../assets/home Section 1 image.jpg"
import IMG2 from "../../../assets/home section img2.jpg"
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Section1 = () => {
    return (
        <div className='bg-[#056E67] text-white overflow-hidden'>

            <div className='flex justify-evenly items-center'>

                <div className=' max-w-[50%] flex flex-col gap-3 mb-40 ml-10'>

                    <p className=' font-extrabold text-9xl max-w-[80%]'>CREDIT CUES</p>

                    <div className=' flex gap-x-3 max-w-[75%] justify-center items-center mt-8'>

                        <div className='flex relative'>
                            <img src={IMG1} height={50} width={50} className=' rounded-full aspect-square' />

                            <img src={IMG2} height={50} width={50} className=' rounded-full aspect-square relative z-10 -left-8' />
                        </div>
                        <p className=' font-semibold text-2xl'>lorem epsum ut set unde omnis iste nats error ut unde omnis</p>

                    </div>

                    <div className=' flex items-center gap-x-5 mt-8'>

                        <button className=' bg-[#DEEFE7] px-12 py-5 rounded-full shadow-[0px_30px_30px_0px_#00000060]'>
                            <p className=' font-semibold text-2xl text-black'>Get Started</p>
                        </button>

                        <button className=' border-[5px] rounded-full shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060]'>
                            <div className=' p-2'>
                                <MdArrowOutward size={40} />
                            </div>
                        </button>
                    </div>

                </div>

                <div className=' relative'>

                    <div className='h-[400px] w-[600px] bg-gradient-to-r from-[#bce7d3] to-[#159A9C] rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-20 top-16'>
                        <img src={VISA} height={100} width={100} className=' absolute left-10 top-10' />

                        <img src={CHIP} height={75} width={75} className=' absolute right-16 top-16' />

                        <p className=' absolute bottom-20 left-10 font-normal text-xl -rotate-3'>4012 8888 2695 4592</p>
                        <p className=' absolute bottom-12 left-10 font-normal text-xl -rotate-3'>RORONOA ZORO</p>
                        <p className=' absolute bottom-12 left-60 font-normal text-xl -rotate-3'>09/26</p>
                    </div>

                    <div className='h-[400px] w-[600px] bg-[#ffffff] bg-opacity-15 rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-10 -top-56'>
                        <img src={MASTER} height={100} width={100} className=' absolute left-10 top-10' />

                        <img src={CHIP} height={75} width={75} className=' absolute right-16 top-16' />

                        <p className=' absolute bottom-20 left-10 font-normal text-xl -rotate-3'>4012 8888 2695 4592</p>
                        <p className=' absolute bottom-12 left-10 font-normal text-xl -rotate-3'>RORONOA ZORO</p>
                        <p className=' absolute bottom-12 left-60 font-normal text-xl -rotate-3'>09/26</p>
                    </div>

                </div>

            </div>

            <div className='w-screen flex justify-center items-center -mt-32'> 
                <IoIosArrowDown size={60} className=' text-center'/>
            </div>


        </div>
    )
}

export default Section1
