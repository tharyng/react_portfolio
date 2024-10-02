import { Icon } from "@iconify/react/dist/iconify.js"
import { FC } from "react"

interface ExperienceCardProps {
    title: string
    description: string 
    icon: string
    date: string
}

const ExperienceCard:FC<ExperienceCardProps> =({title,date,description,icon})=>{
    return (<div className="flex items-center p-6 rounded-lg bg-gradient-to-r from-slate-700 to-transparent">
        <Icon icon={icon} width={30} className="m-2"/>
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{description}</p>
        </div>
    </div>
    )
}
export default ExperienceCard