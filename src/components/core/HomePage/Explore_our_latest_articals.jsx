import React from 'react'
import img from "../../../assets/check_offers_img.png"

const Explore_our_latest_articals = () => {
  return (
    <div className=' mx-auto'>
        <div className='flex justify-center items-center font-extrabold text-5xl mt-10'>
                    <h1>Explore our latest Articles!</h1>
        </div>
        <div className=' w-[10%] mx-auto' >
                    <div className=' border-[#159A9C] border-b border-[5px] my-8'></div>
        </div>
        <div className=' flex justify-evenly items-center p-5'>
            <div className='border border-[#056e67] rounded-3xl w-[20%] flex flex-col gap-5 p-4'>
                <p className=' font-extrabold text-4xl'>45k</p>
                <p className='text-[17px] text-[#0000008a]'>people purchase cards everyday across the world and get benefits.</p>
                <div className='flex items-center'>
                    <img src={img} alt="" className=' rounded-full h-8' />
                    <p className='text-[10px]'>1.5k are benefitted from the credit cards offers!</p>
                </div>
            </div>
            <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[25%] flex flex-col gap-2 p-4'>
               <div className='flex flex-col gap-1'>
               <p  className=' font-extrabold text-4xl text-white'>Maximize</p>
               <p  className=' font-extrabold text-4xl text-white'>Credit Card</p>
               <p  className=' font-extrabold text-4xl text-white'>Rewards</p>
               </div>
               <p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p>
            </div>
            <div className='border border-[#056e67] rounded-3xl w-[20%] flex flex-col gap-5 p-4'>
                <p className=' font-extrabold text-4xl'>45k</p>
                <p className='text-[17px] text-[#0000008a]'>people purchase cards everyday across the world and get benefits.</p>
                <div className='flex items-center'>
                    <img src={img} alt="" className=' rounded-full h-8' />
                    <p className='text-[10px]'>1.5k are benefitted from the credit cards offers!</p>
                </div>
            </div>
        </div>

        <div className=' flex justify-evenly items-center p-5'>
            <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[25%] flex flex-col gap-2 p-4'>
               <div className='flex flex-col gap-1'>
               <p  className=' font-extrabold text-4xl text-white'>Maximize</p>
               <p  className=' font-extrabold text-4xl text-white'>Credit Card</p>
               <p  className=' font-extrabold text-4xl text-white'>Rewards</p>
               </div>
               <p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p>
            </div>
            <div className='border border-[#056e67] rounded-3xl w-[20%] flex flex-col gap-5 p-4'>
                <p className=' font-extrabold text-4xl'>45k</p>
                <p className='text-[17px] text-[#0000008a]'>people purchase cards everyday across the world and get benefits.</p>
                <div className='flex items-center'>
                    <img src={img} alt="" className=' rounded-full h-8' />
                    <p className='text-[10px]'>1.5k are benefitted from the credit cards offers!</p>
                </div>
            </div>
            <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[25%] flex flex-col gap-2 p-4'>
               <div className='flex flex-col gap-1'>
               <p  className=' font-extrabold text-4xl text-white'>Maximize</p>
               <p  className=' font-extrabold text-4xl text-white'>Credit Card</p>
               <p  className=' font-extrabold text-4xl text-white'>Rewards</p>
               </div>
               <p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p>
            </div>
        </div>
    </div>
  )
}

export default Explore_our_latest_articals
