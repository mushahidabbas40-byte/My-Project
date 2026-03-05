"use client"

import CreateData from "@/authentication/sign";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

 
 export default function Signupage(){
   const [image, Setimage] = useState("");
    const [name,Setname]=useState ("");
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState("");
   const [message, Setmessage] = useState("");
   const router = useRouter()


  async function handleSubmit(e) {
    e.preventDefault();
    if (!image) {
      Setmessage("Please select an image file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "mushahid456"); 
      formData.append("cloud_name", "dvxxdyczd");  

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dvxxdyczd/image/upload",
        { method: "POST", body: formData }
      );
      const result = await response.json();

      if (!result.secure_url) {
        Setmessage("Image upload failed");
        return;
      }
      const res = await CreateData({
        name,
        email,
        password,
        image: result.secure_url, 
      });
      router.push("/login")
      Setmessage(res.error || res.success);
      
      Setimage(null);
    } catch (error) {
      console.error("Error occurred:", error);
      Setmessage(error.message || "Something went wrong");
    } }
    return(
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
    
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
      Register Form
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label className="block text-gray-700 font-medium mb-1">Upload File</label>
        <input  onChange={(e) => Setimage(e.target.files[0])}
          type="file"
          className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 
                 file:rounded-lg file:border-0 
                 file:text-sm file:font-semibold 
                 file:bg-blue-100 file:text-blue-700 
                 hover:file:bg-blue-200
                 border border-gray-300 rounded-lg cursor-pointer"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input  onChange={(e) => Setname(e.target.value)}
              value={name}
          type="text" 
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>
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
    <p>if already have an account ? <Link className="text-blue-600" href="/login">Login Account</Link></p>
  </div>

</div>

  );
}
  