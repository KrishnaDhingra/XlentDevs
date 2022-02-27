import React, { useState, useEffect } from 'react'

const useSignIpForm = (validate, email, password) => {

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        let values = {
            email: email,
            password: password

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
export default useSignIpForm