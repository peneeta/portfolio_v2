import Accordion from "./Accordion"; // accordion parent
import Projects from "./Projects"; // individual project component

// PROJECT JSON FILES
import ResearchProjects from "../data/homepage/research_projects.json";
import CourseProjects from "../data/homepage/course_projects.json";
import WebProjects from "../data/homepage/web_projects.json";

// Create a separate accordion for each category
function ProjectList(){

    return(
        <>

        <div className="w-5/6 max-w-2xl py-8 mb-20">
            <Accordion 
                title="Research"
                strokeColor={"border-dodger-blue"}
                fillColor={"bg-baby-blue"}>
                    
                    {ResearchProjects.map((p, ind) => (
                                        <Projects 
                                        key={ind}
                                        strokeColor={"border-dodger-blue"}
                                        project={p}
                                        />
                    ))}
            </Accordion>

            <Accordion 
                title="Course Projects"
                strokeColor={"border-dark-purple"}
                fillColor={"bg-baby-purple"}>

                    {CourseProjects.map((p, ind) => (
                                        <Projects 
                                        key={ind}
                                        strokeColor={"border-dark-purple"}
                                        project={p}
                                        />
                    ))}
            </Accordion>

            <Accordion 
                title="Web Apps"
                strokeColor={"border-tangerine"}
                fillColor={"bg-baby-orange"}
            >

                {WebProjects.map((p, ind) => (
                    <Projects 
                    key={ind}
                    strokeColor={"border-tangerine"}
                    project={p}
                    />
                ))}
            </Accordion>
        </div>

        
        </>
    )

}

export default ProjectList