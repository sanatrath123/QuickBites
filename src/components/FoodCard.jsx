


function FoodCard(props) {
 
  const res = props

  
     console.log(res)
  return (
    <div className='m-4 p-4'>
        <img src={res.img} alt="resturant" className='h-40 w-40'/>
        <h2 className='text-boald text-cyan-100 mt-2'>{res.name}</h2>
        <h4 className='text-cyan-100'>{res.place}</h4>
        <h4 className='text-cyan-100'>{res.rating}</h4>
        <h4 className='text-cyan-100'>{res.time}</h4>
    </div>
  )
}

export default FoodCard