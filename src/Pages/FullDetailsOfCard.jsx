import React, { useEffect, useState } from 'react'
import IMG from '../assets/two_cards.png'
import FullDetails from '../components/core/Full Details of card'
import { useLocation } from 'react-router-dom'
import { fetchOneCardDetails } from '../services/Operations/cardAPI'

const FullDetailsOfCard = () => {

    let location = useLocation();

    const pathParts = location.pathname.split('/');
    const cardId = pathParts[pathParts.length - 1];
    console.log("ID>>>>>>>>>>>>>>", cardId);

    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const cardDetails = await fetchOneCardDetails(cardId);
            setDetails(cardDetails);
        };

        fetchDetails();
    }, []);

    console.log(details);

    return (
        <div>

            <div className=' w-10/12 mx-auto mt-16'>
                <div className='flex gap-5 items-center'>

                    <div>
                        <div>
                            <img src={IMG} className=' w-[200px] aspect-square' />
                        </div>

                        <div>
                            <div className=' border-[#159A9C] border-b border-[5px]  w-[70%] mx-auto'></div>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-y-2 mt-4'>

                        <p className=' font-black text-7xl mt-6'>Here’s more <span className=' text-[#159A9C]'>information !</span></p>

                        <p className=' font-medium text-3xl opacity-50'>Get some more detailed information about the credit card!</p>
                    </div>
                </div>

            </div>

            <div>
                <FullDetails Details={details}/>
            </div>

        </div>
    )
}

export default FullDetailsOfCard
