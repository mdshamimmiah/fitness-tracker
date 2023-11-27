
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllTrainerTable from "./AllTrainerTable";


const AllTrainer = () => {
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {

        axiosSecure.get('/trainer')
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
         <th>Social Icon</th>
      
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

export default AllTrainer;