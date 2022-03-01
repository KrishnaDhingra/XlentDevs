import React from 'react'
import Logo from '../components/logo'
import SignUpAnimation from '../components/SignUpAnimation'
import SignUpForm from '../components/SignUpForm'
import { Heading1Primary, Heading1Secondary } from '../components/text'

const SignUp = () => {

    return (
        <main className="w-screen h-auto mt-16 flex flex-col gap-5 items-center justify-center px-2 sm:px-4 md:px-6">
            <div className="h-[100px] w-[100px] mb-3"><Logo/></div>
            <section className="flex gap-2">
                <Heading1Primary text={'Hello there 👋'}/>
                <Heading1Secondary text={'We are glad to have you'}/>
            </section>
            <section className="bg-primary-100 max-w-[1350px] rounded-lg w-full h-[500px] py-10 px-16 flex gap-5">
                <SignUpForm/>
                <SignUpAnimation/>
            </section>
        </main>
    )
}
export default SignUp