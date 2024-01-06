import React from 'react'

function FoodCard() {
  return (
    <div className='m-4 p-4'>
        <img src="/public/Carddemo.avif" alt="resturant" className='h-40 w-40'/>
        <h2 className='text-boald text-cyan-100'>Burger King</h2>
        <h4 className='text-cyan-100'>Bhubaneswar 499/5</h4>
        <h4 className='text-cyan-100'>* 3.4</h4>
        <h4 className='text-cyan-100'>33 min  order</h4>
    </div>
  )
}

export default FoodCard