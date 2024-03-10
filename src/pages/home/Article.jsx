import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import SectionTitle from "../../hooks/SectionTitle";


const Article = () => {
    const axiosPublic = useAxiosPublic();

    const [data, setData] = useState([]);
    useEffect(() => {

        axiosPublic.get('/article')
            .then(res => setData(res.data))
    }, [])

    console.log(data);

    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
           <h1 className="text-3xl font-bold text-center mb-6">Article Section</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                data?.map((item) => <div key={item._id}>

                
<div className="card w-70 h-90 bg-white border-2 border-blue-600 rounded-none mb-6 ">

<figure><img className=" w-[600px] h-[200px] mt-8" src={item.imageUrl
} alt="Shoes" /></figure>
<div className="card-body text-center ">
    <p className="text-justify text-sm">High-Intensity Interval Training (HIIT) has gained immense popularity in the fitness world, and for good reason. This innovative workout approach alternates between short bursts of intense exercise and brief periods of rest, challenging the body and delivering impressive results.</p>
   <div className="flex">
   <p className="text-5xl">{item.TrainerName}</p>
    <p className="font-semibold"> {item.content}</p>
    <h2 className="card-title text-2xl font-extrabold mx-auto"> </h2>
    <p className="text-xl text-purple-800 font-bold"> {item.category}</p>
    <p className="text-xl text-purple-800 font-bold"> {item.date}</p>
    <p className="text-xl text-purple-800 font-bold"> {item.author}</p>
   </div>
    <div>
        
    </div>
</div>
</div>



                </div>)
            }
        </div>
        </div>
    );
};

export default Article;