import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 5;

const Album = () => {
    const [gallery, setGallery] = useState([]);
    const [activePage, setActivePage] = useState(12);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(false);

    const containerStyle = {
        backgroundImage: 'url("https://i.ibb.co/KVX5zNn/ezgif-com-webp-to-png.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
    };

    const fetchData = () => {
        if (loading) return;

        setLoading(true);

        axios.get('https://fitness-tracker-server-green.vercel.app/photo', {
                params: {
                    page: activePage,
                    size: LIMIT,
                },
            })
            .then(({ data }) => {
                setActivePage(activePage + 1);
                setGallery((prevGallery) => [...prevGallery, ...data]);
                setTotalData(data.length);
            })
            .catch((error) => {
                console.error('Error:', error.response);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    
    }, []);

    return (
        <div>
               <Helmet>
        <title>Fitness Tracker | Gallary</title>
        </Helmet>
            <div className="relative h-screen flex items-center justify-center" style={containerStyle}>
                <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold uppercase text-center">Fitness Center || Gallery</h1>
                </div>
            </div>
            <InfiniteScroll
                dataLength={gallery.length}
                next={fetchData}
                hasMore={gallery.length < totalData}
                loader={<span className="loading loading-spinner loading-lg"></span>}
                endMessage={<p className="text-center text-2xl text-pink-500 font-bold mt-5"><b>You have loaded all data</b></p>}
            >
                <div className="grid grid-cols-4 gap-5 mt-8">
                    {gallery.map((galleries, index) => (
                        <div key={galleries._id || index} className="max-w-md mx-auto bg-white  overflow-hidden shadow-md">
                            <img className="h-64 w-80 object-cover" src={galleries.image} alt="Card" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-center">{galleries.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Album;





