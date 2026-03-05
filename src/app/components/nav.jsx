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
    <Link href="https://maps.apple.com/?address=Road%202403,%20Bahrain&auid=13423955028156078336&ll=26.269701,50.632903&lsp=9902&q=Bahrain%20International%20Airport&_ext=CjEKBAgEEAwKBAgFEAMKBAgGEAYKBAgKEAAKBAhSEAkKBAhVEAgKBAhZEAEKBQjBARABEiQphOv2/qtBOkAxM4IyMm1OSUA5g4WTNH9IOkBBwSeMHNhTSUA%3D">Services</Link>
   </div>
   <Link href="">Contact</Link>
   </nav>
     
        
        </main>
    )
}