import ParticlesBackground from "../components/ParticlesBackground"
import portrait from "/assets/portrait.png";

function Home() {

    return (
        <>
            <ParticlesBackground/>

            <div className="home flex flex-col items-center justify-center h-screen z-10">
                <div className="about flex flex-row justify-center items-start gap-10 bg-translucent-white rounded-md py-12">
                    <div className="portrait w-3xs z-10">
                        <img 
                            src={portrait} 
                            alt="Portrait" 
                            draggable="false" 
                            style={{ userSelect: "none", pointerEvents: "none" }}
                        />
                    </div>

                    <div className="desc  max-w-1/2">
                        <h1 className="text-6xl mb-8">Hi, it's nice to meet you!</h1>

                        <div className="flex flex-col justify-center gap-4 text-s">
                            <p>My name is Peneeta and I’m a M.S. student at Carnegie Mellon University studying Automated Science. Before that, I got my B.S. in Biomedical Engineering at the University of Virginia. </p>

                            <p>I have been involved in many facets of biology from synthetic biology as an iGEM team member to single cell RNA-seq analysis.</p>

                            <p>I’ve also developed protocols for liquid handlers and a fully-integrated automated lab setup. I’m super excited about the trajectory of closed-loop laboratory automation and highly passionate about maximizing efficiency in the lab. (Seriously, who wants to be stuck pipetting for hours on end?)</p>

                            <p>In my free time I love to play guitar, explore Spotify’s most underrated artists, and work on small front-end projects like this one. Feel free to connect on LinkedIn :)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home