import ParticlesBackground from "../components/ParticlesBackground"
import portrait from "/assets/portrait.png";
import { Github, Linkedin, Mail } from 'lucide-react';

// Render text from external files for easier editing
import Markdown from "markdown-to-jsx";
import About from "../data/homepage/about.md?raw";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";

import WorkingLottie from "../components/WorkingLottie";

// HOMEPAGE PARENT CONTAINER
// Contains everything you see on the homepage
function Home() {

    return (
        <>
            {/* Hero section with ParticlesJS background */}
            <div className="hero relative min-h-screen md:min-h-screen lg:min-h-130 w-full flex flex-col items-center justify-center z-0">

                <ParticlesBackground/>

                <div className="about absolute flex md:flex-row flex-wrap justify-center items-center gap-3 bg-translucent-white rounded-3xl p-10">

                    {/* Portrait Image*/}
                    <div className="portrait w-42 z-10">
                        <img 
                            src={portrait} 
                            alt="Portrait" 
                            draggable="false" 
                            style={{ userSelect: "none", pointerEvents: "none" }}
                        />
                    </div>

                    {/* Header and links */}
                    <div className="desc flex flex-col flex-wrap justify-center items-center md:items-start gap-1 p-4">
                        <h1 className="mb-4 text-center md:text-left">Peneeta Wojcik</h1>

                        <a href="https://github.com/peneeta" target="_blank">

                            <div className="flex flex-row justify-center items-center gap-2">
                                <Github size={16}/> 
                                https://github.com/peneeta
                            </div>
            
                        </a>

                        <a href="https://www.linkedin.com/in/peneeta/" target="_blank"> 
                        
                            <div className="flex flex-row justify-center items-center gap-2">
                                <Linkedin size={16}/> 
                                https://www.linkedin.com/in/peneeta/
                            </div>
                        </a>

                        <a href="mailto:peneeta@cmu.edu"> 
                        
                            <div className="flex flex-row justify-center items-center gap-2">
                                <Mail size={16}/> 
                                peneeta@cmu.edu
                            </div>
                        </a>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[146px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
                                82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
                                906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
                                214.34,3V0H0V27.35A600.21,600.21,0,0,0,
                                321.39,56.44Z"
                            className="fill-white">
                        </path>
                    </svg>
                </div>
            </div>

            {/* About section */}
            <div className="about relative flex flex-col justify-center items-center">
                <div className="content mx-10 mt-26 mb-40 p-4 max-w-2xl">
                    <h2 className="text-center">About Me</h2>
                    <Markdown>{About}</Markdown>
                </div>

                {/* Wave divider light blue */}
                <div className="absolute mt-5 bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg className="relative block w-[calc(126%+1.3px)] h-[158px] -scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,
                                172-41.86,82.39-16.72,168.19-17.73,
                                250.45-.39C823.78,31,906.67,72,
                                985.66,92.83c70.05,18.48,146.53,26.09,
                                214.34,3V0H0V27.35A600.21,600.21,
                                0,0,0,321.39,56.44Z"
                            className="fill-barely-blue">
                        </path>
                    </svg>
                </div>
            </div>

            {/* Skills */}
            <div className="skills relative flex flex-col justify-center items-center bg-barely-blue">
                <div className="content mx-10 my-26 max-w-3xl">
                    <h2 className="text-center">Skills</h2>
                    <Skills/>
                </div>
            </div>

            {/* Short list of projects */}
            <div className="projects relative flex flex-col justify-center items-center">

                {/* Wave divider for the previous section */}
                <div className="absolute top-0 left-0 overflow-hidden leading-none w-full">
                    <svg className="relative block w-[calc(126%+1.3px)] h-[158px] -scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,
                                172-41.86,82.39-16.72,168.19-17.73,
                                250.45-.39C823.78,31,906.67,72,
                                985.66,92.83c70.05,18.48,146.53,26.09,
                                214.34,3V0H0V27.35A600.21,600.21,
                                0,0,0,321.39,56.44Z"
                            className="fill-barely-blue">
                        </path>
                    </svg>
                </div>


                <div className="content max-w-xl mx-10 mt-36 text-center">
                    <h2 className="text-center">Projects</h2>
                    <p >Here are some of the projects I've worked on over the years. For a full list, check out my LinkedIn!</p>
                </div>

                <ProjectList/>

            </div>

            {/* Lottie animation and final call-to-action */}
            <div className="final-section flex flex-col justify-center items-center mx-10">
                <div className="content max-w-sm text-center">
                    <h2>Want to work together?</h2>
                    <p>Feel free to connect and message me on LinkedIn or send me an email!</p>
                    <WorkingLottie />
                </div>
            </div>
        </>
    )
}

export default Home