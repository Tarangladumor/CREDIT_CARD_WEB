import React from 'react'
import { Table, Tbody, Thead, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import TRUE from '../../../assets/true_green.png'
import FALSE from '../../../assets/false_red.png'

const Benefits = ({ card1, selectedCard }) => {
    const renderBenefit = (benefit) => {
        const card1HasBenefit = card1?.cardData?.includedBnefits.includes(benefit);
        const selectedCardHasBenefit = selectedCard?.cardData?.includedBnefits.includes(benefit);

        return (
            <Tr className="border-b border-gray-900">
                <Td className='py-5 px-5 opacity-50 font-medium'>{benefit}</Td>
                <Td className='py-5 px-5 font-bold text-center'>
                    {card1HasBenefit ? <img src={TRUE} alt='true image' className='h-12 w-12' /> : <img src={FALSE} alt='false image' className='h-12 w-12' />}
                </Td>
                <Td className='py-5 px-5 font-bold text-center'>
                    {selectedCard ?
                        (selectedCardHasBenefit ? <img src={TRUE} alt='true image' className='h-12 w-12 mx-auto' /> : <img src={FALSE} alt='false image' className='h-12 w-12 mx-auto' />)
                        : null}
                </Td>
            </Tr>
        );
    }

    return (
        <div className='w-11/12 mx-auto mt-20'>
            <Table className="table-striped text-2xl">
                <Thead className="bg-[#159A9C]">
                    <Tr>
                        <Th colSpan="3" className="text-center py-5">Features and Benefits</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderBenefit('Dining')}
                    {renderBenefit('Shopping')}
                    {renderBenefit('Rewards')}
                    {renderBenefit('Lounge')}
                    {renderBenefit('Travel')}
                    {renderBenefit('Cashback')}
                    {renderBenefit('Fuel')}
                </Tbody>
            </Table>
        </div>
    )
}

export default Benefits
