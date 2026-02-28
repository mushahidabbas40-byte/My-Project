import Image from "next/image";
import Link from "next/link";


export default function Navpage(){
    return (
        <main>
        <nav className="flex justify-between items-center px-4 py-5 bg-yellow-500">
             <h1 className="">MARKHOR</h1>
   <div className="flex gap-[150px]">
    <Link className="hover" href="homepage">Home</Link>
    <Link href="">about</Link>
    <Link href="">Services</Link>
   </div>
   <Link href="">Contact</Link>
   </nav>
     
        
        </main>
    )
}