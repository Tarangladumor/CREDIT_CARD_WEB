import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div>

    
    <div className='w-full bg-[#f7f5fd]'>
      <div className='w-11/12 flex justify-around '>
      <div className=' items-center p-4 flex flex-col gap-4 mt-4'>
        <div className='text-4xl font-extrabold'>
            LOGO
        </div>
        <div className='text-2xl'>
            Follow Us
            <div className='flex gap-x-4 mt-3'>
                <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p>
                <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p>
                <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p> 
            </div>
            
        </div>
      </div>


      <div className=' flex flex-col p-4 gap-3 mt-4'>
        <div>
            <p className=' text-1xl font-medium'>Contact Us:</p>
            <p className=' text-[#374ab1] text-1xl font-medium w-[60%]'>support@yourcreditcardtool.com
            +1 234 567 8901</p>
        </div>

        <div>
            <p className=' text-1xl font-medium'>Address:</p>
            <p className='text-[#374ab1] text-1xl font-medium w-[80%]'>123 Financial Street, Suite 456, City,
            State, ZIP</p>
        </div>
      </div>


      <div className='p-4 flex flex-col gap-4 mt-4'>
        <p className='text-2xl font-semibold'>Newsletter Signup</p>
        <p className='text-1xl text-[#00000087] w-[80%]'>Get the latest offers and tips—subscribe to our 
        newsletter today.</p>

        <div class="relative h-10 w-full min-w-[200px] ">
                    <input
                    class="peer h-full w-full rounded-[12px] border border-[#159a9c] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#159a9c] placeholder-shown:border-t-[#159a9c] focus:border-2 focus:border-[#159a9c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Email " />
                    
                </div>
 
      </div>
      </div>
    </div>

    <div className='bg-[#056e67] h-16 flex justify-center items-center'>
        <p className=' text-white'>Terms of Service | Privacy Policy | DisclaimersTerms of Service | Privacy Policy | Disclaimers</p>
    </div>

    </div>
  )
}

export default Footer
