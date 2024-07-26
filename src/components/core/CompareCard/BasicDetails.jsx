import React from 'react';
import { Table, Tbody, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const BasicDetails = ({ card1, selectedCard }) => {

    console.log("HIIIIIIIIIII", card1);

    const renderNetwork = (networks) => (
        networks?.map((item, i) => <p key={i}>{item?.name}</p>)
    );

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
                        { label: 'Card Type', cardKey: 'type', render: (data) => data?.[0] },
                        { label: 'Network Type', cardKey: 'network', render: renderNetwork },
                        { label: 'Best For', cardKey: 'bestFor', render: (data) => data?.name },
                    ].map((detail, index) => (
                        <Tr key={index}>
                            <Td className='py-5 px-5 opacity-50 font-medium w-1/3'>{detail.label}</Td>
                            <Td className='py-5 px-5 opacity-75 font-bold text-center w-1/3'>{detail.render(card1?.cardData?.[detail.cardKey])}</Td>
                            <Td className='py-5 px-5 opacity-75 font-bold text-center w-1/3'>{detail.render(selectedCard?.cardData?.[detail.cardKey])}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

export default BasicDetails;
