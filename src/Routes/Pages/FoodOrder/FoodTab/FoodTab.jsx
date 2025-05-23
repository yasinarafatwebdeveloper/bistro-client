import React from 'react';
import FoodCard from '../../../../Component/FoodCard/FoodCard';

const FoodTab = ({items}) => {
    return (
         <div className="grid md:grid-cols-3 gap-4">
              {items.map(item => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
    );
};

export default FoodTab;