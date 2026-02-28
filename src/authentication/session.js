"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"


export default async function Getsession(){
    const cookieStore = await cookies();
    const cookie = cookieStore.get("auth");
    const Ticket = cookie?.value;
    const SECRET = "mykey"
    if(!Ticket){
        redirect("/login")
    }
    try{
        jwt.verify(Ticket, SECRET)
    } catch(error){
        redirect("/login")
    }
    return Ticket;
}