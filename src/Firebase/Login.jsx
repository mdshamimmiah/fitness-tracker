import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import swal from 'sweetalert';
import { AuthContext } from "./AuthProvider";


const Login = () => {
const Navigate = useNavigate();
const location = useLocation();
 

const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    if(password.length < 6){
      alert('please minimum 6 crearecter')

      
    }
    

signInUser(email, password)
.then(result => {
  console.log(result.user)
  swal("Good job!", "You logged successfully", "success")
  e.target.reset();
  Navigate(location?.state ?location?.state :"/")
})
.catch(error => {
  console.error(error)
  swal("opps!", "invalid password or email", "error")
})

  }


const handleGoogleSign = () =>{
  signInWithGoogle()
  .then(result =>{
    console.log(result.user)
    Navigate(location?.state ?location?.state :"/")
  })
  .catch(error =>{
    console.error(error)
  })
}



    return (
      <div className="hero min-h-screen bg-purple-400 w-full">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-400">
         <div className="card-body">

        <form onSubmit={handleLogin}>
        <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
        </form>
        <p>Please go to register<Link to='/register'><button className="btn btn-link">Register</button></Link> </p>
        <button onClick={handleGoogleSign} className="btn p-6 m-8"><FcGoogle ></FcGoogle> Google </button>
         </div>
        </div>
      </div>
    </div>
    );
};

export default Login;