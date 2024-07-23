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
        <div className='bg-[#056E67] text-white overflow-hidden h-[calc(100vh-75px)]'>

            <div className='flex justify-evenly mt-10'>

                <div className=' max-w-[45%] flex flex-col mt-10 gap-3 ml-10'>

                    <p className=' font-extrabold text-9xl max-w-[80%]'>CREDIT CUES</p>

                    <div className=' flex gap-x-3 max-w-[75%] justify-center items-center mt-8'>

                        <div className='flex relative'>
                            <img src={IMG1} height={50} width={50} className=' rounded-full aspect-square' />

                            <img src={IMG2} height={50} width={50} className=' rounded-full aspect-square relative z-10 -left-8' />
                        </div>
                        <p className=' font-semibold text-xl'>lorem epsum ut set unde omnis iste nats error ut unde omnis</p>

                    </div>

                    <div className=' flex items-center gap-x-5 mt-8'>

                        <button className=' bg-[#DEEFE7] px-10 py-5 rounded-full shadow-[0px_30px_30px_0px_#00000060]'>
                            <p className=' font-semibold text-xl text-black'>Get Started</p>
                        </button>

                        <button className=' border-[4px] rounded-full shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060]'>
                            <div className=' p-[10px]'>
                                <MdArrowOutward size={30} />
                            </div>
                        </button>
                    </div>

                </div>

                <div className=' relative '>

                    <div className='h-[300px] w-[500px] bg-gradient-to-r from-[#bce7d3] to-[#159A9C] rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-20 top-16'>
                        <img src={VISA} height={100} width={100} className=' absolute left-10 top-10' />

                        <img src={CHIP} height={75} width={75} className=' absolute right-16 top-16' />

                        <p className=' absolute bottom-20 left-10 font-normal text-xl -rotate-3'>4012 8888 2695 4592</p>
                        <p className=' absolute bottom-12 left-10 font-normal text-xl -rotate-3'>RORONOA ZORO</p>
                        <p className=' absolute bottom-12 left-60 font-normal text-xl -rotate-3'>09/26</p>
                    </div>

                    <div className='h-[300px] w-[500px] bg-[#ffffff] bg-opacity-15 rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-10 -top-40'>
                        <img src={MASTER} height={100} width={100} className=' absolute left-10 top-10' />

                        <img src={CHIP} height={75} width={75} className=' absolute right-16 top-16' />

                        <p className=' absolute bottom-20 left-10 font-normal text-xl -rotate-3'>4012 8888 2695 4592</p>
                        <p className=' absolute bottom-12 left-10 font-normal text-xl -rotate-3'>RORONOA ZORO</p>
                        <p className=' absolute bottom-12 left-60 font-normal text-xl -rotate-3'>09/26</p>
                    </div>

                </div>

            </div>

            <div className='w-screen flex justify-center items-center -mt-10'> 
                <IoIosArrowDown size={60} className=' text-center'/>
            </div>


        </div>
    )
}

export default Section1
