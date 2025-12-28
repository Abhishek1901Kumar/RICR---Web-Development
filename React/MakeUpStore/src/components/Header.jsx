import React from "react";
import {Link} from "react-router-dom";
import { IoHome } from "react-icons/io5";


const Header = ()=>{
    return(
        <>
           <div className="flex bg-amber-700 justify-between py-2">
            <h1 className= "text-4xl">My Website</h1>
            <div className="flex gap-3 justify-center items-center">
               <Link to={"/"} className="flex text-white items-center gap-1"><IoHome/> Home</Link>
               <Link to={"/about"} className="text-white">About</Link>
               <Link to={"/product"} className="text-white">Product</Link>
               <Link to={"/contact"} className="text-white">Contact</Link>
            </div>
           </div>
        </>
    );
};

export default Header;