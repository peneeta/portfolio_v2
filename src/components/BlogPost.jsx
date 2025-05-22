import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import BlogLottie from "./BlogLottie";

// NOTE: to get the blog posts to render in Vite, add this to vite.config.js
// assetsInclude: ['**/*.md']

// Import all posts as a glob (needed for Vite)
const allPosts = import.meta.glob('../data/posts/*.md', { query: '?raw', import: 'default' });

function BlogPost(){
    // Render each blog post using its custom slug
    const { slug } = useParams();
    const [post, setPost] = useState('');

    // useEffect hook for rendering the markdown posts
    useEffect(() => {
        const LoadPostMarkdown = async () => {

            // Get current post using slug
            const currPostPath = `../data/posts/${slug}.md`;
            
            // Dynamically import the markdown file
            const md = await allPosts[currPostPath]();
            setPost(md)
        };

        LoadPostMarkdown();
    }, [slug])

    // Helper for user to navigate back to blogs
    const navigate = useNavigate();
    const BackToBlogs = () => {
        navigate("/blog");
    }

    return(
        <>
            <div className="p-5 mt-30 flex flex-col justify-center items-center">
                <div className="md-section max-w-8/12">
                    <Markdown>{post}</Markdown>
                </div>

                <BlogLottie/>

                <div 
                onClick={BackToBlogs}
                className="px-4 py-1 border rounded-full border-dodger-blue cursor-pointer hover:bg-baby-blue hover:text-dodger-blue transition-all ease-in-out">
                    <p>Back to Blogs</p>
                </div>


            </div>
        </>
    )
}

export default BlogPost


