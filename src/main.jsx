import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {About ,Body ,ResturantMenu} from './components/index.js'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'


const Approute = createBrowserRouter([

  
  {
    path:"/",
    element:<App/>,
     
    children: [
     {
      path:'/',
      element:<Body/>
     },
     
      {
        path:"/about",
        element:<About/>
      },
      {
        path: "/resturant/:resId",
        element:<ResturantMenu  />
      }
      
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
 <React.StrictMode>
  <RouterProvider router={Approute} />
 </React.StrictMode>

)
