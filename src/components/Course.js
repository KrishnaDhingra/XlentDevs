import React from 'react'
import CourseImage from '../utilities/course-image.png'
import { DescriptionSecondary } from './text'
import { SecondaryButton1 } from './buttons'
const Course = () => {
    return (
        <section>
            <div className="w-[410px] m-8 bg-blue-700 rounded-2xl">
                <div className="relative w-full">
                    <img clasName="z-0" src={CourseImage} alt="" />
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
                    <button className="rounded bg-secondary-400 hover:bg-secondary-300 text-white mx-auto px-7 py-[10px] text-sm font-medium mb-7">Get Started</button>
                </div>
            </div>
        </section>
    )
}
export default Course