import React, { useState } from 'react'
import FeedbackValidate from './FeedbackValidate'
import useFeedbackForm from './useFeedbackForm'
import { Heading2Primary } from './text'
const SignUpForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSubmit, errors } = useFeedbackForm(FeedbackValidate, name, email, password)

    return (
    <div className="grow flex flex-col gap-4">
        <div className="max-w-[400px] w-full">
            <Heading2Primary text={'Tell us about your Experience'}/>
            <br/>
            <Heading2Primary text={'We love to hear you ❤️'}/>
        </div>

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
                {errors.feedback && <p className="mb-1 text-red-500 text-xs">{errors.feedback}</p>}
                <textarea rows='4' onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Write your feedback" className="w-full min-h-[45px] max-h-[10rem] text-sm rounded-md px-3 py-[12px] placeholder:text-gray-400 placeholder:text-[13px] outline-none"/>
            </div>

            <button type="submit" className="bg-primary-400 hover:bg-primary-500 w-[10rem] rounded-md text-white py-[10px] font-medium">Submit</button>
        </form>


    </div>
    )
}
export default SignUpForm