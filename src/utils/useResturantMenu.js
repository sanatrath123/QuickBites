import { useEffect, useState } from "react"

function useResturantMenu(Id) {
const [resinfo , setResinfo] = useState(null)
useEffect(()=>{
fetchfun()
},[])

const fetchfun= async ()=>{
   try {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.237942885104747&lng=85.82812193781139&restaurantId=${Id}`)
    const json = await response.json()
    console.log(json.data)
    setResinfo(json.data)
   } catch (error) {
    console.log("error in fetch resmenu api", error)
   }
    
}

  return resinfo
}

export default useResturantMenu