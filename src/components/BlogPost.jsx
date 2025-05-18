import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Preload all blog posts (vite needs all of them loaded)
const markdownFiles = import.meta.glob('../data/posts/*.md', {
    query: '?raw',
    import: 'default',
  });

function BlogPost(){
    // Render each blog post using its custom slug
    const { slug } = useParams();
    const [content, setContent] = useState('');

    // Load the blog post
    useEffect(() => {
        const path = `../data/posts/${slug}.md`;
    
        if (markdownFiles[path]) {
          markdownFiles[path]().then(setContent);
        }
    }, [slug]);

    return(
        <>
            <div className="p-6 h-screen flex justify-center items-center max-w-3xl space-y-4 text-base leading-relaxed">
                {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown> */}
                <h2>Post Coming Soon</h2>
            </div>
        </>
    )
}

export default BlogPost