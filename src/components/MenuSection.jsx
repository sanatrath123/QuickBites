import React from 'react'
import MenuCard from './MenuCard'
import { useState } from 'react'

function MenuSection(props ) {

const {title} = props?.card?.card
const items = props?.card?.card?.itemCards


//update the parents state variable

const handleClick = (title) => {
  

  props.SetShowtoggle()
  
};

//console.log("item is ",items)
return(
  
        <div className='w-full h-auto flex flex-col mt-2 border-b-2 my-5' >
          
        <div onClick={()=>handleClick(title)} className='w-full  flex flex-wrap justify-between mt-2 border-b-2 my-2'>
        <div className=' text-2xl text-black ml-5'>
               {title }({items.length})
          </div>
          <div className='font-bold text-2xl text-black mr-5 '>
          ⬇️
          </div>
        </div>
 <div className='text-center '>
   {/* {    showtoggle ? null : items.map((item , index)=>(
          <MenuCard key={index} {...item} />
        )) } */}
        {props.showtoggle && items.map((item , index)=>(
          <MenuCard key={index} {...item}/>))}
 </div>
        </div>
       ) 
}

export default MenuSection