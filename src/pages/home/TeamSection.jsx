import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TeamCard from "./TeamCard";


const TeamSection = () => {

    const axiosPublic = useAxiosPublic();

    const [data, setData] = useState([]);
    useEffect(() => {

        axiosPublic.get('/team')
            .then(res => setData(res.data))
    }, [])

    console.log(data);

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 mb-5">
                {
                    data?.map((item) => <TeamCard key={item._id} item={item}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamSection;