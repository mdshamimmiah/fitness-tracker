import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";


const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled : !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;