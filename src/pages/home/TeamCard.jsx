

const TeamCard = ({item}) => {
    return (
        <div>
              <div className="card w-70 bg-white  border-2 border-blue-600 rounded-none ">
  <figure><img className=" w-[200px] h-[200px] rounded-full mt-5" src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
        </div>
    );
};

export default TeamCard;