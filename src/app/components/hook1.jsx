"use client"
import { IoMdCall } from "react-icons/io";


import { useState } from "react";
import { GiCaravel } from "react-icons/gi";


export default function Mynave(){
    const [open,Setopen]= useState(false)
    return(
<main>
    <nav className="flex justify-between flex-row">
        <GiCaravel className="text-3xl"/>
        <p className="flex items-center gap-2"> Digiarno</p>
        <button onClick={() =>Setopen(!open)} className="lg:hidden sm:flex">more</button>
        <div className="hidden md:flex lg:flex gap-4">
          <p>Home</p> 
          <p>About</p>
          <p>Service</p> 
        </div>
        <p> <IoMdCall />Contact</p>
    </nav>
    {
       open && <div className= "lg:hidden sm:flex flex-col gap-3 p-4 bg-black text-white absolute left-[150px]">
       <p>Home</p>
       <p>About</p>
       <p>Service</p>
    </div>
    }
</main>
    );
}