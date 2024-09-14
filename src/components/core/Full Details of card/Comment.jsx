import React, { useState } from "react";
import FEECHARGES from "../../../assets/FeeCharges_img.png";
import { useForm } from "react-hook-form";
import { addComment, addReply } from "../../../services/Operations/cardAPI";
import AUTHORIMG from "../../../assets/reviewImage.png";

const Comment = ({ Data }) => {
  const [replyMode, setReplyMode] = useState(null); // track reply mode
  const [isModalOpen, setIsModalOpen] = useState(false); // track modal state
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("author", data.Author);
    formData.append("cardId", Data.cardData._id);
    formData.append("email", data.email);

    try {
      const result = await addComment(formData);
      if (result.success) {
        reset();
        setReplyMode(null); // reset reply mode after submission
        window.location.reload();
      } else {
        console.error("Comment submission failed");
      }
    } catch (error) {
      console.error("Error during comment submission:", error);
    }
  };

  const onReply = (commentId) => {
    setReplyMode(commentId);  
    setIsModalOpen(true); 
  };

  const handleReplySubmit = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("Author", data.Author);
    formData.append("commentId", replyMode); 
    formData.append("cardId", Data.cardData._id);
    formData.append("email", data.email);

    try {
      const result = await addReply(formData);
      if (result.success) {
        reset();
        setReplyMode(null); // reset reply mode after submission
        setIsModalOpen(false); // close the modal after submission
        window.location.reload();
      } else {
        console.error("Reply submission failed");
      }
    } catch (error) {
      console.error("Error during reply submission:", error);
    }
  };

  return (

    <div className="mt-10 md:mt-16 lg:mt-20 mb-10">

    <div className="mt-10 md:mt-16 lg:mt-20">
      {/* Comment Header and Form */}

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

      {/* New Comment Form */}
      {!replyMode && (
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

          {/* Name and Email */}
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
                {...register("email")}
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
            className="mt-6 w-full md:w-[150px] text-center bg-gradient-to-b from-[#056e67] to-[#159a9c] font-semibold text-xl md:text-2xl lg:text-3xl px-6 md:px-10 py-2 md:py-3 text-white rounded-xl lg:rounded-2xl shadow-lg"
          >
            Send
          </button>
        </form>
      )}

      {/* Comments Section */}
      <section className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-10">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Comments</h3>
        {Data?.cardData?.comments?.length > 0 ? (
          Data.cardData.comments.map((comment) => (
            <div key={comment._id} className="flex flex-col mb-6 p-4 border rounded-lg shadow-md">
              <div className="flex items-start mb-2">
                <img
                  src={AUTHORIMG}
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{comment.Author}</p>
                  <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <p className="mb-4">{comment.description}</p>
              <button
                onClick={() => onReply(comment._id)}
                className="text-sm text-blue-500"
              >
                Reply
              </button>
              {/* Display replies */}
              {comment.replies?.length > 0 && (
                <div className="ml-8 mt-4">
                  {comment.replies.map((reply) => (
                    <div key={reply._id} className="mb-4">
                      <div className="flex items-start">
                        <img
                          src={AUTHORIMG}
                          alt="Author"
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-bold">{reply.Author}</p>
                          <p className="text-sm text-gray-500">{new Date(reply.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className="ml-4">{reply.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </section>

      {/* Modal Popup for Reply */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
            <h2 className="text-xl font-semibold mb-4">Reply to Comment</h2>
            <form onSubmit={handleSubmit(handleReplySubmit)}>
              <div className="flex flex-col mb-4">
                <textarea
                  id="reply"
                  name="reply"
                  className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
                  rows="4"
                  cols="30"
                  {...register("description", { required: true })}

                ></textarea>
                {errors.description && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Reply description is required
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <input
                  id="Author"
                  name="Author"
                  className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
                  type="text"
                  placeholder="Your Name"
                  {...register("Author", { required: true })}
                />
                {errors.Author && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Name is required
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <input
                  id="email"
                  name="email"
                  className="border-[2px] border-[#056E67] rounded-md p-2 text-sm md:text-base"
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Email is required
                  </span>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                >
                  Submit Reply
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="ml-4 text-gray-700 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Comment;
