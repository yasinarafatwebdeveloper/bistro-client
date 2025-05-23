import React from 'react';

const SingleCategoryMenue = ({item}) => {
   
    const{name,image,price,recipe}=item
    return (
        <div className='flex'>
            <img style={{borderRadius:"0 200px 200px 200px"}} className='w-[100px] px-5 py-3' src={image} alt="" />
            <div className='flex'>
                
                <div>
                <h3>{name}--------</h3>
                <p>{recipe}</p>
                </div>
              
                <div>
                    <p className='text-yellow-500'>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryMenue;