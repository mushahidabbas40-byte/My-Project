"use server";
import prisma from "@/lib/db";

export default async function CreateData({ name,email,password, image }) {
  if (!name ||!email||!password || !image) {
    return { error: "Please fill all the credentials" };
  }

  try {
    await prisma.User.create({
      data: {
        name,
        email,
        password,
        image,
      },
    });

    return { success: "Successfully registered" };
  } catch (error) {
    console.error("Something went wrong:", error);
    return { error: "Sorry for the inconvenience" };
  }
}