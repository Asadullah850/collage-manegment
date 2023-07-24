import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './style.css'
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Gallery = () => {

    const [instance] = useAxios()

    const { data: imgGallery = [] } = useQuery(['imgGallery'], async () => {
        const imgGalleryData = await instance.get('/schoolData')
        // console.log(schoolData.data);
        return imgGalleryData.data
    })

    return (
        <div>
            <h1 className=' text-white text-center my-8 text-2xl'>School Images Gallery</h1>
            <Carousel autoPlay>
                {
                    imgGallery.map((img, index) => <div className='h-[550px]'>
                        <img className='h-full w-full bg-cover' src={img.graduate_Img} />
                        <p className="legend">Collage number {index + 1}</p>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Gallery;