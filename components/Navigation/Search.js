import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchIcon from "@/assets/Icons/SearchIcon";
import CloseIcon from "@/assets/Icons/CloseIcon";

function Search({ isActive, setIsActive }) {
  const router = useRouter();
  const [title, setTitle] = useState("");

  function handleNavigation() {
    if (title !== "") {
      setIsActive(false);
      router.push("/search/" + title);
    }
  }

  return (
    <div className="bg-[#1a1927] absolute z-10 top-[30%] left-1/2 transform -translate-x-1/2 sm:w-4/5 w-[93%] border border-[#35334e] rounded-lg">
      <div className="closebutton flex justify-end ">
        <button
          className="bg-transparent cursor-pointer p-4 border-[none]"
          onClick={(e) => setIsActive(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="bg-[#1a1927] p-4 sm:px-16 sm:pb-14 rounded-lg">
        <div className=" bg-[white] mb-4 px-4 py-[0.3rem] main flex-col sm:flex-row bg-transparent p-0 flex items-center w-full sm:bg-[white]  justify-between  sm:pl-[1.2rem] sm:pr-[0.8rem] sm:p-2 rounded-[0.4rem]">
          <div className=" bg-[white] w-full   rounded-md flex items-center ">
            <SearchIcon />

            <input
              type="text"
              className="outline-none text-base font-normal w-full bg-[white] text-[black] pl-2 pr-8 py-4 border-[none] placeholder:text-[#c5c5c5]"
              required
              placeholder={"Enter the name of the anime"}
              value={title}
              autoFocus
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleNavigation();
                }
              }}
            />
            <button
              className="btn btn-primary hidden sm:inline-flex"
              onClick={() => {
                handleNavigation();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="btn btn-primary sm:hidden w-full inline-flex"
          onClick={() => {
            handleNavigation();
          }}
        >
          Search
        </button>
        {/* {title === "" && <button className="btn btn-primary w-full sm:w-auto ">Search</button>} */}
      </div>
    </div>
  );
}

export default Search;
