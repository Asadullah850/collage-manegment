import React from 'react';

const ResearchPaper = ({ items }) => {

    const { college_name, student_research_paper_link } = items;
    return (
        <div className=' mx-10 bg-white p-5 rounded-md my-4 text-black'>
            <p className=' text-xl'>Collage Name: {college_name}</p>
            <div className=" px-2">
                <p>Subject Of Research : Biologuc </p>
                <p>Student Research Paper Link: <a href={student_research_paper_link}>Click</a></p>
            </div>
        </div>
    );
};

export default ResearchPaper;