import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import ClassTable from "./ClassTable";


const Recomanded = () => {

    const AxiosPublic = useAxiosPublic();

    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    useEffect(() => {

        axiosPublic.get('/clas')
            .then(res => setData(res.data))
    }, [])

    console.log(data);
    return (

        <div className="ml-6">
            <Helmet>
                <title>Fitness Tracker | Recommended Class</title>
            </Helmet>

            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                              <th>Name</th>
                            <th>Trainer</th>
                            <th>Type</th>
                            <th>Type</th>
                            <th>duration</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data?.map((item) => <ClassTable key={item._id} item={item}></ClassTable>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recomanded;