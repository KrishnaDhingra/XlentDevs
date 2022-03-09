import React from 'react'
import HeroImage from '../utilities/hero-image.png'
import { Heading2Secondary } from '../components/text'
import { FiGlobe } from 'react-icons/fi'
import { RiPencilRuler2Line } from 'react-icons/ri'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import Lottie from 'react-lottie'
import HomePageProvideImage from '../utilities/home-page-provide-image.json'

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: HomePageProvideImage,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <main className="home-container mt-16 px-2 sm:px-4 md:px-6 mx-auto max-w-[1350px] w-screen h-auto flex flex-col gap-5">
            
            <section className="text-center flex flex-col items-center gap-5 w-full">

                <span className="text-center text-secondary-200 text-[24px] font-semibold">Hey Folks 👋</span>
                <div className="text-center">    
                    <span className="text-6xl font-semibold">Welcome to</span>
                    <span className="ml-4 text-8xl font-bold gradient-text">Xlent Learn</span>
                </div>
                <span className="mt-2 max-w-[770px] w-full text-center text-secondary-300 text-[18px] font-semibold">We have <b>Courses</b> crafted from Most Liked Videos, Popular <b>Projects</b> for practice, And a <b>Engaging</b> <b>Community</b> to provide the best learning experience.</span> 

            </section>

            <img className="home-image shadow-2xl max-w-[1100px] w-full mt-20 mx-auto" src={HeroImage} alt="Hero Image" />

            <section className="mt-44 flex justify-between">
                <div className="w-full flex grow flex-col gap-12">
                    <div>
                        <span className="text-4xl font-semibold">What we provide at</span>
                        <span className="ml-3 text-5xl font-bold gradient-text">Xlent Learn</span>   
                    </div>
                    <div className="flex flex-col gap-5">

                        <span className="flex gap-3 items-center"><AiOutlineYoutube className="text-2xl text-secondary-300"/><Heading2Secondary text={"Course Crafted from Most Like Videos"}/></span>

                        <span className="flex gap-3 items-center"><RiPencilRuler2Line className="text-2xl text-secondary-300"/><Heading2Secondary text={"Collection of Projects"}/></span>

                        <span className="flex gap-3 items-center"><AiOutlineStar className="text-2xl text-secondary-300"/><Heading2Secondary text={"Quality content sorted by Developers"}/></span>

                        <span className="flex gap-3 items-center"><FiGlobe className="text-2xl text-secondary-300"/><Heading2Secondary text={"Community Support"}/></span>

                    </div>

                </div>

                <div className="w-full grow"><Lottie options={defaultOptions}/></div>
            </section>
        </main>
    )
}
export default Home