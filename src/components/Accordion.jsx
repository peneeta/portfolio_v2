import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react";


// Take in the title, stroke and fill color for modularity
function Accordion({title, strokeColor, fillColor, children}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`w-full rounded-full mb-4 border ${strokeColor} ${fillColor}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full relative flex items-center justify-center p-2 font-medium"
                >
                    <h3 className="text-center">{title}</h3>
                    <span className="absolute right-4">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                </button>
            </div>
            {isOpen && (
                    <div className="p-4 space-y-4">
                        {children}
                    </div>
            )}
        </>

    );
}

export default Accordion


//             <div className={`transition-all duration-300 ease-in-out overflow-hidden 
// ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
// {items}
// </div>