import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LayoutB from "../pages/layouts/LayoutB";
import Validar from "../pages/validPlaces";
import Denuncias from "../pages/denuncias";


const rotas=createBrowserRouter([
  {
    path: "/",
    element: <LayoutB/>,
    children: [
      {
        index: true, 
        element: <Validar/>
      }, 
      {
        path: "/denuncias",
        element: <Denuncias/>,
      },
      {
        path: "/validação",
        element: <Validar/>,
      }
    ]
  }
])

export default function Router (){
  return(
    <RouterProvider router={rotas}/>
  )
}