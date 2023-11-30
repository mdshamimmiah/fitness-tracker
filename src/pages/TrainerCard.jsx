import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";



const TrainerCard = () => {
 
  const{_id}=useLoaderData({});
  
  const [myData, setData] = useState(null);

  useEffect(() => {
    if (_id) {
      axios.get(`http://localhost:5000/trainer/${_id}`)
        .then(res => res.data)
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      console.error('Trainer ID not found in route params');
    }
  }, [_id]);

  if (!myData) {
    return <div><p>Loading...</p></div>;
  }
 

//   const handleSlot = (hours) => {
//     // Assuming each slot is 1 hour in length
//     return myData.AvailableTimeSlot.from({ length: hours }, (_, index) => index + 1);
//   };
console.log(myData);
// const slot = myData?.slot[0]?.split(';')
// console.log(slot);

  return ( 
    <div className=" mx-auto mt-9">
    
        <div key={myData._id} className="bg-white  flex overflow-hidden shadow rounded-lg">
        <div className="flex">
        <div>
            <img className="w-full h-96 object-cover object-center" src={myData.ProfileImage} alt='' />
        </div>
        <div>
        <div className="p-6">
        <p className="text-5xl">{myData.TrainerName}</p>
          <p className="text-gray-600 mb-4">{myData.role}</p>
          <p className="font-semibold">Experience of {myData.YearsOfExperience} years</p>
          <div className="mb-4">
          {/* <p className="text-gray-700">Available Time Slots:</p> */}
                {/* <ul className="list-disc ml-6">
                  {myData.availableTimeSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul> */}
              <Link to={`/trainerBookedPage/${myData._id}`}>
            <p  className="bg-purple-600 text-white w-full" >Available Slot : {myData.slot.length} <br />{myData.slot}</p>
              </Link>
          </div>
          
          <h2 className="card-title text-2xl font-extrabold"><FaFacebookF />  <IoLogoTwitter />  <FaLinkedinIn /></h2>
       
        </div>
        </div> 
        </div>
      </div>
      <div className="justify-center flex m-6">
        <Link to={'/beTrainer'}> <button className="btn btn-primary">Become a Trainer</button>  </Link>
        </div>
    </div>

  );
};

export default TrainerCard;