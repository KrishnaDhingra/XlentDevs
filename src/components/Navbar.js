import React, {useState} from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { Link } from 'react-router-dom'
import { authentication } from '../firebase';
import { signOut } from 'firebase/auth';
import { motion } from 'framer-motion'
import NavbarOpen from './NavbarVariants'
import Logo from './logo'

const Navbar = () => {
    const [visible, setVisible] = useState("0")

    const toggleNavbar = () => {
        visible == "0" ? setVisible("100vw") : setVisible("0")
    }
    return (
        <nav className="flex justify-center px-2 sm:px-4 md:px-6">
            <main className="py-3 flex max-w-[1350px] w-screen justify-between items-center">
                <Link to="/" className="h-[70px] w-[70px]"><Logo/></Link>
                <ul className="big-screen-nav-links flex gap-8">
                    <div className="flex gap-1 items-center navbar-links">
                        <AiFillHome className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/" className="text-secondary-300 text-[13px] font-medium">HOME</Link>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <BsFillPlayBtnFill className="text-secondary-300 text-[13px] font-medium"/>     
                        <Link to="/courses" className="text-secondary-300 text-[13px] font-medium">COURSES</Link>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <GoOrganization className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/projects" className="text-secondary-300 text-[13px] font-medium">PROJECTS</Link>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <RiMessage2Fill className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/feedback" className="text-secondary-300 text-[13px] font-medium">FEEDBACK</Link>
                    </div>
                </ul>
                <motion.ul 
                    variants={NavbarOpen(visible)}
                    initial="hidden"
                    animate="visible"
                    className="nav-links flex gap-8">
                    <div onClick={toggleNavbar} className="flex gap-1 items-center navbar-links">
                        <AiFillHome className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/" className="text-secondary-300 text-[13px] font-medium">HOME</Link>
                    </div>
                    <div onClick={toggleNavbar} className="flex gap-1 items-center navbar-links">
                        <BsFillPlayBtnFill className="text-secondary-300 text-[13px] font-medium"/>     
                        <Link to="/courses" className="text-secondary-300 text-[13px] font-medium">COURSES</Link>
                    </div>
                    <div onClick={toggleNavbar} className="flex gap-1 items-center navbar-links">
                        <GoOrganization className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/projects" className="text-secondary-300 text-[13px] font-medium">PROJECTS</Link>
                    </div>
                    <div onClick={toggleNavbar} className="flex gap-1 items-center navbar-links">
                        <RiMessage2Fill className="text-secondary-300 text-[13px] font-medium"/>
                        <Link to="/feedback" className="text-secondary-300 text-[13px] font-medium">FEEDBACK</Link>
                    </div>
                    <div 
                        onClick={toggleNavbar}
                        className="hamburger-close absolute top-[2.7rem] right-[1rem] w-[35px] flex sm:hidden flex-col">
                        <div className="absolute top-0 w-full border-t-[4px] border-primary-600 rounded-full"></div>
                        <div className="absolute top-0 w-full border-t-[4px] border-primary-600 rounded-full"></div>
                    </div>
                </motion.ul>
                <div 
                    onClick={() => toggleNavbar()}
                    className="w-[35px] flex sm:hidden flex-col gap-[4px]">
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                </div>
                <input type="text" className="max-w-[170px] lg:max-w-[250px] hidden md:inline w-full rounded-md py-[10px] px-5 bg-primary-100 text-sm text-secondary-300 font-medium outline-none placeholder:text-secondary-300 placeholder:text-sm placeholder:font-medium" placeholder="SEARCH" />
                {/* <span onClick={() => {
                    signOut(authentication).then(() => {
                        console.log("User signed out")
                      }).catch((error) => {
                        console.log(error.message)
                    });
                }}>Signout</span> */}
            </main>
        </nav>
    )
}
export default Navbar