import React from "react";
import { RiVipFill, RiVipCrown2Fill } from "react-icons/ri";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { HiCreditCard } from "react-icons/hi2";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { Link } from "react-router-dom";
import NETWORKICON from '../../../assets/Network Icon.png'
import VIPICON from '../../../assets/VIP ICON.png'
import INCOMEICON from '../../../assets/Income Icon.png'

const Choose_your_preference = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center items-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10">
          <h1>Choose your preference</h1>
        </div>

        <div className="w-[60%] sm:w-[40%] md:w-[30%] lg:w-[20%] mx-auto">
          <div className="border-[#159A9C] border-b border-[5px] my-8 sm:my-10 md:my-12"></div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <div className="bg-[#DEEFE7] py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 rounded-2xl">
            <Link to='/cardByPrivilege' className="text-center flex flex-col gap-y-5">
              {/* <div className="relative text-[#159A9C] flex justify-center">
                <BsFillCreditCard2BackFill className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
                <RiVipCrown2Fill
                  size={15}
                  className="absolute top-0 left-8 sm:left-10"
                />
                <RiVipFill
                  size={50}
                  className="absolute top-12 left-10 sm:top-14 sm:left-12"
                />
              </div> */}
              <div className="flex justify-center">
                <img src={VIPICON} alt="vip icon"/>
              </div>
              <p className="font-semibold text-xl sm:text-2xl md:text-3xl max-w-[70%] mx-auto">
                Credit Card by Privilege
              </p>
            </Link>
          </div>

          <div className="bg-[#DEEFE7] py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 rounded-2xl">
            <Link to='/cardByNetwork' className="text-center flex flex-col gap-y-5">
              {/* <div className="relative text-[#159A9C] flex justify-center">
                <HiCreditCard className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10" />
                <HiCreditCard className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl top-0 sm:-top-2 md:-top-4 left-4 sm:left-6 md:left-8 z-5" />
              </div> */}
              <div className="flex justify-center">
                <img src={NETWORKICON} alt="Network icon"/>
              </div>
              <p className="font-semibold text-xl sm:text-2xl md:text-3xl max-w-[70%] mx-auto">
                Credit Card by Network
              </p>
            </Link>
          </div>

          <div className="bg-[#DEEFE7] py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 rounded-2xl">
            <Link to='/cardByIncome' className="text-center flex flex-col gap-y-5">
              {/* <div className="text-[#159A9C] flex justify-center">
                <BiSolidCreditCardFront className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
              </div> */}
              <div className="flex justify-center">
                <img src={INCOMEICON} alt="income icon"/>
              </div>
              <p className="font-semibold text-xl sm:text-2xl md:text-3xl max-w-[70%] mx-auto">
                Credit Card by Income
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose_your_preference;
