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
import AppliedDash from "../pages/dashboard/beTrainer/AppliedDash";
import PrivateRoute from "../Firebase/PrivateRoute";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import ManageSlot from "../pages/dashboard/manageSlot/ManageSlot";
import ActivityLog from "../pages/dashboard/activityLog/ActivityLog";
import ProfileSittings from "../pages/dashboard/profileSittings/ProfileSittings";
import Recomanded from "../pages/dashboard/RecommandedClass/Recomanded";
import ManageMember from "../pages/dashboard/manageMember/ManageMember";
import AddNewForum from "../pages/dashboard/AddNewForum/AddNewForum";
import AddNewClass from "../pages/dashboard/addNewClass/AddNewClass";
import ForumPage from "../pages/forumPage/ForumPage";

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
                path:'/ForumsPage',
                element:<ForumPage></ForumPage>
            },
            {
                path:'/trainerBookedPage/:id/:timeslot',
                element:<Slot></Slot>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainer/${params.id}`)
            }

        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
                // admin route
            {
                path:'subscribers',
                element:<Subscriber></Subscriber>
            },
            {
                path:'appliedTrainer',
                element:<AppliedDash></AppliedDash>
            },
            {
                path:'allTrainers',
                element:<AllTrainer></AllTrainer>
            },
            {
                path:'/dashboard/payment/:_id/:salary',
                element:<Payment></Payment>
            },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            },

            // trainer route
            {
                path:'manageSlots',
                element:<ManageSlot></ManageSlot>
            },
            {
                path:'manageMember',
                element:<ManageMember></ManageMember>
            },
            {
                path:'AddNewForum',
                element:<AddNewForum></AddNewForum>
            },
            {
                path:'addNewClass',
                element:<AddNewClass></AddNewClass>
            },


            // member route
            {
                path:'activityLog',
                element:<ActivityLog></ActivityLog>
            },
            {
                path:'ProfileSettings',
                element:<ProfileSittings></ProfileSittings>
            },
            {
                path:'RecommendedClassesPage',
                element:<Recomanded></Recomanded>
            }
        ]
    }
]);

export default router;
