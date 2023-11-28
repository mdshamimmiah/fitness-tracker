import { IoEyeSharp } from "react-icons/io5";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const BeTrainerTable = ({ item , reFetch}) => {


  const axiosSecure = useAxiosSecure();
  console.log(item);
  const { photo, name, email, role, age,timeDay,timeWeek,_id
  } = item;
  console.log(name);

  const handleConfirmation = async() => {
   const res = await axiosSecure.patch(`http://localhost:5000/applied/${_id}`);
   console.log(res.data);
   reFetch();
   Swal.fire({
    title: 'Success!',
    text: 'Trainer confirmation Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
})
    
  };


  return (

    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById(`modal${_id}`).showModal()}><IoEyeSharp /></button>
        <dialog id={`modal${_id}`} className="modal">
          <div className="modal-box w-11/12 max-w-5xl bg-sky-200">
            <h3 className="font-bold text-2xl text-center">Trainer Name :{name}</h3>
            <h3 className="font-bold text-xl text-center">Age :{age}</h3>
            <h3 className="font-bold text-xl text-center">Email :{email}</h3>
            <h3 className="font-bold text-xl text-center">TimeDay : {timeDay} hours</h3>
            <h3 className="font-bold text-xl text-center">TimeWeek : {timeWeek} hours</h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
             <div className="flex gap-5 mr-[320px]">
             <button className="btn bg-red-600 text-white">Reject</button>
                <button onClick={handleConfirmation}  className="btn bg-yellow-400">Confirmation</button>
                <button className="btn bg-purple-400">Close</button>
             </div>
              </form>
            </div>
          </div>
        </dialog></td>
    </tr>


  );
};

export default BeTrainerTable;

