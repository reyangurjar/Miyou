"use client"
import React, { useState,useEffect } from "react";
import Link from "next/link"

// import { FiSearch } from "react-icons/fi";
import SearchIcon from "@/assets/Icons/SearchIcon";
import Search from "./Search";
import Image from "next/image";
function Nav() {
  const [isActive, setIsActive] = useState(false);

  


  return (
    <div>
      <nav className=" md:mx-8 flex justify-between items-center pt-7 px-20 mb-0  ">
     
        <Link href="/">
          <Image className="" width={80} height={31} src={"/logo.svg"} alt="Miyou logo" />
        </Link>
        <div className="nav-links hidden sm:block">
          <Link className="mx-6 font-normal text-white hover:text-gray-400" href="/trending/1">Trending</Link>
          <Link className="mx-6 font-normal text-white hover:text-gray-400" href="/popular/1">Popular</Link>
          <Link className="mx-6 font-normal text-white hover:text-gray-400" href="/favourites/1">Favourites</Link>
          <Link className="mx-6 font-normal text-white hover:text-gray-400" href="/top100/1">Top 100</Link>
        </div>
      

          
            <button className="btn bg-transparent  justify-center text-white md:bg-primary" onClick={(e) => setIsActive(!isActive)}>
              <SearchIcon className="md:h-4 md:w-4" />
             <div className="hidden md:block">
             Search
             </div>

            </button>
    
         
       
      </nav>
      {isActive && <Search isActive={isActive} setIsActive={setIsActive} />}
      {isActive && <div className="z-9 absolute top-0 h-screen w-screen bg-gray-500 overflow-hidden"></div>}
    </div>
  );
}


export default Nav;



