"use server"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export default async function Delete(id){
    const res = await prisma.User.delete({
        where:{id}
    })
     revalidatePath("/homepage")
}