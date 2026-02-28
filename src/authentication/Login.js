"use server"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function LogIn({email,password}){
    if(!email || !password){
        return {error:"fill all the fields"}
    }
    const user = await prisma.User.findUnique({
        where:{email}
    })
    if(!user){
        return {error:"user is not found"}
    }
    if(user.password !== password){
        return {error:"wrong password"}
    }
     const SECRET = "mykey"
     const Ticket = jwt.sign(
        {id:user.id, email:user.email},
        SECRET,
        {expiresIn:"1d"}
     )
     cookies().set("auth",Ticket,{
        httpOnly:true,
        secure:true,
        path:"/"
      })
    redirect("/homepage")
}