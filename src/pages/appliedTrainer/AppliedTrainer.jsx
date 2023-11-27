import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AppliedTrainer = () => {

    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {

        axiosSecure.get('/addTrainer')
            .then(res => setData(res.data))
    }, [])

    console.log(data);


    return (
        <div>
            
        </div>
    );
};

export default AppliedTrainer;