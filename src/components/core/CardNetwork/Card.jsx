import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  if (!data) {
    return null; // or a loading spinner or placeholder
  }

  return (
    <div className=''>
      <Link to={`/cardByNetwork/${data.name}/${data._id}`}>
        <div className='p-10 border-2 border-[#159A9C] hover:scale-90 transition-all duration-200 rounded-lg flex flex-col justify-center items-center'>
          <img src={data.image} alt="" className='h-[100px] w-[300px]' />
          <p className='flex justify-center mt-5 text-[#0000008a] text-2xl'>{data.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
