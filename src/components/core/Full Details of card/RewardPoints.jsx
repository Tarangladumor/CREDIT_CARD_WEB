import React from 'react';
import FEECHARGES from '../../../assets/FeeCharges_img.png';

const RewardPoints = ({ Data }) => {
    console.log(Data?.cardData?.rewards[0]?.points);

    return (
        <div className='mt-10 px-4 lg:px-0'>
            <header className='flex justify-start items-center gap-2 lg:w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[60px] h-[60px] lg:w-[125px] lg:h-[125px] aspect-square' alt="Fee Charges" />
                <h2 className='font-semibold text-2xl lg:text-[40px]'>Reward Points</h2>
            </header>

            <section className='w-full lg:w-10/12 mx-auto border-[3px] lg:border-[5px] border-[#056E67] rounded-2xl px-4 lg:px-16 py-4 lg:py-5 shadow-lg lg:shadow-[0px_20px_50px_10px_#00000040]'>
                {Data?.cardData?.rewards[0]?.instruction && (
                    <p className='text-sm lg:text-base'>{Data?.cardData?.rewards[0]?.instruction}</p>
                )}

                {Data?.cardData?.rewards[0]?.points.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className='my-3 lg:my-5 w-full border-collapse'>
                            <thead>
                                <tr className="bg-[#159A9C1C] bg-opacity-35">
                                    {/* <th className='py-2 lg:py-3 text-left px-2 lg:px-3 border-2 border-black'>Categories</th>
                                    <th className='py-2 lg:py-3 text-left px-2 lg:px-3 border-2 border-black'>Reward Points</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {Data?.cardData?.rewards[0]?.points.map((item, i) => (
                                    <tr key={i} className="bg-[#159A9C1C] bg-opacity-35">
                                        <td className='py-2 lg:py-3 px-2 lg:px-3 border-2 border-black'>{item?.key}</td>
                                        <td className='py-2 lg:py-3 px-2 lg:px-3 border-2 border-black'>{item?.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className='my-4'></div>
                )}

                {Data?.cardData?.rewards[0]?.listData.length > 0 ? (
                    <div className='my-4'>
                        <ul className="list-disc ml-5 lg:ml-10 text-sm lg:text-base">
                            {Data?.cardData?.rewards[0]?.listData.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className='my-4'></div>
                )}

                {Data?.cardData?.rewards[0]?.note && (
                    <p className='text-sm lg:text-base'>{Data?.cardData?.rewards[0]?.note}</p>
                )}
            </section>
        </div>
    );
}

export default RewardPoints;
