import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layouts/Applayout";
import HomePage from "../pages/homepage/HomePage";
import AboutUs from "../pages/aboutus/AboutUs"
import Contact from "../pages/contactUs/Contact"
import MedServices from "../pages/medservices/MedServices"
import MisionVision from "../pages/aboutus/MisionVision";
import BusinessPhilosophy from "../pages/aboutus/BusinessPhilosophy";



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
                children: [
                    {
                        path: "quienes-somos", element: <AboutUs/>,
                    },
                    {
                        path: "mision-vision", element: <MisionVision/> ,
                    },
                    {
                        path: "filosofia-empresarial", element: <BusinessPhilosophy/> ,
                    },
                ]
            },
            {
                path: "/servicios", element: <MedServices/>
            },
            {
                path: "/contacto", element: <Contact/>
            },
        ]
    }
])