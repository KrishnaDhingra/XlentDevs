import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { authentication } from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { updateProfile } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'
import { useHistory } from "react-router-dom";

const useSignUpForm = (validate, name, email, password) => {

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        let values = {
            name: name,
            email: email,
            password: password

        }
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            createUserWithEmailAndPassword(authentication, email, password)
            .then(credential => {
                console.log(credential.user)
                history.push('/')
            })
            .catch(error => {
              console.log(error.message)
            })
        }
    }, [errors])
    return { handleSubmit, errors}
}
export default useSignUpForm