import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled : !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;



// const { data: isAdmin, isPending: isAdminLoading } = useQuery({