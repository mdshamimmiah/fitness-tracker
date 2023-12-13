


// import Swal from 'sweetalert2'
import Swal from 'sweetalert2';




const NewsLetter = () => {


  

    const handleNewsLetter = event => {

        event.preventDefault();




        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
       
        const newNewsLetter = { name, email }
        console.log(newNewsLetter);


        // send data to the server

        fetch('https://fitness-tracker-server-green.vercel.app/NewsLetter', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNewsLetter)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'News Latter Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
    <div data-aos="fade-up"
    data-aos-duration="3000">

<div className="bg-gray-300 w-full mb-7 mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-10">News Letter</h2>
            <form onSubmit={handleNewsLetter}>
                {/* first */}
                <div className="md:flex mb-8">

                  


                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-full ml-4 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>





            

                <input type="submit" value="Subscibe Now" className="btn btn-block bg-purple-500 text-white" />
            </form>
          
        </div>
    </div>
        
    );
};

export default NewsLetter;