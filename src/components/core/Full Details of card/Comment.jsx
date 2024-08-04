import React from "react";
import FEECHARGES from "../../../assets/FeeCharges_img.png";
import { useForm } from "react-hook-form";
import { addComment } from "../../../services/Operations/cardAPI";

const Comment = ({ Details }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("author", data.Author);
    formData.append("card", data.card);
    const result = await addComment(formData);
    console.log("Result of add comment", result);
  };

  return (
    <div>
      <header className="flex justify-start items-center gap-2 w-10/12 mx-auto mb-5">
        <img src={FEECHARGES} className="w-[125px] aspect-square" />
        <div className="flex flex-col">
          <h2 className=" font-semibold text-[40px]">Leave us a comment</h2>
          <p className="text-[#0000008A] text-[20px] leading-[30px]">
            Don't worry, we will not publish your email address. Each section is
            mandatory.
          </p>
        </div>
      </header>

      <form
        className="w-9/12 mx-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ">
          <label
            htmlFor="description"
            className="text-[#0000008A] text-[28px] leading-[42px]
"
          >
            Comment
          </label>
          <textarea
            id="description"
            name="description"
            className="border-[2px]  border-[#056E67] rounded-md"
            rows="4"
            cols="30"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              comment is required
            </span>
          )}
        </div>

        <div className="flex gap-6 mt-6">
          <input
            id="Author"
            name="Author"
            className="border-[2px] border-[#056E67] rounded-md p-2"
            type="text"
            placeholder="Name"
            {...register("Author", { required: true })}
          />
          {errors.Author && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Name is required
            </span>
          )}
          <input
            id="card"
            name="card"
            className="border-[2px] border-[#056E67] rounded-md p-2"
            type="text"
            // defaultValue={cardName}
            {...register("card", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-[150px] text-center bg-gradient-to-b from-[#056e67] to-[#159a9c] font-semibold text-3xl px-10 py-3 text-white rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Comment;
