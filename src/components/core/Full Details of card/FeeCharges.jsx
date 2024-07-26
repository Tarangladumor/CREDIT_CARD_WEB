import React from 'react'
import FEECHARGES from '../../../assets/FeeCharges_img.png'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const FeeCharges = ({Data}) => {

    console.log("CHARGES...........",Data);

    return (
        <div>
            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' />
                <h2 className=' font-semibold text-[40px]'>Fee Charges</h2>
            </header>

            <section className=' w-10/12 mx-auto border-[5px] border-[#056E67] rounded-3xl px-16 shadow-[0px_20px_50px_10px_#00000040] py-8'>
                <div className=' opacity-55'>
                    <p className=' text-base font-normal'><span className='text-[#159A9C] font-bold'>*</span>Think of these as small investments to keep your credit card running smoothly</p>
                </div>

                <div className='py-10'>
                    <h3 className='font-semibold text-xl opacity-55'>CHARGES</h3>

                    <div className='pt-10 px-10'>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <Td className="py-5">
                                        <p className='font-medium text-sm opacity-60'>Joining Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.joiningFee}</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Annual Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.annualFee}</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Annual Percentage Rate</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.annualPercentageRate}%</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Add on CardFee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.addOnCardFee}</p>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td className='py-5'>
                                        <p className='font-medium text-sm opacity-60'>Minimum Repayment Amount</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.minimumRepaymentAmount}%</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Cash Withdrawal Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.cashWithdrawalFee}</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Cash Advance Limit</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.cashAdvanceLimit}</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Card Replacement Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.cardReplacementFee}</p>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td className='py-5'>
                                        <p className='font-medium text-sm opacity-60'>Foreign Transaction Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.foreignTransactionFee}%</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Over Limit Penalty</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.overLimitPenalty}%</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Fuel Transaction Fee</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.fuelTransactionSurcharge}%</p>
                                    </Td>
                                    <Td>
                                        <p className='font-medium text-sm opacity-60'>Reward Point Value</p>
                                        <p className='font-semibold text-base'>{Data?.cardData?.charges[0]?.rewardPointValue}%</p>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                </div>

                <div>

                    <h2 className='font-semibold text-xl opacity-55'>Fuel Transaction Fee</h2>

                    <p className='font-medium text-[13px] pt-5'>Any Amount Due</p>
                    <p className='font-semibold text-base'>15% of Total Amount Due subjects to a minimum of $50 and maximum of $100.</p>
                </div>
            </section>

        </div>
    )
}

export default FeeCharges
