import React from 'react';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import SchoolCard from '../SchoolCard/SchoolCard';

const Collage = () => {
    const [instance] = useAxios();

    const { data: collageData = [] } = useQuery(['collagePage'], async () => {
        const collage = await instance.get('/schoolData')
        // console.log(schoolData.data);
        return collage.data
    })

    return (
        <div>
            <div className="w-[98%] mx-auto">
                <h1 className='text-white text-center mb-4 pt-16 text-4xl'>Colleges </h1>

                <div className="my-4 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
                    {
                        collageData.map((items, index) => <SchoolCard key={index} items={items}></SchoolCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Collage;