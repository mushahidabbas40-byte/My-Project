"use server"
import prisma from "@/lib/db"
import{redirect} from "next/navigation"

 export default async function UpdateData({id,name,email,password,image}){
    const data =await prisma.User.update({
        where:{id},
        data:{
            name,
            email,
            password,
            image
        }
    })
    redirect("/homepage")
 }

 export async function SingleData(id){
    const data = await prisma.User.findUnique({
        where:{id}
    })
    return data;
 }
 