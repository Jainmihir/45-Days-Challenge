import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import SearchBar from '../SeacrhBar/SearchBar';
import { generateShortUrlId } from '../http/index'

function Navbar({ handleGetAllUrls }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login");
    }

    const handleSearch =  async () => {
        try {
            const { data } = await generateShortUrlId({
                url: searchQuery
            });
    
            setId(data?.id);
            setSearchQuery("");
            handleGetAllUrls();
        } catch (err) {
            console.log(err);
        }

    };

    const onClearSearch = () => {
        setSearchQuery("");
    }
    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
            <h2 className='text-xl font-medium text-black py-2'>Short.URL</h2>

            <SearchBar value={searchQuery} onChange={({ target }) => {setSearchQuery(target.value)} }
            handleSearch={handleSearch} onClearSearch={onClearSearch} />
            <ProfileInfo onLogout={onLogout} />


        </div>

    )
}

export default Navbar;