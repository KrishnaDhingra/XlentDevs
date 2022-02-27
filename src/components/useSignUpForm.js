import React, { useState, useEffect } from 'react'

const useSignUpForm = () => {

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = () => {

    }
    return { handleSubmit, errors}
}
export default useSignUpForm