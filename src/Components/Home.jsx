import React from 'react';
import Marquee from 'react-fast-marquee';
import ResearchPaper from './StudentResearchPaper/ResearchPaper';
import Reviews from './Reviews/Reviews';
import Gallery from './ImageGalery/Gallery';
import Header from './Header/Header';
import { useQuery } from '@tanstack/react-query';
import SchoolCard from './SchoolCard/SchoolCard';
import useAxios from './hooks/useAxios';

const Home = () => {

    const [instance] = useAxios();

    const { data: schoolData = [] } = useQuery(['schoolData'], async () => {
        const schoolData = await instance.get('/schoolData')
        // console.log(schoolData.data);
        return schoolData.data
      })
      const { data: reviewsData = [] } = useQuery(['reviewsData'], async () => {
        const reviewsData = await instance.get('/reviews')
        // console.log(schoolData.data);
        return reviewsData.data
      })

    return (
        <div className='text-white'>
            <Header></Header>
            <div className="w-[98%] mx-auto">
                <h1 className='text-white text-center my-4 text-4xl'>Colleges </h1>

                <div className="my-4 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
                    {
                        schoolData.map((items, index) => <SchoolCard key={index} items={items}></SchoolCard>)
                    }

                </div>
            </div>
            {/*  */}
            <Gallery></Gallery>
            {/* Research Paper */}

            <h1 className=' text-white text-center my-8 text-2xl '>Research Paper</h1>

            <div className="">

                <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1629412721295-a7771e3c4539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcGVyJTIwY29sbGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Student Research</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee speed={30} pauseOnHover>
                {
                    schoolData.map((items, index) => <ResearchPaper key={index} items={items}></ResearchPaper>)
                }
            </Marquee>
            {/* Reviews */}
            <h1 className=' text-white text-center my-8 text-2xl'> Collage Reviews</h1>
            <Marquee speed={30} direction='right' pauseOnHover>
                {
                    reviewsData.map((items, index) => <Reviews key={index} items={items}></Reviews>)
                }
            </Marquee>
        </div>
    );
};

export default Home;