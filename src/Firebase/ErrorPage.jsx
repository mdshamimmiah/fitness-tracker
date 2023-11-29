import error from '../assets/error.jpg'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
    <div>
            <div className="mt-31">
        <img className='w-9/12 mx-auto' src={error} alt="" />
        </div>
      <Link to='/'>
      <h2 className='text-4xl text-center text-purple-600 font-extrabold'>BACK TO HOME</h2>
      </Link>
    </div>
    );
};

export default ErrorPage;



//  git commit -m "first commit"
//
