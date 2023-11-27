import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../Firebase/Login";
import Register from "../Firebase/Register";
import ErrorPage from "../Firebase/ErrorPage";
import Album from "../pages/galary/Album";
import BeTrainer from "../Be Trainer/BeTrainer";
import Trainer from "../pages/Trainer";
import TrainerCard from "../pages/TrainerCard";
import Classes from "../pages/Clases";
import Slot from "../pages/Slot";
import Dashboard from "../pages/dashboard/Dashboard";
import Subscriber from "../pages/subscriber/Subscriber";
import AllTrainer from "../pages/dashboard/allTrainer/AllTrainer";
import Payment from "../pages/dashboard/allTrainer/Payment";
import AppliedTrainer from "../pages/appliedTrainer/AppliedTrainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {path: '/',
            element: <Home></Home>

            },
          
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path:'/album',
                element: <Album></Album>
            },
            {
                path: '/classes',
                element:<Classes></Classes>
            },
            {
                path:'/trainer',
                element: <Trainer></Trainer>,
               
            },
            {
                path:'/Trainer/:id',
                element: <TrainerCard></TrainerCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainer/${params.id}`)
            },
            {
                path:'/beTrainer',
                element:<BeTrainer></BeTrainer>
            },
            {
                path:'/trainerBookedPage/:id',
                element:<Slot></Slot>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainer/${params.id}`)
            }

        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
                // admin route
            {
                path:'subscribers',
                element:<Subscriber></Subscriber>
            },
            {
                path:'appliedTrainer',
                element:<AppliedTrainer></AppliedTrainer>
            },
            {
                path:'allTrainers',
                element:<AllTrainer></AllTrainer>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            }
        ]
    }
]);

export default router;
