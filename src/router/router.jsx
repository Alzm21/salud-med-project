import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layouts/Applayout";
import HomePage from "../pages/homepage/HomePage";
import AboutUs from "../pages/aboutus/AboutUs"
import Contact from "../pages/contactUs/Contact"
import MedServices from "../pages/medservices/MedServices"



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/nosotros",
                element: <AboutUs/>
            },
            {
                path: "/contacto",
                element: <Contact/>
            },
            {
                path: "/servicios",
                element: <MedServices/>
            }
        ]
    }
])