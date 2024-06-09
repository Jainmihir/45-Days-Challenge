import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import HistoryCard from '../HistoryCard/HistoryCard';
import { getAllUrls } from '../http'; 

function Home() {
    const[urls, setUrls] = useState([]);


    const handleGetAllUrls = async () => {
        try {
            const { data } = await getAllUrls();
            
            setUrls(data?.urls)

        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        handleGetAllUrls();
    }, []);

    console.log(urls);
    return (
        <>
            <Navbar handleGetAllUrls={handleGetAllUrls} />
            <div className="container mx-auto">
                

                    {
                        (urls.length !== 0 && (urls.slice().reverse().map((url, index) => {
                            return <HistoryCard key ={url._id} urlNumber={index + 1}
                            originalUrl={url.redirectURL}
                            shortenedUrl={`${import.meta.env.VITE_CLIENT_SIDE_URL}/shorturl/${url.shortId}`}
                            clickCount={url.visitHistory.length}
                            shortId={url.shortId}
                            
                            />
                        })))
                    }

            </div>

        </>
    )
}

export default Home;