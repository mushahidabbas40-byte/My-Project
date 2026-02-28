"use client"

import Delete from "../operations/delete"

export default function DeleteData({id}){
   const handleSubmit = async () =>{
       const data = await Delete(id)
   }
    return (
        <button onClick={handleSubmit} className="px-4 py-2 bg-red-600 rounded-lg text-white font-bold">Delete</button>
    )
}