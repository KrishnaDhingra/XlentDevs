import React from 'react'
import { Heading2Secondary, DescriptionPrimary } from './text'
const SignUpForm = () => {
    return (
    <div className="grow flex flex-col gap-6">
        <div className="max-w-[400px] w-full"><Heading2Secondary text={'Sign up and start learning your prefered courses'}/></div>

        <form className="max-w-[450px] flex flex-col gap-[14px]">
            <input type="text" placeholder="Name" className="text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            <input type="text" placeholder="Email" className="text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            <input type="text" placeholder="Create Password" className="text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>

            <button type="submit" className="bg-primary-400 hover:bg-primary-500 rounded-md text-white py-[10px] font-medium">Sign up</button>
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 rounded-md text-white py-[10px] font-medium">Continue with google</button>

            <span className="mt-3 w-full text-center"><DescriptionPrimary text={'Already have account?'}/><a href="/login" className="ml-1 underline text-primary-600 text-[14px] hover:text-primary-700">Log in</a></span>
        </form>


    </div>
    )
}
export default SignUpForm