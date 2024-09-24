import React, { useEffect, useState } from 'react';
import contactus from "../../../assets/contactus.png";
import { apiConnector } from "../../../services/apiconnector";
// import { cardEndpoints } from '../../../services/apis';
import toast from 'react-hot-toast';
import { cardEndpoints } from '../../../services/apis';

const {ADD_NEWSLETTER_SIGN_UP} = cardEndpoints

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const { email } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitNewsletterForm = async () => {
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        ADD_NEWSLETTER_SIGN_UP,
        formData
      );
      console.log("Logging response", response);
      setIsSubmitSuccessful(true);
      toast.success("Subscription successful!");
    } catch (error) {
      console.log("Error", error.message);
      setIsSubmitSuccessful(false);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setFormData({
        email: "",
      });
      setIsSubmitSuccessful(false);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="bg-[#deefe7] py-10">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="block md:hidden w-full lg:w-1/2 mt-8 lg:mt-0">
            <img src={contactus} alt="Contact Us" className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto" />
          </div>
          <div className="lg:ml-24 mt-8 lg:mt-20 flex flex-col text-center md:text-left       gap-2">
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Got Questions?</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">We got Answers!</p>
            <p className="text-base md:text-lg lg:text-[18px] text-[#0000008a] mt-4 md:mt-5">
              Stay updated with the latest offers and tips. Subscribe to our Newsletter!
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-sm lg:ml-24 mt-8 lg:mt-10 rounded-3xl">
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="peer h-12 w-full rounded-full border-2 md:border-3 lg:border-2 border-[#159a9c] bg-transparent px-4 py-2 text-sm md:text-base text-gray-800"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-center mt-4 text-white">
              <button
                onClick={submitNewsletterForm}
                className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-[#159a9cbd] rounded-3xl transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#159a9c]"}`}
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-1/2 mt-8 lg:mt-0">
          <img src={contactus} alt="Contact Us" className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
