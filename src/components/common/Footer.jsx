import React, { useEffect, useState } from 'react';
import TermsCondition from './TermsCondition';
import { Link } from 'react-router-dom';
import { apiConnector } from '../../services/apiconnector';
import { cardEndpoints } from '../../services/apis';
import toast from 'react-hot-toast';
import { MdArrowOutward } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

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
        cardEndpoints.ADD_NEWSLETTER_SIGN_UP,
        formData
      );
      setIsSubmitSuccessful(true);
      toast.success("Subscription successful!");
    } catch (error) {
      setIsSubmitSuccessful(false);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setFormData({ email: formData.email });
      setIsSubmitSuccessful(false);
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <div className="w-full bg-[#f7f5fd] flex flex-col md:flex-row md:justify-around">
        <div className="w-full md:w-11/12 flex flex-col md:flex-row justify-around p-4">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="text-3xl md:text-4xl font-extrabold">
              CARD POUCH
            </div>
            <div className="text-xl md:text-2xl">
              Follow Us
              <div className="flex gap-x-4 mt-3">
                <SocialIcon url="https://t.me/finnindeals2" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://x.com/Dealspouch27" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://chat.whatsapp.com/DjSHeQmtKILGlhFDL6TN4n" style={{ height: 35, width: 35 }} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3 mt-4">
            <div>
              <p className="text-lg font-medium">Contact Us:</p>
              <p className="text-[#374ab1] text-lg font-medium">
                dealspouch@gmail.com <br /> +91-8200440146
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Credit Card</p>
              <Link to="/more-cards" className="text-[#374ab1] text-lg font-medium">
                All Credit Cards
              </Link>
              <Link to="/cardByNetwork" className="text-[#374ab1] text-lg font-medium">
                All Cards Network
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-4 mt-4 w-full md:w-[300px]">
            <p className="text-xl md:text-2xl font-semibold">Newsletter Signup</p>
            <p className="text-base md:text-lg text-[#00000087]">
              Get the latest offers and tips—subscribe to our newsletter today.
            </p>

            <div className="relative flex w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                className="peer h-10 w-full rounded-[12px] border border-[#159a9c] bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 placeholder-shown:border-[#159a9c] focus:border-2 focus:border-[#159a9c] focus:outline-none"
                placeholder="Email"
              />
              <button onClick={submitNewsletterForm} disabled={loading} className="ml-3 border-green-800 border-[4px] rounded-full">
                <MdArrowOutward size={35} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <TermsCondition />
    </div>
  );
};

export default Footer;
