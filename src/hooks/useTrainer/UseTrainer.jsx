import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import useAxiosSecure from "../useAxiosSecure";



const UseTrainer = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    const { data: isTrainer } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled : !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user?.email}`);
            console.log(res.data);
            return res.data?.trainer;
        }
    })
    return [isTrainer]
};

export default UseTrainer;



// const { data: isAdmin, isPending: isAdminLoading } = useQuery({