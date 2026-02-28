"use client"
import { useState } from "react"


export default function Hookpage(){
    const [count, Setcount] = useState(0);
    return(
<main>
    <div className="bg-yellow-500 w-[200vh] h-[200vh]">
    <div className="flex py-[100px] flex-col px-[700px] gap-[30px]">
         <p className="text-[40px] border-1 border-black-500 text-center ml-[65px] rounded-lg bg-black text-white">{count}</p>
        <div className="flex gap-7">
            <button onClick={()=> Setcount(count+8)} className="text-[40px] border-1 border-black-500 rounded-lg p-[10px] bg-green-500 text-white">start</button>
            <button onClick={()=> Setcount(count*0)} className="text-[40px] border-1 border-black-500 rounded-lg p-[10px] bg-red-500 text-white">reset</button>
        </div>
       </div>
       </div>
</main>
    )
}