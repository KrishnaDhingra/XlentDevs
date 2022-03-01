import React, { useState } from 'react'
import SignUpValidate from './SignUpValidate'
import useSignUpForm from './useSignUpForm'
import { Link } from 'react-router-dom'
import { Heading2Secondary, DescriptionPrimary } from './text'
const SignUpForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSubmit, errors } = useSignUpForm(SignUpValidate, name, email, password)

    return (
    <div className="grow flex flex-col gap-4">
        <div className="max-w-[400px] w-full"><Heading2Secondary text={'Sign up and start learning your prefered courses'}/></div>

        <form onSubmit={handleSubmit} className="max-w-[450px] flex flex-col gap-[12px]">
            <div>
                {errors.name && <p className="mb-1 text-red-500 text-xs">{errors.name}</p>}
                <input onChange={(e) => setName(e.target.value)}type="text" placeholder="Name" className="w-full text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>
            <div>
                {errors.email && <p className="mb-1 text-red-500 text-xs">{errors.email}</p>}
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-full text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>
            <div>
                {errors.password && <p className="mb-1 text-red-500 text-xs">{errors.password}</p>}
                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Create Password" className="w-full text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>

            <button type="submit" className="bg-primary-400 hover:bg-primary-500 rounded-md text-white py-[10px] font-medium">Sign up</button>
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 rounded-md text-white py-[10px] font-medium">Continue with google</button>

            <span className="mt-3 w-full text-center"><DescriptionPrimary text={'Already have account?'}/><Link to="/login" className="ml-1 underline text-primary-600 text-[14px] hover:text-primary-700">Log in</Link></span>
        </form>


    </div>
    )
}
export default SignUpForm