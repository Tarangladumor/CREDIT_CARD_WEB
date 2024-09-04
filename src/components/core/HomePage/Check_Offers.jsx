import React, { useEffect, useState } from 'react';
import IMG from "../../../assets/check_offers_img.png";
import CardDetails from '../../common/CardDetails';
import { useNavigate } from 'react-router-dom';
import { fetchAllCard } from '../../../services/Operations/cardAPI';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Check_Offers = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cardData = await fetchAllCard();
            setCards(cardData);
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <div className='w-11/12 md:w-4/5 lg:w-3/4 mx-auto mt-8 md:mt-12 lg:mt-16'>
                <div className='flex flex-col lg:flex-row gap-5 items-center'>
                    <div>
                        <div>
                            <img src={IMG} className='w-[100px] md:w-[130px] lg:w-[150px] aspect-square' />
                        </div>
                        <div className='mt-2'>
                            <div className='border-[#159A9C] border-b-4 md:border-b-[5px] w-[50%] md:w-[60%] lg:w-[70%] mx-auto'></div>
                        </div>
                    </div>

                    <div className='text-center lg:text-left'>
                        <p className='font-black text-4xl md:text-5xl lg:text-6xl'>CHECK ALL</p>
                        <p className='font-black text-4xl md:text-5xl lg:text-6xl'>AVAILABLE OFFERS</p>
                    </div>
                </div>

                <div className='opacity-70 font-medium text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 lg:mt-10 ml-4 md:ml-6 lg:ml-10 max-w-[90%] md:max-w-[70%] lg:max-w-[50%]'>
                    Explore exclusive partner deals, available for a limited time only.
                </div>
            </div>

            {/* For medium screens */}
            <div className='w-11/12 md:w-4/5 lg:hidden mx-auto mt-10 md:mt-12 lg:mt-14'>
                <div className='hidden md:block'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        className='w-full'
                    >
                        {cards.map((Data, i) => (
                            <SwiperSlide key={i} className='!w-[80%] md:!w-[70%]'>
                                <CardDetails Data={Data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='md:hidden'>
                    <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
                        {cards.map((Data, i) => (
                            <SwiperSlide key={i}>
                                <CardDetails Data={Data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* For large screens */}
            <div className='hidden lg:block w-3/4 mx-auto mt-14'>
                <div className='grid grid-cols-2 gap-y-16 gap-x-24'>
                    {cards.slice(0, 2).map((Data, i) => (
                        <CardDetails key={i} Data={Data} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center mt-10 md:mt-12 lg:mt-14 mb-10 md:mb-12 lg:mb-14'>
                <button onClick={() => navigate('/more-cards')} className='border-4 md:border-[6px] lg:border-[8px] border-[#159A9C] rounded-full px-8 md:px-10 lg:px-12 py-2 md:py-3 lg:py-4 shadow-[0px_10px_25px_5px_#00000040] md:shadow-[0px_15px_35px_7px_#00000040] lg:shadow-[0px_20px_50px_10px_#00000040]'>
                    <p className='font-medium text-lg md:text-xl lg:text-2xl'>Discover More</p>
                </button>
            </div>
        </div>
    );
};

export default Check_Offers;
