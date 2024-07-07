import React from 'react'
// import img from "../../assets/check_offers_img.png"

const FindGreatDeal = ({img,heading,desc}) => {
  return (
    <div className=' mx-auto flex justify-center items-center'>
        <div className=' border-b-8 border-b-blue-500 w-[10%] rounded'>
            <img src={img} alt="" className=' h-[200px] w-[200px]' />
        </div>
        <div className='flex flex-col justify-center p-10'>
            <p className=' font-black text-[75px]'>{heading}</p>
            <p className=' text-[#0000008a] text-[20px] '>{desc}</p>
        </div>
    </div>
  )
}

export default FindGreatDeal
