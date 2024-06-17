
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/Floatingnavbar";
import { CgYoutube } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { MdDeveloperMode, MdOutlineWorkOutline } from "react-icons/md";

export default function Home() {

  const navItems = [
    { name: "About",icon:<IoIosContact className="text-2xl"/>, link: "#about" },
    { name: "Projects",icon:<MdDeveloperMode className="text-2xl"/>, link: "#projects" },
    { name: "Experience",icon:<MdOutlineWorkOutline className="text-2xl"/>, link: "#experience" },
    { name: "YouTube", icon:<CgYoutube className="text-2xl"/>,link: "#youtube" },
    { name: "Contact",icon: <HiOutlineMail className="text-2xl"/>, link: "#contact" },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <Projects/>
        <Experience/>
        <Footer/>
      </div>
    </main>
  );
}
