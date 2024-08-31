import React, { useEffect, useState } from 'react';
import CardType from '../../common/CardType';
import { fetchAllPrivilege } from '../../../services/Operations/cardAPI';

const CardSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllPrivilege();
            setCards(data);
        };

        fetchData();
    }, []);

    console.log(cards);

    const card = [cards[0], cards[1]];

    return (
        <div className='bg-[#f7f5fd] p-5 md:p-10'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='text-[#159a9c] text-lg md:text-xl w-full md:w-11/12 mx-auto'>
                    <p>Most opted Card based on Income</p>
                    <div className='w-[30%] md:w-[20%] mt-[-25px] md:mt-[-35px]'>
                        <div className='border-[#159A9C] border-b border-[1px] my-8 md:my-12'></div>
                    </div>
                </div>
                <div className='w-full md:w-11/12 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-24 gap-y-8'>
                        {card.map((data, i) => (
                            <CardType key={i} data={data} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-10 w-11/12 md:w-10/12 mx-auto'>
                <div className='text-[#159a9c] text-lg md:text-xl w-full md:w-11/12 mx-auto'>
                    <p>All Card networks</p>
                    <div className='w-[20%] md:w-[10%] mt-[-25px] md:mt-[-35px]'>
                        <div className='border-[#159A9C] border-b border-[1px] my-8 md:my-12'></div>
                    </div>
                </div>
                <div className='w-full md:w-11/12 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-24 gap-y-8 md:gap-y-16'>
                        {cards.map((data, i) => (
                            <CardType key={i} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
