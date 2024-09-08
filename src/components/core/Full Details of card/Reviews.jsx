import React from 'react'
import { useForm } from "react-hook-form"
import reviewImage from '../../../assets/reviewImage.png'
import StarRating from './StarRating';
import { addReview } from '../../../services/Operations/cardAPI';

const Reviews = ({ handleCloseModal, cardData }) => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("Author", data.Author);
            formData.append("rating", data.rating);
            formData.append("description", data.description);
            formData.append("cardId", cardData.cardData._id);
    
            const response = await addReview(formData);
            
            console.log(response);
            if (response.success) {
                handleCloseModal(); 
            } else {
                // Handle failure (optional)
                console.error("Failed to add review");
            }
        } catch (error) {
            console.error("An error occurred while submitting the review:", error);
        }
    };
    

    return (
        <div className="fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

            <div className='bg-[#86d3d0] w-[90%] sm:w-2/3 lg:w-1/3 mx-auto flex flex-col rounded-md p-4 md:p-6'>

                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='leading-[32px] text-[20px] sm:text-[24px] lg:text-[30px] text-white p-2'>Add your reviews about the card!</p>
                    </div>
                    <hr />
                </div>

                <form className='w-full flex flex-col gap-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-4 sm:gap-6'>
                        <img src={reviewImage} className='w-[80px] sm:w-[100px] lg:w-[125px] h-auto rounded-full' />
                        <div className='flex flex-col'>
                            <label htmlFor="Author" className='text-white text-[18px] sm:text-[20px] lg:text-[24px]'>Name:</label>
                            <input
                                id="Author"
                                name="Author"
                                className='bg-[#D9D9D9A6] outline-none border-none rounded-md p-2 text-[14px] sm:text-[16px]'
                                type="text"
                                placeholder='Name'
                                {...register("Author", { required: true })} />
                            {errors.Author && (
                                <span className="ml-2 text-xs tracking-wide text-pink-200">
                                    * Name is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 p-2 mt-4">
                        <p className="text-white text-lg font-medium text-[20px] sm:text-[24px] lg:text-[30px]">Rate this Credit Card:</p>
                        <StarRating register={register} setValue={setValue} />
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="description" className='text-white text-[18px] sm:text-[20px] lg:text-[24px]'>Add your Experience:</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Share your details about the experience of the card"
                            className='outline-none border-none p-2 rounded-md bg-[#D9D9D9A6] text-[14px] sm:text-[16px]'
                            rows="4"
                            {...register("description", { required: true })}
                        ></textarea>
                        {errors.description && (
                            <span className="ml-2 text-xs tracking-wide text-pink-200">
                                * Experience is required
                            </span>
                        )}
                    </div>

                    <div className='flex gap-4 justify-end mt-4'>
                        <button type="submit" className='bg-[#F77F00] text-white px-[12px] py-[8px] rounded-md text-[14px] sm:text-[16px]'>
                            Publish
                        </button>
                        <button onClick={handleCloseModal} className='text-white border-2 border-white px-[12px] py-[8px] rounded-md text-[14px] sm:text-[16px]'>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Reviews;
