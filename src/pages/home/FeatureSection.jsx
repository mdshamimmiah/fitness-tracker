

const FeatureSection = () => {
    return (

       <div className="mx-auto" data-aos="fade-left">
        <h1 className="text-center text-5xl mt-6 ">Featured Section</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-auto">
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 mx-auto ">
                <figure><img  className="mt-2" src="https://i.ibb.co/92Fq907/f3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Activity Tracking</h2>
                    <p>If you love to track your steps, keep a careful eye on your health and sleep data, or plan workout regimens with the help of smart tech, you probably have a smartwatch or health wearable. </p>
                   
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img className="mt-6" src="https://i.ibb.co/4VFn31W/f9.jpg" alt="Shoes" /></figure>
                
                <div className="card-body">
                <h2 className="card-title text-2xl">Heart Rate Monitoring</h2>
                <p>Monitoring is to track your steps, keep a careful eye on your health and sleep data, or plan workout regimens with the help of smart tech, you probably have a smartwatch or health wearable. </p>
                
                </div>
            </div>
            <div className="card w-96 bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img src="https://i.ibb.co/p0KZKzs/f22.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl">Workout Plans</h2>
                    <p>Weak local muscles may result in an unstable arch that does not absorb impact very well and leads to faulty biomechanics. When local muscles fail to stabilize the foot quickly</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img  className="mt-2"src="https://i.ibb.co/DQnWcht/f33.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl">Nutrition Tracking</h2>
                    <p>Health Shots got in touch with Hari Lakshmi, Consultant – Dietitian/Nutritionist, Motherhood Hospitals, Chennai, to find out if black rice is a healthy choice for diabetes patients or not.</p>
                  
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img className="mt-6" src="https://i.ibb.co/gv5r7Qd/f7.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl">Motivational Season</h2>
                    <p>With fall in full swing and everyone settled into a back-to-school routine</p>
                   
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2">
                <figure><img className="mt-2" src="https://i.ibb.co/cr9Gk89/f66.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl">Weekly Fitness Test</h2>
                    <p>It goes without saying that breasts change over time, and by change I mean sag.</p>
                   
                </div>
            </div>

        </div>
       </div>
    );
};

export default FeatureSection;