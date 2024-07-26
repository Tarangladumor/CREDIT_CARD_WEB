import React, { useState,useEffect } from 'react';

const StarRating = ({ register, setValue }) => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        register('rating', { required: true });
    }, [register]);

    const handleRating = (value) => {
        setRating(value);
        setValue('rating', value); 
    };


    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-8 h-8 cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    onClick={() => handleRating(star)}
                >
                    <path d="M9.049 2.927C9.338 2.193 10.662 2.193 10.951 2.927L12.536 7.051C12.712 7.516 13.149 7.81 13.651 7.81H18.01C18.797 7.81 19.101 8.861 18.475 9.309L14.916 11.76C14.51 12.054 14.329 12.57 14.502 13.031L15.908 16.81C16.197 17.544 15.403 18.139 14.776 17.691L11.217 15.24C10.811 14.946 10.189 14.946 9.783 15.24L6.224 17.691C5.597 18.139 4.803 17.544 5.092 16.81L6.498 13.031C6.671 12.57 6.49 12.054 6.084 11.76L2.525 9.309C1.899 8.861 2.203 7.81 2.99 7.81H7.349C7.851 7.81 8.288 7.516 8.464 7.051L10.049 2.927z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
