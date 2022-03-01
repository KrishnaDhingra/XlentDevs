import React, { useState } from 'react'
import SignInValidate from './SignInValidate'
import useSignInForm from './useSignInForm'
import { Heading2Secondary, DescriptionPrimary } from './text'
import { Link } from 'react-router-dom'
const SignUpForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSubmit, errors } = useSignInForm(SignInValidate, email, password)

    return (
    <div className="w-full grow flex flex-col gap-8">
        <div className="max-w-[400px] w-full"><Heading2Secondary text={'Log in and resume learning your prefered courses'}/></div>

        <form onSubmit={handleSubmit} className="max-w-[550px] md:max-w-[450px] w-full flex flex-col gap-[12px]">
            <div>
                {errors.email && <p className="mb-1 text-red-500 text-xs">{errors.email}</p>}
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-full text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>
            <div>
                {errors.password && <p className="mb-1 text-red-500 text-xs">{errors.password}</p>}
                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Create Password" className="w-full text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>

            <button type="submit" className="bg-primary-400 hover:bg-primary-500 rounded-md text-white py-[10px] font-medium">Log In</button>
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 rounded-md text-white py-[10px] font-medium">Continue with google</button>

            <span className="mt-5 w-full text-center"><DescriptionPrimary text={"Don't have an account?"}/><Link to="/signup"><a className="ml-1 underline text-primary-600 text-[14px] hover:text-primary-700">Sign up</a></Link></span>
        </form>


    </div>
    )
}
export default SignUpForm