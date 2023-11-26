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
                path:'/trainer',
                element: <Trainer></Trainer>,
               
            },
            {
                path:'/Trainer/:id',
                element: <TrainerCard></TrainerCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainer?/${params.id}`)
            },
            {
                path:'/beTrainer',
                element:<BeTrainer></BeTrainer>
            }

        ]
    },
]);

export default router;
