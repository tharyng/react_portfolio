import ExperienceCard from "./ExperienceCard"
import experienceData from '@/app/data/experienceData.json'

const Experience =()=>{
    return <div>
        <h1>Experience</h1>
        <div className="flex border-2">
            ikoner
        </div>
        <div className='border-2 flex flex-col gap-4 justify-around'>
            {experienceData.map((career, index) => (
                <ExperienceCard {...career}/>
            ))}
            </div>
    </div>
}
export default Experience