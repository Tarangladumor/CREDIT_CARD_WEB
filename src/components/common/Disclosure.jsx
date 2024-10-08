import React from "react";
import Footer from "../common/Footer"

const AffilaitedDisclosure = () => {
  return (
    <div>
      <div className="flex flex-col mt-4 ">
        <h1 className="mx-auto text-[40px] font-semibold">
          Disclosure
        </h1>
        <div className="border-[#159A9C] border-b-4 md:border-b-[5px] mx-auto w-[8%]"></div>
      </div>

      <div className="flex flex-col w-9/12 justify-center mx-auto gap-9 ">
        <p className="text-[18px] mt-6">
        The owner of CardPouch may receive compensation for recommendations made in reference to the products or services on this website.
        </p>

        <p className="text-[18px]">
        This compensation may be in the form of money, services, or complimentary products and could exist without any action from a website visitor. If you click on an affiliate link on CardPouch and then make a purchase of the recommended product or service, the owner of CardPouch may receive compensation.
        </p>

        <p className="text-[18px]">
        CardPouch participates in various affiliate marketing programs, which means we may receive commissions on purchases made through links to retailer sites. This does not affect the price you pay or the objectivity of the recommendations provided.

        </p>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default AffilaitedDisclosure;
