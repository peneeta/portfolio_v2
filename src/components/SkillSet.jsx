
// Single skill set component- renders title and the set of skills associated with it
function SkillSet({skillItem}) {

    return(
        <>
            <div className="flex flex-col justify-center items-center my-4 text-center">
                <h3>{skillItem.title}</h3>

                <div className="p-2 flex flex-row flex-wrap max-w-xl gap-2 justify-center items-center">

                    {skillItem.skills.map((skill, index) => (
                        <div key={index} className="text-sm rounded-full border border-dodger-blue bg-white py-1 px-2">
                            <p>{" " + skill}</p>
                            
                        </div>
                    ))}

                </div>
            </div>
        </>
    )

}

export default SkillSet