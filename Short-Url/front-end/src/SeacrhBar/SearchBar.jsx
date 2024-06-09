import React from "react";
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {IoMdClose} from 'react-icons/io'
import { CgAdd } from "react-icons/cg";

function SearchBar({value, onChange , handleSearch , onClearSearch}) {
    return (
        <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
            <input 
            type="text" 
            placeholder="Generate Shortener Url"
            className="w-full text-xs bg-transparent py-[11px] outline-none"
            value={value}
            onChange={onChange}
            />

            {value && <IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" onClick={onClearSearch} />}
            <CgAdd className="text-slate-400 cursor-pointer hover:text-black" onClick={handleSearch} />
        </div>
    )
}

export default SearchBar;