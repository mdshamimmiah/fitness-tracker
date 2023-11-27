
import { useEffect, useState } from "react";
import SubscriberTable from "./SubscriberTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Subscriber = () => {
    const [data, setData] = useState([]);
    const axiosSecure =useAxiosSecure();
    useEffect(() => {

        axiosSecure.get('/NewsLetter')
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
        
        <th>Name</th>
        <th>Email</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

            {
                data?.map((item) => <SubscriberTable key={item._id} item={item}></SubscriberTable>)
            }

</tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default Subscriber;