import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSubscript } from "react-icons/fa";
import { SiTrainerroad } from "react-icons/si";
import { IoGitPullRequest } from "react-icons/io5";
import { MdOutlineBalance } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
// import useAdmin from "./hooks/useAdmin";


const Dashboard = () => {

    // TODO: get isAdmin value from the database
    
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-300">
                <ul className="menu">

                   <>

                            <li><NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/subscribers'> <FaSubscript></FaSubscript> All subscribers</NavLink></li>
                            <li><NavLink to='/dashboard/allTrainers'> <SiTrainerroad /> All Trainers</NavLink></li>
                            <li><NavLink to='/dashboard/appliedTrainer'><IoGitPullRequest />Applied Trainer </NavLink></li>
                            <li><NavLink to='/dashboard/balance'> <MdOutlineBalance />Balance</NavLink></li>
                        </>
                            :
                            <>

                                <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/ manageSlots'> <MdOutlineManageAccounts /> Manage Slots</NavLink></li>
                              
                            </>
{/*                     
                    <div className="divider"></div>
                    <li><NavLink to='/'> <FaHome></FaHome>  Home</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaSearch></FaSearch>  Menu</NavLink></li>
                    <li><NavLink to='/order/contact'> <FaVoicemail></FaVoicemail>  Contact</NavLink></li> */}
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;