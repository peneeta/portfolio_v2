import Lottie from "lottie-react";
import dogLottieAnimation from "../lottiefiles/cute_dog_lottie.json"

function DogLottie() {
    return (
        <div className="w-xs h-auto">
            <Lottie 
            animationData={dogLottieAnimation} />
        </div>
    )
}

export default DogLottie