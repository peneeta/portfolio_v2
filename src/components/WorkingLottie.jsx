import Lottie from "lottie-react";
import workingLottieAnimation from "../lottiefiles/working_lottie.json"

function WorkingLottie() {
    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md h-auto">
            <Lottie 
            animationData={workingLottieAnimation} />
        </div>
    )
}

export default WorkingLottie