import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Nothing from "../Components/Nothing/Nothing";
import OrderReview from "../Components/OrderReview/OrderReview";
import Main from "../Layout/Main";
import SignIn from "../UserLogin/Login/SignIn";
import Order from './../Components/Order/Order';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/order',
                element:<Order />
            },
            {
                path:'/order-review',
                element:<OrderReview />
            },
            {
                path:'/signin',
                element:<SignIn />
            },
            {
                path:'/*',
                element:<Nothing />
            }
            
        ]
    }
])
export default router;