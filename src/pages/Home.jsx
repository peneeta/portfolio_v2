import ParticlesBackground from "../components/ParticlesBackground"
import portrait from "/assets/portrait.png";
import ProjectList from "../components/ProjectList";
import WorkingLottie from "../components/WorkingLottie";

function Home() {

    return (
        <>
            
            {/* Hero section with ParticlesJS background */}
            <div className="hero relative h-120 w-full flex flex-col items-center justify-center z-0">

                <ParticlesBackground/>

                <div className="about absolute flex flex-row justify-center items-center gap-8 bg-translucent-white rounded-3xl p-4">

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
                    <div className="desc flex flex-col justify-center items-start gap-1 p-4">
                        <h1 className="mb-4">Peneeta Wojcik</h1>
                        <h3 className="mb-3">📍 Pittsburgh, PA</h3>
                        <a href="https://github.com/peneeta">https://github.com/peneeta</a>
                        <a href="https://www.linkedin.com/in/peneeta/">https://www.linkedin.com/in/peneeta/</a>
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
                <div className="content mx-10 mt-26 mb-40 p-4 max-w-3xl">

                    <h2 className="text-center">About Me</h2>

                        <p>
                            I’m a M.S. student at Carnegie Mellon University studying Automated Science. Before that, I got my B.S. in Biomedical Engineering at the University of Virginia. 
                        </p>
                        
                        <p>
                            I’ve worked on many projects spanning synthetic biology as an iGEM team member to single cell RNA-seq analysis. I’ve also developed protocols for liquid handlers and a fully-integrated automated lab setup. I’m super excited about the trajectory of closed-loop laboratory automation and maximizing efficiency in the lab. (Seriously, who wants to be stuck pipetting for hours on end?)
                        </p>

                        <p>
                            In my free time I love to play guitar, read novels, explore Spotify’s most underrated artists, and work on small front-end projects like this one. Feel free to connect on LinkedIn :)
                        </p>

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
                    <h2 className="text-center">Tools I've worked with</h2>

                    <div className="list1">
                        <h3>Automation</h3>
                    </div>

                    <div className="list1">
                        <h3>Programming and Frameworks</h3>
                    </div>

                    <div className="list1">
                        <h3>Software/Packages</h3>
                    </div>
                </div>
            </div>

            {/* Short list of projects */}
            <div className="projects relative flex flex-col justify-center items-center">

                {/* Wave divider for the previous section */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
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


                <div className="content max-w-xl mx-20 mt-36 text-center">
                    <h2 className="text-center">Projects</h2>
                    <p >Here are some of the projects I've worked on over the years. For a full list, check out my LinkedIn!</p>
                </div>

                <ProjectList/>

            </div>

            {/* Lottie animation and final call-to-action */}
            <div className="final flex flex-col items-center justify-center">
                <div className="content relative">
                    <h2 className="text-center">Want to work together?</h2>
                    <p>Feel free to connect and message me on LinkedIn or send me an email!</p>
                    <WorkingLottie />
                </div>
            </div>
        </>
    )
}

export default Home