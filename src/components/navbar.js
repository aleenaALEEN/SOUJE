import React, { useEffect } from "react";
import { NavData } from "./data";
import logo from "../images/souje-logo-10.png";
import { FaFacebookF } from "./data";
import { FaTwitter } from "./data";
import { FaSistrix } from "./data";
// import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../useOnHoveroutside";
import {Menu1,Menu2,Menu3,Menu4,Menu5,Menu6} from "./menu";

export default function Navbar() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [myIndex, setIndex] = useState(0);
  const  myMenus = [<Menu1/>,<Menu2/>,<Menu3/>,<Menu4/>,<Menu5/>,<Menu6/>]
  let myvar = myMenus[myIndex]

  // useEffect(()=>{
    
  // },myIndex)
  console.log(myvar,"this is my var")
  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <>
      <nav class="bg-black mt-[20px] px-2 py-4 sm:px-4 py-2.5  dark:bg-gray-900">
        <div class="container w-[74%] bg-black flex flex-wrap items-center justify-between mx-auto   ">
          <img
            src={logo}
            class="bg-black h-6 mr-3 sm:h-9 cursor-pointer"
            alt="Souje Logo"
          />
          <div className="flex items-center  justify-between w-[600px] ">
          <div
              class="flex text-white hidden  md:block w-[600px] duration-1000"
              ref={dropdownRef}
              id="navbar-default"
            >
              <ul
                className="flex  bg-black w-full justify-around items-center p-3 mt-1 invisible md:visible"
              >
            {
            NavData.li.map((ele,i)=>{
             return( 
            <> 
            
                <li
                  className="bg-black  font-bold text-[14px] py-2 pl-3 pr-4 text-white md:p-0 hover:text-pink-500 duration-1000 cursor-pointer"
                 onMouseOver={() => 
                  {
                  console.log(i,"i'm th index")
                  setIndex(i)
                    setMenuDropDownOpen(true)
                  }}
                
                >{ele}
                  </li>
              
              
            </>
             ) 
             })
            }  
            </ul>
            </div>

            <div className=" w-[100px] flex justify-between">
              <FaFacebookF className="bg-black text-white hover:text-pink-500 duration-1000 cursor-pointer invisible xl:visible" />
              <FaTwitter className="bg-black text-white hover:text-pink-500 duration-1000 cursor-pointer invisible xl:visible" />
              <FaSistrix className="bg-black text-white hover:text-pink-500 duration-1000 cursor-pointer invisible xl:visible" />
            </div>
          </div>
        </div>
      </nav>
   
      {isMenuDropDownOpen && myvar }
    </>
  );
}
