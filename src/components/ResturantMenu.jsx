import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import MenuSection from "./MenuSection";


function ResturantMenu() {
  const { resId } = useParams();
const resinfo = useResturantMenu(resId)
const [showtoggle , setShowtoggle] = useState(null)
//heading values always be a obj
  const Headitem = resinfo?.cards?.[2]?.card?.card?.info;
  const { name, areaName, avgRatingString, costForTwoMessage, cuisines } = Headitem || {};

  //menu items array
  const ItemMenu = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

  //took all the iteam categories
const ItemCategories = ItemMenu?.filter((item)=>(
  item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
))





return (
  Headitem ? (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-amber-300 w-2/4 h-32 mt-8 p-2">
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
      <div className="w-7/12 mt-4 p-2">
    {ItemCategories.map((item,index)=>(
    
    <MenuSection key={item?.card?.card?.title} 
    {...item}
    showtoggle={index === showtoggle ? true : false}
    SetShowtoggle = {
      ()=>{ showtoggle===index ? 
        setShowtoggle(null)
        :setShowtoggle(index)}}
    />
     
    ))}
    
      </div>
    </div>
  ) : 
    <p>LOADING</p>
)}

export default ResturantMenu;
