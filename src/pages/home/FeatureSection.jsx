

const FeatureSection = () => {
    return (

       <div>
        <h1 className="text-center text-5xl mt-6 ">Featured Section</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img  className="mt-2" src="https://i.ibb.co/92Fq907/f3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img className="mt-6" src="https://i.ibb.co/4VFn31W/f9.jpg" alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                
                </div>
            </div>
            <div className="card w-96 bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img src="https://i.ibb.co/0yMSm5L/f4.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img  className="mt-2"src="https://i.ibb.co/YpfwnZ0/f6.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2 ">
                <figure><img className="mt-6" src="https://i.ibb.co/gv5r7Qd/f7.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>
            <div className="card w-96  bg-white  border-2 border-blue-600 rounded-none p-2">
                <figure><img className="mt-2" src="https://i.ibb.co/nRKDwhr/f8.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>

        </div>
       </div>
    );
};

export default FeatureSection;