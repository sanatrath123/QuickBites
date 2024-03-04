import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {About ,Body ,ResturantMenu,Cart} from './components/index.js'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
//import Grosery from "./components/Grosery"
import { Provider } from 'react-redux'
import {store} from './store/Store.js'

//implimanting lazy loading for grocery section
const Grosery = lazy(()=>import('./components/Grosery'))



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
      },
      {
        path:"/Grosery",
        element: <Suspense fallback={<h1 className='text-center'>LOADING</h1>}>
          <Grosery/>
        </Suspense>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
 <Provider store={store}>
  <React.StrictMode>
  <RouterProvider router={Approute} />
 </React.StrictMode>
 </Provider>
)
