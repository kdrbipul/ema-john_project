
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardProfile from "../Components/Dashboard/DashboardProfile/DashboardProfile";
import Home from "../Components/Home/Home";
import Nothing from "../Components/Nothing/Nothing";
import OrderReview from "../Components/OrderReview/OrderReview";
import Main from "../Layout/Main";
import SignIn from "../UserLogin/Login/SignIn";
import Rsgister from "../UserLogin/Registration/Rsgister";
import Order from './../Components/Order/Order';
import About from './../Components/Dashboard/About/About';
import Service from './../Components/Dashboard/Service/Service';
import Project from "../Components/Dashboard/Project/Project";
import Contact from "../Components/Dashboard/Contact/Contact";
import Footer from "../Components/Dashboard/Footer/Footer";
import PrivetRoute from "./PrivetRouter/PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<PrivetRoute><Home /></PrivetRoute>
            },
            {
                path:'/order',
                element:<Order />
            },
            {
                path:'/order-review',
                element:<OrderReview />,
                loader: () => fetch('product.json')
            },
            {
                path:'/signin',
                element:<SignIn />
            },
            {
                path:'/register',
                element:<Rsgister />
            },
            {
                path:'/*',
                element:<Nothing />
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard />,
        children:[
            {
                path:'/dashboard',
                element:<About />
            },
            {
                path:'/dashboard/profile',
                element:<DashboardProfile />
            },
            {
                path:'/dashboard/service',
                element:<Service />
            },
            {
                path:'/dashboard/project',
                element:<Project />
            },
            {
                path:'/dashboard/contact',
                element:<Contact />
            },
            {
                path:'/dashboard/Footer',
                element:<Footer />
            }

        ]
    }
])
export default router;