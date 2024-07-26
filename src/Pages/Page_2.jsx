import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import IMG from "../assets/check_offers_img.png";
import Image from "../assets/Card_img.png";
import CardDetails from "../components/common/CardDetails";
import { fetchAllCard } from "../services/Operations/cardAPI";

const Page_2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetchAllCard()
      setCards(cardData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-10/12 mx-auto mt-16">
        <div className="flex gap-5 justify-center items-center">
          <div>
            <div>
              <img src={IMG} className="w-[150px] aspect-square" />
            </div>
            <div>
              <div className="border-[#159A9C] border-b border-[5px] w-[70%] mx-auto"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-black text-6xl mt-6">Find great deals here!</p>
            <p className="font-medium text-3xl max-w-[85%] opacity-50">
              Discover exclusive deals and special discounts available for a limited time.
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-20">
          <div className="grid grid-cols-2 gap-y-16 gap-x-24">
            {cards.map((card, index) => (
              <CardDetails Data={card} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page_2;
