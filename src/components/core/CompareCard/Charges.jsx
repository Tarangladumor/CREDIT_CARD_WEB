import React from 'react';
import { Table, Tbody, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Charges = ({ card1, selectedCard }) => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <Table className="table-striped text-2xl w-full">
                <Thead className="bg-[#159A9C]">
                    <Tr>
                        <Th colSpan="3" className="text-center py-5">Basic Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {[
                        { label: 'Joining Fee', key: 'joiningFee' },
                        { label: 'Annual Fee', key: 'annualFee' },
                        { label: 'Reward Point Value', key: 'rewardPointValue' },
                        { label: 'Annual Percentage Rate', key: 'annualPercentageRate' },
                        { label: 'Card Replacement Fee', key: 'cardReplacementFee' },
                        { label: 'Fuel Transaction Surcharge', key: 'fuelTransactionSurcharge' },
                    ].map((charge, index) => (
                        <Tr key={index}>
                            <Td className='py-5 px-5 opacity-50 font-medium w-1/3'>{charge.label}</Td>
                            <Td className='py-5 px-5 opacity-75 font-bold text-center w-1/3'>{card1?.cardData?.charges[0]?.[charge.key]}</Td>
                            <Td className='py-5 px-5 opacity-75 font-bold text-center w-1/3'>{selectedCard?.cardData?.charges[0]?.[charge.key]}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

export default Charges;
