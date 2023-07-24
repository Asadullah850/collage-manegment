import React from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Marquee from 'react-fast-marquee';

const Reviews = ({ items }) => {

    const { collegeName, collegeLocation, review, starRating } = items;


    return (
        <div className=' mx-10 bg-white p-5 rounded-md my-4 text-black'>
            <p className=' text-2xl font-bold'>Collage Name: {collegeName}</p>
            <p className=' text-xl'>College Location: {collegeLocation}</p>
            <div className=" px-2">
                <p>Review : {review} </p>
                <div className='flex'>
                <p>Rating : {starRating}</p> <Rating className='mx-4' style={{ maxWidth: 100 }} value={starRating}/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;