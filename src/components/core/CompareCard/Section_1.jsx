import React from 'react'
import img from '../../../assets/phoneUser.png'
import img1 from "../../../assets/Card_img.png"

const Section_1 = () => {
  return (
    <div className='flex justify-around mb-16 w-11/12 mt-10'>
      <div className='border-r-4'>
        <img src={img} alt="" className='w-[425px] h-[300px] mr-7' />
      </div>
      <div className=' border-r-2 flex flex-col items-center ml-[-175px]'>
        <img src={img1} alt="" height={300} width={300} className='rotate-15 mr-7' />
        <p className='text-[#000000ab] font-medium text-1xl'>Rupay Credit Card</p>
        <button className=' border-[8px] border-[#159A9C] rounded-full px-5 py-2 shadow-[0px_20px_50px_10px_#00000040] mt-3'>
            <p className=' font-medium text-sm'>More Details</p>
        </button>
      </div>
      <div className='flex flex-col items-center ml-[-125px]'>
      <div className=''>
        <p className='text-[#000000ab] text-xl '>Add 2nd Card</p>
      </div>
      <div>
        <select name="" id="" className=' p-3 bg-[#d9d9d97a] rounded-md font-semibold w-[250px] mt-5'>
            <option value="" className='text-[#000000]'>Pick a card</option>
        </select>
      </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default Section_1
