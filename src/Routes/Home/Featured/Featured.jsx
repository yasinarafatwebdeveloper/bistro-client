import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featureImage from"../../../assets/images/img4.png"
import"./Featured.css"
const Featured = () => {
    return (
        <div className='featuredItem bg-fixed'>
            

            <SectionTitle heading="check it out" subheading="From Our Menue"></SectionTitle>
            <div className='lg:flex justify-center items-center py-8 px-8 '>
                <div className=''>
                    <img className=''  src={featureImage} alt="" />
                </div>
                <div className='lg:ml-10'>
                <h4 className='text-xl text-lime-500'>March 20,2025</h4>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi reiciendis magnam id unde animi quisquam, cumque et ut ad impedit vel error! Magnam, expedita distinctio quis vitae nostrum fuga veniam, autem, consequatur labore odit illo cum officiis tenetur laudantium soluta optio quasi nihil? Itaque fuga obcaecati dolores temporibus ducimus.</p>
                <button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;