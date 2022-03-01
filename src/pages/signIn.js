import React from 'react'
import Logo from '../components/logo'
import SignUpAnimation from '../components/SignUpAnimation'
import SignInForm from '../components/SignInForm'
import { Heading1Primary, Heading1Secondary } from '../components/text'

const SignIn = () => {

    return (
        <main className="w-screen h-auto mt-16 flex flex-col gap-5 items-center justify-center px-2 sm:px-4 md:px-6">
            <div className="h-[100px] w-[100px] mb-3"><Logo/></div>
            <section className="w-full items-center sm:justify-center flex flex-col sm:flex-row gap-0 sm:gap-2">
                <Heading1Primary text={'Welcome back 👋'}/>
                <Heading1Secondary text={'Wishing you for great day'}/>
            </section>
            <section className="bg-primary-100 max-w-[1350px] rounded-lg w-full h-auto md:h-[500px] py-10 px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row gap-5">
                <SignInForm/>
                <SignUpAnimation/>
            </section>
        </main>
    )
}
export default SignIn