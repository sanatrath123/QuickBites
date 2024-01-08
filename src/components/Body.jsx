import React, { useState } from 'react';
import { ResData } from '../utils/Mockdata';
import FoodCard from './FoodCard';

function Body() {
  const [resData, setResData] = useState(ResData);

  const handleTopRatedClick = () => {
    // Filter the data based on the rating and update the state
    setResData(prevData => prevData.filter(res => parseFloat(res.rating) >= 3));
  };

  return (
    <div>
      <div className='m-2 p-2'>
        <button
          className='m-1 p-2 bg-blue-300 text-orange-300'
          onClick={handleTopRatedClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {resData.map(restaurant => (
          <FoodCard key={restaurant.name} {...restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
