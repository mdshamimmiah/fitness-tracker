import { FaFacebookF} from "react-icons/fa";
import { Link } from "react-router-dom";

const AllTrainerTable = ({item}) => {
    console.log(item);
    const { TrainerName, YearsOfExperience, ProfileImage,AvailableTimeSlot
    } = item;
    console.log(name);
      return (
    
        <tr>
            <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={ProfileImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </td>
          <td>{TrainerName}</td>
          <td>{YearsOfExperience}</td>
           <td>{AvailableTimeSlot}</td>
          <td>{<FaFacebookF />  }</td>
        <td> <Link to='/dashboard/payment'><button className="bg-blue-500 w-32 rounded-md h-9">Pay</button></Link></td>
       
        </tr>
   
     
      );
  };
  
  export default AllTrainerTable;