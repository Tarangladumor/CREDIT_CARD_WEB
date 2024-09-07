import React, { useEffect, useState } from 'react'
import CardDetails from '../../common/CardDetails'
import { useLocation } from 'react-router-dom'
import IMG from "../../../assets/check_offers_img.png";
import { fetchAllCardByIncome } from '../../../services/Operations/cardAPI';
import Footer from '../../common/Footer';

const CardsByIncome = () => {

    let location = useLocation();

    const pathParts = location.pathname.split('/');
    const incomeId = pathParts[pathParts.length - 1];
    console.log("ID>>>>>>>>>>>>>>", incomeId);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cardData = await fetchAllCardByIncome({ incomeId });
            setCards(cardData);
        }

        fetchData();
        window.scrollTo({
            top: 0,              // Scroll to the top of the page
            behavior: 'smooth'   // Smooth scroll effect
        });
    }, [])

    return (
        <div>
            <div className="w-11/12 lg:w-10/12 mx-auto mt-8 lg:mt-16">
                <div className="flex flex-col lg:flex-row gap-5 justify-center items-center text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <img src={IMG} className="w-[100px] lg:w-[150px] aspect-square mx-auto lg:mx-0" />
                        <div className="border-[#159A9C] border-b-4 lg:border-b-8 w-[50%] lg:w-[70%] mx-auto lg:mx-0 mt-2 lg:mt-4"></div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-4 lg:ml-8">
                        <p className="font-black text-4xl lg:text-6xl mt-4 lg:mt-6">Find great deals here!</p>
                        <p className="font-medium text-xl lg:text-3xl max-w-full lg:max-w-[85%] opacity-70 lg:opacity-50">
                            Discover exclusive deals and special discounts available for a limited time.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-11/12 mx-auto mt-12 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-24">
                        {cards.map((card, index) => (
                            <CardDetails Data={card} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CardsByIncome
