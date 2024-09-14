import React from "react";
import VISA from "../../../assets/Visa.png";
import CHIP from "../../../assets/Chip.png";
import MASTER from "../../../assets/mastercard.png";
import IMG1 from "../../../assets/home Section 1 image.jpg";
import IMG2 from "../../../assets/home section img2.jpg";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#056E67] text-white overflow-hidden h-auto xl:h-[calc(100vh-75px)]">
      <div className="flex flex-col md:flex-row justify-evenly lg:mt-10">
        <div className="w-full lg:max-w-[45%] flex flex-col mt-8 gap-3 ml-5 lg:ml-10">
          <p className="font-extrabold text-7xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl max-w-[80%] sm:w-full">
            CREDIT CUES
          </p>

          <div className="flex gap-x-5 lg:gap-x-5 max-w-[85%] lg:max-w-[75%] justify-center items-center mt-8">
            <div className="flex relative">
              <img
                src={IMG1}
                className="rounded-full aspect-square h-[50px] w-[50px] lg:h-[50px] lg:w-[50px]"
              />
              <img
                src={IMG2}
                className="rounded-full aspect-square relative z-10 -left-8 h-[50px] w-[50px] lg:h-[50px] lg:w-[50px]"
              />
            </div>
            <p className="font-semibold text-xl">
              Enjoy rewards, global access, low fees, and premium perks.
            </p>
          </div>

          {/* Original Buttons - hidden on small screens */}
          <Link to="/more-cards" className="hidden sm:block">
            <div className="flex items-center gap-x-5 mt-8">
              <button className="bg-[#DEEFE7] px-10 py-5 rounded-full shadow-[0px_30px_30px_0px_#00000060]">
                <p className="font-semibold text-xl text-black">Get Started</p>
              </button>

              <button className="border-[4px] rounded-full shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060]">
                <div className="p-[10px]">
                  <MdArrowOutward size={30} />
                </div>
              </button>
            </div>
          </Link>
        </div>

        <div className="relative mt-10 lg:mt-0 ml-32 lg:ml-0">
          <div className="lg:h-[300px] lg:w-[500px] w-[400px] h-[250px] bg-gradient-to-r from-[#bce7d3] to-[#159A9C] rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-20 md:h-[250px] md:w-[400px] sm:top-12">
            <img
              src={VISA}
              height={100}
              width={100}
              className="absolute left-10 top-10"
            />

            <img
              src={CHIP}
              height={75}
              width={75}
              className="absolute right-16 top-16"
            />

            <p className="absolute bottom-20 left-10 font-normal text-xl -rotate-3">
              4012 8888 2695 4592
            </p>
            <p className="absolute bottom-12 left-10 font-normal text-xl -rotate-3">
              RORONOA ZORO
            </p>
            <p className="absolute bottom-12 left-60 font-normal text-xl -rotate-3">
              09/26
            </p>
          </div>

          <div className="lg:h-[300px] lg:w-[500px] w-[400px] h-[250px] bg-[#ffffff] bg-opacity-15 rotate-150 skew-x-30 skew-y-6 rounded-2xl relative z-10 -top-40 md:h-[250px] md:w-[400px] md:-top-32 sm:h-[200px] sm:w-[300px] sm:-top-16 xs:h-[150px] xs:w-[200px] xs:-top-16">
            <img
              src={MASTER}
              height={100}
              width={100}
              className="absolute left-10 top-10"
            />

            <img
              src={CHIP}
              height={75}
              width={75}
              className="absolute right-16 top-16"
            />

            <p className="absolute bottom-20 left-10 font-normal text-xl -rotate-3">
              4012 8888 2695 4592
            </p>
            <p className="absolute bottom-12 left-10 font-normal text-xl -rotate-3">
              RORONOA ZORO
            </p>
            <p className="absolute bottom-12 left-60 font-normal text-xl -rotate-3">
              09/26
            </p>
          </div>
        </div>
      </div>

      {/* Buttons moved to the bottom for small screens */}
      <div className="w-screen flex justify-center md:justify-end items-center sm:hidden -mt-10 px-5">
        <Link to="/more-cards">
          <div className="flex  items-center gap-x-5 mb-10 lg:mb-0">
            <button className="bg-[#DEEFE7] px-10 py-5 rounded-full shadow-[0px_30px_30px_0px_#00000060]">
              <p className="font-semibold text-xl text-black">Get Started</p>
            </button>

            <button className="border-[4px] rounded-full shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060]">
              <div className="p-[10px]">
                <MdArrowOutward size={30} />
              </div>
            </button>
          </div>
        </Link>
      </div>

      <div className="w-screen hidden lg:flex  justify-center items-center -mt-10">
        <IoIosArrowDown size={60} className="text-center" />
      </div>
    </div>
  );
};

export default Section1;
