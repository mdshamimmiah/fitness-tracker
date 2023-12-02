import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Firebase/AuthProvider";


const ManageSlot = () => {
    const { user } = useContext(AuthContext);
const axiosPublic = useAxiosSecure();
const [manage, setManage] = useState();
useEffect(()=>{

    axiosPublic.get(`/manage?email=${user?.email}`)
    .then(res=>{
        setManage(res.data)
    })

},[])
console.log(manage);

    return (
        <div className="ml-6">
           <h2>hlw</h2> 
        </div>
    );
};

export default ManageSlot;





