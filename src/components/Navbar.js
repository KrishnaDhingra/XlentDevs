import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import Logo from './logo'

const Navbar = () => {
    return (
        <nav className="bg-gray-50 flex justify-center px-6">
            <main className="py-3 flex max-w-[1350px] w-screen justify-between items-center">
                <section className="h-[70px] w-[70px]"><Logo/></section>
                <ul className="nav-links flex gap-8">
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
                <div className="w-[35px] flex sm:hidden flex-col gap-[4px]">
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                    <div className="w-full border-t-[4px] border-primary-600 rounded-full"></div>
                </div>
                <input type="text" className="max-w-[170px] lg:max-w-[250px] hidden md:inline w-full rounded-md py-[10px] px-5 bg-primary-100 text-sm text-secondary-300 font-medium outline-none placeholder:text-secondary-300 placeholder:text-sm placeholder:font-medium" placeholder="SEARCH" />
            </main>
        </nav>
    )
}
export default Navbar