import React from 'react';

const Charges = ({ card1, selectedCard }) => {
    return (
        <div className='w-full md:w-11/12 mx-auto mt-10 md:mt-20'>
            <table className="w-full text-sm md:text-lg lg:text-2xl border-collapse">
                <thead className="bg-[#159A9C]">
                    <tr>
                        <th colSpan="3" className="text-center py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-2xl">
                            Basic Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { label: 'Joining Fee', key: 'joiningFee' },
                        { label: 'Annual Fee', key: 'annualFee' },
                        { label: 'Reward Point Value', key: 'rewardPointValue' },
                        { label: 'Annual Percentage Rate', key: 'annualPercentageRate' },
                        { label: 'Card Replacement Fee', key: 'cardReplacementFee' },
                        { label: 'Fuel Transaction Surcharge', key: 'fuelTransactionSurcharge' },
                    ].map((charge, index) => (
                        <tr key={index} className={`border-b border-gray-900 ${index % 2 === 0 ? 'bg-[#159A9C36] bg-opacity-25' : 'bg-white'}`}>
                            <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-50 font-medium w-1/3 text-xs md:text-sm lg:text-base'>
                                {charge.label}
                            </td>
                            <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-75 font-bold text-center w-1/3 text-xs md:text-sm lg:text-base'>
                                {card1?.cardData?.charges[0]?.[charge.key]}
                            </td>
                            <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-75 font-bold text-center w-1/3 text-xs md:text-sm lg:text-base'>
                                {selectedCard?.cardData?.charges[0]?.[charge.key]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Charges;
