import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ActivityLog = () => {
    const axiosSecure = useAxiosSecure();

    const [data, setData] = useState([]);
    useEffect(() => {
        axiosSecure.get('/slot')
            .then(res => {
                setData(res.data)
            })
        console.log(data);
    })
    return (

        <div className="ml-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                data?.map((item) => <div key={item._id}>

                    <div className="card card-compact w-96 bg-blue-500 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-lg">trainer_id: {item.trainer_id}</h2>
                            <h2>Package : {item.package_name}</h2>
                            <h1>Slot : {item.timeslot
}</h1>
                           
                           
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default ActivityLog;