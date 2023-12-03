import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddNewClass = () => {
    const axiosSecure = useAxiosSecure();

    const handleAddClass = (event) =>{
        event.preventDefault();

        const form = event.target;
    
        const time = form.time.value;
        const exercise = form.exercise.value;
        const instructor =form.instructor.value;
        const addClass = {time, instructor, exercise}
        console.log(addClass);
     
            axiosSecure.post(`/classSedule`,addClass)
            .then(res=>{
              console.log(res.data);
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Added new class successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                
            })
            // ...
          .catch((error) => {
            // An error occurred
            console.error(error);
            // ...
          });
       
    


    }
    return (
        <div className="ml-6">
            <div className="hero min-h-screen bg-blue-300">
                <div className="hero-content flex-col l">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a new Class</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm  bg-purple-500 rounded-none">
                        <form onSubmit={handleAddClass} className="card-body">
                            <div className="form-control">
                                <label >Time:</label>
                                <input type="text" id="time" name="time" required/>
                                <span className="label-text">Exercise Name</span>
                                <input type="text" name="exercise" placeholder="exercise" />
                                </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Instructor Name</span>
                                        </label>
                                        <input type="text" name="instructor" placeholder="instructor" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover"></a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add New Class</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            );
           
};

export default AddNewClass;

            // <form id="addClassForm" onsubmit="addClass(event)">
            //     <label for="time">Time:</label>
            //     <input type="text" id="time" name="time" required><br>

            //         <label for="exercise">Exercise:</label>
            //         <input type="text" id="exercise" name="exercise" required><br>

            //             <label for="instructor">Instructor:</label>
            //             <input type="text" id="instructor" name="instructor" required><br>

            //                 <label for="exercise2">Exercise 2:</label>
            //                 <input type="text" id="exercise2" name="exercise2" required><br>

            //                     <label for="instructor2">Instructor 2:</label>
            //                     <input type="text" id="instructor2" name="instructor2" required><br>

            //                         <label for="exercise3">Exercise 3:</label>
            //                         <input type="text" id="exercise3" name="exercise3" required><br>

            //                             <label for="instructor3">Instructor 3:</label>
            //                             <input type="text" id="instructor3" name="instructor3" required><br>

            //                                 <label for="exercise4">Exercise 4:</label>
            //                                 <input type="text" id="exercise4" name="exercise4" required><br>

            //                                     <label for="instructor4">Instructor 4:</label>
            //                                     <input type="text" id="instructor4" name="instructor4" required><br>

            //                                         <label for="exercise5">Exercise 5:</label>
            //                                         <input type="text" id="exercise5" name="exercise5" required><br>

            //                                             <label for="instructor5">Instructor 5:</label>
            //                                             <input type="text" id="instructor5" name="instructor5" required><br>

            //                                                 <button type="submit">Add Class</button>
            //                                             </form>

            //                                                 export default AddNewClass;