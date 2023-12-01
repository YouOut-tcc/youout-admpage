import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LayoutB from "../pages/layouts/LayoutB";
import Validar from "../pages/validPlaces";

const rotas=createBrowserRouter([
  {
    path: "/",
    element: <LayoutB/>,
    children: [
      {
        index: true, 
        element: <Validar/>
      }
    ]
  }
])

export default function Router (){
  return(
    <RouterProvider router={rotas}/>
  )
}