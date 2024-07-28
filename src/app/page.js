import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Chatpage from "@/components/chatpage";
export default function Home() {
  return ( 
    <>
    <div className="bg-midnight">
    <Navbar/> 
    <Hero/>
    {/* <br/>
    <br/> */}
    <section id="chat">
    <Chatpage/>
    </section>
    
    </div>
    </>
  )
}
