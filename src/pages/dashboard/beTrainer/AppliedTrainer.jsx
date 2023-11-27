
import { useEffect, useState } from "react";

import AllTrainerTable from "./AllTrainerTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AppliedTrainer = () => {
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {

        axiosSecure.get('/applied')
            .then(res => setData(res.data))
    }, [])

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
                                <th>Experience</th>
                                <th>AvailableTimeSlot</th>
                                <th>Salary</th>
                                <th>Social Icon</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                data?.map((item) => <AllTrainerTable key={item._id} item={item}></AllTrainerTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedTrainer;