import React from 'react';
import TRUE from '../../../assets/true_green.png';
import FALSE from '../../../assets/false_red.png';

const Benefits = ({ card1, selectedCard }) => {
    const renderBenefit = (benefit, index) => {
        const card1HasBenefit = card1?.cardData?.includedBnefits.includes(benefit);
        const selectedCardHasBenefit = selectedCard?.cardData?.includedBnefits.includes(benefit);

        return (
            <tr key={benefit} className={`border-b border-gray-900 ${index % 2 === 0 ? 'bg-[#159A9C36] bg-opacity-25' : 'bg-white'}`}>
                <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-50 font-medium text-sm md:text-base lg:text-lg'>
                    {benefit}
                </td>
                <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 font-bold text-center'>
                    {card1HasBenefit ? (
                        <img src={TRUE} alt='true' className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12' />
                    ) : (
                        <img src={FALSE} alt='false' className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12' />
                    )}
                </td>
                <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 font-bold text-center'>
                    {selectedCard ? (
                        selectedCardHasBenefit ? (
                            <img src={TRUE} alt='true' className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-auto' />
                        ) : (
                            <img src={FALSE} alt='false' className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-auto' />
                        )
                    ) : null}
                </td>
            </tr>
        );
    };

    return (
        <div className='w-full md:w-11/12 mx-auto mt-10 md:mt-20'>
            <table className="w-full text-sm md:text-lg lg:text-2xl border-collapse">
                <thead className="bg-[#159A9C]">
                    <tr>
                        <th colSpan="3" className="text-center py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-2xl">
                            Features and Benefits
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {['Dining', 'Shopping', 'Rewards', 'Lounge', 'Travel', 'Cashback', 'Fuel'].map((benefit, index) => renderBenefit(benefit, index))}
                </tbody>
            </table>
        </div>
    );
}

export default Benefits;
