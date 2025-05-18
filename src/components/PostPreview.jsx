import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Component for preview of a blog post
// Parent component is a link that takes user to the actual post
function PostPreview({post}) {

    // Stuff for the dynamic tooltip
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();

        setCursorPos({ 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
        });
    };

    // Stuff for routing to the blog posts
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${post.slug}`);
      };

    return (
        <>
            <div
            onClick={handleClick}
            className="relative p-4 max-w-2xl transition-all duration-100 ease-in-out hover:bg-baby-blue hover:border-l-2 hover:border-dodger-blue hover:rounded-r-2xl"
            ref={containerRef}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            onMouseMove={handleMouseMove}>

                {/* Main component styling */}
                <div className="content">
                    <h2 className="mb-2">{post.title}</h2>
                    <h3>{post.date}</h3>
                    <p>{post.description}</p>

                    <div className="tags-section flex flex-row flex-wrap">
                        {post.tags.map((t, index) => (
                            <div key={index} className="my-2 px-2 py-1 rounded-full border border-dodger-blue text-sm">
                                <p>{t}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tooltip */}
                {tooltipVisible && (
                    <div
                        className="absolute pointer-events-none min-w-max text-sm px-3 py-1 w-fit bg-white rounded-full shadow-lg transition-opacity duration-200 ease-in-out"
                        style={{
                        top: cursorPos.y+15,
                        left: cursorPos.x+15,
                        zIndex: 1000,
                        }}
                    >
                        <p>Read Post</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default PostPreview