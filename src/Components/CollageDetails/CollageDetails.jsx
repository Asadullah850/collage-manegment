import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

const CollageDetails = () => {
    const [instance] = useAxios();

    const params = useParams()
    console.log(params.id);

    const { data: collageData = [], isLoading } = useQuery(['collageSingData'], async () => {
        const singleData = await instance.get(`/collageSingData/${params.id}`)
        console.log(collageData);
        return singleData.data
    })

    if (isLoading) {
        return <p>Loading ............ </p>
    }

    const { college_name, student_research_paper_link, sports, location, graduate_Img, event_two_image, event_two_details, event_one_details, event_one_image, description, college_images, admission_dates } = collageData;
    
    return (
        <div className='w-[90%] mx-auto'>
            <div className=" text-center mb-4">
                <h1 className='text-4xl'>{college_name}</h1>
                <h1 className='text-2xl'>{location}</h1>
            </div>
            <img src={college_images} alt="" srcset="" />
            <p className='my-4'>{description}</p>

            <p className='text-4xl text-center my-8'>Admission Dates</p>
            <p className='text-4xl text-center my-8'>Recent Event </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="">
                    <p className='text-xl text-center my-4'> Event of Human research {event_one_details}</p>
                    <img src={event_one_image} alt="" srcset="" />
                </div>
                <div className="">
                    <p className=' text-xl text-center my-4'>Event of Human research  {event_two_details}</p>
                    <img src={event_two_image} alt="" srcset="" />
                </div>
            </div>
            <p className=' text-xl text-center my-4'>Student Best Research Paper <a href={student_research_paper_link}>Click</a></p>

            <p className='text-xl text-center my-4'>Sports : {sports}</p>

        </div>
    );
};

export default CollageDetails;