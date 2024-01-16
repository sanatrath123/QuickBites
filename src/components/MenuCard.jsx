import React from 'react'

function MenuCard(props) {

 const {imageId,description , name , price } = props?.card?.info

  return (
   <div className='w-full h-32 flex flex-wrap justify-between'>
    <div className='flex flex-col'>
    <h1 className='text-xl m-1 p-1'>{name}</h1>
    <h2 className='m-1 p-1 text-l'>{price/100}</h2>
   

</div>

   
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} alt="img" className='h-24 w-24' />


   </div>
  )
}

export default MenuCard