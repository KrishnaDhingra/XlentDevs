import React, { useState, useEffect } from 'react'

const useFeedbackForm = (validate, name, email, feedback) => {

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        let values = {
            name: name,
            email: email,
            feedback: feedback

        }
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            console.log("Everything is good")
        }
    }, [errors])
    return { handleSubmit, errors}
}
export default useFeedbackForm