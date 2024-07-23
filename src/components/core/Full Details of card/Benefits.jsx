import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import CARDS from '../../../assets/Cards_imag.png';
import IMG1 from '../../../assets/Benefits_img1.png';
import IMG2 from '../../../assets/Benefits_img2.png';
import IMG3 from '../../../assets/Benefits_img3.png';

const benefits = [
    {
        img: IMG1,
        title: "Welcome Bonus",
        benefitList: [
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance",
            "5% cashback upto $20 on EMI transaction within first 90 days.",
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance"
        ]
    },
    {
        img: IMG2,
        title: "Reward Points",
        benefitList: [
            "10X reward points on expenses over $250",
            "10x rewards points on transaction made on your birthday.",
            "Reward Rate = 0.6% to 2%",
            "6X on every offline transaction.",
            "10x on every online transaction."
        ]
    },
    {
        img: IMG3,
        title: "Travel Benefits",
        benefitList: [
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance",
            "5% cashback upto $20 on EMI transaction within first 90 days.",
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance"
        ]
    },
    {
        img: IMG1,
        title: "Welcome Bonus",
        benefitList: [
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance",
            "5% cashback upto $20 on EMI transaction within first 90 days.",
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance"
        ]
    },
    {
        img: IMG2,
        title: "Reward Points",
        benefitList: [
            "10X reward points on expenses over $250",
            "10x rewards points on transaction made on your birthday.",
            "Reward Rate = 0.6% to 2%",
            "6X on every offline transaction.",
            "10x on every online transaction."
        ]
    },
    {
        img: IMG3,
        title: "Travel Benefits",
        benefitList: [
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance",
            "5% cashback upto $20 on EMI transaction within first 90 days.",
            "Gift Voucher worth $50 after spending $500 or more within 30 days of card issuance"
        ]
    }
];

const Benefits = () => {
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
                {
                    benefits.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-[#D2F4E4] rounded-tl-3xl rounded-br-3xl p-10 h-[400px] flex flex-col gap-3 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] mb-24'>

                                <div className='flex justify-start items-baseline'>
                                    <img src={card.img} className='w-[70px] aspect-square' />
                                    <h3 className='font-semibold text-2xl pb-3'>{card.title}</h3>
                                </div>

                                <section>
                                    <ul className='list-disc list-inside px-10 flex flex-col gap-y-5'>
                                        {
                                            card.benefitList.map((item, index) => (
                                                <li key={index} className='font-semibold text-sm'>
                                                    {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
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
