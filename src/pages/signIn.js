import React from 'react'
import Logo from '../components/logo'
import SignUpAnimation from '../components/SignUpAnimation'
import SignInForm from '../components/SignInForm'
import { Heading1Primary, Heading1Secondary } from '../components/text'

const SignIn = () => {

    return (
        <main className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
            <div className="h-[100px] w-[100px] mb-5"><Logo/></div>
            <section className="flex gap-2">
                <Heading1Primary text={'Welcome back 👋'}/>
                <Heading1Secondary text={'Wishing you for great day'}/>
            </section>
            <section className="bg-primary-100 max-w-[1300px] rounded-lg w-screen h-[500px] py-10 px-16 flex gap-5">
                <SignInForm/>
                <SignUpAnimation/>
            </section>
        </main>
    )
}
export default SignIn