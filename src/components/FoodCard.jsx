
function FoodCard(props) {
 
  const res = props

  
    
  return (
    <div className='m-4 p-4'>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.info.cloudinaryImageId}`}alt="resturant" className='h-40 w-40'/>
        <h2 className='text-boald text-cyan-100 mt-2'>{res.info.name}</h2>
        <h4 className='text-cyan-100'>{res.info.locality}</h4>
        <h4 className='text-cyan-100'>{res.info.avgRating}</h4>
        <h4 className='text-cyan-100'>{res.info.deliveryTime}</h4>
    </div>
  )
}

export default FoodCard