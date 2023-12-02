import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Clases = () => {
  const AxiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  useEffect(() => {

    AxiosPublic.get('/classSedule')
      .then(res => setData(res.data))
  }, [])

  console.log(data);


  return (
    <div>
         <Helmet>
        <title>Fitness Tracker | Classes Page</title>
        </Helmet>

      <div className="overflow-x-auto bg-slate-400">
        <table className="table table-zebra">

          <thead className="bg-slate-50 text-lg">
            <tr>

              <th>Time</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>WednesDay</th>
              <th>ThusDay</th>
            </tr>
          </thead>
          <tbody>


            {
              data?.map((item) => <tr key={item._id}>

                <td className=""> {item.time}</td>

                <td>
                  <h1 className=" font-bold"> {item.exercise}</h1> <br />
                  <p className="text-xs"> {item.instructor}</p>
                </td>
                <td>
                  <h1 className=" font-bold"> {item.exercise2}</h1> <br />
                  <p className="text-xs"> {item.instructor}</p>
                </td>
                <td>
                  <h1 className=" font-bold"> {item.exercise}</h1> <br />
                  <p className="text-xs"> {item.instructor}</p>
                </td>
                <td>
                  <h1 className=" font-bold"> {item.exercise2}</h1> <br />
                  <p className="text-xs"> {item.instructor}</p>
                </td>
                <td>
                  <h1 className=" font-bold"> {item.exercise}</h1> <br />
                  <p className="text-xs"> {item.instructor}</p>
                </td>
              </tr>)
            }




          </tbody>
        </table>
      </div>


      <div>
<h2 className="text-3xl text-center font-bold mt-9">All Classes</h2>
<Helmet>
<title>Fitness Tracker| Classes Page</title>
</Helmet>

<div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
<Link to="/trainer">
<div className="w-[240px] border-2 border-blue-600 rounded-none">
  <img className="h-[270px]" src="https://i.ibb.co/2F3DZBj/gm2.jpg" alt="" />
  <h2 className="text-xl font-semibold text-center">Sopiha Devis</h2>
  <h1 className="text-center">Yoga Flow</h1>
  <p className="text-center">experience of 5 years</p>
  </div>
</Link>
  


<Link to="/trainer">
<div className="w-[240px] border-2 border-blue-600 rounded-none">
  <img className="h-[270px]" src="https://i.ibb.co/sRwWcpx/gm1.jpg" alt="" />
  <h2 className="text-xl font-semibold text-center">Sopiha Devis</h2>
  <h1 className="text-center">Yoga Flow</h1>
  <p className="text-center">experience of 8 years</p>
  

</div>
</Link>
</div>
      </div>
    </div>
  );
};

export default Clases;







