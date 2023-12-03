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
              <h2 className="text-4xl font-bold text-center">Permanent Trainers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 mb-5 container mx-auto">
                {
                    data?.map((item) => <TeamCard key={item._id} item={item}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamSection;