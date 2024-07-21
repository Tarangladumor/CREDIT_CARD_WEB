import React, { useState } from 'react';
import LIMITED from '../../assets/limited_offer_img.png';
import ReviewImg from '../../assets/home section img2.jpg';

const CardDetails = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative'>
      {isHovered && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10'></div>
      )}
      <div
        className={`bg-[#D2F4E4] flex flex-col gap-5 rounded-tr-3xl rounded-bl-3xl transition-all duration-300 ease-in-out relative ${isHovered ? 'h-auto z-20 scale-105 shadow-2xl' : 'h-[500px]'} overflow-hidden transform`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex justify-between relative'>
          <img src={LIMITED} width={100} height={100} className='absolute -top-8 -left-5' alt='Limited Offer' />
          <p className='absolute right-20 top-10 font-medium text-xl'>{Data?.bank}</p>
        </div>

        <div className='rotate-15 w-full flex justify-center'>
          <img src={Data?.image} height={300} width={300} className='mt-12' alt={`${Data?.title} Card`} />
        </div>

        <div className='flex flex-col gap-2 px-12'>
          <div className='flex justify-between'>
            <p className='font-medium text-xl'>{Data?.title}</p>
            <p className='font-medium text-xl'>APR: {Data?.APR}%</p>
          </div>
          <p className='font-medium text-xl'>Annual Fee: ${Data?.annualFees}</p>
          <p className='text-[#8A8C17] font-medium text-xl'>
            Rewards: <span className='text-black'>{Data?.rewards}</span>
          </p>
        </div>

        {isHovered &&
          <div className={`flex flex-col gap-2 px-12 pb-10 transition-all duration-300 ease-in-out ${isHovered ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            <p className='font-medium text-2xl'>Earning Rate: 3x Travel Points</p>

            <div className='font-medium text-xl'>
              <ul className='list-disc ml-5'>
                <li>Travel Insurance</li>
                <li>Purchase Protection</li>
                <li>Extended warranty</li>
                <li>Airport lounge access</li>
              </ul>
            </div>
          </div>}

        {isHovered && <div className='border-[#159A9C] border-b border-[0.5px] w-[82%] mx-auto'></div>}

        <div className={`flex flex-col gap-2 px-12 pb-10 transition-all duration-300 ease-in-out ${isHovered ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <p className='text-xl font-medium'>User Reviews and Ratings:</p>

          {isHovered && (
            <div>
              <p>See what our top customer has to say?</p>
              {Data?.reviews.map((review, index) => (
                <div key={index} className='flex gap-1'>
                  <img src={ReviewImg} alt='review image' className='w-5 h-5 aspect-square rounded-full' />
                  <p className='text-xs opacity-75'>{review}</p>
                </div>
              ))}

              <div className='flex gap-5 mt-5'>
                <button className='bg-[#F77F00] text-base font-semibold px-5 py-2 rounded-full text-white shadow-[0px_30px_35px_10px_#00000060]'>
                  Apply Now
                </button>

                <button className='border-[5px] rounded-full bg-transparent border-[#159A9C]  shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060] text-base font-semibold px-5 py-2'>
                  More Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
