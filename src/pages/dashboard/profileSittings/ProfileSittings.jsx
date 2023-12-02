import Swal from "sweetalert2";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";

const ProfileSittings = () => {

    const {user,updateUserInfo} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState({});
    console.log(profile);
    useEffect(() => {
        axiosSecure.get(`/profile?email=${user?.email}`)
            .then(res => {
                setProfile(res.data)

            })
        console.log(profile);
    }, [user,axiosSecure])

const handleUpdate = (event) =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const update ={name, photo}
    console.log(update);
    updateUserInfo( {
        displayName: name, photoURL: photo
      }).then(() => {
        // Profile updated!
        console.log(update);
        axiosSecure.put(`/update/${user?.email}`, update)
        .then(res=>{
          console.log(res.data);
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "update successfully",
              showConfirmButton: false,
              timer: 1500
            });
            
        })
        // ...
      }).catch((error) => {
        // An error occurred
        console.error(error);
        // ...
      });
   


}


    return (
        <div className="ml-6">

            <form onSubmit={handleUpdate} className="border-2 border-blue-600 rounded-none w-[500px] h-[100px]">
               
                <input className="w-full" type="text" name="name" placeholder="name" />
                <input className="w-full" type="url"  name="photo" placeholder="photo" />
                <div>
                <input type="submit" value="update profile" className="btn btn-block bg-black text-white" />
                </div>
            </form>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={profile.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2>user name : {profile.userName}</h2>
                                <h2> email : {profile.email}</h2>

                            </div>
                        </div>
              
            </div>

        </div>
    );
};

export default ProfileSittings;


