import React from 'react';

const FoodCard = ({item}) => {
    const{name,image,recipe,price}=item
    return (
        <div>
            <div className="card h-[600px] bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[400px]' src={image} alt="Image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;