import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Slot = () => {

  const { user } = useContext(AuthContext);

const axiosSecure = useAxiosSecure();
  const { timeslot,id: trainer_id,TrainerName
  } = useParams();
  console.log(timeslot);
  const handleSubmit = (e, package_name) => {
    // POST data from here
    const postData = {
      timeslot,
      trainer_id,
      TrainerName,
     user_email:user?.email,
      package_name}

      axiosSecure.post('/slot',postData)
      .then(res => {
        console.log(res.data);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You booking successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })


  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2  max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-md my-4 p-4">
      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center h-[400px]">
        <h3 className="text-xl font-bold mb-2 ">Silver Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Yoga Class on Mondays and Wednesdays</li>
          <li>Cardio Class on Fridays</li>
          <li>Access to Gym Facilities</li>
        </ul>
        <button
          onClick={(e) => handleSubmit(e, "Silver Package")} className="mt-24 bg-blue-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>

      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center h-[400px]">
        <h3 className="text-xl font-bold mb-2">Gold Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Yoga Class on Mondays and Wednesdays</li>
          <li>Cardio Class on Fridays</li>
          <li>Strength Training on Tuesdays and Thursdays</li>
          <li>Access to Gym Facilities</li>
          <li>Nutrition Counseling</li>
        </ul>
        <button
          onClick={(e) => handleSubmit(e, "Gold Package")} className="mt-24 bg-yellow-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>

      <div className="flex flex-col mb-8 p-6 border rounded-md bg-gray-100 text-center">
        <h3 className="text-xl font-bold mb-2">Diamond Plan</h3>
        <p className="font-semibold">Includes:</p>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Unlimited Access to All Classes</li>
          <li>Personal Trainer Sessions (2 per week)</li>
          <li>Access to Gym Facilities</li>
          <li>Nutrition Counseling</li>
          <li>Exclusive Spa Access</li>
        </ul>
        <button onClick={(e) => handleSubmit(e, "Diamond Package")} className="mt-24 bg-purple-500 text-white px-4 py-2 rounded-md">
          Join Now
        </button>
      </div>
    </div >
  );
};

export default Slot;
