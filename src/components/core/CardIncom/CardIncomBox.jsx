import React from 'react'
import { Link } from 'react-router-dom'

const CardIncomBox = ({data}) => {
  return (
    <div className=''>
    <Link to={"/"}>
        <div className='p-10 border-2 border-[#159A9C] hover:scale-90 transition-all duration-200 rounded-lg flex flex-col justify-center items-center'>
            <img src={data?.img} alt="" className='h-[150px] w-[300px]' />
            <p className=' flex justify-center mt-5 text-[#0000008a] text-2xl'>{data?.text}</p>
        </div>
        </Link>
    </div>
  )
}

export default CardIncomBox
