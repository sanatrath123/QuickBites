import React, { useEffect, useState } from 'react';
import {ResData} from '../utils/Mockdata'
import FoodCard from './FoodCard';


function Body() {
   const [resData, setResData] = useState(ResData);
   const [searchText , setSearchText] = useState("")


  


  
  useEffect(()=>{
  FetchData()
  },[])

//fetch function
 const FetchData= async ()=>{
  let response = await fetch(
   "https://www.swiggy.com/mapi/homepage/getCards?lat=20.237942885104747&lng=85.82812193781139"
  );
 
let  data = await response.json()
 console.log(data)
 }
 
  return (
    <div>

      
      <div className='m-1 p-2 '>
    
       <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
       <button
          type='submit'
          onClick={() => {
            // Use setSearchText instead of setResData directly
            const filteredData = resData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setResData(filteredData);
          }}
          className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Search
        </button>
     
      </div>

      <div className='m-2 p-2'>
        <button
          className='m-1 p-2 bg-blue-300 text-orange-300'
          onClick={()=>{
         const list =   resData.filter((res)=>{
           return res.info.avgRatingString > 4
            })
            setResData(list)
          }}
        >
        {console.log("resdata is",resData)}
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {resData.map(restaurant => (
          <FoodCard key={restaurant.info.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
