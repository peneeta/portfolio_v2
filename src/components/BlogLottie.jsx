import Lottie from "lottie-react";
import blogLottieAnimation from "../lottiefiles/blogger_cat_lottie.json"

function BlogLottie() {
    return (
        <div className="max-w-xs sm:max-w-xs md:max-w-xs h-auto">
            <Lottie 
            animationData={blogLottieAnimation} />
        </div>
    )
}

export default BlogLottie