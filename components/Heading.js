import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='text-[#232940] text-[2rem] font-medium flex items-center gap-4 py-10 '>
            {title}
            <div className='bg-[#ff4d41] h-[0.125rem] w-[2.5rem] translate-y-1'></div>
        </div>
    );
};

export default Heading;
