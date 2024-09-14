import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReviewImg from "../../assets/home section img2.jpg";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? `${words.slice(0, wordLimit).join(' ')}...` : text;
};

const ReviewCarousel = ({ reviews = [] }) => {
    const [index, setIndex] = useState(0);
    const [contentHeight, setContentHeight] = useState('auto');
    const contentRef = useRef(null);

    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [reviews.length]);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [index]);

    console.log("REVIEWS", reviews);

    if (reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    return (
        <div className="relative flex overflow-hidden" style={{ height: contentHeight }}>
            <TransitionGroup>
                <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="fade"
                >
                    <div ref={contentRef} className="absolute w-full rounded">
                        <div className='flex gap-2 items-center'>
                            <img
                                src={ReviewImg}
                                alt="review image"
                                className="w-10 h-10 aspect-square rounded-full"
                            />
                            <div>
                                <p>{reviews[index]?.Author}</p>
                                <p>{truncateText(reviews[index]?.description, 20)}</p>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default ReviewCarousel;
