import React from 'react'
import Lottie from 'react-lottie'
import SignUpAnimationAsset from '../utilities/sign-up-animation.json'

const SignUpAnimation = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: SignUpAnimationAsset,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="grow"><Lottie options={defaultOptions}/></div>
    )
}
export default SignUpAnimation

