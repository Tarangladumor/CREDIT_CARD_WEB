import React from 'react'
import { useForm } from "react-hook-form"
import reviewImage from '../../../assets/reviewImage.png'
import StarRating from './StarRating';
import { addReview } from '../../../services/Operations/cardAPI';

const Reviews = ({handleCloseModal,cardData}) => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        // reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const formData = new FormData()
        formData.append("Author", data.Author)
        formData.append("rating", data.rating)
        formData.append("description", data.description)
        console.log("cardId: in reviews : ",cardData.cardData._id)
        formData.append("cardId",cardData.cardData._id);
        

        // const response = await addReview(formData);

        // console.log(response);
        // if(reponse.data)

        // console.log(formData);

      
            const response = await addReview(formData);
            // console.log(response.data);
            // if (response) {
            //     // reset();
                
            // } 
      

    }
    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

            <div className='bg-[#378883] w-9/12 mx-auto flex flex-col rounded-md p-6 '>

                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                    <p className='leading-[45px] text-[30px] text-white p-2'>Add your reviews about the card!</p>
                   
                    </div>
                    
                    <hr></hr>
                </div>

                <form className=' w-9/12 mx-auto flex flex-col mt-6 gap-4' onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex gap-6'>
                        <img src={reviewImage} className='aspect-square w-[125px] h-[125px] rounded-full' />
                        <div className='flex flex-col '>
                            <label htmlFor="Author" className='text-[white] text-[24px] leading-[42px]
'>Name:</label>
                            <input
                                id="Author"
                                name="Author"
                                className='bg-[#D9D9D9A6] outline-none border-none rounded-md p-2' type="text"
                                placeholder='Name'
                                {...register("Author", { required: true })} />
                            {errors.Author && (
                                <span className="ml-2 text-xs tracking-wide text-pink-200">
                                    * Name is required
                                </span>
                            )}
                        </div>

                    </div>

                    <div className="flex flex-row gap-4 p-2 mt-4">

                        <p className="text-white text-lg font-medium text-[30px]">Rate this Credit Card:</p>
                        <StarRating register={register} setValue={setValue} />

                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="description" className='text-[white] text-[24px] leading-[42px]
'>Add your Experience:</label>
                        <textarea id="description" name="description"
                            placeholder="Share your details about the experience of the card" className='outline-none border-none p-2 rounded-md bg-[#D9D9D9A6]
'
                            rows="4" cols="30"
                            {...register("description", { required: true })}
                        ></textarea>
                        {errors.description && (
                            <span className="ml-2 text-xs tracking-wide text-pink-200">
                                * Experience is required
                            </span>
                        )}
                    </div>

                    <div className='flex gap-4 justify-end mt-4' type="submit">
                        <button type="submit" className='bg-[#F77F00] text-white px-[12px] py-[8px] rounded
-md'>
                            Publish
                        </button>
                        <button onClick={handleCloseModal} className='text-white border-[2px] border-[white] px-[12px] py-[8px] rounded-md'>
                            Cancel
                        </button>
                    </div>

                </form>

            </div>

            <div>

            </div>

        </div>
    )
}

export default Reviews