import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import Logo from './logo'

const Navbar = () => {
    return (
        <nav className="bg-gray-100 flex justify-center">
            <main className="py-2 flex max-w-[1350px] w-screen justify-between items-center">
                <section className="h-[60px] w-[60px]"><Logo/></section>
                <ul className="flex gap-8">
                    <div className="flex gap-1 items-center navbar-links">
                        <AiFillHome className="text-secondary-300 text-[13px] font-medium"/>
                        <li className="text-secondary-300 text-[13px] font-medium">HOME</li>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <BsFillPlayBtnFill className="text-secondary-300 text-[13px] font-medium"/>     
                        <li className="text-secondary-300 text-[13px] font-medium">COURSES</li>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <GoOrganization className="text-secondary-300 text-[13px] font-medium"/>
                        <li className="text-secondary-300 text-[13px] font-medium">PROJECTS</li>
                    </div>
                    <div className="flex gap-1 items-center navbar-links">
                        <RiMessage2Fill className="text-secondary-300 text-[13px] font-medium"/>
                        <li className="text-secondary-300 text-[13px] font-medium">FEEDBACK</li>
                    </div>
                </ul>
                <input type="text" className="max-w-[250px] w-full rounded-md py-[10px] px-5 bg-primary-100 text-sm text-secondary-300 font-medium outline-none placeholder:text-secondary-300 placeholder:text-sm placeholder:font-medium" placeholder="SEARCH" />
            </main>
        </nav>
    )
}
export default Navbar