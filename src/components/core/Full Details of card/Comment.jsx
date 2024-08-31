import React from "react";
import FEECHARGES from "../../../assets/FeeCharges_img.png";
import { useForm } from "react-hook-form";
import { addComment } from "../../../services/Operations/cardAPI";

const Comment = ({ Data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("DETAILS>>>>>>>>>>>>>>>>>>", Data);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("author", data.Author);
    formData.append("cardId", Data.cardData._id);
    formData.append("email", data.email);
    const result = await addComment(formData);
    console.log("Result of add comment", result);
  };

  return (
    <div className="mt-10 md:mt-16 lg:mt-20">
      <header className="flex flex-col md:flex-row justify-start items-center gap-2 w-11/12 md:w-10/12 mx-auto mb-4 md:mb-5">
        <img
          src={FEECHARGES}
          className="w-[80px] md:w-[100px] lg:w-[125px] aspect-square"
          alt="Fee Charges"
        />
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px]">
            Leave us a comment
          </h2>
          <p className="text-[#0000008A] text-sm md:text-base lg:text-[20px] md:leading-[26px] lg:leading-[30px]">
            Don't worry, we will not publish your email address. Each section is mandatory.
          </p>
        </div>
      </header>

      <form
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-[#0000008A] text-lg md:text-xl lg:text-[28px] md:leading-[32px] lg:leading-[42px]"
          >
            Comment
          </label>
          <textarea
            id="description"
            name="description"
            className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
            rows="8"
            cols="30"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Comment is required
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="flex flex-col">
            <input
              id="Author"
              name="Author"
              className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
              type="text"
              placeholder="Name"
              {...register("Author", { required: true })}
            />
            {errors.Author && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Name is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              id="email"
              name="email"
              className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Email is required
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full md:w-[150px] text-center bg-gradient-to-b from-[#056e67] to-[#159a9c] font-semibold text-xl md:text-2xl lg:text-3xl px-6 md:px-10 py-2 md:py-3 text-white rounded-xl lg:rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Comment;
