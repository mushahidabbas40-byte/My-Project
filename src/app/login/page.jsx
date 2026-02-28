"use client"

import LogIn from "@/authentication/Login";
import { useState } from "react";

 
 export default function LoginPage(){
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState("");
   const [message, Setmessage] = useState("");
   
  
  async function handleSubmit(e) {
    e.preventDefault();
   try{
      const res = await LogIn({
        email,
        password, 
      });

      Setmessage(res.error || res.success);
    } catch (error) {
      console.error("Error occurred:", error);
      Setmessage(error.message || "Something went wrong");
    } }
    return(
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
    
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
     Login to Account
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input  onChange={(e) => Setemail(e.target.value)}
              value={email}
          type="email" 
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input  onChange={(e) => Setpassword(e.target.value)}
              value={password}
          type="password" 
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transform transition duration-400"
      >
        Submit
      </button>
    {message}
    </form>
  </div>

</div>

  );
}
  