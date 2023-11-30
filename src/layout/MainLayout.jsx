import { Outlet } from 'react-router-dom'
import Navber from '../component/Navber';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;