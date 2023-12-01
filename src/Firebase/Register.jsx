/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Register = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserInfo, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState();


  const handleGoogleSign = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
          })
        Navigate(location?.state ? location?.state : "/")
      })
      .catch(error => {
        console.error(error)
      })

  }

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)


    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
      setError("Minimum six characters, at least one letter, one number and one special character");
      swal("Error!", `Minimum six characters, at least one letter, one number and one special character`, "error");
    
    }
    else {
      setError("")
      if (email) {
        createUser(email, password)
          .then(result => {
            console.log(result.user)

            updateUserInfo({
              displayName: name,
              photoURL: photo
            })
              .then(() => {
                const userInfo = { userName: name, email: email }

                console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                  .then(res => {
                    if (res.data.insertedId) {

                      swal("Good job!", "Thanks for register", "success")
                      Navigate('/')
                    }
                  })
              })

          })
          .catch(error => {
            console.error(error);
            swal("Error", "This Mail already used", "success")
          })
      }
    }




    //create user in firebase

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">

            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>Already have an account<Link to='/login'><button className="btn btn-link">Login</button></Link> </p>
          </div>

          <button onClick={handleGoogleSign} className="btn p-6 m-8"><FcGoogle ></FcGoogle> Google </button>

        </div>
      </div>

    </div>
  );
};

export default Register;