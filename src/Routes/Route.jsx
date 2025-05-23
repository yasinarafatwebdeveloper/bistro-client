

import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Main/Main";
import About from "./Pages/About/About";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "./Home/Home/Home";
import Menu from "./Pages/Menu/Menu";
import FoodOrder from "./Pages/FoodOrder/FoodOrder";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
          
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order",
          element:<FoodOrder></FoodOrder>
        },

        
      ]
    },
  ]);
