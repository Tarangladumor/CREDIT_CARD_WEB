import React from 'react'
import FEECHARGES from '../../../assets/FeeCharges_img.png'

const Overview = () => {
    return (
        <div className='mt-20'>
            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' />
                <h2 className=' font-semibold text-[40px]'>Overview</h2>
            </header>

            <div className=' px-5 py-8 rounded-3xl bg-[#D2F4E4] flex justify-around items-start w-9/12 mx-auto shadow-[0px_20px_50px_10px_#00000040]'>

                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2'>
                        <p className='font-semibold text-xl'>Best for: </p>
                        <p className='font-medium text-xl opacity-60'>Lifestyle</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-semibold text-xl'>Joining Fee: </p>
                        <p className='font-medium text-xl opacity-60'>NIL</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-semibold text-xl'>Annual Fee:</p>
                        <p className='font-medium text-xl opacity-60'>NIL</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2'>
                        <p className='font-semibold text-xl'>Welcome Bonus: </p>
                        <p className='font-medium text-xl opacity-60'>Voucher worth $10 & cashback upto $100 </p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-semibold text-xl'>Card Network: </p>
                        <p className='font-medium text-xl opacity-60'>Rupay</p>
                    </div>

                </div>
            </div>

            <div className='mt-16 w-9/12 mx-auto'>
                <button className='bg-gradient-to-b from-[#056e67] to-[#159a9c] font-semibold text-3xl px-14 py-3 text-white rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>Compare</button>
                <p className='text-base font-medium opacity-55 mt-3'>*Now you can customize the compare by choosing your desired card.  </p>
            </div>
        </div>
    )
}

export default Overview
