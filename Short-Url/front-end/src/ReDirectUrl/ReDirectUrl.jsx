import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { redirectToUrl } from '../http';

function ReDirectUrl() {
    const { shortId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleRedirectUrl = async () => {
            try {
                const { data } = await redirectToUrl(shortId);
                window.open(data?.redirectURL, '_blank');
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
                navigate('/');
            }
        };

        handleRedirectUrl();
    }, [shortId, navigate]);

    return (
        <>
            {loading ? <h1>Loading...</h1> : <h1>Redirecting...</h1>}
        </>
    );
}

export default ReDirectUrl;
