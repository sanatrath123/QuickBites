import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import {ResData} from '../utils/Mockdata'



function Body() {

const [listres , setListres] = useState()
const [fliterData , setFilterData] = useState([])
const [search , setSearch] = useState()
 
//if fetch is not working 

useEffect(()=>{
StaticData()
},[])

const StaticData = ()=>{
  const data = ResData[0]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
 console.log(data)
 setListres(data)
 setFilterData(data)
}


//if fetch is working add a state variable 
// useEffect(()=>{
//   fetchData()

// },[])

//  create function of fetch data
// const fetchData = async () => {
//   console.log("Enter in fetchdata")
//   const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=20.23917854088893&lng=85.827534198761");
//   console.log("data fetched")

//   const json = await data.json();
//   console.log("response is",json)
// }

//filter hanel for top resturants 

const Handelfilter = ()=>{

 const data = listres.filter((res)=>(
  res.info.avgRating > 3.5
))
setFilterData(data)
}

//serach function 
 const Handelsearch = ()=>{
  const data = listres.filter((res)=>{
  
    return res.info.name.toUpperCase().includes(search.toUpperCase())
  })

  setFilterData(data)
 }
  

  return (
    
    <div className=''>
      {/* search bar div */}
    <div className="relative w-5/6 flex content-center mx-auto mt-1">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Handelsearch}>Search</button>
    </div>

    {/* top resturant Filter button div */}
  <div className=''> 
 <button onClick={Handelfilter} className='w-2/6 bg-yellow-300 m-2 p-3 text-2xl  '>Top Resturants</button>
 </div> 

 {/* todo make a banner section */}



{/* body card */}
<div className='flex flex-wrap justify-center items-center'>
         {fliterData.map((resturant)=>(
          <FoodCard key={resturant.info.id} {...resturant}/>
         ))}
</div>

    </div>
  )
}

export default Body