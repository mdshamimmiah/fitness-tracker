import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSubscript,FaUsers } from "react-icons/fa";
import { FaForumbee } from "react-icons/fa";
import { SiTrainerroad } from "react-icons/si";
import { IoGitPullRequest } from "react-icons/io5";
import { MdOutlineBalance } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import useAdmin from "../../hooks/useAdmin";
import UseTrainer from "../../hooks/useTrainer/UseTrainer";
import { MdHotelClass } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
// import useAdmin from "./hooks/useAdmin";


const Dashboard = () => {

    const {user} = useContext(AuthContext)

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    const [isTrainer] = UseTrainer();
    console.log(isAdmin);
    
    return (
        <div className="flex">
               <Helmet>
        <title>Fitness Tracker |Dashboard</title>
        </Helmet>
       
            <div className="w-64 min-h-screen bg-blue-300">
                <h1 className="text-xl ml-8">Dashboard</h1>
                <ul className="menu">
                    {
                       user && isTrainer &&


                          
                    <>
                

                        <li><NavLink to='/'> <FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/manageSlots'> <MdOutlineManageAccounts /> Manage Slots</NavLink></li>
                        <li><NavLink to='/dashboard/manageMember'># Manage member</NavLink></li>
                        <li><NavLink to='/dashboard/AddNewForum'><FaForumbee /> Add new Forum</NavLink></li>
                        <li><NavLink to='/dashboard/addNewClass'><MdHotelClass />Add new Class</NavLink></li>
                      
                    </>
                    }
            
               {
                   user && isAdmin && <>

                    <li><NavLink to='/'> <FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/subscribers'> <FaSubscript></FaSubscript> All subscribers</NavLink></li>
                    <li><NavLink to='/dashboard/allTrainers'> <SiTrainerroad /> All Trainers</NavLink></li>
                    <li><NavLink to='/dashboard/appliedTrainer'><IoGitPullRequest />Applied Trainer </NavLink></li>
                    <li><NavLink to='/dashboard/balance'> <MdOutlineBalance />Balance</NavLink></li>
                    <li><NavLink to='/dashboard/users'><FaUsers />All users</NavLink></li>
                </>
                    // :
                    // <>

                    //     <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>
                    //     <li><NavLink to='/dashboard/ manageSlots'> <MdOutlineManageAccounts /> Manage Slots</NavLink></li>
                      
                    // </>
               }
               {
                isAdmin || isTrainer === false &&
                    <>
                <li><NavLink to='/'><FaHome></FaHome>Member Home</NavLink></li>
                <li><NavLink to='/dashboard/activityLog'><LuActivity /> Activity Log</NavLink></li>
                <li><NavLink to='/dashboard/ProfileSettings'><ImProfile />Profile Settings</NavLink></li>
                <li><NavLink to='/dashboard/RecommendedClassesPage'>❖ Recommended Classes Page</NavLink></li>
              
              
                </>     
               }

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;