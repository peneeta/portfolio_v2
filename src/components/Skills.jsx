import SkillSet from "./SkillSet"
import skillsData from "../data/homepage/skills.json" 

// Full skills section - child components are SkillSet components
function Skills() {
    return(
        <>
            <div className="flex flex-col justify-center items-center gap-3">
                {skillsData.map((s, ind) => (
                                            <SkillSet
                                            key={ind}
                                            skillItem={s}
                                            />
                        ))}
            </div>
        </>
    )
}

export default Skills