import React from 'react'
import FeedbackAnimation from '../components/FeedbackAnimation'
import FeedbackForm from '../components/FeedbackForm'

const Feedback = () => {

    return (
        <main className="mt-16 px-2 sm:px-4 md:px-6 mx-auto max-w-[1350px] w-screen h-auto flex flex-col gap-5">
            <span className="text-primary-700 text-[28px] font-bold">Feedback</span>
            <section className="bg-primary-100 max-w-[1300px] rounded-lg w-screen h-[500px] py-10 px-16 flex gap-5">
                <FeedbackForm/>
                <FeedbackAnimation/>
            </section>
        </main>
    )
}
export default Feedback