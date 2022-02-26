import React from 'react'
import Logo from '../components/logo'
import { Heading1Primary, Heading1Secondary, Heading2Secondary, DescriptionPrimary } from './text'

const SignUpContainer = () => {
    return (
        <main className="w-screen h-screen flex flex-col gap-5 bg-gray-200 items-center justify-center">
            <Logo/>
            <section className="flex gap-2">
                <Heading1Primary text={'Hello there 👋'}/>
                <Heading1Secondary text={'We are glad to have you'}/>
            </section>
            <section className="bg-primary-100 max-w-[1300px] rounded-lg w-screen h-[500px] py-10 px-16 flex gap-5">
                <div className="grow flex flex-col gap-5">
                    <div className="max-w-[400px] w-full"><Heading2Secondary text={'Sign up and start learning your prefered courses'}/></div>

                    <form className="max-w-[450px] flex flex-col gap-[12px]">
                        <input type="text" placeholder="Name" className="rounded-md px-3 py-[10px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
                        <input type="text" placeholder="Email" className="rounded-md px-3 py-[10px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
                        <input type="text" placeholder="Create Password" className="rounded-md px-3 py-[10px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>

                        <button type="submit" className="bg-primary-400 rounded-md text-white py-[10px] font-medium">Sign up</button>
                        <button type="submit" className="bg-primary-600 rounded-md text-white py-[10px] font-medium">Continue with google</button>

                        <span className="w-full text-center"><DescriptionPrimary text={'Already have account?'}/><a href="/login" className="ml-1 underline text-primary-600 text-[14px] hover:text-primary-700">Log in</a></span>
                    </form>


                </div>
                <div className="bg-primary-200 grow">
                    <Heading2Secondary text={'Sign up and start learning your prefered courses'}/>
                </div>
            </section>
        </main>
    )
}
export default SignUpContainer