import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import CARDS from '../../../assets/Cards_imag.png';
import IMG2 from '../../../assets/Benefits_img2.png';

const Benefits = ({ Data }) => {
    
    const benefits = Data?.additionalBenefits[0] || {};

    return (
        <div className='mb-20'>
            <div className='flex justify-start items-center gap-2 w-10/12 mx-auto'>
                <div>
                    <div>
                        <img src={CARDS} className='w-[100px] aspect-square' />
                    </div>
                    <div>
                        <div className='border-[#159A9C] border-b-4 w-[70%] mx-auto'></div>
                    </div>
                </div>
                <div className='pt-5'>
                    <h2 className='font-semibold text-[40px]'>Other benefits</h2>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper w-11/12 mt-10"
            >
                {Object.entries(benefits)
                    .filter(([key, value]) =>
                        Array.isArray(value) &&
                        value.some(item => Array.isArray(item.listData) && item.listData.length > 0)
                    )
                    .map(([key, value]) => (
                        <SwiperSlide key={key}>
                            <div className='bg-[#D2F4E4] rounded-tl-3xl rounded-br-3xl p-10 h-[400px] flex flex-col gap-3 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] mb-24'>
                                <div className='flex justify-start items-end gap-4'>
                                    <img src={IMG2} className='w-[70px] aspect-square' />
                                    <h3 className='font-semibold text-2xl pb-3'>{key}</h3>
                                </div>
                                <section>
                                    <ul className='list-disc list-inside px-10 flex flex-col gap-y-5'>
                                        {value.map((item, index) => (
                                            Array.isArray(item.listData) && item.listData.length > 0 ? (
                                                item.listData.map((listItem, subIndex) => (
                                                    <li key={subIndex} className='font-semibold text-sm'>
                                                        {listItem}
                                                    </li>
                                                ))
                                            ) : null
                                        ))}
                                    </ul>
                                    {value.some(item => item.note) && (
                                        <p className='text-sm mt-4'>
                                            {value.find(item => item.note)?.note}
                                        </p>
                                    )}
                                </section>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Benefits;
