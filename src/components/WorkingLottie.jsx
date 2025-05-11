import Lottie from "lottie-react";
import workingLottieAnimation from "../../public/assets/working_lottie.json"

function WorkingLottie() {
    return (
        <div className="w-lg h-auto">
            <Lottie 
            animationData={workingLottieAnimation} />
        </div>
    )
}

export default WorkingLottie