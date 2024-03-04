import React from 'react'
import { useSelector } from 'react-redux'
import CartMenu from './CartMenu'


function Cart() {
  const cartarr = useSelector((state)=>state.cart.value)
  
  
  const cartprice =  cartarr.reduce((totalPrice ,item)=>{

    let price = item?.card?.info?.price || 0;

  return totalPrice + price
},0) //reduce function accumulator is totalprice and 0 is the initialization of that
   
   






  return (
    <div className='w-1/2 flex flex-col items-center mx-auto mt-10'>
        {
          cartarr.map((ele)=>(
            <CartMenu key={ele.card.info.id} {...ele}/>
          ))
        }


        <div className='w-full h-16 bg-orange-400 mt-4 p-4 text-black text-3xl flex justify-between mx-4'>
<h1>Place your Order </h1> <span className=' ml-5'>RS:{cartprice/100}</span>
        </div>
    </div>
  )
}

export default Cart