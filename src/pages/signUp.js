import React from 'react'
import Logo from '../components/logo'
import SignUpAnimation from '../components/SignUpAnimation'
import SignUpForm from '../components/SignUpForm'
import { Heading1Primary, Heading1Secondary } from '../components/text'

const SignUp = () => {

    return (
        <main className="w-screen h-auto mt-16 flex flex-col gap-5 items-center justify-center px-2 sm:px-4 md:px-6">
            <section className="w-full items-center sm:justify-center flex flex-col sm:flex-row gap-0 sm:gap-2">
                <Heading1Primary text={'Hello there 👋'}/>
                <Heading1Secondary text={'We are glad to have you'}/>
            </section>
            <section className="bg-primary-100 max-w-[1350px] rounded-lg w-full h-auto md:h-[500px] py-10 px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row gap-5">
                <SignUpForm/>
                <SignUpAnimation/>
            </section>
        </main>
    )
}
export default SignUp