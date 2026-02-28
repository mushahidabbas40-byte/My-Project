import Getsession from "@/authentication/session"
import Logoutpage from "../components/logout"
import Image from "next/image"
import ReadData from "../operations/read"
import DeleteData from "../components/delete"
import Link from "next/link"

export default async function homepage(){
    const Ticket = await Getsession()
    const data = await ReadData()
    console.log(data)
    return (
        <main>
            <div className="flex flex-row justify-between py-4 px-5 p-[30px] bg-yellow-400 items-center">
            <p className="font-bold text-[25px]">Homepage</p>

            <div className="flex flex-row gap-[100px]">
                <p className="font-bold">Service</p>
            <p className="font-bold">About</p>
            <p className="font-bold">Contact</p>
            </div>
            <Logoutpage/>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-[40px] px-5">
              {data.map((item) =>
               <div key={item.id} className="bg-yellow-500 flex flex-col justify-center items-center h-[350px] w-[350px] rounded-lg">
                <Image className="w-[200px] h-[200px] rounded-full mb-4 pt-2"
                height={1000}
                width={1000}
                 src={item.image} alt="" />
                <p className="text-[30px] text-black font-bold  p-2">{item.name}</p>
                <div className="flex flex-row gap-[50px] pb-3">
                <DeleteData id={item.id} />
                <Link href={`/Update/${item.id}`} className="bg-green-600 text-white font bold p-2 rounded-lg">Update</Link>
               
                </div>
                 </div>
            )}
            </div>
        </main>
    )
}