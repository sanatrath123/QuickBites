import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";


function ResturantMenu() {
  const { resId } = useParams();
  const [resinfo, setResinfo] = useState({});
 
 console.log(resId)
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.237942885104747&lng=85.82812193781139&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
      const json = await res.json();
      setResinfo(json.data);
console.log(json.data)
      
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
  }

//heading values
  const Headitem = resinfo?.cards?.[2]?.card?.card?.info;
  const { name, areaName, avgRatingString, costForTwoMessage, cuisines } = Headitem || {};

  //meny items array
  const ItemMenu = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || []



return (
  Headitem ? (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-slate-300 w-2/4 h-32 mt-8 p-2">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-2xl m-2">{name}</h1>
          <span className="my-2 mx-1">{avgRatingString}</span>
          <span className="my-2 mx-1">{areaName}</span>
        </div>
        <div className="flex justify-center">
          <h2 className="text-xl mt-3 p-3 ml-5">{costForTwoMessage}</h2>
          <h2 className="text-xl mt-3 ml-3 p-3 mr-5">{cuisines}</h2>
        </div>
      </div>
      <h1 className="flex justify-start m-2">MENU</h1>
      <div className="w-2/4 mt-4 p-2 h-screen bg-zinc-300">
        {ItemMenu.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  ) : (
    <p>LOADING</p>
  )
);

  }

export default ResturantMenu;
