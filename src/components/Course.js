import React from 'react'
import CourseImage from '../utilities/course-image.png'
import { DescriptionSecondary } from './text'
const Course = () => {
    return (
        <section>
            <div className="w-full rounded-2xl">
                <div className="relative w-full">
                    <img className="w-full" src={CourseImage} alt="" />
                    <PopularFlag/>
                    <span className="z-1 absolute left-3 bottom-3 text-white text-[18px] font-semibold">Andriod Development</span>
                </div>
                <div className="flex flex-col gap-3 bg-primary-100 rounded-b-2xl w-full h-auto px-4 py-3">
                    <div className="flex flex-col">
                        <span className="text-primary-600 text-[14px] font-bold">SKILLS COVERED:</span>
                        <DescriptionSecondary text={"Java, Flutter and Andriod Studio"}/> 
                    </div>
                    <div className="flex flex-col">
                        <span className="text-primary-600 text-[14px] font-bold">PREQUISITES:</span>
                        <DescriptionSecondary text={"Basic knowledge of Andriod"}/> 
                    </div>
                    <button className="mt-4 rounded bg-secondary-400 hover:bg-secondary-300 text-white mx-auto px-7 py-[10px] text-sm font-medium mb-7">Get Started</button>
                </div>
            </div>
        </section>
    )
}

const PopularFlag = () => {
    return (
        <div className="flag-container absolute py-[2px] text-center px-3 right-0 top-5 w-[140px] bg-[#AD00FF]">
            <span className="popular-text m-0 p-0 text-white text-[14px] font-semibold">POPULAR</span> 
            <div className="popular-arrow-right"></div>
        </div>
    )
}
export default Course