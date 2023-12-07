import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LayoutB from "../pages/layouts/LayoutB";
import LayoutA from "../pages/layouts/LayoutA";
import Validar from "../pages/validPlaces";
<<<<<<< HEAD
import Denuncias from "../pages/denuncias";
=======
import Login from "../pages/login";
import theme from "../styles/Global";
import { ThemeProvider } from "@mui/material/styles";
>>>>>>> 2b56e33471d6358a45abbef95809caebf004c307


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
  },
  {
    path: "/teste",
    element: <LayoutA/>,
    children: [
      {
      index: true,
      element:  <Login/>
    }
    ]
    
  }
])

export default function Router (){
  return(
    <ThemeProvider theme={theme}>
    <RouterProvider router={rotas}/>
   
  </ThemeProvider>
  )
}