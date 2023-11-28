
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BeTrainerTable from "./BeTrainerTable";


const AppliedDash = () => {
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [reloadData, setReloaddata] = useState(true);
    useEffect(() => {

        axiosSecure.get('/applied')
            .then(res => setData(res.data))
    }, [reloadData])
    const reFetch = () => {
        setReloaddata(!reloadData)
    }

    console.log(data);
    return (
        <div>
            <div className="ml-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Trainer Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                data?.map((item) => <BeTrainerTable key={item._id} item={item} reFetch ={reFetch}></BeTrainerTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedDash;