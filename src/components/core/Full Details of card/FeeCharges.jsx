import React from 'react';
import FEECHARGES from '../../../assets/FeeCharges_img.png';

const FeeCharges = ({ Data }) => {

    console.log("CHARGES...........", Data);

    return (
        <div>
            <header className='flex flex-col md:flex-row justify-start items-center gap-4 md:gap-2 w-11/12 md:w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[100px] md:w-[125px] aspect-square' alt="Fee Charges" />
                <h2 className='font-semibold text-2xl md:text-[40px]'>Fee Charges</h2>
            </header>

            <section className='w-11/12 md:w-10/12 mx-auto border-[5px] border-[#056E67] rounded-3xl px-6 md:px-16 py-6 md:py-8 shadow-[0px_20px_50px_10px_#00000040]'>
                <div className='opacity-70 mb-4'>
                    <p className='text-sm md:text-base font-normal'>
                        <span className='text-[#159A9C] font-bold'>*</span> Think of these as small investments to keep your credit card running smoothly
                    </p>
                </div>

                <div className='py-8 md:py-10'>
                    <h3 className='font-semibold text-lg md:text-xl opacity-70'>CHARGES</h3>

                </div>

            </section>
        </div>
    )
}

export default FeeCharges;
