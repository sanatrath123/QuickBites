import { Link } from "react-router-dom";
function FoodCard(props) {
 
  const res = props;

  return (
    
    <div className='m-4 p-4 w-1/6 h-1/5 cursor-pointer'>
      <Link to={`/resturant/${res.info.id}`}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.info.cloudinaryImageId}`}
        alt="restaurant"
        className='h-40 w-full'
      />
      
      
          <h2 className='text-bold text-gray-700 mt-2'>{res.info.name}</h2>
          
           <h4 className='text-gray-700'>{res.info.locality}</h4>
          <h4 className='text-gray-700'>{res.info.avgRating}</h4>
          <h4 className='text-gray-700'>{res.info.deliveryTime}</h4>
      

      </Link>
      </div>
      
  );
}




export default FoodCard;
