import Lottie from "lottie-react";
import workingLottieAnimation from "../lottiefiles/working_lottie.json"

function WorkingLottie() {
    return (
        <div className="w-lg h-auto">
            <Lottie 
            animationData={workingLottieAnimation} />
        </div>
    )
}

export default WorkingLottie