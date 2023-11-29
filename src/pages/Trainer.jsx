import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import SectionTitle from "../hooks/SectionTitle";


const Trainer = () => {
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    useEffect(() => {

        axiosPublic.get('/trainer')
            .then(res => setData(res.data))
    }, [])

    console.log(data);
    return (


        <div>
            <SectionTitle heading="Our Trainer"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    data?.map((item) => <div key={item._id}>


                        <div className="card w-70 bg-white  border-2 border-blue-600 ">

                            <figure><img className=" w-[200px] h-[200px] mt-5" src={item.ProfileImage} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <p className="text-5xl">{item.TrainerName}</p>
                                <p className="font-semibold">Experience of {item.YearsOfExperience} years</p>
                                <h2 className="card-title text-2xl font-extrabold mx-auto"><FaFacebookF />  <IoLogoTwitter />  <FaLinkedinIn /></h2>
                                <p className="text-xl text-purple-800 font-bold">AvailableTimeSlot : {item.AvailableTimeSlot} if(AvailableTimeSlot)</p>
                                <Link to={`/Trainer/${item._id}`}>
                                    <button className="text-lg">Know More...</button>
                                </Link>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Trainer;