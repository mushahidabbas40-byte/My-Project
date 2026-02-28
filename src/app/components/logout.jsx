
"use client"
import LogOut from "@/authentication/Logout";

export default function Logoutpage(){
    return(
    <main>
        <button onClick={() =>{
            LogOut();
        }} className="bg-black text-white rounded-lg border-2 p-1 font-bold  trasation duration-100 hover:bg-red-500 hover:text-black">Logout</button>
    </main>
    );
}