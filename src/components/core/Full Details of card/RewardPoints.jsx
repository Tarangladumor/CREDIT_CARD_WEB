import React from 'react'
import FEECHARGES from '../../../assets/FeeCharges_img.png'
import { Table, Tbody, Tr, Td, Thead, Th } from 'react-super-responsive-table'

const RewardPoints = ({ Data }) => {
    console.log(Data?.cardData?.rewards[0]?.points)

    return (
        <div className='mt-10'>
            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' />
                <h2 className='font-semibold text-[40px]'>Reward Points</h2>
            </header>

            <section className='w-10/12 mx-auto border-[5px] border-[#056E67] rounded-2xl px-16 shadow-[0px_20px_50px_10px_#00000040] py-5'>
                {Data?.cardData?.rewards[0]?.instruction && (
                    <p>{Data?.cardData?.rewards[0]?.instruction}</p>
                )}

                {Data?.cardData?.rewards[0]?.points.length > 0 ? (
                    <Table className='my-5'>
                        <Thead>
                            <Tr className="bg-[#159A9C1C] bg-opacity-35">
                                <Th className='py-3 text-left px-3 border-2 border-black'>Categories</Th>
                                <Th className='py-3 text-left px-3 border-2 border-black'>Reward point</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Data?.cardData?.rewards[0]?.points.map((item, i) => (
                                <Tr key={i} className="bg-[#159A9C1C] bg-opacity-35">
                                    <Td className='py-3 px-3 border-2 border-black'>{item?.key}</Td>
                                    <Td className='py-3 px-3 border-2 border-black'>{item?.value}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                ) : (
                    <div>No reward points available</div>
                )}

                {Data?.cardData?.rewards[0]?.listData.length > 0 ? (
                    <div>
                        <ul className="list-disc ml-10 mb-5">  {/* Added class for list style */}
                            {Data?.cardData?.rewards[0]?.listData.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>No additional data available</div>
                )}

                <p>*Note: Some transactions, such as fuel, EMI, insurance transaction are not eligible for reward points.</p>
            </section>
        </div>
    )
}

export default RewardPoints
