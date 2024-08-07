import React, { useEffect, useState } from 'react'
import IMG from "../../../assets/check_offers_img.png"
import Image from "../../../assets/Card_img.png"
import CardDetails from '../../common/CardDetails'
import { useNavigate } from 'react-router-dom'
import { fetchAllCard } from '../../../services/Operations/cardAPI'


const Check_Offers = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const cardData = await fetchAllCard()
          setCards(cardData);
        };
    
        fetchData();
      }, []);

      console.log(cards);

    const navigate = useNavigate()
    return (
        <div>
            <div className=' w-3/4 mx-auto mt-16'>

                <div className='flex gap-5 items-center'>

                    <div>
                        <div>
                            <img src={IMG} className=' w-[150px] aspect-square' />
                        </div>

                        <div>
                            <div className=' border-[#159A9C] border-b border-[5px]  w-[70%] mx-auto'></div>
                        </div>
                    </div>

                    <div>

                        <p className=' font-black text-6xl'>CHECK ALL </p>

                        <p className=' font-black text-6xl'>AVAILABLE OFFERS </p>
                    </div>
                </div>

                <div className=' opacity-55 font-medium text-2xl mt-10 ml-10 max-w-[50%]'>
                    Explore exclusive partner deals, available for a limited time only.
                </div>
            </div>

            <div className='w-3/4 mx-auto mt-14'>
                <div className='grid grid-cols-2 gap-y-16 gap-x-24'>
                    {
                        cards.slice(0,2).map((Data, i) => (
                            <CardDetails key={i} Data={Data} />
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center items-center mt-14 mb-14'>
                <button onClick={() => navigate('/more-cards')} className=' border-[8px] border-[#159A9C] rounded-full px-10 py-3 shadow-[0px_20px_50px_10px_#00000040]'>
                    <p className=' font-medium text-xl'>Discover More</p>
                </button>
            </div>
        </div>
    )
}

export default Check_Offers
