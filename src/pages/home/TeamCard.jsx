

const TeamCard = ({item}) => {
    return (
        <div>
          
              <div className="card w-70 bg-white  border-2 border-blue-600 rounded-none container mx-auto">
  <figure><img className=" w-[200px] h-[200px] rounded-full mt-5" src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{item.name}</h2>
    <p>{item.role}</p>
    <p>Experience :{item.experience}</p>
   
  </div>
</div>
        </div>
    );
};

export default TeamCard;