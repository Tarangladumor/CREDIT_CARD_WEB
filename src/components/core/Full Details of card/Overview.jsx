import React from 'react';
import FEECHARGES from '../../../assets/FeeCharges_img.png';
import { Link } from 'react-router-dom';

const Overview = ({ Data }) => {
  return (
    <div className='mt-10 md:mt-16 lg:mt-20'>
      <header className='flex justify-start items-center gap-2 lg:w-10/12 mx-auto mb-5'>
        <img
          src={FEECHARGES}
          className='w-[60px] h-[60px] lg:w-[125px] lg:h-[125px] aspect-square'
          alt="Fee Charges"
        />
        <h2 className='font-semibold text-2xl lg:text-[40px]'>
          Overview
        </h2>
      </header>

      <div className='px-4 py-6 md:px-5 md:py-8 rounded-3xl bg-[#D2F4E4] flex flex-col md:flex-row justify-around items-start w-11/12 md:w-10/12 lg:w-9/12 mx-auto shadow-[0px_20px_50px_10px_#00000040]'>
        <div className='flex flex-col gap-2 mb-4 md:mb-0'>
          <div className='flex gap-2'>
            <p className='font-semibold text-lg md:text-xl'>Best for:</p>
            <p className='font-medium text-lg md:text-xl opacity-60'>
              {Data?.cardData?.bestFor}
            </p>
          </div>

          <div className='flex gap-2'>
            <p className='font-semibold text-lg md:text-xl'>Joining Fee:</p>
            <p className='font-medium text-lg md:text-xl opacity-60'>
              {Data?.cardData?.charges[0]?.joiningFee}
            </p>
          </div>

          <div className='flex gap-2'>
            <p className='font-semibold text-lg md:text-xl'>Annual Fee:</p>
            <p className='font-medium text-lg md:text-xl opacity-60'>
              {Data?.cardData?.charges[0]?.annualFee}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <p className='font-semibold text-lg md:text-xl'>Welcome Bonus:</p>
            <p className='font-medium text-lg md:text-xl opacity-60'>
              Voucher worth $10 & cashback up to $100
            </p>
          </div>

          <div className='flex gap-2'>
            <p className='font-semibold text-lg md:text-xl'>Card Network:</p>
            {Data?.cardData?.network.map((network, i) => (
              <p className='font-medium text-lg md:text-xl opacity-60' key={i}>
                {network?.name},{' '}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10 md:mt-16 w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
        <Link to={`/cardComparison/${Data?.cardData?._id}`}>
          <button className='w-full md:w-auto bg-gradient-to-b from-[#056e67] to-[#159a9c] font-semibold text-xl md:text-2xl lg:text-3xl px-8 md:px-14 py-3 text-white rounded-xl lg:rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
            Compare
          </button>
        </Link>
        <p className='text-sm md:text-base font-medium opacity-55 mt-3 text-center md:text-left'>
          *Now you can customize the compare by choosing your desired card.
        </p>
      </div>
    </div>
  );
};

export default Overview;
