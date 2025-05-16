
// Create a component for a project to be shown in the dropdown menu
// This component is a subcomponent of ProjectList.jsx
function Projects({strokeColor, project}) {

    return(
        <>
            <div className={`border ${strokeColor} bg-off-white p-4 rounded-lg`}>
                <h3 className="mb-1">{project.title}</h3>
                <p className="date mb-4">{project.date}</p>

                <p className="my-5">{project.description}</p>

                <div className="skills flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                        <span key={index} className="text-xs rounded">
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Render the link only if there is a link in the JSON file */}
                {project.link && (
                    <div className="links">
                        <a href={project.link} 
                        target="_blank">🔗 {project.link}</a>
                    </div>
                )}


            </div>
        </>
    )
}

export default Projects