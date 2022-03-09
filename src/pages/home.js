import React from 'react'
import HeroImage from '../utilities/hero-image.png'
const Home = () => {
    return (
        <main className="home-container mt-16 px-2 sm:px-4 md:px-6 mx-auto max-w-[1350px] w-screen h-auto flex flex-col gap-5">
            
            <section className="text-center flex flex-col items-center gap-5 w-full">

                <span className="text-center text-secondary-200 text-[24px] font-semibold">Hey Folks 👋</span>
                <div className="text-center">    
                    <span className="text-5xl font-semibold">Welcome to</span><span className="ml-4 text-7xl font-bold gradient-text">Xlent Learn</span>
                </div>
                <span className="mt-2 max-w-[770px] w-full text-center text-secondary-300 text-[18px] font-semibold">We have <b>Courses</b> crafted from Most Liked Videos, Popular <b>Projects</b> for practice, And a <b>Engaging</b> <b>Community</b> to provide the best learning experience.</span> 

            </section>

            <img className="home-image shadow-2xl max-w-[1100px] w-full mt-20 mx-auto" src={HeroImage} alt="Hero Image" />
        </main>
    )
}
export default Home