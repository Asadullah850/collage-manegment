import React from 'react';
import { Fade, Flip } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const SchoolCard = ({ items }) => {

    const { college_images, _id, admission_dates, college_name, event_one_details, event_one_image, event_two_details, event_two_image, graduate_Img, sports, student_research_paper_link, location, description } = items;
    // console.log(items);
    return (
        <Fade>
            <div className="card card-compact w-full bg-base-100 shadow-xl text-black">
                <figure><img src={college_images} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <p className=' text-xl'>Location: {location}</p>
                    <p>Description: {description.slice(0, 60)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/collageDetails/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default SchoolCard;