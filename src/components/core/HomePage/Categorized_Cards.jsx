import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import CARD_IMAGES from '../../../assets/card group.png'
import AXIS_BANK_CARD from "../../../assets/axis card image.jpg"
import { fetchAllProvider } from '../../../services/Operations/cardAPI';
import { Link } from 'react-router-dom';

const CardData = [
  {
    title: "AXIS BANK",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  },
  {
    title: "HDFC",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  },
  {
    title: "AXIS BANK",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  },
  {
    title: "HDFC",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  },
  {
    title: "AXIS BANK",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  },
  {
    title: "HDFC",
    offers: 50,
    purchased: 1.5,
    image: CARD_IMAGES,
    button: "Explore More"
  }
]

const Categorized_Cards = () => {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllProvider();
      setBanks(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(banks);

  return (
    <div>

      <div className=' w-10/12 mx-auto'>

        <div>
          <h1 className='flex justify-center items-center font-extrabold text-5xl mt-10'>Categorized Cards</h1>
        </div>

        <div className=' w-[20%] mx-auto' >
          <div className=' border-[#159A9C] border-b border-[5px] my-8'></div>
        </div>

        <div className='my-24'>

          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
              }}
              loop={true}
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
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {
                banks.map((card) => (
                  <SwiperSlide>
                    <div className='bg-[#DEEFE7] rounded-3xl '>
                      <div className=' w-[80%] mx-auto py-7 flex flex-col gap-y-1 '>
                        <h2 className=' text-3xl text-[#002333] opacity-30 font-bold'>{card.name}</h2>

                        <p className=' text-xs font-medium'>{card.card.length}+ Cards includes Offers</p>

                        <p className=' text-xs font-medium'>{card.card.length}k has purchased in last 1 month</p>

                        <img alt='card Image' src={card.image} className='flex justify-center items-center h-[200px] w-[200px] py-5' />

                        <div className='flex justify-center'>
                          <Link to={`/cardByBank/${card.name}/${card._id}`}>
                            <button className=' bg-[#159A9C] py-2 px-8 text-white text-lg font-semibold rounded-full mb-3'>Explore More</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </>
        </div>
      </div>

    </div>
  )
}

export default Categorized_Cards
