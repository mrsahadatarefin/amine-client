import Login from "../components/Login/Login";
import Home from "../components/home/home";
import SignUp from "../components/signup/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");



 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
           {
            path:'/',
            element:<Home/>
        
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
        {
            path:'/login',
            element:<Login/>
        }
        ]

    }
])