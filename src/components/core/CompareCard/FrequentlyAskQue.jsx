import React from 'react'
import img from "../../../assets/cardcharge.png"
import img1 from "../../../assets/questionmark.png"
import { Link } from 'react-router-dom'
import TermsCondition from '../../common/TermsCondition'

const FrequentlyAskQue = () => {
  return (
    <div className=' w-11/12 mx-auto'>
    <div className='flex items-center'>
        <div className='border-b-8 border-b-blue-500 w-[10%] rounded'>
            <img src={img} alt="" />
        </div>
        <div className='font-black text-[50px]'>
            <p>Frequently Asked Question</p>
        </div>
    </div>
     

      <div>
        <div className='flex flex-col mt-7 border-4 border-[#056e67] p-3 ml-[5rem] m-5'>
            <div className='flex items-center'>
                <img src={img1} className='h-[40px] w-[40px]' alt="" />
                <p className='ml-3 text-xl font-medium'>How do I redeem my credit card rewards?</p>
            </div>
            <div className='ml-14 w-[60%]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
        </div>

        <div className='flex flex-col mt-7 border-4 border-[#056e67] p-3 ml-[5rem] m-5'>
            <div className='flex items-center'>
                <img src={img1} className='h-[40px] w-[40px]' alt="" />
                <p className='ml-3 text-xl font-medium'>How do I redeem my credit card rewards?</p>
            </div>
            <div className='ml-14 w-[60%]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
        </div>

        <div className='flex flex-col mt-7 border-4 border-[#056e67] p-3 ml-[5rem] m-5'>
            <div className='flex items-center'>
                <img src={img1} className='h-[40px] w-[40px]' alt="" />
                <p className='ml-3 text-xl font-medium'>How do I redeem my credit card rewards?</p>
            </div>
            <div className='ml-14 w-[60%]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default FrequentlyAskQue
