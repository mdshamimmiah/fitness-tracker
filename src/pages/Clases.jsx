import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

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
      data?.map((item)=> <tr key={item._id}>
       
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
    </div>
  );
};

export default Clases;





