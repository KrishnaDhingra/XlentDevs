import React from 'react'
import Course from '../components/Course'
const Courses = () => {
    return (
        <div className="mt-16 px-6 bg-gray-50 mx-auto max-w-[1350px] w-screen flex flex-col gap-5">
            <span className="text-primary-700 text-[28px] font-bold">Courses</span>
            <div className="courses-thumbnail-container mb-7 w-full gap-7">
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
            </div>
        </div>
    )
}
export default Courses