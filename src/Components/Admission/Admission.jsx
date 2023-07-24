import React from 'react';
import useAxios from '../hooks/useAxios';
import AdmissionCard from './AdmissionCard';

const Admission = () => {


    const [instance] = useAxios();

    const { data: collageAllData = [] } = useQuery(['collageAllData'], async () => {
        const collageAllData = await instance.get('/schoolData')
        // console.log(schoolData.data);
        return collageAllData.data
    })

    return (
        <div>
            <div className="my-4 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
                {
                    collageAllData.map((items, index) => <AdmissionCard key={index} items={items}></AdmissionCard>)
                }

            </div>
        </div>
    );
};

export default Admission;