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

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 md:pt-10 px-4 md:px-10'>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Joining Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.joiningFee}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Annual Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.annualFee}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Annual Percentage Rate</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.annualPercentageRate}%</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Add on Card Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.addOnCardFee}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Minimum Repayment Amount</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.minimumRepaymentAmount}%</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Cash Withdrawal Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.cashWithdrawalFee}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Cash Advance Limit</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.cashAdvanceLimit}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Card Replacement Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.cardReplacementFee}</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Foreign Transaction Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.foreignTransactionFee}%</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Over Limit Penalty</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.overLimitPenalty}%</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Fuel Transaction Fee</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.fuelTransactionSurcharge}%</p>
                        </div>
                        <div>
                            <p className='font-medium text-xs md:text-sm opacity-60'>Reward Point Value</p>
                            <p className='font-semibold text-sm md:text-base'>{Data?.cardData?.charges[0]?.rewardPointValue}%</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold text-xl opacity-55'>
                        Late Payment Charges
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {Data?.cardData?.charges[0]?.points?.map((point, index) => (
                            <div key={index} className='pt-5 px-4 md:px-10'>
                                <p className='font-medium text-[13px]'>{point?.key}</p>
                                <p className='font-semibold text-base'>{point?.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FeeCharges;
