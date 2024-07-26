import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReviewImg from "../../assets/home section img2.jpg";

const ReviewCarousel = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [reviews.length]);

    console.log("REVIEWS", reviews);

    return (
        <div className="relative h-10 flex">
            <TransitionGroup>
                <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="absolute w-full rounded">
                        <div className='flex gap-2 items-center '>
                            <img
                                src={ReviewImg}
                                alt="review image"
                                className="w-10 h-10 aspect-square rounded-full"
                            />
                            <div>
                                <p>{reviews[index]?.Author}</p>
                                {reviews[index]?.description}
                            </div>
                        </div>

                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default ReviewCarousel;
