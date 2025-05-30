import DogLottie from "../components/DogLottie"
import PostPreview from "../components/PostPreview"

// Entries
import Entries from "../data/posts/entries.json"

// MAIN BLOG PARENT CONTAINER
// Contains everything you see on the Blog page
function Blog() {

    return(
        <>
            {/* Hero/Header section */}
            <div className="hero relative h-120 w-full flex flex-col gap-2 justify-center items-center bg-baby-blue">
                <div className="text-center mx-10 max-w-lg">
                    <h1>Blog</h1>
                    <p>Insights and rambling about things that interest me :3</p>
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

            {/* Short description */}
            <div className="body-section flex flex-col justify-center items-center mt-40 mb-20 mx-10">
                <div className="max-w-xl text-center">
                    <p>I find that I have a large number of interests and documenting them helps me keep track of them better. Here are a few entries I’ve written about hobbies, work, productivity, you name it.</p>
                </div>
            </div>

            {/* Post Previews */}
            <div className="post-preview-section mb-20 flex flex-col gap-1 justify-center items-center">
                {Entries.map((e, ind) => (
                    <PostPreview key={ind} post={e} />
                ))}
            </div>

            {/* ENDING */}
            <div className="end-section flex flex-col justify-center items-center">
                <p>More on the way!</p>
                <DogLottie/>
            </div>
        </>
    )
}

export default Blog