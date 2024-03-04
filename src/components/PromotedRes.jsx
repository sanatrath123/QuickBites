import React from 'react';

function PromotedRes(FoodCard) {
  return (props) => {
    const { info } = props;

    return (
      <div>
        {info.Promoted && (
          <div>
            <label className='font-bold text-white bg-black'>Promoted</label>
            <FoodCard {...props} />
          </div>
        )}
      </div>
    );
  };
}

export default PromotedRes;
