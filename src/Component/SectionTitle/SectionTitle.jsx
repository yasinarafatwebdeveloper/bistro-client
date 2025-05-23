import React from 'react';


const SectionTitle = ({heading,subheading}) => {
    return (
        <section>
        <div className='mt-5 lg:w-4/12 mx-auto mb-3'>
            <p className='text-yellow-400 text-center text-lg'>---{subheading}---</p>
            <h1 className='text-center text-2xl uppercase border-y-4 py-2'>{heading}</h1>
        </div>
    
        </section>
    );
};

export default SectionTitle;