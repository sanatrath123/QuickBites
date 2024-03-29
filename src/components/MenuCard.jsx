import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { additem } from '../store/CartSlice'

function MenuCard(props) {

  const dispatch = useDispatch()
//onclick function
  const HandelClick = ()=>{
   
 dispatch(additem(props))
  }

 const {imageId,description , name , price } = props?.card?.info

  return (
   <div className='w-full h-60 flex flex-wrap justify-between mt-1 border-b-2'>
    <div className='flex flex-col items-start '>
    <h2 className='text-xl m-1 p-1'>{name}</h2>
    <span className='m-1 p-1 text-l'>₹{price/100}</span>
    <div className='text-center w-8/12 h-12 font-thin text-xm mt-1 '>
  
</div>
</div>


<div className='flex flex-col '>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} alt="img" className='h-24 w-24' />
    <button onClick={HandelClick} className='bg-yellow-400 mt-2 rounded-lg'>Add</button>
    </div>


   </div>


  )



}

export default MenuCard