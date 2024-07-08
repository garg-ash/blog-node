import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="bg-slate-400 w-full flex justify-between px-5 py-3">
        <h2>
            <Link to = "/" className="text-2xl text-white bg-slate-600 hover:text-black rounded px-1 py-1" >FullStack App</Link>
        </h2>
        <nav>
            <ul>
                <li>
                    <Link to = "/ShowMessage" className="bg-gray-300 rounded px-1 py-1 my-2 text-white hover:text-black">Show Message</Link>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
}
export default Header;